import { Metadata } from "next";
import { DisclaimerView } from "@/views/disclaimer";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Disclaimer — ModelVault",
  description: "Legal disclaimer regarding AI model benchmarks, pricing estimates, and specifications.",
  url: "/disclaimer",
});

export default function DisclaimerPage() {
  return <DisclaimerView />;
}
