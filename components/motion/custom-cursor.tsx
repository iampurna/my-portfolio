"use client";

import { useEffect, useState, useCallback } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Outer ring springs (always called — no conditional hooks)
  const outerSpringConfig = { stiffness: 150, damping: 20 };
  const outerX = useSpring(cursorX, outerSpringConfig);
  const outerY = useSpring(cursorY, outerSpringConfig);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='pointer']") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='pointer']") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, visible]);

  // Don't render on touch devices, but hooks are all called above
  if (isTouch || !visible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <m.div
        className="fixed top-0 left-0 pointer-events-none z-10000 rounded-full bg-white cursor-dot hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 60 : clicking ? 12 : 16,
          height: hovering ? 60 : clicking ? 12 : 16,
          opacity: hovering ? 0.8 : 1,
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 20 },
          height: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.15 },
        }}
      />

      {/* Outer ring */}
      <m.div
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full border border-white/20 hidden md:block"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 80 : 40,
          height: hovering ? 80 : 40,
          opacity: hovering ? 0 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />
    </>
  );
}