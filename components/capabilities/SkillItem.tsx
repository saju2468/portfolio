import { LucideIcon } from "lucide-react";

export interface SkillItemProps {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

export function SkillItem({ Icon, title, desc }: SkillItemProps) {
  return (
    <div className="flex items-center gap-4 group/item">
      <div className="w-12 h-12 rounded-full border border-card-border bg-card shadow-xs flex items-center justify-center group-hover/item:border-accent group-hover/item:text-accent transition-colors text-foreground">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold uppercase tracking-wider text-foreground group-hover/item:text-accent transition-colors">
          {title}
        </span>
        <span className="text-xs text-muted light:text-neutral-700 font-medium">{desc}</span>
      </div>
    </div>
  );
}

