"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectCategories } from "@/data/projects";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setSelectedCategory,
  setSearchQuery,
  resetFilters,
  selectFilteredProjects,
} from "@/store/slices/projectSlice";

export default function ProjectsPage() {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectFilteredProjects);
  const selectedCategory = useAppSelector(
    (state) => state.projects.selectedCategory
  );
  const searchQuery = useAppSelector((state) => state.projects.searchQuery);
  const categories = getProjectCategories();

  return (
    <>
      <Header />
      <main className="min-h-screen relative font-sans transition-colors duration-700 bg-background text-foreground pt-24 md:pt-32 pb-16 md:pb-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="projects-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#projects-grid)" />
          </svg>
        </div>

        <div className="relative z-10 px-6 md:px-24 mx-auto w-full">
          <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-24 pt-4 md:pt-16">
            <div className="technical-label flex items-center gap-4">
              <span className="symbol text-accent">✦</span>
              <span>PROJECT_ARCHIVE_INITIALIZED</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              All{" "}
              <span className="text-accent underline decoration-4 underline-offset-8">
                Projects.
              </span>
            </h1>
          </div>

          {/* Redux-powered Filter & Search Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 mb-8 md:mb-12 pb-6 md:pb-8 border-b border-grid-line">
            <div className="flex flex-wrap gap-2 items-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => dispatch(setSelectedCategory(cat))}
                  className={`text-[10px] font-mono px-3 sm:px-4 py-1.5 sm:py-2 uppercase font-bold tracking-widest border transition-all duration-300 ${
                    selectedCategory === cat
                      ? "border-accent bg-accent text-white shadow-sm"
                      : "border-card-border bg-card text-foreground font-bold hover:border-accent shadow-xs"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                  placeholder="SEARCH_PROJECTS_..."
                  className="w-full bg-card border border-card-border px-4 py-2 text-xs font-mono font-bold text-foreground placeholder:text-muted placeholder:opacity-70 focus:border-accent outline-none uppercase tracking-wider shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => dispatch(setSearchQuery(""))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono opacity-50 hover:opacity-100"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
              <span className="technical-label !text-[9px] !text-muted light:!text-neutral-700 !font-bold whitespace-nowrap hidden sm:inline-block">
                {projects.length} NODES
              </span>
            </div>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {projects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 md:py-24 border border-dashed border-grid-line p-8 md:p-12 bg-background/30">
              <p className="font-mono text-sm opacity-60 uppercase tracking-widest mb-4">
                NO_MATCHING_NODES_FOUND // QUERY: &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => dispatch(resetFilters())}
                className="text-xs font-mono text-accent hover:underline uppercase tracking-widest"
              >
                [ RESET_ALL_FILTERS ]
              </button>
            </div>
          )}

          <div className="mt-12 md:mt-20 flex justify-center">
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
