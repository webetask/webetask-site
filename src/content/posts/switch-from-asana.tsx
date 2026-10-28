import Link from "next/link";
import type { PostMeta } from "@/lib/blog-types";

export const meta: PostMeta = {
  slug: "switch-from-asana",
  title: "How to leave Asana in one afternoon",
  description:
    "A step-by-step plan to move a small team from Asana to a new task tool without losing work: what to move, what to leave, how to export, and how to switch over cleanly.",
  category: "Switching",
  date: "2026-10-28",
  readMinutes: 6,
};

export default function Post() {
  return (
    <>
      <p>
        Switching task tools feels like a project in itself, so teams put it off for months. It doesn&apos;t have to be. If you are a team of
        under 50 people, you can move the work that matters in one afternoon. The trick is to move less than you think.
      </p>
      <p>
        This guide uses Webetask as the destination, but the same steps work for any tool. We&apos;re building a direct Asana import. Until it
        ships, this is the manual way, and it&apos;s the way we moved our own agency.
      </p>

      <h2>1. Decide what actually moves</h2>
      <p>Open Asana and sort your projects into three groups:</p>
      <ul>
        <li>
          <strong>Active:</strong> work in progress or starting soon. This moves.
        </li>
        <li>
          <strong>Repeating:</strong> processes you run every month, like a content calendar or a monthly report. These become templates.
        </li>
        <li>
          <strong>Finished:</strong> everything else. This stays where it is as an archive. You don&apos;t need last year&apos;s tasks on your
          new board.
        </li>
      </ul>
      <p>Most teams find that the &ldquo;Active&rdquo; group is much smaller than they feared.</p>

      <h2>2. Export what you want to keep</h2>
      <p>
        Asana lets you export a project to a CSV file from the project&apos;s menu. Export every active project, and any finished project you
        might need to look up later. Save the files in one folder. They are your safety net: once they exist, nothing is lost even after you
        stop paying for Asana.
      </p>

      <h2>3. Turn sections into columns</h2>
      <p>
        Asana sections usually map straight to board columns. Write down the columns for each type of project before you build anything. This
        is a good moment to fix a process that never quite worked: add the approval step you always skipped, or merge two columns nobody could
        tell apart.
      </p>

      <h2>4. Build one template per repeating process</h2>
      <p>
        In Webetask, create a project with your columns and custom fields, then save it as a template. For a content calendar that might be 12
        empty post cards. Next month starts from the template, so you only do this once.
      </p>

      <h2>5. Set owners for each column</h2>
      <p>
        Decide who owns each step. In Webetask you set this per client or project, and cards are assigned automatically when they move. This
        replaces most of the rules you had to build by hand in Asana.
      </p>

      <h2>6. Move the active tasks</h2>
      <p>
        Open each exported CSV and recreate the open tasks in the right column, with their due dates and the person holding them. Skip
        completed subtasks and old comments. If a task needs its history, paste a link to the Asana task in the description while you still
        have access.
      </p>

      <h2>7. Move files to Google Drive</h2>
      <p>
        If your files are attached in Asana, download the ones you still use and put them in Drive, one folder per client or project. Connect
        that Drive to Webetask and new uploads land in the right folder from then on.
      </p>

      <h2>8. Switch over on a Monday</h2>
      <ul>
        <li>Invite the team and walk them through one board in 15 minutes.</li>
        <li>From Monday, new work goes into Webetask only.</li>
        <li>Keep Asana read-only for two weeks for lookups.</li>
        <li>After two weeks, downgrade or cancel.</li>
      </ul>
      <blockquote>Running both tools in parallel is where switches die. Pick a day and stop creating tasks in the old one.</blockquote>

      <h2>What it costs to stay</h2>
      <p>
        A 10-person team on Asana Starter pays $134.90 a month with monthly billing. The same team on Webetask Team pays $19. Our{" "}
        <Link href="/compare/asana">Webetask vs Asana</Link> page shows the full comparison, including where Asana is the better fit.
      </p>
      <p>
        Moving a bigger team, or stuck on a step? <Link href="/contact">Get in touch</Link> and tell us what you&apos;re moving.
      </p>
    </>
  );
}
