"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      id: "PRJ_001",
      title: "VAIDYARATNAM",
      category: "E-COMMERCE",
      year: "2024",
      image: "/assets/vaidyaratnam_hero.png",
      desc: "Developed responsive and accessible UI components using Tailwind CSS. Converted design mockups into clean HTML layouts, ensuring cross-browser compatibility and working closely with backend developers for smooth UI integration.",
      tech: "HTML / Tailwind CSS",
      focus: "Responsive UI / Styling",
      tags: ["UI COMPONENTS", "CROSS-BROWSER", "ACCESSIBILITY", "RESPONSIVE"],
      link: "https://vaidyaratnamstore.com"
    },
    {
      id: "PRJ_002",
      title: "Muthoot Capital",
      category: "CMS",
      year: "2025",
      image: "/assets/muthoot_hero.png",
      desc: "Developed key frontend modules using Next.js with a component-based architecture. Implemented SSR/SSG for SEO-critical pages, integrated REST APIs for major data flows, and optimized performance using image optimization and lazy loading.",
      tech: "Next.js / React / Tailwind CSS",
      focus: "REST APIs / SSR / SSG",
      tags: ["PERFORMANCE", "IMAGE OPTIMIZATION", "ACCESSIBILITY", "STATE MANAGEMENT"],
      link: "https://www.muthootcap.com/"
    },
    {
      id: "PRJ_003",
      title: "LUXON TATA MOTORS",
      category: "CMS",
      year: "2023",
      image: "/assets/luxon_hero.png",
      desc: "Implemented pixel-perfect UI screens based on design requirements using HTML and Tailwind CSS. Built fully responsive layouts ensuring consistent experience across desktop, tablet, and mobile devices, optimizing CSS structure for maintainability.",
      tech: "HTML / Tailwind CSS",
      focus: "Responsive UI / Integration",
      tags: ["PIXEL-PERFECT", "RESPONSIVE LAYOUTS", "CSS OPTIMIZATION"],
      link: "https://luxontata.com/"
    },
    {
      id: "PRJ_005",
      title: "24 Study Abroad",
      category: "CMS",
      year: "2024",
      image: "/assets/studyabroad_hero1.png",
      desc: "A study abroad website. Built the frontend architecture and integrated REST APIs with Strapi backend for dynamic content delivery.",
      tech: "Next.js / Strapi / Tailwind CSS",
      focus: "Frontend / REST API Integration",
      tags: ["NEXT.JS", "STRAPI CMS", "API INTEGRATION", "STATE MANAGEMENT"],
      link: "https://24studyabroad.com/"
    },
    {
      id: "PRJ_008",
      title: "South Indian Credits",
      category: "CMS",
      year: "2024",
      image: "/assets/southindian_hero1.png",
      desc: "Financial companion offering trusted solutions. Developed the frontend application with Next.js and Tailwind CSS.",
      tech: "Next.js / Strapi / Tailwind CSS",
      focus: "Frontend Development",
      tags: ["FINTECH", "NEXT.JS", "STRAPI CMS", "TAILWIND CSS"],
      link: "https://southindiancredits.com/"
    },
    {
      id: "PRJ_011",
      title: "Somans Leisure Tours",
      category: "OTHER",
      year: "2024",
      image: "/assets/somans-hero1.png",
      desc: "Premium tour operator in Kerala. Developed interactive and visually stunning UI components using React.",
      tech: "React / CSS",
      focus: "UI Development",
      tags: ["TRAVEL UI", "REACT", "INTERACTIVE DESIGN", "COMPONENT ARCHITECTURE"],
      link: "https://www.somansleisuretours.com/"
    },
    {
      id: "PRJ_013",
      title: "TT Devassy Jewellery",
      category: "E-COMMERCE",
      year: "2024",
      image: "/assets/ttdevassy_hero1.png",
      desc: "Luxury jewelry brand website. Built the frontend using Next.js and Tailwind CSS.",
      tech: "Next.js / Node.js / Tailwind CSS",
      focus: "Frontend Development",
      tags: ["JEWELRY UI", "NEXT.JS", "TAILWIND CSS", "NODE.JS"],
      link: "https://www.ttdevassyjewellery.com/"
    },
    {
      id: "PRJ_014",
      title: "Josco Jewellers",
      category: "E-COMMERCE",
      year: "2023",
      image: "/assets/josco_hero1.png",
      desc: "Fine jewelry brand website. Crafted precise HTML and CSS to create an elegant and responsive UI for a Laravel-powered backend.",
      tech: "HTML / CSS / Laravel",
      focus: "UI Development",
      tags: ["JEWELRY UI", "HTML5", "CSS3", "LARAVEL INTEGRATION"],
      link: "https://www.joscojewellers.in/"
    },
    {
      id: "PRJ_016",
      title: "Mary Sadan Edathala Group",
      category: "CMS",
      year: "2026",
      image: "/assets/marysadan_logo1.png",
      desc: "Developed a premium infrastructure development company website for Mary Sadan Edathala Group. Focused on a professional corporate identity, showcasing large-scale construction projects in Kerala and Karnataka.",
      tech: "Next.js / React / Tailwind CSS",
      focus: "Corporate UI / Infrastructure",
      tags: ["INFRASTRUCTURE", "CORPORATE", "PREMIUM DESIGN", "RESPONSIVE"],
      link: "https://marysadan.com/"
    },
    {
      id: "PRJ_017",
      title: "Travz Car Rental",
      category: "OTHER",
      year: "2024",
      image: "/assets/travz-logo.png",
      desc: "Built a high-performance car rental platform for Travz Muscat. Features free airport pickup integration, automated booking workflows, and a responsive fleet management interface for daily and monthly rates.",
      tech: "React / Tailwind CSS",
      focus: "Responsive UI / UX",
      tags: ["CAR RENTAL", "MUSCAT", "BOOKING SYSTEM", "CONVERSION"],
      link: "https://travzcarrental.com/"
    },
    {
      id: "PRJ_004",
      title: "Levage Engineering",
      category: "CMS",
      year: "2024",
      image: "/assets/levage-hero.png",
      desc: "A construction company website. Developed custom UI components using Tailwind CSS and HTML to match premium design specifications.",
      tech: "HTML / Tailwind CSS",
      focus: "Responsive UI / Integration",
      tags: ["UI COMPONENTS", "RESPONSIVE LAYOUTS", "CSS OPTIMIZATION", "WORDPRESS INTEGRATION"],
      link: "https://levageengineering.com/"
    },
    {
      id: "PRJ_006",
      title: "Dar As-sihha",
      category: "CMS",
      year: "2024",
      image: "/assets/darassihha_hero1.png",
      desc: "A modern hospital website. Implemented clean and professional user interfaces using Next.js and Tailwind CSS for a Strapi-powered platform.",
      tech: "Next.js / Strapi / Tailwind CSS",
      focus: "UI Development",
      tags: ["HEALTHCARE UI", "NEXT.JS", "TAILWIND CSS", "COMPONENT ARCHITECTURE"],
      link: "https://www.darassihha.net/"
    },
    {
      id: "PRJ_007",
      title: "Vieco Pharma",
      category: "CMS",
      year: "2024",
      image: "/assets/vieco-hero1.png",
      desc: "UAE based pharmaceutical manufacturer website. Crafted responsive layouts and UI elements using HTML and Tailwind CSS for WordPress integration.",
      tech: "HTML / Tailwind CSS",
      focus: "UI Design / Responsiveness",
      tags: ["PHARMA UI", "WORDPRESS", "CSS STYLING", "RESPONSIVE DESIGN"],
      link: "https://www.vieco-pharma.com/"
    },
    {
      id: "PRJ_009",
      title: "Dewton India",
      category: "CMS",
      year: "2024",
      image: "/assets/dewton1.png",
      desc: "Leading manufacturer of LED lights. Implemented dynamic and visually appealing user interfaces using Next.js and Tailwind CSS.",
      tech: "Next.js / Strapi / Tailwind CSS",
      focus: "UI Development",
      tags: ["MANUFACTURING UI", "NEXT.JS", "TAILWIND CSS", "STRAPI CMS"],
      link: "https://dewtonindia.com/"
    },
    {
      id: "PRJ_010",
      title: "Zoople Technologies",
      category: "CMS",
      year: "2023",
      image: "/assets/zoople1.png",
      desc: "IT courses and software training institute. Built fully responsive, pixel-perfect UI screens using HTML and Tailwind CSS.",
      tech: "HTML / Tailwind CSS",
      focus: "UI Development",
      tags: ["EDUCATION UI", "HTML5", "TAILWIND CSS", "RESPONSIVE LAYOUTS"],
      link: "https://zoople.in/"
    },
    {
      id: "PRJ_012",
      title: "Bookaero",
      category: "OTHER",
      year: "2023",
      image: "/assets/bookaero_hero1.png",
      desc: "Flight booking website. Crafted semantic HTML and styled with CSS to build a clean and responsive frontend for a Laravel backend.",
      tech: "HTML / CSS / Laravel",
      focus: "UI Development",
      tags: ["TRAVEL UI", "HTML5", "CSS3", "LARAVEL INTEGRATION"],
      link: "https://www.bookaero.com/"
    },
    {
      id: "PRJ_015",
      title: "Celant Jewellers",
      category: "E-COMMERCE",
      year: "2024",
      image: "/assets/celant1.png",
      desc: "Exclusive luxury jewelry brand website. Designed and developed a minimalist, premium user interface to showcase high-end collections.",
      tech: "HTML / CSS",
      focus: "UI Development",
      tags: ["JEWELRY UI", "LUXURY DESIGN", "UI/UX", "RESPONSIVE"],
      link: "https://celant.in/"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen relative font-sans transition-colors duration-700 bg-background text-foreground pt-32 pb-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="projects-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#projects-grid)" />
          </svg>
        </div>

        <div className="relative z-10 px-6 md:px-24 mx-auto w-full">
          <div className="flex flex-col gap-6 mb-20 md:mb-32 pt-16">
            <div className="technical-label flex items-center gap-4">
              <span className="symbol text-accent">✦</span>
              <span>PROJECT_ARCHIVE_INITIALIZED</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              All <span className="text-accent underline decoration-4 underline-offset-8">Projects.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.1}>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="group relative flex flex-col border border-grid-line bg-background/50 backdrop-blur-sm hover:border-accent transition-all duration-700 h-full">
                    <div className="relative aspect-video w-full overflow-hidden border-b border-grid-line">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-left grayscale group-hover:grayscale-0 contrast-125 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 z-10 flex gap-2">
                        <span className="technical-label !text-white !opacity-100 bg-accent px-2 py-0.5 text-[8px]">
                          {project.category}
                        </span>
                        <span className="technical-label !text-white !opacity-100 bg-foreground/20 backdrop-blur-md px-2 py-0.5 text-[8px]">
                          ACTIVE
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-1 gap-8">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <div className="technical-label opacity-40 text-[10px] text-right whitespace-nowrap">
                          {project.year}
                        </div>
                      </div>

                      <p className="opacity-70 text-sm leading-relaxed font-mono flex-1">
                        {project.desc}
                      </p>

                      <div className="flex flex-col gap-4 border-t border-grid-line pt-6">
                        <div className="flex justify-between items-center">
                          <span className="technical-label text-[8px] opacity-50">TECH STACK</span>
                          <span className="font-mono text-[9px] font-bold uppercase">{project.tech}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="technical-label text-[8px] opacity-50">CORE FOCUS</span>
                          <span className="font-mono text-[9px] font-bold uppercase">{project.focus}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[8px] font-mono border border-foreground/10 px-2 py-1 uppercase opacity-60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Button href="/" variant="outline">
              <span className="symbol rotate-180">→</span>
              <span>RETURN_TO_BASE</span>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

