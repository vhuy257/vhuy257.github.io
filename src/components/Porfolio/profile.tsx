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
      className="logo text-center container md:max-w-6xl px-4 pt-10 pb-16 md:pt-12 scroll-mt-24"
    >
      <div className="profile-dossier grid w-full grid-cols-1 items-center gap-6 rounded-2xl border border-border/70 bg-muted/45 px-[1.425rem] py-[1.45rem] text-left sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
        <div>
          <h1 className="profile-dossier__name text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight tracking-tight text-foreground">
            Huy Nguyễn
          </h1>
          <p className="profile-dossier__role mt-1.5 text-[0.9375rem] text-muted-foreground">
            Frontend Developer · React / Next.js
          </p>
          <div className="profile-dossier__skills mt-3.5 flex flex-wrap gap-1.5">
            {primarySkills.map((name, index) => (
              <span
                key={name}
                className="profile-dossier__chip inline-flex rounded-md border border-border/60 bg-background/80 px-1.5 py-0.5 text-[11px] font-medium text-foreground"
                style={{ ["--chip-i" as string]: index }}
              >
                {name}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="profile-dossier__cta mt-4 inline-flex h-9 items-center gap-1.5 rounded-md bg-blue-500 px-4 text-[0.8125rem] font-medium text-white transition-colors hover:bg-blue-500/90 outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            Contact Me
            <Icon icon="mynaui:send" width={16} height={16} />
          </button>
        </div>
        <div className="profile-dossier__avatar order-first size-[8.5rem] overflow-hidden shadow-lg rounded-full justify-self-start sm:order-none sm:justify-self-auto">
          <Image
            src="/profile_img.png"
            alt="Huy Nguyen"
            width={180}
            height={247}
            className="size-full object-cover"
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
