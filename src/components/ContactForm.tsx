"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "./Icons";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error || "We couldn't send your message.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send your message.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="sent" role="status">
        <span className="icon-box icon-box--ink" style={{ width: 48, height: 48 }}>
          <Check size={22} />
        </span>
        <h2 className="h3" style={{ fontSize: 24 }}>
          Message sent
        </h2>
        <p style={{ color: "var(--text-2)" }}>We&apos;ll reply to the email you gave us. Check your spam folder if you don&apos;t see it.</p>
        <button type="button" className="btn btn--outline" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" type="text" className="input" required maxLength={120} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-email">Work email</label>
          <input id="c-email" name="email" type="email" className="input" required maxLength={200} autoComplete="email" />
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="c-size">Team size</label>
          <select id="c-size" name="teamSize" className="input" defaultValue="4 to 10">
            <option>Just me</option>
            <option>2 to 3</option>
            <option>4 to 10</option>
            <option>11 to 30</option>
            <option>31 to 50</option>
            <option>More than 50</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="c-topic">What&apos;s it about?</label>
          <select id="c-topic" name="topic" className="input" defaultValue="Plans and pricing">
            <option>Plans and pricing</option>
            <option>Custom setup</option>
            <option>Something isn&apos;t working</option>
            <option>Billing</option>
            <option>Something else</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-msg">Message</label>
        <textarea id="c-msg" name="message" rows={6} className="input" required minLength={10} maxLength={5000} placeholder="Tell us what your team needs" />
      </div>
      {/* Spam trap: real people never see or fill this field */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="c-company">Company website</label>
        <input id="c-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && (
        <p className="form-error" role="alert">
          {error} You can also email us directly.
        </p>
      )}
      <div className="row-between" style={{ alignItems: "center" }}>
        <span className="small muted" style={{ maxWidth: "30em" }}>
          We only use your details to reply. See our <Link href="/legal/privacy" style={{ color: "var(--cobalt)" }}>privacy policy</Link>.
        </span>
        <button type="submit" className="btn btn--dark" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
