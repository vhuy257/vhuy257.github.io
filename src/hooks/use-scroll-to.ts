"use client";

import { useCallback } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const HEADER_OFFSET = -80;

export function useScrollTo() {
  const lenis = useLenis();

  const scrollTo = useCallback(
    (target: string | number | HTMLElement) => {
      if (lenis) {
        lenis.scrollTo(target, { offset: typeof target === "string" ? HEADER_OFFSET : 0 });
        return;
      }

      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
        return;
      }

      const el =
        typeof target === "string"
          ? document.querySelector(target)
          : target;

      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [lenis]
  );

  return scrollTo;
}
