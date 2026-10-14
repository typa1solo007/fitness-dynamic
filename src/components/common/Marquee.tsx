import React from 'react';
import { Zap } from 'lucide-react';

interface MarqueeProps {
  reverse?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ reverse = false, className = '' }) => {
  const items = [
    'ТРЕНАЖЕРНЫЙ ЗАЛ',
    'КАРДИО-ЗОНА',
    'АЭРОЙОГА В ГАМАКАХ',
    'REHAB FIT',
    'PILATES',
    'ЗДОРОВАЯ СПИНА',
    'ПРОТЕИНОВЫЙ БАР',
    'СОЛЯРИЙ 35₽/МИН',
    'ДЕТСКИЙ ФИТНЕС',
    'ТЦ «ТАНДЕМ»',
    'г. ВОЛЖСК',
    'РЕЙТИНГ 4.9★',
  ];

  return (
    <div className={`relative overflow-hidden py-4 border-y border-white/10 bg-[#111318]/90 select-none ${className}`}>
      <div className={`flex whitespace-nowrap will-change-transform ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-6 mx-4">
            <span className="font-heading font-black text-xl md:text-2xl tracking-tighter uppercase text-white/90 hover:text-[#E60000] transition-colors">
              {text}
            </span>
            <Zap className="w-4 h-4 text-[#E60000] fill-current animate-pulse opacity-90" />
          </div>
        ))}
      </div>
    </div>
  );
};
