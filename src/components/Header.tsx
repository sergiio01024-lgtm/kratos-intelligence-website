import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

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
    ? "bg-[#0a0e27]/90 backdrop-blur-md border-b border-white/5 shadow-2xl" 
    : "bg-transparent border-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-[#667eea] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(102,126,234,0.3)]">
              <span className="text-white font-black text-sm italic tracking-tighter">KI</span>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">Kratos Intelligence</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/60 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:8589979251" className="text-white/90 font-bold hover:text-white transition-colors">(858) 997-9251</a>
            <Button className="bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg hover:shadow-[0_0_15px_rgba(102,126,234,0.4)] transition-all duration-300" size="sm" asChild>
              <a 
                href={finalBookingUrl}
                target={isExternalBooking ? "_blank" : undefined}
                rel={isExternalBooking ? "noopener noreferrer" : undefined}
              >
                Free Audit
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0e27]/98 backdrop-blur-xl border-b border-white/5">
          <nav className="flex flex-col px-6 pt-4 pb-10 space-y-6">
            <a
              href="tel:8589979251"
              className="text-xl font-black text-[#667eea] py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              (858) 997-9251
            </a>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-bold text-white/80 hover:text-white py-2 transition-colors duration-200 border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full h-14 bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg" asChild onClick={() => setIsMenuOpen(false)}>
                <a 
                  href={finalBookingUrl}
                  target={isExternalBooking ? "_blank" : undefined}
                  rel={isExternalBooking ? "noopener noreferrer" : undefined}
                >
                  Free Audit
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>

  );
}