import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Process />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}