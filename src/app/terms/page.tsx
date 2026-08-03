import { Metadata } from "next";
import { TermsView } from "@/views/terms";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service — ModelVault",
  description: "Terms of service and usage conditions for the ModelVault AI directory.",
  url: "/terms",
});

export default function TermsPage() {
  return <TermsView />;
}
