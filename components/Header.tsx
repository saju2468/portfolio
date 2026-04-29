"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 w-full p-6 md:p-12 z-[1000] flex justify-between items-baseline mix-blend-difference text-white backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
        <Link href="/">
          <span className="font-black tracking-tighter text-3xl md:text-5xl uppercase leading-none block">
            sajin
          </span>
          <div className="technical-label text-[8px]! tracking-[0.5em] opacity-30 font-mono uppercase flex gap-2 mt-2.5 pl-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d00] mt-[2px]" />
            <span>FRONTEND ENGINEER CORE // 2026</span>
          </div>
        </Link>
        <div className="hidden sm:flex items-center gap-3">
          {/* <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" /> */}
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">

          </span>
        </div>
      </div>
      <nav className="flex items-center gap-6 md:gap-10">
        <ul className="hidden lg:flex items-center gap-16 text-[10px] uppercase tracking-[0.4em] font-medium opacity-60">
          <li className="hover:opacity-100 cursor-pointer transition-all hover:text-[#ff4d00]">
            <Link href="#work">Work</Link>
          </li>
          <li className="hover:opacity-100 cursor-pointer transition-all hover:text-[#ff4d00]">
            <Link href="#capabilities">Experience</Link>
          </li>
          <li className="hover:opacity-100 cursor-pointer transition-all hover:text-[#ff4d00]">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:opacity-100 cursor-pointer transition-all hover:text-[#ff4d00]">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-6 md:gap-10">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="hidden lg:block text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-white pb-1 cursor-pointer hover:text-[#ff4d00] hover:border-[#ff4d00] transition-all"
            >
              {resolvedTheme === "dark" ? "LIGHT" : "DARK"}
            </button>
          )}
          <button className="lg:hidden text-[10px] uppercase tracking-[0.4em] font-black flex items-center gap-4 group">
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">
              MENU
            </span>
            <div className="grid grid-cols-2 gap-1 w-4 h-4 translate-y-[2px]">
              <div className="w-full h-full border border-white transition-all" />
              <div className="w-full h-full border border-white transition-all" />
              <div className="w-full h-full border border-white transition-all" />
              <div className="w-full h-full border border-white transition-all" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
