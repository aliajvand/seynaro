import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface ParticleHeroSlideProps {
  onNextSlide: () => void;
}

interface SynapticParticle {
  ox: number;
  oy: number;
  tx: number;
  ty: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originColor: string;
  targetColor: string;
  alpha: number;
  phase: number;
  orbitSpeed: number;
  orbitAmp: number;
}

interface AmbientNeuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  isCoral: boolean;
}

/**
 * Official Seynaro Master Mark SVG (Adapted from Brand Book Chapter 7.1 for Midnight Navy #0C0F1A)
 * Upper-left capsule: #0AB7A3 (Intelligent Teal)
 * Lower-right capsule: #F6F9FD (Sovereign White)
 * Two synaptic core nodes: #FE5A40 (Precision Coral)
 */
export const SeynaroMasterMark: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg
    viewBox="540 360 860 960"
    className={className}
    aria-label="نشان رسمی سینارو"
  >
    <defs>
      <mask id="seynaro-master-mask" maskUnits="userSpaceOnUse" x="500" y="300" width="960" height="1100">
        <rect x="500" y="300" width="960" height="1100" fill="#fff" />
        <circle cx="1020" cy="740" r="112" fill="#000" />
        <circle cx="910" cy="948" r="112" fill="#000" />
      </mask>
    </defs>
    <g mask="url(#seynaro-master-mask)" strokeLinecap="round" strokeWidth="260" fill="none">
      <line x1="1010" y1="530" x2="710" y2="870" stroke="#0AB7A3" />
      <line x1="1220" y1="820" x2="940" y2="1160" stroke="#F6F9FD" />
    </g>
    <circle cx="1020" cy="740" r="54" fill="#FE5A40" />
    <circle cx="910" cy="948" r="54" fill="#FE5A40" />
  </svg>
);

