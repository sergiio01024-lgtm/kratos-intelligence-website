import { FadeIn } from "./ui/FadeIn";

export function MissedCalls() {
  const stats = [
    { value: "8–12", label: "calls/week the average trade business misses" },
    { value: "$400", label: "average job value lost per missed call" },
    { value: "$15–20K", label: "monthly revenue walking away" },
  ];

  return (
    <section className="bg-zinc-900 text-white py-12 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col space-y-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-center">
              The Cost of Missed Calls
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-2">
                  <span className="text-4xl lg:text-5xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="text-zinc-400 text-sm lg:text-base max-w-[200px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-lg lg:text-xl font-medium text-zinc-300 pt-4">
              We build the systems that capture every one.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
