"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function BentoCard({ children, className = "", delay = 0 }: BentoCardProps) {
  return (
    <FadeIn
      delay={delay}
      className={`relative p-5 sm:p-8 border border-card-border bg-card shadow-sm group hover:border-accent transition-[border-color,box-shadow] duration-300 overflow-hidden flex flex-col ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative z-10 h-auto lg:h-full flex flex-col">{children}</div>
    </FadeIn>
  );
}

export interface BentoHeaderProps {
  index: string;
  title: string;
  Icon: LucideIcon;
}

export function BentoHeader({ index, title, Icon }: BentoHeaderProps) {
  return (
    <div className="flex justify-between items-start mb-4 sm:mb-8">
      <div className="flex flex-col gap-1 sm:gap-2">
        <span className="font-mono text-xs font-bold text-muted light:text-neutral-700" aria-hidden="true">
          {index}
        </span>
        <h3 className="technical-label !text-[11px] sm:!text-[12px] font-black group-hover:text-accent transition-colors">
          {title}
        </h3>
      </div>
      <Icon
        className="w-5 h-5 sm:w-6 sm:h-6 text-accent opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12"
        aria-hidden="true"
      />
    </div>
  );
}
