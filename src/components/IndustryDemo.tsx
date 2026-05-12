import { Industry } from "../data/industries";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { FadeIn } from "./ui/FadeIn";
import { MessageSquare, Database, Zap, CheckCircle2 } from "lucide-react";

interface IndustryDemoProps {
  industry: Industry;
}

export function IndustryDemo({ industry }: IndustryDemoProps) {
  // Use existing industry data to generate examples
  const exampleInquiry = industry.exampleLead || "How can I get a quote?";
  const qualifications = industry.intakeQuestions.slice(0, 4);
  const crmFields = [
    { label: "Lead Category", value: industry.name },
    { label: "Service Type", value: industry.highValueLeadTypes[0] || "General Service" },
    { label: "Urgency", value: industry.urgencyLabel || "High" },
    { label: "Location", value: "Captured (ZIP/City)" }
  ];

  return (
    <section id="industry-demo" className="py-24 border-t border-white/5 bg-[#05070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight">System Preview</h2>
          <p className="text-white/60 text-xl font-light">See how the AI handles a live {industry.name} inquiry.</p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Inquiry + Qualification */}
          <FadeIn delay={0.1}>
            <Card className="dark-card border-white/10 h-full p-8 space-y-8 bg-white/[0.01]">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-[#a5b4fc]" />
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Example Inquiry</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-white italic">
                    "{exampleInquiry}"
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-[#43e97b]" />
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">What AI Qualifies</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {qualifications.map((q, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 className="w-3 h-3 text-[#43e97b]" />
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* CRM + Automation */}
          <FadeIn delay={0.2}>
            <Card className="dark-card border-white/10 h-full p-8 space-y-8 bg-white/[0.01]">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 text-orange-400" />
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">CRM Captures</span>
                  </div>
                  <div className="space-y-2">
                    {crmFields.map((field, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">{field.label}</span>
                        <span className="text-xs font-bold text-white/80">{field.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="p-4 bg-[#667eea]/5 border border-[#667eea]/20 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#a5b4fc]" />
                      <span className="text-[10px] font-bold text-[#a5b4fc] uppercase tracking-[0.2em]">Recommended First Build</span>
                    </div>
                    <p className="text-sm text-white font-bold">
                      {industry.bestFirstAutomation}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
            Demo preview. Final workflows are customized to your business.
          </p>
        </div>
      </div>
    </section>
  );
}
