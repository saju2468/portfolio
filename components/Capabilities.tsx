"use client";

import { motion } from "framer-motion";
import { Layers, GitBranch, Cpu, Terminal, Zap, Globe, Gauge } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SCORES, CAPABILITY_TAGS } from "@/data/skills";
import { BentoCard, BentoHeader } from "./capabilities/BentoCard";
import { ScoreGauge } from "./capabilities/ScoreGauge";
import { ToolMarquee } from "./capabilities/ToolMarquee";
import { CodeSnippet } from "./capabilities/CodeSnippet";
import { SkillItem } from "./capabilities/SkillItem";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="px-6 md:px-24 py-12 md:py-32 border-t border-grid-line bg-foreground/2 relative overflow-hidden"
    >
      <div className="flex flex-col gap-8 md:gap-20">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="technical-label flex items-center gap-4" aria-hidden="true">
              <span className="symbol text-accent">✦</span>
              <span>CORE_CAPABILITIES_v3.0_BENTO</span>
            </div>
            <h2 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Core<br />
              <span className="text-accent underline decoration-4 underline-offset-8">Skills.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-auto lg:auto-rows-[minmax(320px,auto)]">
          {/* Widget 01: Frontend Architecture */}
          <BentoCard className="lg:col-span-2" delay={0.2}>
            <BentoHeader index="01" title="FRONTEND ARCHITECTURE" Icon={Terminal} />
            <CodeSnippet />
          </BentoCard>

          {/* Widget 02: Performance */}
          <BentoCard delay={0.3} className="flex flex-col justify-between items-center text-center">
            <BentoHeader index="02" title="PERFORMANCE" Icon={Gauge} />
            <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 w-full py-2">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                {SCORES.map((s, i) => (
                  <ScoreGauge
                    key={s.label}
                    label={s.label}
                    score={s.value}
                    delay={0.2 * (i + 1)}
                  />
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Widget 03: Ecosystem */}
          <BentoCard delay={0.4} className="flex flex-col overflow-hidden">
            <BentoHeader index="03" title="ECOSYSTEM" Icon={GitBranch} />
            <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-4 py-2 transition-opacity duration-500">
              <ToolMarquee />
              <div className="flex flex-wrap gap-2 justify-center mt-4 sm:mt-6">
                {CAPABILITY_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] font-bold text-foreground bg-card border border-card-border px-2.5 py-1 rounded shadow-xs uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Widget 04: UI/UX engineering */}
          <BentoCard className="lg:col-span-2" delay={0.5}>
            <BentoHeader index="04" title="UI / UX ENGINEERING" Icon={Layers} />
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="flex flex-col gap-4 sm:gap-6">
                <SkillItem
                  Icon={Globe}
                  title="Responsive Design"
                  desc="Fluid typography & CSS Subgrid"
                />
                <SkillItem
                  Icon={Zap}
                  title="Micro-Interactions"
                  desc="Framer Motion physics"
                />
                <SkillItem
                  Icon={Cpu}
                  title="Design Systems"
                  desc="Token-based architecture"
                />
              </div>

              {/* Animated Layer Graphic */}
              <div
                className="relative h-48 w-full perspective-[1000px] hidden sm:flex items-center justify-center group/graphic"
                aria-hidden="true"
              >
                <motion.div
                  className="absolute w-40 h-32 border border-accent bg-accent/10 backdrop-blur-md rounded-lg group-hover/graphic:bg-accent/20 transition-colors duration-500"
                  initial={{ rotateX: 60, rotateZ: -45, y: -20, x: -20 }}
                  whileHover={{ rotateX: 60, rotateZ: -45, y: -40, x: -40 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <motion.div
                  className="absolute w-40 h-32 border border-foreground/30 bg-background/50 backdrop-blur-md rounded-lg group-hover/graphic:border-foreground/60 transition-colors duration-500"
                  initial={{ rotateX: 60, rotateZ: -45, y: 10, x: 10 }}
                  whileHover={{ rotateX: 60, rotateZ: -45, y: 0, x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <motion.div
                  className="absolute w-40 h-32 border border-grid-line bg-background/80 backdrop-blur-md rounded-lg group-hover/graphic:border-grid-line/80 transition-colors duration-500"
                  initial={{ rotateX: 60, rotateZ: -45, y: 40, x: 40 }}
                  whileHover={{ rotateX: 60, rotateZ: -45, y: 40, x: 40 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
