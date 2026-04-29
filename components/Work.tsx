import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./FadeIn";

export function Work() {
  return (
    <section id="work" className="px-6 md:px-24 py-32 md:py-36 border-t border-grid-line relative z-10 mt-12 md:mt-0">
      <div className="flex flex-col gap-20 md:gap-32">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-6">
            <div className="technical-label flex items-center gap-4">
              <span className="symbol">✦</span>
              <span>SYSTEM_MANIFEST_v0.1</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Featured.<br />
              <span className="text-accent underline decoration-4 underline-offset-8">Projects.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative aspect-video lg:h-[60vh] lg:aspect-auto border border-grid-line overflow-hidden bg-background/50 backdrop-blur-sm group-hover:border-accent transition-all duration-700">
              <Image
                src="/assets/vaidyaratnam_hero.png"
                alt="Vaidyaratnam Platform"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                className="object-cover grayscale group-hover:grayscale-0 contrast-125 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10 z-10 w-full flex justify-between items-end">
                <span className="text-white font-mono text-lg md:text-xl opacity-40"></span>
                <div className="flex flex-col gap-2 md:gap-3 items-end text-right max-w-[90%]">
                  <span className="technical-label !text-white !opacity-100 bg-accent px-2 py-0.5 md:px-3 md:py-1 self-end text-[8px] md:text-[10px]">
                    DEPLOYMENT_ACTIVE
                  </span>
                  <h3 className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-none text-right">
                    VAIDYARATNAM
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 technical-label opacity-50 line-grid-mobile-fix">
                  <span>ID: PRJ_001</span>
                  <div className="w-1 h-1 rounded-full bg-accent" />
                  <span>2024</span>
                </div>
                <p className="opacity-90 text-sm leading-relaxed max-w-lg font-mono">
                  Developed responsive and accessible UI components using Tailwind CSS. Converted design mockups into clean HTML layouts, ensuring cross-browser compatibility and working closely with backend developers for smooth UI integration.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-grid-line">
                <div>
                  <span className="technical-label text-[9px] opacity-50 block mb-3">Technologies</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest leading-relaxed">HTML / Tailwind CSS</span>
                </div>
                <div>
                  <span className="technical-label text-[9px] opacity-40 block mb-3">Core Focus</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest leading-relaxed">Responsive UI / Styling</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {["UI COMPONENTS", "CROSS-BROWSER", "ACCESSIBILITY", "RESPONSIVE"].map((tag) => (
                  <span key={tag} className="text-[9px] font-mono border border-foreground/10 px-3 py-1 uppercase opacity-60 hover:opacity-100 hover:border-accent transition-all flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="https://vaidyaratnamstore.com" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-6 group/btn mt-4">
                  <span className="font-black text-xs uppercase tracking-[0.4em] border-b-2 border-accent pb-2">
                    Investigate_Operation
                  </span>
                  <span className="symbol text-accent group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 lg:order-2 relative aspect-video lg:h-[60vh] lg:aspect-auto border border-grid-line overflow-hidden bg-background/50 backdrop-blur-sm group-hover:border-accent transition-all duration-700">
              <Image
                src="/muthoot_hero.webp"
                alt="Muthoot Capital Platform"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                className="object-cover grayscale group-hover:grayscale-0 contrast-125 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 lg:left-auto lg:right-0 p-6 md:p-10 z-10 w-full flex justify-between items-end text-left lg:text-right">
                <span className="text-white font-mono text-lg md:text-xl opacity-40"></span>
                <div className="flex flex-col gap-2 md:gap-3 items-end max-w-[90%]">
                  <span className="technical-label !text-white !opacity-100 bg-[#ff4d00] px-2 py-0.5 md:px-3 md:py-1 self-end text-[8px] md:text-[10px]">
                    DOCKER_GRID_ACTIVE
                  </span>
                  <h3 className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-none text-right">
                    Muthoot_Capital
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-1 flex flex-col gap-8 md:gap-10 text-left">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 technical-label opacity-40 line-grid-mobile-fix">
                  <span>ID: PRJ_002</span>
                  <div className="w-1 h-1 rounded-full bg-accent" />
                  <span>2024</span>
                </div>
                <p className="opacity-90 text-sm leading-relaxed max-w-lg font-mono">
                  Developed key frontend modules using Next.js with a component-based architecture. Implemented SSR/SSG for SEO-critical pages, integrated REST APIs for major data flows, and optimized performance using image optimization and lazy loading.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-grid-line">
                <div>
                  <span className="technical-label text-[9px] opacity-40 block mb-3">Technologies</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest leading-relaxed">Next.js / React / Tailwind CSS</span>
                </div>
                <div>
                  <span className="technical-label text-[9px] opacity-40 block mb-3">Integration</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest leading-relaxed">REST APIs / SSR / SSG</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {["PERFORMANCE", "IMAGE OPTIMIZATION", "ACCESSIBILITY", "STATE MANAGEMENT"].map((tag) => (
                  <span key={tag} className="text-[9px] font-mono border border-foreground/10 px-3 py-1 uppercase opacity-60 hover:opacity-100 hover:border-accent transition-all flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="https://www.muthootcap.com/" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-6 group/btn mt-4 lg:flex-row-reverse lg:justify-end">
                  <span className="font-black text-xs uppercase tracking-[0.4em] border-b-2 border-accent pb-2">
                    Investigate_Operation
                  </span>
                  <span className="symbol text-accent group-hover/btn:translate-x-2 lg:group-hover/btn:-translate-x-2 transition-transform duration-300 lg:rotate-180">→</span>
                </button>
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative aspect-video lg:h-[60vh] lg:aspect-auto border border-grid-line overflow-hidden bg-background/50 backdrop-blur-sm group-hover:border-accent transition-all duration-700">
              <Image
                src="/assets/luxon_hero.png"
                alt="Luxon Tata Motors"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                className="object-cover grayscale group-hover:grayscale-0 contrast-125 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10 z-10 w-full flex justify-between items-end">
                <span className="text-white font-mono text-lg md:text-xl opacity-40"></span>
                <div className="flex flex-col gap-2 md:gap-3 items-end text-right max-w-[90%]">
                  <span className="technical-label !text-white !opacity-100 bg-accent px-2 py-0.5 md:px-3 md:py-1 self-end text-[8px] md:text-[10px]">
                    DEPLOYMENT_ACTIVE
                  </span>
                  <h3 className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-none text-right">
                    LUXON_TATA_MOTORS
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 technical-label opacity-50 line-grid-mobile-fix">
                  <span>ID: PRJ_003</span>
                  <div className="w-1 h-1 rounded-full bg-accent" />
                  <span>2023</span>
                </div>
                <p className="opacity-90 text-sm leading-relaxed max-w-lg font-mono">
                  Implemented pixel-perfect UI screens based on design requirements using HTML and Tailwind CSS. Built fully responsive layouts ensuring consistent experience across desktop, tablet, and mobile devices, optimizing CSS structure for maintainability.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-grid-line">
                <div>
                  <span className="technical-label text-[9px] opacity-50 block mb-3">Technologies</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest leading-relaxed">HTML / Tailwind CSS</span>
                </div>
                <div>
                  <span className="technical-label text-[9px] opacity-40 block mb-3">Core Focus</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest leading-relaxed">Responsive UI / Integration</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {["PIXEL-PERFECT", "RESPONSIVE LAYOUTS", "CSS OPTIMIZATION", "PHP INTEGRATION"].map((tag) => (
                  <span key={tag} className="text-[9px] font-mono border border-foreground/10 px-3 py-1 uppercase opacity-60 hover:opacity-100 hover:border-accent transition-all flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="https://luxontata.com/" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-6 group/btn mt-4">
                  <span className="font-black text-xs uppercase tracking-[0.4em] border-b-2 border-accent pb-2">
                    Investigate_Operation
                  </span>
                  <span className="symbol text-accent group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </Link>
            </div>
          </div>
        </FadeIn>

        <div className="mt-20 md:mt-5 flex justify-center w-full relative z-20">
          <Link href="/projects">
            <button className="px-8 md:px-12 py-5 md:py-6 border-2 border-accent text-accent font-black text-xs md:text-lg uppercase tracking-[0.3em] transition-all hover:bg-accent hover:text-white flex items-center gap-4 group shadow-[6px_6px_0px_0px_rgba(255,77,0,0.1)] hover:shadow-none">
              <span>VIEW_ALL_PROJECTS</span>
              <span className="symbol text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
