import { Metadata } from "next";
import { ModelsView } from "@/views/models";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "All AI Models Directory — ModelVault",
  description:
    "Browse and filter 11,000+ AI models across LLMs, vision, audio, reasoning, and coding agents. Compare context windows, licensing, and pricing.",
  url: "/models",
});

const breadcrumbsJsonLd = getBreadcrumbStructuredData([
  { name: "Home", path: "/" },
  { name: "All Models", path: "/models" },
]);

export default function ModelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <ModelsView />
    </>
  );
}
