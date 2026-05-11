import { industries } from "../data/industries";
import { FadeIn } from "./ui/FadeIn";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "../lib/analytics";
import { saveHomepageScrollPosition } from "../lib/scrollMemory";

const industryOutcomes: Record<string, string> = {
  "hvac": "Capture emergency calls, qualify service requests, and book installs faster.",
  "plumbers": "Qualify slab leak emergencies, capture job details, and dispatch techs 24/7.",
  "electricians": "Qualify panel upgrade leads, capture emergency calls, and book estimates.",
  "roofing": "Qualify storm leads, collect photos, and schedule inspections.",
  "garage-door": "Capture broken spring emergencies and book install estimates instantly.",
  "pest-control": "Identify pest types, qualify urgency, and book inspections automatically.",
  "pool-service": "Qualify equipment repairs, capture service requests, and plan routes.",
  "junk-removal": "Collect load photos, provide instant estimates, and book pickups.",
  "restoration": "Capture critical flood and fire emergencies with instant alerts.",
  "cleaning-companies": "Provide instant cleaning quotes and manage recurring bookings."
};

export function IndustryLandingPages() {
  const handleIndustryClick = (industry: typeof industries[0]) => {
    saveHomepageScrollPosition("industry_card_click");
    trackEvent("industry_card_click", {
      industry: industry.name,
      slug: industry.slug,
      location: "industry_landing_pages_section"
    });
  };

  return (
    <section id="industries" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
              Built for High-Intent Service Industries
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-light pt-2">
              Kratos AI systems are tailored to the specific lead-capture and qualification workflows of your vertical.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <a 
                href={`/industries/${industry.slug}/`}
                onClick={() => handleIndustryClick(industry)}
                className="group block h-full bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">{industry.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">
                    {industryOutcomes[industry.slug] || industry.subheadline}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-[#667eea] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Explore {industry.name}
                  <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

