import { Metadata } from "next";
import { HomeView } from "@/views/home";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "ModelVault — The Open AI Model Directory & Benchmark Matrix",
  description:
    "Discover, compare, and benchmark 500+ cloud and local AI models. Filter by modalities, context windows, pricing, providers, and performance benchmarks.",
  url: "/",
});

export default function Home() {
  return <HomeView />;
}
