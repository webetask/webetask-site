import Link from "next/link";
import { ArrowRight, Check } from "@/components/Icons";
import { BigCta, JsonLd, Marquee } from "@/components/Bits";
import { HireCounter } from "@/components/HireCounter";
import { Bento, BlogStrip, FilesBand, FlowDemo, PriceTags } from "@/components/Sections";
import { pageMeta, softwareLd } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "Webetask: task management with one flat price, not per seat",
  description:
    "Boards, lists, calendars and auto-assign for your whole team, plus unlimited files through Google Drive. One flat price per workspace. Free for 3 people.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__cards" aria-hidden="true">
            <div className="hero__card hero__card--1">
              <span>Post idea</span>
              <i />
            </div>
            <div className="hero__card hero__card--2">
              <span>Design</span>
              <i />
            </div>
            <div className="hero__card hero__card--3">
              <span>Done</span>
              <span>
                <Check size={12} />
                Approved
              </span>
            </div>
          </div>

          <div className="hero__content">
            <span className="eyebrow rise-1" style={{ color: "var(--tint)", border: "1px solid var(--ink-line)" }}>
              Task management for teams that ship
            </span>
            <h1 className="display hero__title">
              <span className="rise-2">Work moves.</span>
              <span className="rise-3 text-citrus">
                Your bill <em>doesn&apos;t.</em>
              </span>
            </h1>
            <div className="hero__foot rise-3">
              <p className="lead" style={{ color: "var(--on-ink-2)", maxWidth: "28em" }}>
                Boards, lists, calendars and auto-assign for your whole team. One flat price. Zero seats.
              </p>
              <div className="btn-row">
                <a href={SIGNUP_URL} className="btn btn--citrus">
                  Start free
                  <ArrowRight />
                </a>
                <Link href="/pricing" className="btn btn--ghost">
                  See pricing
                </Link>
              </div>
            </div>
            <span className="small rise-3" style={{ color: "var(--on-ink-4)" }}>
              Free for 3 people. No card.
            </span>
          </div>
        </div>
      </section>

      <Marquee />

      {/* HIRE COUNTER */}
      <section className="section section--mist after-marquee">
        <div className="wrap">
          <HireCounter />
        </div>
      </section>

      {/* A CARD'S LIFE */}
      <section className="section section--ink" style={{ paddingBottom: "clamp(40px, 5vw, 64px)" }}>
        <div className="wrap stack stack--lg">
          <div className="row-between">
            <h2 className="h2">
              Cards find <span className="text-citrus">their owner.</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--on-ink-3)", maxWidth: "26em" }}>
              Drop a card in Design and your designer has it. Drop it in Approval and your client gets a ping.
            </p>
          </div>
          <FlowDemo />
        </div>
      </section>

      {/* BENTO */}
      <section className="section section--ink section--tight-top">
        <div className="wrap stack stack--lg">
          <div className="row-between">
            <h2 className="h2">Everything your team needs.</h2>
            <Link href="/features" className="link-arrow">
              All features →
            </Link>
          </div>
          <Bento />
        </div>
      </section>

      <FilesBand />

      {/* PRICING */}
      <section className="section section--mist section--flush-top">
        <div className="wrap stack stack--lg divider-top">
          <div className="row-between">
            <h2 className="h2">
              One price. <span className="text-cobalt">Whole team.</span>
            </h2>
            <Link href="/pricing" className="link-arrow">
              Compare every plan →
            </Link>
          </div>
          <PriceTags />
          <p className="small muted">Per workspace, per month. Pay yearly and get 2 months free.</p>
        </div>
      </section>

      {/* BLOG */}
      <section className="section section--mist section--flush-top">
        <div className="wrap">
          <BlogStrip />
        </div>
      </section>

      <BigCta />
      <JsonLd data={softwareLd} />
    </>
  );
}
