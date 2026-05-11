import { Button } from "./ui/button";
import { FadeIn } from "./ui/FadeIn";
import { trackEvent } from "../lib/analytics";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-7xl font-bold text-white tracking-tight leading-none">
              Ready to Turn Leads <br/>Into Booked Revenue?
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto font-light">
              Stop losing jobs to slow response times. Let's build your first AI system and connect it to your business this week.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="h-16 px-12 text-xl bg-white text-black hover:bg-white/90 rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
              asChild
              onClick={() => trackEvent("book_audit_click", { location: "final_cta", destination: isExternalBooking ? "booking_url" : "contact_fallback" })}
            >
              <a 
                href={finalBookingUrl}
                target={isExternalBooking ? "_blank" : undefined}
                rel={isExternalBooking ? "noopener noreferrer" : undefined}
              >
                <Calendar className="mr-2 w-6 h-6" />
                Book Free Audit
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="h-16 px-12 text-xl border-white/20 text-white hover:bg-white/5 rounded-full font-bold transition-all"
              asChild
            >
              <a href="#services">
                Explore Systems
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </Button>
          </div>
          
          <div className="pt-8 text-white/30 text-sm font-bold uppercase tracking-[0.3em]">
            Limited Monthly Capacity for New Builds
          </div>
        </FadeIn>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#667eea] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#764ba2] rounded-full blur-[150px]"></div>
      </div>
    </section>
  );
}
