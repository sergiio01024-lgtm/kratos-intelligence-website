import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  CheckCircle,
  ArrowRight,
  Star,
  Zap
} from "lucide-react";

import { FadeIn } from "./ui/FadeIn";

export function Packages() {
  const packages = [
    {
      name: "Trades Starter Pack",
      price: "$1,500 – $3,000 + $200–400/mo",
      description: "Everything a trade business needs to capture and convert leads online. Website + AI chatbot + automated follow-up.",
      features: [
        "5–7 page business website",
        "Embedded AI chatbot (Voiceflow)",
        "Lead follow-up SMS automation",
        "Airtable lead database",
        "30 days of support"
      ],
      popular: true,
      badge: "Most Popular"
    },
    {
      name: "AI-Powered Business System",
      price: "$3,000 – $6,000 + $500–900/mo",
      description: "The full done-for-you AI stack. Website, chatbot, phone agent, booking, reviews, and monthly reporting.",
      features: [
        "Everything in Starter Pack",
        "AI phone receptionist (24/7)",
        "Automated booking via Cal.com",
        "Review generation system",
        "Monthly performance report"
      ],
      popular: false
    },
    {
      name: "Lead Gen + Outreach Machine",
      price: "$1,000 – $2,000 + $600–1,200/mo",
      description: "Targeted lead list building plus managed cold email outreach. A predictable pipeline of new prospects every month.",
      features: [
        "Google Maps lead scraping",
        "Verified + cleaned contact data",
        "Personalized email sequences",
        "Monthly results report",
        "Airtable lead tracking"
      ],
      popular: false
    },
    {
      name: "Content + Website Bundle",
      price: "$2,000 – $4,000 + $500–800/mo",
      description: "A premium website plus ongoing AI-generated content to keep your brand active every month.",
      features: [
        "High-end Figma-designed website",
        "8–16 AI content pieces/month",
        "Short video ads for social",
        "Branded graphics",
        "Monthly delivery"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 text-primary font-bold">Packages</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Bundled services designed for trade businesses. Pick the level that fits where you are — upgrade anytime.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className={`group relative w-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border ${pkg.popular ? 'ring-2 ring-primary border-primary/20' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-primary-foreground inline-flex text-xs">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="text-sm md:text-lg font-bold text-primary mt-2">{pkg.price}</div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{pkg.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground/70">What's Included</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full group" size="lg" asChild>
                      <a href="#contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Audit CTA Block */}
        <div className="bg-zinc-900 text-white rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-3xl mx-auto relative z-10 space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10">
                <Zap className="w-8 h-8 text-primary shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
              </div>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">Need a Custom Solution?</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Not sure which package fits? Book a free 20-minute audit call and I'll tell you exactly what your business needs.
            </p>
            <div className="flex justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8" asChild>
                <a href="#contact">Book Free Audit</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
