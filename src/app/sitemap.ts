import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { db } from "@/lib/db";

export const revalidate = 86400; // Cache sitemap for 24 hours at Edge CDN

/**
 * Generates `/sitemap.xml`.
 * Static routes are listed explicitly; dynamic model pages are derived from
 * Supabase models dataset so the sitemap stays in sync automatically.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();

  /* ---- Static routes ---- */
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/models`,               lastModified: now, changeFrequency: "daily",   priority: 0.9 },
    { url: `${base}/compare`,              lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/dashboard`,            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tools`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/cost-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/local`,               lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/cloud`,               lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/about`,               lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`,             lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,               lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/disclaimer`,          lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/contact`,             lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  /* ---- Dynamic model pages ---- */
  const models = await db.getModels();
  const modelRoutes: MetadataRoute.Sitemap = models.map((model) => ({
    url: `${base}/models/${model.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...modelRoutes];
}
