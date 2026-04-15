import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { CheckCircle } from "lucide-react";

export function About() {
  const achievements = [
    "5+ years of AI automation expertise",
    "200+ successful implementations",
    "50+ enterprise clients served",
    "99.9% system uptime guarantee"
  ];

  return (
    <section id="about" className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">About AutomateFlow</Badge>
              <h2 className="text-3xl lg:text-4xl">
                Pioneering the Future of <span className="text-primary">Business Automation</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We are a team of AI specialists, software engineers, and business strategists dedicated to 
                transforming how businesses operate through intelligent automation solutions.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Founded in 2019, AutomateFlow has been at the forefront of the AI automation revolution. 
                We combine cutting-edge artificial intelligence with deep business understanding to create 
                solutions that not only automate processes but genuinely transform organizations.
              </p>
              <p className="text-muted-foreground">
                Our approach goes beyond simple task automation. We design intelligent systems that learn, 
                adapt, and evolve with your business, ensuring long-term value and continuous improvement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1531535807748-218331acbcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3OTkzMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our team collaborating on AI solutions"
              className="relative rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}