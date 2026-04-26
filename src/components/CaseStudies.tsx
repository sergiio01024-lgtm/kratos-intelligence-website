import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingUp, Globe, CheckCircle, Phone, Zap, Database } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      company: "AIRMAKERS Heating & Air",
      industry: "HVAC",
      challenge: "No website, no online presence, losing leads to competitors with better web visibility",
      solution: "Full business website with contact form, Google Maps embed, and SEO basics — deployed in under a week",
      results: [
        { icon: Globe, metric: "Live in 5 Days", description: "From zero to deployed" },
        { icon: TrendingUp, metric: "100%", description: "Mobile responsive" },
        { icon: CheckCircle, metric: "Active", description: "Used as portfolio proof" }
      ],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
    },
    {
      company: "LTE Electric",
      industry: "Electrician",
      challenge: "Missing after-hours calls and manually following up on every lead — owner doing everything himself",
      solution: "AI chatbot on website + AI phone agent + automated lead scoring, SMS alerts, and Airtable CRM",
      results: [
        { icon: Phone, metric: "24/7", description: "AI answers every call" },
        { icon: Zap, metric: "Instant", description: "SMS alert to owner" },
        { icon: Database, metric: "All leads logged", description: "Auto to Airtable" }
      ],
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 font-bold">Real Results</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Two San Diego businesses already running on Kratos Intelligence systems.
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
                <h3 className="text-xl font-bold">{study.company}</h3>
                <div className="space-y-2 mt-2">
                  <p className="text-muted-foreground text-sm">
                    <span className="font-semibold text-foreground">Challenge:</span> {study.challenge}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <span className="font-semibold text-foreground">Solution:</span> {study.solution}
                  </p>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <result.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-sm font-bold text-primary mb-1 leading-tight">{result.metric}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{result.description}</div>
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