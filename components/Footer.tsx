"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";

const emptySubscribe = () => () => {};

export function Footer() {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [loadTime, setLoadTime] = useState("0.12S");

  useEffect(() => {
    const measureTiming = () => {
      if (typeof window !== "undefined" && window.performance) {
        const navEntries = performance.getEntriesByType("navigation");
        if (navEntries.length > 0) {
          const nav = navEntries[0] as PerformanceNavigationTiming;
          const durationSec = Math.max(0.05, (nav.domContentLoadedEventEnd || performance.now()) / 1000).toFixed(2);
          setLoadTime(`${durationSec}S`);
        }
      }
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(measureTiming, 100);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener("load", measureTiming);
      return () => window.removeEventListener("load", measureTiming);
    }
  }, []);

  const timestamp = isClient ? new Date().toISOString().slice(0, 19) + "Z" : "2026-01-01T00:00:00Z";

  return (
    <footer className="px-6 md:px-24 py-16 flex flex-col md:flex-row justify-between items-center border-t border-grid-line gap-12">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <span className="font-black tracking-tighter text-3xl uppercase leading-none">sajin</span>
        <span className="technical-label opacity-40 !text-[8px] tracking-[0.5em]">
          FRONTEND ENGINEER CORE // 2026
        </span>
      </div>

      <div className="flex gap-8 items-center">
        <Link className="technical-label !text-[10px] hover:text-accent transition-colors" href="/projects">
          Projects
        </Link>
        <a
          className="technical-label !text-[10px] hover:text-accent transition-colors"
          href="https://github.com/saju2468"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="technical-label !text-[10px] hover:text-accent transition-colors"
          href="https://linkedin.com/in/sajinpp77"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <div className="flex flex-col gap-1 items-center md:items-end technical-label !text-[8px] opacity-60 font-mono text-center md:text-right">
        <div className="flex gap-4 items-center">
          <span>SYSTEM_STATUS: NOMINAL</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
          <span>PAGE_LOAD: {loadTime}</span>
        </div>
        <div className="mt-1 opacity-40 font-mono">
          TIMESTAMP: {timestamp}<br />
          COORD: 12.9716° N, 77.5946° E
        </div>
      </div>
    </footer>
  );
}
