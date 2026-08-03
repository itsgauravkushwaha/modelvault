import { Metadata } from "next";
import { CompareView } from "@/views/compare";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Model Comparison Matrix — ModelVault",
  description:
    "Side-by-side comparison of AI model specifications, context windows, benchmark scores (MMLU, HumanEval), pricing, and hardware requirements.",
  url: "/compare",
});

const breadcrumbsJsonLd = getBreadcrumbStructuredData([
  { name: "Home", path: "/" },
  { name: "Comparison Matrix", path: "/compare" },
]);

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <CompareView />
    </>
  );
}
