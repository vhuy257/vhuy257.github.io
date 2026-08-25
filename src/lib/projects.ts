import {
  projectCategoryMeta,
  type ProjectCategory,
} from "@/lib/utils";

export type FilterKey = "all" | ProjectCategory;

export const PROJECT_FILTERS: {
  key: FilterKey;
  label: string;
  icon?: string;
}[] = [
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

export const PROJECT_CATEGORIES = [
  "web-template",
  "cms-dashboard",
  "technical-tips",
] as const satisfies readonly ProjectCategory[];

export const PREVIEW_LIMIT = 3;

export function isProjectCategory(value: string): value is ProjectCategory {
  return (PROJECT_CATEGORIES as readonly string[]).includes(value);
}
