/**
 * Scroll Memory Utility
 * Saves and restores scroll position for the homepage.
 */

const SCROLL_Y_KEY = "kratos_home_scroll_y";
const SCROLL_SOURCE_KEY = "kratos_home_scroll_source";

export function saveHomepageScrollPosition(source?: string): void {
  try {
    sessionStorage.setItem(SCROLL_Y_KEY, window.scrollY.toString());
    if (source) {
      sessionStorage.setItem(SCROLL_SOURCE_KEY, source);
    }
  } catch (e) {
    console.warn("sessionStorage not available for scroll memory", e);
  }
}

export function getHomepageScrollPosition(): number | null {
  try {
    const saved = sessionStorage.getItem(SCROLL_Y_KEY);
    return saved ? parseInt(saved, 10) : null;
  } catch (e) {
    return null;
  }
}

export function clearHomepageScrollPosition(): void {
  try {
    sessionStorage.removeItem(SCROLL_Y_KEY);
    sessionStorage.removeItem(SCROLL_SOURCE_KEY);
  } catch (e) {
    // ignore
  }
}

export function restoreHomepageScrollPosition(fallbackHash?: string): void {
  try {
    const scrollY = getHomepageScrollPosition();
    
    if (scrollY !== null) {
      window.scrollTo({
        top: scrollY,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
      clearHomepageScrollPosition();
    } else if (fallbackHash) {
      // Fallback to hash after a small timeout to allow for rendering
      setTimeout(() => {
        const element = document.querySelector(fallbackHash);
        if (element) {
          element.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
          });
        }
      }, 100);
    }
  } catch (e) {
    console.warn("Failed to restore scroll position", e);
  }
}
