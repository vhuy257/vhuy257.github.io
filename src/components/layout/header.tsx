import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "../ui/theme-toggle";

const HeaderSocialIcon = () => {
  return (
    <div className="flex justify-between items-center container max-w-6xl mx-auto my-4">
      <div className="flex items-center gap-4 px-4">
        <Link href="https://www.linkedin.com/in/huy-nguyen-3b67b0173/">
          <Icon icon="mdi:linkedin" width={30} height={30} />
        </Link>
        <Link href="mailto:vhuy2571990@gmail.com">
          <Icon icon="mdi:email" width={30} height={30} />
        </Link>
        <Link href="https://github.com/vhuy257">
          <Icon icon="mdi:github" width={30} height={30} />
        </Link>
      </div>
      <div className="flex items-center gap-4 px-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default HeaderSocialIcon;
