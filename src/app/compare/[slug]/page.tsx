import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BigCta, JsonLd } from "@/components/Bits";
import { CompareCalc } from "@/components/CompareCalc";
import { ArrowRight } from "@/components/Icons";
import { COMPETITORS, getCompetitor } from "@/lib/competitors";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";
import { cssVar } from "@/lib/css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) return {};
  return pageMeta({ title: `${c.metaTitle} | Webetask`, description: c.metaDescription, path: `/compare/${c.slug}` });
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) notFound();

  return (
    <>
      <section className="page-hero section--ink">
        <div className="wrap split">
          <div className="stack">
            <nav className="compare-tabs" aria-label="Comparisons">
              {COMPETITORS.map((o) => (
                <Link key={o.slug} href={`/compare/${o.slug}`} aria-current={o.slug === c.slug ? "page" : undefined}>
                  vs {o.name}
                </Link>
              ))}
            </nav>
            <h1 className="h1">Webetask vs {c.name}</h1>
            <p className="lead">{c.intro}</p>
            <div className="btn-row">
              <a href={SIGNUP_URL} className="btn btn--citrus">
                Start free
                <ArrowRight />
              </a>
              <a href="#table" className="btn btn--ghost">
                See the full comparison
              </a>
            </div>
          </div>
          <CompareCalc planName={c.calcPlan} rate={c.calcRate} note={c.calcNote} />
        </div>
      </section>

      <section id="table" className="section section--mist">
        <div className="wrap stack stack--lg">
          <h2 className="h2">Side by side</h2>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th scope="col" className="us">
                    Webetask
                  </th>
                  <th scope="col">{c.name}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td className={r.usEmpty ? "no" : r.usStrong ? "us" : undefined}>{r.us}</td>
                    <td className={r.themEmpty ? "no" : undefined}>{r.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="small muted">
            {c.sourceNote} {c.trademark}
          </p>
        </div>
      </section>

      <section className="section section--mist section--flush-top">
        <div className="wrap grid-auto" style={{ ...cssVar("--min", "320px"), ...cssVar("--gap", "16px") }}>
          <div className="card card--sticker" style={{ gap: 16 }}>
            <h2 className="h3" style={{ fontSize: 22 }}>
              Choose Webetask if
            </h2>
            <ul className="list-plain">
              {c.chooseUs.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="card card--muted" style={{ gap: 16 }}>
            <h2 className="h3" style={{ fontSize: 22 }}>
              {c.name} may suit you better if
            </h2>
            <ul className="list-plain">
              {c.chooseThem.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap stack" style={{ alignItems: "center", textAlign: "center" }}>
          <h2 className="h2">
            {c.closing[0]} <span className="text-citrus">{c.closing[1]}</span>
          </h2>
          <p className="lead" style={{ textAlign: "center" }}>
            Free forever for 3 people. Read{" "}
            <Link href="/blog/switch-from-asana" style={{ color: "var(--citrus)" }}>
              how to switch in one afternoon
            </Link>
            .
          </p>
        </div>
      </section>

      <BigCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: `Webetask vs ${c.name}`, path: `/compare/${c.slug}` },
        ])}
      />
    </>
  );
}
