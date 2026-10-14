import React, { useState } from 'react';
import { X, Send, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLUB_INFO } from '../../data/mockData';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTitle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultTitle = 'Гостевой визит'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Пожалуйста, введите ваше имя');
      return;
    }
    if (!phone.trim() || phone.length < 7) {
      setErrorMsg('Пожалуйста, введите номер телефона для связи');
      return;
    }

    setErrorMsg('');
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#E60000', '#FFFFFF', '#FF2A2A']
      });
    } catch (e) {
      // safe
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setErrorMsg('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-[#0A0B0E]/88 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-lg rounded-3xl bg-[#111318] border border-white/20 shadow-2xl p-6 sm:p-8 overflow-hidden tech-card-glow"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-[#E60000] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 font-mono text-xs text-[#E60000] font-bold uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4 text-[#E60000]" />
            <span>FITNESS DYNAMIC // ВОЛЖСК</span>
          </div>

          <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white mb-2">
            {defaultTitle}
          </h3>

          <p className="text-xs text-[#9AA1B2] font-sans mb-6">
            ТЦ «Тандем», ул. Кузьмина, 22А. Мы закрепим за вами персонального инструктора, чистое полотенце и бахилы на ресепшене.
          </p>

          {isSuccess ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#E60000]/20 text-[#E60000] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-black text-xl uppercase text-white">
                ВЫ УСПЕШНО ЗАПИСАНЫ!
              </h4>
              <p className="text-xs text-[#9AA1B2] max-w-xs mx-auto">
                Администратор свяжется с вами по номеру <strong className="text-white">{phone}</strong> для подтверждения времени.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#E60000] text-white font-heading font-black text-xs uppercase"
              >
                ОТЛИЧНО, ЗАКРЫТЬ
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-white/50 font-bold mb-1.5">
                  ВАШЕ ИМЯ:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Имя"
                  className="w-full bg-[#191C24] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E60000] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-white/50 font-bold mb-1.5">
                  ТЕЛЕФОН:
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-[#191C24] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E60000] transition-colors font-mono"
                />
              </div>

              {errorMsg && (
                <div className="font-mono text-xs text-[#E60000] font-bold">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-2 py-4 rounded-xl bg-[#E60000] text-white font-heading font-black text-xs uppercase tracking-wider shadow-glow-red hover:bg-[#FF2A2A] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>ПОДТВЕРДИТЬ ЗАПИСЬ</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-white/40 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-white/70" />
                <span>Конфиденциальность гарантирована</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
