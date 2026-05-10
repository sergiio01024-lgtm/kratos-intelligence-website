import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Clock,
  Target,
  Users,
  ShieldCheck,
  LucideIcon
} from "lucide-react";

import { FadeIn } from "./ui/FadeIn";
import { trackEvent } from "../lib/analytics";

interface Package {
  name: string;
  startingPrice: string;
  monthlyPrice: string;
  description: string;
  bestFor: string;
  primaryOutcome: string;
  timeline: string;
  monthlySupport: string;
  features: string[];
  popular: boolean;
  badge: string;
  ctaLabel: string;
}

export function Packages() {
  const packages: Package[] = [
    {
      name: "Trades Starter Pack",
      startingPrice: "Starting at $1,500",
      monthlyPrice: "$200–400/mo",
      description: "Website, chatbot, lead capture, and automated follow-up for trade businesses that need a clean online foundation.",
      bestFor: "Businesses with no automation yet",
      primaryOutcome: "Capture website leads and follow up automatically",
      timeline: "3–7 days",
      monthlySupport: "Hosting support, chatbot edits, CRM upkeep, and small workflow fixes",
      features: [
        "5–7 page business website",
        "Embedded AI chatbot",
        "Lead follow-up SMS automation",
        "Airtable lead database",
        "30 days of launch support"
      ],
      popular: true,
      badge: "Best First Build",
      ctaLabel: "Start Here"
    },
    {
      name: "AI-Powered Business System",
      startingPrice: "Starting at $3,000",
      monthlyPrice: "$500–900/mo",
      description: "The full AI intake stack for businesses that want website leads, calls, booking, reviews, and reporting handled in one system.",
      bestFor: "Businesses losing calls or managing leads manually",
      primaryOutcome: "Capture, qualify, route, and track leads 24/7",
      timeline: "5–14 days",
      monthlySupport: "Phone-agent tuning, reporting, CRM maintenance, workflow monitoring, and support",
      features: [
        "Everything in Starter Pack",
        "AI phone receptionist",
        "Automated booking flow",
        "Review generation system",
        "Monthly performance report"
      ],
      popular: false,
      badge: "Full System",
      ctaLabel: "Build Full System"
    },
    {
      name: "Lead Gen + Outreach Machine",
      startingPrice: "Starting at $1,000",
      monthlyPrice: "$600–1,200/mo",
      description: "Lead list building and managed outreach for businesses that want more prospects instead of waiting on inbound demand.",
      bestFor: "Businesses ready for outbound growth",
      primaryOutcome: "Build a predictable monthly prospect pipeline",
      timeline: "5–10 days",
      monthlySupport: "Lead sourcing, list cleaning, campaign updates, reporting, and pipeline tracking",
      features: [
        "Google Maps lead sourcing",
        "Verified contact data",
        "Personalized email sequences",
        "Monthly results report",
        "Airtable lead tracking"
      ],
      popular: false,
      badge: "Outbound Growth",
      ctaLabel: "Launch Outreach"
    },
    {
      name: "Content + Website Bundle",
      startingPrice: "Starting at $2,000",
      monthlyPrice: "$500–800/mo",
      description: "A premium website plus ongoing AI-assisted content so the business looks active, credible, and easier to trust.",
      bestFor: "Businesses that need better brand presence",
      primaryOutcome: "Improve credibility and stay visible online",
      timeline: "7–14 days",
      monthlySupport: "Monthly content delivery, site updates, creative edits, and brand asset support",
      features: [
        "High-end Figma-designed website",
        "8–16 content pieces/month",
        "Short video ads for social",
        "Branded graphics",
        "Monthly creative delivery"
      ],
      popular: false,
      badge: "Brand Growth",
      ctaLabel: "Upgrade Brand"
    }
  ];

  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  const comparisonItems = [
    { label: "Fastest Launch", value: "Trades Starter Pack" },
    { label: "Most Complete", value: "AI-Powered Business System" },
    { label: "Best for Growth", value: "Lead Gen + Outreach Machine" },
    { label: "Best for Brand", value: "Content + Website Bundle" }
  ];

  return (
    <section id="packages" className="py-24 dark-section-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl mb-4 text-white font-black tracking-tight">Packages Built for Trade Businesses</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Choose the system that fits your current bottleneck — website trust, missed calls, outbound growth, or content.
          </p>
        </FadeIn>

        {/* Helper Row */}
        <FadeIn delay={0.1} className="mb-16">
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#667eea]/5 border border-[#667eea]/20 backdrop-blur-sm flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#667eea]/10 flex items-center justify-center flex-shrink-0 border border-[#667eea]/20">
              <Search className="w-6 h-6 text-[#a5b4fc]" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-white font-bold text-lg">Not sure where to start?</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Most trade businesses should start with the <span className="text-[#a5b4fc] font-bold">Trades Starter Pack</span> unless they are already missing high-value calls every week. If calls are the main leak, start with the <span className="text-[#a5b4fc] font-bold">AI-Powered Business System</span>.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className={`group relative h-full flex flex-col overflow-hidden transition-all duration-500 dark-card border-white/10 ${pkg.popular ? 'ring-2 ring-[#667eea]/40 shadow-[0_0_40px_rgba(102,126,234,0.1)]' : ''}`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#667eea]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <CardHeader className="p-8 pb-4 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <Badge className="bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none text-[10px] uppercase tracking-widest font-bold px-3 py-1">
                        {pkg.badge}
                      </Badge>
                      <CardTitle className="text-3xl font-black text-white pt-2 leading-none">{pkg.name}</CardTitle>
                    </div>
                    {pkg.popular && <Star className="w-6 h-6 text-[#a5b4fc] fill-[#a5b4fc]/20" />}
                  </div>
                  
                  <p className="text-white/60 text-sm leading-relaxed min-h-[40px]">{pkg.description}</p>
                </CardHeader>

                <CardContent className="p-8 pt-0 space-y-8 flex-1 flex flex-col">
                  {/* Pricing Area */}
                  <div className="space-y-1 py-6 border-y border-white/5">
                    <div className="text-3xl font-black text-white">{pkg.startingPrice}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Monthly Support</span>
                      <span className="text-[#a5b4fc] font-bold text-sm">{pkg.monthlyPrice}</span>
                    </div>
                  </div>

                  {/* Decision Clarity Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <Users className="w-3 h-3" />
                        Best For
                      </div>
                      <p className="text-xs font-bold text-white/80 leading-tight">{pkg.bestFor}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <Target className="w-3 h-3" />
                        Main Outcome
                      </div>
                      <p className="text-xs font-bold text-[#43e97b] leading-tight">{pkg.primaryOutcome}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <Clock className="w-3 h-3" />
                        Timeline
                      </div>
                      <p className="text-xs font-bold text-white/80 leading-tight">{pkg.timeline}</p>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-4 flex-1">
                    <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white/40">What's Included</h4>
                    <ul className="grid gap-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-[#43e97b] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-auto">
                    <Button 
                      className="w-full h-14 bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg hover:shadow-[0_10px_20px_rgba(102,126,234,0.3)] transition-all duration-300 font-black text-lg group" 
                      size="lg" 
                      asChild
                      onClick={() => trackEvent("package_cta_click", { 
                        package_name: pkg.name, 
                        package_badge: pkg.badge,
                        location: "packages_section",
                        destination: isExternalBooking ? "booking_url" : "contact_fallback"
                      })}
                    >
                      <a 
                        href={finalBookingUrl}
                        target={isExternalBooking ? "_blank" : undefined}
                        rel={isExternalBooking ? "noopener noreferrer" : undefined}
                      >
                        {pkg.ctaLabel}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Comparison Strip */}
        <FadeIn className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-white/5">
            {comparisonItems.map((item, i) => (
              <div key={i} className="text-center md:text-left space-y-1">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{item.label}</div>
                <div className="text-xs font-bold text-white/70">{item.value}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Audit CTA Block */}
        <FadeIn>
          <div className="bg-[#050816] text-white rounded-[2rem] p-10 md:p-16 text-center border border-white/5 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#667eea]/10 rounded-full blur-[100px]"></div>
            
            <div className="max-w-3xl mx-auto relative z-10 space-y-8">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-[1.5rem] flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-10 h-10 text-[#667eea] shadow-[0_0_15px_rgba(102,126,234,0.4)]" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">Still not sure which package fits?</h3>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                  Book a free audit and I’ll tell you which system I would build first, what it should cost, and whether it is worth doing right now.
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <Button 
                  size="lg" 
                  className="h-16 px-10 text-xl bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-[0_10px_30px_rgba(102,126,234,0.4)] hover:shadow-[0_15px_40px_rgba(102,126,234,0.6)] font-black transition-all" 
                  asChild
                  onClick={() => trackEvent("book_audit_click", { location: "packages_custom_cta", destination: isExternalBooking ? "booking_url" : "contact_fallback" })}
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
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Additional icons for the new layout
const Search = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
)
