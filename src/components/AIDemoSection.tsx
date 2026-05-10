import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2, MessageSquare, User, Bot, ArrowRight, Calendar, Zap, ShieldCheck } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

type DemoType = 'hvac' | 'electrician' | 'plumbing';

interface Message {
  role: 'customer' | 'ai';
  text: string;
}

interface LeadSummary {
  type: string;
  urgency: 'High' | 'Medium';
  category: string;
  location: string;
  action: string;
  routedTo: string;
}

const demos: Record<DemoType, { title: string; messages: Message[]; lead: LeadSummary }> = {
  hvac: {
    title: "HVAC Emergency Call",
    messages: [
      { role: 'customer', text: "My AC stopped working and it’s hot in the house." },
      { role: 'ai', text: "I can help. Is this for a home or commercial property?" },
      { role: 'customer', text: "Home." },
      { role: 'ai', text: "Got it. What ZIP code is the job in?" },
      { role: 'customer', text: "92109." },
      { role: 'ai', text: "Thanks. I’ll mark this as urgent and send your details to the team now." },
    ],
    lead: {
      type: "Emergency Service",
      urgency: "High",
      category: "AC Repair",
      location: "92109",
      action: "Call back immediately",
      routedTo: "Owner SMS + CRM"
    }
  },
  electrician: {
    title: "Electrician Quote",
    messages: [
      { role: 'customer', text: "I need a quote for panel upgrade." },
      { role: 'ai', text: "Absolutely. Is this for a residential or commercial property?" },
      { role: 'customer', text: "Residential." },
      { role: 'ai', text: "Do you know your current panel size?" },
      { role: 'customer', text: "100 amps." },
      { role: 'ai', text: "Perfect. I’ll collect your contact info and route this as a quote request." },
    ],
    lead: {
      type: "Quote Request",
      urgency: "Medium",
      category: "Panel Upgrade",
      location: "Local service area",
      action: "Schedule estimate",
      routedTo: "Airtable CRM + Email Notification"
    }
  },
  plumbing: {
    title: "Plumbing After-Hours",
    messages: [
      { role: 'customer', text: "There’s water leaking under my sink." },
      { role: 'ai', text: "I can help. Is the leak active right now?" },
      { role: 'customer', text: "Yes." },
      { role: 'ai', text: "Please shut off the water supply if safe. What address or ZIP code is this for?" },
      { role: 'customer', text: "91910." },
      { role: 'ai', text: "I’ll mark this as urgent and send the job details immediately." },
    ],
    lead: {
      type: "Emergency Service",
      urgency: "High",
      category: "Leak Repair",
      location: "91910",
      action: "Dispatch or call immediately",
      routedTo: "Owner SMS + CRM"
    }
  }
};

export function AIDemoSection() {
  const [activeDemo, setActiveDemo] = useState<DemoType>('hvac');
  const currentDemo = demos[activeDemo];

  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  const checklistItems = [
    "Answers common questions instantly",
    "Collects name, phone, address, and job details",
    "Scores the lead by urgency",
    "Sends hot leads to the owner by SMS",
    "Stores every lead in a CRM",
    "Works after hours, weekends, and holidays"
  ];

  return (
    <section id="demo" className="py-20 dark-section-gradient border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Try the AI Before You Buy</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            See how a Kratos AI system captures, qualifies, and routes trade business leads before they slip away.
          </p>
        </div>

        {/* Demo Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(demos) as DemoType[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              aria-pressed={activeDemo === key}
              className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 border ${
                activeDemo === key
                  ? 'bg-[#667eea] text-white border-[#667eea] shadow-[0_0_15px_rgba(102,126,234,0.4)]'
                  : 'bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:text-white/60'
              }`}
            >
              {demos[key].title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Chat Mockup */}
          <div className="lg:col-span-7">
            <Card className="dark-card border-white/10 shadow-2xl h-[500px] flex flex-col overflow-hidden">
              <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#43e97b] rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Kratos AI Assistant</span>
                </div>
                <Badge variant="outline" className="text-[10px] border-white/10 text-white/40">Active Session</Badge>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {currentDemo.messages.map((msg, i) => (
                  <FadeIn key={`${activeDemo}-${i}`} delay={i * 0.1} className={`flex ${msg.role === 'customer' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-3 max-w-[85%] ${msg.role === 'customer' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        msg.role === 'customer' ? 'bg-white/10' : 'bg-[#667eea]/20 border border-[#667eea]/30'
                      }`}>
                        {msg.role === 'customer' ? <User className="w-4 h-4 text-white/60" /> : <Bot className="w-4 h-4 text-[#a5b4fc]" />}
                      </div>
                      <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'customer' 
                          ? 'bg-white/10 text-white rounded-tr-none' 
                          : 'bg-[rgba(102,126,234,0.08)] text-white/90 border border-white/5 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="p-4 bg-black/20 border-t border-white/5">
                <div className="h-10 bg-white/5 rounded-lg border border-white/10 px-4 flex items-center italic text-white/20 text-xs">
                  Lead qualifications in progress...
                </div>
              </div>
            </Card>
          </div>

          {/* Lead Summary Panel */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn key={`summary-${activeDemo}`}>
              <Card className="dark-card border-white/10 shadow-2xl p-8 space-y-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4">
                  <Zap className="w-12 h-12 text-[#43e97b]/10" />
                </div>
                
                <div className="border-b border-white/5 pb-4">
                  <h3 className="text-xl font-bold text-white mb-1">Lead Captured</h3>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Automation Output</p>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Lead Type", value: currentDemo.lead.type },
                    { 
                      label: "Urgency", 
                      value: currentDemo.lead.urgency, 
                      badge: true,
                      color: currentDemo.lead.urgency === 'High' ? 'text-[#43e97b]' : 'text-[#a5b4fc]'
                    },
                    { label: "Service Category", value: currentDemo.lead.category },
                    { label: "Location", value: currentDemo.lead.location },
                    { label: "Recommended Action", value: currentDemo.lead.action },
                    { label: "Routed To", value: currentDemo.lead.routedTo },
                  ].map((field, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                      <span className="text-xs font-bold text-white/30 uppercase tracking-wider">{field.label}</span>
                      <span className={`text-sm font-bold ${field.color || 'text-white/80'}`}>
                        {field.badge && (
                          <span className={`w-2 h-2 rounded-full inline-block mr-2 ${
                            currentDemo.lead.urgency === 'High' ? 'bg-[#43e97b]' : 'bg-[#a5b4fc]'
                          }`}></span>
                        )}
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>

            {/* Checklist */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#667eea]" />
                What this system does
              </h4>
              <div className="grid gap-3">
                {checklistItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#43e97b] mt-0.5 flex-shrink-0" />
                    <p className="text-white/60 text-sm leading-tight">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <FadeIn className="mt-20">
          <div className="max-w-4xl mx-auto dark-card border-white/10 rounded-3xl p-8 md:p-12 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(90deg,transparent,#667eea,transparent)]"></div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold text-white">Want this on your website?</h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Book a free audit and I’ll show you what the first version of your AI intake system should look like.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="h-14 px-10 text-lg bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg hover:shadow-[0_0_20px_rgba(102,126,234,0.4)] transition-all duration-300 font-black group"
                asChild
              >
                <a 
                  href={finalBookingUrl}
                  target={isExternalBooking ? "_blank" : undefined}
                  rel={isExternalBooking ? "noopener noreferrer" : undefined}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Free Audit
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-14 px-10 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all font-bold"
                asChild
              >
                <a href="#packages">
                  See Packages
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
