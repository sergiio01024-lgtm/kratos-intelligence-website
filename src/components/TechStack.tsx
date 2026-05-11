import { FadeIn } from "./ui/FadeIn";
import { CheckCircle2, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const tools = [
  { name: "Voiceflow", category: "Chatbot Systems" },
  { name: "Vapi", category: "AI Voice Systems" },
  { name: "Twilio", category: "Phone & SMS" },
  { name: "Airtable", category: "CRM Databases" },
  { name: "Make / n8n", category: "Automation" },
  { name: "Calendly", category: "Scheduling" },
  { name: "Next.js", category: "Web Deployment" },
  { name: "GoHighLevel", category: "CRM / Workflows" }
];

const metrics = [
  "Response time",
  "Lead capture rate",
  "Booking rate",
  "Missed call recovery",
  "Cost per booked job",
  "Revenue pipeline visibility"
];

export function TechStack() {
  return (
    <section className="py-24 bg-[#05070a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
                Built With Production-Grade AI and Automation Tools
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                We don't use experimental toys. We build on the same infrastructure used by the world's leading tech companies to ensure your system never goes down.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {tools.map((tool, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl space-y-1">
                  <div className="text-white font-bold">{tool.name}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">{tool.category}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" className="relative">
            <div className="absolute inset-0 bg-[#667eea]/5 blur-[100px] rounded-full"></div>
            <div className="relative bg-white/[0.03] border border-white/10 p-10 md:p-16 rounded-[3rem] space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#43e97b]/10 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#43e97b]" />
                </div>
                <h3 className="text-2xl font-bold text-white">What We Measure</h3>
              </div>

              <div className="grid gap-6">
                {metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#43e97b] flex-shrink-0" />
                    <span className="text-white/80 font-medium text-lg">{metric}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#667eea]" />
                <span className="text-white/40 text-sm font-bold uppercase tracking-widest italic">
                  Data Privacy & Security Guaranteed
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
