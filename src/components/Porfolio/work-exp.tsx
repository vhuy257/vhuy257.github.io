"use client";

import { workExpsData } from "@/lib/utils";
import { Icon } from "@iconify/react";

const WorkExp = () => {
  return (
    <section
      id="experience"
      className="work-cascade container md:max-w-6xl px-4 mt-20 scroll-mt-24"
    >
      <h2 className="m-0 text-left text-3xl font-medium text-foreground">
        Work Experiences
      </h2>
      <div className="work-cascade__rail relative mt-4">
        {workExpsData?.map((job, index) => (
          <article className="work-cascade__item relative" key={index}>
            <span className="work-cascade__dot" aria-hidden />
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <h3 className="m-0 inline-flex items-center gap-1.5 text-base font-medium text-foreground">
                <Icon icon="weui:location-outlined" width={22} height={22} />
                {job.companyName}
              </h3>
              <span className="inline-flex rounded-md bg-blue-500 px-2 py-0.5 text-xs font-medium text-white">
                {job.position}
              </span>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-4">
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
