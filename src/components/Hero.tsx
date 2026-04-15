import { Button } from "./ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Zap className="w-4 h-4" />
                <span>AI-Powered Automation</span>
              </div>
              <h1 className="text-4xl lg:text-6xl tracking-tight">
                Transform Your Business with{" "}
                <span className="text-primary">AI Automation</span>
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl">
                Scale your operations, reduce costs, and increase efficiency with our custom AI automation solutions. 
                We help businesses automate repetitive tasks and streamline complex workflows.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Your Automation Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl text-primary mb-1">500+</div>
                <div className="text-muted-foreground text-sm">Processes Automated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl text-primary mb-1">85%</div>
                <div className="text-muted-foreground text-sm">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl text-primary mb-1">24/7</div>
                <div className="text-muted-foreground text-sm">Automated Operations</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-3"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYXV0b21hdGlvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODAxNjc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Automation Dashboard"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}