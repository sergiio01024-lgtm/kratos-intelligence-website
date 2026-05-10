import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import HeroWaveAnimation from './HeroWaveAnimation';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[800px] flex items-center justify-center overflow-hidden py-20 lg:py-32">
      <HeroWaveAnimation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-7xl tracking-tight font-bold text-white">
              AI Systems for Trade Businesses That Actually Win Jobs
            </h1>
            <p className="text-[rgba(255,255,255,0.75)] text-lg lg:text-2xl leading-relaxed max-w-2xl mx-auto">
              We build AI chatbots, phone agents, and automation workflows that capture leads 24/7 — so HVAC companies, electricians, and plumbers in San Diego stop losing calls to competitors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="group h-14 px-8 text-lg bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-[0_0_20px_rgba(102,126,234,0.4)] hover:shadow-[0_0_30px_rgba(102,126,234,0.6)] hover:scale-105 transition-all duration-300" 
              asChild
            >
              <a href="#services">
                See How It Works
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-lg bg-transparent text-white border-[rgba(255,255,255,0.3)] hover:border-white hover:bg-white/5 transition-all duration-300" 
              asChild
            >
              <a href="#case-studies">View Case Studies</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 pt-12">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl text-white font-bold mb-2">24/7</div>
              <div className="text-[rgba(255,255,255,0.6)] text-xs lg:text-sm font-semibold uppercase tracking-[0.2em]">Lead Capture</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl text-white font-bold mb-2">48hr</div>
              <div className="text-[rgba(255,255,255,0.6)] text-xs lg:text-sm font-semibold uppercase tracking-[0.2em]">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl text-white font-bold mb-2">$0</div>
              <div className="text-[rgba(255,255,255,0.6)] text-xs lg:text-sm font-semibold uppercase tracking-[0.2em]">Missed Calls</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
