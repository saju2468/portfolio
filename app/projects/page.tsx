import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function ProjectsPage() {
  const projects = [
    {
      id: "PRJ_001",
      title: "VAIDYARATNAM",
      year: "2024",
      image: "/assets/vaidyaratnam_hero.png",
      desc: "Developed responsive and accessible UI components using Tailwind CSS. Converted design mockups into clean HTML layouts, ensuring cross-browser compatibility and working closely with backend developers for smooth UI integration.",
      tech: "HTML / Tailwind CSS",
      focus: "Responsive UI / Styling",
      tags: ["UI COMPONENTS", "CROSS-BROWSER", "ACCESSIBILITY", "RESPONSIVE"]
    },
    {
      id: "PRJ_002",
      title: "Muthoot Capital",
      year: "2024",
      image: "/muthoot_hero.webp",
      desc: "Developed key frontend modules using Next.js with a component-based architecture. Implemented SSR/SSG for SEO-critical pages, integrated REST APIs for major data flows, and optimized performance using image optimization and lazy loading.",
      tech: "Next.js / React / Tailwind CSS",
      focus: "REST APIs / SSR / SSG",
      tags: ["PERFORMANCE", "IMAGE OPTIMIZATION", "ACCESSIBILITY", "STATE MANAGEMENT"]
    },
    {
      id: "PRJ_003",
      title: "LUXON TATA MOTORS",
      year: "2023",
      image: "/assets/luxon_hero.png",
      desc: "Implemented pixel-perfect UI screens based on design requirements using HTML and Tailwind CSS. Built fully responsive layouts ensuring consistent experience across desktop, tablet, and mobile devices, optimizing CSS structure for maintainability.",
      tech: "HTML / Tailwind CSS",
      focus: "Responsive UI / Integration",
      tags: ["PIXEL-PERFECT", "RESPONSIVE LAYOUTS", "CSS OPTIMIZATION", "PHP INTEGRATION"]
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
              <FadeIn key={project.id} delay={idx * 0.15}>
                <div className="group relative flex flex-col border border-grid-line bg-background/50 backdrop-blur-sm hover:border-accent transition-all duration-700 h-full">
                  <div className="relative aspect-video w-full overflow-hidden border-b border-grid-line">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 contrast-125 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="technical-label !text-white !opacity-100 bg-accent px-2 py-0.5 text-[8px]">
                        DEPLOYMENT_ACTIVE
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
              </FadeIn>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Link href="/">
              <button className="px-8 py-4 border-2 border-foreground/20 text-foreground font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-foreground hover:text-background flex items-center gap-4">
                <span className="symbol rotate-180">→</span>
                <span>RETURN_TO_BASE</span>
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
