import { Card, CardContent } from "./ui/card";
import { Search, Lightbulb, Cog, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      description: "We analyze your current processes, identify automation opportunities, and understand your business objectives.",
      details: ["Process mapping", "Pain point identification", "ROI assessment", "Technical feasibility study"]
    },
    {
      icon: Lightbulb,
      title: "Strategy & Design",
      description: "Our experts design a custom automation strategy tailored to your specific needs and business goals.",
      details: ["Solution architecture", "Technology selection", "Implementation roadmap", "Success metrics definition"]
    },
    {
      icon: Cog,
      title: "Development & Integration",
      description: "We build and integrate your AI automation solutions with rigorous testing and quality assurance.",
      details: ["Custom development", "API integrations", "Testing & validation", "Security implementation"]
    },
    {
      icon: Rocket,
      title: "Deployment & Optimization",
      description: "We deploy your solution, provide training, and continuously optimize performance based on real-world usage.",
      details: ["Production deployment", "Team training", "Performance monitoring", "Continuous improvement"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Our Proven Process</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We follow a systematic approach to ensure your AI automation project delivers maximum value 
            and exceeds your expectations every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl text-primary/20 font-bold">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}