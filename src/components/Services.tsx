import { Card } from "./ui/card";
import { Globe, MessageSquare, Phone, Zap, Database, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { FadeIn } from "./ui/FadeIn";

const services = [
  {
    title: "AI Website",
    description: "Conversion-focused websites built to capture leads, route inquiries, and support paid traffic.",
    icon: Globe,
  },
  {
    title: "AI Chatbot",
    description: "Website assistants that answer questions, qualify visitors, capture details, and hand off hot leads.",
    icon: MessageSquare,
  },
  {
    title: "AI Phone Agent",
    description: "AI receptionists that handle missed calls, collect intake, book appointments, and log call details.",
    icon: Phone,
  },
  {
    title: "AI Outreach Engine",
    description: "Automated follow-up for missed leads, old customers, estimates, no-shows, and reactivation.",
    icon: Zap,
  },
  {
    title: "CRM / Automation Backend",
    description: "Airtable, GoHighLevel, HubSpot, Make, n8n, Zapier, Calendly, Twilio, Voiceflow, Vapi, and custom workflows.",
    icon: Database,
  }
];

export function Services() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL || "#contact";

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">AI Systems Built for Growth</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We build production-grade AI infrastructure that handles the heavy lifting of lead capture and qualification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="bg-white/[0.03] border-white/10 p-8 h-full hover:bg-white/[0.05] transition-all duration-300 group rounded-3xl">
                <div className="w-12 h-12 bg-[#667eea]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-[#667eea]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  {service.description}
                </p>
              </Card>
            </FadeIn>
          ))}
          
          {/* Final CTA Card */}
          <FadeIn delay={0.5} className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-[#667eea] to-[#764ba2] border-none p-8 h-full flex flex-col justify-center items-center text-center rounded-3xl shadow-[0_0_30px_rgba(102,126,234,0.3)]">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate?</h3>
              <p className="text-white/90 mb-8 font-light">
                Schedule a call to see which AI system fits your business best.
              </p>
              <Button 
                className="w-full bg-white text-black hover:bg-white/90 rounded-full h-12 font-bold"
                asChild
              >
                <a href={bookingUrl}>
                  Book Free Audit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
