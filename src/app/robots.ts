import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Generates `/robots.txt`.
 * Allows crawling of all public directory and tool pages while blocking admin and API routes.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
