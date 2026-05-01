import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed z-50 bottom-4 left-4 right-4 lg:bottom-8 lg:right-8 lg:left-auto lg:w-auto"
        >
          <Button 
            size="lg" 
            className="w-full lg:w-auto shadow-2xl rounded-full px-8 py-6 text-base font-bold transition-all hover:scale-105 active:scale-95"
            asChild
          >
            <a href="#contact">
              Book a Free Audit
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
