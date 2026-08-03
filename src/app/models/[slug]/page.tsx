import { Metadata } from "next";
import { ModelDetailView } from "@/views/model-detail";
import { MODELS } from "@/data/models";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import {
  getBreadcrumbStructuredData,
  getModelStructuredData,
} from "@/utils/seo/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MODELS.map((model) => ({
    slug: model.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = MODELS.find((m) => m.slug === slug);

  if (!model) {
    return generatePageMetadata({
      title: "Model Not Found — ModelVault",
      description: "The requested AI model specification could not be found.",
      url: `/models/${slug}`,
    });
  }

  const fallbackDescription = `${model.name} by ${model.provider}: specifications, context window (${model.contextWindow}), pricing, and performance benchmarks on ModelVault.`;

  return generatePageMetadata({
    title: `${model.name} — AI Model Specs, Benchmarks & Pricing | ModelVault`,
    description: model.description?.trim() || fallbackDescription,
    url: `/models/${model.slug}`,
  });
}

export default async function ModelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const model = MODELS.find((m) => m.slug === slug);

  const breadcrumbsJsonLd = getBreadcrumbStructuredData([
    { name: "Home", path: "/" },
    { name: "All Models", path: "/models" },
    { name: model?.name || slug, path: `/models/${slug}` },
  ]);

  const modelJsonLd = model ? getModelStructuredData(model) : null;

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
      <ModelDetailView slug={slug} />
    </>
  );
}
