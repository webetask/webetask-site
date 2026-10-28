// Shared layout for social share images (1200 x 630).
// Uses only flexbox and inline styles, which is what next/og supports.

export const OG_SIZE = { width: 1200, height: 630 };

export function OgCard({ kicker, title, footer = "webetask.app" }: { kicker: string; title: string; footer?: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0A0F2C",
        color: "#FFFFFF",
        padding: "64px 72px",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* the three logo cards */}
      <div style={{ position: "absolute", right: 70, top: 60, width: 300, height: 250, display: "flex" }}>
        <div style={{ position: "absolute", left: 0, top: 0, width: 168, height: 85, borderRadius: 18, background: "#A0AEFF", transform: "rotate(-8deg)" }} />
        <div style={{ position: "absolute", left: 72, top: 82, width: 168, height: 85, borderRadius: 18, background: "#2B4BFF", transform: "rotate(4deg)" }} />
        <div style={{ position: "absolute", left: 132, top: 165, width: 168, height: 85, borderRadius: 18, background: "#FFB020", transform: "rotate(-3deg)" }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
        <span style={{ color: "#8FA2FF" }}>Webe</span>
        <span>task</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 820 }}>
        <span style={{ fontSize: 24, color: "#A0AEFF", textTransform: "uppercase", letterSpacing: 3 }}>{kicker}</span>
        <span style={{ fontSize: title.length > 60 ? 54 : 66, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>{title}</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, color: "#C9CFF0" }}>
        <span>{footer}</span>
        <span style={{ background: "#FFB020", color: "#0A0F2C", borderRadius: 999, padding: "10px 24px", fontWeight: 700 }}>Start free</span>
      </div>
    </div>
  );
}
