import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Archive",
  description:
    "Explore the complete commercial portfolio of web applications, e-commerce platforms, and digital experiences developed by Sajin.",
  openGraph: {
    title: "Projects Archive — sajin",
    description:
      "Explore the complete commercial portfolio of web applications, e-commerce platforms, and digital experiences developed by Sajin.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

