"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "../ui/theme-toggle";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../animate-ui/primitives/animate/tooltip";
import { useTheme } from "@/contexts/ThemeContext";
import { navItems, type NavSectionId } from "@/lib/nav";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { cn } from "@/lib/utils";

const HeaderSocialIcon = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const scrollTo = useScrollTo();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState<NavSectionId>("about");
  const headerRef = useRef<HTMLElement>(null);
  // While a nav click is driving the scroll, the section it targets is the
  // active one immediately — the passing-by intersection updates below are
  // ignored until the scroll settles, so the pill doesn't flicker through
  // every section it scrolls past on the way there.
  const isNavigatingRef = useRef(false);
  const navigateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const iconColor = theme === "dark" ? "text-white" : "text-black";

  useEffect(() => {
    if (!isHome) return;

    const sections = navItems
      .map((item) => ({ id: item.id, el: document.getElementById(item.id) }))
      .filter(
        (entry): entry is { id: NavSectionId; el: HTMLElement } =>
          entry.el !== null
      );
    if (sections.length === 0) return;

    // Which section is "active" is decided by the browser's own layout via
    // each section's real #id element, not a hand-measured offsetTop/height
    // formula — a section is active once its top crosses a trigger line
    // just below the sticky header, tracked per section as it enters/leaves.
    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const isVisible = new Map<NavSectionId, boolean>();

    const applyActiveFromVisibility = () => {
      if (isNavigatingRef.current) return;
      let next: NavSectionId = navItems[0].id;
      for (const item of navItems) {
        if (isVisible.get(item.id)) next = item.id;
      }
      setActiveId((prev) => (prev === next ? prev : next));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isVisible.set(entry.target.id as NavSectionId, entry.isIntersecting);
        }
        applyActiveFromVisibility();
      },
      { rootMargin: `-${headerHeight + 8}px 0px -65% 0px`, threshold: 0 }
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    return () => {
      if (navigateTimeoutRef.current) clearTimeout(navigateTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: NavSectionId
  ) => {
    if (!isHome) return;
    event.preventDefault();

    setActiveId(id);
    isNavigatingRef.current = true;
    if (navigateTimeoutRef.current) clearTimeout(navigateTimeoutRef.current);
    navigateTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1300);

    scrollTo(`#${id}`);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="flex flex-wrap justify-between items-center gap-3 container max-w-6xl mx-auto py-3 px-4">
        <div className="flex items-center gap-3">
          <Link
            href={isHome ? "#about" : "/#about"}
            onClick={(event) => handleNavClick(event, "about")}
            aria-label="Huy Nguyễn — back to top"
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border text-sm font-medium transition-colors",
              "border-border/60 bg-muted/40 text-foreground hover:border-orange-600/50 hover:text-orange-600"
            )}
          >
            HN
          </Link>
          <span className="h-5 w-px shrink-0 bg-border/60" aria-hidden />
          <Tooltip sideOffset={8}>
            <TooltipTrigger>
              <Link href="https://www.linkedin.com/in/huy-nguyen-3b67b0173/">
                <Icon
                  icon="iconoir:linkedin"
                  width={28}
                  height={28}
                  className={`hover:text-orange-700 transition-colors duration-20 ${iconColor}`}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 p-2 text-xs rounded-md shadow-lg border">
              LinkedIn Profile
            </TooltipContent>
          </Tooltip>
          <Tooltip sideOffset={8}>
            <TooltipTrigger>
              <Link href="mailto:vhuy2571990@gmail.com">
                <Icon
                  icon="material-symbols-light:alternate-email"
                  width={28}
                  height={28}
                  className={`hover:text-orange-600 transition-colors duration-20 ${iconColor}`}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-900 dark:bg-gray-100 text-white p-2 text-xs rounded-md shadow-lg border">
              Email Me
            </TooltipContent>
          </Tooltip>
          <Tooltip sideOffset={8}>
            <TooltipTrigger asChild>
              <Link href="https://github.com/vhuy257">
                <Icon
                  icon="mdi:github"
                  width={28}
                  height={28}
                  className={`dark:text-white hover:text-orange-600 transition-colors duration-20 ${iconColor}`}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 p-2 text-xs rounded-md shadow-lg border">
              GitHub Profile
            </TooltipContent>
          </Tooltip>
        </div>

        <nav
          aria-label="Page sections"
          className="order-last w-full sm:order-none sm:w-auto"
        >
          <ul className="flex items-center justify-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const active = isHome && activeId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={isHome ? `#${item.id}` : `/#${item.id}`}
                    onClick={(event) => handleNavClick(event, item.id)}
                    className={cn(
                      "relative inline-block rounded-md px-3 py-1.5 text-sm whitespace-nowrap transition-colors duration-200",
                      active
                        ? "text-white"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                    aria-current={active ? "true" : undefined}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-md bg-orange-600"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    )}
                    <span className="sm:hidden">{item.shortLabel}</span>
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default HeaderSocialIcon;
