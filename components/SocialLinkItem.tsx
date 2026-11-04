"use client";

import React, { memo } from "react";
import { FadeIn } from "./FadeIn";
import { Magnetic } from "./Magnetic";

export interface SocialLinkItemData {
  icon: React.ReactNode;
  label: string;
  href: string;
  id: string;
}

export interface SocialLinkItemProps {
  link: SocialLinkItemData;
  index: number;
}

/**
 * Social media link item with physics-based magnetic interaction.
 */
export const SocialLinkItem = memo(({ link, index }: SocialLinkItemProps) => (
  <FadeIn delay={0.4 + index * 0.1}>
    <Magnetic strength={0.2}>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit my ${link.label}`}
        className="group flex flex-col gap-2.5 sm:gap-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-card-border shadow-sm hover:border-accent/40 hover:bg-accent/5 transition-all duration-500"
      >
        <div className="flex justify-between items-center">
          <div className="text-foreground group-hover:text-accent transition-all">
            {link.icon}
          </div>
          <span
            className="text-xs font-mono font-bold text-muted light:text-neutral-700"
            aria-hidden="true"
          >
            {link.id}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-black uppercase tracking-wider sm:tracking-widest text-foreground group-hover:text-accent transition-colors">
          {link.label}
        </span>
      </a>
    </Magnetic>
  </FadeIn>
));

SocialLinkItem.displayName = "SocialLinkItem";
