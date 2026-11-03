"use client";

import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface ScrollDirectionOptions {
  /** Pixel delta threshold before triggering scroll change (default: 8) */
  threshold?: number;
  /** Top offset distance where navigation is always visible (default: 60) */
  topOffset?: number;
}

export interface UseScrollDirectionReturn {
  isHidden: boolean;
  isAtTop: boolean;
}

/**
 * Custom hook that tracks scroll direction using Framer Motion scroll telemetry.
 * Automatically hides on down-scroll and reveals on reverse up-scroll.
 */
export function useScrollDirection({
  threshold = 8,
  topOffset = 60,
}: ScrollDirectionOptions = {}): UseScrollDirectionReturn {
  const [isHidden, setIsHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    lastScrollY.current = latest;

    if (latest <= topOffset) {
      setIsAtTop(true);
      setIsHidden(false);
      return;
    }

    setIsAtTop(false);
    const diff = latest - previous;

    if (Math.abs(diff) < threshold) return;

    if (diff > 0) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return { isHidden, isAtTop };
}

