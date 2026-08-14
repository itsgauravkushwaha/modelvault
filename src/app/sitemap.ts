import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { db } from "@/lib/db";

export const revalidate = 86400; // Cache sitemap for 24 hours at Edge CDN

/**
 * Generates `/sitemap.xml`.
 * Lists static routes, core tools, dynamic comparison routes, and 11,468 dynamic model pages for #1 Google Indexing.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();

  /* ---- Static & Core Tool routes ---- */
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

  /* ---- Pairwise Comparison Routes ---- */
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

  /* ---- Dynamic model pages ---- */
  const models = await db.getModels();
  const modelRoutes: MetadataRoute.Sitemap = models.map((model) => ({
    url: `${base}/models/${model.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...compareRoutes, ...modelRoutes];
}
