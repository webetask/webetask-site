"use client";

import { useState } from "react";
import { money, PLANS, SIGNUP_URL } from "@/lib/site";

export function PricingPlans() {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="stack stack--lg">
      <div role="group" aria-label="Billing period" className="toggle" style={{ alignSelf: "center" }}>
        <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>
          Yearly <span className="save">2 months free</span>
        </button>
        <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>
          Monthly
        </button>
      </div>

      <div className="plans">
        {PLANS.map((p) => {
          const perMonth = yearly ? p.yearly / 12 : p.monthly;
          const note =
            p.monthly === 0
              ? "Free forever"
              : yearly
                ? `${money(p.yearly)} billed yearly · save ${money(p.monthly * 12 - p.yearly)}`
                : `Billed monthly · ${money(p.yearly / 12, 2)}/mo yearly`;
          return (
            <div key={p.id} className={`plan${p.featured ? " plan--featured" : ""}`}>
              <div className="plan__head">
                <span className="plan__name">
                  {p.name}
                  {p.featured && <span className="plan__badge">Most popular</span>}
                </span>
                <span className="plan__for">{p.for}</span>
              </div>
              <div className="plan__price">
                <strong>
                  {money(perMonth, perMonth % 1 ? 2 : 0)}
                  {p.monthly > 0 && <small> /month</small>}
                </strong>
                <span>{note}</span>
              </div>
              <a
                href={p.id === "free" ? SIGNUP_URL : `${SIGNUP_URL}?plan=${p.id}${yearly ? "&billing=yearly" : ""}`}
                className={`btn ${p.featured ? "btn--citrus" : p.id === "free" ? "btn--outline" : "btn--dark"}`}
              >
                {p.cta}
              </a>
              <ul className="plan__list">
                <li>{p.intro}</li>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
