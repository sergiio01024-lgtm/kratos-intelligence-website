import { useState, useEffect } from "react";
import { 
  ArrowUp, 
  ArrowDown, 
  ChevronsUp, 
  ChevronsDown, 
  MessageCircle 
} from "lucide-react";
import { trackEvent } from "../lib/analytics";

export function ScrollControls() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(-1);
  const [sections, setSections] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);

      // Find current section
      const sectionElements = Array.from(
        document.querySelectorAll<HTMLElement>("main section[id], main div[id]")
      ).filter(el => el.id && !["root", "top"].includes(el.id));
      
      setSections(sectionElements);

      const scrollPos = window.scrollY + 120;
      let currentIndex = -1;

      for (let i = 0; i < sectionElements.length; i++) {
        const el = sectionElements[i];
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          currentIndex = i;
          break;
        }
      }
      setCurrentSectionIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getScrollBehavior = () => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
    trackEvent("scroll_to_top_click", { location: "scroll_controls", current_path: window.location.pathname });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: getScrollBehavior() });
    trackEvent("scroll_to_bottom_click", { location: "scroll_controls", current_path: window.location.pathname });
  };

  const scrollToNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      sections[currentSectionIndex + 1].scrollIntoView({ behavior: getScrollBehavior() });
      trackEvent("scroll_next_section_click", { 
        location: "scroll_controls", 
        current_path: window.location.pathname,
        target_section: sections[currentSectionIndex + 1].id
      });
    } else {
      scrollToBottom();
    }
  };

  const scrollToPrevious = () => {
    if (currentSectionIndex > 0) {
      sections[currentSectionIndex - 1].scrollIntoView({ behavior: getScrollBehavior() });
      trackEvent("scroll_previous_section_click", { 
        location: "scroll_controls", 
        current_path: window.location.pathname,
        target_section: sections[currentSectionIndex - 1].id
      });
    } else {
      scrollToTop();
    }
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contact") || document.getElementById("industry-final-cta");
    if (contact) {
      contact.scrollIntoView({ behavior: getScrollBehavior() });
      trackEvent("scroll_to_contact_click", { location: "scroll_controls", current_path: window.location.pathname });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed z-40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      {/* Desktop Controls */}
      <div className="hidden lg:flex fixed right-4 bottom-32 flex-col gap-2 p-2 bg-[#0a0e27]/90 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-3 text-white hover:bg-white/10 rounded-xl transition-colors group"
        >
          <ChevronsUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
        <button
          onClick={scrollToPrevious}
          aria-label="Previous section"
          className="p-3 text-white hover:bg-white/10 rounded-xl transition-colors group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
        <button
          onClick={scrollToNext}
          aria-label="Next section"
          className="p-3 text-white hover:bg-white/10 rounded-xl transition-colors group"
        >
          <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
        </button>
        <button
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          className="p-3 text-white hover:bg-white/10 rounded-xl transition-colors group"
        >
          <ChevronsDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Mobile Controls */}
      <div className="lg:hidden fixed right-4 bottom-24 flex flex-col gap-3">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-12 h-12 flex items-center justify-center bg-[#0a0e27]/90 border border-white/10 backdrop-blur-md rounded-full text-white shadow-2xl"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
        <button
          onClick={scrollToContact}
          aria-label="Scroll to contact"
          className="w-12 h-12 flex items-center justify-center bg-[linear-gradient(135deg,#667eea,#764ba2)] border border-white/20 rounded-full text-white shadow-2xl"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
