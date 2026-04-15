import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      company: "TechCorp Solutions",
      industry: "Software Development",
      challenge: "Manual customer support consuming 40+ hours weekly",
      solution: "AI-powered chatbot with escalation workflows",
      results: [
        { icon: TrendingUp, metric: "85%", description: "Reduction in support tickets" },
        { icon: Clock, metric: "2 min", description: "Average response time" },
        { icon: DollarSign, metric: "$50K", description: "Annual cost savings" }
      ],
      image: "https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzkzMzcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      company: "RetailFlow Inc",
      industry: "E-commerce",
      challenge: "Inventory management across 50+ locations",
      solution: "Automated inventory tracking and reorder system",
      results: [
        { icon: TrendingUp, metric: "95%", description: "Inventory accuracy" },
        { icon: Clock, metric: "Real-time", description: "Stock level updates" },
        { icon: DollarSign, metric: "30%", description: "Reduction in overstock" }
      ],
      image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NTc5MzA1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable results through AI automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={study.image}
                  alt={`${study.company} case study`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {study.industry}
                </Badge>
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-medium">{study.company}</h3>
                <p className="text-muted-foreground text-sm">
                  <span className="font-medium">Challenge:</span> {study.challenge}
                </p>
                <p className="text-muted-foreground text-sm">
                  <span className="font-medium">Solution:</span> {study.solution}
                </p>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <result.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                      <div className="text-xs text-muted-foreground">{result.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}