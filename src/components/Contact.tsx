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
    <section id="contact" className="py-20 dark-section-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Let's Talk</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                No pitch. Just a free 20-minute audit to figure out exactly what your business needs.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call or Text", value: "(858) 997-9251", href: "tel:8589979251" },
                { icon: Mail, label: "Email", value: "sergio@kratosintelligence.com", href: "mailto:sergio@kratosintelligence.com" },
                { icon: MapPin, label: "Location", value: "San Diego, CA", href: null },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-6 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#667eea]/30 transition-all group">
                  <div className="w-12 h-12 bg-[linear-gradient(135deg,#667eea,#764ba2)] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-semibold mt-0.5">
                      {item.href ? (
                        <a href={item.href} className="hover:text-[#a5b4fc] transition-colors">{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FadeIn>
            <Card className="p-8 dark-card border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-white/70 text-xs font-bold uppercase tracking-wider">First Name</Label>
                    <Input 
                      id="first-name" 
                      placeholder="John" 
                      required 
                      value={formData.firstName}
                      onChange={handleChange}
                      className="h-12 bg-white/5 border-[rgba(102,126,234,0.3)] text-white placeholder:text-white/30 focus-visible:border-[#667eea] focus-visible:ring-[#667eea]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-white/70 text-xs font-bold uppercase tracking-wider">Last Name</Label>
                    <Input 
                      id="last-name" 
                      placeholder="Doe" 
                      required 
                      value={formData.lastName}
                      onChange={handleChange}
                      className="h-12 bg-white/5 border-[rgba(102,126,234,0.3)] text-white placeholder:text-white/30 focus-visible:border-[#667eea] focus-visible:ring-[#667eea]/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/70 text-xs font-bold uppercase tracking-wider">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 bg-white/5 border-[rgba(102,126,234,0.3)] text-white placeholder:text-white/30 focus-visible:border-[#667eea] focus-visible:ring-[#667eea]/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white/70 text-xs font-bold uppercase tracking-wider">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Example Plumbing Co." 
                    required 
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 bg-white/5 border-[rgba(102,126,234,0.3)] text-white placeholder:text-white/30 focus-visible:border-[#667eea] focus-visible:ring-[#667eea]/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/70 text-xs font-bold uppercase tracking-wider">How can I help?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your business and what systems you're interested in..." 
                    className="min-h-[120px] bg-white/5 border-[rgba(102,126,234,0.3)] text-white placeholder:text-white/30 focus-visible:border-[#667eea] focus-visible:ring-[#667eea]/20"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg hover:shadow-[0_0_20px_rgba(102,126,234,0.4)] transition-all duration-300" 
                    size="lg" 
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      "Sending..."
                    ) : (
                      <>
                        Request Free Audit
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  {formStatus === 'error' && (
                    <p className="text-[#d4183d] text-sm text-center font-bold">
                      Something went wrong. Please call or text Sergio directly at <a href="tel:8589979251" className="underline decoration-[#d4183d]/30 hover:decoration-[#d4183d] transition-all font-black">(858) 997-9251</a>.
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