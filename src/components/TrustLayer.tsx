import { FadeIn } from "./ui/FadeIn";
import { ShieldCheck, Database, Layout, Activity, AlertCircle } from "lucide-react";

export function TrustLayer() {
  const trustBlocks = [
    {
      title: "Operational Focus",
      description: "Built around real lead flows, intake questions, routing, and follow-up.",
      icon: <Layout className="w-5 h-5" />
    },
    {
      title: "Workflow Ownership",
      description: "You receive structure, documentation, and a clear handoff path.",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Tool Flexibility",
      description: "Compatible with Airtable, Voiceflow, Vapi, Twilio, Make, n8n, Zapier, and common CRMs.",
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: "Measurement",
      description: "Track response time, lead source, booking status, and pipeline movement.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "No Fake Promises",
      description: "No fake guarantees or vanity AI. The goal is a working business workflow.",
      icon: <AlertCircle className="w-5 h-5" />
    }
  ];

  return (
    <section id="trust" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Built for Operators, <br/>Not Vanity AI
              </h2>
              <p className="text-white/60 text-xl font-light leading-relaxed">
                We don't build demos that look good in a deck. We build systems that handle your leads when you're in the field or the phones are off.
              </p>
            </div>
            
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
                <ShieldCheck className="w-3 h-3 text-[#667eea]" />
                Production Grade Infrastructure
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {trustBlocks.map((block, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-white/[0.04] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#667eea]/10 group-hover:text-[#667eea] transition-all">
                    {block.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">{block.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{block.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
