import Link from "next/link";
import { BigCta, JsonLd } from "@/components/Bits";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";
import { cssVar } from "@/lib/css";

export const metadata = pageMeta({
  title: "About Webetask: built inside a marketing agency",
  description:
    "Webetask is made by Webegenix, a digital marketing agency in Egypt. We built it to run our own client work, then opened it to every small team tired of per-seat pricing.",
  path: "/about",
});

const PROMISES = [
  ["One flat price", "Your bill doesn't grow every time you hire. We price the workspace, not the person."],
  ["Your files stay yours", "Connect your Drive and every file lives there. Leave anytime and take everything with you."],
  ["Limits you can read", "Every plan limit is on the pricing page. Downgrade and nothing gets deleted."],
  ["Built from real work", "We use Webetask every day. If something slows us down, we fix it for everyone."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section--ink">
        <div className="wrap stack">
          <span className="eyebrow">About us</span>
          <h1 className="h1" style={{ maxWidth: "13em" }}>
            Built by a team that ships work <span className="text-citrus">every single day.</span>
          </h1>
          <p className="lead">
            Webetask is made by Webegenix, a digital marketing agency in Egypt. We built it for ourselves first. Now it&apos;s for every small team
            that&apos;s tired of paying per seat.
          </p>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap stack stack--lg">
          <h2 className="h2">How it started</h2>
          <ol className="grid-auto" style={{ ...cssVar("--min", "280px"), listStyle: "none", margin: 0, padding: 0 }}>
            <li className="card">
              <span className="icon-box icon-box--tint" style={{ fontWeight: 700 }}>
                1
              </span>
              <span className="h3">The problem</span>
              <p>
                Our agency runs dozens of posts, reels and approvals a month. Every tool we tried either charged per seat, capped our file storage or
                limited access right when we needed it.
              </p>
            </li>
            <li className="card card--sticker">
              <span className="icon-box icon-box--ink" style={{ fontWeight: 700 }}>
                2
              </span>
              <span className="h3">Our own board</span>
              <p>
                So we built one. Boards per client, files in our own Google Drive, cards that move from writer to designer to client on their own.
                Our whole team runs on it.
              </p>
            </li>
            <li className="card" style={{ background: "var(--citrus)", borderColor: "var(--citrus)" }}>
              <span className="icon-box icon-box--ink" style={{ fontWeight: 700 }}>
                3
              </span>
              <span className="h3">Webetask</span>
              <p style={{ color: "#3A2A05" }}>
                In 2026 we opened it up as Webetask, so any small team can work the same way: one flat price, unlimited files and a setup that fits.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap stack stack--lg">
          <h2 className="h2" style={{ maxWidth: "14em" }}>
            What we promise our customers
          </h2>
          <div className="grid-auto" style={{ ...cssVar("--min", "240px"), ...cssVar("--gap", "28px") }}>
            {PROMISES.map(([t, d]) => (
              <div key={t} className="stack" style={{ ...cssVar("--gap", "10px"), borderTop: "2px solid var(--citrus)", paddingTop: 18 }}>
                <h3 className="h3" style={{ fontSize: 20 }}>
                  {t}
                </h3>
                <p style={{ fontSize: 15, color: "var(--on-ink-2)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap row-between card" style={{ alignItems: "center", padding: "clamp(24px, 4vw, 44px)", flexDirection: "row" }}>
          <div className="stack" style={{ ...cssVar("--gap", "8px"), flex: "1 1 340px" }}>
            <h2 className="h2" style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}>
              Want to talk to us?
            </h2>
            <p>Questions, feedback or a custom setup. A real person answers.</p>
          </div>
          <div className="btn-row">
            <Link href="/contact" className="btn btn--outline">
              Contact us
            </Link>
            <a href={SIGNUP_URL} className="btn btn--dark">
              Start free
            </a>
          </div>
        </div>
      </section>

      <BigCta />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
    </>
  );
}
