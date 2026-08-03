import { Metadata } from "next";
import { CloudModelsView } from "@/views/cloud-models";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Cloud API Models Directory — ModelVault",
  description:
    "Explore hosted cloud AI API models from OpenAI, Anthropic, Google Gemini, DeepSeek, and Mistral. Compare per-token pricing and API specs.",
  url: "/cloud",
});

const breadcrumbsJsonLd = getBreadcrumbStructuredData([
  { name: "Home", path: "/" },
  { name: "Cloud API Models", path: "/cloud" },
]);

export default function CloudPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <CloudModelsView />
    </>
  );
}
