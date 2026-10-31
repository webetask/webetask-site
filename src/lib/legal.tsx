import Link from "next/link";
import type { ReactNode } from "react";
import { SUPPORT_EMAIL } from "./site";

// Legal text in plain language. The same text is on app.webetask.app
// (src/content/legal/ in the app repo): change both together.
// Terms sections 6 (Liability) and 7 (Governing law) are interim wording, to be reviewed with a lawyer.

export const LEGAL_UPDATED = "October 31, 2026";

export type LegalDoc = {
  slug: "terms" | "privacy" | "refunds";
  tab: string;
  title: string;
  description: string;
  intro: string;
  // rich: the body holds its own paragraphs or lists, so it is not wrapped in a <p>.
  sections: { h: string; body: ReactNode; rich?: boolean }[];
};

export const LEGAL: LegalDoc[] = [
  {
    slug: "terms",
    tab: "Terms of Service",
    title: "Terms of Service",
    description: "The terms that cover your use of Webetask.",
    intro: 'These terms cover your use of Webetask, the task management service at webetask.app and app.webetask.app, run by Webegenix, based in Egypt ("Webetask", "we"). By creating an account, you agree to them.',
    sections: [
      { h: "1. Your account", body: "You need a valid email to sign up. You're responsible for everyone you invite to your workspace and for keeping your login safe. The person who creates a workspace is its owner." },
      {
        h: "2. Plans and billing",
        body: (
          <>
            Paid plans are billed monthly or yearly in advance, in US dollars, through Paddle, our reseller and merchant of record. Paddle handles the payment, invoices and sales tax. Each plan has the limits listed on our{" "}
            <Link href="/pricing">pricing page</Link>. Prices can change with at least 30 days&apos; notice by email.
          </>
        ),
      },
      { h: "3. Your content", body: "Everything you put into Webetask stays yours. Files you attach are stored where your workspace chooses: in your connected Google Drive, or in Webetask's hosted storage (Cloudflare R2). We only access your content to run the service and to support you when you ask." },
      { h: "4. Fair use", body: "Don't use Webetask to break the law, send spam, store harmful files or attack the service. We can suspend workspaces that do." },
      { h: "5. Downgrades and cancellation", body: "You can cancel anytime from billing settings. Your plan runs until the end of the period you paid for. If you go over a plan's limits after downgrading, extra projects and users become read-only. Nothing is deleted." },
      {
        h: "6. Liability",
        body: 'Webetask is provided "as is". We work hard to keep it running and your data safe, but we can\'t promise it will always be available or free of errors. As far as the law allows, we\'re not liable for indirect or consequential losses, like lost profits or lost data, and our total liability for any claim is limited to the amount you paid us in the 12 months before the claim. Nothing in these terms limits liability that the law doesn\'t allow us to limit.',
      },
      { h: "7. Governing law", body: "These terms are governed by the laws of Egypt, and disputes go to the courts of Cairo, Egypt. If you're a consumer, you keep any rights your local law gives you." },
      { h: "8. Contact", body: <>Questions about these terms: {SUPPORT_EMAIL}</> },
    ],
  },
  {
    slug: "privacy",
    tab: "Privacy Policy",
    title: "Privacy Policy",
    description: "What Webetask collects, including Google user data, why, who we share it with, and the control you have over it.",
    intro: "This policy explains what we collect when you use Webetask, why we collect it, who we share it with and what control you have. We've kept it in plain language.",
    sections: [
      {
        h: "1. Who we are and what this policy covers",
        rich: true,
        body: (
          <>
            <p>
              Webetask is a task management service for small teams. It&apos;s a product by Webegenix, based in Egypt (&quot;Webetask&quot;, &quot;we&quot;, &quot;us&quot;).
            </p>
            <p>
              This policy covers our marketing website at <a href="https://webetask.app">webetask.app</a> and the Webetask app at{" "}
              <a href="https://app.webetask.app">app.webetask.app</a>. It also covers any emails we send you and any support we give you. Contact us at {SUPPORT_EMAIL}.
            </p>
          </>
        ),
      },
      {
        h: "2. Data we collect",
        rich: true,
        body: (
          <>
            <p>We only collect what we need to run Webetask:</p>
            <ul>
              <li>
                <strong>Account data.</strong> Your name, email address and password when you sign up with email (we store only a secure hash of your password, never the password itself). If you sign in with Google instead, we get your name, email address and profile picture from Google (see section 3). You can also add a profile photo, your timezone and your notification settings.
              </li>
              <li>
                <strong>Workspace content.</strong> What you and your teammates put into Webetask, like workspaces, projects, tasks, comments, custom fields and files you attach.
              </li>
              <li>
                <strong>Files.</strong> Files you attach are stored where your workspace chooses: in Webetask&apos;s hosted storage (Cloudflare R2), or in the workspace&apos;s own connected Google Drive (see section 3).
              </li>
              <li>
                <strong>Usage and device data.</strong> Basic records like when you log in, which features you use, your browser and device type, and your IP address. We use these to keep the service secure and working. If you turn on push notifications, we also store the push address your browser gives us for that device.
              </li>
              <li>
                <strong>Payment data.</strong> Paddle handles payments for paid plans as our merchant of record. Paddle collects your card or payment details. We only get your billing name, email, country, plan and payment status. We never see your full card number.
              </li>
              <li>
                <strong>Contact-form messages.</strong> When you use the contact form on our website, we keep your name, email, team size, topic, message and IP address. We use them to reply to you and to keep spam out.
              </li>
            </ul>
          </>
        ),
      },
      {
        h: "3. Google user data",
        rich: true,
        body: (
          <>
            <p>
              You can sign in to Webetask with your email and a password, or with Google. A workspace can also connect a Google Drive account to store its files. These are the only two ways Webetask uses Google.
            </p>
            <h3>Signing in with Google</h3>
            <p>
              If you choose Google to sign in, we ask Google for the <code>openid</code>, <code>email</code> and <code>profile</code> scopes. That gives us exactly three things:
            </p>
            <ul>
              <li>your name</li>
              <li>your email address</li>
              <li>your profile picture</li>
            </ul>
            <p>
              <strong>Why we use it.</strong> To create your Webetask account and sign you in, and to show your name and photo to your teammates in shared workspaces, for example on tasks assigned to you and on your comments. We also use your email address to send you account emails and the notifications you turned on.
            </p>
            <h3>Connecting Google Drive for files</h3>
            <p>
              A workspace&apos;s Owner or Super Admin can choose to store the workspace&apos;s files in a Google Drive account. If they connect one, we ask Google for the <code>drive.file</code> scope, plus their email address to show which account is connected. The <code>drive.file</code> scope only lets Webetask see and manage the files and folders that Webetask itself creates in that Drive: a &quot;Webetask&quot; folder with a folder per project and task, and the files your team attaches there. Webetask can&apos;t see, open or change any other files in that Drive.
            </p>
            <p>
              <strong>Why we use it.</strong> To save the files your team attaches to tasks and comments in your own Drive, to open them for members of your workspace, to rename and move their folders when projects and tasks are renamed or moved, and to move files to the Drive&apos;s trash when they&apos;re deleted in Webetask.
            </p>
            <p>
              <strong>How it&apos;s stored.</strong> We keep an encrypted connection key on our servers so Webetask can reach those files. It&apos;s never sent to browsers. Disconnecting Google Drive in Settings → Storage deletes the key. The files stay in your Drive.
            </p>
            <h3>For both</h3>
            <p>
              <strong>What we don&apos;t access.</strong> We don&apos;t access anything else in your Google Account. That includes your Gmail, Google Calendar, Google Contacts, and any Google Drive files that Webetask didn&apos;t create.
            </p>
            <p>
              <strong>How it&apos;s stored.</strong> Your name, email address and profile picture are stored with your Webetask account in our database on Supabase, in the European Union. They&apos;re encrypted in transit and at rest, and only you, members of your workspaces and the staff who need it to run the service can see them. We keep them while your account is active and delete them within 30 days of a deletion request or account deletion.
            </p>
            <p>
              <strong>How it&apos;s never used.</strong> We never sell Google user data. We never use it for advertising, including retargeting or interest-based ads. We never use it to build or train generalized or non-personalized AI or machine learning models. We never share it with anyone except the service providers we need to run the app (see section 5), when the law requires it, or as part of a business transfer described in section 5. We never feed it into Google Analytics, Meta Pixel or any other analytics or advertising tool.
            </p>
            <p>
              Webetask&apos;s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
              <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>
            <p>
              You can remove Webetask&apos;s access to your Google Account at any time at{" "}
              <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>. After that you won&apos;t be able to sign in with Google, and a connected Drive stops working until it&apos;s connected again. To delete the data we already hold, see section 8.
            </p>
          </>
        ),
      },
      {
        h: "4. How we use data",
        rich: true,
        body: (
          <>
            <p>We use the data above to:</p>
            <ul>
              <li>run the service: create your account, sign you in, show your workspace to you and your teammates, store and open your files, and process payments</li>
              <li>send account emails, and the email and push notifications you turned on</li>
              <li>answer your support requests and contact-form messages</li>
              <li>keep Webetask secure, and prevent abuse, fraud and spam</li>
              <li>improve the product, using usage data to see which features work and which don&apos;t</li>
            </ul>
            <p>We don&apos;t sell your data. We don&apos;t show ads based on your workspace content, and we don&apos;t use it for advertising of any kind.</p>
          </>
        ),
      },
      {
        h: "5. Sharing",
        rich: true,
        body: (
          <>
            <p>We share data only with the service providers we need to run Webetask. Each one only gets what it needs for its job:</p>
            <ul>
              <li>
                <strong>Vercel</strong> hosts the Webetask app.
              </li>
              <li>
                <strong>Supabase</strong> runs our database and sign-in (authentication), in the EU region. Your account data, workspace content and Google user data are stored here.
              </li>
              <li>
                <strong>Cloudflare (R2)</strong> stores the files of workspaces that choose Webetask&apos;s hosted storage.
              </li>
              <li>
                <strong>Google Drive</strong> stores the files of workspaces that connect their own Drive (see section 3).
              </li>
              <li>
                <strong>Sentry</strong> receives error reports when something breaks in the app, in the EU: the error, the page address (without private parts like invite or sign-in links), your browser and device type, and an anonymous user id. Never task content, names, emails or file names.
              </li>
              <li>
                <strong>Resend</strong> sends our emails, like sign-up confirmation, password reset, invitation and notification emails.
              </li>
              <li>
                <strong>Browser push services</strong> (from Google, Apple or Mozilla, depending on your browser) deliver push notifications to devices where you turned them on. They receive the device&apos;s push address and an encrypted message that only your device can read.
              </li>
              <li>
                <strong>Hostinger</strong> provides the server (VPS) for our marketing website, including the contact form.
              </li>
              <li>
                <strong>Paddle</strong> processes payments as our merchant of record and handles billing, invoices and sales tax.
              </li>
              <li>
                <strong>Google Analytics</strong> and <strong>Meta Pixel</strong> measure visits to our marketing website only (see section 6).
              </li>
            </ul>
            <p>
              <strong>Legal requests.</strong> We may share data if the law requires it, for example a valid court order. We may also share it when we need to protect the rights, safety or property of our users, the public or Webetask. Where the law allows, we&apos;ll tell you first.
            </p>
            <p>
              <strong>Business transfer.</strong> If Webetask or Webegenix is part of a merger, acquisition or sale of assets, your data may move to the new owner. If it does, this policy will keep protecting it, including the rules for Google user data in section 3. We&apos;ll email you before it happens.
            </p>
          </>
        ),
      },
      {
        h: "6. Cookies and analytics",
        rich: true,
        body: (
          <>
            <p>
              Our marketing website at webetask.app uses Google Analytics and Meta Pixel. They set cookies so we can see how people find and use the site, and how well our ads work. They collect things like the pages you visit, how you got there, your browser and device, and a rough location based on your IP address. These tools are never fed with Google user data or your workspace content.
            </p>
            <p>The Webetask app only uses the cookies it needs to keep you signed in and to work properly.</p>
            <p>You can opt out at any time:</p>
            <ul>
              <li>block or delete cookies in your browser settings</li>
              <li>
                install the <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out browser add-on</a>
              </li>
              <li>
                manage ad preferences in your <a href="https://accountscenter.facebook.com/ad_preferences">Meta ad settings</a>
              </li>
            </ul>
          </>
        ),
      },
      {
        h: "7. Security",
        rich: true,
        body: (
          <>
            <p>We take reasonable steps to protect your data:</p>
            <ul>
              <li>All data is encrypted in transit with HTTPS (TLS) and encrypted at rest in our database.</li>
              <li>Only staff who need access to run or support the service can reach it.</li>
              <li>Row-level access controls in our database mean each workspace&apos;s data can only be read by its own members.</li>
              <li>Links to files only work for a few minutes, and only for people who can see the task.</li>
            </ul>
            <p>No system is perfectly secure. If a breach affects your data, we&apos;ll tell you and any authorities the law requires, without undue delay.</p>
          </>
        ),
      },
      {
        h: "8. Retention and deletion",
        rich: true,
        body: (
          <>
            <ul>
              <li>We keep account data, workspace content and Google user data while your account is active.</li>
              <li>When you delete your account or workspace, or ask us to delete your data, we delete it within 30 days.</li>
              <li>Items moved to a workspace&apos;s Trash are deleted for good after 30 days, together with their hosted files. Files stored in a connected Google Drive are moved to that Drive&apos;s trash.</li>
              <li>We keep contact-form messages for up to 24 months, then delete them.</li>
              <li>Paddle and we may keep billing records for longer when tax or accounting laws require it.</li>
            </ul>
            <p>
              To ask for deletion or a copy (export) of your data, email {SUPPORT_EMAIL} from the email address on your account. You can also disconnect Google at{" "}
              <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>.
            </p>
          </>
        ),
      },
      {
        h: "9. Your rights",
        body: (
          <>
            You can ask to access, correct, delete or export your data, and you can object to how we use it. Email {SUPPORT_EMAIL} and we&apos;ll reply within 30 days. You can also edit your profile in the app at any time. If you&apos;re in the EU or UK, you can also complain to your local data protection authority.
          </>
        ),
      },
      { h: "10. Children", body: "Webetask isn't meant for anyone under 16, and we don't knowingly collect data from children under 16. If you think a child has given us data, email us and we'll delete it." },
      {
        h: "11. International transfers",
        body: "We're based in Egypt. Our database is in the EU, and some of our service providers may process data in other countries, including the United States. When data moves between countries, we rely on our providers' safeguards, like the EU Standard Contractual Clauses, to protect it.",
      },
      {
        h: "12. Changes to this policy",
        body: "If we change this policy, we'll update the date at the top of this page. Before any material change, especially to how we use Google user data, we'll email you first. We'll also ask for your consent where the law or Google's policies require it.",
      },
      { h: "13. Contact", body: <>Privacy questions or requests go to {SUPPORT_EMAIL}. Webetask is a product by Webegenix, Egypt.</> },
    ],
  },
  {
    slug: "refunds",
    tab: "Refund Policy",
    title: "Refund Policy",
    description: "When and how Webetask refunds payments.",
    intro: "We want you to pay only for something that works for your team.",
    sections: [
      { h: "1. First payment", body: "Not happy with Webetask? Ask within 14 days of your first payment and we'll refund it in full. This works the same for monthly and yearly plans. The 14-day free trial doesn't need a refund, because nothing is charged during the trial." },
      { h: "2. Renewals", body: "Renewals aren't refunded, but you can cancel before the next billing date and you won't be charged again." },
      { h: "3. Add-ons and customizations", body: "Add-ons can be cancelled anytime and stop at the end of the billing period you paid for. Customizations are approved by you before we start, and aren't refunded once delivered." },
      { h: "4. How to ask", body: <>Email {SUPPORT_EMAIL} from the workspace owner&apos;s address. Refunds are issued through Paddle, our merchant of record, back to the original payment method within 5 to 10 business days.</> },
    ],
  },
];

export function getLegal(slug: string) {
  return LEGAL.find((d) => d.slug === slug);
}
