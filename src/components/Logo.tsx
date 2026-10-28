import Link from "next/link";

/** The "moving cards" symbol. `onDark` swaps the back cards to white tints. */
export function LogoMark({ size = 30, onDark = true }: { size?: number; onDark?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" aria-hidden="true" focusable="false">
      <rect x="6" y="10" width="34" height="22" rx="6" fill={onDark ? "#FFFFFF" : "#A0AEFF"} fillOpacity={onDark ? 0.45 : 1} />
      <rect x="22" y="30" width="34" height="22" rx="6" fill={onDark ? "#FFFFFF" : "#2B4BFF"} />
      <rect x="40" y="50" width="34" height="22" rx="6" fill="#FFB020" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Webetask home">
      <LogoMark />
      <span className="logo__word">
        <span>Webe</span>task
      </span>
    </Link>
  );
}
