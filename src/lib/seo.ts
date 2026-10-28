import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, PLANS, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "./site";

/** Builds page metadata with a canonical URL and matching social tags. */
export function pageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  type = "website",
}: {
  title?: string;
  description?: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title: title ? { absolute: title } : undefined,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title: title || `${SITE_NAME}: task management with one flat price`,
      description,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: title || SITE_NAME,
      description,
    },
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/apple-icon.png`,
  email: SUPPORT_EMAIL,
  parentOrganization: { "@type": "Organization", name: "Webegenix" },
};

export const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Project management",
  operatingSystem: "Web, iOS, Android",
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  offers: PLANS.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.monthly.toFixed(2),
    priceCurrency: "USD",
    description: `${p.name} plan, up to ${p.users} users, per workspace per month`,
  })),
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
