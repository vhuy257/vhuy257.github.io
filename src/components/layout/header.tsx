"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "../ui/theme-toggle";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../animate-ui/primitives/animate/tooltip";
import { useTheme } from "@/contexts/ThemeContext";
import { useLenis } from "@studio-freight/react-lenis";
import { navItems, type NavSectionId } from "@/lib/nav";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { cn } from "@/lib/utils";

function getActiveSection(scroll: number): NavSectionId {
  let current: NavSectionId = "about";
  let currentOffsetTop = -Infinity;

  for (const item of navItems) {
    const el = document.getElementById(item.id);
    if (!el) continue;
    if (scroll >= el.offsetTop - 120 && el.offsetTop > currentOffsetTop) {
      current = item.id;
      currentOffsetTop = el.offsetTop;
    }
  }

  return current;
}

const HeaderSocialIcon = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const scrollTo = useScrollTo();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState<NavSectionId>("about");

  const iconColor = theme === "dark" ? "text-white" : "text-black";

  useLenis(({ scroll }) => {
    if (!isHome) return;
    const next = getActiveSection(scroll);
    setActiveId((prev) => (prev === next ? prev : next));
  });

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: NavSectionId
  ) => {
    if (!isHome) return;
    event.preventDefault();
    scrollTo(`#${id}`);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="flex flex-wrap justify-between items-center gap-3 container max-w-6xl mx-auto py-3 px-4">
        <div className="flex items-center gap-4">
          <Tooltip sideOffset={8}>
            <TooltipTrigger>
              <Link href="https://www.linkedin.com/in/huy-nguyen-3b67b0173/">
                <Icon
                  icon="iconoir:linkedin"
                  width={28}
                  height={28}
                  className={`hover:text-blue-600 transition-colors duration-20 ${iconColor}`}
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
                  className={`hover:text-blue-500 transition-colors duration-20 ${iconColor}`}
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
                  className={`dark:text-white hover:text-blue-500 transition-colors duration-20 ${iconColor}`}
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
          <ul className="flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={isHome ? `#${item.id}` : `/#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className={cn(
                    "inline-block rounded-md px-3 py-1.5 text-sm whitespace-nowrap transition-colors duration-200",
                    isHome && activeId === item.id
                      ? "bg-blue-500 text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                  aria-current={
                    isHome && activeId === item.id ? "true" : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
