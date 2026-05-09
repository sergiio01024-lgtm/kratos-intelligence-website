import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-accent/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8 z-10 relative">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl tracking-tight font-bold">
              AI Systems for Trade Businesses That Actually Win Jobs
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
              We build AI chatbots, phone agents, and automation workflows that capture leads 24/7 — so HVAC companies, electricians, and plumbers in San Diego stop losing calls to competitors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          <div className="flex items-center justify-center gap-8 pt-8">
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
      </div>
    </section>
  );
}