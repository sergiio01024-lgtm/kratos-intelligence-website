import { Card } from "./ui/card";
import { Globe, MessageSquare, Phone, Zap, Database, ArrowRight, Link } from "lucide-react";
import { Button } from "./ui/button";
import { FadeIn } from "./ui/FadeIn";

const services = [
  {
    title: "AI Website System",
    valueProp: "Convert traffic into qualified leads automatically.",
    bestFor: "Companies with high traffic but low conversion.",
    whatItDoes: "Custom landing pages with integrated lead capture and intake flows.",
    connectsTo: "Ads, CRM, Analytics",
    icon: Globe,
  },
  {
    title: "AI Chatbot System",
    valueProp: "Answer questions and capture leads 24/7.",
    bestFor: "Businesses getting repetitive questions.",
    whatItDoes: "Qualifies visitors, answers FAQs, and books appointments.",
    connectsTo: "Website, CRM, Calendly",
    icon: MessageSquare,
  },
  {
    title: "AI Phone Agent System",
    valueProp: "Never miss a high-value service call again.",
    bestFor: "Companies losing jobs to voicemail.",
    whatItDoes: "Answers calls, takes intake, and routes urgent leads.",
    connectsTo: "Twilio, Vapi, CRM",
    icon: Phone,
  },
  {
    title: "AI Outreach Engine",
    valueProp: "Turn old leads into new booked appointments.",
    bestFor: "Businesses with large databases of inactive leads.",
    whatItDoes: "Automated SMS/Email sequences for follow-up and reactivation.",
    connectsTo: "CRM, Lead Lists, SMS",
    icon: Zap,
  },
  {
    title: "CRM / Automation Backend",
    valueProp: "The operational brain of your business.",
    bestFor: "Companies with messy or manual lead tracking.",
    whatItDoes: "Centralized lead routing, status tracking, and reporting.",
    connectsTo: "Airtable, Make, n8n",
    icon: Database,
  }
];

export function Services() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL || "#contact";

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            AI Systems Built to Capture, Qualify, Route, and Convert Demand
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Choose one system or combine them into a full AI growth engine connected to your website, phone line, CRM, calendar, and follow-up workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="bg-white/[0.02] border-white/10 p-8 h-full hover:bg-white/[0.04] transition-all duration-500 group rounded-[2rem] flex flex-col">
                <div className="w-14 h-14 bg-[#667eea]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-7 h-7 text-[#667eea]" />
                </div>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-[#a5b4fc] text-sm font-medium">{service.valueProp}</p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Best For</div>
                      <p className="text-white/70 text-sm">{service.bestFor}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">What It Does</div>
                      <p className="text-white/70 text-sm leading-relaxed">{service.whatItDoes}</p>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Link className="w-3 h-3 text-[#667eea]" />
                      <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Connects to: {service.connectsTo}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-white hover:text-[#667eea] transition-colors font-bold group/btn"
                    asChild
                  >
                    <a href="#system-stack">
                      Explore Systems
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
          
          {/* Audit CTA Card */}
          <FadeIn delay={0.5} className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-[#667eea] to-[#764ba2] border-none p-8 h-full flex flex-col justify-center items-center text-center rounded-[2rem] shadow-[0_0_50px_rgba(102,126,234,0.2)]">
              <h3 className="text-3xl font-bold text-white mb-4">Start Small or Go Full Stack</h3>
              <p className="text-white/80 mb-8 font-light leading-relaxed">
                Schedule a 20-minute audit to see which system will drive the fastest ROI for your business.
              </p>
              <Button 
                className="w-full bg-white text-black hover:bg-white/90 rounded-full h-14 font-bold text-lg shadow-xl"
                asChild
              >
                <a href={bookingUrl}>
                  Book Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

