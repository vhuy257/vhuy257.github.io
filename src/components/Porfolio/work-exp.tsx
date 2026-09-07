"use client";

import { cn, workExpsData } from "@/lib/utils";
import { Icon } from "@iconify/react";

const WorkExp = () => {
  return (
    <section
      id="experience"
      className="work-cascade container md:max-w-6xl px-4 py-16 scroll-mt-24"
    >
      <h2 className="m-0 text-left text-3xl font-medium tracking-tight text-foreground">
        Work Experiences
      </h2>
      <div className="work-cascade__rail relative mt-8 flex flex-col gap-3">
        {workExpsData?.map((job, index) => (
          <article
            className={cn(
              "work-cascade__item relative rounded-xl border px-4 py-4 md:px-5 md:py-5",
              "border-blue-500/15 bg-blue-500/[0.04]",
              "transition-[border-color,background-color] duration-200",
              "hover:border-blue-500/30 hover:bg-blue-500/[0.07]",
              "dark:border-blue-400/20 dark:bg-blue-400/[0.06]",
              "dark:hover:border-blue-400/35 dark:hover:bg-blue-400/[0.1]"
            )}
            key={index}
          >
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <h3 className="m-0 inline-flex items-center gap-2 text-lg font-medium tracking-tight text-foreground md:text-xl">
                <Icon
                  icon="weui:location-outlined"
                  width={22}
                  height={22}
                  className="shrink-0 text-blue-500 dark:text-blue-400"
                />
                {job.companyName}
              </h3>
              <span
                className={cn(
                  "inline-flex shrink-0 rounded-md border px-2 py-0.5 text-xs font-medium",
                  "border-blue-500/35 bg-blue-500/10 text-blue-700",
                  "dark:border-blue-400/40 dark:bg-blue-400/15 dark:text-blue-300"
                )}
              >
                {job.position}
              </span>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-7 marker:text-blue-500/70 md:pl-8 dark:marker:text-blue-400/70">
              {job.description?.map((line, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {line}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExp;
