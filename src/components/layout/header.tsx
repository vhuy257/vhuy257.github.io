'use client';
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "../ui/theme-toggle";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipArrow } from "../animate-ui/primitives/animate/tooltip";

const HeaderSocialIcon = () => {
  return (
    <div className="flex justify-between items-center container max-w-6xl mx-auto my-4">
      <div className="flex items-center gap-4 px-4">
        <Tooltip sideOffset={8}>
          <TooltipTrigger>
            <Link href="https://www.linkedin.com/in/huy-nguyen-3b67b0173/">
              <Icon
                icon="iconoir:linkedin"
                width={30}
                height={30}
                className="hover:text-blue-600 transition-colors duration-200"
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
                width={30}
                height={30}
                className="hover:text-blue-500 transition-colors duration-200"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 p-2 text-xs rounded-md shadow-lg border">
            Email Me
          </TooltipContent>
        </Tooltip>
        <Tooltip sideOffset={8}>
          <TooltipTrigger asChild>
            <Link href="https://github.com/vhuy257">
              <Icon
                icon="mdi:github"
                width={30}
                height={30}
                className="hover:text-blue-500 dark:hover:text-gray-300 transition-colors duration-200"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 p-2 text-xs rounded-md shadow-lg border">
            GitHub Profile
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center gap-4 px-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default HeaderSocialIcon;
