import React, { useState } from 'react';
import { motion } from 'motion/react';
import { NEURO_ENGINES, NeuroEngineNode } from '../data/slidesData';
import { SeynaroMasterMark } from './ParticleHeroSlide';
import icebergImg from '../assets/images/iceberg_organizational_knowledge_1794776956938.jpg';

/**
 * SLIDE 02 — KEY EMPLOYEE DEPARTURE (ARCHITECTURAL 60/40 SPLIT, BRAND BOOK PALETTE)
 */
export const Slide02KeyDeparture: React.FC = () => {
  const [simulateOutage, setSimulateOutage] = useState(true);

  return (
    <section
      aria-label="اسلاید دوم: سؤال خروج کارمند کلیدی"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Top Architectural Header Bar */}
        <div className="w-full flex items-center justify-between border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-[#FE5A40]">
              مسئله اول • وابستگی حیاتی سازمان به افراد کلیدی (SPOF)
            </span>
          </div>
          <span className="font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1 rounded bg-[#1E2235] border border-[#2B3048]">
            02 / 17
          </span>
        </div>

        {/* Main 60/40 Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto py-3">
          {/* Right 7 Cols (60%): Editorial Narrative & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col items-start text-right space-y-6"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F6F9FD] leading-[1.45]">
              اگر روزی یکی از بچه‌های کلیدی شرکت بخواد بره،{' '}
              <span className="text-[#FE5A40]">چه اتفاقی سر کارها میفته؟</span>
            </h2>

            <p className="text-base sm:text-lg text-[#8A96AC] leading-[1.8] max-w-2xl">
              وقتی یک نیروی کلیدی مرخصی می‌رود یا از شرکت جدا می‌شود، تمام قلق‌ها، تجربه‌ها و تصمیم‌هایی که فقط در ذهن اوست با او می‌رود و چرخه اصلی کار قفل می‌شود.
            </p>

            {/* Clean Two-State Switch */}
            <div className="inline-flex p-1 rounded-xl bg-[#1E2235] border border-[#2B3048]">
              <button
                type="button"
                onClick={() => setSimulateOutage(true)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  simulateOutage
                    ? 'bg-[#FE5A40] text-[#0C0F1A]'
                    : 'text-[#8A96AC] hover:text-[#F6F9FD]'
                }`}
              >
                وضعیت فعلی: بحران خروج نفر کلیدی
              </button>
              <button
                type="button"
                onClick={() => setSimulateOutage(false)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  !simulateOutage
                    ? 'bg-[#0AB7A3] text-[#0C0F1A]'
                    : 'text-[#8A96AC] hover:text-[#F6F9FD]'
                }`}
              >
                وضعیت با سینارو: تداوم بی‌وقفه کار ✓
              </button>
            </div>

            {/* 3 Architectural Metric Blocks with Generous Whitespace */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#2B3048]">
              <div className="p-4 rounded-xl bg-[#1E2235]/70 border border-[#2B3048]">
                <div className="text-2xl sm:text-3xl font-black text-[#FE5A40]">۸۰٪</div>
                <div className="mt-1 text-xs sm:text-sm font-bold text-[#F6F9FD]">
                  دانش نانوشـته در ذهن فرد
                </div>
                <div className="mt-0.5 text-xs text-[#8A96AC]">
                  خارج از مستندات رسمی شرکت
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1E2235]/70 border border-[#2B3048]">
                <div className="text-2xl sm:text-3xl font-black text-[#F6F9FD]">۵ ماه</div>
                <div className="mt-1 text-xs sm:text-sm font-bold text-[#F6F9FD]">
                  زمان راه افتادن نفر جدید
                </div>
                <div className="mt-0.5 text-xs text-[#8A96AC]">
                  آزمون و خطای پرهزینه در کار
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1E2235]/70 border border-[#2B3048]">
                <div
                  className={`text-2xl sm:text-3xl font-black ${
                    simulateOutage ? 'text-[#FE5A40]' : 'text-[#0AB7A3]'
                  }`}
                >
                  {simulateOutage ? 'توقف کار' : 'صفر توقف'}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-bold text-[#F6F9FD]">
                  {simulateOutage ? 'قفل شدن تعهدات و جریمه' : 'جایگزینی فوری با جانشین آماده'}
                </div>
                <div className="mt-0.5 text-xs text-[#8A96AC]">
                  {simulateOutage ? 'ساعت ۲ شب و ۱۴ تماس بی‌پاسخ' : 'انتقال کامل منطق تصمیم‌گیری'}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left 5 Cols (40%): Clean Architectural Network Telemetry Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <div className="w-full rounded-2xl bg-[#1E2235]/55 border border-[#2B3048] p-6 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="flex items-center justify-between border-b border-[#2B3048] pb-3">
                <span className="text-xs sm:text-sm font-bold text-[#F6F9FD]">
                  شبیه‌سازی جریان کار در زمان غیبت نفر کلیدی
                </span>
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    simulateOutage ? 'bg-[#FE5A40]' : 'bg-[#0AB7A3]'
                  }`}
                />
              </div>

              <svg
                viewBox="0 0 440 250"
                className="w-full h-auto overflow-visible"
                aria-label="نمودار وابستگی به فرد در برابر تداوم سینارو"
              >
                {/* Background Subtle Rings */}
                <circle
                  cx="220"
                  cy="115"
                  r="88"
                  fill="none"
                  stroke="#2B3048"
                  strokeWidth="1"
                  strokeDasharray="5 5"
                />

                {/* Right Input Node: جریان کار شرکت (cx=335, 105px away from right edge 440) */}
                <circle
                  cx="335"
                  cy="115"
                  r="20"
                  fill="#0C0F1A"
                  stroke="#F6F9FD"
                  strokeWidth="2"
                />
                <circle cx="335" cy="115" r="6" fill="#F6F9FD" />
                <text x="335" y="158" textAnchor="middle" fill="#F6F9FD" fontSize="12" fontWeight="700">
                  جریان کار شرکت
                </text>

                {/* Connector Right to Center */}
                <path
                  d="M 313 115 L 246 115"
                  stroke={simulateOutage ? '#FE5A40' : '#0AB7A3'}
                  strokeWidth="2.5"
                  className="animate-dash-flow"
                />

                {/* Center Node: نقطه تصمیم‌گیری (Icon inside circle, label cleanly below!) */}
                <circle
                  cx="220"
                  cy="115"
                  r="24"
                  fill="#0C0F1A"
                  stroke={simulateOutage ? '#FE5A40' : '#0AB7A3'}
                  strokeWidth="2.5"
                />
                <circle
                  cx="220"
                  cy="115"
                  r="8"
                  fill={simulateOutage ? '#FE5A40' : '#0AB7A3'}
                  className="animate-telemetry-pulse"
                />
                <text x="220" y="74" textAnchor="middle" fill="#8A96AC" fontSize="11.5" fontWeight="600">
                  نقطه تصمیم‌گیری
                </text>
                <text
                  x="220"
                  y="158"
                  textAnchor="middle"
                  fill={simulateOutage ? '#FE5A40' : '#0AB7A3'}
                  fontSize="12.5"
                  fontWeight="800"
                >
                  {simulateOutage ? 'خروج نیروی کلیدی' : 'حافظه سینارو'}
                </text>

                {/* Connector Center to Left */}
                <path
                  d="M 194 115 L 127 115"
                  stroke={simulateOutage ? '#FE5A40' : '#0AB7A3'}
                  strokeWidth="2.5"
                  strokeDasharray={simulateOutage ? '4 6' : 'none'}
                />

                {/* Left Output Node: نتیجه عملیات (cx=105, 105px away from left edge 0) */}
                <circle
                  cx="105"
                  cy="115"
                  r="20"
                  fill={simulateOutage ? 'rgba(254, 90, 64, 0.15)' : 'rgba(10, 183, 163, 0.18)'}
                  stroke={simulateOutage ? '#FE5A40' : '#0AB7A3'}
                  strokeWidth="2.5"
                />
                <text
                  x="105"
                  y="120"
                  textAnchor="middle"
                  fill={simulateOutage ? '#FE5A40' : '#0AB7A3'}
                  fontSize="14"
                  fontWeight="900"
                >
                  {simulateOutage ? '✕' : '✓'}
                </text>
                <text
                  x="105"
                  y="158"
                  textAnchor="middle"
                  fill={simulateOutage ? '#FE5A40' : '#0AB7A3'}
                  fontSize="12"
                  fontWeight="800"
                >
                  {simulateOutage ? 'قفل شدن کار' : 'انجام با جانشین'}
                </text>

                {/* Bottom Status Caption */}
                <line x1="50" y1="192" x2="390" y2="192" stroke="#2B3048" strokeWidth="1" />
                <text
                  x="220"
                  y="220"
                  textAnchor="middle"
                  fill={simulateOutage ? '#FE5A40' : '#0AB7A3'}
                  fontSize="12.5"
                  fontWeight="800"
                >
                  {simulateOutage
                    ? 'بحران ساعت ۲ شب • ۱۴ تماس بی‌پاسخ با کارشناس قبلی'
                    : 'جانشین با منطق ثبت‌شده، کار را بدون توقف جمع می‌کند ✓'}
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 03 — DR. FAZLI DECISION LOGIC + REALISTIC ICEBERG (20% ABOVE / 80% BELOW)
 */
export const Slide03DrFazliLogic: React.FC = () => {
  return (
    <section
      aria-label="اسلاید سوم: منطق تصمیم دکتر فضلی و کوه یخ دانش"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Top Architectural Header Bar */}
        <div className="w-full flex items-center justify-between border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-[#0AB7A3]">
              مسئله دوم • کوه یخ دانش و منطق تصمیم‌گیری در سازمان
            </span>
          </div>
          <span className="font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1 rounded bg-[#1E2235] border border-[#2B3048]">
            03 / 17
          </span>
        </div>

        {/* Main 60/40 Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto py-3">
          {/* Right 6 Cols: Editorial Question & 20/80 Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 flex flex-col items-start text-right space-y-6"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F6F9FD] leading-[1.45]">
              تاحالا شده فکر کنید جای یک فرد جدید، اگر{' '}
              <span className="text-[#0AB7A3]">دکتر فضلی</span> بود چه تصمیمی در کارها می‌گرفت؟
            </h2>

            <p className="text-base sm:text-lg text-[#8A96AC] leading-[1.8]">
              تمام دستورالعمل‌ها، فرم‌ها و مستندات مکتوب شرکت فقط{' '}
              <span className="text-[#F6F9FD] font-bold">۲۰٪ بالای سطح آب</span> هستند؛ اما{' '}
              <span className="text-[#0AB7A3] font-bold">۸۰٪ قلق‌ها، استثناها و منطق تصمیم‌گیری</span>{' '}
              در زیر آب پنهان مانده و هیچ‌جا نوشته نشده است.
            </p>

            {/* Two Architectural Layer Cards */}
            <div className="w-full space-y-3.5 pt-2">
              <div className="p-4 sm:p-5 rounded-xl bg-[#1E2235]/60 border border-[#2B3048] flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-[#F6F9FD]">
                    بخش پیدای کوه یخ (بالای آب)
                  </div>
                  <div className="text-xs sm:text-sm text-[#8A96AC] mt-1">
                    فایل‌ها، چارت سازمانی، آیین‌نامه‌ها و فرم‌های اداری
                  </div>
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#F6F9FD] shrink-0">۲۰٪</span>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#0AB7A3]/12 border border-[#0AB7A3] flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-[#0AB7A3]">
                    بخش پنهان کوه یخ (زیر آب — هدف سینارو)
                  </div>
                  <div className="text-xs sm:text-sm text-[#F6F9FD] mt-1">
                    منطق تصمیم‌گیری، قلق‌های تجربی و راه‌حل بحران‌ها
                  </div>
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#0AB7A3] shrink-0">۸۰٪</span>
              </div>
            </div>
          </motion.div>

          {/* Left 6 Cols: Realistic Iceberg Image with 20% / 80% Architectural Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#2B3048] bg-[#0C0F1A] shadow-2xl">
              <img
                src={icebergImg}
                alt="کوه یخ دانش سازمانی: ۲۰ درصد بالای آب و ۸۰ درصد منطق تصمیم زیر آب"
                referrerPolicy="no-referrer"
                className="w-full h-[350px] sm:h-[390px] object-cover block"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0C0F1A]/85 via-transparent to-[#0C0F1A]/45" />

              {/* Waterline at 32% */}
              <div
                className="pointer-events-none absolute inset-x-0 border-t border-dashed border-[#0AB7A3] flex items-center px-5"
                style={{ top: '32%' }}
              >
                <span className="-translate-y-1/2 px-3 py-0.5 rounded bg-[#0C0F1A] border border-[#0AB7A3]/60 text-xs font-bold text-[#0AB7A3]">
                  مرز سطح آب
                </span>
              </div>

              {/* 20% Above Water Callout */}
              <div className="absolute top-4 right-4 px-4 py-2.5 rounded-xl bg-[#0C0F1A]/90 border border-[#2B3048] backdrop-blur-md text-right">
                <div className="text-lg font-black text-[#F6F9FD]">۲۰٪ بالای آب</div>
                <div className="text-xs text-[#8A96AC]">مستندات و فرم‌های مکتوب</div>
              </div>

              {/* 80% Underwater Callout */}
              <div className="absolute bottom-4 right-4 px-4 py-3 rounded-xl bg-[#0C0F1A]/92 border border-[#0AB7A3] backdrop-blur-md text-right">
                <div className="text-lg font-black text-[#0AB7A3]">
                  ۸۰٪ زیر آب (منطق تصمیم دکتر فضلی)
                </div>
                <div className="text-xs text-[#F6F9FD] mt-0.5">
                  تجربه، قلق‌های کاری و چرایی تصمیم‌ها
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 04 — OUTDATED DOCUMENTATION AFTER 6 MONTHS (CLEAN DIVERGENCE CHART, BRAND PALETTE)
 */
export const Slide04OutdatedDocs: React.FC = () => {
  return (
    <section
      aria-label="اسلاید چهارم: منسوخ شدن مستندات پس از شش ماه"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Top Architectural Header Bar */}
        <div className="w-full flex items-center justify-between border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-[#FE5A40]">
              مسئله سوم • کهنه شدن سریع مستندات سنتی
            </span>
          </div>
          <span className="font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1 rounded bg-[#1E2235] border border-[#2B3048]">
            04 / 17
          </span>
        </div>

        {/* Main 60/40 Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto py-3">
          {/* Right 6 Cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 flex flex-col items-start text-right space-y-6"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F6F9FD] leading-[1.45]">
              آیا تا حالا شده یک داکیومنت نوشته شده باشه و{' '}
              <span className="text-[#FE5A40]">بعد از شش ماه</span> ببینی همه‌چی عوض شده و{' '}
              <span className="text-[#0AB7A3]">علم و کار به‌روز شده؟</span>
            </h2>

            <p className="text-base sm:text-lg text-[#8A96AC] leading-[1.8]">
              مستندات متنی همان روز اول متوقف می‌شوند، اما روش واقعی کار تیم هر روز تغییر می‌کند. بعد از ۶ ماه، هیچ‌کس فرصت بازنویسی داکیومنت‌های قدیمی را ندارد.
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 sm:p-5 rounded-xl bg-[#1E2235]/65 border border-[#FE5A40]/50">
                <div className="text-xs font-bold text-[#FE5A40]">مستندات سنتی (PDF و ویکی)</div>
                <div className="mt-1.5 text-base font-extrabold text-[#F6F9FD]">
                  ایستا و منسوخ پس از ۶ ماه
                </div>
                <div className="mt-1 text-xs text-[#8A96AC]">
                  جدا افتاده از تغییرات روزمره کار
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#0AB7A3]/12 border border-[#0AB7A3]">
                <div className="text-xs font-bold text-[#0AB7A3]">حافظه زنده سینارو</div>
                <div className="mt-1.5 text-base font-extrabold text-[#F6F9FD]">
                  به‌روزرسانی خودکار و روزانه
                </div>
                <div className="mt-1 text-xs text-[#F6F9FD]/85">
                  همگام با آخرین تصمیم‌ها و لاگ‌های کاری
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left 6 Cols: Clean Unboxed Divergence Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <div className="w-full rounded-2xl bg-[#1E2235]/55 border border-[#2B3048] p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-[#2B3048] pb-3 mb-4 text-xs sm:text-sm">
                <span className="font-bold text-[#F6F9FD]">
                  شکاف بین داکیومنت اولیه و واقعیت کار در طول ۶ ماه
                </span>
                <span className="text-[#FE5A40] font-bold">۸۴٪ انحراف</span>
              </div>

              <svg
                viewBox="0 0 480 280"
                className="w-full h-auto"
                aria-label="نمودار فاصله مستندات و واقعیت"
              >
                <defs>
                  <linearGradient id="seynaroDriftGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0AB7A3" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FE5A40" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {[55, 110, 165, 220].map((y) => (
                  <line
                    key={y}
                    x1="50"
                    y1={y}
                    x2="440"
                    y2={y}
                    stroke="#2B3048"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}

                <line x1="50" y1="240" x2="445" y2="240" stroke="#5B6880" strokeWidth="1.5" />
                <line x1="50" y1="35" x2="50" y2="240" stroke="#5B6880" strokeWidth="1.5" />

                <path
                  d="M 55 180 C 165 155, 285 100, 425 50 L 425 224 Q 240 205, 55 180 Z"
                  fill="url(#seynaroDriftGrad)"
                />

                {/* Rising Curve: Live Reality */}
                <path
                  d="M 55 180 C 165 155, 285 100, 425 50"
                  fill="none"
                  stroke="#0AB7A3"
                  strokeWidth="3.5"
                  className="animate-dash-flow"
                />
                <circle cx="55" cy="180" r="5.5" fill="#F6F9FD" />
                <circle cx="425" cy="50" r="6.5" fill="#0AB7A3" />
                <text x="300" y="40" textAnchor="middle" fill="#0AB7A3" fontSize="13" fontWeight="800">
                  روش واقعی و به‌روزِ کار (حافظه زنده سینارو)
                </text>

                {/* Falling Curve: Static Doc */}
                <path
                  d="M 55 180 Q 240 205, 425 224"
                  fill="none"
                  stroke="#FE5A40"
                  strokeWidth="3"
                  strokeDasharray="7 5"
                />
                <circle cx="425" cy="224" r="6" fill="#FE5A40" />
                <text x="295" y="234" textAnchor="middle" fill="#FE5A40" fontSize="13" fontWeight="800">
                  داکیومنت نوشته‌شده در روز اول (منسوخ)
                </text>

                {/* Gap Indicator Line */}
                <line
                  x1="425"
                  y1="60"
                  x2="425"
                  y2="214"
                  stroke="#F6F9FD"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <text x="355" y="142" textAnchor="middle" fill="#F6F9FD" fontSize="12.5" fontWeight="800">
                  ۸۴٪ شکاف دانشی
                </text>

                <text x="65" y="264" textAnchor="middle" fill="#8A96AC" fontSize="12" fontWeight="600">
                  روز اول
                </text>
                <text x="245" y="264" textAnchor="middle" fill="#8A96AC" fontSize="12" fontWeight="600">
                  ماه سوم
                </text>
                <text x="415" y="264" textAnchor="middle" fill="#F6F9FD" fontSize="12" fontWeight="800">
                  ماه ششم
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 05 — EXPLICIT VS TACIT KNOWLEDGE & 6 NEUROSCIENCE ENGINES (ARCHITECTURAL LAYOUT)
 */
export const Slide05NeuroscienceEngines: React.FC = () => {
  const [selectedEngine, setSelectedEngine] = useState<NeuroEngineNode>(NEURO_ENGINES[0]);

  return (
    <section
      aria-label="اسلاید پنجم: دانش صریح و ضمنی و ۶ موتور نوروساینس"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Top Architectural Header Bar */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                راه‌حل ما • استخراج دانش ضمنی با ۶ موتور نوروساینس و هوش مصنوعی
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                چطور دانش توی ذهن آدم‌ها رو استخراج می‌کنیم؟
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="px-3 py-1.5 rounded-lg bg-[#1E2235] border border-[#2B3048] text-xs font-bold text-[#8A96AC]">
              ۱. دانش صریح <span className="font-mono-ltr">(Explicit)</span>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#0AB7A3]/15 border border-[#0AB7A3] text-xs font-bold text-[#0AB7A3]">
              ۲. دانش ضمنی و رویه‌ای <span className="font-mono-ltr">(Tacit & Procedural)</span>
            </span>
          </div>
        </div>

        {/* Main 12-Col Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch my-auto py-2">
          {/* Right 7 Cols: 6 Clean Architectural Engine Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {NEURO_ENGINES.map((eng) => {
              const isSelected = selectedEngine.id === eng.id;
              const isCoral = eng.accent === 'coral';

              return (
                <button
                  key={eng.id}
                  type="button"
                  onClick={() => setSelectedEngine(eng)}
                  onMouseEnter={() => setSelectedEngine(eng)}
                  className={`text-right p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? isCoral
                        ? 'bg-[#1E2235] border-[#FE5A40] shadow-[0_0_24px_rgba(254,90,64,0.12)]'
                        : 'bg-[#1E2235] border-[#0AB7A3] shadow-[0_0_24px_rgba(10,183,163,0.12)]'
                      : 'bg-[#1E2235]/45 border-[#2B3048] hover:border-[#5B6880]'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-black px-2 py-0.5 rounded bg-[#0C0F1A] ${
                          isCoral ? 'text-[#FE5A40]' : 'text-[#0AB7A3]'
                        }`}
                      >
                        موتور {eng.code}
                      </span>
                      <span className="text-xs text-[#8A96AC]">{eng.neuroDomain}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#F6F9FD]">
                      {eng.titleFa}
                    </h3>
                    <p className="text-xs text-[#8A96AC] leading-relaxed line-clamp-2">
                      {eng.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Left 5 Cols: Focused Inspector + Unboxed Explicit/Tacit Convergence SVG */}
          <div className="lg:col-span-5 rounded-2xl bg-[#1E2235]/60 border border-[#2B3048] p-5 flex flex-col justify-between space-y-4">
            <svg viewBox="0 0 400 175" className="w-full h-auto" aria-label="گراف دانش صریح و ضمنی">
              {/* Top Root */}
              <circle cx="200" cy="34" r="10" fill="#0C0F1A" stroke="#F6F9FD" strokeWidth="2" />
              <circle cx="200" cy="34" r="4" fill="#F6F9FD" />
              <text x="200" y="16" textAnchor="middle" fill="#F6F9FD" fontSize="11.5" fontWeight="800">
                دانش سازمان
              </text>

              {/* Left Branch: Explicit */}
              <path d="M 188 38 Q 125 52, 105 82" fill="none" stroke="#5B6880" strokeWidth="1.8" />
              <circle cx="105" cy="94" r="10" fill="#0C0F1A" stroke="#5B6880" strokeWidth="2" />
              <text x="105" y="122" textAnchor="middle" fill="#8A96AC" fontSize="11.5" fontWeight="700">
                دانش صریح (۲۰٪)
              </text>

              {/* Right Branch: Tacit */}
              <path
                d="M 212 38 Q 275 52, 295 82"
                fill="none"
                stroke="#0AB7A3"
                strokeWidth="2.2"
                className="animate-dash-flow"
              />
              <circle
                cx="295"
                cy="94"
                r="11"
                fill="rgba(10, 183, 163, 0.2)"
                stroke="#0AB7A3"
                strokeWidth="2.2"
              />
              <circle cx="295" cy="94" r="4" fill="#0AB7A3" />
              <text x="295" y="122" textAnchor="middle" fill="#0AB7A3" fontSize="11.5" fontWeight="900">
                دانش ضمنی و قلق‌ها (۸۰٪)
              </text>

              {/* Bottom Convergence */}
              <path
                d="M 200 148 L 284 102"
                fill="none"
                stroke="#0AB7A3"
                strokeWidth="2"
                className="animate-dash-flow"
              />
              <circle cx="200" cy="148" r="6" fill="#FE5A40" />
              <text x="200" y="168" textAnchor="middle" fill="#0AB7A3" fontSize="11.5" fontWeight="800">
                هسته سینارو: ۶ موتور نوروساینس + مدل زبانی (LLM)
              </text>
            </svg>

            {/* Active Engine Readout */}
            <div className="p-4 rounded-xl bg-[#0C0F1A] border border-[#2B3048] space-y-2.5">
              <div className="flex items-center justify-between border-b border-[#2B3048] pb-2">
                <span
                  className={`text-sm font-extrabold ${
                    selectedEngine.accent === 'coral' ? 'text-[#FE5A40]' : 'text-[#0AB7A3]'
                  }`}
                >
                  موتور {selectedEngine.code}: {selectedEngine.titleFa}
                </span>
                <span className="text-xs text-[#8A96AC] font-semibold">
                  {selectedEngine.titleEn}
                </span>
              </div>

              <div className="text-xs font-bold text-[#F6F9FD] bg-[#1E2235] px-3 py-2 rounded-lg border border-[#2B3048]">
                سازوکار: {selectedEngine.formulaOrMechanism}
              </div>

              <p className="text-xs text-[#8A96AC] leading-relaxed">
                <span className="text-[#0AB7A3] font-bold">خروجی واقعی: </span>
                {selectedEngine.exampleOutput}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
