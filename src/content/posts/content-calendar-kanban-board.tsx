import Link from "next/link";
import type { PostMeta } from "@/lib/blog-types";

export const meta: PostMeta = {
  slug: "content-calendar-kanban-board",
  title: "How to run a monthly content calendar on one Kanban board",
  description:
    "A practical setup for agencies and marketing teams: the columns, the card brief, who owns each step and how files and client approvals fit in. Copy it in an afternoon.",
  category: "Guide",
  date: "2026-10-20",
  readMinutes: 6,
};

export default function Post() {
  return (
    <>
      <p>
        Most content calendars start life as a spreadsheet. One row per post, a column for the caption, a column for the design link, a column
        that says &ldquo;approved?&rdquo; By week two, nobody trusts it. The caption in the sheet is not the caption in the design, the design
        link points to an old version, and the client approved something in a WhatsApp thread that never made it back to the sheet.
      </p>
      <p>
        We run monthly calendars for every client at our agency, Webegenix. This is the board setup we landed on after a lot of trial and error.
        It works in any Kanban tool, but it&apos;s also exactly how Webetask is built.
      </p>

      <h2>Why a board beats a spreadsheet</h2>
      <p>
        A spreadsheet shows you <em>what</em> is planned. A board shows you <em>where every post is right now</em> and who is holding it. That
        second question is the one that decides whether you post on time. When a card sits in &ldquo;Design&rdquo; for four days, everyone can
        see it, including the designer.
      </p>

      <h2>The columns that work</h2>
      <p>Each column is a step with a clear owner. Here is the order we use:</p>
      <ol>
        <li>
          <strong>Post idea:</strong> the topic and goal, agreed with the account manager.
        </li>
        <li>
          <strong>Content:</strong> the copywriter writes the caption and the text that goes on the design.
        </li>
        <li>
          <strong>Content approval:</strong> a reviewer checks tone, facts and spelling before design starts.
        </li>
        <li>
          <strong>Design:</strong> the designer builds the post, carousel, story or reel.
        </li>
        <li>
          <strong>Design approval:</strong> internal check against the brief.
        </li>
        <li>
          <strong>Client approval:</strong> the client sees the final version and approves or asks for changes.
        </li>
        <li>
          <strong>Scheduling:</strong> the account manager schedules it on the right platforms.
        </li>
        <li>
          <strong>Published:</strong> done. Keep it for reporting.
        </li>
      </ol>
      <p>
        Two approval steps before the client may look like a lot. They are the reason clients rarely send work back. Catching a wrong price in
        the caption at step 3 costs a minute. Catching it after design costs an hour.
      </p>

      <h2>One card per post, with the brief on the card</h2>
      <p>
        Every post, story or reel gets its own card. The card is the single source of truth, so the brief lives on it, not in a separate doc.
        These are the fields we keep:
      </p>
      <ul>
        <li>Format: post, carousel, story or reel</li>
        <li>Objective: awareness, engagement, leads, sales</li>
        <li>Caption</li>
        <li>Text on the visual, slide by slide for carousels</li>
        <li>Design or video brief</li>
        <li>Publish date and platforms</li>
      </ul>
      <p>
        When a field doesn&apos;t apply, leave it empty. The point is that nobody has to ask &ldquo;where&apos;s the brief?&rdquo; again.
      </p>

      <h2>Give every column an owner</h2>
      <p>
        This is the step most teams skip, and it&apos;s the one that saves the most time. For each client, decide who owns each column: which
        copywriter, which reviewer, which designer, which account manager. When a card moves into a column, it should belong to that person
        straight away.
      </p>
      <p>
        In Webetask this is automatic: you set the owners once per client, and moving a card assigns it and sends a push alert. In other tools
        you can build the same thing with automation rules, or do it by hand. Either way, the rule is the same: a card is never in a column
        without an owner, unless you can clearly see that it&apos;s unassigned.
      </p>

      <h2>Files: one folder per client, per month</h2>
      <p>
        Designs go through versions. Keep every version, but make the final one obvious. We store files in Google Drive in a simple structure:
        client, then month, then post. The card links to its folder and the approved file is marked <strong>Final</strong>. Nobody posts v2 when
        v4 was approved.
      </p>

      <h2>Client approval without screenshots</h2>
      <p>
        Sending screenshots on WhatsApp feels fast, but approvals get lost in the chat. Give the client a guest view of their own board instead.
        They see the posts waiting for them, approve or request changes, and the card moves on. You keep a record of who approved what and when.
      </p>

      <h2>Save it as a template</h2>
      <p>
        Once a month works, save the board as a template. Most of our clients are on one of two packages, so we keep two templates:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Template</th>
              <th>Cards created</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 posts</td>
              <td>12 post cards</td>
            </tr>
            <tr>
              <td>6 · 6 · 6</td>
              <td>6 posts, 6 stories, 6 reels</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Next month&apos;s calendar for a client is then one click, with every card already in Post idea.</p>

      <h2>Your checklist</h2>
      <ul>
        <li>One board per client per month</li>
        <li>Columns in the order above, each with a named owner</li>
        <li>One card per piece of content, brief on the card</li>
        <li>Files in Drive by client and month, final version marked</li>
        <li>Clients approve on the board, not in chat</li>
        <li>A template for each package you sell</li>
      </ul>
      <p>
        Want to try this setup? <Link href="/pricing">Webetask is free for up to 3 people</Link>. Build the board once, save it as a template
        and next month takes one click.
      </p>
    </>
  );
}
