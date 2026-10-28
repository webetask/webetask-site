"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="copy-row">
      <b>{email}</b>
      <button
        type="button"
        className="btn btn--citrus btn--sm"
        onClick={() => {
          navigator.clipboard?.writeText(email).then(
            () => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            },
            () => {},
          );
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
