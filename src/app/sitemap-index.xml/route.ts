import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";
import { db } from "@/lib/db";

export const revalidate = 86400;

const MODELS_PER_SITEMAP = 5000;

/**
 * Manual sitemap index since Next.js 16 doesn't auto-generate one.
 * Produces a `<sitemapindex>` at `/sitemap-index.xml` pointing to `/sitemap/0.xml`, etc.
 */
export async function GET() {
  const models = await db.getModels();
  const modelChunks = Math.ceil(models.length / MODELS_PER_SITEMAP);
  const totalSitemaps = 1 + modelChunks; // 0 = static, 1..N = models

  const base = siteConfig.url;
  const now = new Date().toISOString();

  const entries = Array.from({ length: totalSitemaps }, (_, i) =>
    `  <sitemap>\n    <loc>${base}/sitemap/${i}.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
