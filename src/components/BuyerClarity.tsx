import { FadeIn } from "./ui/FadeIn";
import { Zap, XCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function BuyerClarity() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL || "#contact";

  return (
    <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-16">
        <FadeIn className="space-y-6">
          <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Not a Template. Not a Toy Bot. <br/>
            <span className="text-[#667eea]">A Business Workflow.</span>
          </h2>
          <p className="text-white/60 text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Kratos systems are built around the actual path from lead → qualification → CRM → booking → follow-up. 
            The goal is not to add "AI" for novelty. The goal is to remove operational friction and turn more demand into measurable pipeline.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <FadeIn delay={0.1}>
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6 group hover:border-[#d4183d]/20 transition-all">
              <div className="w-12 h-12 bg-[#d4183d]/10 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-[#d4183d]" />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">What This Isn't</h4>
                <ul className="space-y-3">
                  {[
                    "Generic chatbots that frustrate customers",
                    "Off-the-shelf templates with no logic",
                    "Experimental toys that break weekly",
                    "Agency services without deliverables"
                  ].map((item, i) => (
                    <li key={i} className="text-white/40 text-sm flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-white/20"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-8 rounded-[2rem] bg-[#667eea]/5 border border-[#667eea]/10 space-y-6 group hover:border-[#667eea]/30 transition-all">
              <div className="w-12 h-12 bg-[#667eea]/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#667eea]" />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">What Kratos Builds</h4>
                <ul className="space-y-3">
                  {[
                    "Production-ready AI infrastructure",
                    "Deeply integrated business workflows",
                    "Measurable conversion systems",
                    "Clear, productized deliverables"
                  ].map((item, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-center gap-3 font-medium">
                      <div className="w-1 h-1 rounded-full bg-[#667eea]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="pt-8">
            <Button 
              className="h-16 px-12 bg-white text-black hover:bg-white/90 rounded-full font-bold text-xl transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
              asChild
            >
              <a href={bookingUrl}>
                Explore Systems
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
