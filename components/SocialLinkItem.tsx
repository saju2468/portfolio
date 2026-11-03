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
        className="group flex flex-col gap-3 p-6 rounded-2xl bg-foreground/5 border border-transparent hover:border-accent/20 hover:bg-accent/5 transition-all duration-500"
      >
        <div className="flex justify-between items-center">
          <div className="opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all">
            {link.icon}
          </div>
          <span
            className="text-[10px] font-mono opacity-20 group-hover:opacity-100"
            aria-hidden="true"
          >
            {link.id}
          </span>
        </div>
        <span className="text-sm font-bold uppercase tracking-widest group-hover:text-accent transition-colors">
          {link.label}
        </span>
      </a>
    </Magnetic>
  </FadeIn>
));

SocialLinkItem.displayName = "SocialLinkItem";

