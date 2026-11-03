"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useCallback, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/data/navigation";
import { handleSmoothScroll } from "@/utils/scroll";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileMenuOpen } from "@/store/slices/uiSlice";
import { MobileMenu } from "./MobileMenu";

const emptySubscribe = () => () => {};

export function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
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
    [dispatch]
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
        className="fixed top-0 left-0 w-full p-6 md:p-12 z-[1000] flex justify-between items-baseline mix-blend-difference text-white backdrop-blur-md"
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
          <Link href="/" aria-label="Sajin Portfolio Home">
            <span className="font-black tracking-tighter text-3xl md:text-5xl uppercase leading-none block">
              sajin
            </span>
            <div className="technical-label text-[8px]! tracking-[0.5em] opacity-30 font-mono uppercase flex gap-2 mt-2.5 pl-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d00] mt-[2px]" />
              <span>FRONTEND ENGINEER CORE // 2026</span>
            </div>
          </Link>
        </div>

        <nav aria-label="Primary Navigation" className="flex items-center gap-6 md:gap-10">
          <ul className="hidden lg:flex items-center gap-16 text-[10px] uppercase tracking-[0.4em] font-medium opacity-60">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="hover:opacity-100 cursor-pointer transition-all hover:text-[#ff4d00]">
                <Link
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 md:gap-10">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="hidden lg:block text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-white pb-1 cursor-pointer hover:text-[#ff4d00] hover:border-[#ff4d00] transition-all"
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
              >
                {resolvedTheme === "dark" ? "LIGHT" : "DARK"}
              </button>
            )}
            <button
              className="lg:hidden text-[10px] uppercase tracking-[0.4em] font-black flex items-center gap-4 group"
              onClick={() => toggleMenu(true)}
              aria-label="Open Mobile Menu"
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                MENU
              </span>
              <div className="grid grid-cols-2 gap-1 w-4 h-4 translate-y-[2px]">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-full border border-white transition-all" />
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
