"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export interface PerformanceMetrics {
  loadTime: string;
  timestamp: string;
  isClient: boolean;
}

/**
 * Custom hook that safely measures DOMContentLoaded and Navigation performance timing
 * while preventing SSR hydration mismatches.
 */
export function usePerformanceMetrics(
  fallbackTimestamp: string = "2026-01-01T00:00:00Z"
): PerformanceMetrics {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [loadTime, setLoadTime] = useState("0.12S");

  useEffect(() => {
    const measureTiming = () => {
      if (typeof window !== "undefined" && window.performance) {
        const navEntries = performance.getEntriesByType("navigation");
        if (navEntries.length > 0) {
          const nav = navEntries[0] as PerformanceNavigationTiming;
          const durationSec = Math.max(
            0.05,
            (nav.domContentLoadedEventEnd || performance.now()) / 1000
          ).toFixed(2);
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

  const timestamp = isClient
    ? new Date().toISOString().slice(0, 19) + "Z"
    : fallbackTimestamp;

  return { loadTime, timestamp, isClient };
}

