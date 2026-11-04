"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { MOBILE_NAV_LINKS } from "@/data/navigation";

export interface MobileMenuProps {
  onClose: () => void;
  mounted: boolean;
  resolvedTheme?: string;
  toggleTheme: () => void;
}

/**
 * Fullscreen cyber-styled mobile navigation overlay.
 */
export function MobileMenu({
  onClose,
  mounted,
  resolvedTheme,
  toggleTheme,
}: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[2000] bg-background text-foreground flex flex-col p-6 md:p-12 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Background Gradient/Blur Effect */}
      <div
        className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10 light:opacity-30"
        aria-hidden="true"
      >
        <div className="w-[120vw] h-[120vw] bg-foreground/20 blur-[120px] rounded-full" />
      </div>

      {/* Header part of the mobile menu */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex flex-col">
          <span className="font-black tracking-tighter text-4xl uppercase leading-none block">
            sajin
          </span>
          <div className="technical-label text-[8px] tracking-[0.3em] opacity-60 font-mono uppercase flex items-center gap-2 mt-12">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span>SYSTEM_ACCESS_GRANTED</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-12">
          <button
            className="text-[10px] uppercase tracking-[0.4em] font-black flex items-center gap-4 group"
            onClick={onClose}
            aria-label="Close Menu"
          >
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">
              CLOSE
            </span>
            <div className="grid grid-cols-2 gap-1 w-4 h-4 translate-y-0.5">
              <div className="w-full h-full bg-[#00a8ff] transition-all" />
              <div className="w-full h-full border border-foreground transition-all" />
              <div className="w-full h-full bg-[#00a8ff] transition-all" />
              <div className="w-full h-full border border-foreground transition-all" />
            </div>
          </button>

          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-[10px] uppercase tracking-[0.3em] font-black border-b-2 border-[#ff4d00] text-[#ff4d00] pb-1 cursor-pointer transition-all"
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            >
              {resolvedTheme === "dark" ? "LIGHT" : "DARK"}
            </button>
          )}
        </div>
      </div>

      <div className="w-full h-px bg-foreground/20 mt-6 mb-8 md:mb-12 relative z-10" />

      {/* Menu Links */}
      <nav className="flex-1 flex flex-col justify-center relative z-10 gap-6 sm:gap-8 md:gap-10">
        {MOBILE_NAV_LINKS.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            <Link
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  onClose();
                  // Wait for the exit animation to complete before scrolling
                  setTimeout(() => {
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 600);
                } else {
                  onClose();
                }
              }}
              className="flex items-baseline gap-5 group w-fit"
            >
              <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100 transition-opacity">
                {link.id}
              </span>
              <span className="font-black text-5xl sm:text-5xl md:text-7xl tracking-tighter uppercase group-hover:text-[#ff4d00] transition-colors">
                {link.name}
              </span>
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3 + MOBILE_NAV_LINKS.length * 0.1,
            duration: 0.5,
          }}
          className="pt-2 sm:pt-4"
        >
          <a
            href="/sajin-resume.pdf"
            download="Sajin_Resume.pdf"
            onClick={onClose}
            className="flex items-center gap-3 text-accent border border-accent/40 bg-accent/10 px-4 py-2.5 rounded-lg w-fit text-xs font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all group shadow-xs"
            aria-label="Download Resume"
          >
            <span>DOWNLOAD RESUME</span>
            <FileDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </nav>

      {/* Footer of the mobile menu */}
      <div className="flex justify-between items-end relative z-10 mt-auto pt-6 text-[8px] md:text-[10px] font-mono opacity-50 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <span className="text-[#ff4d00] text-lg leading-none translate-y-[-1px]">
            +
          </span>
          <span>USER_ID: // 0XSAJ_IDENTITY</span>
        </div>
        <span>STATUS: ENCRYPTED_NOMINAL</span>
      </div>
    </motion.div>
  );
}
