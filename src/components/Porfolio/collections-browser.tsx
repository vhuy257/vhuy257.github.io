"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  projectCategoryMeta,
  type ProjectCategory,
} from "@/lib/utils";
import { ProjectGrid } from "@/components/Porfolio/project-card";
import { ProjectFilters } from "@/components/Porfolio/project-filters";
import {
  isProjectCategory,
  visibleProjectsData,
  type FilterKey,
} from "@/lib/projects";

type CollectionsBrowserProps = {
  initialCategory?: string;
};

export default function CollectionsBrowser({
  initialCategory,
}: CollectionsBrowserProps) {
  const startingFilter: FilterKey =
    initialCategory && isProjectCategory(initialCategory)
      ? initialCategory
      : "all";

  const [filter, setFilter] = useState<FilterKey>(startingFilter);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return visibleProjectsData;
    return visibleProjectsData.filter((item) => item.category === filter);
  }, [filter]);

  const title =
    filter === "all"
      ? "All collections"
      : projectCategoryMeta[filter as ProjectCategory].label;

  return (
    <div className="container max-w-6xl px-4 py-10">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <Icon icon="mdi:arrow-left" width={18} height={18} />
        Back to home
      </Link>

      <div className="mt-6">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl">
          Full list of web templates and CMS dashboards.
        </p>
      </div>

      <ProjectFilters active={filter} onChange={setFilter} />

      <p className="mt-6 text-sm text-muted-foreground">
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "item" : "items"}
      </p>

      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
