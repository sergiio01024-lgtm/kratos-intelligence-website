import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send data to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@automateflow.com", "support@automateflow.com"],
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Schedule Call"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Innovation Drive", "San Francisco, CA 94105"],
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM PST", "Sat: 10AM-2PM PST"],
      action: "Schedule Meeting"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Get Started Today</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Ready to transform your business with AI automation? Contact our experts for a free consultation 
            and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm">Full Name *</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Company</label>
                  <Input
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Service Interested In</label>
                  <Select onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chatbot">AI Chatbots & Assistants</SelectItem>
                      <SelectItem value="process">Process Automation</SelectItem>
                      <SelectItem value="data">Data Processing & Analysis</SelectItem>
                      <SelectItem value="communication">Communication Automation</SelectItem>
                      <SelectItem value="bi">Business Intelligence</SelectItem>
                      <SelectItem value="custom">Custom AI Solutions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Message *</label>
                  <Textarea
                    placeholder="Tell us about your automation needs..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm">
                      {info.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}