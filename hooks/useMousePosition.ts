"use client";

import { useEffect } from "react";
import { useMotionValue, MotionValue } from "framer-motion";

export interface MousePositionReturn {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/**
 * Tracks viewport mouse coordinates using high-performance Framer Motion MotionValues.
 * Avoids React re-renders by mutating MotionValues directly.
 */
export function useMousePosition(
  isVisible: boolean,
  setIsVisible: (visible: boolean) => void
): MousePositionReturn {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [x, y, isVisible, setIsVisible]);

  return { x, y };
}

