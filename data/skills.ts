export interface EngineerProfile {
  core: string[];
  styling: string[];
  state: string[];
  focus: string;
}

export interface MetricScore {
  label: string;
  value: number;
}

export const CORE_TOOLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Node.js",
  "Figma",
  "REST APIs",
  "GraphQL",
  "Vercel",
  "Webpack",
];

export const ENGINEER_DATA: EngineerProfile = {
  core: ["Next.js", "React", "TypeScript"],
  styling: ["Tailwind CSS", "Framer Motion"],
  state: ["Zustand", "Redux Toolkit"],
  focus: "Scalable, maintainable, performant.",
};

export const SCORES: MetricScore[] = [
  { label: "PERFORMANCE", value: 98 },
  { label: "A11Y", value: 100 },
  { label: "SEO", value: 100 },
  { label: "BEST PRAC.", value: 100 },
];

export const CAPABILITY_TAGS = ["DEVOPS", "WORKFLOW", "TOOLING"] as const;

