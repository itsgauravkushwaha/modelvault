import { Metadata } from "next";
import { ModelDetailView } from "@/views/model-detail";
import { db } from "@/lib/db";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import {
  getBreadcrumbStructuredData,
  getModelStructuredData,
  getFaqStructuredData,
} from "@/utils/seo/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 86400; // ISR cache for 24 hours
export const dynamicParams = true; // On-demand rendering for remaining 11,000+ models

export async function generateStaticParams() {
  const models = await db.getModels();
  // Prerender top 200 models (featured / trending / popular) during build
  return models.slice(0, 200).map((model) => ({
    slug: model.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = await db.getModelBySlug(slug);

  if (!model) {
    return generatePageMetadata({
      title: "Model Not Found — ModelVault",
      description: "The requested AI model specification could not be found.",
      url: `/models/${slug}`,
    });
  }

  const fallbackDescription = `${model.name} by ${model.provider}: specs, hardware footprint (${model.hardwareRequirements || 'Cloud Hosted'}), context window (${model.contextWindow}), pricing, and live AI battle arena on ModelVault.`;

  return generatePageMetadata({
    title: `${model.name}: Specs, Hardware & Live AI Battle | ModelVault`,
    description: model.description?.trim() || fallbackDescription,
    url: `/models/${model.slug}`,
  });
}

export default async function ModelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const model = await db.getModelBySlug(slug);

  const breadcrumbsJsonLd = getBreadcrumbStructuredData([
    { name: "Home", path: "/" },
    { name: "All Models", path: "/models" },
    { name: model?.name || slug, path: `/models/${slug}` },
  ]);

  const modelJsonLd = model ? getModelStructuredData(model) : null;
  const faqJsonLd = model ? getFaqStructuredData(model) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      {modelJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(modelJsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ModelDetailView slug={slug} initialModel={model} />
    </>
  );
}


