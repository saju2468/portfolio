import { CodeXml, Layers, Database, Binary, Cloud, GitBranch } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Capabilities() {
  const capabilities = [
    {
      id: "01",
      title: "FRONTEND",
      icon: <CodeXml className="w-5 h-5 text-accent opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" />,
      items: ["Next.js (App Router)", "React.js", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      id: "02",
      title: "PERFORMANCE & SEO",
      icon: <Layers className="w-5 h-5 text-accent opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" />,
      items: ["Lighthouse Optimization", "SEO-friendly Rendering", "Core Web Vitals", "Lazy Loading"],
    },
    {
      id: "03",
      title: "TOOLS",
      icon: <GitBranch className="w-5 h-5 text-accent opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" />,
      items: ["Git", "GitHub / GitLab", "REST APIs", "Postman"],
    },
    {
      id: "04",
      title: "UI / STYLING",
      icon: <CodeXml className="w-5 h-5 text-accent opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" />,
      items: ["Responsive Design", "Cross-Browser Compatibility", "Figma to Code", "Accessibility"],
    },
  ];

  return (
    <section id="capabilities" className="px-6 md:px-24 py-32 border-t border-grid-line bg-foreground/[0.02] dark:bg-white/[0.02] relative overflow-hidden">
      <div className="flex flex-col gap-20">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-6">
            <div className="technical-label flex items-center gap-4">
              <span className="symbol text-accent">✦</span>
              <span>CORE_CAPABILITIES_v1.0</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Core.<br />
              <span className="text-accent underline decoration-4 underline-offset-8">Skills.</span>
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12">
          {capabilities.map((cap, index) => (
            <FadeIn key={cap.id} delay={0.2 + (index * 0.1)} className="h-full">
              <div className="h-full flex flex-col gap-8 p-8 border border-grid-line bg-background/50 backdrop-blur-sm group hover:border-accent transition-all duration-500">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] opacity-20">{cap.id}</span>
                    <h3 className="technical-label !text-[10px] font-black group-hover:text-accent transition-colors">
                      {cap.title}
                    </h3>
                  </div>
                  {cap.icon}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cap.items.map((item) => (
                    <span key={item} className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-grid-line px-2 py-1 group-hover:border-foreground/20 transition-all duration-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        {/* <div className="mt-12 flex items-center gap-6 opacity-10">
          <div className="h-[1px] flex-1 bg-foreground" />
          <div className="technical-label !text-[8px]">LOG_LEVEL: SYSTEM_READY</div>
          <div className="h-[1px] w-24 bg-foreground" />
        </div> */}
      </div>
    </section>
  );
}
