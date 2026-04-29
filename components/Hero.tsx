import Image from "next/image";
import { FadeIn } from "./FadeIn";

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <span key={index} className="magnify-letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
};

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-48 md:pt-48 pb-32 relative overflow-hidden">
      <div
        className="absolute z-10 hidden lg:flex flex-col gap-4"
        style={{ right: "10%", top: "50%", width: "350px", height: "450px", transform: "translateY(-50%)" }}
      >
        <div className="relative w-full h-full border border-grid-line p-2 bg-background/50 backdrop-blur-md group hover:border-accent transition-all duration-700">
          <div className="absolute top-0 right-0 p-4 mix-blend-difference z-10 opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="technical-label !text-[8px] text-white tracking-[0.4em]">LIVE_FEED_01</span>
          </div>
          <div className="w-full h-full overflow-hidden relative">
            {/* The actual image path needs to be updated with real assets */}
            <Image src="/sajin.jpg" alt="image" fill className="object-cover" />
            <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          </div>
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-accent" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-accent" />
        </div>
        <div className="flex justify-between items-center opacity-30 text-[8px] font-mono tracking-widest px-1">
          <span>REF_ID: // 772-019-91</span>
          <span>SCAN_COMPLETE_99.8%</span>
        </div>
      </div>

      <div className="relative z-20 max-w-[90rem] w-full">
        <FadeIn delay={0.1}>
          <div className="technical-label mb-10 flex items-center gap-6">
            <span className="symbol text-2xl">✦</span>
            <span className="text-xs">SYSTEM_INITIALIZED_00.2</span>
            <span className="handwriting text-xl ml-8 rotate-[-2deg] hidden md:inline-block">
              // Portrait mode active
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-[14vw] md:text-[9vw] max-w-[80rem] font-[900] tracking-tighter leading-[0.82] mb-12 uppercase typing-cursor magnify-target origin-left">
            <AnimatedText text="CRAFTING" /><br />
            <AnimatedText text="MODERN" /><br />
            <span className="text-accent relative">
              <AnimatedText text="WEBSITES" />
              <span className="inline-block w-4 md:w-8 h-2 md:h-4 bg-accent ml-2 translate-y-[-20%]" />
            </span>
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start md:mt-12">
          <div className="md:col-span-12 lg:col-span-7 flex flex-col gap-10">
            <FadeIn delay={0.3}>
              <div className="lg:hidden w-full max-w-[400px] aspect-[4/5] border border-grid-line p-2 mb-8 relative group">
                <div className="w-full h-full overflow-hidden relative">
                  {/* Mobile portrait placeholder */}
                  <Image src="/sajin.jpg" alt="image" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gray-500/20" />
                  <div className="absolute top-0 right-0 p-4 mix-blend-difference z-10 opacity-60">
                    <span className="technical-label !text-[8px] text-white tracking-[0.4em]">LIVE_FEED_01</span>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-accent" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-accent" />
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-2xl md:text-5xl leading-[1.1] font-medium tracking-tight max-w-[50rem]">
                I build scalable, responsive, and SEO-friendly web applications.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <p className="opacity-40 text-lg md:text-xl max-w-xl leading-relaxed font-light">
                  Strong experience in API integration, performance optimization, and translating UI/UX designs into high-quality production code.
                </p>
                <div className="technical-label text-[9px] border-l border-accent pl-4 flex flex-col gap-2">
                  <span>LOC: 12.9716° N, 77.5946° E</span>
                  <span>TIME: 00:00:00 AM</span>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-12 lg:pl-12">
            <FadeIn delay={0.6}>
              <div className="space-y-4">
                <span className="technical-label opacity-40">SYSTEM STATUS</span>
                <div className="flex items-center gap-4 border-l-2 border-accent pl-4">
                  <span className="text-xs font-mono uppercase font-bold">NOMINAL_OPERATIONS_STABLE</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.7}>
              <div className="space-y-4">
                <span className="technical-label opacity-40">ACTIVE MODULES</span>
                <div className="flex flex-wrap gap-2">
                  {["NEXT.JS", "REACT", "TAILWIND", "TYPESCRIPT"].map((module) => (
                    <span key={module} className="text-[10px] font-mono border border-foreground/20 px-3 py-1 uppercase font-bold hover:bg-accent hover:text-background transition-colors cursor-pointer">
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.8}>
              <div className="space-y-4">
                <span className="technical-label opacity-40">CURRENT STACK</span>
                <p className="text-[10px] font-mono font-bold leading-relaxed tracking-widest uppercase text-accent">
                  NEXT.JS / REACT / TAILWIND / TS
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
