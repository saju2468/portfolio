import { ENGINEER_DATA } from "@/data/skills";

/**
 * Cyberpunk terminal code block displaying senior engineer stack profile.
 */
export function CodeSnippet() {
  return (
    <div className="flex-1 flex flex-col justify-end">
      <div className="border border-grid-line bg-background/80 p-4 sm:p-6 font-mono text-xs sm:text-sm text-foreground/80 overflow-hidden relative group/code hover:border-accent/50 transition-colors duration-500 shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-50" />
        <div className="flex gap-2 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-grid-line" />
          <div className="w-2.5 h-2.5 rounded-full bg-grid-line" />
          <div className="w-2.5 h-2.5 rounded-full bg-grid-line" />
        </div>
        <div className="flex flex-col gap-2">
          <p>
            <span className="text-accent font-bold">const</span>{" "}
            <span className="text-foreground font-bold">seniorEngineer</span> = {"{"}
          </p>
          <p className="pl-4 sm:pl-8">
            core: <span className="text-accent">[{ENGINEER_DATA.core.map((t) => `"${t}"`).join(", ")}]</span>,
          </p>
          <p className="pl-4 sm:pl-8">
            styling: <span className="text-accent">[{ENGINEER_DATA.styling.map((t) => `"${t}"`).join(", ")}]</span>,
          </p>
          <p className="pl-4 sm:pl-8">
            state: <span className="text-accent">[{ENGINEER_DATA.state.map((t) => `"${t}"`).join(", ")}]</span>,
          </p>
          <p className="pl-4 sm:pl-8">
            focus: <span className="text-foreground/70">&quot;{ENGINEER_DATA.focus}&quot;</span>
          </p>
          <p>{"};"}</p>
        </div>
      </div>
    </div>
  );
}

