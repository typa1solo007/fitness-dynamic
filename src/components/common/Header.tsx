import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLUB_INFO } from '../../data/mockData';

interface HeaderProps {
  onOpenBookingModal: (planTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ЗОНЫ ЗАЛА', href: '#zones' },
    { label: 'ГРУППОВЫЕ ПРОГРАММЫ', href: '#programs' },
    { label: 'СПОРТПИТ-БАР', href: '#zones' },
    { label: 'АБОНЕМЕНТЫ', href: '#pricing' },
    { label: 'КОНТАКТЫ', href: '#contacts' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#0A0B0E]/92 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-5 bg-gradient-to-b from-[#0A0B0E]/95 via-[#0A0B0E]/60 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* ZONE 1: BRAND LOGO (RED & WHITE SIGN) */}
            <a
              href="#"
              className="flex items-center gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#E60000] flex items-center justify-center text-white font-black shadow-glow-red transition-transform group-hover:scale-105 duration-200">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-lg tracking-wider uppercase text-white">
                    FITNESS <span className="text-[#E60000]">DYNAMIC</span>
                  </span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E60000] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60000]"></span>
                  </span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] text-white/60 tracking-wide uppercase">
                  <MapPin className="w-2.5 h-2.5 text-[#E60000]" />
                  <span>ВОЛЖСК • ТЦ ТАНДЕМ</span>
                </div>
              </div>
            </a>

            {/* ZONE 2: CENTER DESKTOP NAV (CHARCOAL SLATE PILL) */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#111318]/90 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white rounded-full transition-all duration-200 hover:bg-white/5 group flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#E60000] transition-colors" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            {/* ZONE 3: PHONE & TRIAL VISIT BUTTON */}
            <div className="hidden sm:flex items-center gap-5">
              <a
                href={`tel:${CLUB_INFO.phoneRaw}`}
                className="flex items-center gap-2 font-mono text-xs font-bold text-white hover:text-[#E60000] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E60000]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{CLUB_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenBookingModal()}
                className="relative group overflow-hidden bg-[#E60000] text-white font-heading font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all duration-200 shadow-glow-red hover:bg-[#FF2A2A] active:scale-95 flex items-center gap-1.5"
              >
                <span>ПРОБНЫЙ ВИЗИТ</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${CLUB_INFO.phoneRaw}`}
                className="p-2 rounded-lg bg-[#111318] border border-white/10 text-[#E60000] sm:hidden"
                aria-label="Call club"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenBookingModal()}
                className="bg-[#E60000] text-white font-heading font-black text-[11px] uppercase px-3 py-2 rounded-md sm:hidden"
              >
                ВИЗИТ
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-[#111318] border border-white/10 text-white hover:text-[#E60000] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-[#0A0B0E]/98 backdrop-blur-2xl border-b border-white/10 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="p-3 bg-[#111318] rounded-lg border border-white/5 flex items-center justify-between text-xs font-mono text-white/70">
                <span>г. Волжск, ул. Кузьмина, 22А (ТЦ Тандем)</span>
                <span className="text-[#E60000] font-bold">4.9 ★</span>
              </div>

              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#111318] border border-white/5 hover:border-[#E60000]/40 text-sm font-semibold tracking-wider text-white"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/40" />
                </a>
              ))}

              <a
                href={`tel:${CLUB_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono text-sm font-bold mt-2"
              >
                <Phone className="w-4 h-4 text-[#E60000]" />
                <span>{CLUB_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full mt-2 bg-[#E60000] text-white font-heading font-black text-sm uppercase py-3.5 rounded-lg shadow-glow-red flex items-center justify-center gap-2"
              >
                <span>ЗАПИСАТЬСЯ НА ПРОБНЫЙ ВИЗИТ</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
