/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SLIDES_META } from './data/slidesData';
import { SideDotRail } from './components/SideDotRail';
import { ParticleHeroSlide } from './components/ParticleHeroSlide';
import {
  Slide02KeyDeparture,
  Slide03DrFazliLogic,
  Slide04OutdatedDocs,
  Slide05NeuroscienceEngines,
} from './components/SlidesGroupA';
import {
  Slide06CompanyValueGraph,
  Slide07StakeholderValueMap,
  Slide08FieldSurveyGrid,
  Slide09SovereigntyReality,
} from './components/SlidesGroupB';
import {
  Slide11MarketSizeChart,
  Slide12PricingValidation,
  Slide13BusinessModel,
  Slide14CompetitorMatrix,
} from './components/SlidesGroupC';
import {
  Slide15FutureHorizon,
  Slide15FoundingTeam,
  Slide16AskAndBudget,
  Slide17ClosingThankYou,
} from './components/SlidesGroupD';

const TOTAL_SLIDES = SLIDES_META.length;

export default function App() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 720, y: 450 });
  const wheelLockRef = useRef<number>(0);
  const touchStartYRef = useRef<number | null>(null);

  const goToSlide = useCallback(
    (targetIndex: number) => {
      const clamped = Math.max(0, Math.min(TOTAL_SLIDES - 1, targetIndex));
      if (clamped === activeSlide) return;
      setDirection(clamped > activeSlide ? 1 : -1);
      setActiveSlide(clamped);
    },
    [activeSlide]
  );

  // Keyboard navigation (Up/Down arrows, PageUp/PageDown, Home/End)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToSlide(activeSlide + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToSlide(activeSlide - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, goToSlide]);

  // Smooth Wheel Navigation with cooldown lock
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - wheelLockRef.current < 720) return;
    if (Math.abs(e.deltaY) < 28) return;

    wheelLockRef.current = now;
    if (e.deltaY > 0) {
      goToSlide(activeSlide + 1);
    } else {
      goToSlide(activeSlide - 1);
    }
  };

  // Touch Swipe Navigation
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartYRef.current = e.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartYRef.current === null) return;
    const endY = e.changedTouches[0]?.clientY ?? touchStartYRef.current;
    const deltaY = touchStartYRef.current - endY;
    touchStartYRef.current = null;

    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        goToSlide(activeSlide + 1);
      } else {
        goToSlide(activeSlide - 1);
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const renderSlide = (index: number) => {
    switch (index) {
      case 0:
        return <ParticleHeroSlide onNextSlide={() => goToSlide(1)} />;
      case 1:
        return <Slide02KeyDeparture />;
      case 2:
        return <Slide03DrFazliLogic />;
      case 3:
        return <Slide04OutdatedDocs />;
      case 4:
        return <Slide05NeuroscienceEngines />;
      case 5:
        return <Slide06CompanyValueGraph />;
      case 6:
        return <Slide07StakeholderValueMap />;
      case 7:
        return <Slide08FieldSurveyGrid />;
      case 8:
        return <Slide09SovereigntyReality />;
      case 9:
        return <Slide11MarketSizeChart />;
      case 10:
        return <Slide12PricingValidation />;
      case 11:
        return <Slide13BusinessModel />;
      case 12:
        return <Slide14CompetitorMatrix />;
      case 13:
        return <Slide15FutureHorizon />;
      case 14:
        return <Slide15FoundingTeam />;
      case 15:
        return <Slide16AskAndBudget />;
      case 16:
        return <Slide17ClosingThankYou onRestart={() => goToSlide(0)} />;
      default:
        return <ParticleHeroSlide onNextSlide={() => goToSlide(1)} />;
    }
  };

  return (
    <main
      dir="rtl"
      lang="fa"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseMove={handleMouseMove}
      className="relative w-screen h-screen overflow-hidden bg-[#0C0F1A] text-[#F6F9FD]"
    >
      {/* Subtle Ambient Neural Spotlight & Engineering Grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(520px circle at ${mousePos.x}px ${mousePos.y}px, rgba(10, 183, 163, 0.065), transparent 70%)`,
        }}
      />

      {/* Sleek Vertical Side Dot Navigation Rail (No Top Header / No Navbar) */}
      <SideDotRail activeSlide={activeSlide} onSelectSlide={goToSlide} />

      {/* Active Full-Viewport Slide Stage */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeSlide}
          custom={direction}
          initial={{ opacity: 0, y: direction > 0 ? 36 : -36, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: direction > 0 ? -28 : 28, filter: 'blur(3px)' }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full h-full pl-12 sm:pl-16"
        >
          {renderSlide(activeSlide)}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
