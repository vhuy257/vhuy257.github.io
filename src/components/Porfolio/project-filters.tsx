"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import {
  PROJECT_FILTERS,
  type FilterKey,
} from "@/lib/projects";
import type { ProjectCategory } from "@/lib/utils";

type ProjectFiltersProps = {
  active: FilterKey;
  onChange: (key: FilterKey) => void;
};

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div
      className="mt-6 flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter collections by type"
    >
      {PROJECT_FILTERS.map((item) => {
        const isActive = active === item.key;
        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.key)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors duration-200",
              isActive
                ? "border-orange-600 bg-orange-600 text-white"
                : "border-border bg-transparent text-foreground hover:border-orange-600/50 hover:bg-orange-600/5"
            )}
          >
            {item.icon && <Icon icon={item.icon} width={16} height={16} />}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

type ViewAllLinkProps = {
  category?: ProjectCategory;
  className?: string;
};

export function ViewAllLink({ category, className }: ViewAllLinkProps) {
  const href = category ? `/collections/${category}` : "/collections";

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:underline",
        className
      )}
    >
      View All
      <Icon icon="mdi:arrow-right" width={16} height={16} />
    </Link>
  );
}
