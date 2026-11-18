import { BigCta, JsonLd } from "@/components/Bits";
import { Folder } from "@/components/Icons";
import { FilesBand } from "@/components/Sections";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { cssVar } from "@/lib/css";

export const metadata = pageMeta({
  title: "Features: boards, auto-assign, client approvals, AI and unlimited files | Webetask",
  description:
    "Kanban, List, Calendar, Table and Timeline views, custom columns and fields, auto-assign by column, client approvals, an AI assistant that knows each client's brand, Claude and ChatGPT connectors, and unlimited files through Google Drive.",
  path: "/features",
});

const JUMP = [
  ["views", "Views"],
  ["workflow", "Custom workflows"],
  ["auto", "Auto-assign"],
  ["files", "Files"],
  ["alerts", "Notifications"],
  ["guests", "Client approvals"],
  ["ai", "AI assistant"],
  ["connect", "Claude and ChatGPT"],
  ["essentials", "Essentials"],
];

const ALERTS: [string, boolean, boolean, string | null][] = [
  ["You're assigned a task", true, true, "✓"],
  ["Someone @mentions you", true, true, "✓"],
  ["A comment on your task", true, true, null],
  ["A card moves into your column", true, true, null],
  ["Due tomorrow", true, true, "Daily digest"],
  ["Overdue", true, true, "Daily digest"],
];

const AI_TOOLS = ["Write caption", "Hashtags and hooks", "Brief from the idea", "Rewrite", "Translate", "Summarise comments", "Checklist steps"];

const CONNECT_ASKS = [
  ["You", "What's due this week for Northwind Dental?"],
  ["Claude", "3 cards: Braces FAQ carousel (Design, Nov 6), Check-up reminder post (Approval, Nov 8), Clinic tour reel (Nov 18)."],
  ["You", "Move the carousel to Client approval."],
  ["Claude", "Moving #41 to Client approval. Allow?"],
];

const ESSENTIALS = [
  ["My Tasks", "Everything assigned to you, across every client, sorted by due date."],
  ["Comments and @mentions", "Talk on the task, not in a separate chat. Mention anyone to pull them in."],
  ["Full history", "See who moved, changed or approved what, and when."],
  ["Recurring tasks", "Monthly reports and weekly check-ins create themselves."],
  ["Export to CSV and PDF", "Send a client their month in one file."],
  ["Branded workspace", "Your logo and colors inside the app. Included on Business."],
];

