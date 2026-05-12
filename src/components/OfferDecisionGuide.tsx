import { FadeIn } from "./ui/FadeIn";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, ArrowRight, Target, Zap, Rocket } from "lucide-react";
import { trackEvent } from "../lib/analytics";

export function OfferDecisionGuide() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  const guides = [
    {
      title: "Choose the 7-Day AI Sprint if:",
      icon: <Zap className="w-6 h-6 text-[#a5b4fc]" />,
      points: [
        "You want to prove one workflow first",
        "You have one obvious bottleneck",
        "You want a fast build before committing bigger",
        "You need a working system, not a strategy deck"
      ]
    },
    {
      title: "Choose Launch if:",
      icon: <Target className="w-6 h-6 text-[#43e97b]" />,
      points: [
        "Your website or lead capture is weak",
        "You need a clean intake foundation",
        "You want CRM/contact routing in place",
        "You are preparing for paid traffic or outreach"
      ]
    },
    {
      title: "Choose Growth if:",
      icon: <Rocket className="w-6 h-6 text-[#667eea]" />,
      points: [
        "You are losing calls, leads, or follow-ups across multiple channels",
        "You need phone, chat, CRM, and follow-up connected",
        "You want a full front-office AI system",
        "You need measurable pipeline visibility"
      ]
    }
  ];

  return (
    <section id="offer-guide" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Which Starting Point Fits Best?</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Kratos systems are modular. You can start with one workflow and expand as you see the ROI.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="dark-card border-white/10 p-8 h-full flex flex-col bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-all">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-6 leading-tight">{guide.title}</h3>
                <ul className="space-y-4 flex-1">
                  {guide.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-[#667eea] mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <Button 
                    variant="outline" 
                    className="w-full h-12 border-white/10 text-white hover:bg-white/5 font-bold"
                    asChild
                    onClick={() => trackEvent("guide_cta_click", { guide_title: guide.title, location: "offer_decision_guide" })}
                  >
                    <a 
                      href={finalBookingUrl}
                      target={isExternalBooking ? "_blank" : undefined}
                      rel={isExternalBooking ? "noopener noreferrer" : undefined}
                    >
                      Book Free Audit
                    </a>
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
