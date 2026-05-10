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
import { trackEvent } from "../lib/analytics";

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
    
    // Track safe select changes
    if (['industry', 'packageInterest', 'urgency', 'budgetRange'].includes(key)) {
      trackEvent("contact_form_select_change", {
        field: key,
        value,
        location: "contact_form"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    trackEvent("contact_form_submit_attempt", {
      industry: formData.industry,
      package_interest: formData.packageInterest,
      urgency: formData.urgency,
      preferred_contact_method: formData.preferredContactMethod,
      budget_range: formData.budgetRange,
      lead_score: calculateLeadScore(formData)
    });

    const leadScore = calculateLeadScore(formData);
    const payload = {
      ...formData,
      fullName: `${formData.firstName} ${formData.lastName}`,
      leadScore,
      source: "Kratos Intelligence Website",
      submittedAt: new Date().toISOString(),
      pageUrl: window.location.href,
      referrer: document.referrer || "",
      userAgent: navigator.userAgent,
      leadSourceContext: {
        currentPath: window.location.pathname,
        currentHash: window.location.hash,
        pageTitle: document.title
      }
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
          trackEvent("contact_form_submit_success", {
            endpoint_used: "webhook",
            lead_score,
            industry: formData.industry,
            package_interest: formData.packageInterest,
            urgency: formData.urgency
          });
          return;
        }
        // If webhook fails, attempt Formspree fallback
        if (import.meta.env.DEV) {
          console.warn('Webhook submission failed, falling back to Formspree');
        }
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
          trackEvent("contact_form_submit_success", {
            endpoint_used: "formspree",
            lead_score,
            industry: formData.industry,
            package_interest: formData.packageInterest,
            urgency: formData.urgency
          });
          return;
        }
      }

      throw new Error('All submission endpoints failed');
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Submission error:', error);
      }
      setFormStatus('error');
      trackEvent("contact_form_submit_error", {
        webhook_configured: Boolean(webhookUrl),
        formspree_configured: Boolean(formspreeUrl)
      });
    }
  };

  if (formStatus === 'success') {
    return (
      <section id="contact" className="py-20 dark-section-gradient border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8 dark-card p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div className="w-20 h-20 bg-[#43e97b]/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#43e97b]" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
              <p className="text-white/60 text-lg">
                Thanks for reaching out. I’ll review your details and follow up within 24 hours.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Button 
                className="h-16 bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg font-black" 
                asChild
                onClick={() => trackEvent("book_audit_click", { location: "contact_success_state", destination: isExternalBooking ? "booking_url" : "contact_fallback" })}
              >
                <a 
                  href={finalBookingUrl}
                  target={isExternalBooking ? "_blank" : undefined}
                  rel={isExternalBooking ? "noopener noreferrer" : undefined}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book a Time Now
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="h-16 border-white/20 text-white hover:bg-white/10 font-black"
                asChild
                onClick={() => trackEvent("phone_click", { location: "contact_success_state", phone: "8589979251" })}
              >
                <a href="tel:8589979251">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Call or Text Sergio
                </a>
              </Button>
            </div>

            <button 
              className="text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest" 
              onClick={() => setFormStatus('idle')}
            >
              Back to Form
            </button>
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
                <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight">Request Your Free 20-Minute Audit</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  The more context you give me, the better I can recommend the right first automation.
                </p>
              </div>

              <div className="space-y-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#667eea]" />
                  What happens next
                </h4>
                <div className="space-y-3">
                  {[
                    "I review your website and lead flow",
                    "I identify the biggest lead leak",
                    "You get a clear first-build recommendation"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#667eea]/20 flex items-center justify-center text-[10px] font-bold text-[#a5b4fc]">
                        {i + 1}
                      </div>
                      <p className="text-white/80 font-medium text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg hover:shadow-[0_0_20px_rgba(102,126,234,0.4)] transition-all duration-300"
                  asChild
                  onClick={() => trackEvent("book_audit_click", { location: "contact_booking_block", destination: isExternalBooking ? "booking_url" : "contact_fallback" })}
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
                  onClick={() => trackEvent("phone_click", { location: "contact_booking_block", phone: "8589979251" })}
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
                          <a 
                            href={item.href} 
                            className="hover:text-[#a5b4fc] transition-colors"
                            onClick={() => {
                              if (item.label === "Call or Text") {
                                trackEvent("phone_click", { location: "contact_card", phone: "8589979251" });
                              } else if (item.label === "Email") {
                                trackEvent("email_click", { location: "contact_card", email_domain: "kratosintelligence.com" });
                              }
                            }}
                          >
                            {item.value}
                          </a>
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
                <div className="mb-8 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#667eea]/10 border border-[#667eea]/20">
                    <span className="text-[10px] font-black text-[#a5b4fc] uppercase tracking-widest italic">Takes about 60 seconds</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Tell Me About Your Business</h3>
                  <p className="text-white/60 text-sm">Your answers help me recommend the right first automation.</p>
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
                          <SelectItem value="Garage Door">Garage Door</SelectItem>
                          <SelectItem value="Pest Control">Pest Control</SelectItem>
                          <SelectItem value="Pool Service">Pool Service</SelectItem>
                          <SelectItem value="Junk Removal">Junk Removal</SelectItem>
                          <SelectItem value="Restoration / Water Damage">Restoration / Water Damage</SelectItem>
                          <SelectItem value="Cleaning Companies">Cleaning Companies</SelectItem>
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
                      <Label htmlFor="budget-range" className="text-white/70 text-xs font-bold uppercase tracking-wider">Budget Range (Optional)</Label>
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
                        "Sending Request..."
                      ) : (
                        <>
                          Request Free Audit
                          <Calendar className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                    
                    <p className="text-[10px] text-white/40 text-center font-bold uppercase tracking-[0.2em]">
                      Your info is only used to follow up about your automation audit.
                    </p>

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