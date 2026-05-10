import { Button } from "./ui/button";
import { MapPin, CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { trackEvent } from "../lib/analytics";

export function ServiceArea() {
  const serviceAreas = [
    "San Diego", "Chula Vista", "La Mesa", "El Cajon", "Poway",
    "Escondido", "Oceanside", "Carlsbad", "National City", "Coronado"
  ];

  const industries = [
    "HVAC", "Electrical", "Plumbing", "Roofing", "Garage Door",
    "Pest Control", "Pool Service", "Junk Removal", "Restoration",
    "Cleaning Companies", "Landscaping", "General Contractors"
  ];

  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  return (
    <section id="service-area" className="py-24 dark-section-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#667eea]/10 border border-[#667eea]/20">
                  <MapPin className="w-4 h-4 text-[#a5b4fc]" />
                  <span className="text-xs font-bold text-[#a5b4fc] uppercase tracking-widest">San Diego County</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                  Built in San Diego for Local Trade Businesses
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                  Kratos Intelligence helps contractors and service businesses across San Diego County capture more leads, respond faster, and organize every opportunity.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-white/5 pb-2">Service Areas</h3>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {serviceAreas.map((area, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#667eea]" />
                        <span className="text-sm text-white/70">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-white/5 pb-2">Industries</h3>
                  <div className="grid gap-y-2">
                    {industries.map((industry, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#43e97b]" />
                        <span className="text-sm text-white/70">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.3} className="relative">
            <div className="absolute -inset-4 bg-[#667eea]/5 blur-3xl rounded-[3rem]"></div>
            <div className="relative dark-card border-white/10 p-10 md:p-16 rounded-[2rem] text-center space-y-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(90deg,transparent,#667eea,transparent)]"></div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to automate your San Diego business?</h3>
                <p className="text-white/60 text-lg">
                  Let's find the fastest automation win for your company.
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <Button 
                  size="lg" 
                  className="h-16 px-10 text-xl bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-[0_10px_30px_rgba(102,126,234,0.4)] hover:shadow-[0_15px_40px_rgba(102,126,234,0.6)] font-black transition-all group"
                  asChild
                  onClick={() => trackEvent("book_audit_click", { location: "service_area_section", destination: isExternalBooking ? "booking_url" : "contact_fallback" })}
                >
                  <a 
                    href={finalBookingUrl}
                    target={isExternalBooking ? "_blank" : undefined}
                    rel={isExternalBooking ? "noopener noreferrer" : undefined}
                  >
                    <Calendar className="mr-3 w-6 h-6" />
                    Book Free Audit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
