"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export interface ScoreGaugeProps {
  label: string;
  score: number;
  delay?: number;
}

/**
 * Animated SVG circular gauge for Lighthouse metrics.
 */
export function ScoreGauge({ label, score, delay = 0 }: ScoreGaugeProps) {
  const radius = 35;
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  return (
    <div
      className="flex flex-col items-center gap-3"
      role="img"
      aria-label={`${label} score: ${score}%`}
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" aria-hidden="true">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-foreground/10"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-accent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{
              strokeDashoffset: circumference - (score / 100) * circumference,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg md:text-xl font-bold font-mono">{score}</span>
        </div>
      </div>
      <span className="technical-label !text-[10px]">{label}</span>
    </div>
  );
}

