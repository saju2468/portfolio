"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Button } from "./Button";

// --- Types ---

interface Project {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
  status: string;
  technologies: string;
  coreFocus: string;
  tags: string[];
  link: string;
  accentColor: string;
}

// --- Constants ---

const PROJECTS: Project[] = [
  {
    id: "PRJ_001",
    year: "2024",
    title: "VAIDYARATNAM",
    description: "Developed responsive and accessible UI components using Tailwind CSS. Converted design mockups into clean HTML layouts, ensuring cross-browser compatibility and working closely with backend developers for smooth UI integration.",
    image: "/assets/vaidyaratnam_hero.png",
    status: "DEPLOYMENT_ACTIVE",
    technologies: "HTML / Tailwind CSS",
    coreFocus: "Responsive UI / Styling",
    tags: ["UI COMPONENTS", "CROSS-BROWSER", "ACCESSIBILITY", "RESPONSIVE"],
    link: "https://vaidyaratnamstore.com",
    accentColor: "bg-accent",
  },
  {
    id: "PRJ_002",
    year: "2024",
    title: "Muthoot_Capital",
    description: "Developed key frontend modules using Next.js with a component-based architecture. Implemented SSR/SSG for SEO-critical pages, integrated REST APIs for major data flows, and optimized performance using image optimization and lazy loading.",
    image: "/assets/muthoot_hero.png",
    status: "DOCKER_GRID_ACTIVE",
    technologies: "Next.js / React / Tailwind CSS",
    coreFocus: "REST APIs / SSR / SSG",
    tags: ["PERFORMANCE", "IMAGE OPTIMIZATION", "ACCESSIBILITY", "STATE MANAGEMENT"],
    link: "https://www.muthootcap.com/",
    accentColor: "bg-[#ff4d00]",
  },
  {
    id: "PRJ_003",
    year: "2023",
    title: "LUXON_TATA",
    description: "Implemented pixel-perfect UI screens based on design requirements using HTML and Tailwind CSS. Built fully responsive layouts ensuring consistent experience across desktop, tablet, and mobile devices, optimizing CSS structure for maintainability.",
    image: "/assets/luxon_hero.png",
    status: "DEPLOYMENT_ACTIVE",
    technologies: "HTML / Tailwind CSS",
    coreFocus: "Responsive UI / Integration",
    tags: ["PIXEL-PERFECT", "RESPONSIVE LAYOUTS", "CSS OPTIMIZATION", "PHP INTEGRATION"],
    link: "https://luxontata.com/",
    accentColor: "bg-accent",
  }
];

// --- Sub-components ---

/**
 * A decorative component that follows the cursor and reveals project previews.
 */
const FloatingImage = ({ 
  hoveredIndex, 
  cursorX, 
  cursorY 
}: { 
  hoveredIndex: number | null, 
  cursorX: any, 
  cursorY: any 
}) => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden lg:block overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="absolute top-0 left-0 w-[360px] h-[240px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-grid-line rounded-sm"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
          rotate: hoveredIndex !== null ? 0 : -5,
        }}
        transition={{ 
          opacity: { duration: 0.3 }, 
          scale: { duration: 0.4 }, 
          rotate: { duration: 0.4 } 
        }}
      >
        {PROJECTS.map((project, index) => (
          <Image
            key={project.id}
            src={project.image}
            alt={project.title}
            fill
            sizes="360px"
            className={`object-cover transition-all duration-700 ease-in-out ${
              hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
      </motion.div>
    </div>
  );
};

/**
 * An individual project row component with hover interactions.
 */
const ProjectItem = ({ 
  project, 
  index, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  project: Project, 
  index: number, 
  isHovered: boolean,
  onMouseEnter: () => void,
  onMouseLeave: () => void
}) => {
  return (
    <FadeIn delay={0.1 * (index + 1)}>
      <Link 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-full group/link"
        aria-label={`View project details for ${project.title}`}
      >
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="border-b border-grid-line py-12 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group/row relative overflow-hidden"
        >
          {/* Hover Animated Line */}
          <div className="absolute bottom-[-1px] left-0 h-[2px] bg-accent w-full transform origin-left scale-x-0 group-hover/row:scale-x-100 transition-transform duration-700 ease-out z-20" />

          {/* Subtle Background Fill */}
          <div
            className="absolute inset-0 z-0 opacity-0 group-hover/row:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(255,77,0,0.04) 0%, transparent 100%)'
            }}
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between relative z-10 w-full">
            <div className="flex items-center gap-6 lg:gap-16 relative">
              {/* Index Number */}
              <div className="font-mono text-sm text-secondary opacity-60 group-hover/row:opacity-100 group-hover/row:text-accent transition-all duration-500 w-8 hidden lg:block -translate-x-4 group-hover/row:translate-x-0">
                0{index + 1}
              </div>

              {/* Huge Typography with Text Stroke */}
              <h3
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase leading-[0.8] transition-all duration-700 group-hover/row:translate-x-4 ${
                  !isHovered && 'dark:opacity-40 opacity-50'
                }`}
                style={{
                  WebkitTextStroke: isHovered ? "0px transparent" : "1px var(--foreground)",
                  WebkitTextFillColor: isHovered ? "var(--foreground)" : "transparent",
                }}
              >
                {project.title}
              </h3>
            </div>

            {/* Mobile Image Fallback */}
            <div className="block lg:hidden relative w-full aspect-video border border-grid-line overflow-hidden mt-6 shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                className="object-cover grayscale contrast-125 group-hover/row:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Tech Details Column */}
            <div className="flex flex-col gap-3 lg:items-end w-full lg:w-auto mt-6 lg:mt-0 transition-all duration-500 lg:opacity-0 lg:translate-x-8 group-hover/row:opacity-100 group-hover/row:translate-x-0">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-bold hidden lg:block">
                Launch_Project <span className="symbol inline-block group-hover/link:translate-x-2 group-hover/link:-translate-y-2 transition-transform duration-300">↗</span>
              </span>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono border border-grid-line text-foreground px-2 py-1 uppercase backdrop-blur-md bg-background transition-all duration-500 font-medium shadow-sm"
                    style={{ transitionDelay: `${isHovered ? 100 * tagIndex : 0}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-mono text-xs text-secondary mt-1 lg:text-right w-full font-medium">{project.technologies}</span>
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
};

export function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Performance: Use motion values to track mouse without triggering React re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the floating preview
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // Offset to center the image on the cursor
    mouseX.set(e.clientX - 180);
    mouseY.set(e.clientY - 120);
  }, [mouseX, mouseY]);

  return (
    <section
      id="work"
      className="px-6 md:px-24 py-32 md:py-36 border-t border-grid-line relative z-10 mt-12 md:mt-0 cursor-default"
      onMouseMove={handleMouseMove}
      aria-label="Portfolio Work Section"
    >
      <FloatingImage 
        hoveredIndex={hoveredIndex} 
        cursorX={cursorX} 
        cursorY={cursorY} 
      />

      <div className="flex flex-col gap-20">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-6">
            <div className="technical-label flex items-center gap-4" aria-hidden="true">
              <span className="symbol text-accent">✦</span>
              <span>SYSTEM_MANIFEST_v0.6_ULTRA</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Featured.<br />
              <span className="text-accent underline decoration-4 underline-offset-8">Projects.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="w-full flex flex-col mt-4">
          <div className="border-t border-grid-line w-full" aria-hidden="true" />

          {PROJECTS.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center w-full relative z-20">
          <Button href="/projects" variant="secondary">
            <span>VIEW_ALL_PROJECTS</span>
            <span className="symbol text-xl group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

