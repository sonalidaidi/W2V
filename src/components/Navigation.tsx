import React, { useState } from 'react';
import { W2VLogo } from './W2VLogo';
import { Menu, X } from 'lucide-react';
import { AppView } from '../App';

interface NavigationProps {
  onNavigate: (view: AppView) => void;
  onOpenHelp: () => void;
  onOpenSubscription: () => void;
  onOpenContact: () => void;
  currentView: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  onNavigate,
  onOpenHelp,
  onOpenSubscription,
  onOpenContact,
  currentView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (anchorId: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(anchorId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#0C2D21]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: EXACT UPLOADED W2V LOGO */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => onNavigate('home')}
              className="group flex items-center gap-3 focus:outline-none text-left cursor-pointer transition-transform hover:opacity-95"
              aria-label="W2V Waste2Value Home"
            >
              <W2VLogo size="md" />
            </button>
          </div>

          {/* Right: ABOUT US, CONTACT US, HELP, SUBSCRIPTION, and [ ADMIN ] */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8" aria-label="Main Navigation">
              <button
                onClick={() => handleNavClick('about-w2v')}
                className="text-xs uppercase tracking-wider font-bold text-[#161A18]/75 hover:text-[#0C2D21] transition-colors focus:outline-none cursor-pointer"
              >
                ABOUT US
              </button>
              <button
                onClick={() => handleNavClick('contact-w2v')}
                className="text-xs uppercase tracking-wider font-bold text-[#161A18]/75 hover:text-[#0C2D21] transition-colors focus:outline-none cursor-pointer"
              >
                CONTACT US
              </button>
              <button
                onClick={onOpenHelp}
                className="text-xs uppercase tracking-wider font-bold text-[#161A18]/75 hover:text-[#0C2D21] transition-colors focus:outline-none cursor-pointer"
              >
                HELP
              </button>
              <button
                onClick={onOpenSubscription}
                className="text-xs uppercase tracking-wider font-bold text-[#161A18]/75 hover:text-[#0C2D21] transition-colors focus:outline-none cursor-pointer"
              >
                SUBSCRIPTION
              </button>
            </nav>

            {/* Distinct Dark Forest Green Pill-Shaped Button: [ ADMIN ] */}
            <button
              onClick={() => onNavigate('admin-login')}
              className="px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#0C2D21] hover:bg-[#144432] active:bg-[#071C14] rounded-full shadow-xs hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0C2D21] focus:ring-offset-2 cursor-pointer"
            >
              ADMIN
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onNavigate('admin-login')}
              className="px-4 py-1.5 text-xs font-bold tracking-wide uppercase text-white bg-[#0C2D21] hover:bg-[#144432] rounded-full shadow-xs"
            >
              ADMIN
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0C2D21] hover:bg-[#0C2D21]/5 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#0C2D21]/10 bg-[#FAF8F3] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => handleNavClick('about-w2v')}
            className="block w-full text-left py-2 px-3 text-xs font-bold tracking-wide uppercase text-[#0C2D21] hover:bg-[#0C2D21]/5 rounded-md"
          >
            ABOUT US
          </button>
          <button
            onClick={() => handleNavClick('contact-w2v')}
            className="block w-full text-left py-2 px-3 text-xs font-bold tracking-wide uppercase text-[#0C2D21] hover:bg-[#0C2D21]/5 rounded-md"
          >
            CONTACT US
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenHelp();
            }}
            className="block w-full text-left py-2 px-3 text-xs font-bold tracking-wide uppercase text-[#0C2D21] hover:bg-[#0C2D21]/5 rounded-md"
          >
            HELP
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSubscription();
            }}
            className="block w-full text-left py-2 px-3 text-xs font-bold tracking-wide uppercase text-[#0C2D21] hover:bg-[#0C2D21]/5 rounded-md"
          >
            SUBSCRIPTION
          </button>
          <div className="pt-2 border-t border-[#0C2D21]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('who-are-you');
              }}
              className="w-full py-3 px-4 bg-[#F97316] text-white rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-[#EA580C]"
            >
              GET STARTED
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
