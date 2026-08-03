import { Metadata } from "next";
import { CostCalculatorView } from "@/views/cost-calculator";

export const metadata: Metadata = {
  title: "AI API Cost Calculator – ModelVault",
  description:
    "Instantly estimate and compare AI API costs across OpenAI, Anthropic, Google Gemini, DeepSeek, Mistral, and more. Enter your token usage and monthly request volume — no sign-up required.",
  keywords: [
    "AI API cost calculator",
    "LLM pricing",
    "OpenAI cost estimator",
    "Anthropic Claude pricing",
    "Gemini API cost",
    "token cost calculator",
    "AI cost comparison",
    "GPT-4 pricing",
    "Claude 3 pricing",
  ],
  openGraph: {
    title: "AI API Cost Calculator – ModelVault",
    description:
      "Compare AI model API pricing in real time. Estimate monthly costs for OpenAI, Anthropic, Google, DeepSeek, Mistral, and Qwen based on your exact token usage.",
    url: "https://modelvault.ai/tools/cost-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI API Cost Calculator – ModelVault",
    description:
      "Compare AI model API pricing in real time. Estimate monthly costs for OpenAI, Anthropic, Google, DeepSeek, Mistral, and Qwen based on your exact token usage.",
  },
  alternates: {
    canonical: "https://modelvault.ai/tools/cost-calculator",
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD Structured Data                                            */
/* ------------------------------------------------------------------ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI API Cost Calculator",
  description:
    "A free tool to estimate and compare AI model API costs across leading providers including OpenAI, Anthropic, Google, DeepSeek, Mistral, and Qwen.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  url: "https://modelvault.ai/tools/cost-calculator",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "ModelVault",
    url: "https://modelvault.ai",
  },
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
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Cost Calculator",
        item: "https://modelvault.ai/tools/cost-calculator",
      },
    ],
  },
};

export default function CostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CostCalculatorView />
    </>
  );
}
