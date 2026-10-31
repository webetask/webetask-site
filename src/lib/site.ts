// One place for the facts the whole site repeats.
// Change a price or a link here and every page updates.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://webetask.app").replace(/\/$/, "");
export const APP_URL = "https://app.webetask.app";
export const SIGNUP_URL = `${APP_URL}/signup`;
export const LOGIN_URL = `${APP_URL}/login`;
export const SUPPORT_EMAIL = "support@webetask.app";
export const SITE_NAME = "Webetask";
export const TAGLINE = "Work moves. Your bill doesn't.";
export const DEFAULT_DESCRIPTION =
  "Task management for small teams. Kanban, lists, calendars, auto-assign and unlimited files through Google Drive, for one flat price per workspace. Free for 3 people.";

/** Date the competitor prices below were last checked. */
export const PRICES_CHECKED = "October 2026";

export type Plan = {
  id: "free" | "team" | "pro" | "business";
  name: string;
  monthly: number;
  yearly: number; // full price billed once a year (2 months free)
  users: number;
  for: string;
  featured?: boolean;
  intro: string;
  features: string[];
  cta: string;
};

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    yearly: 0,
    users: 3,
    for: "Try it with a small crew",
    intro: "Includes",
    features: [
      "Up to 3 users",
      "2 projects",
      "Kanban and List views",
      "3 custom fields per project",
      "Unlimited Google Drive storage",
      "30 days of history",
    ],
    cta: "Start free",
  },
  {
    id: "team",
    name: "Team",
    monthly: 19,
    yearly: 190,
    users: 10,
    for: "Small teams getting serious",
    intro: "Everything in Free, plus",
    features: [
      "Up to 10 users",
      "Unlimited projects",
      "Calendar and Table views",
      "15 custom fields per project",
      "Private projects",
      "Recurring tasks, CSV and PDF export",
      "25 GB hosted storage",
    ],
    cta: "Choose Team",
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 59,
    yearly: 590,
    users: 30,
    for: "Agencies and growing teams",
    featured: true,
    intro: "Everything in Team, plus",
    features: [
      "Up to 30 users",
      "10 guests for client approvals",
      "Auto-assign by column",
      "Timeline view, unlimited fields",
      "Unlimited automation runs",
      "1 customization a year",
      "100 GB hosted storage",
    ],
    cta: "Choose Pro",
  },
  {
    id: "business",
    name: "Business",
    monthly: 149,
    yearly: 1490,
    users: 50,
    for: "Your brand, your rules",
    intro: "Everything in Pro, plus",
    features: [
      "Up to 50 users",
      "Unlimited guests",
      "Branded workspace included",
      "Private folders",
      "5 GB max file size",
      "3 customizations a year",
      "250 GB hosted storage",
    ],
    cta: "Choose Business",
  },
];

/** Smallest paid plan that fits a team size. */
export function planForTeam(size: number): Plan {
  if (size <= 10) return PLANS[1];
  if (size <= 30) return PLANS[2];
  return PLANS[3];
}

export function money(n: number, decimals = 0): string {
  return (
    "$" +
    n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );
}

export const NAV = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare/asana", label: "Compare", match: "/compare" },
  { href: "/blog", label: "Blog" },
];
