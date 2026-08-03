import { Metadata } from "next";
import { LocalModelsView } from "@/views/local-models";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Local Run AI Models (Ollama, GGUF, Quantized) — ModelVault",
  description:
    "Find open-weights AI models optimized for local GPU and CPU inference with Ollama, LM Studio, and llama.cpp. Filter by hardware & VRAM requirements.",
  url: "/local",
});

const breadcrumbsJsonLd = getBreadcrumbStructuredData([
  { name: "Home", path: "/" },
  { name: "Local Models", path: "/local" },
]);

export default function LocalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <LocalModelsView />
    </>
  );
}
