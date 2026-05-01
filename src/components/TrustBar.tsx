import { FadeIn } from "./ui/FadeIn";

export function TrustBar() {
  const stats = [
    "2 Live Client Systems",
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
    <div className="border-t border-b border-border bg-muted/30">
      <FadeIn className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-4 md:gap-3 items-center text-center">
        {/* Stats Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <div key={stat} className="flex items-center gap-3 md:gap-6">
              <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                {stat}
              </span>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-4 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Tool Badges Row */}
        <div className="flex flex-wrap justify-center gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border"
            >
              {tool}
            </span>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
