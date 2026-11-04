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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sajin.dev"),
  title: {
    default: "sajin — Frontend Engineer (React, Next.js)",
    template: "%s | sajin",
  },
  description:
    "Portfolio of sajin. Frontend Engineer with 3+ years of experience building scalable, responsive, and SEO-friendly web applications with Next.js, React, and Tailwind CSS.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "TypeScript",
    "Web Developer",
    "Sajin Portfolio",
  ],
  authors: [{ name: "sajin", url: "https://github.com/saju2468" }],
  creator: "sajin",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "sajin — Frontend Engineer (React, Next.js)",
    description:
      "Frontend Engineer with 3+ years of experience building scalable, responsive, and SEO-friendly web applications.",
    siteName: "sajin Portfolio",
    images: [
      {
        url: "/sajin.jpg",
        width: 800,
        height: 1000,
        alt: "Sajin - Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "sajin — Frontend Engineer (React, Next.js)",
    description:
      "Frontend Engineer specializing in Next.js, React, and modern UI engineering.",
    images: ["/sajin.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { StoreProvider } from "@/store/StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${architectsDaughter.variable}`}
    >
      <body suppressHydrationWarning className="antialiased selection:bg-[#ff4d00] selection:text-white">
        <StoreProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <SmoothScroll>
              <CustomCursor />
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
                        className="text-gray-800 light:text-neutral-400"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#a)" />
                </svg>
              </div>
              {children}
            </SmoothScroll>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
