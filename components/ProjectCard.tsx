import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { Project } from "@/data/projects";

export interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * Reusable project showcase card with hover preview and metadata pills.
 */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.08}>
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
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
                {project.status || "ACTIVE"}
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
              {project.description}
            </p>

            <div className="flex flex-col gap-4 border-t border-grid-line pt-6">
              <div className="flex justify-between items-center">
                <span className="technical-label text-[8px] opacity-50">TECH STACK</span>
                <span className="font-mono text-[9px] font-bold uppercase">
                  {project.technologies}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="technical-label text-[8px] opacity-50">CORE FOCUS</span>
                <span className="font-mono text-[9px] font-bold uppercase">
                  {project.coreFocus}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[8px] font-mono border border-foreground/10 px-2 py-1 uppercase opacity-60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

