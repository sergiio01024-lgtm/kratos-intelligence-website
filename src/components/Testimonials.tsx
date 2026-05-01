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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from San Diego trade businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index === 0 ? 0 : 0.15}>
              <div className="p-8 rounded-2xl border border-border bg-muted/20 h-full min-h-[200px] flex flex-col">
                <div className="text-5xl text-muted-foreground/30 font-serif leading-none mb-3">"</div>
                <p className="text-sm leading-7 text-muted-foreground mb-4 flex-grow">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${testimonial.avatarClass}`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground leading-tight">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{testimonial.title}</div>
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
