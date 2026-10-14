import React from 'react';
import { ClubZone } from '../../types';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ZoneModalProps {
  zone: ClubZone | null;
  onClose: () => void;
  onBookZone: (zoneTitle: string) => void;
}

export const ZoneModal: React.FC<ZoneModalProps> = ({ zone, onClose, onBookZone }) => {
  if (!zone) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0B0E]/88 backdrop-blur-xl"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-3xl rounded-2xl bg-[#111318] border border-white/20 shadow-2xl overflow-hidden my-8"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src={zone.imageUrl}
              alt={zone.title}
              className="w-full h-full object-cover filter brightness-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/60 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-[#0A0B0E]/80 text-white hover:text-[#E60000] border border-white/10 hover:border-[#E60000]/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 font-mono text-xs text-[#E60000] font-bold uppercase tracking-wider mb-2">
                <span>МОДУЛЬ {zone.code}</span>
                <span>•</span>
                <span className="text-white">{zone.badge}</span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white tracking-tight">
                {zone.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm sm:text-base text-[#9AA1B2] font-sans leading-relaxed">
              {zone.shortDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {/* Features */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E60000]" />
                  <span>ПРЕИМУЩЕСТВА ЗОНЫ</span>
                </h4>
                <ul className="space-y-2">
                  {zone.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E60000]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Equipment / Specs */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E60000]" />
                  <span>ОСНАЩЕНИЕ И СПЕЦИФИКАЦИЯ</span>
                </h4>
                <ul className="space-y-2">
                  {zone.equipmentOrSpecs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-white/60">
                г. Волжск, ул. Кузьмина, 22А • ТЦ «Тандем»
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBookZone(zone.title);
                }}
                className="w-full sm:w-auto bg-[#E60000] text-white font-heading font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-glow-red hover:bg-[#FF2A2A] active:scale-95 flex items-center justify-center gap-2"
              >
                <span>ЗАПИСАТЬСЯ В ЭТУ ЗОНУ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
