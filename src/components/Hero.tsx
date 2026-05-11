import { Button } from "./ui/button";
import HeroWaveAnimation from './HeroWaveAnimation';

export function Hero() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL || "#contact";

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-20">
      <HeroWaveAnimation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-8xl tracking-tight font-bold text-white leading-[1.1]">
              AI Systems That Turn Leads Into Booked Revenue
            </h1>
            <p className="text-white/80 text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
              Kratos Intelligence builds AI websites, chatbots, phone agents, and outreach engines for service businesses that need faster response times, cleaner lead intake, and more booked appointments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group h-14 px-10 text-lg bg-white text-black hover:bg-white/90 border-none transition-all duration-300 rounded-full font-medium" 
              asChild
            >
              <a href={bookingUrl}>
                Book Free Audit
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-10 text-lg bg-white/5 text-white border-white/20 hover:border-white hover:bg-white/10 transition-all duration-300 rounded-full font-medium" 
              asChild
            >
              <a href="#services">Explore Systems</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator for Tesla feel */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
      </div>
    </section>
  );
}

