"use client";

import Link from "next/link";
import { FOOTER_LINKS } from "@/data/navigation";
import { SYSTEM_CONFIG } from "@/data/systemConfig";
import { usePerformanceMetrics } from "@/hooks/usePerformanceMetrics";

export function Footer() {
  const { loadTime, timestamp } = usePerformanceMetrics();

  return (
    <footer className="px-6 md:px-24 py-8 md:py-16 flex flex-col md:flex-row justify-between items-center border-t border-grid-line gap-8 md:gap-12">
      <div className="flex flex-col gap-3 md:gap-4 items-center md:items-start">
        <span className="font-black tracking-tighter text-2xl md:text-3xl uppercase leading-none">{SYSTEM_CONFIG.NAME}</span>
        <span className="technical-label !text-muted light:!text-neutral-700 !font-bold !text-[8px] tracking-[0.5em]">
          FRONTEND ENGINEER CORE // {SYSTEM_CONFIG.VERSION_YEAR}
        </span>
      </div>

      <div className="flex gap-6 sm:gap-8 items-center">
        {FOOTER_LINKS.map((link) =>
          link.external ? (
            <a
              key={link.label}
              className="technical-label !text-[10px] !text-muted light:!text-neutral-700 !font-bold hover:text-accent transition-colors"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              className="technical-label !text-[10px] !text-muted light:!text-neutral-700 !font-bold hover:text-accent transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      <div className="flex flex-col gap-1 items-center md:items-end technical-label !text-[9px] !text-muted light:!text-neutral-700 !font-bold font-mono text-center md:text-right">
        <div className="flex gap-4 items-center">
          <span>SYSTEM_STATUS: {SYSTEM_CONFIG.LATENCY_STATUS}</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
          <span>PAGE_LOAD: {loadTime}</span>
        </div>
        <div className="mt-1 text-muted light:text-neutral-700 font-bold font-mono">
          TIMESTAMP: {timestamp}<br />
          COORD: {SYSTEM_CONFIG.LOCATION}
        </div>
      </div>
    </footer>
  );
}
