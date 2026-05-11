import { Card, CardContent } from "./ui/card";
import { Target, Filter, GitMerge, RotateCcw, BarChart3 } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

export function Process() {
  const steps = [
    {
      icon: Target,
      title: "Capture",
      description: "Website, chatbot, phone, forms, and outreach collect demand 24/7.",
      details: ["Website Widgets", "AI Phone Agents", "Outreach Engines"]
    },
    {
      icon: Filter,
      title: "Qualify",
      description: "The system asks the right questions, scores urgency, and filters low-quality leads.",
      details: ["Instant Screening", "Urgency Scoring", "Bot Filtering"]
    },
    {
      icon: GitMerge,
      title: "Route",
      description: "Lead data is pushed into CRM, Airtable, calendar, email, SMS, or internal workflow.",
      details: ["CRM Sync", "SMS Alerts", "Calendar Booking"]
    },
    {
      icon: RotateCcw,
      title: "Follow Up",
      description: "Automations recover missed leads, revive old customers, and keep prospects moving.",
      details: ["Lead Recovery", "Database Reactivation", "Nurture Sequences"]
    },
    {
      icon: BarChart3,
      title: "Measure",
      description: "Dashboards track response time, lead source, booking rate, and pipeline quality.",
      details: ["ROI Tracking", "Response Speed", "Lead Attribution"]
    }
  ];

  return (
    <section id="process" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">The Kratos Operating System</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto font-light">
            We don't just build bots. We build the end-to-end infrastructure that manages your lead lifecycle.
          </p>
        </FadeIn>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="relative group bg-white/[0.03] border-white/10 h-full overflow-hidden transition-all duration-300 rounded-3xl hover:bg-white/[0.05]">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-[#667eea]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-[#667eea]" />
                    </div>
                    <div className="text-2xl text-white/5 font-black italic">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light">{step.description}</p>
                  </div>
 
                  <ul className="space-y-2 pt-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                        <div className="w-1 h-1 bg-[#667eea] rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}