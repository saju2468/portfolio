"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { CORE_TOOLS } from "@/data/skills";

/**
 * Seamless infinite marquee strip of tools and frameworks.
 */
export function ToolMarquee() {
  const marqueeTools = useMemo(
    () => [...CORE_TOOLS, ...CORE_TOOLS, ...CORE_TOOLS],
    []
  );

  return (
    <div
      className="flex-1 w-full overflow-hidden relative flex items-center mt-6 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-4 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {marqueeTools.map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="px-4 py-2 border border-grid-line bg-background text-xs font-mono text-foreground/70 uppercase tracking-wider whitespace-nowrap shadow-[0_0_10px_rgba(0,0,0,0.1)] group-hover:border-accent/30 transition-colors"
          >
            {tool}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

