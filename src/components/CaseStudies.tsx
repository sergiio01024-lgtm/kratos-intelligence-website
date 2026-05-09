import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Globe, TrendingUp, CheckCircle, Phone, Zap, Database } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

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
        { icon: TrendingUp, metric: "47 Leads", description: "Captured (3 mo)" },
        { icon: Zap, metric: "4 Min", description: "Avg Response" },
        { icon: CheckCircle, metric: "12 Jobs", description: "Booked directly" },
        { icon: Phone, metric: "68% Hot", description: "Immediate jobs" },
        { icon: Database, metric: "22% Warm", description: "In follow-up" },
        { icon: Globe, metric: "10% Cold", description: "Logged for later" }
      ],
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800"
    }
  ];

  return (
    <section id="case-studies" className="py-16 md:py-20 dark-section-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 font-bold text-white">Real Results</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Two San Diego businesses already running on Kratos Intelligence systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {caseStudies.map((study, index) => (
            <FadeIn key={index}>
              <Card className="overflow-hidden dark-card border-white/10 h-full transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={`${study.company} case study`}
                    className="w-full h-48 md:h-64 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white inline-flex border-none shadow-lg">
                    {study.industry}
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Challenge</span>
                      <p className="text-white/70 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Solution</span>
                      <p className="text-white/70 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-white/5 pt-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/10 group-hover:border-[#667eea]/30 transition-colors">
                          <result.icon className="w-4 h-4 md:w-6 md:h-6 text-[#667eea]" />
                        </div>
                        <div className="text-sm md:text-base font-bold text-white mb-1 leading-tight">{result.metric}</div>
                        <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.15em] text-white/30">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

  );
}