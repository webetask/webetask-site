import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BigCta, JsonLd } from "@/components/Bits";
import { formatDate, getPost, POSTS } from "@/lib/blog";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { cssVar } from "@/lib/css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const base = pageMeta({ title: `${p.title} | Webetask`, description: p.description, path: `/blog/${p.slug}`, type: "article" });
  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article", publishedTime: p.date, authors: [`${SITE_NAME} team`] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { Content } = post;
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: `${SITE_NAME} team`, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-icon.png` } },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
  };

  return (
    <>
      <section className="page-hero section--ink">
        <div className="wrap stack" style={{ maxWidth: 860 }}>
          <Link href="/blog" className="small" style={{ color: "var(--on-ink-3)", textDecoration: "none" }}>
            ← All posts
          </Link>
          <span className="eyebrow">{post.category}</span>
          <h1 className="h1" style={{ fontSize: "clamp(32px, 4.4vw, 56px)" }}>
            {post.title}
          </h1>
          <p className="lead">{post.description}</p>
          <p className="post-meta">
            {formatDate(post.date)} · {post.readMinutes} min read · {SITE_NAME} team
          </p>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <article className="prose">
            <Content />
          </article>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section section--mist section--flush-top">
          <div className="wrap stack" style={{ maxWidth: 860 }}>
            <h2 className="h3" style={{ fontSize: 22 }}>
              Keep reading
            </h2>
            <div className="grid-auto" style={{ ...cssVar("--min", "280px") }}>
              {others.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="post-card">
                  <span className="label">{p.category}</span>
                  <b>{p.title}</b>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <BigCta />
      <JsonLd data={articleLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
    </>
  );
}
