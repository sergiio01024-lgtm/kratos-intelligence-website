import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    const footer = document.getElementById("footer");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && !isFooterVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed z-50 bottom-4 left-4 right-4 lg:bottom-6 lg:right-6 lg:left-auto lg:w-auto"
        >
          <Button 
            size="lg" 
            className="w-full lg:w-auto shadow-[0_10px_30px_rgba(102,126,234,0.4)] rounded-full px-8 py-6 text-base font-black bg-[linear-gradient(135deg,#667eea,#764ba2)] border-none text-white transition-all hover:scale-105 active:scale-95"
            asChild
          >
            <a 
              href={finalBookingUrl}
              target={isExternalBooking ? "_blank" : undefined}
              rel={isExternalBooking ? "noopener noreferrer" : undefined}
            >
              Book Free Audit
            </a>
          </Button>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
