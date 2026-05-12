import { useState } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  CheckCircle2, 
  MessageSquare, 
  User, 
  Bot, 
  ArrowRight, 
  Calendar, 
  Zap, 
  ShieldCheck,
  Layout,
  Database,
  Activity
} from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { trackEvent } from "../lib/analytics";
import { WorkflowVisualizer } from "./WorkflowVisualizer";

export function AIDemoSection() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  const demoConversation = [
    { role: 'customer', text: "My AC stopped working. Do you service San Diego?" },
    { role: 'ai', text: "Yes. I can help collect the details so your team can respond faster. Is this an urgent repair, maintenance request, or replacement estimate?" },
    { role: 'customer', text: "Urgent repair. It stopped cooling today." },
    { role: 'ai', text: "Got it. What ZIP code are you in, and is the system currently running at all?" },
    { role: 'customer', text: "92101. It turns on but only blows warm air." },
    { role: 'ai', text: "Thanks. I’ll mark this as urgent cooling repair and route it for same-day callback or booking." },
  ];

  return (
    <section id="demo" className="py-24 bg-background border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight">See the System Work</h2>
          <p className="text-white/60 text-xl font-light max-w-3xl mx-auto leading-relaxed">
            From website visitor to qualified lead, CRM record, appointment request, and follow-up — Kratos systems connect the full path instead of leaving leads scattered across calls, forms, and inboxes.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Panel 1: AI Conversation */}
          <FadeIn delay={0.1}>
            <Card className="dark-card border-white/10 h-full flex flex-col overflow-hidden bg-white/[0.02]">
              <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-[#a5b4fc]" />
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">AI Conversation</span>
                </div>
                <Badge variant="outline" className="text-[10px] border-[#667eea]/30 text-[#a5b4fc] bg-[#667eea]/5">Demo Preview</Badge>
              </div>
              <div className="flex-1 p-6 space-y-4 overflow-y-auto scrollbar-hide max-h-[400px]">
                {demoConversation.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'customer' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.role === 'customer' 
                        ? 'bg-white/10 text-white rounded-tr-none' 
                        : 'bg-[#667eea]/10 text-white/90 border border-[#667eea]/20 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-white/5 bg-black/20 italic text-[10px] text-white/30 text-center">
                Demo preview. Final workflows are customized to your business.
              </div>
            </Card>
          </FadeIn>

          {/* Panel 2: Lead Record */}
          <FadeIn delay={0.2}>
            <Card className="dark-card border-white/10 h-full flex flex-col overflow-hidden bg-white/[0.02]">
              <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4 text-[#43e97b]" />
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Sample Lead Record</span>
                </div>
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="space-y-3">
                  {[
                    { label: "Name", value: "Demo Lead" },
                    { label: "Industry", value: "HVAC" },
                    { label: "Service Type", value: "Urgent Cooling Repair" },
                    { label: "ZIP", value: "92101" },
                    { label: "Urgency", value: "High", color: "text-[#43e97b]" },
                    { label: "Lead Source", value: "Website Chatbot" },
                    { label: "Preferred Action", value: "Same-day callback" },
                    { label: "Status", value: "New Qualified Lead", color: "text-[#a5b4fc]" },
                  ].map((field, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">{field.label}</span>
                      <span className={`text-xs font-bold ${field.color || 'text-white/80'}`}>{field.value}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-[#43e97b]/5 border border-[#43e97b]/10 rounded-xl mt-4">
                  <p className="text-[10px] text-[#43e97b] leading-tight font-medium">
                    Example structure only. Your final fields are customized to your workflow.
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Panel 3: Automated Actions */}
          <FadeIn delay={0.3}>
            <Card className="dark-card border-white/10 h-full flex flex-col overflow-hidden bg-white/[0.02]">
              <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Automated Actions</span>
                </div>
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="space-y-4">
                  {[
                    "Create CRM/Airtable record",
                    "Notify owner or team",
                    "Trigger booking or callback step",
                    "Start SMS/email follow-up",
                    "Track source and status",
                    "Add to reporting dashboard"
                  ].map((action, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-[#43e97b]/10 flex items-center justify-center border border-[#43e97b]/20 group-hover:bg-[#43e97b] transition-all">
                        <CheckCircle2 className="w-3 h-3 text-[#43e97b] group-hover:text-black transition-all" />
                      </div>
                      <span className="text-xs font-medium text-white/80">{action}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-[#a5b4fc]" />
                      <span className="text-[10px] font-bold text-[#a5b4fc] uppercase tracking-[0.2em]">Live Status</span>
                    </div>
                    <p className="text-[10px] text-white/40 leading-relaxed italic">
                      "System completed all 6 actions in 1.4 seconds."
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>

        {/* Pipeline Visualization */}
        <div className="mb-20">
          <WorkflowVisualizer />
        </div>

        {/* Final CTA Block */}
        <FadeIn>
          <div className="max-w-4xl mx-auto dark-card border-white/10 rounded-[3rem] p-12 md:p-16 text-center space-y-10 relative overflow-hidden bg-white/[0.01]">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#667eea] to-transparent"></div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Want to See Your Workflow Mapped?</h3>
              <p className="text-white/60 text-xl font-light max-w-2xl mx-auto">
                Book a free audit and Kratos will map one lead flow — from first contact to CRM and follow-up — for your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="h-16 px-12 text-xl bg-white text-black hover:bg-white/90 rounded-full font-bold shadow-xl transition-all"
                asChild
                onClick={() => trackEvent("book_audit_click", { location: "demo_section_bottom", destination: isExternalBooking ? "booking_url" : "contact_fallback" })}
              >
                <a 
                  href={finalBookingUrl}
                  target={isExternalBooking ? "_blank" : undefined}
                  rel={isExternalBooking ? "noopener noreferrer" : undefined}
                >
                  <Calendar className="mr-3 w-6 h-6" />
                  Book Free Audit
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-16 px-12 text-xl border-white/20 text-white hover:bg-white/10 rounded-full font-bold transition-all"
                asChild
              >
                <a href="#packages">
                  Start the 7-Day Sprint
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
