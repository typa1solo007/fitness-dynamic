import React, { useState } from 'react';
import { TRAINING_PROGRAMS } from '../../data/mockData';
import { TrainingProgram } from '../../types';
import { Sparkles, Clock, Zap, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrainingProgramsSectionProps {
  onBookProgram: (programTitle: string) => void;
}

export const TrainingProgramsSection: React.FC<TrainingProgramsSectionProps> = ({ onBookProgram }) => {
  const [activeTab, setActiveTab] = useState<string>('Все');

  const tabs = [
    'Все',
    'Сила и Кардио',
    'Восстановление и Растяжка',
    'Спецпрограммы'
  ];

  const filteredPrograms = activeTab === 'Все'
    ? TRAINING_PROGRAMS
    : TRAINING_PROGRAMS.filter(p => p.category === activeTab);

  return (
    <section id="programs" className="py-24 bg-[#0A0B0E] relative overflow-hidden tech-grid-bg border-t border-white/5">
      {/* Background red glow */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-[#E60000]/6 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header HUD */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E60000] tracking-widest uppercase mb-3 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>[ 02 // НАПРАВЛЕНИЯ И ТРЕНИРОВКИ ]</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              ПРОГРАММЫ <span className="text-stroke-red">ДЛЯ ВСЕХ</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#9AA1B2] font-sans leading-relaxed">
              От взрывного силового прогресса до декомпрессии позвоночника в гамаках и групп мягкого фитнеса 50+. 
              Опытные инструкторы и безопасные нагрузки.
            </p>
          </div>
        </div>

        {/* Filter Tabs in Red & White / Charcoal */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-3 border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab
                  ? 'bg-[#E60000] text-white font-black shadow-glow-red'
                  : 'bg-[#111318] text-white/70 hover:text-white hover:bg-[#191C24] border border-white/5'
              }`}
            >
              <span>{tab === 'Все' ? 'ВСЕ НАПРАВЛЕНИЯ' : tab}</span>
              <span className="font-mono text-[10px] opacity-75">
                ({tab === 'Все' ? TRAINING_PROGRAMS.length : TRAINING_PROGRAMS.filter(p => p.category === tab).length})
              </span>
            </button>
          ))}
        </div>

        {/* Symmetrical Grid of Programs */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPrograms.map((prog) => (
              <motion.div
                key={prog.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl bg-[#111318] border border-white/10 hover:border-[#E60000]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 tech-card-glow"
              >
                {/* Photo Area */}
                <div className="relative h-60 w-full overflow-hidden bg-[#0A0B0E]">
                  <img
                    src={prog.imageUrl}
                    alt={prog.title}
                    className="w-full h-full object-cover filter brightness-80 group-hover:scale-105 group-hover:brightness-95 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/40 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-[#0A0B0E]/90 backdrop-blur-md px-3 py-1 rounded-md font-mono text-[10px] text-white font-bold uppercase tracking-wider border border-white/15">
                    {prog.category}
                  </div>

                  {/* Duration Pill */}
                  <div className="absolute top-4 right-4 bg-[#0A0B0E]/90 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 font-mono text-[11px] text-white border border-white/10">
                    <Clock className="w-3 h-3 text-[#E60000]" />
                    <span>{prog.durationMin} МИН</span>
                  </div>

                  {/* Title on bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading font-black text-lg uppercase tracking-tight text-white group-hover:text-[#E60000] transition-colors leading-tight">
                      {prog.title}
                    </h3>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <p className="text-xs text-[#9AA1B2] font-sans leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>

                  {/* Intensity Scale & Instructor */}
                  <div className="py-3 border-y border-white/10 space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-[11px]">ИНТЕНСИВНОСТЬ:</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <Zap
                            key={lvl}
                            className={`w-3.5 h-3.5 ${
                              lvl <= prog.intensity
                                ? 'text-[#E60000] fill-current'
                                : 'text-white/15'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-white/50">ВЕДУТ:</span>
                      <span className="text-white font-medium truncate max-w-[170px]">{prog.instructor}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {prog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] text-white/70 bg-white/5 px-2.5 py-0.5 rounded border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => onBookProgram(prog.title)}
                    className="w-full mt-2 bg-white/5 hover:bg-[#E60000] text-white font-heading font-black text-xs uppercase tracking-wider py-3.5 rounded-xl border border-white/10 hover:border-[#E60000] transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-glow-red active:scale-95"
                  >
                    <span>ЗАПИСАТЬСЯ НА ЗАНЯТИЕ</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
