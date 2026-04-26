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
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["kratosai@gmail.com"],
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(619) 000-0000"],
      action: "Schedule Call"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["San Diego, CA", "Serving trade businesses in San Diego County"],
      action: null
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon–Sat: 8AM–8PM PST"],
      action: "Book a Call"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Let's Talk</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            No pitch. Just a free 20-minute audit to figure out exactly what your business needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-zinc-900 text-white rounded-2xl p-8 text-center shadow-xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-4">Prefer to just book a call?</h3>
            <p className="text-zinc-400 mb-6 text-sm">Pick a time that works for you on my calendar.</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all" asChild>
              <a href="#">Open Scheduler</a>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Tell me about your business</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
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
                    <label className="text-sm font-medium">Company Name *</label>
                    <Input
                      placeholder="e.g. Martinez Plumbing"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">What level of help do you need?</label>
                    <Select onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starter">Trades Starter Pack</SelectItem>
                        <SelectItem value="system">AI-Powered Business System</SelectItem>
                        <SelectItem value="leadgen">Lead Gen + Outreach Machine</SelectItem>
                        <SelectItem value="content">Content + Website Bundle</SelectItem>
                        <SelectItem value="website">Website Only</SelectItem>
                        <SelectItem value="custom">Custom / Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      placeholder="What's your biggest business challenge right now?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-none bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-bold text-base">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                    {info.action && (
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                        {info.action}
                      </Button>
                    )}
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