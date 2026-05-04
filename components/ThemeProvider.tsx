"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

// Suppress the "Encountered a script tag" warning in development
// This is a known issue with next-themes and React 19/Next.js 15+
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const orig = console.error;
  console.error = (...args: unknown[]) => {
    const msg = typeof args[0] === "string" ? args[0] : "";
    if (
      msg.includes("Encountered a script tag") ||
      msg.includes("hydration-mismatch") ||
      msg.includes("A tree hydrated but some attributes") ||
      msg.includes("cz-shortcut-listen")
    ) {
      return;
    }
    orig.apply(console, args);
  };
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
