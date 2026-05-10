import React, { useState, useMemo } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { FadeIn } from "./ui/FadeIn";
import { Calculator, TrendingUp, DollarSign, Calendar, ArrowRight } from "lucide-react";

export function MissedCallCalculator() {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(8);
  const [averageJobValue, setAverageJobValue] = useState(400);
  const [closeRate, setCloseRate] = useState(35);
  const [recoveryRate, setRecoveryRate] = useState(60);

  const weeksPerMonth = 4.33;

  const results = useMemo(() => {
    const weeklyOpportunity = missedCallsPerWeek * averageJobValue * (closeRate / 100);
    const monthlyOpportunity = weeklyOpportunity * weeksPerMonth;
    const annualOpportunity = monthlyOpportunity * 12;

    const estimatedRecoveredMonthly = monthlyOpportunity * (recoveryRate / 100);
    const estimatedRecoveredAnnual = annualOpportunity * (recoveryRate / 100);

    return {
      monthlyRisk: Math.round(monthlyOpportunity),
      annualRisk: Math.round(annualOpportunity),
      monthlyRecovered: Math.round(estimatedRecoveredMonthly),
      annualRecovered: Math.round(estimatedRecoveredAnnual)
    };
  }, [missedCallsPerWeek, averageJobValue, closeRate, recoveryRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const bookingUrl = import.meta.env.VITE_BOOKING_URL;
  const finalBookingUrl = bookingUrl || "#contact";
  const isExternalBooking = Boolean(bookingUrl);

  return (
    <section id="roi-calculator" className="py-20 dark-section-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Inputs */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
                Calculate What Missed Calls Could Be Costing You
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                Use rough numbers from your business. This gives you an estimate of the revenue opportunity tied to faster lead capture and follow-up.
              </p>
            </div>

            <div className="space-y-8 dark-card p-8 rounded-3xl border-white/10 shadow-xl">
              {/* Missed Calls Per Week */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="missed-calls" className="text-white font-bold uppercase tracking-wider text-xs">
                    Missed Calls Per Week
                  </Label>
                  <span className="text-[#667eea] font-black text-xl">{missedCallsPerWeek}</span>
                </div>
                <Slider
                  id="missed-calls"
                  min={0}
                  max={30}
                  step={1}
                  value={[missedCallsPerWeek]}
                  onValueChange={(vals) => setMissedCallsPerWeek(vals[0])}
                  className="py-4"
                />
              </div>

              {/* Average Job Value */}
              <div className="space-y-4">
                <Label htmlFor="job-value" className="text-white font-bold uppercase tracking-wider text-xs">
                  Average Job Value (USD)
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    id="job-value"
                    type="number"
                    min={100}
                    max={10000}
                    value={averageJobValue}
                    onChange={(e) => setAverageJobValue(Number(e.target.value))}
                    className="pl-10 h-12 bg-white/5 border-[rgba(102,126,234,0.3)] text-white focus-visible:border-[#667eea] focus-visible:ring-[#667eea]/20 font-bold"
                  />
                </div>
              </div>

              {/* Close Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="close-rate" className="text-white font-bold uppercase tracking-wider text-xs">
                    Your Typical Close Rate
                  </Label>
                  <span className="text-[#667eea] font-black text-xl">{closeRate}%</span>
                </div>
                <Slider
                  id="close-rate"
                  min={5}
                  max={80}
                  step={1}
                  value={[closeRate]}
                  onValueChange={(vals) => setCloseRate(vals[0])}
                  className="py-4"
                />
              </div>

              {/* Recovery Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="recovery-rate" className="text-white font-bold uppercase tracking-wider text-xs">
                    Estimated Recovery Rate with Automation
                  </Label>
                  <span className="text-[#43e97b] font-black text-xl">{recoveryRate}%</span>
                </div>
                <Slider
                  id="recovery-rate"
                  min={10}
                  max={90}
                  step={1}
                  value={[recoveryRate]}
                  onValueChange={(vals) => setRecoveryRate(vals[0])}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Results */}
          <FadeIn className="relative">
            <div className="absolute -inset-4 bg-[#667eea]/10 blur-3xl rounded-[3rem]"></div>
            <Card className="relative p-8 md:p-10 dark-card border-white/10 shadow-2xl space-y-10 overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <div>
                  <h3 className="text-sm font-bold text-[#667eea] uppercase tracking-[0.2em] mb-1">Estimated Opportunity</h3>
                  <p className="text-white/40 text-xs italic">Based on your business inputs</p>
                </div>
                <Calculator className="w-8 h-8 text-white/20" />
              </div>

              <div className="grid gap-8">
                {/* At Risk */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Monthly Revenue At Risk</span>
                    <div className="text-2xl md:text-3xl font-black text-white">{formatCurrency(results.monthlyRisk)}</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Annual Revenue At Risk</span>
                    <div className="text-2xl md:text-3xl font-black text-white/40">{formatCurrency(results.annualRisk)}</div>
                  </div>
                </div>

                {/* Recoverable */}
                <div className="p-6 rounded-2xl bg-[#43e97b]/5 border border-[#43e97b]/20 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#43e97b]" />
                    <span className="text-xs font-bold text-[#43e97b] uppercase tracking-[0.15em]">Estimated Recoverable Revenue</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Potential Monthly Gain</span>
                      <div className="text-3xl md:text-4xl font-black text-[#43e97b]">{formatCurrency(results.monthlyRecovered)}</div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Potential Annual Gain</span>
                      <div className="text-2xl md:text-3xl font-black text-[#43e97b]/60">{formatCurrency(results.annualRecovered)}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full h-16 text-xl bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white border-none shadow-lg hover:shadow-[0_0_20px_rgba(102,126,234,0.4)] transition-all duration-300 font-black group"
                  asChild
                >
                  <a href="#contact">
                    Recover Missed Leads
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full h-14 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all font-bold"
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
              </div>

              <p className="text-xs text-white/40 leading-relaxed text-center italic">
                These numbers are estimates only. Actual results depend on call volume, service area, close rate, response speed, and offer quality.
              </p>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
