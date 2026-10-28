import type { CSSProperties } from "react";

/** Sets a CSS custom property inline, e.g. style={{ ...cssVar("--min", "280px") }} */
export function cssVar(name: `--${string}`, value: string): CSSProperties {
  return { [name]: value } as CSSProperties;
}
