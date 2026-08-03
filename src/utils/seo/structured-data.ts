/**
 * @fileoverview JSON-LD structured data helpers.
 *
 * Structured data lets search engines understand the site as entities
 * (Organization, WebSite, BreadcrumbList, SoftwareApplication) rather than just text —
 * improving rich search results.
 */

import { siteConfig } from "@/lib/site";
import { AIModel } from "@/types/model";

/**
 * Organization + WebSite schema for the site root. Emitted in root layout.
 */
export function getSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/android-icon-192x192.png`,
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/models?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

/**
 * BreadcrumbList schema generator for internal page hierarchies.
 */
export function getBreadcrumbStructuredData(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${siteConfig.url}${item.path.startsWith("/") ? "" : "/"}${item.path}`,
    })),
  };
}

/**
 * SoftwareApplication JSON-LD schema for dynamic AI Model detail pages.
 */
export function getModelStructuredData(model: AIModel) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: model.name,
    description: model.description,
    applicationCategory: "AIModel",
    operatingSystem: model.availability === "local" ? "Cross-platform" : "Cloud API",
    url: `${siteConfig.url}/models/${model.slug}`,
    author: {
      "@type": "Organization",
      name: model.provider,
    },
    offers: {
      "@type": "Offer",
      price: model.pricing === "free" || model.pricing === "open-weights" ? "0" : undefined,
      priceCurrency: "USD",
      description: model.pricingDetails || model.pricing,
    },
    releaseDate: model.releaseDate,
  };
}
