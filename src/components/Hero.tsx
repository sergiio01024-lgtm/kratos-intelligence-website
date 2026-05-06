import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-accent/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10 relative">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl tracking-tight font-bold">
                AI Systems for Trade Businesses That Actually Win Jobs
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl leading-relaxed">
                We build AI chatbots, phone agents, and automation workflows that capture leads 24/7 — so HVAC companies, electricians, and plumbers in San Diego stop losing calls to competitors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <a href="#services">
                  See How It Works
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#case-studies">View Case Studies</a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl text-primary font-bold mb-1">24/7</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">Lead Capture</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl text-primary font-bold mb-1">48hr</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">Average Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl text-primary font-bold mb-1">$0</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">Missed Calls</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="relative bg-zinc-900 text-white p-6 rounded-2xl shadow-2xl border border-zinc-800 w-full max-w-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="text-zinc-400 text-xs font-medium">AI System — Live</span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>

              {/* Section 1: Phone Agent */}
              <div className="mb-4">
                <div className="text-zinc-400 text-[10px] uppercase tracking-wider font-bold mb-2">AI Phone Agent</div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  <span className="text-sm text-white">Active · Answered 3 calls today</span>
                </div>
              </div>

              <div className="border-t border-zinc-800 my-3"></div>

              {/* Section 2: Recent Leads */}
              <div className="mb-4">
                <div className="text-zinc-400 text-[10px] uppercase tracking-wider font-bold mb-2">Recent Leads</div>
                <div className="space-y-2">
                  {[
                    { label: "AC repair booked — Tue 2pm — ~$450", time: "8 min ago" },
                    { label: "Panel upgrade quote requested", time: "1 hr ago" },
                    { label: "Water heater leak — emergency", time: "3 hr ago" },
                  ].map((lead, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm text-white">{lead.label}</span>
                      <span className="text-xs text-zinc-500">{lead.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-800 my-3"></div>

              {/* Section 3: Automations */}
              <div>
                <div className="text-zinc-400 text-[10px] uppercase tracking-wider font-bold mb-2">Automations</div>
                <div className="space-y-2">
                  {[
                    "SMS sent to owner",
                    "Job added to your CRM",
                    "Follow-up scheduled",
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-green-400 w-3.5 h-3.5" />
                      <span className="text-sm text-white">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}