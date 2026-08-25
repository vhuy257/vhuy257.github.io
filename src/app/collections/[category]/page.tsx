import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeaderSocialIcon from "@/components/layout/header";
import ScrollToTop from "@/components/layout/scroll-to-top";
import CollectionsBrowser from "@/components/Porfolio/collections-browser";
import {
  PROJECT_CATEGORIES,
  isProjectCategory,
} from "@/lib/projects";
import { projectCategoryMeta } from "@/lib/utils";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return PROJECT_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;

  if (!isProjectCategory(category)) {
    return { title: "Collections — Huy Nguyễn" };
  }

  return {
    title: `${projectCategoryMeta[category].label} — Huy Nguyễn`,
    description: `Browse all ${projectCategoryMeta[category].label.toLowerCase()} in the portfolio collections.`,
  };
}

export default async function CollectionCategoryPage({ params }: PageProps) {
  const { category } = await params;

  if (!isProjectCategory(category)) {
    notFound();
  }

  return (
    <>
      <HeaderSocialIcon />
      <main className="min-h-screen text-foreground transition-colors duration-300">
        <CollectionsBrowser initialCategory={category} />
      </main>
      <ScrollToTop />
    </>
  );
}
