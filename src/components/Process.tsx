import { Card, CardContent } from "./ui/card";
import { Search, Lightbulb, Cog, Rocket } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Free Audit Call",
      description: "We spend 20 minutes reviewing your current setup, biggest lead problems, and where you're losing jobs to competitors.",
      details: ["Understand your business", "Identify quick wins", "No pitch, just diagnosis"]
    },
    {
      icon: Lightbulb,
      title: "Custom Proposal",
      description: "I send a plain-English proposal with exactly what I'll build, what it costs, and what results to expect.",
      details: ["Flat-rate pricing", "Clear deliverables", "No surprise fees"]
    },
    {
      icon: Cog,
      title: "Build & Integrate",
      description: "I build your website, chatbot, phone agent, or automation system and connect everything to your existing tools.",
      details: ["48–72 hour build time", "Live testing before handoff", "You approve before launch"]
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "Your system goes live. I monitor performance, fix anything that needs adjusting, and handle the tech so you can focus on jobs.",
      details: ["30 days of support included", "Monthly check-ins on retainer", "Upgrade anytime"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 font-bold">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From first call to live system — most clients are up and running within a week.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-border h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl text-primary/20 font-bold italic">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>

                  <ul className="space-y-1.5 pt-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-muted-foreground font-medium">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/20 to-transparent transform -translate-y-1/2"></div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}