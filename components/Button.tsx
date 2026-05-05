"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, HTMLMotionProps } from "framer-motion";
import { Magnetic } from "./Magnetic";
import Link from "next/link";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  magnetic?: boolean;
  magneticStrength?: number;
}

export function Button({
  children,
  onClick,
  href,
  className = "",
  variant = "primary",
  magnetic = true,
  magneticStrength = 0.3,
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking inside the button for the fill effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || disabled) return;
    const rect = buttonRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const buttonContent = (
    <motion.button
      ref={buttonRef as any}
      onClick={onClick}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      disabled={disabled}
      type={type}
      {...props}
      className={`
        relative group px-10 py-5 font-black text-xs md:text-sm uppercase tracking-[0.3em] overflow-hidden transition-all duration-500
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-default"}
        ${variant === "primary" ? "bg-foreground text-background" : ""}
        ${variant === "outline" ? "border-2 border-foreground/20 text-foreground hover:border-accent" : ""}
        ${variant === "secondary" ? "border-2 border-accent text-accent shadow-[6px_6px_0px_0px_rgba(255,77,0,0.1)] hover:shadow-none" : ""}
        ${className}
      `}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {/* Magnetic Reveal Fill */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 120px at ${springX}px ${springY}px, var(--accent, #ff4d00) 0%, transparent 100%)`,
          }}
        />
      )}

      {/* Decorative Corners/Lines for Cyberpunk feel */}
      <div className="absolute top-0 left-0 w-2 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-4" />
      <div className="absolute top-0 left-0 w-[2px] h-2 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:h-4" />
      
      <div className="absolute bottom-0 right-0 w-2 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-4" />
      <div className="absolute bottom-0 right-0 w-[2px] h-2 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:h-4" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center gap-4 transition-transform duration-500 group-hover:scale-105">
        {children}
      </div>

      {/* Scanline Effect on Hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </motion.button>
  );

  const finalButton = href ? (
    <Link href={href}>{buttonContent}</Link>
  ) : (
    buttonContent
  );

  if (magnetic) {
    return <Magnetic strength={magneticStrength}>{finalButton}</Magnetic>;
  }

  return finalButton;
}
