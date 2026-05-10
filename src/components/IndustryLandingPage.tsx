import { useEffect } from "react";
import { Industry } from "../data/industries";
import { Button } from "./ui/button";
import { FadeIn } from "./ui/FadeIn";
import { 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Zap, 
  Cpu, 
  Calendar,
  ChevronLeft
} from "lucide-react";
import { trackEvent } from "../lib/analytics";

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
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", industry.seoDescription);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://kratosintelligence.com/industries/${industry.slug}/`);
    }

    // Social tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", industry.seoTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", industry.seoDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `https://kratosintelligence.com/industries/${industry.slug}/`);

    window.scrollTo(0, 0);
  }, [industry]);

  const handleCtaClick = (location: string) => {
    trackEvent("industry_page_cta_click", {
      industry: industry.name,
      slug: industry.slug,
      location,
      destination: isExternalBooking ? "booking_url" : "contact_fallback"
    });
  };

  const handleBackToPackages = () => {
    trackEvent("industry_back_to_packages_click", {
      industry: industry.name,
      slug: industry.slug
    });
  };

  return (
    <div className="min-h-screen bg-[#050816]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
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
              <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-2xl mb-12">
                {industry.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="h-16 px-10 text-xl bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-[0_10px_30px_rgba(102,126,234,0.4)] hover:shadow-[0_15px_40px_rgba(102,126,234,0.6)] font-black transition-all group"
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
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-16 px-8 text-lg border-white/20 text-white hover:bg-white/5 transition-all"
                  asChild
                  onClick={handleBackToPackages}
                >
                  <a href="/#packages">
                    <ChevronLeft className="mr-2 w-5 h-5" />
                    Back to Packages
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Where leads are leaking</h2>
            <p className="text-white/60 text-lg">Traditional workflows can't keep up with modern customer expectations.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.painPoints.map((point, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="dark-card p-8 rounded-3xl border-white/10 h-full border hover:border-white/20 transition-all group">
                  <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <p className="text-white/80 font-medium leading-relaxed">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Use Cases */}
      <section className="py-24 dark-section-gradient border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-8">
                What Kratos can automate for {industry.name} businesses
              </h2>
              <div className="space-y-6">
                {industry.automationUseCases.map((useCase, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#43e97b]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-[#43e97b]/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#43e97b]" />
                    </div>
                    <p className="text-white/80 text-lg leading-tight">{useCase}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative">
              <div className="absolute -inset-4 bg-[#667eea]/5 blur-3xl rounded-[3rem]"></div>
              <div className="relative dark-card border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#667eea]/10 rounded-2xl flex items-center justify-center border border-[#667eea]/20">
                    <Cpu className="w-6 h-6 text-[#a5b4fc]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">The {industry.name} System</h3>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-black">Intelligent Logic</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Example Lead</div>
                    <div className="text-white font-medium italic">"{industry.exampleLead}"</div>
                  </div>
                  <div className="p-4 bg-[#43e97b]/5 rounded-2xl border border-[#43e97b]/10">
                    <div className="text-[10px] font-bold text-[#43e97b] uppercase tracking-widest mb-1">AI Action</div>
                    <div className="text-white font-medium">Scoring: <span className="text-[#43e97b]">{industry.urgencyLabel}</span></div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Example workflow</h2>
            <p className="text-white/60 text-lg">From initial contact to organized lead data in seconds.</p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
              <div className="space-y-12">
                {industry.workflowSteps.map((step, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="flex gap-8 items-center relative z-10">
                    <div className="w-12 h-12 bg-[#050816] border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-[#a5b4fc] text-xl shadow-xl">
                      {i + 1}
                    </div>
                    <div className="p-6 dark-card border-white/10 rounded-2xl flex-1 border">
                      <p className="text-white text-lg font-medium">{step}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Package */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#667eea]/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Recommended first build</h2>
            <p className="text-white/60 text-lg">The most effective starting point for {industry.name} automation.</p>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div className="dark-card border-[#667eea]/30 p-8 md:p-12 rounded-[2.5rem] border-2 shadow-[0_0_50px_rgba(102,126,234,0.1)] text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#667eea]/10 border border-[#667eea]/20">
                  <span className="text-sm font-bold text-[#a5b4fc] uppercase tracking-widest">{industry.recommendedPackage}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">{industry.name} Intake Engine</h3>
                  <p className="text-white/60 text-lg">Capture, qualify, and route leads automatically.</p>
                </div>
                <div className="flex justify-center pt-4">
                  <Button 
                    size="lg" 
                    className="h-16 px-12 text-xl bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-[0_10px_30px_rgba(102,126,234,0.4)] hover:shadow-[0_15px_40px_rgba(102,126,234,0.6)] font-black transition-all group w-full sm:w-auto"
                    asChild
                    onClick={() => handleCtaClick("industry_page_package")}
                  >
                    <a 
                      href={finalBookingUrl}
                      target={isExternalBooking ? "_blank" : undefined}
                      rel={isExternalBooking ? "noopener noreferrer" : undefined}
                    >
                      Book Free Audit
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5 bg-[#050816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="dark-card border-white/10 rounded-[3rem] p-12 md:p-20 text-center space-y-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#667eea]/5 blur-[100px] -mr-32 -mt-32"></div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                  Want this built for your {industry.name} business?
                </h2>
                <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                  Book a free audit and I’ll map the first automation I would build for your business.
                </p>
              </div>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="h-18 px-12 text-2xl bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-[0_10px_40px_rgba(102,126,234,0.5)] hover:shadow-[0_15px_50px_rgba(102,126,234,0.7)] font-black transition-all group py-8"
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
    </div>
  );
}
