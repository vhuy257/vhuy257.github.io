"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  cn,
  projectCategoryMeta,
  type ProjectCategory,
} from "@/lib/utils";

export type ProjectItem = {
  title: string;
  imageUrl: string;
  demoLink?: string;
  techLink?: string;
  techName?: string;
  category: ProjectCategory;
};

type ProjectCardProps = {
  project: ProjectItem;
};

function openProject(demoLink?: string, techLink?: string) {
  const url =
    (demoLink && demoLink !== "#" && demoLink) ||
    (techLink && techLink !== "#" && techLink);

  if (url) {
    window.open(url, "_blank");
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const meta = projectCategoryMeta[project.category];
  const href = project.demoLink || project.techLink;
  const ctaLabel =
    project.category === "technical-tips" ? "Open tip" : "Open demo";

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg",
        "border border-border/60 bg-card",
        "transition-[border-color,background-color] duration-300",
        "hover:border-border hover:bg-muted/20"
      )}
    >
      <button
        type="button"
        onClick={() => openProject(project.demoLink, project.techLink)}
        disabled={!href}
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden bg-muted/40 text-left",
          "outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          !href && "cursor-default"
        )}
        aria-label={href ? `${ctaLabel}: ${project.title}` : project.title}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={1769}
          height={679}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </button>

      <div className="flex flex-1 items-end justify-between gap-3 px-4 pb-4 pt-[0.9rem]">
        <div className="flex min-w-0 flex-col gap-[0.35rem]">
          <h3 className="text-[0.9375rem] font-medium leading-snug tracking-tight line-clamp-2">
            {project.title}
          </h3>
          <p className="text-[11px] uppercase tracking-[0.04em] text-muted-foreground">
            {meta.label}
            {project.techName ? ` · ${project.techName}` : null}
          </p>
        </div>

        {href ? (
          <button
            type="button"
            onClick={() => openProject(project.demoLink, project.techLink)}
            className={cn(
              "inline-flex h-8 shrink-0 items-center justify-center gap-[0.3rem]",
              "rounded-md border border-border/80 bg-transparent px-3",
              "text-xs font-medium text-foreground",
              "transition-[border-color,background-color,color] duration-150",
              "hover:border-blue-500 hover:bg-blue-500/[0.08] hover:text-blue-600",
              "outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            )}
          >
            {ctaLabel}
            <Icon icon="mdi:arrow-top-right" width={14} height={14} />
          </button>
        ) : null}
      </div>
    </article>
  );
}

type ProjectGridProps = {
  projects: ProjectItem[];
  emptyMessage?: string;
};

export function ProjectGrid({
  projects,
  emptyMessage = "No items in this category yet.",
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="mt-10 text-center text-sm text-muted-foreground">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={`${project.title}-${index}`} project={project} />
      ))}
    </div>
  );
}
