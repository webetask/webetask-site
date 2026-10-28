import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegal, LEGAL, LEGAL_UPDATED } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";
import { SUPPORT_EMAIL } from "@/lib/site";

type Props = { params: Promise<{ doc: string }> };

export function generateStaticParams() {
  return LEGAL.map((d) => ({ doc: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { doc } = await params;
  const d = getLegal(doc);
  if (!d) return {};
  return pageMeta({ title: `${d.title} | Webetask`, description: d.description, path: `/legal/${d.slug}` });
}

export default async function LegalPage({ params }: Props) {
  const { doc } = await params;
  const d = getLegal(doc);
  if (!d) notFound();

  return (
    <>
      <section className="page-hero section--ink">
        <div className="wrap stack">
          <span className="eyebrow">Legal</span>
          <h1 className="h1">{d.title}</h1>
          <nav className="doc-tabs" aria-label="Legal documents">
            {LEGAL.map((o) => (
              <Link key={o.slug} href={`/legal/${o.slug}`} aria-current={o.slug === d.slug ? "page" : undefined}>
                {o.tab}
              </Link>
            ))}
          </nav>
          <p className="small" style={{ color: "var(--on-ink-4)" }}>
            Last updated {LEGAL_UPDATED}. Questions: {SUPPORT_EMAIL}
          </p>
        </div>
      </section>
      <section className="section section--mist">
        <div className="wrap">
          <article className="paper">
            <div className="prose">
              <p style={{ fontSize: 19, color: "var(--text)" }}>{d.intro}</p>
              {d.sections.map((s) => (
                <section key={s.h}>
                  <h2>{s.h}</h2>
                  <p>{s.body}</p>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
