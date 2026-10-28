import { BigCta, JsonLd } from "@/components/Bits";
import { PricingPlans } from "@/components/PricingPlans";
import { breadcrumbLd, pageMeta, softwareLd } from "@/lib/seo";
import { SUPPORT_EMAIL } from "@/lib/site";
import { cssVar } from "@/lib/css";

export const metadata = pageMeta({
  title: "Pricing: one flat price per workspace | Webetask",
  description:
    "Free for 3 people. Team $19/month for up to 10 users, Pro $49 for up to 30, Business $129 for up to 50. Unlimited Google Drive storage on every plan. No per-seat pricing.",
  path: "/pricing",
});

type Cell = string | null; // null = not included
const GROUPS: { title: string; rows: [string, Cell, Cell, Cell, Cell][] }[] = [
  {
    title: "Team and projects",
    rows: [
      ["Users", "3", "10", "30", "50"],
      ["Projects", "2", "Unlimited", "Unlimited", "Unlimited"],
      ["Guests", null, null, "10", "Unlimited"],
      ["History visible", "30 days", "Full", "Full", "Full"],
    ],
  },
  {
    title: "Workflow",
    rows: [
      ["Views", "Kanban, List", "+ Calendar, Table", "+ Timeline", "All"],
      ["Custom fields per project", "3", "15", "Unlimited", "Unlimited"],
      ["Auto-assign by column", null, "Add-on", "✓", "✓"],
      ["Automation runs a month", null, "Add-on", "1,000", "Unlimited"],
      ["Recurring tasks", null, "✓", "✓", "✓"],
      ["Private projects", null, "✓", "✓", "✓"],
      ["Private folders", null, null, null, "✓"],
    ],
  },
  {
    title: "Files",
    rows: [
      ["Google Drive storage", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
      ["Webetask hosted storage", "100 MB", "25 GB", "100 GB", "250 GB"],
      ["Max file size", "10 MB", "500 MB", "2 GB", "5 GB"],
      ["Export to CSV and PDF", null, "✓", "✓", "✓"],
    ],
  },
  {
    title: "Your brand and setup",
    rows: [
      ["Branded workspace", null, "Add-on", "Add-on", "✓"],
      ["Customizations included", null, null, "1 a year", "3 a year"],
    ],
  },
];

const ADDONS = [
  { name: "Automations", price: "$6", per: "/mo", text: "1,000 runs a month on Team. Included in Pro and Business." },
  { name: "Extra storage", price: "$4", per: "/mo", text: "+100 GB of Webetask hosted storage." },
  { name: "WhatsApp alerts", price: "from $15", per: "", text: "1,000 credits. Pro includes 200 a month, Business 500.", soon: true },
  { name: "AI assistant", price: "$8", per: "/mo", text: "+1,000 AI credits. Free gets 20 a month, Pro 300, Business 1,000.", soon: true },
];

const FAQ = [
  {
    q: "Do I pay more when I add people?",
    a: "No. Each plan covers up to a set number of users for one flat price. Team is $19 whether you have 2 people or 10.",
  },
  {
    q: "How is Google Drive storage unlimited?",
    a: "Files upload to your own Drive account, so your Drive plan sets the limit, not us. We organize them by client and project and show them inside each task.",
  },
  {
    q: "What happens if I downgrade?",
    a: "Nothing gets deleted. Projects or users over the new limit become read-only until you upgrade again or remove extras.",
  },
  {
    q: "What counts as a customization?",
    a: "A board template, custom field, approval step, auto-assign rule or report we build for your workspace. You approve the scope before we start.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your billing settings and your plan runs until the end of the period you paid for.",
  },
  {
    q: "Do you offer discounts for nonprofits or students?",
    a: `Write to ${SUPPORT_EMAIL} and tell us about your team.`,
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function PricingPage() {
  return (
    <>
      <section className="page-hero section--ink">
        <div className="wrap stack" style={{ alignItems: "center", textAlign: "center" }}>
          <span className="eyebrow" style={{ alignSelf: "center" }}>
            Pricing
          </span>
          <h1 className="h1" style={{ maxWidth: "14em" }}>
            Pay for the workspace. <span className="text-citrus">Not every seat.</span>
          </h1>
          <p className="lead" style={{ color: "var(--on-ink-2)" }}>
            Every plan has a flat monthly price and unlimited Google Drive storage. Upgrade when you need more people or more power.
          </p>
        </div>
      </section>

      <section className="section section--ink section--flush-top">
        <div className="wrap">
          <PricingPlans />
          <p className="small" style={{ color: "var(--on-ink-4)", textAlign: "center", marginTop: 20 }}>
            Prices in USD. Taxes may apply depending on your country.
          </p>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap stack stack--lg">
          <h2 className="h2">Compare every plan</h2>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th scope="col">Free</th>
                  <th scope="col">Team</th>
                  <th scope="col" className="us">
                    Pro
                  </th>
                  <th scope="col">Business</th>
                </tr>
              </thead>
              <tbody>
                {GROUPS.map((g) => (
                  <GroupRows key={g.title} title={g.title} rows={g.rows} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--mist section--flush-top">
        <div className="wrap stack stack--lg">
          <div className="stack" style={{ ...cssVar("--gap", "8px") }}>
            <h2 className="h2">Add only what you use</h2>
            <p className="lead">Monthly add-ons on any paid plan. Cancel anytime.</p>
          </div>
          <div className="grid-auto" style={{ ...cssVar("--min", "240px") }}>
            {ADDONS.map((a) => (
              <div key={a.name} className="card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  <span className="h3">{a.name}</span>
                  {a.soon && <span className="soon">SOON</span>}
                </div>
                <span className="addon-price">
                  {a.price}
                  {a.per && <small>{a.per}</small>}
                </span>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist section--flush-top">
        <div className="wrap stack stack--lg" style={{ maxWidth: 860 }}>
          <h2 className="h2">Pricing questions</h2>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BigCta title="Start free" note="Free forever for 3 people. Upgrade when it pays off." />
      <JsonLd data={softwareLd} />
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])} />
    </>
  );
}

function GroupRows({ title, rows }: { title: string; rows: [string, Cell, Cell, Cell, Cell][] }) {
  return (
    <>
      <tr className="group">
        <th scope="rowgroup" colSpan={5}>
          {title}
        </th>
      </tr>
      {rows.map(([label, ...cells]) => (
        <tr key={label}>
          <th scope="row">{label}</th>
          {cells.map((c, i) =>
            c === null ? (
              <td key={i} className="no">
                <span aria-hidden="true">—</span>
                <span className="sr-only">Not included</span>
              </td>
            ) : (
              <td key={i}>{c}</td>
            ),
          )}
        </tr>
      ))}
    </>
  );
}
