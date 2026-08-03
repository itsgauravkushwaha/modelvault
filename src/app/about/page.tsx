import { Metadata } from "next";
import { AboutView } from "@/views/about";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "About ModelVault — Open AI Model Directory",
  description:
    "Learn how ModelVault provides verified specifications, benchmark results, pricing structures, and VRAM recommendations for AI models.",
  url: "/about",
});

const breadcrumbsJsonLd = getBreadcrumbStructuredData([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <AboutView />
    </>
  );
}
