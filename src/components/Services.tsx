import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Bot, Workflow, Database, MessageSquare, BarChart3, Settings } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbots & Assistants",
      description: "Deploy intelligent chatbots that handle customer inquiries, lead qualification, and support tickets 24/7.",
      features: ["Natural Language Processing", "Multi-platform Integration", "Custom Training"]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Automate repetitive business processes, from data entry to document processing and approvals.",
      features: ["Workflow Design", "API Integrations", "Error Handling"]
    },
    {
      icon: Database,
      title: "Data Processing & Analysis",
      description: "Transform raw data into actionable insights with automated data collection, cleaning, and analysis.",
      features: ["Data Mining", "Predictive Analytics", "Real-time Processing"]
    },
    {
      icon: MessageSquare,
      title: "Communication Automation",
      description: "Streamline internal and external communications with automated emails, notifications, and follow-ups.",
      features: ["Email Sequences", "SMS Automation", "Slack Integration"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Generate automated reports and dashboards that provide real-time insights into your business performance.",
      features: ["Custom Dashboards", "Automated Reports", "KPI Tracking"]
    },
    {
      icon: Settings,
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed specifically for your unique business requirements and challenges.",
      features: ["Bespoke Development", "Machine Learning", "AI Model Training"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Our AI Automation Services</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We provide comprehensive AI automation solutions that transform how your business operates, 
            from simple task automation to complex intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
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
          ))}
        </div>
      </div>
    </section>
  );
}