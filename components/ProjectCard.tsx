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
 * Optimized for 2-column mobile layout and 3-column desktop layout.
 */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.08} className="h-full">
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`View project details for ${project.title}`}
        
      >
        <div className="group relative flex flex-col border border-card-border bg-card shadow-sm hover:border-accent transition-[border-color,box-shadow] duration-300 h-full rounded-lg sm:rounded-none overflow-hidden">
          {/* Project Preview Image */}
          <div className="relative aspect-video w-full overflow-hidden border-b border-card-border">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-left grayscale-0 md:grayscale md:group-hover:grayscale-0 opacity-100 md:group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute bottom-1.5 left-1.5 sm:bottom-4 sm:left-4 z-10 flex flex-wrap gap-1 sm:gap-2">
              <span className="technical-label !text-white !opacity-100 bg-accent px-1.5 sm:px-2 py-0.5 text-[7px] sm:text-[8px] font-bold shadow-sm">
                {project.category}
              </span>
              <span className="technical-label !text-white !opacity-100 bg-black/70 backdrop-blur-md px-1.5 sm:px-2 py-0.5 text-[7px] sm:text-[8px] font-bold shadow-sm hidden xs:inline-block">
                {project.status || "ACTIVE"}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-3 sm:p-6 md:p-8 flex flex-col flex-1 justify-between gap-2.5 sm:gap-6 md:gap-8">
            <div className="flex flex-col gap-1.5 sm:gap-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <h3 className="text-xs sm:text-xl md:text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-accent transition-colors line-clamp-1 sm:line-clamp-none">
                  {project.title}
                </h3>
                <div className="technical-label !text-muted light:!text-neutral-700 !font-bold text-[8px] sm:text-[10px] whitespace-nowrap">
                  {project.year}
                </div>
              </div>

              <p className="text-muted light:text-neutral-700 text-[10px] sm:text-sm leading-snug sm:leading-relaxed font-mono font-medium line-clamp-2 sm:line-clamp-none">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Metadata */}
            <div className="flex flex-col gap-2 sm:gap-4 border-t border-card-border pt-2 sm:pt-6 mt-auto">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-2">
                <span className="technical-label text-[7px] sm:text-[8px] !text-muted light:!text-neutral-700 !font-bold">
                  TECH STACK
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] font-bold uppercase truncate text-foreground">
                  {project.technologies}
                </span>
              </div>

              <div className="hidden sm:flex justify-between items-center">
                <span className="technical-label text-[8px] !text-muted light:!text-neutral-700 !font-bold">
                  CORE FOCUS
                </span>
                <span className="font-mono text-[9px] font-bold uppercase truncate text-foreground">
                  {project.coreFocus}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 sm:gap-2 pt-0.5 sm:pt-2">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[7px] sm:text-[8px] font-mono border border-card-border bg-card text-foreground font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 uppercase shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="text-[7px] sm:text-[8px] font-mono border border-card-border bg-card text-muted light:text-neutral-700 font-bold px-1.5 py-0.5 uppercase sm:hidden">
                    +{project.tags.length - 2}
                  </span>
                )}
                {project.tags.slice(2).map((tag) => (
                  <span
                    key={tag}
                    className="hidden sm:inline-block text-[8px] font-mono border border-card-border bg-card text-foreground font-bold px-2 py-1 uppercase shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
