import Link from "next/link";
import type { ReactNode } from "react";
import { SUPPORT_EMAIL } from "./site";

// DRAFT legal text in plain language. Have a lawyer review it before launch.
// Every [BRACKETED] item must be filled in.

export const LEGAL_UPDATED = "[EFFECTIVE DATE]";

export type LegalDoc = {
  slug: "terms" | "privacy" | "refunds";
  tab: string;
  title: string;
  description: string;
  intro: string;
  sections: { h: string; body: ReactNode }[];
};

export const LEGAL: LegalDoc[] = [
  {
    slug: "terms",
    tab: "Terms of Service",
    title: "Terms of Service",
    description: "The terms that cover your use of Webetask.",
    intro: 'These terms cover your use of Webetask, the task management service at webetask.app, run by Webetask ("we"). By creating an account, you agree to them.',
    sections: [
      { h: "1. Your account", body: "You need a valid email to sign up. You're responsible for everyone you invite to your workspace and for keeping your login safe. The person who creates a workspace is its owner." },
      {
        h: "2. Plans and billing",
        body: (
          <>
            Paid plans are billed monthly or yearly in advance, in US dollars, through [PAYMENT PROVIDER]. Each plan has the limits listed on our{" "}
            <Link href="/pricing">pricing page</Link>. Prices can change with at least 30 days&apos; notice by email.
          </>
        ),
      },
      { h: "3. Your content", body: "Everything you put into Webetask stays yours. Files you upload through a connected Google Drive are stored in that Drive. We only access your content to run the service and to support you when you ask." },
      { h: "4. Fair use", body: "Don't use Webetask to break the law, send spam, store harmful files or attack the service. We can suspend workspaces that do." },
      { h: "5. Downgrades and cancellation", body: "You can cancel anytime from billing settings. Your plan runs until the end of the period you paid for. If you go over a plan's limits after downgrading, extra projects and users become read-only. Nothing is deleted." },
      { h: "6. Liability", body: "[LIABILITY CLAUSE, to be written with a lawyer]" },
      { h: "7. Governing law", body: "[GOVERNING LAW AND JURISDICTION, to be confirmed once the company is registered]" },
      { h: "8. Contact", body: <>Questions about these terms: {SUPPORT_EMAIL}</> },
    ],
  },
  {
    slug: "privacy",
    tab: "Privacy Policy",
    title: "Privacy Policy",
    description: "What Webetask collects, why, and the control you have over it.",
    intro: "This policy explains what we collect when you use Webetask, why, and what control you have.",
    sections: [
      { h: "1. What we collect", body: "Your name, email and profile photo. Your workspace content: projects, tasks, comments and custom fields. Basic usage data, like when you log in and which device you use. Payment details are handled by [PAYMENT PROVIDER]; we never see your full card number." },
      { h: "2. Messages you send us", body: "When you use the contact form, we keep your name, email, team size, topic, message and IP address so we can reply and keep spam out." },
      { h: "3. Your files", body: "If you connect Google Drive, files are uploaded to your Drive and we keep only a reference to them. If you use Webetask storage, files are stored with our storage provider." },
      { h: "4. Where data lives", body: "Our database is hosted in the European Union (Frankfurt). [LIST OF SUBPROCESSORS]" },
      { h: "5. How we use it", body: "To run the service, send the notifications you turned on, answer support requests and improve Webetask. We don't sell your data and we don't use your content for advertising." },
      { h: "6. Your choices", body: "You can export your data, edit your profile or delete your account at any time. Deleting a workspace removes its data from our systems within [DELETION PERIOD]." },
      { h: "7. Contact", body: <>Privacy questions go to {SUPPORT_EMAIL}.</> },
    ],
  },
  {
    slug: "refunds",
    tab: "Refund Policy",
    title: "Refund Policy",
    description: "When and how Webetask refunds payments.",
    intro: "We want you to pay only for something that works for your team.",
    sections: [
      { h: "1. First payment", body: "Not happy after your first paid month or year? Ask within [REFUND WINDOW] days and we'll refund it in full." },
      { h: "2. Renewals", body: "Renewals aren't refunded, but you can cancel before the next billing date and you won't be charged again." },
      { h: "3. Add-ons and customizations", body: "Monthly add-ons can be cancelled anytime and stop at the end of the month. Customizations are approved by you before we start, and aren't refunded once delivered." },
      { h: "4. How to ask", body: <>Email {SUPPORT_EMAIL} from the workspace owner&apos;s address. Refunds go back to the original payment method within [PROCESSING TIME].</> },
    ],
  },
];

export function getLegal(slug: string) {
  return LEGAL.find((d) => d.slug === slug);
}
