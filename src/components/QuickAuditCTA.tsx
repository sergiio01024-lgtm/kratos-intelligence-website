import { Button } from "./ui/button";
import { FadeIn } from "./ui/FadeIn";
import { trackEvent } from "../lib/analytics";
import { CheckCircle2 } from "lucide-react";

export function QuickAuditCTA() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  const handleBookClick = () => {
    trackEvent("book_audit_click", {
      location: "quick_audit_cta",
      destination: isExternalBooking ? "booking_url" : "contact_fallback"
    });
  };

  const handleSeePackagesClick = () => {
    trackEvent("see_packages_click", {
      location: "quick_audit_cta"
    });
  };

  return (
    <section id="quick-audit" className="py-12 border-y border-white/5 bg-[#0a0e27]/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#667eea]/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#764ba2]/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <FadeIn>
              <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-4">
                Not sure what automation you need first?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Start with a free 20-minute audit. I’ll look at your website, calls, lead flow, and follow-up process, then tell you the fastest system worth building.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {[
                  "No pressure",
                  "Clear first-build recommendation",
                  "Built for local service businesses"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-white/40 uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4 text-[#43e97b]" />
                    {point}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <FadeIn delay={0.2}>
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-[0_10px_30px_rgba(102,126,234,0.3)] hover:shadow-[0_15px_40px_rgba(102,126,234,0.5)] font-black transition-all group w-full sm:w-auto"
                asChild
                onClick={handleBookClick}
              >
                <a 
                  href={finalBookingUrl}
                  target={isExternalBooking ? "_blank" : undefined}
                  rel={isExternalBooking ? "noopener noreferrer" : undefined}
                >
                  Book Free Audit
                </a>
              </Button>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Button 
                variant="outline" 
                size="lg"
                className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/5 transition-all w-full sm:w-auto"
                asChild
                onClick={handleSeePackagesClick}
              >
                <a href="#packages">See Packages</a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
