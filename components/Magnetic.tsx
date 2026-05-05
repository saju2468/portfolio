"use client";

import React, { useRef, useCallback } from "react";
import { motion, useSpring, useMotionValue, useReducedMotion } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  /** Strength of the magnetic pull (default: 0.5) */
  strength?: number;
  /** Optional CSS class for the wrapper */
  className?: string;
  /** Custom spring physics configuration */
  springConfig?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
  };
}

const DEFAULT_SPRING_CONFIG = { damping: 15, stiffness: 150, mass: 0.1 };

/**
 * A high-performance Magnetic component that pulls its content towards the mouse cursor.
 * Implements layout-thrashing prevention and respects user motion preferences.
 */
export function Magnetic({ 
  children, 
  strength = 0.5, 
  className = "",
  springConfig = DEFAULT_SPRING_CONFIG
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Motion values for tracking target position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for natural movement
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Cached dimensions to avoid calling getBoundingClientRect on every mouse move
  const bounds = useRef<DOMRect | null>(null);

  /**
   * Updates the cached element bounds.
   * Called on mouse enter and optionally on resize/scroll if needed.
   */
  const updateBounds = useCallback(() => {
    if (ref.current) {
      bounds.current = ref.current.getBoundingClientRect();
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // Accessibility: Disable effect if user prefers reduced motion
    if (shouldReduceMotion) return;
    
    // Safety check: ensure bounds are available
    if (!bounds.current) {
      updateBounds();
    }

    if (!bounds.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = bounds.current;
    
    // Calculate center of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center to mouse
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Apply the magnetic pull
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  }, [strength, shouldReduceMotion, x, y, updateBounds]);

  const handleMouseEnter = useCallback(() => {
    updateBounds();
  }, [updateBounds]);

  const handleMouseLeave = useCallback(() => {
    // Reset position smoothly
    x.set(0);
    y.set(0);
    // Clear cached bounds to ensure fresh data next time
    bounds.current = null;
  }, [x, y]);

  // If user prefers reduced motion, render without the motion wrapper logic
  if (shouldReduceMotion) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
