import { Metadata } from "next";
import { PrivacyView } from "@/views/privacy";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy — ModelVault",
  description: "Privacy Policy and data protection commitment for ModelVault users.",
  url: "/privacy",
});

export default function PrivacyPage() {
  return <PrivacyView />;
}
