import { Metadata } from "next";
import { ToolsLandingView } from "@/views/tools";

export const metadata: Metadata = {
  title: "Developer Tools – ModelVault",
  description:
    "Production-ready AI engineering tools: Cost calculators, token estimators, context-window analyzers, and VRAM requirements — all free, no sign-up required.",
  openGraph: {
    title: "Developer Tools – ModelVault",
    description:
      "Free AI engineering utilities: estimate API costs, token counts, context capacity, and GPU VRAM for any LLM workload.",
    url: "https://modelvault.ai/tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Tools – ModelVault",
    description:
      "Free AI engineering utilities: estimate API costs, token counts, context capacity, and GPU VRAM for any LLM workload.",
  },
  alternates: {
    canonical: "https://modelvault.ai/tools",
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD Structured Data                                            */
/* ------------------------------------------------------------------ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Developer Tools – ModelVault",
  description:
    "Production-ready AI engineering tools: Cost calculators, token estimators, context-window analyzers, and VRAM requirements.",
  url: "https://modelvault.ai/tools",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://modelvault.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Developer Tools",
        item: "https://modelvault.ai/tools",
      },
    ],
  },
};

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolsLandingView />
    </>
  );
}
