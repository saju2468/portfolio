"use client";

import { motion } from "framer-motion";
import { Layers, GitBranch, Cpu, Terminal, Zap, Globe, Gauge } from "lucide-react";
import { FadeIn } from "./FadeIn";

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <FadeIn delay={delay} className={`relative p-8 border border-grid-line bg-background/50 backdrop-blur-sm group hover:border-accent transition-all duration-500 overflow-hidden flex flex-col ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </FadeIn>
  );
};

const AnimatedScore = ({ label, score, delay = 0 }: { label: string, score: number, delay?: number }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
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
            transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
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
  const tools = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Git", "Node.js", "Figma", "REST APIs", "GraphQL", "Vercel", "Webpack"];

  // Create a double array for seamless looping
  const marqueeTools = [...tools, ...tools, ...tools];

  return (
    <div className="flex-1 w-full overflow-hidden relative flex items-center mt-6 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {marqueeTools.map((tool, i) => (
          <div key={i} className="px-4 py-2 border border-grid-line bg-background text-xs font-mono text-foreground/70 uppercase tracking-wider whitespace-nowrap shadow-[0_0_10px_rgba(0,0,0,0.1)] group-hover:border-foreground/20 transition-colors">
            {tool}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function Capabilities() {
  return (
    <section id="capabilities" className="px-6 md:px-24 py-32 border-t border-grid-line bg-foreground/[0.02] dark:bg-white/[0.02] relative overflow-hidden">
      <div className="flex flex-col gap-20">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-6">
            <div className="technical-label flex items-center gap-4">
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

          {/* Widget A: Core Frontend (Col Span 2) */}
          <BentoCard className="lg:col-span-2" delay={0.2}>
            <div className="flex justify-between items-start mb-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] opacity-20">01</span>
                <h3 className="technical-label !text-[12px] font-black group-hover:text-accent transition-colors">
                  FRONTEND ARCHITECTURE
                </h3>
              </div>
              <Terminal className="w-6 h-6 text-accent opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" />
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="border border-grid-line bg-background/80 p-4 sm:p-6 font-mono text-xs sm:text-sm text-foreground/80 overflow-hidden relative group/code hover:border-accent/50 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-50" />
                <div className="flex gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-grid-line" />
                  <div className="w-2.5 h-2.5 rounded-full bg-grid-line" />
                  <div className="w-2.5 h-2.5 rounded-full bg-grid-line" />
                </div>
                <div className="flex flex-col gap-2">
                  <p><span className="text-accent font-bold">const</span> <span className="text-foreground font-bold">seniorEngineer</span> = {"{"}</p>
                  <p className="pl-4 sm:pl-8">core: <span className="text-accent">[&quot;Next.js&quot;, &quot;React&quot;, &quot;TypeScript&quot;]</span>,</p>
                  <p className="pl-4 sm:pl-8">styling: <span className="text-accent">[&quot;Tailwind CSS&quot;, &quot;Framer Motion&quot;]</span>,</p>
                  <p className="pl-4 sm:pl-8">state: <span className="text-accent">[&quot;Zustand&quot;, &quot;Redux Toolkit&quot;]</span>,</p>
                  <p className="pl-4 sm:pl-8">focus: <span className="text-foreground/70">&quot;Scalable, maintainable, performant.&quot;</span></p>
                  <p>{"};"}</p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Widget B: Performance (Col Span 1) */}
          <BentoCard delay={0.3} className="flex flex-col justify-between items-center text-center">
            <div className="w-full flex justify-between items-start mb-8">
              <div className="flex flex-col gap-2 text-left">
                <span className="font-mono text-[10px] opacity-20">02</span>
                <h3 className="technical-label !text-[12px] font-black group-hover:text-accent transition-colors">
                  PERFORMANCE
                </h3>
              </div>
              <Gauge className="w-6 h-6 text-accent opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:-rotate-12" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-6 w-full">
              <div className="flex justify-center gap-4 sm:gap-6 w-full">
                <AnimatedScore label="PERFORMANCE" score={98} delay={0.2} />
                <AnimatedScore label="A11Y" score={100} delay={0.4} />
              </div>
              <div className="flex justify-center gap-4 sm:gap-6 w-full">
                <AnimatedScore label="SEO" score={100} delay={0.6} />
                <AnimatedScore label="BEST PRAC." score={100} delay={0.8} />
              </div>
            </div>
          </BentoCard>

          {/* Widget C: Tools Marquee (Col Span 1) */}
          <BentoCard delay={0.4} className="flex flex-col overflow-hidden">
            <div className="flex justify-between items-start mb-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] opacity-20">03</span>
                <h3 className="technical-label !text-[12px] font-black group-hover:text-accent transition-colors">
                  ECOSYSTEM
                </h3>
              </div>
              <GitBranch className="w-6 h-6 text-accent opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              <ToolMarquee />
              <div className="flex gap-2 justify-center mt-2">
                <span className="technical-label !text-[8px] bg-foreground/5 px-2 py-1 rounded">DEVOPS</span>
                <span className="technical-label !text-[8px] bg-foreground/5 px-2 py-1 rounded">WORKFLOW</span>
              </div>
            </div>
          </BentoCard>

          {/* Widget D: UI/UX & Responsive (Col Span 2) */}
          <BentoCard className="lg:col-span-2" delay={0.5}>
            <div className="flex justify-between items-start mb-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] opacity-20">04</span>
                <h3 className="technical-label !text-[12px] font-black group-hover:text-accent transition-colors">
                  UI / UX ENGINEERING
                </h3>
              </div>
              <Layers className="w-6 h-6 text-accent opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:-rotate-12" />
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-full border border-grid-line flex items-center justify-center group-hover/item:border-accent group-hover/item:text-accent transition-colors bg-background">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold uppercase tracking-wider group-hover/item:text-accent transition-colors">Responsive Design</span>
                    <span className="text-xs text-foreground/60">Fluid typography & CSS Subgrid</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-full border border-grid-line flex items-center justify-center group-hover/item:border-accent group-hover/item:text-accent transition-colors bg-background">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold uppercase tracking-wider group-hover/item:text-accent transition-colors">Micro-Interactions</span>
                    <span className="text-xs text-foreground/60">Framer Motion physics</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-full border border-grid-line flex items-center justify-center group-hover/item:border-accent group-hover/item:text-accent transition-colors bg-background">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold uppercase tracking-wider group-hover/item:text-accent transition-colors">Design Systems</span>
                    <span className="text-xs text-foreground/60">Token-based architecture</span>
                  </div>
                </div>
              </div>

              {/* Animated Layer Graphic */}
              <div className="relative h-48 w-full perspective-[1000px] hidden sm:flex items-center justify-center group/graphic">
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
