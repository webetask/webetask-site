import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";
import { COMPETITORS } from "@/lib/competitors";
import { LEGAL } from "@/lib/legal";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "weekly"),
    page("/pricing", 0.9),
    page("/features", 0.9),
    ...COMPETITORS.map((c) => page(`/compare/${c.slug}`, 0.8)),
    page("/blog", 0.7, "weekly"),
    ...POSTS.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.7 })),
    page("/about", 0.5, "yearly"),
    page("/contact", 0.5, "yearly"),
    ...LEGAL.map((d) => page(`/legal/${d.slug}`, 0.2, "yearly")),
  ];
}
