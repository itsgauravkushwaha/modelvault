import { Metadata } from "next";
import { DashboardView } from "@/views/dashboard";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Personal Workspace & Saved Models — ModelVault",
  description:
    "Access your favorited AI models, saved comparisons, and developer settings in your personal ModelVault dashboard.",
  url: "/dashboard",
});

const breadcrumbsJsonLd = getBreadcrumbStructuredData([
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
]);

export default function DashboardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <DashboardView />
    </>
  );
}
