// Competitor facts for the comparison pages.
// Checked October 2026 from each vendor's pricing page or published plan details.
// Re-check before launch and every few months: prices change.

export type Row = { label: string; us: string; them: string; usStrong?: boolean; themEmpty?: boolean; usEmpty?: boolean };

export type Competitor = {
  slug: "asana" | "clickup" | "trello";
  name: string;
  /** Plan used in the calculator */
  calcPlan: string;
  /** Per user, per month, monthly billing */
  calcRate: number;
  calcNote: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  rows: Row[];
  sourceNote: string;
  chooseUs: string[];
  chooseThem: string[];
  closing: [string, string];
  trademark: string;
};

export const COMPETITORS: Competitor[] = [
  {
    slug: "asana",
    name: "Asana",
    calcPlan: "Asana Starter",
    calcRate: 13.49,
    calcNote: "Asana Starter at $13.49 per user, monthly billing, per asana.com/pricing, October 2026.",
    metaTitle: "Webetask vs Asana: flat pricing instead of per-seat",
    metaDescription:
      "Compare Webetask and Asana. Boards, lists, custom fields and automations for one flat price. A 10-person team pays $19 a month on Webetask vs $134.90 on Asana Starter.",
    intro:
      "The boards, lists, custom fields and automations you use in Asana, at one flat price for the whole team. Asana charges for every seat.",
    rows: [
      { label: "How you pay", us: "Flat, per workspace", them: "Per user", usStrong: true },
      { label: "10 people, per month", us: "$19 (Team)", them: "$134.90 (Starter)", usStrong: true },
      { label: "30 people, per month", us: "$59 (Pro)", them: "$404.70 (Starter)", usStrong: true },
      { label: "Free plan", us: "3 users, 2 projects", them: "Personal plan, up to 2 people" },
      { label: "File storage", us: "Unlimited in your Google Drive", them: "Unlimited" },
      { label: "Max file size", us: "Up to 5 GB", them: "100 MB", usStrong: true },
      { label: "Board, list, calendar", us: "✓", them: "✓" },
      { label: "Timeline", us: "Pro and up", them: "Starter and up" },
      { label: "Auto-assign by column", us: "✓ Built in", them: "Build it with rules" },
      { label: "Guests", us: "10 on Pro, unlimited on Business", them: "Unlimited, Starter and up" },
      { label: "Goals and portfolios", us: "—", them: "Advanced plan", usEmpty: true },
      { label: "Custom setup by the team", us: "1 a year on Pro, 3 on Business", them: "—", themEmpty: true },
    ],
    sourceNote: "Asana details from asana.com/pricing, October 2026. Prices use monthly billing.",
    chooseUs: [
      "Your team is growing and per-seat bills keep climbing.",
      "You move big files: designs, videos, raw photos.",
      "Work passes through set hands, like writer to designer to client.",
      "You want us to set up part of your workflow for you.",
    ],
    chooseThem: [
      "You manage company goals and project portfolios.",
      "You rely on deep integrations like Salesforce or Power BI.",
      "You have more than 50 people in one workspace.",
      "You need many unlimited guests on a lower plan.",
    ],
    closing: ["Same work.", "Smaller bill."],
    trademark: "Asana is a trademark of Asana, Inc.",
  },
  {
    slug: "clickup",
    name: "ClickUp",
    calcPlan: "ClickUp Unlimited",
    calcRate: 10,
    calcNote: "ClickUp Unlimited at $10 per user, monthly billing, October 2026.",
    metaTitle: "Webetask vs ClickUp: simpler, flat price, real file storage",
    metaDescription:
      "Compare Webetask and ClickUp. Less setup, one flat price per workspace and unlimited files through Google Drive, even on the free plan. ClickUp Free has 100 MB of storage.",
    intro:
      "ClickUp tries to do everything. Webetask does the work your team does every day, with less setup and one flat price. Files included, even on Free.",
    rows: [
      { label: "How you pay", us: "Flat, per workspace", them: "Per user", usStrong: true },
      { label: "10 people, per month", us: "$19 (Team)", them: "$100 (Unlimited)", usStrong: true },
      { label: "30 people, per month", us: "$59 (Pro)", them: "$300 (Unlimited)", usStrong: true },
      { label: "Free plan users", us: "3", them: "Unlimited" },
      { label: "File storage on Free", us: "Unlimited in your Google Drive", them: "100 MB in total", usStrong: true },
      { label: "File storage on paid plans", us: "Unlimited in your Drive", them: "Unlimited" },
      { label: "Automation runs a month", us: "Unlimited on Pro and Business", them: "100 Free, 1,000 Unlimited, 10,000 Business" },
      { label: "Auto-assign by column", us: "✓ Built in", them: "Build it with automations" },
      { label: "Docs, whiteboards, chat", us: "—", them: "✓", usEmpty: true },
      { label: "Custom setup by the team", us: "1 a year on Pro, 3 on Business", them: "—", themEmpty: true },
    ],
    sourceNote: "ClickUp details from published plan pages, October 2026. Prices use monthly billing.",
    chooseUs: [
      "ClickUp feels like too many menus for your team.",
      "You need real file storage without upgrading.",
      "You want one price no matter who joins.",
      "You'd rather have us set it up than spend a week configuring.",
    ],
    chooseThem: [
      "You want docs, whiteboards and chat in the same app.",
      "You run thousands of automations a month.",
      "You need a free plan for a large team.",
      "You enjoy configuring every detail yourself.",
    ],
    closing: ["Less setup.", "Smaller bill."],
    trademark: "ClickUp is a trademark of its owner.",
  },
  {
    slug: "trello",
    name: "Trello",
    calcPlan: "Trello Premium",
    calcRate: 12.5,
    calcNote:
      "Trello Premium at $12.50 per user, monthly billing, October 2026. Premium is the Trello plan with Calendar and Table views, which Webetask Team includes.",
    metaTitle: "Webetask vs Trello: boards plus lists, calendars and approvals",
    metaDescription:
      "Compare Webetask and Trello. Kanban plus List, Calendar and Table views, auto-assign and client approvals for one flat price. 10 people: $19 a month vs $125 on Trello Premium.",
    intro:
      "Trello is great for simple boards. When your team needs lists, calendars, client approvals and handoffs, Webetask gives you all of it at one flat price.",
    rows: [
      { label: "How you pay", us: "Flat, per workspace", them: "Per user", usStrong: true },
      { label: "10 people, per month", us: "$19 (Team)", them: "$60 Standard, $125 Premium", usStrong: true },
      { label: "30 people, per month", us: "$59 (Pro)", them: "$180 Standard, $375 Premium", usStrong: true },
      { label: "Free plan", us: "3 users, 2 projects", them: "10 collaborators, 10 boards" },
      { label: "Calendar and Table views", us: "Team, $19 flat", them: "Premium, $12.50 per user", usStrong: true },
      { label: "Automation runs a month", us: "Unlimited on Pro and Business", them: "250 Free, 1,000 Standard, unlimited Premium" },
      { label: "Auto-assign by column", us: "✓ Built in", them: "Build it with automation rules" },
      { label: "Files in your Google Drive, sorted per client", us: "✓", them: "Attach links by hand" },
      { label: "Add-on library (Power-Ups)", us: "—", them: "✓ Large library", usEmpty: true },
      { label: "Custom setup by the team", us: "1 a year on Pro, 3 on Business", them: "—", themEmpty: true },
    ],
    sourceNote: "Trello details from published plan pages, October 2026. Prices use monthly billing: Standard $6, Premium $12.50 per user.",
    chooseUs: [
      "You've outgrown simple boards and need lists and calendars.",
      "Work moves between people and you want it assigned automatically.",
      "Clients need to approve work without seeing everything.",
      "You want one price as the team grows.",
    ],
    chooseThem: [
      "A simple board is all your team needs.",
      "You're 3 people or fewer on Standard, which costs less.",
      "You depend on specific Power-Ups.",
      "Your company already runs on Atlassian tools.",
    ],
    closing: ["More than a board.", "One price."],
    trademark: "Trello is a trademark of Atlassian.",
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}
