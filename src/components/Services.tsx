import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Globe, MessageCircle, Phone, Workflow, Users, Video } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Websites & Landing Pages",
      description: "Mobile-first business websites built fast and deployed on Vercel. Your professional web presence live in days, not weeks.",
      features: ["5–7 page responsive site", "Contact form + Google Maps", "SEO basics included"],
      colorClass: "text-blue-500",
      bgClass: "bg-blue-500/10",
      borderClass: "border-t-blue-500"
    },
    {
      icon: MessageCircle,
      title: "AI Chatbots",
      description: "An AI assistant embedded on your website that answers questions, captures leads, and books appointments around the clock.",
      features: ["Trained on your services + FAQs", "Lead capture to Airtable", "Cal.com booking integration"],
      colorClass: "text-violet-500",
      bgClass: "bg-violet-500/10",
      borderClass: "border-t-violet-500"
    },
    {
      icon: Phone,
      title: "AI Phone Receptionist",
      description: "An AI agent that answers inbound calls 24/7, qualifies callers, books jobs, and texts the owner instantly.",
      features: ["Answers after-hours calls", "Books appointments automatically", "Owner SMS alert on every lead"],
      colorClass: "text-green-500",
      bgClass: "bg-green-500/10",
      borderClass: "border-t-green-500"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Connect your lead forms, CRM, and messaging into one automated pipeline. No manual follow-up needed.",
      features: ["Lead scoring + SMS follow-up", "Airtable CRM integration", "Review generation after job close"],
      colorClass: "text-orange-500",
      bgClass: "bg-orange-500/10",
      borderClass: "border-t-orange-500"
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Targeted lead lists and cold outreach campaigns built for your niche and city.",
      features: ["Google Maps scraping by trade + city", "Verified contact data", "Managed cold email sequences"],
      colorClass: "text-rose-500",
      bgClass: "bg-rose-500/10",
      borderClass: "border-t-rose-500"
    },
    {
      icon: Video,
      title: "AI Video & Content",
      description: "Short video ads and monthly social content created with AI. Professional-quality visuals at a fraction of traditional cost.",
      features: ["15–60 second video ads", "Monthly content packages", "Branded graphics + captions"],
      colorClass: "text-cyan-500",
      bgClass: "bg-cyan-500/10",
      borderClass: "border-t-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">What We Build</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Every service is designed for trade and local service businesses — fast to deploy, built to convert.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <Card 
                className={`transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default border-t-2 ${service.borderClass}`}
              >
                <CardHeader>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${service.bgClass}`}>
                    <service.icon className={`w-5 h-5 ${service.colorClass}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}