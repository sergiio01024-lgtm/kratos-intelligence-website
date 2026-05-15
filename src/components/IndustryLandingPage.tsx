import { useEffect } from "react";
import { Industry, industries } from "../data/industries";
import { Button } from "./ui/button";
import { FadeIn } from "./ui/FadeIn";
import {
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Zap,
  Cpu,
  Calendar,
  ChevronLeft,
  MessageCircle,
  TrendingUp,
  Target,
  ArrowUpRight,
  ShieldCheck,
  ListTodo,
  Rocket
} from "lucide-react";
import { trackEvent } from "../lib/analytics";
import { IndustryDemo } from "./IndustryDemo";

interface IndustryLandingPageProps {
  industry: Industry;
}

export function IndustryLandingPage({ industry }: IndustryLandingPageProps) {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  useEffect(() => {
    // Update SEO metadata
    document.title = industry.seoTitle;

    // Helper to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        if (selector.startsWith('meta')) {
          element = document.createElement('meta');
          const [attr, val] = selector.match(/\[(.*)="(.*)"\]/)?.slice(1) || [];
          if (attr && val) element.setAttribute(attr, val);
          document.head.appendChild(element);
        } else if (selector.startsWith('link')) {
          element = document.createElement('link');
          element.setAttribute('rel', 'canonical');
          document.head.appendChild(element);
        }
      }
      if (element) element.setAttribute(attribute, content);
    };

    updateMetaTag('meta[name="description"]', "content", industry.seoDescription);
    updateMetaTag('link[rel="canonical"]', "href", `https://kratosintelligence.com/industries/${industry.slug}/`);

    // Open Graph
    updateMetaTag('meta[property="og:title"]', "content", industry.seoTitle);
    updateMetaTag('meta[property="og:description"]', "content", industry.seoDescription);
    updateMetaTag('meta[property="og:url"]', "content", `https://kratosintelligence.com/industries/${industry.slug}/`);
    updateMetaTag('meta[property="og:type"]', "content", "website");

    // Twitter
    updateMetaTag('meta[name="twitter:title"]', "content", industry.seoTitle);
    updateMetaTag('meta[name="twitter:description"]', "content", industry.seoDescription);
    updateMetaTag('meta[name="twitter:url"]', "content", `https://kratosintelligence.com/industries/${industry.slug}/`);
    updateMetaTag('meta[name="twitter:card"]', "content", "summary_large_image");

    // JSON-LD Injection
    const injectJsonLd = (id: string, data: object) => {
      let script = document.getElementById(id);
      if (script) script.remove();

      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Service Schema
    injectJsonLd('industry-json-ld', {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": industry.seoTitle,
      "description": industry.seoDescription,
      "provider": {
        "@type": "ProfessionalService",
        "name": "Kratos Intelligence",
        "url": "https://kratosintelligence.com",
        "telephone": "+1-858-997-9251"
      },
      "areaServed": {
        "@type": "State",
        "name": "San Diego County"
      },
      "serviceType": `${industry.name} AI Automation`,
      "url": `https://kratosintelligence.com/industries/${industry.slug}/`
    });

    // FAQ Schema
    if (industry.commonQuestions && industry.commonQuestions.length > 0) {
      injectJsonLd('industry-faq-json-ld', {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": industry.commonQuestions.map(q => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      });
    }

    window.scrollTo(0, 0);

    return () => {
      // Cleanup JSON-LD on unmount
      document.getElementById('industry-json-ld')?.remove();
      document.getElementById('industry-faq-json-ld')?.remove();
    };
  }, [industry]);

  const handleCtaClick = (location: string) => {
    trackEvent("industry_page_cta_click", {
      industry: industry.name,
      slug: industry.slug,
      location,
      destination: isExternalBooking ? "booking_url" : "contact_fallback"
    });
  };

  const handleReturnToPreviousSection = () => {
    trackEvent("return_to_previous_section_click", {
      industry: industry.name,
      slug: industry.slug,
      destination: "homepage_restore"
    });
  };

  const handleViewAllIndustries = () => {
    trackEvent("view_all_industries_click", {
      industry: industry.name,
      slug: industry.slug,
      location: "industry_page_hero"
    });
  };

  const handleRelatedIndustryClick = (related: Industry) => {
    trackEvent("related_industry_click", {
      from_industry: industry.name,
      from_slug: industry.slug,
      to_industry: related.name,
      to_slug: related.slug
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Industry Hero Section */}
      <section id="industry-hero" className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#667eea]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#764ba2]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#667eea]/10 border border-[#667eea]/20 mb-8">
                <Zap className="w-4 h-4 text-[#a5b4fc]" />
                <span className="text-xs font-bold text-[#a5b4fc] uppercase tracking-widest">{industry.eyebrow}</span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tight leading-none mb-8">
                {industry.headline}
              </h1>
              <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-2xl mb-12 font-light">
                {industry.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Button
                  size="lg"
                  className="h-16 px-10 text-xl bg-white text-black hover:bg-white/90 border-none shadow-[0_10px_30px_rgba(255,255,255,0.1)] font-bold rounded-full transition-all group w-full sm:w-auto"
                  asChild
                  onClick={() => handleCtaClick("industry_page_hero")}
                >
                  <a
                    href={finalBookingUrl}
                    target={isExternalBooking ? "_blank" : undefined}
                    rel={isExternalBooking ? "noopener noreferrer" : undefined}
                  >
                    <Calendar className="mr-3 w-6 h-6" />
                    Book Free Audit
                  </a>
                </Button>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-16 px-8 text-lg border-white/10 text-white hover:bg-white/5 rounded-full transition-all w-full sm:w-auto font-bold"
                    asChild
                    onClick={handleReturnToPreviousSection}
                  >
                    <a href="/#restore-scroll">
                      <ChevronLeft className="mr-2 w-5 h-5" />
                      Back to Previous Section
                    </a>
                  </Button>
                  <a
                    href="/#industries"
                    className="text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                    onClick={handleViewAllIndustries}
                  >
                    View All Industries
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* High-Value Leads Section */}
      <section id="industry-leads" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">High-Value {industry.name} Leads</h2>
            <p className="text-white/60 text-lg font-light italic">"Stop losing these high-ticket opportunities to missed calls and slow follow-up."</p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4">
            {industry.highValueLeadTypes.map((leadType, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/[0.02] px-8 py-5 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-[#43e97b]/30 transition-all group">
                  <div className="w-2.5 h-2.5 bg-[#43e97b] rounded-full shadow-[0_0_15px_#43e97b] group-hover:scale-125 transition-transform"></div>
                  <span className="text-white text-lg font-bold tracking-tight">{leadType}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Leak Section */}
      <section id="industry-leaks" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Where {industry.name} Leads Are Leaking
              </h2>
              <p className="text-white/60 text-xl font-light leading-relaxed mb-10">
                Traditional workflows can't keep up with modern customer expectations. Every minute of delay is a lost job to your competitor.
              </p>

              <div className="grid sm:grid-cols-1 gap-6">
                {industry.revenueLeaks.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-red-500/[0.03] border border-red-500/10 rounded-2xl group hover:bg-red-500/[0.05] transition-all">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    </div>
                    <p className="text-white/80 font-medium leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="dark-card border-white/5 p-10 rounded-[3rem] bg-white/[0.02] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <TrendingUp className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">The Opportunity Cost</div>
                    <h3 className="text-4xl font-bold text-white">Missing 1 Job Per Week</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-4 border-b border-white/5">
                      <span className="text-white/60">Lead Source</span>
                      <span className="text-white font-bold">Inbound Call</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-white/5">
                      <span className="text-white/60">Status</span>
                      <span className="text-red-400 font-bold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Missed / Voicemail
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-white/5">
                      <span className="text-white/60">Avg. Revenue Loss</span>
                      <span className="text-white font-black text-xl">$500 – $2,500+</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button
                      className="w-full h-14 bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 rounded-full font-bold"
                      asChild
                    >
                      <a href={finalBookingUrl}>Plug the Leak Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Recommended Systems Section */}
      <section id="industry-automation" className="py-24 bg-[#05070a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight">AI Systems for {industry.name}</h2>
            <p className="text-white/60 text-xl font-light">We build the infrastructure that captures, qualifies, and routes your demand.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.recommendedSystems.map((system, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="dark-card p-8 rounded-[2rem] border-white/10 h-full border bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                  <div className="w-12 h-12 bg-[#667eea]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#667eea]/20 group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6 text-[#a5b4fc]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{system}</h3>
                  <div className="flex items-center gap-2 text-[#43e97b] text-xs font-bold uppercase tracking-widest">
                    <Zap className="w-3 h-3" />
                    Ready to Deploy
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Workflow Section */}
      <section id="industry-workflow" className="py-24 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="space-y-8">
              <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                The {industry.name} AI Operating System
              </h2>
              <p className="text-white/60 text-xl font-light leading-relaxed">
                We don't just add a "bot." We rebuild the entire path from first contact to a confirmed job in your CRM.
              </p>

              <div className="space-y-4">
                {industry.workflowSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-black text-white group-hover:bg-[#667eea] group-hover:border-[#667eea] transition-all">
                      {i + 1}
                    </div>
                    <p className="text-white/80 font-medium">{step}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  className="h-14 px-10 bg-white text-black hover:bg-white/90 rounded-full font-bold transition-all shadow-xl"
                  asChild
                >
                  <a href={finalBookingUrl}>Book Free Audit</a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative hidden lg:block">
              <div className="aspect-square bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-[4rem] border border-white/5 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="relative z-10 text-center space-y-6">
                  <ShieldCheck className="w-24 h-24 text-[#667eea] mx-auto opacity-50" />
                  <div className="text-white font-bold text-2xl tracking-tight italic uppercase opacity-30">Production Grade</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Industry Demo Preview Section */}
      <IndustryDemo industry={industry} />

      {/* Intake Questions Section */}
      <section className="py-24 border-t border-white/5 bg-[#05070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight">Intake Questions We Automate</h2>
            <p className="text-white/60 text-xl font-light">Stop asking the same repetitive questions. Let AI do the data entry.</p>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {industry.intakeQuestions.map((question, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-white/[0.04] transition-all">
                    <span className="text-white/80 font-medium">{question}</span>
                    <CheckCircle2 className="w-5 h-5 text-[#43e97b] opacity-50" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sprint Recommendation Section */}
      <section id="industry-recommendation" className="py-24 border-t border-white/5 bg-background relative overflow-hidden">
        <div id="industry-sprint" className="absolute top-0 left-0 w-0 h-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-[3rem] p-12 md:p-20 text-center space-y-10 shadow-[0_0_80px_rgba(102,126,234,0.2)]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20">
                <Rocket className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Recommended First Step</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none">
                Start With the <br />7-Day AI Sprint
              </h2>
              <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
                {industry.sprintRecommendation}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="h-16 px-12 text-xl bg-white text-black hover:bg-white/90 rounded-full font-black shadow-2xl transition-all"
                asChild
                onClick={() => handleCtaClick("industry_sprint_recommendation")}
              >
                <a href="/#contact-form">Start the 7-Day Sprint</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-12 text-xl border-white/20 text-white hover:bg-white/10 rounded-full font-bold transition-all"
                asChild
                onClick={() => handleCtaClick("industry_audit_recommendation")}
              >
                <a href={finalBookingUrl}>Book Free Audit</a>
              </Button>
            </div>

            <p className="text-white/40 text-sm font-black uppercase tracking-[0.3em]">$900 Fixed Build fee • One Workflow • 7 Days</p>
          </div>
        </div>
      </section>

      {/* Industry FAQ Section */}
      <section id="industry-faq" className="py-24 border-t border-white/5 bg-[#05070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Common Questions for <br />{industry.name} Businesses
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industry.commonQuestions.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="dark-card p-10 rounded-[2.5rem] border-white/5 border h-full flex flex-col gap-6 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                  <div className="w-12 h-12 bg-[#667eea]/10 rounded-2xl flex items-center justify-center border border-[#667eea]/20">
                    <MessageCircle className="w-6 h-6 text-[#a5b4fc]" />
                  </div>
                  <h3 className="text-white font-bold text-2xl tracking-tight">{item.question}</h3>
                  <p className="text-white/60 leading-relaxed text-lg font-light">{item.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
      <section id="related-industries" className="py-24 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight">Related Industries</h2>
            <p className="text-white/60 text-xl font-light">Explore AI automation for similar service sectors.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.relatedIndustries.map(slug => {
              const related = industries.find(ind => ind.slug === slug);
              if (!related) return null;
              return (
                <FadeIn key={slug}>
                  <a
                    href={`/industries/${slug}/`}
                    onClick={() => handleRelatedIndustryClick(related)}
                    className="block dark-card p-8 rounded-[2rem] border border-white/5 hover:border-[#667eea]/40 transition-all group bg-white/[0.01]"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#667eea] transition-colors">{related.name}</h3>
                      <ArrowUpRight className="w-6 h-6 text-white/10 group-hover:text-[#667eea] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-white/40 text-sm line-clamp-2 font-light">{related.subheadline}</p>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Final CTA Section */}
      <section id="industry-final-cta" className="py-24 border-t border-white/5 bg-[#05070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="dark-card border-white/10 rounded-[3rem] p-12 md:p-24 text-center space-y-12 bg-white/[0.01] relative overflow-hidden shadow-2xl">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none">
                  Ready to Automate <br />Your {industry.name} Flow?
                </h2>
                <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                  Book a free 20-minute audit and I’ll show you exactly which AI system will drive the fastest ROI for your business.
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="h-20 px-16 text-2xl bg-white text-black hover:bg-white/90 rounded-full font-bold shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all group"
                  asChild
                  onClick={() => handleCtaClick("industry_page_bottom")}
                >
                  <a
                    href={finalBookingUrl}
                    target={isExternalBooking ? "_blank" : undefined}
                    rel={isExternalBooking ? "noopener noreferrer" : undefined}
                  >
                    Book Free Audit
                    <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact anchor for accessibility */}
      <div id="contact" className="h-0 w-0 pointer-events-none" aria-hidden="true"></div>
    </div>
  );
}

