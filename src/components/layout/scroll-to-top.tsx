"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useLenis } from "@studio-freight/react-lenis";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { cn } from "@/lib/utils";

const SHOW_AFTER = 320;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const scrollTo = useScrollTo();

  useLenis(({ scroll }) => {
    const next = scroll > SHOW_AFTER;
    setVisible((prev) => (prev === next ? prev : next));
  });

  return (
    <Button
      type="button"
      variant="default"
      size="icon"
      aria-label="Scroll to top"
      onClick={() => scrollTo(0)}
      className={cn(
        "fixed bottom-6 right-6 z-50 size-11 rounded-full shadow-lg",
        "transition-all duration-300 ease-out",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <Icon icon="mdi:arrow-up" width={22} height={22} />
    </Button>
  );
}
