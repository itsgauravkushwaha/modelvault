import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Generates `/robots.txt`.
 * Grants 100% crawl access to all search engines and AI bots (GPTBot, PerplexityBot, ClaudeBot, etc.)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/admin/"],
      },
      {
        userAgent: ["GPTBot", "PerplexityBot", "ClaudeBot", "CCBot", "Bytespider", "Google-Extended"],
        allow: "/",
        disallow: ["/admin/", "/api/admin/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
