import type { ComponentType } from "react";
import * as contentCalendar from "@/content/posts/content-calendar-kanban-board";
import * as perSeat from "@/content/posts/per-seat-pricing";
import * as leaveAsana from "@/content/posts/switch-from-asana";

import type { PostMeta } from "./blog-types";
export type { PostMeta };

export type Post = PostMeta & { Content: ComponentType };

// To add a post: create a file in src/content/posts that exports `meta` and a
// default component, then add it to this list.
const ALL: Post[] = [contentCalendar, perSeat, leaveAsana].map((m) => ({ ...m.meta, Content: m.default }));

export const POSTS: Post[] = ALL.sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
