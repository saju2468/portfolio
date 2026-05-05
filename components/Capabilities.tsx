"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Layers, GitBranch, Cpu, Terminal, Zap, Globe, Gauge } from "lucide-react";
import { FadeIn } from "./FadeIn";

// --- Constants ---

const CORE_TOOLS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", 
  "Framer Motion", "Git", "Node.js", "Figma", 
  "REST APIs", "GraphQL", "Vercel", "Webpack"
];

const ENGINEER_DATA = {
  core: ["Next.js", "React", "TypeScript"],
  styling: ["Tailwind CSS", "Framer Motion"],
  state: ["Zustand", "Redux Toolkit"],
  focus: "Scalable, maintainable, performant."
};

const SCORES = [
  { label: "PERFORMANCE", value: 98 },
  { label: "A11Y", value: 100 },
  { label: "SEO", value: 100 },
  { label: "BEST PRAC.", value: 100 },
];

// --- Sub-components ---

const BentoCard = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode, 
  className?: string, 
  delay?: number 
}) => (
  <FadeIn 
    delay={delay} 
    className={`relative p-8 border border-grid-line bg-background/50 backdrop-blur-sm group hover:border-accent transition-all duration-500 overflow-hidden flex flex-col ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10 h-full flex flex-col">
      {children}
    </div>
  </FadeIn>
);

const BentoHeader = ({ index, title, Icon }: { index: string, title: string, Icon: any }) => (
  <div className="flex justify-between items-start mb-8">
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[10px] opacity-20" aria-hidden="true">{index}</span>
      <h3 className="technical-label !text-[12px] font-black group-hover:text-accent transition-colors">
        {title}
      </h3>
    </div>
    <Icon className="w-6 h-6 text-accent opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" aria-hidden="true" />
  </div>
);

const AnimatedScore = ({ label, score, delay = 0 }: { label: string, score: number, delay?: number }) => {
  const radius = 35;
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  return (
    <div className="flex flex-col items-center gap-3" role="img" aria-label={`${label} score: ${score}%`}>
      <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" aria-hidden="true">
          <circle cx="50%" cy="50%" r={radius} stroke="currentColor" strokeWidth="4" fill="transparent" className="text-foreground/10" />
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
            whileInView={{ strokeDashoffset: circumference - (score / 100) * circumference }}
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
};

const ToolMarquee = () => {
  // Triple the array for seamless looping coverage
  const marqueeTools = useMemo(() => [...CORE_TOOLS, ...CORE_TOOLS, ...CORE_TOOLS], []);

  return (
    <div className="flex-1 w-full overflow-hidden relative flex items-center mt-6 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]" aria-hidden="true">
      <motion.div
        className="flex gap-4 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {marqueeTools.map((tool, i) => (
          <div key={`${tool}-${i}`} className="px-4 py-2 border border-grid-line bg-background text-xs font-mono text-foreground/70 uppercase tracking-wider whitespace-nowrap shadow-[0_0_10px_rgba(0,0,0,0.1)] group-hover:border-accent/30 transition-colors">
            {tool}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const CodeSnippet = () => (
  <div className="flex-1 flex flex-col justify-end">
    <div className="border border-grid-line bg-background/80 p-4 sm:p-6 font-mono text-xs sm:text-sm text-foreground/80 overflow-hidden relative group/code hover:border-accent/50 transition-colors duration-500 shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-50" />
      <div className="flex gap-2 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-grid-line" />
        <div className="w-2.5 h-2.5 rounded-full bg-grid-line" />
        <div className="w-2.5 h-2.5 rounded-full bg-grid-line" />
      </div>
      <div className="flex flex-col gap-2">
        <p><span className="text-accent font-bold">const</span> <span className="text-foreground font-bold">seniorEngineer</span> = {"{"}</p>
        <p className="pl-4 sm:pl-8">core: <span className="text-accent">[{ENGINEER_DATA.core.map(t => `"${t}"`).join(", ")}]</span>,</p>
        <p className="pl-4 sm:pl-8">styling: <span className="text-accent">[{ENGINEER_DATA.styling.map(t => `"${t}"`).join(", ")}]</span>,</p>
        <p className="pl-4 sm:pl-8">state: <span className="text-accent">[{ENGINEER_DATA.state.map(t => `"${t}"`).join(", ")}]</span>,</p>
        <p className="pl-4 sm:pl-8">focus: <span className="text-foreground/70">&quot;{ENGINEER_DATA.focus}&quot;</span></p>
        <p>{"};"}</p>
      </div>
    </div>
  </div>
);

const SkillItem = ({ Icon, title, desc }: { Icon: any, title: string, desc: string }) => (
  <div className="flex items-center gap-4 group/item">
    <div className="w-12 h-12 rounded-full border border-grid-line flex items-center justify-center group-hover/item:border-accent group-hover/item:text-accent transition-colors bg-background">
      <Icon className="w-5 h-5" />
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-sm font-bold uppercase tracking-wider group-hover/item:text-accent transition-colors">{title}</span>
      <span className="text-xs text-foreground/60">{desc}</span>
    </div>
  </div>
);

export function Capabilities() {
  return (
    <section id="capabilities" className="px-6 md:px-24 py-32 border-t border-grid-line bg-foreground/[0.02] dark:bg-white/[0.02] relative overflow-hidden">
      <div className="flex flex-col gap-20">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-6">
            <div className="technical-label flex items-center gap-4" aria-hidden="true">
              <span className="symbol text-accent">✦</span>
              <span>CORE_CAPABILITIES_v3.0_BENTO</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Core<br />
              <span className="text-accent underline decoration-4 underline-offset-8">Skills.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]">

          {/* Widget 01: Frontend Architecture */}
          <BentoCard className="lg:col-span-2" delay={0.2}>
            <BentoHeader index="01" title="FRONTEND ARCHITECTURE" Icon={Terminal} />
            <CodeSnippet />
          </BentoCard>

          {/* Widget 02: Performance */}
          <BentoCard delay={0.3} className="flex flex-col justify-between items-center text-center">
            <BentoHeader index="02" title="PERFORMANCE" Icon={Gauge} />
            <div className="flex-1 flex flex-col items-center justify-center gap-6 w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                {SCORES.map((s, i) => (
                  <AnimatedScore key={s.label} label={s.label} score={s.value} delay={0.2 * (i + 1)} />
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Widget 03: Ecosystem */}
          <BentoCard delay={0.4} className="flex flex-col overflow-hidden">
            <BentoHeader index="03" title="ECOSYSTEM" Icon={GitBranch} />
            <div className="flex-1 flex flex-col justify-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              <ToolMarquee />
              <div className="flex gap-2 justify-center mt-6">
                {["DEVOPS", "WORKFLOW", "TOOLING"].map(tag => (
                  <span key={tag} className="technical-label !text-[8px] bg-foreground/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Widget 04: UI/UX engineering */}
          <BentoCard className="lg:col-span-2" delay={0.5}>
            <BentoHeader index="04" title="UI / UX ENGINEERING" Icon={Layers} />
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-6">
                <SkillItem Icon={Globe} title="Responsive Design" desc="Fluid typography & CSS Subgrid" />
                <SkillItem Icon={Zap} title="Micro-Interactions" desc="Framer Motion physics" />
                <SkillItem Icon={Cpu} title="Design Systems" desc="Token-based architecture" />
              </div>

              {/* Animated Layer Graphic */}
              <div className="relative h-48 w-full perspective-[1000px] hidden sm:flex items-center justify-center group/graphic" aria-hidden="true">
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
