import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Old or guessed URLs people may type
      { source: "/vs-asana", destination: "/compare/asana", permanent: true },
      { source: "/vs-clickup", destination: "/compare/clickup", permanent: true },
      { source: "/vs-trello", destination: "/compare/trello", permanent: true },
      { source: "/terms", destination: "/legal/terms", permanent: true },
      { source: "/privacy", destination: "/legal/privacy", permanent: true },
      { source: "/refunds", destination: "/legal/refunds", permanent: true },
      { source: "/login", destination: "https://app.webetask.app/login", permanent: false },
      { source: "/signup", destination: "https://app.webetask.app/signup", permanent: false },
    ];
  },
};

export default nextConfig;
