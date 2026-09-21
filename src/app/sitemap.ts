import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { db } from "@/lib/db";

export const revalidate = 86400; // Cache sitemap for 24 hours at Edge CDN

const MODELS_PER_SITEMAP = 5000;

/**
 * Tells Next.js how many sitemap files to generate.
 * Produces `/sitemap/0.xml`, `/sitemap/1.xml`, etc.
 *   - id 0: static + comparison routes
 *   - id 1..N: model detail pages (5,000 per file)
 */
export async function generateSitemaps() {
  const models = await db.getModels();
  const modelChunks = Math.ceil(models.length / MODELS_PER_SITEMAP);
  return Array.from({ length: 1 + modelChunks }, (_, i) => ({ id: i }));
}

/**
 * Generates the sitemap for a given chunk id.
 * Next.js 16 passes id as Promise<string> from the URL segment.
 */
export default async function sitemap(
  props: { id: Promise<string> }
): Promise<MetadataRoute.Sitemap> {
  const id = Number(await props.id);
  const base = siteConfig.url;
  const now = new Date();

  /* ---- id 0: Static & Comparison routes ---- */
  if (id === 0) {
    const staticRoutes: MetadataRoute.Sitemap = [
      { url: base,                                lastModified: now, changeFrequency: "daily",   priority: 1.0 },
      { url: `${base}/models`,                   lastModified: now, changeFrequency: "daily",   priority: 0.9 },
      { url: `${base}/playground`,               lastModified: now, changeFrequency: "daily",   priority: 0.9 },
      { url: `${base}/solve`,                    lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
      { url: `${base}/telemetry`,                lastModified: now, changeFrequency: "daily",   priority: 0.8 },
      { url: `${base}/compare`,                  lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
      { url: `${base}/tools`,                   lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
      { url: `${base}/tools/vram-calculator`,    lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
      { url: `${base}/tools/model-finder`,       lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
      { url: `${base}/tools/token-calculator`,   lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
      { url: `${base}/tools/cost-calculator`,    lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
      { url: `${base}/tools/context-calculator`, lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
      { url: `${base}/local`,                   lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
      { url: `${base}/cloud`,                   lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
      { url: `${base}/about`,                   lastModified: now, changeFrequency: "monthly", priority: 0.5 },
      { url: `${base}/privacy`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
      { url: `${base}/terms`,                   lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
      { url: `${base}/disclaimer`,              lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
      { url: `${base}/contact`,                 lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    ];

    const topComparisons = [
      "deepseek-r1-vs-llama-3.3-70b",
      "llama-3.3-70b-vs-qwen-2.5-72b",
      "deepseek-r1-vs-qwen-2.5-72b",
      "gemini-2.0-flash-vs-llama-3.3-70b",
      "smollm2-135m-vs-lamini-flan-t5",
    ];

    const compareRoutes: MetadataRoute.Sitemap = topComparisons.map((slugs) => ({
      url: `${base}/compare/${slugs}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    return [...staticRoutes, ...compareRoutes];
  }

  /* ---- id 1..N: Model pages (5,000 per chunk) ---- */
  const models = await db.getModels();
  const chunkIndex = id - 1;
  const start = chunkIndex * MODELS_PER_SITEMAP;
  const chunk = models.slice(start, start + MODELS_PER_SITEMAP);

  return chunk.map((model) => ({
    url: `${base}/models/${model.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}
