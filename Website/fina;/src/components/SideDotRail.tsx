import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SLIDES_META } from '../data/slidesData';

interface SideDotRailProps {
  activeSlide: number;
  onSelectSlide: (index: number) => void;
}

export const SideDotRail: React.FC<SideDotRailProps> = ({ activeSlide, onSelectSlide }) => {
  return (
    <aside
      aria-label="ناوبری اسلایدها"
      className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl bg-[#1E2235]/85 border border-[#2B3048] backdrop-blur-md shadow-xl"
    >
      <button
        type="button"
        onClick={() => onSelectSlide(Math.max(0, activeSlide - 1))}
        disabled={activeSlide === 0}
        aria-label="اسلاید قبلی"
        className="p-1 rounded-lg text-[#CBD5E1] hover:text-[#F6F9FD] hover:bg-[#2B3048]/60 disabled:opacity-25 disabled:pointer-events-none transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      <div className="flex flex-col items-center gap-1.5 py-1">
        {SLIDES_META.map((slide) => {
          const isActive = slide.index === activeSlide;
          return (
            <button
              key={slide.index}
              type="button"
              onClick={() => onSelectSlide(slide.index)}
              aria-label={`اسلاید ${slide.numFa}: ${slide.shortTitle}`}
              aria-current={isActive ? 'step' : undefined}
              className="group relative flex items-center justify-center w-5 h-4 focus:outline-none"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-3.5 bg-[#0AB7A3] shadow-[0_0_10px_rgba(10,183,163,0.75)]'
                    : 'w-1.5 h-1.5 bg-[#64748B] group-hover:w-2 group-hover:h-2 group-hover:bg-[#F6F9FD]'
                }`}
              />
              <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute left-8 px-3 py-1.5 rounded-lg bg-[#1E2235] border border-[#2B3048] text-xs font-medium text-[#F6F9FD] whitespace-nowrap shadow-lg flex items-center gap-2">
                <span className="text-[#0AB7A3] font-bold">{slide.numFa}</span>
                <span>·</span>
                <span>{slide.shortTitle}</span>
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => onSelectSlide(Math.min(SLIDES_META.length - 1, activeSlide + 1))}
        disabled={activeSlide === SLIDES_META.length - 1}
        aria-label="اسلاید بعدی"
        className="p-1 rounded-lg text-[#CBD5E1] hover:text-[#F6F9FD] hover:bg-[#2B3048]/60 disabled:opacity-25 disabled:pointer-events-none transition-colors"
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      <div className="pt-1.5 border-t border-[#2B3048] text-xs font-semibold text-[#CBD5E1] select-none">
        <span>{SLIDES_META[activeSlide]?.numFa}</span>
        <span className="mx-0.5 text-[#64748B]">/</span>
        <span>۱۷</span>
      </div>
    </aside>
  );
};
