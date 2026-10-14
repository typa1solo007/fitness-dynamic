import React from 'react';
import { PRICING_TARIFFS, PROMO_OFFERS } from '../../data/mockData';
import { Check, X, CreditCard, Gift, Sparkles, ArrowRight, Flame } from 'lucide-react';

interface PricingAndPromosSectionProps {
  onSelectTariff: (tariffName: string) => void;
  onSelectPromo: (promoTitle: string) => void;
}

export const PricingAndPromosSection: React.FC<PricingAndPromosSectionProps> = ({
  onSelectTariff,
  onSelectPromo
}) => {
  return (
    <section id="pricing" className="py-24 bg-[#0A0B0E] relative overflow-hidden tech-grid-bg border-t border-white/5">
      {/* Central Red Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E60000]/6 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header HUD */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E60000] tracking-widest uppercase mb-3 font-semibold">
            <CreditCard className="w-4 h-4" />
            <span>[ 03 // КЛУБНЫЕ КАРТЫ И АКЦИИ ]</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
            ТАРИФЫ <span className="text-stroke-red">FITNESS DYNAMIC</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9AA1B2] font-sans leading-relaxed">
            Честные и прозрачные цены в Волжске. От разового знакомства до максимальной экономии на годовом безлимите.
          </p>
        </div>

        {/* 3 Symmetrical Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PRICING_TARIFFS.map((tariff) => {
            const isHit = tariff.isHit;

            return (
              <div
                key={tariff.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 tech-card-glow ${
                  isHit
                    ? 'bg-[#151922] border-2 border-[#E60000] shadow-glow-red lg:-translate-y-3'
                    : 'bg-[#111318] border border-white/10 hover:border-white/30'
                }`}
              >
                {/* Popular Badge */}
                {tariff.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-mono text-[10px] uppercase font-black tracking-widest shadow-xl flex items-center gap-1.5 ${
                      isHit
                        ? 'bg-[#E60000] text-white'
                        : 'bg-white text-[#0A0B0E]'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5 fill-current text-white" />
                    <span>{tariff.badge}</span>
                  </div>
                )}

                {/* Card Top Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between font-mono text-xs text-white/50 mb-3">
                    <span>{tariff.tierCode}</span>
                    <span className="text-white/80">ВОЛЖСК</span>
                  </div>

                  <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white mb-2 leading-tight">
                    {tariff.name}
                  </h3>

                  <p className="text-xs text-[#9AA1B2] font-sans mb-6 min-h-[36px]">
                    {tariff.subtitle}
                  </p>

                  {/* Price */}
                  <div className="py-6 border-y border-white/10 my-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
                        {tariff.priceDisplay}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-[#E60000] mt-1 font-semibold">
                      {tariff.periodText}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-white/40 font-bold mb-3">
                      ЧТО ВХОДИТ:
                    </div>
                    {tariff.features.map((feat, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3 text-xs leading-relaxed ${
                          feat.included ? 'text-white/90' : 'text-white/30'
                        }`}
                      >
                        {feat.included ? (
                          <Check className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-white/20 shrink-0 mt-0.5" />
                        )}
                        <span className={feat.included ? '' : 'line-through'}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-8 pt-0">
                  <button
                    onClick={() => onSelectTariff(tariff.name)}
                    className={`w-full py-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                      isHit
                        ? 'bg-[#E60000] text-white shadow-glow-red hover:bg-[#FF2A2A] active:scale-95'
                        : 'bg-white/10 hover:bg-[#E60000] text-white border border-white/10 active:scale-95'
                    }`}
                  >
                    <span>ОФОРМИТЬ КАРТУ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Symmetrical Promo Block (3 Cards) */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#E60000] tracking-widest uppercase mb-6 font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ И ДОП. УСЛУГИ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROMO_OFFERS.map((promo) => (
              <div
                key={promo.id}
                className="rounded-2xl p-6 bg-[#111318] border border-white/10 hover:border-[#E60000]/50 transition-all duration-300 flex flex-col justify-between tech-card-glow group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E60000]/10 border border-[#E60000]/25 flex items-center justify-center text-[#E60000]">
                      <Gift className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-[#E60000] bg-[#E60000]/10 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border border-[#E60000]/25">
                      {promo.badge}
                    </span>
                  </div>

                  <h4 className="font-heading font-black text-lg uppercase text-white mb-2 group-hover:text-[#E60000] transition-colors">
                    {promo.title}
                  </h4>

                  <p className="text-xs text-[#9AA1B2] font-sans leading-relaxed mb-4">
                    {promo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-mono text-[11px] text-white/90 mb-3">
                    {promo.benefitText}
                  </div>

                  <button
                    onClick={() => onSelectPromo(promo.title)}
                    className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-[#E60000] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 border border-white/5 flex items-center justify-center gap-1.5"
                  >
                    <span>УЗНАТЬ ПОДРОБНЕЕ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
