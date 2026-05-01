import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FadeIn } from "./ui/FadeIn";

export function FAQ() {
  const faqs = [
    {
      question: "Will AI replace my office staff?",
      answer: "No. The systems are designed to handle missed calls, repetitive questions, lead capture, follow-ups, and admin work so your team can focus on booked jobs and customer service.",
    },
    {
      question: "Do I need to understand AI to use this?",
      answer: "No. Everything is built so you use simple tools like forms, texts, dashboards, and your existing workflow. The AI runs in the background.",
    },
    {
      question: "How fast can this be launched?",
      answer: "Most starter systems can be launched in 48 hours to one week depending on the scope, integrations, and how quickly business details are provided.",
    },
    {
      question: "Can this work for HVAC, plumbers, and electricians?",
      answer: "Yes. The system is built around trade business workflows: service requests, emergency calls, quotes, appointment booking, lead follow-up, and CRM tracking.",
    },
    {
      question: "What if I already have a website?",
      answer: "Your current site can be improved or connected to an AI chatbot, phone agent, Airtable CRM, and automated follow-up workflows without rebuilding everything from scratch.",
    },
    {
      question: "What happens after launch?",
      answer: "You get support, performance tracking, and system improvements so the automation keeps capturing leads and reducing missed opportunities.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Questions Trade Businesses Ask Before Automating
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Straight answers for HVAC, electrical, and plumbing companies before booking a free audit.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl border border-border p-4 md:p-8 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-border last:border-0"
                  >
                    <AccordionTrigger className="text-base font-semibold hover:no-underline py-5 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
