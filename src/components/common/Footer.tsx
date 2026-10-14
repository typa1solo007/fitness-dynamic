import React from 'react';
import { Zap, MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { CLUB_INFO } from '../../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090C] border-t border-white/10 text-white pt-16 pb-12 relative overflow-hidden tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E60000] flex items-center justify-center text-white font-black shadow-glow-red">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <span className="font-heading font-black text-xl tracking-wider uppercase text-white">
                FITNESS <span className="text-[#E60000]">DYNAMIC</span>
              </span>
            </div>

            <p className="text-xs text-[#9AA1B2] font-sans leading-relaxed max-w-sm">
              Главный фитнес-клуб в самом центре города Волжска. 
              Просторный тренажерный зал в строгих черно-серых тонах, мощная вентиляция, 
              аэройога в гамаках, реабилитационные программы, спортпит-бар и турбо-солярий.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111318] border border-white/10 font-mono text-xs text-yellow-400">
              <span>★ 4.9 НА ЯНДЕКС КАРТАХ</span>
              <span className="text-white/30">•</span>
              <span className="text-white/70">100% ЧИСТОТА</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <div className="font-heading font-bold text-white uppercase text-xs tracking-wider mb-4 text-[#E60000]">
              // НАВИГАЦИЯ
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#zones" className="text-white/70 hover:text-[#E60000] transition-colors">
                  01. Зоны тренажерного зала
                </a>
              </li>
              <li>
                <a href="#programs" className="text-white/70 hover:text-white transition-colors">
                  02. Групповые программы и Аэройога
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-[#E60000] transition-colors">
                  03. Абонементы и спецпредложения
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-white/70 hover:text-white transition-colors">
                  04. Отзывы и запись на тест-драйв
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Real Contacts */}
          <div className="lg:col-span-4 space-y-3 font-sans text-xs">
            <div className="font-heading font-bold text-white uppercase text-xs tracking-wider mb-4 text-[#E60000]">
              // ЛОКАЦИЯ И СВЯЗЬ
            </div>
            <div className="text-white/80 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
              <span>{CLUB_INFO.address} (ТЦ «Тандем», цокольный этаж)</span>
            </div>
            <div className="text-white/80 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E60000] shrink-0" />
              <a href={`tel:${CLUB_INFO.phoneRaw}`} className="hover:text-[#E60000] font-mono">
                {CLUB_INFO.phone}
              </a>
            </div>
            <div className="text-white/80 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#0077FF] shrink-0" />
              <a
                href={CLUB_INFO.vkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0077FF] font-mono underline"
              >
                Сообщество ВКонтакте: vk.com/fitnessdynamic
              </a>
            </div>
            <div className="font-mono text-[11px] text-white/50 pt-1">
              График: Пн–Пт 07:30–22:00, Сб–Вс 08:00–20:00
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/40">
          <div>
            © {new Date().getFullYear()} FITNESS DYNAMIC (г. Волжск). Все права защищены.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/60 hover:text-[#E60000] transition-colors"
          >
            <span>НАВЕРХ</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
