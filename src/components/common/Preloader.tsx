import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { Zap, MapPin } from 'lucide-react';
import { CLUB_INFO } from '../../data/mockData';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);

        const tl = gsap.timeline({
          onComplete: () => {
            onComplete();
          }
        });

        tl.to(contentRef.current, {
          opacity: 0,
          scale: 0.96,
          duration: 0.25,
          ease: 'power2.in'
        })
        .to(topCurtainRef.current, {
          yPercent: -100,
          duration: 0.65,
          ease: 'power4.inOut'
        }, 'curtain')
        .to(bottomCurtainRef.current, {
          yPercent: 100,
          duration: 0.65,
          ease: 'power4.inOut'
        }, 'curtain');
      }
    }, 18);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto select-none"
    >
      {/* Top Curtain in deep gym black */}
      <div
        ref={topCurtainRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#0A0B0E] border-b border-white/10 z-10"
      />

      {/* Bottom Curtain in deep gym black */}
      <div
        ref={bottomCurtainRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0A0B0E] border-t border-white/10 z-10"
      />

      {/* Center Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center max-w-md w-full px-6"
      >
        {/* Brand Header with Red & White sign aesthetics */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-11 h-11 rounded-xl bg-[#E60000] flex items-center justify-center text-white font-black shadow-glow-red">
            <Zap className="w-7 h-7 fill-current" />
          </div>
          <div>
            <div className="font-heading font-black tracking-wider text-xl uppercase text-white">
              FITNESS <span className="text-[#E60000]">DYNAMIC</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[11px] text-white/60 tracking-wider uppercase">
              <MapPin className="w-3 h-3 text-[#E60000]" />
              <span>ВОЛЖСК • ТЦ «ТАНДЕМ»</span>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="relative my-3 flex items-baseline justify-center">
          <span className="font-heading font-black text-7xl md:text-8xl tracking-tighter text-white">
            {progress.toString().padStart(2, '0')}
          </span>
          <span className="font-mono font-bold text-2xl md:text-3xl text-[#E60000] ml-1">
            %
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-[#191C24] rounded-full overflow-hidden border border-white/10 my-4 relative">
          <div
            className="h-full bg-gradient-to-r from-white via-[#FF2A2A] to-[#E60000] transition-all duration-75 relative shadow-glow-red"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Footer */}
        <div className="w-full flex items-center justify-between font-mono text-xs text-white/60 pt-2 border-t border-white/10">
          <span className="text-white/70">
            РЕЙТИНГ <strong className="text-white">4.9 ★ ЯНДЕКС КАРТЫ</strong>
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E60000] animate-ping" />
            <span className="text-[#E60000] uppercase tracking-wider font-semibold">ГОТОВНОСТЬ СИСТЕМ</span>
          </div>
        </div>
      </div>
    </div>
  );
};