export default function FeaturesPage() {
  return (
    <>
      <section className="page-hero section--ink">
        <div className="wrap stack">
          <span className="eyebrow">Features</span>
          <h1 className="h1" style={{ maxWidth: "13em" }}>
            Every tool your team needs. <span className="text-citrus">No seat tax.</span>
          </h1>
          <p className="lead">Boards, custom workflows, auto-assign, unlimited files and push alerts. All in one flat-priced workspace.</p>
          <nav className="jump" aria-label="On this page">
            {JUMP.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* VIEWS */}
      <section id="views" className="section section--ink section--tight-top feature">
        <div className="wrap split">
          <div className="stack">
            <h2 className="h2">Five views. Same tasks.</h2>
            <p className="lead">
              Designers live in Kanban. Managers want a List. Account managers plan in Calendar. Switch in one click; nothing gets copied or lost.
            </p>
            <div className="pill-note">
              <span>Kanban and List on Free</span>
              <span className="dot-sep">·</span>
              <span>Calendar and Table on Team</span>
              <span className="dot-sep">·</span>
              <span>Timeline on Pro</span>
            </div>
          </div>
          <div className="panel" aria-hidden="true">
            <div className="chips">
              {["Kanban", "List", "Calendar", "Table", "Timeline"].map((v) => (
                <span key={v} className="chip" style={v === "List" ? { background: "var(--citrus)", color: "var(--ink)", fontSize: 12 } : { color: "var(--on-ink-4)", fontSize: 12 }}>
                  {v}
                </span>
              ))}
            </div>
            {[
              ["Braces FAQ carousel", "Design", "Nov 6", "var(--tint)"],
              ["Check-up reminder post", "Approval", "Nov 8", "var(--citrus)"],
              ["Clinic tour reel", "Scheduled", "Nov 18", "var(--green-on-ink)"],
            ].map(([t, s, d, c]) => (
              <div key={t} className="mini__row" style={{ fontSize: 14, paddingTop: 12 }}>
                <b>{t}</b>
                <span style={{ color: c }}>
                  {s} · {d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="section section--mist feature">
        <div className="wrap split">
          <div className="panel" aria-hidden="true">
            <span className="label" style={{ color: "var(--on-ink-4)" }}>
              Template · Monthly content calendar
            </span>
            <div className="chips">
              {["Post idea", "Content", "Content approval", "Design", "Client approval", "Scheduling"].map((c) => (
                <span key={c} className="chip" style={{ fontSize: 12, padding: "7px 10px", background: c === "Design" ? "var(--cobalt)" : "var(--ink-3)" }}>
                  {c}
                </span>
              ))}
              <span className="chip" style={{ fontSize: 12, padding: "6px 10px", border: "1px dashed #3A4370", color: "var(--on-ink-4)" }}>
                + Add column
              </span>
            </div>
            <span className="label" style={{ color: "var(--on-ink-4)", marginTop: 6 }}>
              Custom fields
            </span>
            {[
              ["Platform", "Instagram, Facebook, TikTok"],
              ["Format", "Post, Carousel, Reel, Story"],
              ["Caption", "Long text"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 12, background: "var(--ink-3)", borderRadius: 10, padding: "10px 12px", fontSize: 13 }}>
                <b>{k}</b>
                <span style={{ color: "var(--on-ink-2)" }}>{v}</span>
              </div>
            ))}
          </div>
          <div className="stack">
            <h2 className="h2">Your process, not ours.</h2>
            <p className="lead">Name every column, add the fields your work needs and save the whole board as a template. Next month&apos;s calendar takes one click.</p>
            <div className="pill-note">
              <span>3 fields on Free</span>
              <span className="dot-sep">·</span>
              <span>15 on Team</span>
              <span className="dot-sep">·</span>
              <span>Unlimited on Pro</span>
            </div>
          </div>
        </div>
      </section>

      {/* AUTO-ASSIGN */}
      <section id="auto" className="section section--mist section--flush-top feature">
        <div className="wrap split">
          <div className="stack">
            <h2 className="h2">Cards find their owner.</h2>
            <p className="lead">
              Set who owns each column once. When a card moves there, that person gets it and a push alert. If nobody owns the column, the card stays
              unassigned and shows up on the manager&apos;s list.
            </p>
            <div className="pill-note">
              <span>Included on Pro and Business</span>
              <span className="dot-sep">·</span>
              <span>$6/mo add-on on Team</span>
            </div>
          </div>
          <div className="stack" style={{ ...cssVar("--gap", "10px") }} aria-hidden="true">
            {[
              ["Design", "The client's designer"],
              ["Content approval", "The reviewer"],
              ["Scheduling", "The account manager"],
            ].map(([col, who]) => (
              <div key={col} className="rule">
                When a card moves to <b>{col}</b> assign <b>{who}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILES */}
      <div id="files" className="feature">
        <FilesBand showAgency={false} />
      </div>
      <section className="section section--mist section--flush-top">
        <div className="wrap split">
          <div className="stack">
            <h3 className="h3" style={{ fontSize: 22 }}>
              Filed for you, by client and project
            </h3>
            <p className="lead">Open, preview and mark the final version without leaving the task. Prefer not to use Drive? Use Webetask storage, up to 250 GB.</p>
          </div>
          <div className="panel panel--light" aria-hidden="true">
            <div className="tree">
              {[
                ["Webetask", 0],
                ["Northwind Dental", 1],
                ["November calendar", 2],
                ["Braces FAQ carousel", 3],
              ].map(([n, lvl]) => (
                <div key={n as string} style={{ paddingLeft: 6 + (lvl as number) * 20, justifyContent: "flex-start", fontWeight: 700 }}>
                  <Folder />
                  {n}
                </div>
              ))}
              <div style={{ paddingLeft: 86, color: "var(--text-2)" }}>
                slide-1_v2.png <span className="final">FINAL</span>
              </div>
              <div style={{ paddingLeft: 86, color: "var(--text-2)" }}>slide-1_v1.png</div>
              <div style={{ paddingLeft: 86, color: "var(--text-2)" }}>caption.docx</div>
            </div>
          </div>
        </div>
      </section>

      {/* ALERTS */}
      <section id="alerts" className="section section--ink feature">
        <div className="wrap stack stack--lg">
          <div className="stack" style={{ maxWidth: 700 }}>
            <h2 className="h2">Alerts for what needs you. Silence for the rest.</h2>
            <p className="lead">Push to your phone for anything that&apos;s yours. One email digest at 9 AM in your time zone. Every type can be turned off.</p>
          </div>
          <div className="table-wrap">
            <table className="table" style={{ minWidth: 520 }}>
              <thead>
                <tr>
                  <th scope="col">When</th>
                  <th scope="col">In app</th>
                  <th scope="col">Push</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {ALERTS.map(([when, app, push, email]) => (
                  <tr key={when}>
                    <th scope="row">{when}</th>
                    <td>{app ? "✓" : "—"}</td>
                    <td>{push ? "✓" : "—"}</td>
                    <td className={email ? undefined : "no"}>{email ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GUESTS */}
      <section id="guests" className="section section--ink section--flush-top feature">
        <div className="wrap split">
          <div className="panel panel--light" aria-hidden="true">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <b style={{ fontSize: 16 }}>Braces FAQ carousel</b>
              <span className="chip" style={{ background: "#FFF4DE", color: "#8A5A00", fontSize: 12 }}>
                Waiting on you
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
              <span style={{ aspectRatio: "1", borderRadius: 10, background: "var(--cobalt)" }} />
              <span style={{ aspectRatio: "1", borderRadius: 10, background: "var(--tint)" }} />
              <span style={{ aspectRatio: "1", borderRadius: 10, background: "var(--citrus)" }} />
            </div>
            <span className="small muted">Version 2, sent for review Nov 5. Feedback is required to request changes.</span>
            <div className="btn-row">
              <span className="btn btn--dark btn--sm">Approve</span>
              <span className="btn btn--outline btn--sm">Request changes</span>
            </div>
          </div>
          <div className="stack">
            <h2 className="h2">Clients approve inside the board.</h2>
            <p className="lead">
              Send the exact version for review. Your client approves and the card moves forward with &ldquo;Approved by Helen&rdquo;, or asks for changes and
              it goes back with their feedback. Edit it after review and the card shows it needs a fresh look.
            </p>
            <p>
              Asking for changes yourself? Tick what needs fixing and the card goes back to the column that fixes it. Then tap{" "}
              <b>Notify on WhatsApp</b> to send that person a ready message with the task link.
            </p>
            <div className="pill-note">
              <span>10 client guests on Pro</span>
              <span className="dot-sep">·</span>
              <span>Unlimited on Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI ASSISTANT */}
      <section id="ai" className="section section--mist feature">
        <div className="wrap split">
          <div className="stack">
            <h2 className="h2">An AI assistant that knows each client.</h2>
            <p className="lead">
              Tap ✨ AI beside any field to write a caption in English or Arabic, add hashtags and hooks, turn an idea into a brief, rewrite, translate,
              summarise the comments or break a task into checklist steps.
            </p>
            <p>
              Every client folder has a brand profile: voice, audience, do&apos;s and don&apos;ts, example captions and a brand kit with logos, colours
              and fonts. The AI uses that client&apos;s profile and their recently approved captions, so it writes like them. Nothing is saved until you
              insert it.
            </p>
            <div className="pill-note">
              <span>$4/mo add-on on Team and Pro</span>
              <span className="dot-sep">·</span>
              <span>Included on Business</span>
              <span className="dot-sep">·</span>
              <span>Coming soon: monthly content ideas and AI images</span>
            </div>
          </div>
          <div className="panel panel--light" aria-hidden="true">
            <span className="label">✨ AI · Caption · Northwind Dental</span>
            <div className="chips">
              {AI_TOOLS.map((t) => (
                <span key={t} className="chip" style={t === "Write caption" ? { background: "var(--cobalt)", color: "#fff", fontSize: 12 } : { fontSize: 12 }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ background: "#fff", border: "1px solid var(--line-soft)", borderRadius: 12, padding: 12, fontSize: 14 }}>
              Straighter smiles start with one question. Swipe for the 5 we hear most about braces 🦷
            </div>
            <div className="btn-row">
              <span className="btn btn--dark btn--sm">Insert</span>
              <span className="btn btn--outline btn--sm">Try again</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLAUDE AND CHATGPT */}
      <section id="connect" className="section section--ink feature">
        <div className="wrap split">
          <div className="panel" aria-hidden="true">
            {CONNECT_ASKS.map(([who, text], i) => (
              <div
                key={i}
                style={{
                  alignSelf: who === "You" ? "flex-end" : "flex-start",
                  maxWidth: "88%",
                  background: who === "You" ? "var(--cobalt)" : "var(--ink-3)",
                  borderRadius: 12,
                  padding: "10px 12px",
                  fontSize: 13,
                }}
              >
                {text}
              </div>
            ))}
          </div>
          <div className="stack">
            <h2 className="h2">Work from Claude or ChatGPT.</h2>
            <p className="lead">
              Connect Claude or ChatGPT to your workspace. Ask what&apos;s due, check the team&apos;s workload or read a brief, then have it create
              tasks, move cards, edit captions, comment and assign.
            </p>
            <p>
              Everyone connects as themselves and only gets what they can already see and do. It asks before every change, Admins see &ldquo;via
              Claude&rdquo; in the history, and you can disconnect anytime in Settings → Connected apps.
            </p>
            <div className="pill-note">
              <span>Every plan, including Free</span>
              <span className="dot-sep">·</span>
              <span>For members, not guests</span>
            </div>
          </div>
        </div>
      </section>

      {/* ESSENTIALS */}
      <section id="essentials" className="section section--ink section--flush-top feature">
        <div className="wrap stack stack--lg">
          <h2 className="h2">And the everyday essentials</h2>
          <div className="grid-auto" style={{ ...cssVar("--min", "320px") }}>
            {ESSENTIALS.map(([t, d]) => (
              <div key={t} className="card card--ink">
                <span className="h3">{t}</span>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BigCta title="See it on your own work" note="Free forever for 3 people. No card." />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Features", path: "/features" }])} />
    </>
  );
}
