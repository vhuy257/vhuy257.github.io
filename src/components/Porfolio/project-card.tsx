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
  techStack?: string[];
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

function TechStackChips({
  stack,
  className,
}: {
  stack: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {stack.map((tech) => (
        <span
          key={tech}
          className="inline-flex rounded-md border border-border/70 bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground dark:bg-muted/20"
        >
          {tech}
        </span>
      ))}
    </div>
  );
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

      <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-[0.9rem]">
        <div className="flex items-start justify-between gap-3">
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
                "hover:border-orange-600 hover:bg-orange-600/[0.08] hover:text-orange-700",
                "outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              )}
            >
              {ctaLabel}
              <Icon icon="mdi:arrow-top-right" width={14} height={14} />
            </button>
          ) : null}
        </div>

        {project.techStack && <TechStackChips stack={project.techStack} />}
      </div>
    </article>
  );
}

export function ProjectListItem({ project }: ProjectCardProps) {
  const meta = projectCategoryMeta[project.category];
  const href = project.demoLink || project.techLink;
  const ctaLabel =
    project.category === "technical-tips" ? "Open tip" : "Open demo";

  return (
    <article
      className={cn(
        "group flex items-center gap-4 rounded-lg p-3",
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
          "relative aspect-[16/10] w-24 shrink-0 overflow-hidden rounded-md bg-muted/40 sm:w-36",
          "outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
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

      <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-[0.9375rem] font-medium leading-snug tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-[11px] uppercase tracking-[0.04em] text-muted-foreground">
            {meta.label}
            {project.techName ? ` · ${project.techName}` : null}
          </p>
          {project.techStack && (
            <TechStackChips stack={project.techStack} className="mt-1.5" />
          )}
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
              "hover:border-orange-600 hover:bg-orange-600/[0.08] hover:text-orange-700",
              "outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            )}
          >
            <span className="hidden sm:inline">{ctaLabel}</span>
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

export function ProjectList({
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
    <div className="mt-6 flex flex-col gap-3">
      {projects.map((project, index) => (
        <ProjectListItem key={`${project.title}-${index}`} project={project} />
      ))}
    </div>
  );
}
