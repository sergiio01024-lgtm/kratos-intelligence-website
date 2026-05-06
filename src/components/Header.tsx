import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ];

  const headerBgClass = isScrolled 
    ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" 
    : "bg-transparent border-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">KI</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Kratos Intelligence</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild className="font-semibold">
              <a href="tel:8589979251">(858) 997-9251</a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href="#contact">Free Audit</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
            <a
              href="tel:8589979251"
              className="text-lg font-bold text-primary py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              (858) 997-9251
            </a>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-foreground/90 hover:text-primary py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full" asChild onClick={() => setIsMenuOpen(false)}>
                <a href="#contact">Free Audit</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}