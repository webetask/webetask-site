"use client";

import { useState } from "react";
import { money, planForTeam } from "@/lib/site";

export function CompareCalc({ planName, rate, note }: { planName: string; rate: number; note: string }) {
  const [size, setSize] = useState(10);
  const ours = planForTeam(size);
  const theirs = size * rate;
  const saved = Math.max(0, Math.round((theirs - ours.monthly) * 12));

  return (
    <div className="calc">
      <label htmlFor="team-size">
        <span>Your team size</span>
        <b>{size} people</b>
      </label>
      <input
        id="team-size"
        type="range"
        min={2}
        max={50}
        step={1}
        value={size}
        onChange={(e) => setSize(parseInt(e.target.value, 10) || 10)}
        aria-valuetext={`${size} people`}
      />
      <div className="calc__grid" aria-live="polite">
        <div className="calc__box calc__box--us">
          <span>Webetask {ours.name}</span>
          <strong>
            {money(ours.monthly)}
            <small>/mo</small>
          </strong>
        </div>
        <div className="calc__box calc__box--them">
          <span>{planName}</span>
          <strong>
            {money(theirs, theirs % 1 ? 2 : 0)}
            <small>/mo</small>
          </strong>
        </div>
      </div>
      <div className="calc__save">
        <span>You keep</span>
        <b>{money(saved)} a year</b>
      </div>
      <p className="fine" style={{ color: "var(--on-ink-4)" }}>
        {note}
      </p>
    </div>
  );
}
