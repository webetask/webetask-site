import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Very small in-memory rate limit: 5 messages per IP every 10 minutes.
// Enough for one server process. Resets when the app restarts.
// ---------------------------------------------------------------------------
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // keep memory bounded
  return recent.length > MAX_PER_WINDOW;
}

const TEAM_SIZES = ["Just me", "2 to 3", "4 to 10", "11 to 30", "31 to 50", "More than 50"];
const TOPICS = ["Plans and pricing", "Custom setup", "Something isn't working", "Billing", "Something else"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Clean = { name: string; email: string; teamSize: string; topic: string; message: string };

function clean(input: unknown): Clean | string {
  if (!input || typeof input !== "object") return "Please fill in the form.";
  const b = input as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  // No line breaks or control characters in single-line fields (email header safety)
  const name = str(b.name).replace(/[\u0000-\u001f\u007f]+/g, " ").trim();
  const email = str(b.email).toLowerCase();
  const message = str(b.message);
  const teamSize = TEAM_SIZES.includes(str(b.teamSize)) ? str(b.teamSize) : "Not given";
  const topic = TOPICS.includes(str(b.topic)) ? str(b.topic) : "Something else";

  if (!name || name.length > 120) return "Please add your name.";
  if (!EMAIL_RE.test(email) || email.length > 200) return "Please check your email address.";
  if (message.length < 10) return "Please write a little more in your message.";
  if (message.length > 5000) return "Your message is too long. Please keep it under 5,000 characters.";
  return { name, email, teamSize, topic, message };
}

async function saveToSupabase(m: Clean, ip: string): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Supabase is not configured");
  const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/contact_messages`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: m.name,
      email: m.email,
      team_size: m.teamSize,
      topic: m.topic,
      message: m.message,
      ip,
    }),
  });
  if (!res.ok) throw new Error(`Supabase insert failed: ${res.status} ${await res.text()}`);
}

async function sendEmail(m: Clean): Promise<void> {
  const host = process.env.SMTP_HOST;
  if (!host || !process.env.SMTP_USER || !process.env.SMTP_PASS) throw new Error("SMTP is not configured");
  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  const to = process.env.CONTACT_TO || "support@webetask.app";
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  await transporter.sendMail({
    from,
    to,
    replyTo: { name: m.name, address: m.email },
    subject: `Website: ${m.topic} from ${m.name}`,
    text: [
      `Name: ${m.name}`,
      `Email: ${m.email}`,
      `Team size: ${m.teamSize}`,
      `Topic: ${m.topic}`,
      "",
      m.message,
      "",
      "Sent from the contact form on webetask.app. Reply to this email to answer.",
    ].join("\n"),
  });
}

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please wait a few minutes and try again." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Please fill in the form." }, { status: 400 });
  }

  // Spam trap: bots fill the hidden "company" field. Pretend it worked.
  if (body && typeof body === "object" && typeof (body as Record<string, unknown>).company === "string" && (body as Record<string, string>).company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const m = clean(body);
  if (typeof m === "string") return NextResponse.json({ error: m }, { status: 400 });

  // Save and email at the same time. Succeed if at least one worked,
  // so a mail-server hiccup never loses a message.
  const [saved, emailed] = await Promise.allSettled([saveToSupabase(m, ip), sendEmail(m)]);
  if (saved.status === "rejected") console.error("[contact] save failed:", saved.reason);
  if (emailed.status === "rejected") console.error("[contact] email failed:", emailed.reason);

  if (saved.status === "rejected" && emailed.status === "rejected") {
    return NextResponse.json({ error: "We couldn't send your message right now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
