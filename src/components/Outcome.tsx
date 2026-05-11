import { CheckCircle2, XCircle } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

export function Outcome() {
  return (
    <section className="py-24 bg-[#05070a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
            Built for Businesses Losing Revenue to Slow Response
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Every minute a lead waits is a minute they spend searching for your competitor. Kratos bridges the gap between lead generation and booked revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Before Kratos */}
          <FadeIn direction="left">
            <div className="bg-white/[0.02] border border-white/5 p-8 lg:p-12 rounded-[2rem] space-y-8">
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Before Kratos</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  "Missed calls and unreturned voicemails",
                  "Slow manual follow-up (hours or days later)",
                  "Manual lead intake and data entry",
                  "Leads lost after hours and on weekends",
                  "No CRM visibility or tracking",
                  "No consistent customer reactivation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/40">
                    <span className="w-1.5 h-1.5 bg-white/10 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* After Kratos */}
          <FadeIn direction="right">
            <div className="bg-white/[0.05] border border-white/10 p-8 lg:p-12 rounded-[2rem] space-y-8 relative">
              <div className="absolute top-0 right-0 p-8">
                <div className="text-[10rem] font-bold text-white/5 leading-none select-none">AI</div>
              </div>
              
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-10 h-10 bg-[#43e97b]/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#43e97b]" />
                </div>
                <h3 className="text-xl font-bold text-white">After Kratos</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  "24/7 instant lead capture and response",
                  "Instant qualification and screening",
                  "CRM records created automatically",
                  "Direct appointment booking on your calendar",
                  "Automated follow-up sequences",
                  "Measurable pipeline visibility"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-[#43e97b] flex-shrink-0" />
                    <span className="font-medium">{item}</span>
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
