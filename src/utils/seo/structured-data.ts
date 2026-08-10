/**
 * @fileoverview JSON-LD structured data helpers.
 *
 * Structured data lets search engines understand the site as entities
 * (Organization, WebSite, BreadcrumbList, SoftwareApplication, FAQPage) rather than just text —
 * improving rich search results and ranking #1 in Google featured snippets.
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
    operatingSystem: model.availability === "local" ? "Cross-platform / WebGPU" : "Cloud API",
    url: `${siteConfig.url}/models/${model.slug}`,
    author: {
      "@type": "Organization",
      name: model.provider,
    },
    offers: {
      "@type": "Offer",
      price: model.pricing === "free" || model.pricing === "open-weights" ? "0.00" : "0.00",
      priceCurrency: "USD",
      description: model.pricingDetails || model.pricing,
    },
    releaseDate: model.releaseDate,
  };
}

/**
 * FAQPage JSON-LD schema for AI Model pages — captures Google #1 Featured Snippet Accordion!
 */
export function getFaqStructuredData(model: AIModel) {
  const hardwareNote = model.hardwareRequirements
    ? `${model.name} hardware requirements: ${model.hardwareRequirements}.`
    : `${model.name} runs efficiently on cloud inference hardware and edge WebGPU runtimes.`;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What hardware is required for ${model.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: hardwareNote,
        },
      },
      {
        "@type": "Question",
        name: `Is ${model.name} open weights or cloud API?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${model.name} by ${model.provider} is available as ${model.availability} under ${model.license} license with ${model.pricing} access rights.`,
        },
      },
      {
        "@type": "Question",
        name: `Where can I test ${model.name} live for free?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can test ${model.name} live in ModelVault's sub-300ms AI Playground and Side-by-Side Battle Arena at https://modelvault.space/playground.`,
        },
      },
    ],
  };
}

/**
 * Pairwise Comparison JSON-LD schema for /compare/[slug1]-vs-[slug2] routes.
 */
export function getComparisonStructuredData(modelA: AIModel, modelB: AIModel) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${modelA.name} vs ${modelB.name} Comparison`,
    description: `Compare ${modelA.name} vs ${modelB.name}: specs, license, hardware requirements, and live battle benchmarks on ModelVault.`,
    url: `${siteConfig.url}/compare/${modelA.slug}-vs-${modelB.slug}`,
  };
}
