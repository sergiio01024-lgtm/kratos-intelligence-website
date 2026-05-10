import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Phone, Mail, MapPin, Send, CheckCircle2, Calendar, MessageSquare } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "./ui/FadeIn";

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  packageInterest: string;
  urgency: string;
  preferredContactMethod: string;
  budgetRange: string;
  message: string;
}

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    packageInterest: 'Not sure yet',
    urgency: 'Just exploring',
    preferredContactMethod: 'Text',
    budgetRange: 'Not sure yet',
    message: ''
  });

  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact-form";
  const isExternalBooking = Boolean(bookingUrl);

  const calculateLeadScore = (data: FormData): 'High' | 'Medium' | 'Low' => {
    const isHigh = 
      data.urgency === "Need this ASAP" || 
      data.urgency === "Already losing leads" || 
      data.packageInterest === "AI-Powered Business System" || 
      data.budgetRange === "$3,000–$6,000" || 
      data.budgetRange === "$6,000+";

    if (isHigh) return 'High';

    const isMedium = 
      data.urgency === "Need this this month" || 
      data.packageInterest === "Trades Starter Pack" || 
      data.packageInterest === "Lead Gen + Outreach Machine" || 
      data.budgetRange === "$1,500–$3,000";

    if (isMedium) return 'Medium';

    return 'Low';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Map hyphenated IDs to camelCase state keys
    const key = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase()) as keyof FormData;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSelectChange = (key: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    const leadScore = calculateLeadScore(formData);
    const payload = {
      ...formData,
      fullName: `${formData.firstName} ${formData.lastName}`,
      leadScore,
      source: "Kratos Intelligence Website",
      submittedAt: new Date().toISOString(),
      pageUrl: window.location.href,
      referrer: document.referrer || "",
      userAgent: navigator.userAgent
    };

    const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL;
    const formspreeUrl = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // Webhook is primary, Formspree is fallback
    try {
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setFormStatus('success');
          return;
        }
        // If webhook fails, attempt Formspree fallback
        console.warn('Webhook submission failed, falling back to Formspree');
      }

      if (formspreeUrl) {
        const response = await fetch(formspreeUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setFormStatus('success');
          return;
        }
      }

      throw new Error('All submission endpoints failed');
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
    }
  };

  if (formStatus === 'success') {
    return (
      <section id="contact" className="py-20 dark-section-gradient border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6 dark-card p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div className="w-20 h-20 bg-[#43e97b]/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#43e97b]" />
            </div>
            <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
            <p className="text-white/60 text-lg">
              Thanks for reaching out. I’ll review your details and follow up within 24 hours. If your request is urgent, call or text me directly at (858) 997-9251.
            </p>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => setFormStatus('idle')}>
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const inputClasses = "h-12 bg-white/5 border-[rgba(102,126,234,0.3)] text-white placeholder:text-white/30 focus-visible:border-[#667eea] focus-visible:ring-[#667eea]/20";
  const selectTriggerClasses = "h-12 bg-white/5 border-[rgba(102,126,234,0.3)] text-white focus-visible:border-[#667eea] focus-visible:ring-[#667eea]/20 data-[placeholder]:text-white/30";

  return (
    <section id="contact" className="py-20 dark-section-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Book Your Free 20-Minute Audit</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Pick a time that works for you. We’ll review your current lead capture, missed-call problem, and what AI system would make the most sense.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Find where leads are being lost",
                  "Review your website, calls, and follow-up process",
                  "Identify the fastest automation win",
                  "Estimate build cost and timeline",
                  "Decide if AI automation is actually worth it for your business"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#667eea]/20 p-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-[#a5b4fc]" />
                    </div>
                    <p className="text-white/80 font-medium">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg hover:shadow-[0_0_20px_rgba(102,126,234,0.4)] transition-all duration-300"
                  asChild
                >
                  <a 
                    href={finalBookingUrl} 
                    target={isExternalBooking ? "_blank" : undefined}
                    rel={isExternalBooking ? "noopener noreferrer" : undefined}
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Free Audit
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                  asChild
                >
                  <a href="tel:8589979251">
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Call or Text Sergio
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Other ways to connect</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Call or Text", value: "(858) 997-9251", href: "tel:8589979251" },
                  { icon: Mail, label: "Email", value: "sergio@kratosintelligence.com", href: "mailto:sergio@kratosintelligence.com" },
                  { icon: MapPin, label: "Location", value: "San Diego, CA", href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-6 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#667eea]/30 transition-all group">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-[#667eea]/50 transition-colors">
                      <item.icon className="w-6 h-6 text-white/70" />
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
          </div>

          <FadeIn>
            <div id="contact-form">
              <Card className="p-8 dark-card border-white/10 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Tell Me About Your Business</h3>
                  <p className="text-white/60 mt-2">The more context you give me, the better I can recommend the right first automation.</p>
                </div>
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
                        className={inputClasses}
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
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/70 text-xs font-bold uppercase tracking-wider">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/70 text-xs font-bold uppercase tracking-wider">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(858) 555-1234" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white/70 text-xs font-bold uppercase tracking-wider">Company Name</Label>
                      <Input 
                        id="company" 
                        placeholder="Example Plumbing Co." 
                        required 
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-white/70 text-xs font-bold uppercase tracking-wider">Industry</Label>
                      <Select value={formData.industry} onValueChange={(val) => handleSelectChange('industry', val)}>
                        <SelectTrigger className={selectTriggerClasses}>
                          <SelectValue placeholder="Select Industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0e27] border-white/10 text-white">
                          <SelectItem value="HVAC">HVAC</SelectItem>
                          <SelectItem value="Electrical">Electrical</SelectItem>
                          <SelectItem value="Plumbing">Plumbing</SelectItem>
                          <SelectItem value="Roofing">Roofing</SelectItem>
                          <SelectItem value="Landscaping">Landscaping</SelectItem>
                          <SelectItem value="General Contractor">General Contractor</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="package-interest" className="text-white/70 text-xs font-bold uppercase tracking-wider">Package Interest</Label>
                      <Select value={formData.packageInterest} onValueChange={(val) => handleSelectChange('packageInterest', val)}>
                        <SelectTrigger className={selectTriggerClasses}>
                          <SelectValue placeholder="Select Package" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0e27] border-white/10 text-white">
                          <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                          <SelectItem value="Trades Starter Pack">Trades Starter Pack</SelectItem>
                          <SelectItem value="AI-Powered Business System">AI-Powered Business System</SelectItem>
                          <SelectItem value="Lead Gen + Outreach Machine">Lead Gen + Outreach Machine</SelectItem>
                          <SelectItem value="Content + Website Bundle">Content + Website Bundle</SelectItem>
                          <SelectItem value="Custom Solution">Custom Solution</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency" className="text-white/70 text-xs font-bold uppercase tracking-wider">Urgency</Label>
                      <Select value={formData.urgency} onValueChange={(val) => handleSelectChange('urgency', val)}>
                        <SelectTrigger className={selectTriggerClasses}>
                          <SelectValue placeholder="Select Urgency" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0e27] border-white/10 text-white">
                          <SelectItem value="Just exploring">Just exploring</SelectItem>
                          <SelectItem value="Need this this month">Need this this month</SelectItem>
                          <SelectItem value="Need this ASAP">Need this ASAP</SelectItem>
                          <SelectItem value="Already losing leads">Already losing leads</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferred-contact-method" className="text-white/70 text-xs font-bold uppercase tracking-wider">Preferred Contact</Label>
                      <Select value={formData.preferredContactMethod} onValueChange={(val) => handleSelectChange('preferredContactMethod', val)}>
                        <SelectTrigger className={selectTriggerClasses}>
                          <SelectValue placeholder="Select Method" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0e27] border-white/10 text-white">
                          <SelectItem value="Text">Text</SelectItem>
                          <SelectItem value="Phone Call">Phone Call</SelectItem>
                          <SelectItem value="Email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget-range" className="text-white/70 text-xs font-bold uppercase tracking-wider">Budget Range</Label>
                      <Select value={formData.budgetRange} onValueChange={(val) => handleSelectChange('budgetRange', val)}>
                        <SelectTrigger className={selectTriggerClasses}>
                          <SelectValue placeholder="Select Budget" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0e27] border-white/10 text-white">
                          <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                          <SelectItem value="Under $1,500">Under $1,500</SelectItem>
                          <SelectItem value="$1,500–$3,000">$1,500–$3,000</SelectItem>
                          <SelectItem value="$3,000–$6,000">$3,000–$6,000</SelectItem>
                          <SelectItem value="$6,000+">$6,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
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
                      className="w-full h-14 text-lg bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg hover:shadow-[0_0_20px_rgba(102,126,234,0.4)] transition-all duration-300 font-black" 
                      size="lg" 
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
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
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}