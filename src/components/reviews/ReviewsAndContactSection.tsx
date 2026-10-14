import React, { useState } from 'react';
import { CUSTOMER_REVIEWS, CLUB_INFO } from '../../data/mockData';
import { Star, MapPin, Clock, Phone, Send, CheckCircle2, MessageCircle, Car, Sparkles, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ReviewsAndContactSection: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>('Тренажерный зал');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const goals = [
    'Тренажерный зал',
    'Групповые / Аэройога / Rehab Fit',
    'Персональный тренер',
    'Аренда зала / Сертификат'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Пожалуйста, укажите ваше имя');
      return;
    }
    if (!phone.trim() || phone.length < 7) {
      setErrorMsg('Пожалуйста, введите корректный номер телефона');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E60000', '#FFFFFF', '#FF2A2A']
      });
    } catch (err) {
      // safe
    }
  };

  return (
    <section id="contacts" className="py-24 bg-[#0A0B0E] relative overflow-hidden tech-grid-bg border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#E60000]/6 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-white/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E60000] tracking-widest uppercase mb-3 font-semibold">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span>[ 04 // ОТЗЫВЫ (4.9★) И КОНТАКТЫ В ВОЛЖСКЕ ]</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              ОТЗЫВЫ <span className="text-stroke-red">& ЛОКАЦИЯ</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#9AA1B2] font-sans leading-relaxed">
              Нас рекомендуют друзьям и близким. Реальные оценки жителей Волжска на Яндекс Картах и 2ГИС.
            </p>
          </div>
        </div>

        {/* 4 Symmetrical Real Customer Reviews Cards in Charcoal & Red */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#111318] border border-white/10 hover:border-[#E60000]/40 transition-all duration-300 flex flex-col justify-between tech-card-glow group"
            >
              <div>
                {/* Rating & Source HUD */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-white/80 bg-white/10 px-2 py-0.5 rounded border border-white/15">
                    {rev.source}
                  </span>
                </div>

                <div className="font-mono text-[11px] text-[#E60000] font-bold uppercase mb-2">
                  // {rev.tag}
                </div>

                <p className="text-xs text-[#9AA1B2] font-sans leading-relaxed italic mb-4">
                  «{rev.text}»
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#191C24] border border-white/15 flex items-center justify-center font-heading font-bold text-xs text-[#E60000]">
                  {rev.avatarLetter}
                </div>
                <div>
                  <div className="font-heading font-bold text-xs text-white">
                    {rev.author}
                  </div>
                  <div className="font-mono text-[10px] text-white/40">
                    {rev.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Symmetrical 2-Column Block: Form (Left) & Location Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Interactive Lead Booking Form in Charcoal */}
          <div className="lg:col-span-7 rounded-3xl bg-[#111318] border border-white/10 p-8 sm:p-10 flex flex-col justify-between tech-card-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E60000]/5 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#E60000] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-[#E60000]" />
                <span>ОНЛАЙН-ЗАПИСЬ // ТЕСТ-ДРАЙВ ЗАЛА</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-3">
                ЗАБРОНИРУЙ СВОЙ <span className="text-[#E60000]">ПЕРВЫЙ ВИЗИТ</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#9AA1B2] font-sans mb-8">
                Оставьте заявку — администратор свяжется с вами в течение 10 минут, ответит на вопросы и закрепит за вами бесплатное полотенце и вводный инструктаж.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#191C24] border border-[#E60000]/50 text-center my-6 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#E60000]/20 text-[#E60000] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-black text-xl uppercase text-white">
                    ЗАЯВКА УСПЕШНО ПРИНЯТА!
                  </h4>
                  <p className="text-xs text-[#9AA1B2] max-w-sm mx-auto">
                    Спасибо, {name}! Мы уже подготовили ваш гостевой пропуск в клуб на ул. Кузьмина, 22А. Администратор скоро наберет вас.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setPhone('');
                    }}
                    className="font-mono text-xs text-[#E60000] underline uppercase font-bold pt-2 cursor-pointer"
                  >
                    Отправить еще одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Goal selection chips */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-white/50 font-bold mb-3">
                      ВЫБЕРИТЕ ЦЕЛЬ ВИЗИТА:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {goals.map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setSelectedGoal(g)}
                          className={`p-3 rounded-xl font-mono text-xs text-left transition-all duration-200 border flex items-center justify-between ${
                            selectedGoal === g
                              ? 'bg-[#E60000]/15 text-white border-[#E60000] font-bold shadow-glow-red-sm'
                              : 'bg-[#191C24] text-white/70 border-white/5 hover:border-white/20'
                          }`}
                        >
                          <span>{g}</span>
                          {selectedGoal === g && <CheckCircle2 className="w-4 h-4 shrink-0 text-[#E60000]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-white/50 font-bold mb-2">
                        ВАШЕ ИМЯ:
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Например, Алексей"
                        className="w-full bg-[#191C24] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E60000] transition-colors font-sans placeholder:text-white/20"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-white/50 font-bold mb-2">
                        НОМЕР ТЕЛЕФОНА:
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full bg-[#191C24] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E60000] transition-colors font-mono placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="font-mono text-xs text-[#E60000] font-bold">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#E60000] text-white font-heading font-black text-xs uppercase tracking-wider shadow-glow-red hover:bg-[#FF2A2A] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>ОТПРАВИТЬ ЗАЯВКУ НА ТЕСТ-ДРАЙВ</span>
                  </button>

                  <div className="text-center font-mono text-[10px] text-white/40">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: Real Location & Contact HUD */}
          <div className="lg:col-span-5 rounded-3xl bg-[#111318] border border-white/10 p-8 sm:p-10 flex flex-col justify-between tech-card-glow space-y-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-white/70 font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-[#E60000]" />
                <span>КОНТАКТЫ И СХЕМА ПРОЕЗДА</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-6">
                ЖДЕМ ВАС <span className="text-[#E60000]">В КЛУБЕ</span>
              </h3>

              {/* Coordinates List in Charcoal Slate */}
              <div className="space-y-4 font-sans text-xs sm:text-sm">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#191C24] border border-white/5">
                  <MapPin className="w-5 h-5 text-[#E60000] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-bold text-white text-xs uppercase mb-0.5">
                      АДРЕС КЛУБА:
                    </div>
                    <div className="text-white/90 font-mono text-xs">
                      {CLUB_INFO.address}
                    </div>
                    <div className="text-[#9AA1B2] text-[11px] mt-1">
                      {CLUB_INFO.locationDetail} ({CLUB_INFO.landmarks})
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#191C24] border border-white/5">
                  <Clock className="w-5 h-5 text-[#E60000] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-bold text-white text-xs uppercase mb-0.5">
                      РЕЖИМ РАБОТЫ:
                    </div>
                    <div className="font-mono text-xs text-white/90">
                      Пн–Пт: <strong className="text-white">{CLUB_INFO.scheduleWeekdays}</strong>
                    </div>
                    <div className="font-mono text-xs text-white/90">
                      Сб–Вс: <strong className="text-white">{CLUB_INFO.scheduleWeekends}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#191C24] border border-white/5">
                  <Car className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-bold text-white text-xs uppercase mb-0.5">
                      БЕСПЛАТНАЯ ПАРКОВКА:
                    </div>
                    <div className="text-white/80 text-xs">
                      {CLUB_INFO.parkingSpots}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions (Call & VK) */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${CLUB_INFO.phoneRaw}`}
                className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-[#E60000] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#E60000] hover:text-white" />
                <span>ПОЗВОНИТЬ: {CLUB_INFO.phone}</span>
              </a>

              <a
                href={CLUB_INFO.vkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#0077FF]/20 hover:bg-[#0077FF] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border border-[#0077FF]/40 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>МЫ ВКОНТАКТЕ // VK.COM/FITNESSDYNAMIC</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
