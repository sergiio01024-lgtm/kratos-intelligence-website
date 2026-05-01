import { Badge } from "./ui/badge";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

export function About() {
  const toolStack = [
    "Voiceflow", "n8n", "Airtable", "Twilio",
    "Vercel", "Bolt", "Cal.com", "Make"
  ];

  const achievements = [
    "Specialized in trade + local service businesses",
    "San Diego–based, available for local meetings",
    "Systems live within 48–72 hours",
    "Month-to-month retainers, no long-term contracts"
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <FadeIn className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">About</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Built for Trades. <br />
                <span className="text-primary font-extrabold tracking-tight">Powered by AI.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Kratos Intelligence is a San Diego-based AI automation agency focused on one thing — helping trade businesses win more jobs without working more hours. I build the AI systems that capture leads, answer phones, and follow up automatically so you don't have to.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 text-sm md:text-base">
                "Every system I deliver is production-tested, not a demo. AIRMAKERS and LTE Electric are live proof. If you run an HVAC company, electrical business, or plumbing operation in San Diego, I know exactly what you need."
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base font-medium text-foreground/80">{achievement}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-3xl"></div>
            <div className="relative bg-zinc-900 text-white rounded-2xl p-6 md:p-8 border border-zinc-800 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Tools of the Trade</h3>
                <p className="text-zinc-400 text-sm">We build on premium infrastructure for maximum reliability.</p>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {toolStack.map((tool) => (
                  <div key={tool} className="flex items-center space-x-2 py-2 px-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-xs md:text-sm font-medium">{tool}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                <span>Infrastructure Status</span>
                <span className="flex items-center text-green-500">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Optimal
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}