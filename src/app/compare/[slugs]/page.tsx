import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparePairwiseView } from "@/views/compare-pairwise";
import { db } from "@/lib/db";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import {
  getBreadcrumbStructuredData,
  getComparisonStructuredData,
} from "@/utils/seo/structured-data";

interface PageProps {
  params: Promise<{ slugs: string }>;
}

export const revalidate = 3600; // ISR cache 1 hour
export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slugs } = await params;
  const parts = slugs.split("-vs-");

  if (parts.length !== 2) {
    return generatePageMetadata({
      title: "Model Comparison — ModelVault",
      description: "Side-by-side AI model comparison matrix.",
      url: `/compare/${slugs}`,
    });
  }

  const modelA = await db.getModelBySlug(parts[0]);
  const modelB = await db.getModelBySlug(parts[1]);

  if (!modelA || !modelB) {
    return generatePageMetadata({
      title: "Models Comparison — ModelVault",
      description: "Compare AI model specifications and benchmarks.",
      url: `/compare/${slugs}`,
    });
  }

  return generatePageMetadata({
    title: `${modelA.name} vs ${modelB.name}: Specs, Hardware & Live Battle | ModelVault`,
    description: `Compare ${modelA.name} vs ${modelB.name}: license, hardware requirements (${modelA.hardwareRequirements || 'Cloud'} vs ${modelB.hardwareRequirements || 'Cloud'}), context window, pricing, and live battle in ModelVault Arena.`,
    url: `/compare/${slugs}`,
  });
}

export default async function PairwiseComparePage({ params }: PageProps) {
  const { slugs } = await params;
  const parts = slugs.split("-vs-");

  if (parts.length !== 2) {
    notFound();
  }

  const modelA = await db.getModelBySlug(parts[0]);
  const modelB = await db.getModelBySlug(parts[1]);

  if (!modelA || !modelB) {
    notFound();
  }

  const breadcrumbsJsonLd = getBreadcrumbStructuredData([
    { name: "Home", path: "/" },
    { name: "Comparison Matrix", path: "/compare" },
    { name: `${modelA.name} vs ${modelB.name}`, path: `/compare/${slugs}` },
  ]);

  const comparisonJsonLd = getComparisonStructuredData(modelA, modelB);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }}
      />
      <ComparePairwiseView modelA={modelA} modelB={modelB} />
    </>
  );
}
