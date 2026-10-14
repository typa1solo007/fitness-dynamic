import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/common/Preloader';
import { Header } from './components/common/Header';
import { MagneticCursor } from './components/common/MagneticCursor';
import { Marquee } from './components/common/Marquee';
import { Hero } from './components/hero/Hero';
import { BentoZonesGrid } from './components/zones/BentoZonesGrid';
import { ZoneModal } from './components/zones/ZoneModal';
import { TrainingProgramsSection } from './components/programs/TrainingProgramsSection';
import { PricingAndPromosSection } from './components/pricing/PricingAndPromosSection';
import { ReviewsAndContactSection } from './components/reviews/ReviewsAndContactSection';
import { Footer } from './components/common/Footer';
import { BookingModal } from './components/modals/BookingModal';
import { ClubZone } from './types';

export const App: React.FC = () => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [selectedZone, setSelectedZone] = useState<ClubZone | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingModalTitle, setBookingModalTitle] = useState('Гостевой визит');

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const openBookingModal = (title?: string) => {
    setBookingModalTitle(title || 'Гостевой визит');
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white selection:bg-[#E60000] selection:text-white overflow-x-hidden font-sans">
      {/* 1. SPORTS PRELOADER */}
      {!isPreloaderDone && (
        <Preloader onComplete={() => setIsPreloaderDone(true)} />
      )}

      {/* 2. CUSTOM MAGNETIC CURSOR */}
      <MagneticCursor />

      {/* 3. FIXED HUD HEADER */}
      <Header onOpenBookingModal={openBookingModal} />

      {/* 4. MAIN CONTENT SECTIONS */}
      <main>
        {/* SECTION 2: HERO WITH 3D CANVAS & METRIC STATS */}
        <Hero onOpenBookingModal={() => openBookingModal('Запись на тренировку')} />

        {/* MARQUEE RUNNING TICKER */}
        <Marquee />

        {/* SECTION 3: BENTO GRID OF 6 INFRASTRUCTURE MODULES */}
        <BentoZonesGrid onSelectZone={(zone) => setSelectedZone(zone)} />

        {/* SECTION 4: INTERACTIVE CATALOG OF TRAINING PROGRAMS */}
        <TrainingProgramsSection onBookProgram={(title) => openBookingModal(`Запись на программу: ${title}`)} />

        {/* SECOND MARQUEE IN REVERSE DIRECTION FOR VISUAL RHYTHM */}
        <Marquee reverse className="border-t border-white/5" />

        {/* SECTION 5: PRICING TARIFFS & PROMOTIONS */}
        <PricingAndPromosSection
          onSelectTariff={(tariffName) => openBookingModal(`Оформление абонемента: ${tariffName}`)}
          onSelectPromo={(promoTitle) => openBookingModal(`Спецпредложение: ${promoTitle}`)}
        />

        {/* SECTION 6: REVIEWS (4.9★) & LOCATION & LEAD CAPTURE */}
        <ReviewsAndContactSection />
      </main>

      {/* 5. FOOTER */}
      <Footer />

      {/* 6. MODALS */}
      <ZoneModal
        zone={selectedZone}
        onClose={() => setSelectedZone(null)}
        onBookZone={(zoneTitle) => openBookingModal(`Запись в зону: ${zoneTitle}`)}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultTitle={bookingModalTitle}
      />
    </div>
  );
};

export default App;
