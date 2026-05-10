import { FadeIn } from "./ui/FadeIn";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Sergio built everything fast and it actually works. The phone agent picks up after hours and texts me instantly. I don't miss leads anymore.",
      name: "Luke",
      title: "Owner, LTE Electric",
      initial: "L",
      avatarClass: "bg-green-500/10 text-green-600"
    },
    {
      quote: "We went from no website to a professional online presence in under a week. Exactly what we needed to start getting found online.",
      name: "AIRMAKERS",
      title: "Heating & Air, San Diego",
      initial: "A",
      avatarClass: "bg-blue-500/10 text-blue-600"
    }
  ];

  return (
    <section id="testimonials" className="py-20 dark-section-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">What Clients Say</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real feedback from San Diego trade businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index === 0 ? 0 : 0.15}>
              <div className="p-8 rounded-2xl dark-card border-white/10 h-full min-h-[200px] flex flex-col transition-all duration-300">
                <div className="text-6xl text-[#667eea]/20 font-serif leading-none mb-3">"</div>
                <p className="text-base leading-7 text-white/85 mb-4 flex-grow italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm bg-[#667eea]/20 text-[#a5b4fc] border border-[#667eea]/30">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">{testimonial.name}</div>
                    <div className="text-xs text-white/50 mt-1 font-medium">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

  );
}
