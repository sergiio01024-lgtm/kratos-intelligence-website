import { FadeIn } from "./ui/FadeIn";
import { Search, Map, Cpu, Zap, Rocket, ShieldCheck } from "lucide-react";

export function BuyingFlow() {
  const steps = [
    {
      title: "Audit",
      description: "We map your current lead flow, missed-lead risk, and biggest automation bottleneck.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Workflow",
      description: "We define the intake questions, routing logic, CRM fields, and follow-up path.",
      icon: <Map className="w-6 h-6" />
    },
    {
      title: "Build",
      description: "Kratos builds the first system or full stack depending on the selected package.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Test",
      description: "We test the lead journey from first contact to CRM, booking, and follow-up.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Launch",
      description: "You receive the live system, documentation, and recommended next optimization path.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section id="next-steps" className="py-24 border-t border-white/5 bg-[#05070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">What Happens After You Book</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A structured path from audit to live system, ensuring your workflow is proven before we scale.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center space-y-6 group">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-[#667eea] group-hover:text-white group-hover:border-[#667eea] transition-all duration-500 shadow-xl">
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-[10px] font-black text-[#667eea] uppercase tracking-[0.2em]">{i + 1}</span>
                      <h4 className="text-white font-bold text-lg tracking-tight">{step.title}</h4>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed px-4">{step.description}</p>
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
