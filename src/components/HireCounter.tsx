"use client";

import { useState } from "react";
import { Plus } from "./Icons";
import { money, planForTeam, PRICES_CHECKED } from "@/lib/site";
import { cssVar } from "@/lib/css";

const ASANA_STARTER = 13.49;
const START = 5;
const MAX = 50;

export function HireCounter() {
  const [size, setSize] = useState(START);
  const plan = planForTeam(size);
  const theirs = size * ASANA_STARTER;
  const scale = MAX * ASANA_STARTER;

  let verdict = "Still $19. Keep hiring.";
  if (size === 10) verdict = "Still $19. One more hire moves you to Pro.";
  else if (size > 10 && size <= 30) verdict = "Pro covers up to 30 people, one price.";
  else if (size > 30 && size < MAX) verdict = "Business covers up to 50 people.";
  else if (size >= MAX) verdict = "50 people for $149.";

  return (
    <div className="stack stack--lg">
      <div className="row-between">
        <h2 className="h2">
          Go on. <span className="text-cobalt">Hire someone.</span>
        </h2>
        <div className="btn-row">
          <button type="button" className="btn btn--dark" onClick={() => setSize((s) => Math.min(MAX, s + 1))} disabled={size >= MAX}>
            <Plus />
            Add a teammate
          </button>
          <button type="button" className="btn btn--outline" onClick={() => setSize(START)}>
            Reset
          </button>
        </div>
      </div>

      <div className="team-line" aria-live="polite">
        <span>Team of</span>
        <span className="team-count">{size}</span>
        <span className="team-people" aria-hidden="true">
          {Array.from({ length: size }, (_, i) => (
            <i key={i} />
          ))}
        </span>
      </div>

      <div className="grid-auto" style={{ ...cssVar("--min", "280px") }}>
        <div className="card card--sticker">
          <span className="label">Webetask · {plan.name}</span>
          <span className="price-big">
            {money(plan.monthly)}
            <small> /month</small>
          </span>
          <div className="bar">
            <div className="bar__fill bar__fill--citrus" style={{ width: `${Math.max(3, (plan.monthly / scale) * 100)}%` }} />
          </div>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{verdict}</span>
        </div>
        <div className="card card--muted">
          <span className="label" style={{ color: "#4A5178" }}>
            Per-seat tool · Asana Starter
          </span>
          <span className="price-big" style={{ color: "var(--text-2)" }}>
            {money(theirs, 2)}
            <small> /month</small>
          </span>
          <div className="bar bar--on-muted">
            <div className="bar__fill bar__fill--ink" style={{ width: `${Math.max(3, (theirs / scale) * 100)}%` }} />
          </div>
          <span style={{ fontSize: 14, color: "var(--text-2)" }}>Grows with every hire.</span>
        </div>
      </div>
      <p className="fine muted">Asana Starter at $13.49 per user, monthly billing, {PRICES_CHECKED}.</p>
    </div>
  );
}
