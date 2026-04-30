"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
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
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">
            </span>
          </div>
        </div>
        <nav className="flex items-center gap-6 md:gap-10">
          <ul className="hidden lg:flex items-center gap-16 text-[10px] uppercase tracking-[0.4em] font-medium opacity-60">
            <li className="hover:opacity-100 cursor-pointer transition-all hover:text-[#ff4d00]">
              <Link
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Work
              </Link>
            </li>
            <li className="hover:opacity-100 cursor-pointer transition-all hover:text-[#ff4d00]">
              <Link
                href="#capabilities"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#capabilities')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Experience
              </Link>
            </li>
            <li className="hover:opacity-100 cursor-pointer transition-all hover:text-[#ff4d00]">
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </Link>
            </li>
            <li className="hover:opacity-100 cursor-pointer transition-all hover:text-[#ff4d00]">
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </Link>
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
            <button
              className="lg:hidden text-[10px] uppercase tracking-[0.4em] font-black flex items-center gap-4 group"
              onClick={() => setIsMenuOpen(true)}
            >
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[2000] bg-[#f0f0f0] dark:bg-[#0a0a0a] text-black dark:text-white flex flex-col p-6 md:p-12 overflow-hidden"
          >
            {/* Background Gradient/Blur Effect */}
            <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-60 dark:opacity-20">
              <div className="w-[120vw] h-[120vw] bg-black dark:bg-white blur-[120px] rounded-full mix-blend-overlay dark:mix-blend-normal opacity-50 dark:opacity-20" />
            </div>

            {/* Header part of the mobile menu */}
            <div className="flex justify-between items-start relative z-10">
              <div className="flex flex-col">
                <span className="font-black tracking-tighter text-4xl uppercase leading-none block">
                  sajin
                </span>
                <div className="technical-label text-[8px] tracking-[0.3em] opacity-60 font-mono uppercase flex items-center gap-2 mt-12">
                  <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                  <span>SYSTEM_ACCESS_GRANTED</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-12">
                <div className="flex items-center gap-6">
                  <button
                    className="text-[10px] uppercase tracking-[0.4em] font-black flex items-center gap-4 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                      CLOSE
                    </span>
                    <div className="grid grid-cols-2 gap-1 w-4 h-4 translate-y-[2px]">
                      <div className="w-full h-full bg-[#00a8ff] transition-all" />
                      <div className="w-full h-full border border-black dark:border-white transition-all" />
                      <div className="w-full h-full bg-[#00a8ff] transition-all" />
                      <div className="w-full h-full border border-black dark:border-white transition-all" />
                    </div>
                  </button>
                </div>

                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="text-[10px] uppercase tracking-[0.3em] font-black border-b-2 border-[#ff4d00] text-[#ff4d00] pb-1 cursor-pointer transition-all"
                  >
                    {resolvedTheme === "dark" ? "LIGHT" : "DARK"}
                  </button>
                )}
              </div>
            </div>

            <div className="w-full h-[1px] bg-black/20 dark:bg-white/20 mt-6 mb-8 md:mb-12 relative z-10" />

            {/* Menu Links */}
            <nav className="flex-1 flex flex-col justify-center relative z-10 gap-8 md:gap-10">
              {[
                { name: "WORK", href: "#work", id: "01" },
                { name: "EXPERIENCE", href: "#capabilities", id: "02" },
                { name: "ABOUT", href: "#about", id: "03" },
                { name: "ARCHIVE", href: "/archive", id: "04" },
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        setTimeout(() => {
                          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                        }, 600);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                    className="flex items-baseline gap-6 group w-fit"
                  >
                    <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100 transition-opacity">
                      {link.id}
                    </span>
                    <span className="font-black text-5xl md:text-7xl tracking-tighter uppercase group-hover:text-[#ff4d00] transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer of the mobile menu */}
            <div className="flex justify-between items-end relative z-10 mt-auto pt-6 text-[8px] md:text-[10px] font-mono opacity-50 uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <span className="text-[#ff4d00] text-lg leading-none translate-y-[-1px]">+</span>
                <span>USER_ID: // 0XSAJ_IDENTITY</span>
              </div>
              <span>STATUS: ENCRYPTED_NOMINAL</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
