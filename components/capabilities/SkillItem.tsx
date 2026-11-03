import { LucideIcon } from "lucide-react";

export interface SkillItemProps {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

export function SkillItem({ Icon, title, desc }: SkillItemProps) {
  return (
    <div className="flex items-center gap-4 group/item">
      <div className="w-12 h-12 rounded-full border border-grid-line flex items-center justify-center group-hover/item:border-accent group-hover/item:text-accent transition-colors bg-background">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold uppercase tracking-wider group-hover/item:text-accent transition-colors">
          {title}
        </span>
        <span className="text-xs text-foreground/60">{desc}</span>
      </div>
    </div>
  );
}

