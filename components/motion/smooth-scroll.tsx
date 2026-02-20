"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let lenis: any;

    const init = async () => {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default;

        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch (e) {
        // Lenis not available — graceful fallback
        console.info("Smooth scroll unavailable, using native scroll");
      }
    };

    init();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return null;
}