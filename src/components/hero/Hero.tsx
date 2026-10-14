import React, { useEffect, useState, useRef } from 'react';
import { HeroCanvas } from './HeroCanvas';
import { CLUB_INFO, HERO_METRICS } from '../../data/mockData';
import { ArrowRight, Star, Clock, Sparkles, Car, CheckCircle2, MapPin } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const [ratingCount, setRatingCount] = useState(0);
  const [parkingCount, setParkingCount] = useState(0);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setRatingCount(parseFloat((ease * 4.9).toFixed(1)));
      setParkingCount(Math.round(ease * 53));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const animId = requestAnimationFrame(tick);

    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current.children,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.15
        }
      );
    }

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#0A0B0E] tech-grid-bg">
      {/* 3D Kinetic Three.js Canvas (Red & White Energy Mesh) */}
      <HeroCanvas />

      {/* Atmospheric radial red glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#E60000]/12 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] bg-white/5 blur-[170px] pointer-events-none rounded-full" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111318]/90 border border-white/10 mb-8 backdrop-blur-md shadow-xl">
          <div className="w-2 h-2 rounded-full bg-[#E60000] animate-ping" />
          <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
            ФИТНЕС-КЛУБ №1 В ЦЕНТРЕ ВОЛЖСКА
          </span>
          <span className="text-white/30">•</span>
          <span className="font-mono text-xs text-white/80 font-semibold flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#E60000]" /> ТЦ «ТАНДЕМ», КУЗЬМИНА, 22А
          </span>
        </div>

        {/* Hero Title and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h1
              ref={headlineRef}
              className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter uppercase leading-[0.92] text-white select-none"
            >
              <span className="block transform-gpu">ГЛАВНЫЙ КЛУБ</span>
              <span className="block text-stroke-red transform-gpu">
                В ЦЕНТРЕ ВОЛЖСКА.
              </span>
              <span className="block text-white text-3xl sm:text-5xl lg:text-6xl mt-2 tracking-tight">
                ТВОЯ ФОРМА — <span className="text-[#E60000]">ТВОЯ ДИНАМИКА.</span>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-5">
            <p className="text-sm md:text-base text-[#9AA1B2] leading-relaxed font-sans">
              Просторный тренажерный зал со свежим ремонтом в строгих черно-серых тонах, 
              мощная система вентиляции, большой зал групповых программ, аэройога в гамаках, спортпит-бар и солярий на Кузьмина, 22А.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#pricing"
                className="relative group overflow-hidden bg-[#E60000] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-xl transition-all duration-200 shadow-glow-red hover:bg-[#FF2A2A] active:scale-95 flex items-center gap-2"
              >
                <span>ВЫБРАТЬ АБОНЕМЕНТ (ОТ 2 500 ₽)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenBookingModal}
                className="px-6 py-4 rounded-xl bg-[#111318] hover:bg-[#191C24] border border-white/15 hover:border-[#E60000]/60 text-xs font-heading font-bold uppercase tracking-wider text-white transition-all duration-200 flex items-center gap-2"
              >
                <span>ЗАПИСАТЬСЯ НА ТРЕНИРОВКУ</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feature Highlights Pills */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4 pb-8 border-b border-white/10 text-xs font-mono text-white/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E60000]" />
            <span>Мощная система вентиляции и чистый воздух</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Аэройога в гамаках & Rehab Fit</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E60000]" />
            <span>Турбо-солярий 35 ₽ / мин</span>
          </div>
        </div>

        {/* 4 Strictly Symmetrical Metric Cards in Charcoal & Red */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/* Card 1: Rating */}
          <div className="relative p-6 rounded-2xl bg-[#111318]/90 border border-white/10 backdrop-blur-md overflow-hidden group hover:border-[#E60000]/50 transition-all duration-300 tech-card-glow">
            <div className="absolute top-2 right-3 font-mono font-black text-5xl text-white/[0.04] select-none pointer-events-none group-hover:text-[#E60000]/10 transition-colors">
              01
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-heading font-black text-4xl lg:text-5xl text-white tracking-tight">
                  {ratingCount > 0 ? ratingCount.toFixed(1) : '4.9'}
                </span>
                <span className="font-heading font-bold text-3xl text-yellow-400">
                  ★
                </span>
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-[#E60000] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
                  <span>РЕЙТИНГ В ЯНДЕКС КАРТАХ</span>
                </div>
                <p className="text-xs text-[#9AA1B2] font-sans leading-relaxed">
                  100% честные отзывы за чистоту, сервис и вентиляцию
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Schedule */}
          <div className="relative p-6 rounded-2xl bg-[#111318]/90 border border-white/10 backdrop-blur-md overflow-hidden group hover:border-[#E60000]/50 transition-all duration-300 tech-card-glow">
            <div className="absolute top-2 right-3 font-mono font-black text-5xl text-white/[0.04] select-none pointer-events-none group-hover:text-[#E60000]/10 transition-colors">
              02
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-heading font-black text-3xl lg:text-4xl text-white tracking-tight font-mono">
                  07:30–22:00
                </span>
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E60000]" />
                  <span>ЕЖЕДНЕВНЫЙ ГРАФИК</span>
                </div>
                <p className="text-xs text-[#9AA1B2] font-sans leading-relaxed">
                  Пн–Пт: с 07:30 до 22:00 | Сб–Вс: с 08:00 до 20:00
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: 10+ Programs */}
          <div className="relative p-6 rounded-2xl bg-[#111318]/90 border border-white/10 backdrop-blur-md overflow-hidden group hover:border-[#E60000]/50 transition-all duration-300 tech-card-glow">
            <div className="absolute top-2 right-3 font-mono font-black text-5xl text-white/[0.04] select-none pointer-events-none group-hover:text-[#E60000]/10 transition-colors">
              03
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-heading font-black text-4xl lg:text-5xl text-white tracking-tight">
                  10+
                </span>
                <span className="font-mono font-bold text-xs text-[#E60000] uppercase ml-1">
                  ПРОГРАММ
                </span>
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E60000]" />
                  <span>ГРУППОВЫХ НАПРАВЛЕНИЙ</span>
                </div>
                <p className="text-xs text-[#9AA1B2] font-sans leading-relaxed">
                  От тяжелого железа до Аэройоги, Rehab Fit и детского фитнеса
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Parking */}
          <div className="relative p-6 rounded-2xl bg-[#111318]/90 border border-white/10 backdrop-blur-md overflow-hidden group hover:border-[#E60000]/50 transition-all duration-300 tech-card-glow">
            <div className="absolute top-2 right-3 font-mono font-black text-5xl text-white/[0.04] select-none pointer-events-none group-hover:text-[#E60000]/10 transition-colors">
              04
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-heading font-black text-4xl lg:text-5xl text-white tracking-tight">
                  {parkingCount > 0 ? parkingCount : '53'}
                </span>
                <span className="font-heading font-bold text-xl text-[#E60000] ml-1">
                  МЕСТА
                </span>
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#E60000]" />
                  <span>БЕСПЛАТНАЯ ПАРКОВКА</span>
                </div>
                <p className="text-xs text-[#9AA1B2] font-sans leading-relaxed">
                  Удобный заезд и свободные места у ТЦ «Тандем»
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
