import { FadeIn } from "./ui/FadeIn";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const deliverables = [
  "Live AI System (Website, Chatbot, or Phone Agent)",
  "Visual Workflow & Integration Map",
  "Service-Specific Intake Question Library",
  "CRM or Airtable Base Structure",
  "Automated Booking & Lead Routing Logic",
  "SMS & Email Follow-up Templates",
  "System Performance Testing Checklist",
  "Video Handoff & Technical Documentation",
  "Optional Optimization Roadmap"
];

export function Deliverables() {
  return (
    <section id="deliverables" className="py-24 bg-[#05070a] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">What You Receive</h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                We don't just "install" AI. We deliver a production-ready business system with everything you need to operate it independently.
              </p>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
              <div className="w-12 h-12 bg-[#667eea]/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#667eea]" />
              </div>
              <div className="space-y-1">
                <p className="text-white font-bold">Production-Grade Handoff</p>
                <p className="text-white/40 text-sm italic">"We build it, you own it, the system runs it."</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white/[0.03] border border-white/10 p-8 lg:p-12 rounded-[3rem] shadow-2xl">
              <ul className="grid sm:grid-cols-1 gap-6">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/80 group">
                    <div className="w-6 h-6 rounded-full bg-[#43e97b]/10 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-[#43e97b]" />
                    </div>
                    <span className="text-lg font-medium tracking-tight leading-none group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
