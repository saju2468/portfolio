"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { useMemo } from "react";
import { SYSTEM_CONFIG } from "@/data/systemConfig";
import { useRealTime } from "@/hooks/useRealTime";

// --- Sub-components ---

/**
 * Letter-by-letter animated text with magnification effect
 */
const AnimatedText = ({ text }: { text: string }) => {
  const chars = useMemo(() => text.split(""), [text]);
  return (
    <>
      {chars.map((char, index) => (
        <span key={`${char}-${index}`} className="magnify-letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
};

/**
 * Reusable Portrait Frame component for consistent styling
 */
const PortraitFrame = ({ className = "" }: { className?: string }) => (
  <div
    className={`group relative p-2 border border-card-border bg-card shadow-lg transition-all duration-700 hover:border-accent ${className}`}
  >
    {/* Decorative Label */}
    <div className="absolute top-0 right-0 p-4 mix-blend-difference z-10 opacity-60 group-hover:opacity-100 transition-opacity">
      <span className="technical-label text-[8px]! text-white tracking-[0.4em]">
        LIVE_FEED_01
      </span>
    </div>

    {/* Image Container */}
    <div className="relative aspect-4/5 w-full overflow-hidden">
      <Image
        src="/sajin.jpg"
        alt="Sajin Portrait"
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 350px"
        quality={85}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
    </div>

    {/* Corner Accents */}
    <div
      className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-accent"
      aria-hidden="true"
    />
    <div
      className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-accent"
      aria-hidden="true"
    />
  </div>
);

export function Hero() {
  const time = useRealTime();

  return (
    <section
      id="about"
      className="min-h-0 md:min-h-screen flex flex-col justify-start md:justify-center px-6 sm:px-8 md:px-14 lg:px-16 2xl:px-24 pt-32 sm:pt-28 md:pt-48 pb-10 md:pb-16 relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Desktop Portrait - Fixed position at the side */}
      <div
        className="absolute z-10 hidden lg:flex flex-col gap-4 w-70 xl:w-75 2xl:w-87.5 right-6 lg:right-8 xl:right-10 2xl:right-[10%] top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <PortraitFrame />
        <div className="flex justify-between items-center text-muted font-bold text-[9px] font-mono tracking-widest px-1">
          <span>REF_ID: // {SYSTEM_CONFIG.REF_ID}</span>
          <span>SCAN_COMPLETE_99.8%</span>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-3xl lg:max-w-176 xl:max-w-216 2xl:max-w-240">
        {/* Header Metadata Section */}
        <FadeIn delay={0.1}>
          <div
            className="technical-label mb-6 md:mb-10 flex items-center gap-4 md:gap-6"
            aria-hidden="true"
          >
            <span className="symbol text-xl md:text-2xl">✦</span>
            <span className="text-[10px] md:text-xs">
              SYSTEM_INITIALIZED_00.2
            </span>
            <span className="handwriting text-xl ml-8 -rotate-2 hidden md:inline-block">
              {"// Portrait mode active"}
            </span>
          </div>
        </FadeIn>

        {/* Hero Title Section */}
        <FadeIn delay={0.2}>
          <h1 className="text-[13vw] sm:text-[11vw] md:text-[9vw] max-w-240 font-black tracking-tighter leading-[0.82] mb-8 md:mb-12 uppercase typing-cursor magnify-target origin-left">
            <AnimatedText text="CRAFTING" />
            <br />
            <AnimatedText text="MODERN" />
            <br />
            <span className="text-accent relative">
              <AnimatedText text="WEBSITES" />
              <span className="inline-block w-3 sm:w-4 md:w-8 h-1.5 sm:h-2 md:h-4 bg-accent ml-2 translate-y-[-20%]" />
            </span>
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-12 xl:gap-16 2xl:gap-24 items-start md:mt-12">
          {/* Content Block */}
          <div className="md:col-span-12 lg:col-span-7 flex flex-col gap-6 md:gap-10">
            {/* Mobile Portrait - Rendered immediately for optimal LCP score */}
            <div className="lg:hidden w-full max-w-70 sm:max-w-85 mb-4 sm:mb-8">
              <PortraitFrame />
            </div>

            <FadeIn delay={0.4}>
              <p className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.15] md:leading-[1.1] font-bold tracking-tight max-w-208 text-foreground">
                Architecting high-performance digital experiences and scalable frontend systems.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <p className="font-mono text-xs sm:text-sm md:text-base max-w-xl leading-relaxed text-muted light:text-neutral-700">
                  Specializing in Next.js, React, and TypeScript. Focused on
                  robust state architecture, sub-second performance optimization,
                  and building resilient design systems that scale effortlessly.
                </p>
                <div className="technical-label text-[9px] border-l-2 border-accent pl-3 md:pl-4 flex flex-row md:flex-col gap-4 md:gap-2 shrink-0">
                  <span>LOC: {SYSTEM_CONFIG.LOCATION}</span>
                  <span>TIME: {time || "00:00:00 AM"}</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar Metadata Section */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6 md:gap-10 2xl:gap-12 lg:pl-6 xl:pl-8 2xl:pl-12 decoration_elements">
            <FadeIn delay={0.6}>
              <div className="space-y-2 md:space-y-4">
                <span className="technical-label text-muted! light:text-neutral-700! font-bold!">
                  SYSTEM STATUS
                </span>
                <div className="flex items-center gap-2.5 border-l-2 border-accent pl-3 md:pl-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" aria-hidden="true" />
                  <span className="text-xs font-mono uppercase font-bold text-accent">
                    NOMINAL_OPERATIONS_STABLE
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="space-y-2 md:space-y-4">
                <span className="technical-label text-muted! light:text-neutral-700! font-bold!">
                  ACTIVE MODULES
                </span>
                <div className="flex flex-wrap gap-2">
                  {SYSTEM_CONFIG.ACTIVE_MODULES.map((module) => (
                    <span
                      key={module}
                      className="text-[10px] font-mono border border-card-border bg-card text-foreground shadow-xs px-2.5 py-1 uppercase font-bold hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Redundant on mobile because ACTIVE MODULES already displays the stack badges above */}
            <FadeIn delay={0.8} className="hidden md:block">
              <div className="space-y-4">
                <span className="technical-label text-muted! light:text-neutral-700! font-bold!">
                  CURRENT STACK
                </span>
                <p className="text-[10px] font-mono font-bold leading-relaxed tracking-widest uppercase text-accent">
                  {SYSTEM_CONFIG.CURRENT_STACK}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
