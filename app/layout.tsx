import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Architects_Daughter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  variable: "--font-architects-daughter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sajin — Frontend Engineer (React, Next.js)",
  description:
    "Portfolio of sajin. Frontend Engineer with 3 years of experience building scalable, responsive, and SEO-friendly web applications.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

import { SmoothScroll } from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${architectsDaughter.variable}`}
    >
      <body className="antialiased selection:bg-[#ff4d00] selection:text-white">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SmoothScroll>
            <div className="crt-overlay pointer-events-none" />
            <div className="bg-pattern pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern
                    id="a"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="2"
                      cy="2"
                      r="1"
                      fill="currentColor"
                      className="text-gray-300 dark:text-gray-800"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#a)" />
              </svg>
            </div>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
