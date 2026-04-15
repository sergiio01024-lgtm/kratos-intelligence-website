import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  MessageCircle, 
  TrendingUp, 
  Database, 
  Workflow, 
  FileText, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

export function Products() {
  const products = [
    {
      name: "SupportBot Pro",
      category: "Customer Support",
      description: "AI-powered customer support agent that handles inquiries, resolves issues, and escalates complex cases to human agents.",
      image: "https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGN1c3RvbWVyJTIwc3VwcG9ydCUyMGFnZW50fGVufDF8fHx8MTc1ODAxNzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: MessageCircle,
      features: [
        "24/7 multilingual support",
        "Smart ticket routing",
        "Knowledge base integration",
        "Sentiment analysis",
        "Real-time escalation"
      ],
      metrics: [
        { label: "Response Time", value: "< 2 seconds" },
        { label: "Resolution Rate", value: "87%" },
        { label: "Customer Satisfaction", value: "4.8/5" }
      ],
      pricing: "Starting at $299/month",
      popular: true
    },
    {
      name: "SalesAccelerator AI",
      category: "Sales Automation",
      description: "Intelligent sales agent that qualifies leads, schedules meetings, and nurtures prospects through personalized interactions.",
      image: "https://images.unsplash.com/photo-1723905103559-f2af9240200a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGF1dG9tYXRpb24lMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NTgwMTcwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: TrendingUp,
      features: [
        "Lead qualification scoring",
        "Automated follow-ups",
        "Meeting scheduling",
        "CRM integration",
        "Performance analytics"
      ],
      metrics: [
        { label: "Lead Conversion", value: "+45%" },
        { label: "Meeting Show Rate", value: "78%" },
        { label: "Sales Cycle", value: "-30%" }
      ],
      pricing: "Starting at $599/month",
      popular: false
    },
    {
      name: "DataMind Analytics",
      category: "Data Intelligence",
      description: "Advanced AI agent that processes, analyzes, and generates insights from your business data automatically.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1Nzk5MzAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Database,
      features: [
        "Automated data processing",
        "Predictive modeling",
        "Real-time dashboards",
        "Anomaly detection",
        "Custom report generation"
      ],
      metrics: [
        { label: "Data Processing", value: "10x faster" },
        { label: "Accuracy Rate", value: "99.2%" },
        { label: "Insight Generation", value: "Real-time" }
      ],
      pricing: "Starting at $799/month",
      popular: false
    },
    {
      name: "WorkflowMaster",
      category: "Process Automation",
      description: "Comprehensive workflow automation agent that streamlines complex business processes and eliminates manual tasks.",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNTc3OTI2NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Workflow,
      features: [
        "Process automation",
        "API integrations",
        "Approval workflows",
        "Error handling",
        "Performance monitoring"
      ],
      metrics: [
        { label: "Time Savings", value: "75%" },
        { label: "Error Reduction", value: "92%" },
        { label: "Process Efficiency", value: "+160%" }
      ],
      pricing: "Starting at $399/month",
      popular: false
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Our AI Product Suite</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Powerful AI agents and automation tools designed to transform specific areas of your business. 
            Each product is built with enterprise-grade reliability and can be customized to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className={`group overflow-hidden hover:shadow-xl transition-all duration-300 ${product.popular ? 'ring-2 ring-primary/20' : ''}`}>
              {product.popular && (
                <div className="bg-primary text-primary-foreground px-4 py-2 text-center text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-2" />
                  Most Popular
                </div>
              )}
              
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-black">
                  {product.category}
                </Badge>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                    <product.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium">{product.name}</h3>
                </div>
              </div>

              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground">{product.description}</p>

                <div className="space-y-3">
                  <h4 className="font-medium">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border">
                  {product.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-medium text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Pricing</div>
                    <div className="font-medium">{product.pricing}</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm" className="group">
                      Start Trial
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Product Features */}
        <div className="bg-accent/10 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl">Need a Custom AI Solution?</h3>
            <p className="text-muted-foreground text-lg">
              Our products can be fully customized to match your specific business requirements. 
              We also build completely bespoke AI agents for unique use cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Request Custom Solution
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}