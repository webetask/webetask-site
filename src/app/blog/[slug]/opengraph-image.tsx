import { ImageResponse } from "next/og";
import { getPost, POSTS } from "@/lib/blog";
import { OG_SIZE, OgCard } from "@/lib/og";

export const alt = "Webetask blog post";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return new ImageResponse(<OgCard kicker={post ? `Blog · ${post.category}` : "Blog"} title={post?.title ?? "Webetask blog"} footer="webetask.app/blog" />, size);
}
