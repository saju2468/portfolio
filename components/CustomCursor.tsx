"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useReducedMotion } from "framer-motion";

// --- Constants ---

const CURSOR_SIZES = {
  DEFAULT: 40,
  HOVER: 200,
  MAGNIFY: 250,
};

const SPRING_CONFIG = { damping: 25, stiffness: 300, mass: 0.5 };

// --- Hooks ---

/**
 * Tracks mouse position and visibility globally.
 */
const useMousePosition = (isVisible: boolean, setIsVisible: (v: boolean) => void) => {
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
};

/**
 * High-performance custom cursor with advanced interaction states.
 * Respects user motion preferences and avoids expensive DOM lookups.
 */
export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "magnify">("default");
  const [isMobile, setIsMobile] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const { x, y } = useMousePosition(isVisible, setIsVisible);

  // Smooth spring values for the "lagging" outer ring effect
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  /**
   * Monitor interactive elements for cursor state updates.
   * Optimizes performance by avoiding getComputedStyle and relying on tag/class/attribute rules.
   */
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Rule 1: Magnify target detection
      const isMagnify = target.classList.contains("magnify-target") || target.closest(".magnify-target");
      if (isMagnify) {
        setCursorState("magnify");
        return;
      }

      // Rule 2: General interactive element detection
      const isInteractive = 
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("group") ||
        target.hasAttribute("data-cursor-hover");

      setCursorState(isInteractive ? "hover" : "default");
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  /**
   * Responsive detection using matchMedia for better performance than window resize events.
   */
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const checkMobile = () => setIsMobile(mql.matches);
    
    checkMobile();
    mql.addEventListener("change", checkMobile);
    return () => mql.removeEventListener("change", checkMobile);
  }, []);

  // Performance & A11y: Graceful degradation for mobile and reduced motion users
  if (isMobile || shouldReduceMotion) {
    return null;
  }

  return (
    <>
      {/* Primary Pointer - Direct tracking for zero-latency feel */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />

      {/* Decorative Outer Ring - Smooth spring motion for "premium" feel */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          background: cursorState === "magnify" 
            ? "rgba(255, 255, 255, 0.05)" 
            : (cursorState === "hover" 
                ? "radial-gradient(circle, rgba(255, 77, 0, 0.4) 0%, rgba(255, 77, 0, 0) 70%)"
                : "radial-gradient(circle, rgba(255, 77, 0, 0.1) 0%, rgba(255, 77, 0, 0) 70%)"),
          border: cursorState === "magnify" 
            ? "1px solid rgba(255, 255, 255, 0.2)"
            : (cursorState === "hover" ? "none" : "1px solid rgba(255, 77, 0, 0.3)"),
          backdropFilter: cursorState === "magnify" ? "blur(6px) contrast(1.1) brightness(1.2)" : "none",
          WebkitBackdropFilter: cursorState === "magnify" ? "blur(6px) contrast(1.1) brightness(1.2)" : "none",
        }}
        animate={{
          width: cursorState === "magnify" ? CURSOR_SIZES.MAGNIFY : (cursorState === "hover" ? CURSOR_SIZES.HOVER : CURSOR_SIZES.DEFAULT),
          height: cursorState === "magnify" ? CURSOR_SIZES.MAGNIFY : (cursorState === "hover" ? CURSOR_SIZES.HOVER : CURSOR_SIZES.DEFAULT),
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      />
    </>
  );
}

