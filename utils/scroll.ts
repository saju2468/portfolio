import React from "react";

/**
 * Handles smooth scrolling to an anchor link ID on the page.
 */
export function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
): void {
  if (href.startsWith("#")) {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
}

/**
 * Scrolls smoothly to top of the page.
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

