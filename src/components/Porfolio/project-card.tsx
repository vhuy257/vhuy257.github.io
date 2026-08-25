"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
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

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1">
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
            onClick={() => openProject(project.demoLink, project.techLink)}
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
            onClick={() => openProject(project.demoLink, project.techLink)}
            className="mt-auto inline-flex items-center gap-1 pt-1 text-sm text-blue-500 hover:underline"
          >
            {project.category === "technical-tips" ? "Open tip" : "Open demo"}
            <Icon icon="mdi:arrow-top-right" width={16} height={16} />
          </button>
        )}
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={`${project.title}-${index}`} project={project} />
      ))}
    </div>
  );
}
