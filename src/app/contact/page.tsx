import { JsonLd } from "@/components/Bits";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact Webetask",
  description: "Questions about plans, a custom setup or something that isn't working? Send us a message or email support@webetask.app.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section--ink">
        <div className="wrap split" style={{ alignItems: "flex-start" }}>
          <div className="stack">
            <span className="eyebrow">Contact</span>
            <h1 className="h1">Talk to a real person.</h1>
            <p className="lead">Questions about plans, a custom setup or something that isn&apos;t working. Send a message and we&apos;ll reply by email.</p>
            <div className="card card--ink" style={{ marginTop: 8 }}>
              <span className="label" style={{ color: "var(--on-ink-3)" }}>
                Email us directly
              </span>
              <CopyEmail email={SUPPORT_EMAIL} />
              <p className="small">A person on our team reads every message.</p>
            </div>
          </div>
          <div className="card" style={{ padding: "clamp(22px, 3.4vw, 36px)" }}>
            <ContactForm />
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
    </>
  );
}
