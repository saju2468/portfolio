"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook providing a real-time 12-hour formatted clock string with automatic cleanup.
 */
export function useRealTime(locale: string = "en-US"): string {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString(locale, {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [locale]);

  return time;
}

