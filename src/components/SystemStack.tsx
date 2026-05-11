import { FadeIn } from "./ui/FadeIn";
import { Button } from "./ui/button";
import { CheckCircle2, ArrowRight, Layers, Sparkles } from "lucide-react";
import { trackEvent } from "../lib/analytics";

export function SystemStack() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL || "#contact";

  return (
    <section id="system-stack" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight">
            Start With One System. <br/>
            <span className="text-[#667eea]">Expand Into a Full AI Growth Stack.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            You don't need to rebuild your entire business overnight. Solve your biggest bottleneck first, then scale.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* One System Build */}
          <FadeIn delay={0.1}>
            <div className="h-full bg-white/[0.02] border border-white/10 p-10 lg:p-16 rounded-[3rem] space-y-10 hover:bg-white/[0.04] transition-all duration-500">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                  <Layers className="w-7 h-7 text-white/70" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white">One-System Build</h3>
                  <p className="text-white/40 font-medium">Solve your immediate bottleneck.</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-white/70 leading-relaxed">
                  Best for companies that want to fix a single point of failure in their customer journey:
                </p>
                <ul className="space-y-4">
                  {[
                    "Missed calls during busy hours",
                    "Website visitors leaving without a trace",
                    "Slow lead follow-up killing conversion",
                    "Manual, repetitive intake tasks",
                    "Messy or non-existent CRM data"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Button 
                  className="w-full h-14 rounded-full bg-white text-black hover:bg-white/90 font-bold text-lg"
                  asChild
                >
                  <a href="#packages">
                    Start the 7-Day Sprint
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Full AI Growth Stack */}
          <FadeIn delay={0.2}>
            <div className="h-full bg-gradient-to-br from-[#0a0e27] to-[#05070a] border border-[#667eea]/30 p-10 lg:p-16 rounded-[3rem] space-y-10 relative overflow-hidden shadow-[0_0_50px_rgba(102,126,234,0.1)] group">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sparkles className="w-48 h-48 text-white" />
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 bg-[#667eea]/20 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-[#667eea]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white">Full AI Growth Stack</h3>
                  <p className="text-[#a5b4fc] font-medium">The complete automated pipeline.</p>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <p className="text-white/70 leading-relaxed">
                  Best for companies ready to unify their entire operation into a high-efficiency growth machine:
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "AI Website & Chatbot",
                    "AI Phone Receptionist",
                    "CRM Automation Layer",
                    "Automated Booking Flow",
                    "Outreach & Follow-up",
                    "Reporting Dashboard"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#43e97b] flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 relative z-10">
                <Button 
                  className="w-full h-14 rounded-full bg-[#667eea] text-white hover:bg-[#667eea]/90 font-bold text-lg shadow-lg shadow-[#667eea]/20"
                  asChild
                  onClick={() => trackEvent("book_audit_click", { location: "system_stack_full" })}
                >
                  <a href={bookingUrl}>
                    Book Free Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
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
