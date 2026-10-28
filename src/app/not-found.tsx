import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero section--ink" style={{ minHeight: "60vh" }}>
      <div className="wrap stack">
        <span className="eyebrow">404</span>
        <h1 className="h1">
          This card got lost <span className="text-citrus">between columns.</span>
        </h1>
        <p className="lead">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn--citrus">
            Go home
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
