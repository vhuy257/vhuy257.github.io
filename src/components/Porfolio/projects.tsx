"use client";

import { useMemo, useState } from "react";
import { ProjectGrid } from "./project-card";
import { ProjectFilters, ViewAllLink } from "./project-filters";
import {
  PREVIEW_LIMIT,
  PROJECT_CATEGORIES,
  visibleProjectsData,
  type FilterKey,
} from "@/lib/projects";

const Project = () => {
  const [filter, setFilter] = useState<FilterKey>("web-template");

  const previewProjects = useMemo(() => {
    if (filter === "all") {
      return PROJECT_CATEGORIES.flatMap((category) =>
        visibleProjectsData
          .filter((item) => item.category === category)
          .slice(0, PREVIEW_LIMIT)
      );
    }

    return visibleProjectsData
      .filter((item) => item.category === filter)
      .slice(0, PREVIEW_LIMIT);
  }, [filter]);

  const hasMore = useMemo(() => {
    if (filter === "all") {
      return PROJECT_CATEGORIES.some(
        (category) =>
          visibleProjectsData.filter((item) => item.category === category)
            .length > PREVIEW_LIMIT
      );
    }

    return (
      visibleProjectsData.filter((item) => item.category === filter).length >
      PREVIEW_LIMIT
    );
  }, [filter]);

  return (
    <section
      id="projects"
      className="templates container max-w-6xl py-16 px-4 scroll-mt-24"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-left text-3xl font-medium tracking-tight text-foreground">
            My Works
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            Browse by type: web templates and CMS dashboards.
          </p>
        </div>
        {hasMore && (
          <ViewAllLink category={filter === "all" ? undefined : filter} />
        )}
      </div>

      <ProjectFilters active={filter} onChange={setFilter} />

      <ProjectGrid projects={previewProjects} />
    </section>
  );
};

export default Project;
