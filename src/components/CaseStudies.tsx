import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Globe, 
  TrendingUp, 
  CheckCircle, 
  Phone, 
  Zap, 
  Database, 
  ArrowRight, 
  Layout, 
  Search,
  CheckCircle2,
  Calendar,
  MousePointer2,
  Bell,
  Cpu,
  LucideIcon
} from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

interface Metric {
  icon: LucideIcon;
  metric: string;
  description: string;
}

interface ProofCard {
  title: string;
  value: string;
  description: string;
}

interface CaseStudy {
  company: string;
  industry: string;
  summary: string;
  challenge: string;
  systemBuilt: string;
  outcome: string;
  metrics: Metric[];
  workflowSteps: string[];
  proofCards: ProofCard[];
  image: string;
}

export function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      company: "AIRMAKERS Heating & Air",
      industry: "HVAC",
      summary: "From no web presence to a live, mobile-ready HVAC website in under a week.",
      challenge: "No website, no online presence, and no clean place to send prospects after calls, referrals, or local searches.",
      systemBuilt: "Built a responsive business website with service positioning, contact flow, Google Maps embed, and SEO-ready structure.",
      outcome: "AIRMAKERS went from zero online foundation to a live digital presence that can now support future chatbot, booking, and lead-capture upgrades.",
      metrics: [
        { icon: Globe, metric: "Live in 5 Days", description: "From zero to deployed" },
        { icon: TrendingUp, metric: "100%", description: "Mobile-ready layout" },
        { icon: Search, metric: "SEO Foundation", description: "Search-ready structure" }
      ],
      workflowSteps: [
        "Prospect visits website",
        "Reviews HVAC services",
        "Submits contact request",
        "Business receives inquiry",
        "Follow-up process starts"
      ],
      proofCards: [
        { title: "Before", value: "No Website", description: "No central online destination for leads." },
        { title: "Build", value: "Website + Contact Flow", description: "Modern business site with core service pages." },
        { title: "After", value: "Live Digital Presence", description: "Ready for SEO, chatbot, and booking upgrades." }
      ],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
    },
    {
      company: "LTE Electric",
      industry: "Electrician",
      summary: "AI chatbot, AI phone intake, lead scoring, SMS alerts, and Airtable CRM for electrical service leads.",
      challenge: "After-hours calls, manual follow-up, and scattered lead information made it harder for the owner to respond quickly and consistently.",
      systemBuilt: "Built an AI intake system with website chatbot, AI phone agent, Airtable CRM, automated lead scoring, and instant owner notifications.",
      outcome: "LTE Electric now has a structured lead pipeline that captures, classifies, and routes customer inquiries instead of letting them disappear.",
      metrics: [
        { icon: TrendingUp, metric: "47 Leads", description: "Captured in 3 months" },
        { icon: Zap, metric: "4 Min", description: "Average response" },
        { icon: CheckCircle, metric: "12 Jobs", description: "Booked directly" }
      ],
      workflowSteps: [
        "Customer calls or messages",
        "AI collects job details",
        "Lead gets scored",
        "Owner receives SMS",
        "Lead is stored in Airtable",
        "Follow-up action is triggered"
      ],
      proofCards: [
        { title: "Before", value: "Manual Follow-Up", description: "Leads depended on the owner catching every call." },
        { title: "Build", value: "AI + CRM System", description: "Chatbot, phone agent, lead scoring, and Airtable." },
        { title: "After", value: "Structured Pipeline", description: "Hot, warm, and cold leads tracked automatically." }
      ],
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800"
    }
  ];

  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  return (
    <section id="case-studies" className="py-24 dark-section-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Proof From Real Systems</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Not theory. These are real trade-business systems built to capture leads, route jobs, and reduce missed opportunities.
          </p>
        </div>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="space-y-12">
                {/* Header Area */}
                <div className="space-y-6">
                  <Badge className="bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                    {study.industry}
                  </Badge>
                  <div className="grid lg:grid-cols-12 gap-8 items-end">
                    <div className="lg:col-span-8 space-y-4">
                      <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">{study.company}</h3>
                      <p className="text-xl text-[#a5b4fc] font-medium leading-relaxed max-w-2xl">{study.summary}</p>
                    </div>
                  </div>
                </div>

                {/* Main Body */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                  {/* Left: Text Content */}
                  <div className="lg:col-span-6 space-y-10">
                    <div className="grid gap-8">
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">The Challenge</span>
                        <p className="text-white/80 text-lg leading-relaxed">{study.challenge}</p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-[#667eea] uppercase tracking-[0.2em]">The System Built</span>
                        <p className="text-white/80 text-lg leading-relaxed">{study.systemBuilt}</p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-[#43e97b] uppercase tracking-[0.2em]">The Outcome</span>
                        <p className="text-white/80 text-lg leading-relaxed">{study.outcome}</p>
                      </div>
                    </div>

                    {/* Workflow Timeline */}
                    <div className="space-y-6 pt-6 border-t border-white/5">
                      <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#667eea]" />
                        Workflow Snapshot
                      </h4>
                      <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
                        <div className="flex flex-col gap-6 md:gap-4">
                          {study.workflowSteps.map((step, i) => (
                            <div key={i} className="flex items-center gap-4 relative z-10">
                              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[10px] font-black text-[#a5b4fc]">
                                {i + 1}
                              </div>
                              <p className="text-sm font-medium text-white/60">{step}</p>
                              {i < study.workflowSteps.length - 1 && (
                                <ArrowRight className="w-3 h-3 text-white/10 hidden md:block ml-auto" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Visual System Snapshot */}
                  <div className="lg:col-span-6 space-y-8">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-[#667eea]/5 blur-2xl rounded-3xl group-hover:bg-[#667eea]/10 transition-colors"></div>
                      <Card className="relative overflow-hidden dark-card border-white/10 shadow-2xl rounded-3xl">
                        <div className="aspect-video relative">
                          <ImageWithFallback
                            src={study.image}
                            alt={`${study.company} system preview`}
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/40 to-transparent"></div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-[#43e97b] rounded-full animate-pulse"></div>
                              <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Live System Active</span>
                            </div>
                            <h4 className="text-lg font-bold text-white">System Snapshot: {study.industry} Intake</h4>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2 group hover:border-[#667eea]/30 transition-colors">
                          <div className="w-10 h-10 bg-[#667eea]/10 rounded-xl flex items-center justify-center mx-auto mb-2 border border-[#667eea]/20">
                            <m.icon className="w-5 h-5 text-[#667eea]" />
                          </div>
                          <div className="text-lg font-black text-white leading-none">{m.metric}</div>
                          <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{m.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Proof Cards: Before / Build / After */}
                <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-white/5">
                  {study.proofCards.map((card, i) => (
                    <div key={i} className={`p-6 rounded-2xl border transition-all duration-300 ${
                      card.title === 'Before' 
                        ? 'bg-white/5 border-white/5 opacity-60' 
                        : card.title === 'Build'
                        ? 'bg-[#667eea]/5 border-[#667eea]/20'
                        : 'bg-[#43e97b]/5 border-[#43e97b]/20 shadow-[0_0_30px_rgba(67,233,123,0.05)]'
                    }`}>
                      <div className="flex flex-col gap-4">
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                          card.title === 'Before' ? 'text-white/30' : card.title === 'Build' ? 'text-[#a5b4fc]' : 'text-[#43e97b]'
                        }`}>
                          {card.title}
                        </span>
                        <div className="space-y-1">
                          <div className="text-xl font-bold text-white">{card.value}</div>
                          <p className="text-xs text-white/50 leading-relaxed font-medium">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Section CTA */}
        <FadeIn className="mt-32">
          <div className="max-w-4xl mx-auto dark-card border-white/10 rounded-[2rem] p-10 md:p-16 text-center space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#667eea]/10 blur-[80px] -mr-16 -mt-16"></div>
            
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">Want a system like this for your business?</h3>
              <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
                Book a free audit and I’ll map the first automation your trade business should build.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="h-16 px-10 text-xl bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-[0_10px_30px_rgba(102,126,234,0.4)] hover:shadow-[0_15px_40px_rgba(102,126,234,0.6)] transition-all duration-300 font-black group"
                asChild
              >
                <a 
                  href={finalBookingUrl}
                  target={isExternalBooking ? "_blank" : undefined}
                  rel={isExternalBooking ? "noopener noreferrer" : undefined}
                >
                  <Calendar className="mr-3 w-6 h-6" />
                  Book Free Audit
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-16 px-10 text-xl border-white/20 text-white hover:bg-white/5 hover:border-white transition-all font-bold"
                asChild
              >
                <a href="#process">
                  See How It Works
                  <ArrowRight className="ml-3 w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}