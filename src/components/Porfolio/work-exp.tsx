"use client";

import { cn, workExpsData } from "@/lib/utils";
import { Icon } from "@iconify/react";

// Some roles bury their most distinctive line behind a generic opener —
// surface the standout bullet instead of always defaulting to the first one.
const HIGHLIGHT_INDEX: Record<string, number> = {
  "Isobar Commerce": 1,
};

const WorkExp = () => {
  return (
    <section
      id="experience"
      className="work-cascade container md:max-w-6xl px-4 py-16 scroll-mt-24"
    >
      <h2 className="m-0 text-left text-3xl font-medium tracking-tight text-foreground">
        Experience
      </h2>

      <div className="mt-10">
        {workExpsData?.map((job, index) => {
          const highlightIndex = HIGHLIGHT_INDEX[job.companyName] ?? 0;
          const highlight = job.description?.[highlightIndex];
          const rest = job.description?.filter((_, i) => i !== highlightIndex);
          const isLast = index === workExpsData.length - 1;

          return (
            <article
              key={index}
              className="work-cascade__item grid grid-cols-[1.25rem_1fr] gap-x-4 md:grid-cols-[1.5rem_1fr] md:gap-x-5"
            >
              <div className="flex flex-col items-center">
                <span
                  className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-orange-600 bg-background dark:border-orange-500"
                  aria-hidden
                />
                {!isLast && (
                  <span
                    className="mt-1 w-px flex-1 bg-orange-600/25 dark:bg-orange-500/30"
                    aria-hidden
                  />
                )}
              </div>

              <div
                className={cn(
                  "rounded-lg px-2 pb-10 -mt-1 -mx-2",
                  "transition-colors duration-200 hover:bg-orange-600/[0.04] dark:hover:bg-orange-500/[0.06]"
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
                  <h3 className="m-0 text-lg font-medium tracking-tight text-foreground md:text-xl">
                    {job.companyName}
                  </h3>
                  <span
                    className={cn(
                      "inline-flex shrink-0 rounded-md border px-2 py-0.5 text-xs font-medium",
                      "border-orange-600/35 bg-orange-600/10 text-orange-800",
                      "dark:border-orange-500/40 dark:bg-orange-500/15 dark:text-orange-300"
                    )}
                  >
                    {job.position}
                  </span>
                </div>

                {highlight && (
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {highlight}
                  </p>
                )}

                {rest && rest.length > 0 && (
                  <details className="group mt-2">
                    <summary
                      className={cn(
                        "flex w-fit list-none items-center gap-1 rounded-sm text-xs font-medium text-orange-700",
                        "cursor-pointer hover:text-orange-800 dark:text-orange-500 dark:hover:text-orange-300",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                        "[&::-webkit-details-marker]:hidden"
                      )}
                    >
                      <Icon
                        icon="mdi:chevron-down"
                        width={16}
                        height={16}
                        className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                      />
                      <span className="group-open:hidden">
                        {rest.length} more detail{rest.length > 1 ? "s" : ""}
                      </span>
                      <span className="hidden group-open:inline">
                        Show less
                      </span>
                    </summary>
                    <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-orange-600/70 dark:marker:text-orange-500/70">
                      {rest.map((line, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExp;
