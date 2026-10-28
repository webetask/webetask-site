import Link from "next/link";
import { PLANS } from "@/lib/site";
import { POSTS } from "@/lib/blog";
import { cssVar } from "@/lib/css";

/** A card that walks across five columns by itself. */
export function FlowDemo() {
  const cols = [
    ["Content", "Copywriter"],
    ["Review", "Reviewer"],
    ["Design", "Designer"],
    ["Client approval", "Client (guest)"],
    ["Scheduled", "Account manager"],
  ];
  return (
    <div className="flow-scroll">
      <div className="flow" aria-hidden="true">
        <div className="flow__cols">
          {cols.map(([name, who]) => (
            <div key={name} className="flow__col">
              <b>{name}</b>
              <span>{who}</span>
            </div>
          ))}
        </div>
        <div className="flow__traveler">
          <div className="flow__card">
            <b>Braces FAQ carousel</b>
            <span>
              6 files <em>Auto</em>
            </span>
          </div>
        </div>
      </div>
      <p className="sr-only">
        Example: a task moves from Content to Review, Design, Client approval and Scheduled, and each column assigns it to the right person.
      </p>
    </div>
  );
}

export function Bento() {
  return (
    <div className="bento">
      <Link href="/features#views" className="tile span-4">
        <div className="mini" aria-hidden="true">
          <div className="chips">
            <span className="chip" style={{ color: "var(--on-ink-4)" }}>Kanban</span>
            <span className="chip" style={{ background: "var(--citrus)", color: "var(--ink)" }}>List</span>
            <span className="chip" style={{ color: "var(--on-ink-4)" }}>Calendar</span>
            <span className="chip" style={{ color: "var(--on-ink-4)" }}>Table</span>
            <span className="chip" style={{ color: "var(--on-ink-4)" }}>Timeline</span>
          </div>
          <div className="mini__row">
            <b>Braces FAQ carousel</b>
            <span style={{ color: "var(--tint)" }}>Design · Nov 6</span>
          </div>
          <div className="mini__row">
            <b>Check-up reminder</b>
            <span style={{ color: "var(--citrus)" }}>Approval · Nov 8</span>
          </div>
          <div className="mini__row">
            <b>Clinic tour reel</b>
            <span style={{ color: "var(--green-on-ink)" }}>Scheduled · Nov 18</span>
          </div>
        </div>
        <div className="tile__text">
          <b>Five views, same tasks</b>
          <span>Kanban, List, Calendar, Table and Timeline. Switch in one click.</span>
        </div>
      </Link>

      <Link href="/features#auto" className="tile tile--citrus span-2">
        <div className="stack" style={{ ...cssVar("--gap", "8px"), fontSize: 12, fontWeight: 600 }} aria-hidden="true">
          <span style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <span className="chip" style={{ background: "var(--ink)", color: "#fff", fontSize: 12 }}>Design</span>→
            <span className="chip" style={{ background: "#fff", fontSize: 12 }}>Designer</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <span className="chip" style={{ background: "var(--ink)", color: "#fff", fontSize: 12 }}>Approval</span>→
            <span className="chip" style={{ background: "#fff", fontSize: 12 }}>Client</span>
          </span>
        </div>
        <div className="tile__text">
          <b>Auto-assign</b>
          <span>Cards land with the right person the moment they move.</span>
        </div>
      </Link>

      <Link href="/features#workflow" className="tile span-2">
        <div className="chips" aria-hidden="true">
          <span className="chip" style={{ background: "var(--ink-3)" }}>Post idea</span>
          <span className="chip" style={{ background: "var(--ink-3)" }}>Content</span>
          <span className="chip" style={{ background: "var(--cobalt)" }}>Design</span>
          <span className="chip" style={{ background: "var(--ink-3)" }}>Approval</span>
          <span className="chip" style={{ border: "1px dashed #3A4370", color: "var(--on-ink-4)" }}>+ Column</span>
        </div>
        <div className="tile__text">
          <b>Your own workflow</b>
          <span>Name columns, add fields, save it as a template.</span>
        </div>
      </Link>

      <Link href="/features#alerts" className="tile span-2">
        <div className="stack" style={{ ...cssVar("--gap", "6px") }} aria-hidden="true">
          <div className="ping" style={{ background: "#fff", color: "var(--ink)", borderRadius: 10, padding: "9px 11px", fontSize: 12, display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--citrus)", flexShrink: 0 }} />
            <span>
              <b>Mona</b> assigned you a task
            </span>
          </div>
          <div style={{ background: "var(--ink-3)", borderRadius: 10, padding: "9px 11px", fontSize: 12, color: "var(--on-ink-2)" }}>
            Due tomorrow: Clinic tour reel
          </div>
        </div>
        <div className="tile__text">
          <b>Push alerts</b>
          <span>For what&apos;s yours. Silence for the rest.</span>
        </div>
      </Link>

      <Link href="/features#essentials" className="tile span-2">
        <div className="stack" style={{ ...cssVar("--gap", "7px"), fontSize: 12 }} aria-hidden="true">
          <span style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
            <span>Caption, check-up post</span>
            <span style={{ color: "var(--citrus)" }}>Today</span>
          </span>
          <span style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
            <span>Review braces carousel</span>
            <span style={{ color: "var(--tint)" }}>Thu</span>
          </span>
          <span style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
            <span>Schedule clinic reel</span>
            <span style={{ color: "var(--tint)" }}>Nov 18</span>
          </span>
        </div>
        <div className="tile__text">
          <b>My Tasks</b>
          <span>Everything on your plate, across every client.</span>
        </div>
      </Link>

      <Link href="/features#guests" className="tile tile--light tile--row span-3">
        <div aria-hidden="true" style={{ background: "#fff", border: "1px solid var(--line-soft)", borderRadius: 12, padding: 12, display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 700 }}>Braces FAQ carousel</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 5 }}>
            <span style={{ aspectRatio: "1", borderRadius: 6, background: "var(--cobalt)" }} />
            <span style={{ aspectRatio: "1", borderRadius: 6, background: "var(--tint)" }} />
            <span style={{ aspectRatio: "1", borderRadius: 6, background: "var(--citrus)" }} />
          </div>
          <div style={{ display: "flex", gap: 6, fontSize: 11, fontWeight: 600, flexWrap: "wrap" }}>
            <span style={{ background: "var(--ink)", color: "#fff", borderRadius: 999, padding: "5px 10px" }}>Approve</span>
            <span style={{ border: "1px solid var(--line-btn)", borderRadius: 999, padding: "4px 10px" }}>Request changes</span>
          </div>
        </div>
        <div className="tile__text">
          <b>Client approvals</b>
          <span>Clients approve on the board as guests. No screenshots on WhatsApp.</span>
        </div>
      </Link>

      <Link href="/features#essentials" className="tile tile--row span-3">
        <div aria-hidden="true" style={{ display: "flex", gap: 8 }}>
          <span style={{ flex: 1, background: "var(--ink)", border: "1px solid var(--ink-3)", borderRadius: 12, padding: 12, display: "flex", flexDirection: "column", gap: 6, fontSize: 11, color: "var(--on-ink-3)" }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>↻</span>
            Monthly report, every 1st
          </span>
          <span style={{ flex: 1, background: "var(--ink)", border: "1px solid var(--ink-3)", borderRadius: 12, padding: 12, display: "flex", flexDirection: "column", gap: 6, fontSize: 11, color: "var(--on-ink-3)" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--citrus)" }}>CSV · PDF</span>
            November calendar.pdf
          </span>
        </div>
        <div className="tile__text">
          <b>Recurring tasks and export</b>
          <span>Routine work creates itself. Send a client their month in one file.</span>
        </div>
      </Link>
    </div>
  );
}

export function FilesBand({ showAgency = true }: { showAgency?: boolean }) {
  return (
    <section className="section section--mist files">
      <div className="files__ring" aria-hidden="true" />
      <div className="wrap split" style={{ position: "relative" }}>
        <div className="stack">
          <span className="files__inf" aria-hidden="true">
            ∞
          </span>
          <h2 className="h2">
            Unlimited files. <span className="text-cobalt">On Free too.</span>
          </h2>
          <p className="lead">Connect your Google Drive and every upload lands in the right client folder. Your files never leave your Drive.</p>
        </div>
        {showAgency && (
          <div className="agency-card" style={{ flexBasis: 320 }}>
            <span className="label">Born in an agency</span>
            <b>Battle-tested on 11 clients.</b>
            <p>We built Webetask to run Webegenix, our marketing agency. Every content calendar, every client approval, every day.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function PriceTags() {
  const classes = ["tag--1", "tag--2", "tag--3", "tag--4"];
  return (
    <div className="tags">
      {PLANS.map((p, i) => (
        <Link key={p.id} href="/pricing" className={`tag ${classes[i]}`}>
          <span className="label">{p.featured ? `${p.name} · most popular` : p.name}</span>
          <strong>${p.monthly}</strong>
          <span>Up to {p.users} people</span>
        </Link>
      ))}
    </div>
  );
}

export function BlogStrip() {
  return (
    <div className="blog-strip">
      {POSTS.slice(0, 3).map((p) => (
        <Link key={p.slug} href={`/blog/${p.slug}`}>
          <span className="label">{p.category}</span>
          <b>{p.title}</b>
        </Link>
      ))}
    </div>
  );
}
