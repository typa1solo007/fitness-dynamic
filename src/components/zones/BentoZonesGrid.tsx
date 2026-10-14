import React from 'react';
import { INFRASTRUCTURE_ZONES } from '../../data/mockData';
import { ClubZone } from '../../types';
import { Wind, Zap, Flame, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface BentoZonesGridProps {
  onSelectZone: (zone: ClubZone) => void;
}

export const BentoZonesGrid: React.FC<BentoZonesGridProps> = ({ onSelectZone }) => {
  return (
    <section id="zones" className="py-24 bg-[#0A0B0E] relative overflow-hidden tech-grid-bg border-t border-white/5">
      {/* Ambient background glow in subtle red */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#E60000]/5 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E60000] tracking-widest uppercase mb-3 font-semibold">
              <Cpu className="w-4 h-4" />
              <span>[ 01 // ПРОСТРАНСТВО FITNESS DYNAMIC ]</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              ИНФРАСТРУКТУРА <span className="text-stroke-red">КЛУБА</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#9AA1B2] font-sans leading-relaxed">
              6 оборудованных зон в ТЦ «Тандем» на Кузьмина, 22А. 
              Интерьер зала выполнен в строгих черно-серых тонах, мощная приточная вентиляция и профессиональное железо.
            </p>
          </div>
        </div>

        {/* Symmetrical 12-Column Closed Bento Grid: 2 Rows of 3 Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INFRASTRUCTURE_ZONES.map((zone) => {
            const isRedBadge = zone.badgeType === 'flame' || zone.badgeType === 'volt';

            return (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectZone(zone)}
                className="group relative rounded-2xl bg-[#111318] border border-white/10 hover:border-[#E60000]/60 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[420px] tech-card-glow"
              >
                {/* Background Image with Zoom on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={zone.imageUrl}
                    alt={zone.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-75 group-hover:brightness-90"
                    loading="lazy"
                  />
                  {/* Heavy dark gradient overlays for maximum contrast in black-grey aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/80 to-transparent opacity-95 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0E]/85 via-transparent to-transparent" />
                </div>

                {/* Card Watermark Code */}
                <div className="absolute top-4 right-4 font-mono font-black text-6xl text-white/[0.04] select-none pointer-events-none group-hover:text-[#E60000]/15 transition-colors">
                  {zone.code}
                </div>

                {/* Top Card HUD: Badge */}
                <div className="relative z-10 p-6 flex items-start justify-between">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border backdrop-blur-md flex items-center gap-1.5 ${
                      isRedBadge
                        ? 'bg-[#E60000]/15 text-white border-[#E60000]/40'
                        : 'bg-white/10 text-white/90 border-white/20'
                    }`}
                  >
                    {isRedBadge ? <Zap className="w-3 h-3 text-[#E60000]" /> : <Wind className="w-3 h-3 text-white" />}
                    <span>{zone.badge}</span>
                  </span>
                </div>

                {/* Bottom Card Content */}
                <div className="relative z-10 p-6 flex flex-col justify-end">
                  <h3 className="font-heading font-black text-xl uppercase tracking-tight text-white mb-2.5 group-hover:text-[#E60000] transition-colors leading-snug">
                    {zone.title}
                  </h3>

                  <p className="text-xs text-[#9AA1B2] line-clamp-3 mb-4 font-sans leading-relaxed">
                    {zone.shortDesc}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-1.5 py-3 border-t border-white/10">
                    {zone.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/90 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E60000] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Bar */}
                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs text-white group-hover:text-[#E60000] font-bold tracking-wider group-hover:translate-x-1 transition-all">
                    <span>ПОДРОБНЕЕ О ЗОНЕ</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E60000]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
