import { FadeIn } from "./ui/FadeIn";

export function TrustBar() {
  const stats = [
    "Built for HVAC, Electrical & Plumbing",
    "San Diego, CA Based",
    "48hr Average Delivery",
  ];

  const tools = [
    "Voiceflow",
    "n8n",
    "Airtable",
    "Twilio",
    "Vercel",
    "Bolt",
    "Cal.com",
    "Make",
  ];

  return (
    <div className="border-t border-b border-white/10 dark-section-gradient">
      <FadeIn className="max-w-7xl mx-auto px-6 py-6 lg:py-8 flex flex-col gap-6 items-center text-center">
        {/* Stats Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={stat} className="flex items-center gap-4 md:gap-8">
              <span className="text-sm font-semibold text-white/80 uppercase tracking-wider whitespace-nowrap">
                {stat}
              </span>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-5 bg-white/10" />
              )}
            </div>
          ))}
        </div>

        {/* Tool Badges Row */}
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-xs font-medium px-4 py-1.5 rounded-full bg-[rgba(102,126,234,0.1)] text-white border border-[rgba(102,126,234,0.3)] shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </FadeIn>
    </div>

  );
}
