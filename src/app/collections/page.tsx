import type { Metadata } from "next";
import HeaderSocialIcon from "@/components/layout/header";
import ScrollToTop from "@/components/layout/scroll-to-top";
import CollectionsBrowser from "@/components/Porfolio/collections-browser";

export const metadata: Metadata = {
  title: "Collections — Huy Nguyễn",
  description: "Full list of web templates, CMS dashboards, and technical tips.",
};

export default function CollectionsPage() {
  return (
    <>
      <HeaderSocialIcon />
      <main className="min-h-screen text-foreground transition-colors duration-300 max-w-6xl mx-auto">
        <CollectionsBrowser />
      </main>
      <ScrollToTop />
    </>
  );
}
