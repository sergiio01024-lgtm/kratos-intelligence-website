import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MissedCalls } from "./components/MissedCalls";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { Packages } from "./components/Packages";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { CaseStudies } from "./components/CaseStudies";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { FloatingCTA } from "./components/FloatingCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <MissedCalls />
        <TrustBar />
        <Services />
        <Packages />
        <About />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}