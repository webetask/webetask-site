import Link from "next/link";
import { BigCta, JsonLd } from "@/components/Bits";
import { formatDate, POSTS } from "@/lib/blog";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { cssVar } from "@/lib/css";

export const metadata = pageMeta({
  title: "Blog: running teams and content without the chaos | Webetask",
  description: "Practical guides on content calendars, team workflows, pricing and switching tools, from the agency team behind Webetask.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <>
      <section className="page-hero section--ink">
        <div className="wrap stack">
          <span className="eyebrow">Blog</span>
          <h1 className="h1" style={{ maxWidth: "14em" }}>
            Notes from a team that <span className="text-citrus">ships every day.</span>
          </h1>
          <p className="lead">Practical guides on content calendars, team workflows, pricing and switching tools.</p>
        </div>
      </section>
      <section className="section section--mist">
        <div className="wrap grid-auto" style={{ ...cssVar("--min", "300px"), ...cssVar("--gap", "16px") }}>
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="post-card">
              <span className="label">{p.category}</span>
              <b>{p.title}</b>
              <p>{p.description}</p>
              <span className="small muted">
                {formatDate(p.date)} · {p.readMinutes} min read
              </span>
            </Link>
          ))}
        </div>
      </section>
      <BigCta />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
    </>
  );
}
