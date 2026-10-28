import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Webetask",
    short_name: "Webetask",
    description: "Task management for small teams with one flat price.",
    start_url: "/",
    display: "browser",
    background_color: "#0A0F2C",
    theme_color: "#0A0F2C",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
