'use client';

import Image from "next/image";
import { Icon } from "@iconify/react";
import { skillsData } from "@/lib/utils";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function Profile() {
  const primarySkills = Array.from(skillsData.keys()).slice(0, 6);
  const scrollTo = useScrollTo();

  return (
    <section
      id="about"
      className="text-center container md:max-w-6xl px-4 pt-14 pb-20 md:pt-20 md:pb-24 scroll-mt-24"
    >
      <div className="profile-dossier grid w-full grid-cols-1 items-end gap-10 text-left sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8 lg:gap-16">
        <div className="order-2 sm:order-none">
          <h1 className="profile-dossier__name m-0 text-[clamp(2.5rem,6vw,4.25rem)] font-normal leading-[1.05] tracking-tight text-foreground">
            Huy Nguyễn
          </h1>
          <p className="profile-dossier__role mt-3 text-xl text-muted-foreground">
            Frontend Developer
            <span className="mx-2 text-border" aria-hidden>
              ·
            </span>
            React / Next.js
          </p>
          <div className="profile-dossier__skills mt-6 flex flex-wrap gap-2">
            {primarySkills.map((name, index) =>
              index === 0 ? (
                <span
                  key={name}
                  className="profile-dossier__chip profile-dossier__chip--selected inline-flex rounded-md bg-orange-600 px-2.5 py-1 text-xs font-medium text-white"
                  style={{ ["--chip-i" as string]: index }}
                >
                  {name}
                </span>
              ) : (
                <span
                  key={name}
                  className="profile-dossier__chip inline-flex rounded-md border border-border/70 bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground dark:bg-muted/25"
                  style={{ ["--chip-i" as string]: index }}
                >
                  {name}
                </span>
              )
            )}
          </div>
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="profile-dossier__cta mt-8 inline-flex h-10 items-center gap-2 rounded-md bg-orange-600 px-5 text-sm font-medium text-white transition-colors hover:bg-orange-600/90 outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            Contact Me
            <Icon icon="mynaui:send" width={16} height={16} />
          </button>
        </div>
        <div className="profile-dossier__avatar order-first mx-auto w-44 shrink-0 select-none sm:order-none sm:mx-0 sm:w-56 md:w-72 lg:w-[19rem]">
          <Image
            src="/profile_img.png"
            alt="Huy Nguyen"
            width={1024}
            height={1028}
            className="h-auto w-full object-contain rounded-2xl"
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
