import { FadeIn } from "./ui/FadeIn";
import { CheckCircle2, Globe, MessageSquare, Phone, Zap, Database } from "lucide-react";

const systems = [
  {
    id: "website",
    title: "AI Website System",
    icon: Globe,
    purpose: "Turn website traffic into qualified leads and booked calls.",
    functions: [
      "Conversion-focused landing pages",
      "Lead capture forms",
      "Service/industry-specific intake flows",
      "Analytics and tracking-ready structure",
      "CTA routing into audit, booking, or CRM"
    ],
    deliverables: [
      "Premium landing page or website section",
      "Lead capture flow",
      "Contact form integration",
      "Booking CTA integration",
      "Mobile-optimized layout"
    ]
  },
  {
    id: "chatbot",
    title: "AI Chatbot System",
    icon: MessageSquare,
    purpose: "Qualify visitors, answer questions, and capture leads 24/7.",
    functions: [
      "FAQ handling",
      "Lead qualification",
      "Service routing",
      "Urgency scoring",
      "Contact info capture",
      "Human handoff"
    ],
    deliverables: [
      "Website chatbot flow",
      "Intake questions",
      "Lead routing logic",
      "CRM/Airtable handoff structure",
      "Testing checklist"
    ]
  },
  {
    id: "phone",
    title: "AI Phone Agent System",
    icon: Phone,
    purpose: "Recover missed calls and handle inbound intake when staff is busy or unavailable.",
    functions: [
      "Answer inbound calls",
      "Collect customer details",
      "Ask service-specific intake questions",
      "Determine urgency",
      "Route or book appointments",
      "Log call summaries"
    ],
    deliverables: [
      "AI receptionist flow",
      "Call intake script",
      "SMS/email notification logic",
      "CRM record structure",
      "Booking handoff"
    ]
  },
  {
    id: "outreach",
    title: "AI Outreach Engine",
    icon: Zap,
    purpose: "Turn old leads, missed estimates, and inactive customers into new opportunities.",
    functions: [
      "Missed lead follow-up",
      "Estimate follow-up",
      "No-show recovery",
      "Reactivation campaigns",
      "SMS/email sequences",
      "Pipeline movement"
    ],
    deliverables: [
      "Campaign logic",
      "Message sequence templates",
      "Lead segmentation rules",
      "CRM status updates",
      "Performance tracking fields"
    ]
  },
  {
    id: "crm",
    title: "CRM / Automation Backend",
    icon: Database,
    purpose: "Create the operational layer that keeps leads, appointments, and follow-ups organized.",
    functions: [
      "Airtable or CRM setup",
      "Lead status tracking",
      "Source tracking",
      "Appointment tracking",
      "Automation triggers",
      "Reporting fields"
    ],
    deliverables: [
      "CRM base/table structure",
      "Automation workflows",
      "Lead routing rules",
      "KPI fields",
      "Admin workflow documentation"
    ]
  }
];

export function SystemShowcase() {
  return (
    <section id="systems" className="py-24 bg-[#05070a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {systems.map((system, index) => (
            <FadeIn key={system.id} delay={0.1}>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Left Side: Title & Purpose */}
                <div className="space-y-8 sticky lg:top-32">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-[#667eea]/10 rounded-2xl flex items-center justify-center">
                      <system.icon className="w-8 h-8 text-[#667eea]" />
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">{system.title}</h2>
                    <div className="space-y-2">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[#667eea] font-black">Purpose</div>
                      <p className="text-white/60 text-xl font-light leading-relaxed">
                        {system.purpose}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Functions & Deliverables */}
                <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 bg-white/[0.02] border border-white/10 p-8 lg:p-12 rounded-[3rem]">
                  <div className="space-y-6">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#667eea]"></div>
                      Core Functions
                    </h4>
                    <ul className="space-y-4">
                      {system.functions.map((fn, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#667eea] mt-0.5 flex-shrink-0" />
                          <span>{fn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#43e97b]"></div>
                      What You Receive
                    </h4>
                    <ul className="space-y-4">
                      {system.deliverables.map((dl, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#43e97b] mt-0.5 flex-shrink-0" />
                          <span>{dl}</span>
                        </li>
                      ))}
                    </ul>
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
