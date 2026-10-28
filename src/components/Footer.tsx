import Link from "next/link";
import { LogoMark } from "./Logo";
import { LOGIN_URL, SUPPORT_EMAIL } from "@/lib/site";

const COLS = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: LOGIN_URL, label: "Log in", external: true },
    ],
  },
  {
    title: "Compare",
    links: [
      { href: "/compare/asana", label: "vs Asana" },
      { href: "/compare/clickup", label: "vs ClickUp" },
      { href: "/compare/trello", label: "vs Trello" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/refunds", label: "Refunds" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <span className="logo">
            <LogoMark size={26} />
            <span className="logo__word" style={{ fontSize: 19 }}>
              <span>Webe</span>task
            </span>
          </span>
          <p>Task management for small teams. One flat price, unlimited files.</p>
        </div>
        <div className="site-footer__cols">
          {COLS.map((col) => (
            <div key={col.title} className="site-footer__col">
              <h2>{col.title}</h2>
              {col.links.map((l) =>
                "external" in l && l.external ? (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.href} href={l.href}>
                    {l.label}
                  </Link>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Webetask. A Webegenix product.</span>
        <span>{SUPPORT_EMAIL}</span>
      </div>
    </footer>
  );
}
