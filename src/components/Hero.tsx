import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
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

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="relative bg-zinc-900 text-white p-8 rounded-2xl shadow-2xl border border-zinc-800 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="text-sm font-medium text-zinc-400">Live Dashboard</div>
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-zinc-800/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">AI Phone Agent — Active</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-zinc-800/50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Lead captured — Martinez HVAC — 2 min ago</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-zinc-800/50 rounded-lg">
                  <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                  <span className="text-sm">SMS sent to owner — Delivered</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-primary rounded-full"></div>
                </div>
                <div className="mt-2 text-[10px] text-zinc-500 uppercase tracking-widest text-right font-medium">System Performance: 98.4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}