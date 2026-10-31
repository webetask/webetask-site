import Link from "next/link";
import type { PostMeta } from "@/lib/blog-types";

export const meta: PostMeta = {
  slug: "per-seat-pricing-tax",
  title: "Per-seat pricing is a tax on growing teams",
  description:
    "What per-seat project management tools really cost as a team grows from 5 to 50 people, the habits it creates, and when per-seat pricing is actually fine.",
  category: "Opinion",
  date: "2026-10-24",
  readMinutes: 5,
};

const rows = [
  { team: 5, asana: "$67.45", clickup: "$50", trello: "$62.50", us: "$19" },
  { team: 10, asana: "$134.90", clickup: "$100", trello: "$125", us: "$19" },
  { team: 20, asana: "$269.80", clickup: "$200", trello: "$250", us: "$59" },
  { team: 30, asana: "$404.70", clickup: "$300", trello: "$375", us: "$59" },
  { team: 50, asana: "$674.50", clickup: "$500", trello: "$625", us: "$149" },
];

export default function Post() {
  return (
    <>
      <p>
        Almost every project management tool charges per seat. Add a person, pay more. It sounds fair, and for a big company with a
        procurement team it mostly is. For a small team that is growing, it quietly becomes a tax on the thing you want most: more people
        doing the work.
      </p>

      <h2>What it costs as you grow</h2>
      <p>
        Here is the monthly bill for the same team on popular per-seat plans, using each vendor&apos;s monthly price per user as of October
        2026, next to Webetask&apos;s flat workspace price.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Team size</th>
              <th>Asana Starter ($13.49)</th>
              <th>ClickUp Unlimited ($10)</th>
              <th>Trello Premium ($12.50)</th>
              <th>Webetask</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.team}>
                <td>{r.team} people</td>
                <td>{r.asana}</td>
                <td>{r.clickup}</td>
                <td>{r.trello}</td>
                <td>
                  <strong>{r.us}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        At 10 people the per-seat bill on Asana Starter is $1,618.80 a year. On Webetask Team it&apos;s $228, or $190 if you pay yearly. The gap
        grows with every hire, because one line goes up with headcount and the other only steps up at 10, 30 and 50 people.
      </p>

      <h2>The habits per-seat pricing creates</h2>
      <p>The money is the obvious part. The habits are worse, because they slow the team down without anyone noticing:</p>
      <ul>
        <li>
          <strong>Shared logins.</strong> Two freelancers use one account to save a seat. Now you can&apos;t tell who did what, and assigning
          work to a person stops meaning anything.
        </li>
        <li>
          <strong>People left outside the tool.</strong> The part-time designer, the intern, the person who only reviews captions. They get
          updates by message instead, and the board stops being the source of truth.
        </li>
        <li>
          <strong>Hesitating to invite.</strong> Every new person becomes a budget question. Teams wait, and work moves back into chat.
        </li>
        <li>
          <strong>Removing people too early.</strong> Someone finishes a project, you remove their seat, and their history and context leave
          with them.
        </li>
      </ul>

      <h2>What flat pricing changes</h2>
      <p>
        With one price per workspace, inviting someone is free up to the plan&apos;s limit. Everyone who touches the work can be on the board.
        Assignments stay accurate, history stays complete and nobody shares a login. You still pay more as you grow, but in a few clear steps
        you can plan for, not a little more every time you hire.
      </p>

      <h2>When per-seat pricing is fine</h2>
      <p>To be fair to per-seat tools, they can make sense when:</p>
      <ul>
        <li>Your team is very small and stable. Three people on Trello Standard pay $18 a month, which is less than our Team plan.</li>
        <li>You need features flat plans don&apos;t have, like company-wide goals, portfolios or deep enterprise integrations.</li>
        <li>You have hundreds of people and negotiate a custom contract anyway.</li>
      </ul>
      <p>
        If none of those describe you, it&apos;s worth doing the math for your own team. Our{" "}
        <Link href="/compare/asana">comparison pages</Link> have a slider that does it for you.
      </p>

      <h2>Why we chose flat pricing</h2>
      <p>
        We built Webetask to run our own agency, where the team changes with the work: freelancers join for a campaign, clients review, interns
        come and go. Paying per head punished exactly the flexibility we needed. So we price the workspace, publish every limit on the{" "}
        <Link href="/pricing">pricing page</Link> and let you invite whoever does the work.
      </p>
    </>
  );
}
