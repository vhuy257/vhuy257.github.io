"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }:{children: React.ReactNode}) {
  return (
    <ReactLenis root options={{ lerp: 0.2, duration: 1, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;