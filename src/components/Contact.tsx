import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "./ui/FadeIn";

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Map hyphenated IDs to camelCase state keys
    const key = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          source: "Kratos Intelligence Website",
          submittedAt: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
    }
  };

  if (formStatus === 'success') {
    return (
      <section id="contact" className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6 bg-white p-12 rounded-3xl border border-border shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold">Message Sent!</h2>
            <p className="text-muted-foreground text-lg">
              Thanks for reaching out. I'll review your details and get back to you within 24 hours.
            </p>
            <Button variant="outline" onClick={() => setFormStatus('idle')}>
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Let's Talk</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                No pitch. Just a free 20-minute audit to figure out exactly what your business needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Call or Text</p>
                  <p className="text-muted-foreground">
                    <a href="tel:8589979251" className="hover:text-primary transition-colors">(858) 997-9251</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">
                    <a href="mailto:sergio@kratosintelligence.com" className="hover:text-primary transition-colors">sergio@kratosintelligence.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">San Diego, CA</p>
                </div>
              </div>
            </div>
          </div>

          <FadeIn>
            <Card className="p-8 shadow-xl border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input 
                      id="first-name" 
                      placeholder="John" 
                      required 
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input 
                      id="last-name" 
                      placeholder="Doe" 
                      required 
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Example Plumbing Co." 
                    required 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can I help?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your business and what systems you're interested in..." 
                    className="min-h-[120px]"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-4">
                  <Button type="submit" className="w-full" size="lg" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? (
                      "Sending..."
                    ) : (
                      <>
                        Request Free Audit
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>

                  {formStatus === 'error' && (
                    <p className="text-destructive text-sm text-center font-medium">
                      Something went wrong. Please call or text Sergio directly at <a href="tel:8589979251" className="underline decoration-destructive/30 hover:decoration-destructive transition-all">(858) 997-9251</a>.
                    </p>
                  )}
                </div>
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}