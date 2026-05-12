import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { SystemShowcase } from "./components/SystemShowcase";
import { SystemStack } from "./components/SystemStack";
import { Deliverables } from "./components/Deliverables";
import { BuyerClarity } from "./components/BuyerClarity";
import { Outcome } from "./components/Outcome";
import { TechStack } from "./components/TechStack";
import { FinalCTA } from "./components/FinalCTA";
import { TrustBar } from "./components/TrustBar";
import { Packages } from "./components/Packages";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { CaseStudies } from "./components/CaseStudies";
import { ServiceArea } from "./components/ServiceArea";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { FloatingCTA } from "./components/FloatingCTA";
import { Footer } from "./components/Footer";
import { IndustryLandingPage } from "./components/IndustryLandingPage";
import { IndustryLandingPages } from "./components/IndustryLandingPages";
import { industries } from "./data/industries";
import { restoreHomepageScrollPosition } from "./lib/scrollMemory";
import { ScrollControls } from "./components/ScrollControls";
import { QuickAuditCTA } from "./components/QuickAuditCTA";

import PhoneServicesCarousel from "./components/PhoneServicesCarousel";
import FounderSection from './components/FounderSection';
import { MissedCallCalculator } from "./components/MissedCallCalculator";
import { AIDemoSection } from "./components/AIDemoSection";

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, "");
  const industrySlug = pathname.startsWith("/industries/")
    ? pathname.replace("/industries/", "")
    : null;

  const industry = industries.find((item) => item.slug === industrySlug);

  useEffect(() => {
    if (!industry && window.location.hash === "#restore-scroll") {
      restoreHomepageScrollPosition("#industries");
      // Clean the hash without triggering another scroll or reload
      history.replaceState(null, "", "/");
    }
  }, [industry]);

  if (industry) {
    return (
      <div id="top" className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <IndustryLandingPage industry={industry} />
          <Contact />
          <FAQ />
        </main>
        <Footer />
        <FloatingCTA />
        <ScrollControls />
      </div>
    );
  }

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <QuickAuditCTA />
        <Services />
        <SystemStack />
        <PhoneServicesCarousel />
        <Outcome />
        <SystemShowcase />
        <AIDemoSection />
        <MissedCallCalculator />
        <Process />
        <IndustryLandingPages />
        <Packages />
        <Deliverables />
        <TechStack />
        <BuyerClarity />
        <CaseStudies />
        <FounderSection />
        <About />
        <TrustBar />
        <ServiceArea />
        <Testimonials />
        <FinalCTA />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollControls />
    </div>
  );
}

