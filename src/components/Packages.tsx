import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck,
  Clock,
  Layout,
  Cpu,
  Database
} from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { trackEvent } from "../lib/analytics";

export function Packages() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  const packages = [
    {
      id: "sprint",
      name: "7-Day AI Sprint",
      price: "$900",
      subtext: "Fixed build fee",
      positioning: "Best first step for one urgent workflow bottleneck.",
      goodFor: [
        "Missed calls",
        "Website lead capture",
        "Quote follow-up",
        "Intake automation",
        "CRM routing",
        "Appointment handoff"
      ],
      includes: [
        "One working AI system",
        "Workflow map",
        "Intake logic",
        "CRM/contact routing",
        "Testing checklist",
        "Handoff walkthrough"
      ],
      cta: "Start the 7-Day Sprint",
      ctaHref: "#contact-form",
      highlight: true
    },
    {
      id: "launch",
      name: "Launch System",
      price: "$1,500",
      subtext: "Setup + $300/mo",
      positioning: "Best for a clean AI-powered lead capture foundation.",
      goodFor: [
        "AI website/landing page",
        "Chatbot intake",
        "Contact form routing",
        "CRM/Airtable setup",
        "Basic follow-up"
      ],
      includes: [
        "Website/landing page system",
        "Lead capture flow",
        "CRM/contact routing",
        "Basic automation",
        "Monthly support scope"
      ],
      cta: "Book Free Audit",
      ctaHref: finalBookingUrl
    },
    {
      id: "growth",
      name: "Growth System",
      price: "$3,000",
      subtext: "Setup + $900/mo",
      positioning: "Best for a complete front-office automation stack.",
      goodFor: [
        "AI phone agent",
        "Chatbot + Outreach",
        "CRM automation",
        "Appointment booking",
        "Follow-up sequences",
        "Reporting dashboard"
      ],
      includes: [
        "Multi-system workflow",
        "AI intake logic",
        "Phone/chat/contact routing",
        "Outreach sequences",
        "CRM pipeline setup",
        "KPI visibility"
      ],
      cta: "Book Free Audit",
      ctaHref: finalBookingUrl,
      featured: true
    },
    {
      id: "custom",
      name: "Custom AI Infrastructure",
      price: "Custom",
      subtext: "Quote based on scope",
      positioning: "Best for complex workflows or multi-location businesses.",
      goodFor: [
        "Multi-location routing",
        "Advanced CRM workflows",
        "Internal dashboards",
        "API-connected systems",
        "Custom AI assistants",
        "Operational builds"
      ],
      includes: [
        "Custom workflow architecture",
        "System design",
        "Integration planning",
        "Deployment roadmap",
        "Custom implementation"
      ],
      cta: "Request Free Audit",
      ctaHref: "#contact-form"
    }
  ];

  return (
    <section id="packages" className="py-24 dark-section-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight">Choose the System That <br/>Matches Your Bottleneck</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Start with a focused 7-Day AI Sprint, then expand into a full AI growth system when the workflow is proven.
          </p>
        </FadeIn>

        {/* 7-Day AI Sprint - Featured Entry Point */}
        <FadeIn delay={0.1} className="mb-12">
          <div id="sprint" className="max-w-5xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#667eea] rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <Card className="relative bg-[#05070a] border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Badge className="bg-[#667eea] text-white border-none px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-full italic">
                      Recommended First Step
                    </Badge>
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
                      The 7-Day <br/><span className="text-[#a5b4fc]">AI Sprint</span>
                    </h3>
                  </div>
                  
                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    We build one working AI system connected to your business workflow so you can see real value before committing to a larger build.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                    {packages[0].goodFor.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/80 font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#43e97b]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-[2rem] space-y-6">
                  <div className="space-y-1">
                    <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Fixed Build Fee</div>
                    <div className="text-6xl font-black text-white">$900</div>
                    <div className="text-[#43e97b] font-bold text-sm uppercase tracking-widest italic">One-time payment</div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <Button 
                      className="w-full h-16 bg-white text-black hover:bg-white/90 rounded-full font-black text-xl shadow-2xl transition-all"
                      asChild
                      onClick={() => trackEvent("sprint_cta_click", { location: "packages_featured_sprint" })}
                    >
                      <a href="#contact-form">
                        Start the 7-Day Sprint
                      </a>
                    </Button>
                    <p className="text-white/30 text-[10px] text-center font-bold uppercase tracking-widest">
                      *Focused build on one urgent bottleneck
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </FadeIn>

        {/* Growth/Full Stack emphasize */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.slice(1).map((pkg, i) => (
            <FadeIn key={pkg.id} delay={i * 0.1}>
              <Card className={`dark-card border-white/10 p-8 h-full flex flex-col bg-white/[0.02] relative group ${pkg.featured ? 'ring-2 ring-[#667eea]/40 shadow-2xl' : ''}`}>
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#667eea] text-white border-none px-4 py-1 text-[10px] font-black uppercase tracking-widest">Most Popular</Badge>
                  </div>
                )}
                <div className="space-y-6 flex-1">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white leading-tight">{pkg.name}</h3>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">{pkg.positioning}</p>
                  </div>

                  <div className="py-6 border-y border-white/5 space-y-1">
                    <div className="text-3xl font-black text-white">{pkg.price}</div>
                    <div className="text-[#a5b4fc] text-[10px] font-bold uppercase tracking-widest">{pkg.subtext}</div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Includes</div>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-white/70">
                          <CheckCircle2 className="w-3 h-3 text-[#43e97b] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Button 
                    variant={pkg.featured ? "default" : "outline"}
                    className={`w-full h-14 font-black text-lg rounded-full transition-all ${
                      pkg.featured 
                        ? 'bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-xl hover:shadow-[0_0_20px_rgba(102,126,234,0.4)]' 
                        : 'border-white/10 text-white hover:bg-white/5'
                    }`}
                    asChild
                    onClick={() => trackEvent("package_cta_click", { package_id: pkg.id, location: "packages_grid" })}
                  >
                    <a 
                      href={pkg.ctaHref}
                      target={pkg.ctaHref.startsWith('http') ? "_blank" : undefined}
                      rel={pkg.ctaHref.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      {pkg.cta}
                    </a>
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Sprint Clarity Section */}
        <FadeIn className="mb-20">
          <div className="max-w-4xl mx-auto p-12 bg-white/[0.01] border border-white/5 rounded-[3rem] text-center space-y-8">
            <div className="w-16 h-16 bg-[#667eea]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-[#a5b4fc]" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">A Controlled First Build Before a Bigger System</h3>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                The 7-Day AI Sprint is designed to build one focused workflow first. That lets you see how Kratos maps your intake, automates routing, and connects the system before expanding into a larger Launch or Growth build.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 text-center">
              {[
                "Fixed-scope",
                "One workflow",
                "Lower commitment",
                "Clear handoff",
                "Expansion path"
              ].map((item, i) => (
                <div key={i} className="text-[10px] font-black text-white/30 uppercase tracking-widest">{item}</div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Final Reassurance Block */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white tracking-tight">Not sure which one fits?</h3>
              <p className="text-white/60 text-lg font-light">
                Start with the audit. I’ll tell you which system I’d build first, what can wait, and whether automation is worth doing right now.
              </p>
            </div>
            <Button 
              size="lg" 
              className="h-16 px-12 text-xl bg-white text-black hover:bg-white/90 rounded-full font-black shadow-2xl transition-all group"
              asChild
              onClick={() => trackEvent("book_audit_click", { location: "packages_bottom_reassurance" })}
            >
              <a 
                href={finalBookingUrl}
                target={isExternalBooking ? "_blank" : undefined}
                rel={isExternalBooking ? "noopener noreferrer" : undefined}
              >
                Book Free Audit
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
