'use client';
import Image from "next/image";
import React, { useMemo, useState } from "react";
import {
  projectsData,
  projectCategoryMeta,
  type ProjectCategory,
} from "@/lib/utils";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type FilterKey = "all" | ProjectCategory;

const FILTERS: { key: FilterKey; label: string; icon?: string }[] = [
  { key: "all", label: "All" },
  {
    key: "web-template",
    label: projectCategoryMeta["web-template"].label,
    icon: projectCategoryMeta["web-template"].icon,
  },
  {
    key: "cms-dashboard",
    label: projectCategoryMeta["cms-dashboard"].label,
    icon: projectCategoryMeta["cms-dashboard"].icon,
  },
  {
    key: "technical-tips",
    label: projectCategoryMeta["technical-tips"].label,
    icon: projectCategoryMeta["technical-tips"].icon,
  },
];

const Project = () => {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projectsData;
    return projectsData.filter((item) => item.category === filter);
  }, [filter]);

  const handleViewProject = (demoLink?: string, techLink?: string) => {
    const url =
      (demoLink && demoLink !== "#" && demoLink) ||
      (techLink && techLink !== "#" && techLink);

    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <section className="templates container max-w-6xl py-8 px-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-left text-3xl font-medium">Collections</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            Browse by type: web templates, CMS dashboards, and technical tips.
          </p>
        </div>
      </div>

      <div
        className="mt-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter collections by type"
      >
        {FILTERS.map((item) => {
          const isActive = filter === item.key;
          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(item.key)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors duration-200",
                isActive
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-border bg-transparent text-foreground hover:border-blue-500/50 hover:bg-blue-500/5"
              )}
            >
              {item.icon && <Icon icon={item.icon} width={16} height={16} />}
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        {filteredProjects.map((project, index) => {
          const meta = projectCategoryMeta[project.category];
          const href = project.demoLink || project.techLink;

          return (
            <article
              key={`${project.title}-${index}`}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted/40">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={1769}
                  height={679}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                <span
                  className={cn(
                    "absolute left-3 top-3 inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] font-medium backdrop-blur-sm",
                    meta.className
                  )}
                >
                  <Icon icon={meta.icon} width={14} height={14} />
                  {meta.label}
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <Button
                    onClick={() =>
                      handleViewProject(project.demoLink, project.techLink)
                    }
                    className="translate-y-3 border-none bg-white text-black shadow-lg transition-all duration-300 group-hover:translate-y-0 hover:bg-gray-100 hover:scale-105"
                    size="sm"
                    variant="default"
                  >
                    <Icon icon="mdi:eye" width={18} height={18} />
                    {project.category === "technical-tips" ? "Read" : "View"}
                  </Button>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="text-base font-medium leading-snug line-clamp-2">
                  {project.title}
                </h3>
                {project.techName && (
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {project.techName}
                  </p>
                )}
                {href && (
                  <button
                    type="button"
                    onClick={() =>
                      handleViewProject(project.demoLink, project.techLink)
                    }
                    className="mt-auto inline-flex items-center gap-1 pt-1 text-sm text-blue-500 hover:underline"
                  >
                    {project.category === "technical-tips"
                      ? "Open tip"
                      : "Open demo"}
                    <Icon icon="mdi:arrow-top-right" width={16} height={16} />
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No items in this category yet.
        </p>
      )}
    </section>
  );
};

export default Project;
