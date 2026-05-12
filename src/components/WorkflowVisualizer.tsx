import { FadeIn } from "./ui/FadeIn";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function WorkflowVisualizer() {
  const steps = [
    { label: "Lead Captured", description: "First contact via website, phone, or message." },
    { label: "Qualified", description: "AI extracts urgency, location, and job type." },
    { label: "CRM Created", description: "Automated entry in Airtable or your CRM." },
    { label: "Booking Routed", description: "High-priority alerts sent to your team." },
    { label: "Follow-Up Started", description: "Instant SMS/email to keep the lead warm." },
    { label: "Pipeline Measured", description: "ROI and conversion tracked automatically." }
  ];

  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="relative group">
              <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white/[0.02] border border-white/5 rounded-3xl h-full hover:bg-white/[0.05] hover:border-white/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#667eea]/10 border border-[#667eea]/20 flex items-center justify-center text-[#a5b4fc] font-black group-hover:bg-[#667eea] group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-sm leading-tight">{step.label}</h4>
                  <p className="text-white/40 text-[10px] leading-tight px-2">{step.description}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-white/10" />
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
