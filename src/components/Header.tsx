"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Close, Menu } from "./Icons";
import { LOGIN_URL, NAV, SIGNUP_URL } from "@/lib/site";

export function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // Close the phone menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isCurrent = (item: (typeof NAV)[number]) =>
    pathname === item.href || pathname.startsWith((item.match || item.href) + "/") || pathname === item.match;

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <Logo />
        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-login" href={LOGIN_URL}>
            Log in
          </a>
          <a className="btn btn--citrus btn--sm" href={SIGNUP_URL}>
            Start free
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <a href={LOGIN_URL}>Log in</a>
        </nav>
      )}
    </header>
  );
}