export const ParticleHeroSlide: React.FC<ParticleHeroSlideProps> = ({ onNextSlide }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [lockedMorph, setLockedMorph] = useState(false);
  const isMorphedRef = useRef(false);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  const activeMorph = isHovering || lockedMorph;

  useEffect(() => {
    isMorphedRef.current = activeMorph;
  }, [activeMorph]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId = 0;
    let particles: SynapticParticle[] = [];
    let neurons: AmbientNeuron[] = [];
    let morphProgress = 0;

    const buildScene = () => {
      const rect = stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(Math.floor(rect.width), 320);
      const height = Math.max(Math.floor(rect.height), 220);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const neuronCount = width < 768 ? 18 : 34;
      neurons = Array.from({ length: neuronCount }, (_, idx) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 1.3 + Math.random() * 1.4,
        isCoral: idx % 7 === 0,
      }));

      // Offscreen Canvas 1: Headline
      const off1 = document.createElement('canvas');
      off1.width = width;
      off1.height = height;
      const octx1 = off1.getContext('2d');

      // Offscreen Canvas 2: Brand Wordmark "سینارو"
      const off2 = document.createElement('canvas');
      off2.width = width;
      off2.height = height;
      const octx2 = off2.getContext('2d');

      if (!octx1 || !octx2) return;

      const isCompact = width < 768;

      octx1.clearRect(0, 0, width, height);
      octx1.textAlign = 'center';
      octx1.textBaseline = 'middle';
      const headlineSize = isCompact
        ? Math.max(24, Math.floor(width * 0.06))
        : Math.min(58, Math.max(36, Math.floor(width * 0.044)));

      octx1.font = `900 ${headlineSize}px "Vazirmatn", sans-serif`;
      if (isCompact) {
        octx1.fillStyle = '#F6F9FD';
        octx1.fillText('آدما جابه‌جا میشن،', width / 2, height / 2 - headlineSize * 0.68);
        octx1.fillStyle = '#0AB7A3';
        octx1.fillText('کار شرکت نمی‌ایسته.', width / 2, height / 2 + headlineSize * 0.68);
      } else {
        octx1.fillStyle = '#F6F9FD';
        octx1.fillText('آدما جابه‌جا میشن، کار شرکت نمی‌ایسته.', width / 2, height / 2);
      }

      octx2.clearRect(0, 0, width, height);
      octx2.textAlign = 'center';
      octx2.textBaseline = 'middle';
      const brandSize = isCompact
        ? Math.max(68, Math.floor(width * 0.19))
        : Math.min(136, Math.max(88, Math.floor(width * 0.105)));

      octx2.font = `900 ${brandSize}px "Vazirmatn", sans-serif`;
      octx2.fillStyle = '#0AB7A3';
      octx2.fillText('سینارو', width / 2, height / 2 - (isCompact ? 10 : 16));

      const subEnSize = isCompact ? 14 : 20;
      octx2.font = `700 ${subEnSize}px "JetBrains Mono", monospace`;
      octx2.fillStyle = '#F6F9FD';
      octx2.fillText('S E Y N A R O', width / 2, height / 2 + brandSize * 0.48);

      const img1 = octx1.getImageData(0, 0, width, height).data;
      const img2 = octx2.getImageData(0, 0, width, height).data;

      const step = 3;
      const pts1: { x: number; y: number; color: string }[] = [];
      const pts2: { x: number; y: number; color: string }[] = [];

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const i = (y * width + x) * 4;
          if (img1[i + 3] > 110) {
            const isSecondHalf = isCompact ? y > height / 2 : x < width * 0.47;
            pts1.push({
              x,
              y,
              color: isSecondHalf ? '#0AB7A3' : '#F6F9FD',
            });
          }
          if (img2[i + 3] > 110) {
            const isSubText = y > height / 2 + brandSize * 0.28;
            const isSynapseCore = !isSubText && (x + y) % 23 === 0;
            pts2.push({
              x,
              y,
              color: isSynapseCore
                ? '#FE5A40'
                : isSubText
                ? '#F6F9FD'
                : '#0AB7A3',
            });
          }
        }
      }

      const maxLen = Math.max(pts1.length, pts2.length, 1);
      const cap = 2600;
      const stride = maxLen > cap ? maxLen / cap : 1;
      const count = Math.min(maxLen, cap);

      const nextParticles: SynapticParticle[] = [];
      for (let i = 0; i < count; i++) {
        const p1 = pts1[Math.floor(i * stride) % Math.max(pts1.length, 1)] || {
          x: width / 2,
          y: height / 2,
          color: '#F6F9FD',
        };
        const p2 = pts2[Math.floor(i * stride) % Math.max(pts2.length, 1)] || {
          x: width / 2,
          y: height / 2,
          color: '#0AB7A3',
        };

        nextParticles.push({
          ox: p1.x,
          oy: p1.y,
          tx: p2.x,
          ty: p2.y,
          x: p1.x,
          y: p1.y,
          vx: 0,
          vy: 0,
          radius: 1.15 + (i % 3) * 0.32,
          originColor: p1.color,
          targetColor: p2.color,
          alpha: 0.85 + (i % 4) * 0.04,
          phase: (i * 0.13) % (Math.PI * 2),
          orbitSpeed: 0.032 + (i % 7) * 0.005,
          orbitAmp: 14 + (i % 9) * 4,
        });
      }

      particles = nextParticles;
    };

    buildScene();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(buildScene);
    }

    window.addEventListener('resize', buildScene);

    const render = () => {
      const rect = stage.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        for (let j = i + 1; j < neurons.length; j++) {
          const m = neurons[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 14000) {
            const alpha = (1 - distSq / 14000) * 0.12;
            ctx.strokeStyle = `rgba(10, 183, 163, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = n.isCoral ? 'rgba(254, 90, 64, 0.35)' : 'rgba(10, 183, 163, 0.28)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      const target = isMorphedRef.current ? 1 : 0;
      morphProgress += (target - morphProgress) * 0.09;
      const midTransition = Math.sin(morphProgress * Math.PI);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.phase += p.orbitSpeed;

        const swirlX = Math.cos(p.phase) * p.orbitAmp * midTransition;
        const swirlY = Math.sin(p.phase) * p.orbitAmp * midTransition;

        const gx = p.ox + (p.tx - p.ox) * morphProgress + swirlX;
        const gy = p.oy + (p.ty - p.oy) * morphProgress + swirlY;

        p.vx += (gx - p.x) * 0.16;
        p.vy += (gy - p.y) * 0.16;

        if (mActive) {
          const mdx = p.x - mx;
          const mdy = p.y - my;
          const dSq = mdx * mdx + mdy * mdy;
          const r = 80;
          if (dSq < r * r && dSq > 1) {
            const d = Math.sqrt(dSq);
            const f = (r - d) / r;
            p.vx += (mdx / d) * f * 2.4 - (mdy / d) * f * 1.6;
            p.vy += (mdy / d) * f * 2.4 + (mdx / d) * f * 1.6;
          }
        }

        p.vx *= 0.76;
        p.vy *= 0.76;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = morphProgress > 0.48 ? p.targetColor : p.originColor;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', buildScene);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
    if (!isHovering) setIsHovering(true);
  };

  const handlePointerLeave = () => {
    mouseRef.current.active = false;
    setIsHovering(false);
  };

  return (
    <section
      aria-label="اسلاید اول: سینارو"
      className="slide-frame bg-architectural-grid select-none relative overflow-hidden"
    >
      <div className="slide-canvas-16x9 h-full justify-between py-2">
        {/* Top Architectural Identity Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full flex items-center justify-between border-b border-[#2B3048] pb-4"
        >
          <div className="flex items-center gap-3.5">
            <SeynaroMasterMark className="w-10 h-10 shrink-0" />
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-black text-[#F6F9FD]">سینارو</span>
                <span className="font-mono-ltr text-xs font-bold tracking-widest text-[#0AB7A3]">
                  SEYNARO
                </span>
              </div>
              <div className="text-xs text-[#8A96AC]">
                زیرساخت هوش مصنوعی حفظ تجربه و تداوم عملیات سازمان
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#1E2235] border border-[#2B3048] text-xs font-semibold text-[#8A96AC]">
              ارائه سرمایه‌گذاری (Pitch Deck)
            </span>
            <span className="font-mono-ltr text-xs font-bold text-[#0AB7A3] px-2.5 py-1 rounded-md bg-[#0AB7A3]/10 border border-[#0AB7A3]/30">
              01 / 17
            </span>
          </div>
        </motion.div>

        {/* Center Interactive Particle Stage with Generous Whitespace */}
        <div className="my-auto flex flex-col items-center justify-center py-4">
          <h1 className="sr-only">
            آدما جابه‌جا میشن، کار شرکت نمی‌ایسته. — سینارو (SEYNARO)
          </h1>

          {/* Official Master Mark Focal Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-2 flex flex-col items-center"
          >
            <div className="p-3.5 rounded-2xl bg-[#1E2235]/60 border border-[#2B3048] shadow-[0_0_40px_rgba(10,183,163,0.12)]">
              <SeynaroMasterMark className="w-14 h-14 sm:w-16 sm:h-16" />
            </div>
          </motion.div>

          <div
            ref={stageRef}
            onPointerMove={handlePointerMove}
            onPointerEnter={() => setIsHovering(true)}
            onPointerLeave={handlePointerLeave}
            onClick={() => setLockedMorph((prev) => !prev)}
            className="relative w-full h-[210px] sm:h-[240px] md:h-[260px] cursor-pointer flex items-center justify-center"
          >
            <canvas ref={canvasRef} className="w-full h-full block" />
          </div>

          {/* Clean Editorial Subtitle & Morph Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 flex flex-col items-center text-center max-w-2xl space-y-4"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#F6F9FD] leading-[1.65]">
              تجربه و منطق تصمیم‌گیری افراد کلیدی را در طول کار روزمره ثبت می‌کنیم تا با رفتن یا مرخصی هیچ‌کس، عملیات شرکت متوقف نشود.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => setLockedMorph((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E2235] border border-[#2B3048] hover:border-[#0AB7A3] text-xs sm:text-sm text-[#8A96AC] hover:text-[#F6F9FD] transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#FE5A40]" />
                <span>
                  {activeMorph
                    ? 'نمای نشان «سینارو» فعال است (کلیک برای بازگشت به شعار)'
                    : 'نشانگر ماوس را روی تیتر ببرید یا کلیک کنید تا «سینارو» شکل بگیرد'}
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Architectural Footer */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2B3048] pt-4 text-xs sm:text-sm text-[#8A96AC]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0AB7A3]" />
            <span>ترکیب علوم اعصاب شناختی و هوش مصنوعی درون‌سازمانی (On-Premise)</span>
          </div>

          <button
            type="button"
            onClick={onNextSlide}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E2235] border border-[#2B3048] hover:border-[#0AB7A3] text-[#F6F9FD] font-semibold transition-all"
          >
            <span>شروع ارائه</span>
            <ArrowDown className="w-4 h-4 text-[#0AB7A3]" />
          </button>
        </div>
      </div>
    </section>
  );
};
