import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "@/lib/og";

export const alt = "Webetask: work moves, your bill doesn't. Task management with one flat price.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<OgCard kicker="Task management for teams that ship" title="Work moves. Your bill doesn't." />, size);
}
