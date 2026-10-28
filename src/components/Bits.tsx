import { ArrowRight } from "./Icons";
import { SIGNUP_URL } from "@/lib/site";

/** Full-width citrus call to action that closes most pages. */
export function BigCta({ title = "Start free", note = "Your first board in 5 minutes. No card." }: { title?: string; note?: string }) {
  return (
    <a href={SIGNUP_URL} className="big-cta">
      <b>{title} →</b>
      <span>{note}</span>
    </a>
  );
}

export function StartFreeButton({ label = "Start free" }: { label?: string }) {
  return (
    <a href={SIGNUP_URL} className="btn btn--citrus">
      {label}
      <ArrowRight />
    </a>
  );
}

/** Renders schema.org structured data for search engines. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Marquee() {
  const words = ["Kanban", "List", "Calendar", "Timeline", "Auto-assign", "Unlimited files", "Client approvals", "Push alerts"];
  const group = (key: string) => (
    <span className="marquee__group" key={key}>
      {words.map((w, i) => (
        <span key={w} style={{ display: "contents" }}>
          {w} <i style={{ background: i % 2 ? "var(--ink)" : "var(--cobalt)" }} />
        </span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}
