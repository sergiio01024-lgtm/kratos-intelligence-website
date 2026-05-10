import { industries } from "../data/industries";
import { FadeIn } from "./ui/FadeIn";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { trackEvent } from "../lib/analytics";

export function IndustryLandingPages() {
  const handleIndustryClick = (industry: typeof industries[0]) => {
    trackEvent("industry_card_click", {
      industry: industry.name,
      slug: industry.slug,
      location: "industry_landing_pages_section"
    });
  };

  return (
    <section id="industries" className="py-24 dark-section-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-none">
              AI Automation by Industry
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed pt-4">
              Every trade business loses leads differently. Choose your industry to see the automation system that fits your workflow.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {industries.map((industry, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <a 
                href={`/industries/${industry.slug}/`}
                onClick={() => handleIndustryClick(industry)}
                className="group block h-full dark-card border-white/10 p-6 rounded-2xl border hover:border-[#667eea]/40 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#667eea]/5 blur-2xl -mr-12 -mt-12 group-hover:bg-[#667eea]/10 transition-colors"></div>
                
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#a5b4fc] transition-colors">{industry.name}</h3>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#667eea] group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <p className="text-xs text-white/40 leading-relaxed italic line-clamp-2">
                    "{industry.painPoints[0]}"
                  </p>

                  <div className="pt-4 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheck className="w-3 h-3 text-[#43e97b]" />
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Recommended</span>
                    </div>
                    <div className="text-[11px] font-bold text-white/70 truncate">{industry.recommendedPackage}</div>
                  </div>
                </div>

                <div className="mt-4 text-[10px] font-black text-[#667eea] uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Industry Page
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
