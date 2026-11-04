export interface NavLink {
  name: string;
  href: string;
  id: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  iconName: "Zap" | "Cpu" | "Globe" | "MessageSquare";
}

export const NAV_LINKS: NavLink[] = [
  { name: "Work", href: "#work", id: "01" },
  { name: "Experience", href: "#capabilities", id: "02" },
  { name: "About", href: "#about", id: "03" },
  { name: "Contact", href: "#contact", id: "04" },
];

export const MOBILE_NAV_LINKS: NavLink[] = [
  ...NAV_LINKS,
  { name: "Projects", href: "/projects", id: "05" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "01",
    label: "GitHub",
    href: "https://github.com/saju2468",
    iconName: "Zap",
  },
  {
    id: "02",
    label: "LinkedIn",
    href: "https://linkedin.com/in/sajinpp77",
    iconName: "Cpu",
  },
];

export const FOOTER_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "GitHub", href: "https://github.com/saju2468", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/sajinpp77", external: true },
];

