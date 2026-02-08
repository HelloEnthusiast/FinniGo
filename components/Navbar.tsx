
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
import { NAV_LINKS, COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-700 text-white p-2 rounded-lg">
              <Globe className="w-6 h-6" />
            </div>
            <a href="#/" className="text-2xl font-extrabold tracking-tight">
              <span style={{ color: COLORS.primary }}>Finni</span>
              <span style={{ color: COLORS.secondary }}>Go</span>
              <span className="text-xs ml-1 font-medium text-slate-500 uppercase tracking-widest hidden sm:inline-block">by Unigo</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#/ai-guide"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-700 text-white text-sm font-bold shadow-lg shadow-red-600/20 hover:bg-red-500 transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              Ask AI Guide
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-semibold text-slate-800 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#/ai-guide"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-red-700 text-white font-bold"
              >
                <Sparkles className="w-5 h-5" />
                Ask FinniGuide AI
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
