"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useCallback, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { handleSmoothScroll } from "@/utils/scroll";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileMenuOpen } from "@/store/slices/uiSlice";
import { MobileMenu } from "./MobileMenu";

const emptySubscribe = () => () => {};

export function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);
  const { isHidden } = useScrollDirection();

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

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const toggleMenu = useCallback(
    (state: boolean) => {
      dispatch(setMobileMenuOpen(state));
    },
    [dispatch],
  );

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        initial="visible"
        animate={isHidden && !isMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full px-6 py-4 md:px-12 md:py-6 z-[1000] flex justify-between items-center md:items-baseline header-glass bg-background/85 backdrop-blur-md border-b border-grid-line text-foreground transition-colors duration-300 shadow-xs"
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
          <Link href="/" aria-label="Sajin Portfolio Home">
            <span className="font-black tracking-tighter text-3xl md:text-5xl uppercase leading-none block text-foreground">
              sajin
            </span>
            <div className="technical-label text-[6px]! tracking-[0.5em] text-muted font-mono uppercase flex items-center gap-2 mt-2 pl-1">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>FRONTEND ENGINEER CORE // 2026</span>
            </div>
          </Link>
        </div>

        <nav
          aria-label="Primary Navigation"
          className="flex items-center gap-4 sm:gap-6 md:gap-10"
        >
          <ul className="hidden lg:flex items-center gap-16 text-[10px] uppercase tracking-[0.4em] font-bold text-muted">
            {NAV_LINKS.map((link) => (
              <li
                key={link.name}
                className="hover:text-foreground hover:opacity-100 cursor-pointer transition-all hover:text-accent"
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <a
              href="/sajin-resume.pdf"
              download="Sajin-Resume.pdf"
              className="group hidden md:flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold border border-card-border bg-card px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all shadow-xs"
              aria-label="Download Resume"
              title="Download Sajin Resume (PDF)"
            >
              <span>RESUME</span>
              <FileDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent group-hover:translate-y-0.5 transition-transform" />
            </a>

            {mounted && (
              <button
                onClick={toggleTheme}
                className="hidden lg:block text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-foreground text-foreground pb-1 cursor-pointer hover:text-accent hover:border-accent transition-all"
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
              >
                {resolvedTheme === "dark" ? "LIGHT" : "DARK"}
              </button>
            )}
            <button
              className="lg:hidden text-[10px] uppercase tracking-[0.4em] font-black flex items-center gap-3.5 group text-foreground"
              onClick={() => toggleMenu(true)}
              aria-label="Open Mobile Menu"
            >
              <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                MENU
              </span>
              <div className="grid grid-cols-2 gap-1 w-4 h-4 translate-y-[0.5px]">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-full border border-foreground transition-all"
                  />
                ))}
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            onClose={() => toggleMenu(false)}
            mounted={mounted}
            resolvedTheme={resolvedTheme}
            toggleTheme={toggleTheme}
          />
        )}
      </AnimatePresence>
    </>
  );
}
