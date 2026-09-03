import {
  projectCategoryMeta,
  projectsData,
  type ProjectCategory,
} from "@/lib/utils";

export type FilterKey = "all" | ProjectCategory;

/** Categories hidden from filters, previews, and collection routes. */
export const HIDDEN_PROJECT_CATEGORIES = [
  "technical-tips",
] as const satisfies readonly ProjectCategory[];

export const PROJECT_CATEGORIES = [
  "web-template",
  "cms-dashboard",
] as const satisfies readonly ProjectCategory[];

export const PROJECT_FILTERS: {
  key: FilterKey;
  label: string;
  icon?: string;
}[] = [
  { key: "all", label: "All" },
  ...PROJECT_CATEGORIES.map((key) => ({
    key,
    label: projectCategoryMeta[key].label,
    icon: projectCategoryMeta[key].icon,
  })),
];

export const PREVIEW_LIMIT = 3;

export const visibleProjectsData = projectsData.filter(
  (item) =>
    !(HIDDEN_PROJECT_CATEGORIES as readonly string[]).includes(item.category)
);

export function isProjectCategory(value: string): value is ProjectCategory {
  return (PROJECT_CATEGORIES as readonly string[]).includes(value);
}
