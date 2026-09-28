import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import logoImg from '../assets/images/w2v_pure_white_bg_1790626529852.jpg';

interface HeroSectionProps {
  onGetStarted: () => void;
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGetStarted,
  onExplore,
}) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-[#FAF8F3]">
      {/* Decorative background glow orbs */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F97316]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Impactful Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
            
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0C2D21]/12 shadow-2xs text-xs font-bold tracking-wider text-[#0C2D21] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>SMART FOOD RECOVERY PLATFORM</span>
              <span className="text-[#F97316] font-bold">SIH 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[60px] font-extrabold tracking-tight leading-[1.08] text-balance">
              <span className="text-[#0C2D21] block">Reduce Waste.</span>
              <span className="text-[#F97316] block mt-1">Create Value.</span>
            </h1>

            {/* Subheadline */}
            <h2 className="mt-5 font-display text-lg sm:text-2xl font-semibold text-[#161A18] tracking-tight">
              AI-powered food recovery for institutional kitchens & food processing units.
            </h2>

            {/* Concise value proposition */}
            <p className="mt-4 text-base sm:text-lg text-[#161A18]/80 leading-relaxed max-w-xl">
              Turn unavoidable kitchen prep surplus and factory side-streams into high-value community nourishment and verified circular bioproducts.
            </p>

            {/* Feature highlights bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#0C2D21]/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Automated surplus routing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Verified NGO network</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Real-time impact metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Multi-stakeholder portal</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase text-white bg-[#0C2D21] hover:bg-[#144432] active:bg-[#071C14] shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0C2D21] focus:ring-offset-2 cursor-pointer"
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-4 h-4 text-[#F97316]" />
              </button>

              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold tracking-wider uppercase text-[#0C2D21] bg-white border border-[#0C2D21]/20 hover:bg-[#0C2D21]/5 shadow-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0C2D21] cursor-pointer"
              >
                <span>EXPLORE PLATFORM</span>
                <ChevronRight className="w-4 h-4 text-[#F97316]" />
              </button>
            </div>

          </div>

          {/* RIGHT SIDE: LARGE, HIGH-IMPACT, SUBMISSION-READY LOGO SHOWCASE */}
          <div className="lg:col-span-6 xl:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center rounded-3xl bg-white p-8 sm:p-10 shadow-2xl border-2 border-[#0C2D21]/10 hover:border-[#10B981]/40 transition-all duration-300">
              
              {/* Floating Top Badge */}
              <div className="absolute -top-3.5 right-6 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0C2D21] text-white text-[11px] font-bold shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Official Brand Identity</span>
              </div>

              {/* Large, crisp, clean white background logo */}
              <img
                src={logoImg}
                alt="W2V Waste2Value Official Logo"
                className="w-full h-full max-w-[340px] max-h-[340px] object-contain select-none transition-transform duration-300 hover:scale-102"
              />

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-3.5 left-6 flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#0C2D21] text-xs font-bold shadow-md border border-[#0C2D21]/15">
                <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Zero Food Waste Mission 2026</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
