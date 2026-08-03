import { Metadata } from "next";
import { ContactView } from "@/views/contact";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us — ModelVault",
  description: "Get in touch with the ModelVault team to submit model specs, report inaccuracies, or request directory updates.",
  url: "/contact",
});

const breadcrumbsJsonLd = getBreadcrumbStructuredData([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <ContactView />
    </>
  );
}
