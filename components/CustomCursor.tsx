"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMagnifying, setIsMagnifying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over magnifier text
      if (target.classList.contains("magnify-target") || target.closest(".magnify-target")) {
        setIsMagnifying(true);
        setIsHovering(false);
      } 
      // Check if hovering over interactive elements
      else if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("group") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
        setIsMagnifying(false);
      } else {
        setIsHovering(false);
        setIsMagnifying(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return null; // Don't show custom cursor on mobile
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          background: isMagnifying 
            ? "rgba(255, 255, 255, 0.05)" 
            : (isHovering 
                ? "radial-gradient(circle, rgba(255, 77, 0, 0.4) 0%, rgba(255, 77, 0, 0) 70%)"
                : "radial-gradient(circle, rgba(255, 77, 0, 0.1) 0%, rgba(255, 77, 0, 0) 70%)"),
          border: isMagnifying 
            ? "1px solid rgba(255, 255, 255, 0.2)"
            : (isHovering ? "none" : "1px solid rgba(255, 77, 0, 0.3)"),
          backdropFilter: isMagnifying ? "blur(6px) contrast(1.1) brightness(1.2)" : "none",
          WebkitBackdropFilter: isMagnifying ? "blur(6px) contrast(1.1) brightness(1.2)" : "none",
        }}
        animate={{
          width: isMagnifying ? 250 : (isHovering ? 200 : 40),
          height: isMagnifying ? 250 : (isHovering ? 200 : 40),
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      />
    </>
  );
}
