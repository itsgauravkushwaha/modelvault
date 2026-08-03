import { Metadata } from "next";
import { CategoryView } from "@/views/category";
import { CATEGORIES } from "@/data/categories";
import { generateMetadata as generatePageMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return generatePageMetadata({
      title: "Category Not Found — ModelVault",
      description: "The requested model category could not be found.",
      url: `/category/${slug}`,
    });
  }

  return generatePageMetadata({
    title: `${category.name} AI Models — Specifications & Comparison | ModelVault`,
    description: category.description || `Browse and compare ${category.name} AI models on ModelVault.`,
    url: `/category/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  const breadcrumbsJsonLd = getBreadcrumbStructuredData([
    { name: "Home", path: "/" },
    { name: "All Models", path: "/models" },
    { name: category?.name || slug, path: `/category/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <CategoryView slug={slug} />
    </>
  );
}
