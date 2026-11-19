import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MARKET_SEGMENTS,
  INITIAL_PRICING_CONFIG,
  PricingConfig,
  COMPETITOR_MATRICES,
  CompStatus,
} from '../data/slidesData';
import { SeynaroMasterMark } from './ParticleHeroSlide';

/**
 * SLIDE 10 — MARKET SIZE (TAM / SAM / SOM WITH UNBOXED SVG TEXT & +30 EMPLOYEES, BRAND PALETTE)
 */
export const Slide11MarketSizeChart: React.FC = () => {
  const [activeRing, setActiveRing] = useState<'tam' | 'sam' | 'som'>('sam');

  return (
    <section
      aria-label="اسلاید دهم: اندازه بازار TAM SAM SOM"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                بازار هدف • شرکت‌های بالای ۳۰ نفر نیرو (میانگین قرارداد ۴۰۰ میلیون تومان)
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                اندازه بازار ما چقدره؟ (<span className="font-mono-ltr text-[#F6F9FD]">TAM</span> /{' '}
                <span className="font-mono-ltr text-[#0AB7A3]">SAM</span> /{' '}
                <span className="font-mono-ltr text-[#FE5A40]">SOM</span>)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-extrabold">
            <span className="px-3 py-1 rounded-lg bg-[#1E2235] border border-[#2B3048] text-[#F6F9FD]">
              TAM: ۱۰ همت
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#0AB7A3]/15 border border-[#0AB7A3] text-[#0AB7A3]">
              SAM: ۱/۶ همت
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#1E2235] border border-[#FE5A40]/60 text-[#FE5A40]">
              SOM: ۶۵ شرکت
            </span>
            <span className="hidden md:inline-block font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1 rounded bg-[#1E2235] border border-[#2B3048]">
              10 / 17
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center my-auto py-2">
          {/* Right 7 Cols: 3 Concise Market Segment Cards */}
          <div className="lg:col-span-7 space-y-3">
            {MARKET_SEGMENTS.map((seg, idx) => {
              const isSelected = activeRing === seg.id;
              return (
                <motion.div
                  key={seg.id}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  onClick={() => setActiveRing(seg.id)}
                  onMouseEnter={() => setActiveRing(seg.id)}
                  style={{
                    borderColor: isSelected ? seg.color : '#2B3048',
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected ? 'bg-[#1E2235]' : 'bg-[#1E2235]/50 hover:bg-[#1E2235]/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono-ltr text-xs font-black px-2.5 py-0.5 rounded bg-[#0C0F1A] border border-[#2B3048]"
                        style={{ color: seg.color }}
                      >
                        {seg.code}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-[#F6F9FD]">
                        {seg.titleFa} — <span style={{ color: seg.color }}>{seg.orgsCountFa}</span>
                      </h3>
                    </div>
                    <span
                      className="text-sm sm:text-base font-black px-2.5 py-0.5 rounded bg-[#0C0F1A]"
                      style={{ color: seg.color }}
                    >
                      {seg.valueFa}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-[#8A96AC]">{seg.details}</p>

                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {seg.segmentsList.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs text-[#F6F9FD] bg-[#0C0F1A] px-2.5 py-1 rounded border border-[#2B3048]"
                      >
                        • {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Left 5 Cols: Concentric SVG Chart — ZERO <rect> BOXES AROUND TEXT */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center rounded-2xl bg-[#1E2235]/55 border border-[#2B3048] p-5">
            <svg
              viewBox="0 0 400 380"
              className="w-full max-w-[330px] h-auto"
              aria-label="نمودار دایره‌های متحدالمرکز TAM و SAM و SOM"
            >
              {/* Outer Circle: TAM */}
              <g onClick={() => setActiveRing('tam')} className="cursor-pointer">
                <circle
                  cx="200"
                  cy="190"
                  r="175"
                  fill={activeRing === 'tam' ? 'rgba(246, 249, 253, 0.1)' : 'rgba(246, 249, 253, 0.04)'}
                  stroke="#F6F9FD"
                  strokeOpacity={activeRing === 'tam' ? '0.85' : '0.35'}
                  strokeWidth={activeRing === 'tam' ? '2.5' : '1.5'}
                />
                <text
                  x="200"
                  y="46"
                  textAnchor="middle"
                  fill="#F6F9FD"
                  fontSize="14"
                  fontWeight="900"
                >
                  TAM • کل بازار ایران
                </text>
                <text
                  x="200"
                  y="68"
                  textAnchor="middle"
                  fill="#8A96AC"
                  fontSize="12.5"
                  fontWeight="800"
                >
                  ۲۵ هزار شرکت بالای ۳۰ نفر (۱۰ همت)
                </text>
              </g>

              {/* Middle Circle: SAM */}
              <g onClick={() => setActiveRing('sam')} className="cursor-pointer">
                <circle
                  cx="200"
                  cy="228"
                  r="125"
                  fill={activeRing === 'sam' ? 'rgba(10, 183, 163, 0.25)' : 'rgba(10, 183, 163, 0.14)'}
                  stroke="#0AB7A3"
                  strokeWidth={activeRing === 'sam' ? '3' : '2'}
                />
                <text
                  x="200"
                  y="142"
                  textAnchor="middle"
                  fill="#0AB7A3"
                  fontSize="14"
                  fontWeight="900"
                >
                  SAM • بازار هدف ما
                </text>
                <text
                  x="200"
                  y="164"
                  textAnchor="middle"
                  fill="#F6F9FD"
                  fontSize="12.5"
                  fontWeight="800"
                >
                  ۴ هزار شرکت (۱/۶ همت)
                </text>
              </g>

              {/* Inner Circle: SOM */}
              <g onClick={() => setActiveRing('som')} className="cursor-pointer">
                <circle
                  cx="200"
                  cy="272"
                  r="74"
                  fill="#FE5A40"
                  stroke="#F6F9FD"
                  strokeWidth={activeRing === 'som' ? '2.8' : '1.5'}
                />
                <text
                  x="200"
                  y="255"
                  textAnchor="middle"
                  fill="#0C0F1A"
                  fontSize="13"
                  fontWeight="900"
                >
                  SOM • هدف ما
                </text>
                <text
                  x="200"
                  y="278"
                  textAnchor="middle"
                  fill="#0C0F1A"
                  fontSize="15"
                  fontWeight="900"
                >
                  ۶۵ مشتری فعال
                </text>
                <text
                  x="200"
                  y="298"
                  textAnchor="middle"
                  fill="#0C0F1A"
                  fontSize="11.5"
                  fontWeight="800"
                >
                  (۱/۶٪ از SAM)
                </text>
              </g>
            </svg>

            <div className="mt-1 text-center text-xs text-[#8A96AC]">
              مشتریان هدف: شرکت‌های بالای ۳۰ نفر نیرو
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 11 — PRICING VALIDATION (CLEAN, SPACIOUS 16:9 LAYOUT, BRAND PALETTE)
 */
export const Slide12PricingValidation: React.FC = () => {
  const [config, setConfig] = useState<PricingConfig>(INITIAL_PRICING_CONFIG);
  const [isEditingConfig, setIsEditingConfig] = useState(false);

  const handleConfigChange = (key: keyof PricingConfig, val: string) => {
    const parsed = Number(val);
    if (!Number.isNaN(parsed) && parsed >= 0) {
      setConfig((prev) => ({ ...prev, [key]: parsed }));
    }
  };

  return (
    <section
      aria-label="اسلاید یازدهم: مدل قیمت‌گذاری سازمانی"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                قیمت‌گذاری سازمانی • اشتراک سالانه ویژه شرکت‌های بالای ۳۰ نفر (بر اساس سایز شرکت)
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                مدل قیمت‌گذاری سازمانی سینارو
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsEditingConfig((prev) => !prev)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-colors whitespace-nowrap ${
                isEditingConfig
                  ? 'bg-[#0AB7A3] text-[#0C0F1A] border-[#0AB7A3]'
                  : 'bg-[#1E2235] text-[#8A96AC] hover:text-[#F6F9FD] border-[#2B3048]'
              }`}
            >
              {isEditingConfig ? 'ذخیره قیمت‌ها ✓' : 'ویرایش قیمت‌ها'}
            </button>
            <span className="font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1.5 rounded bg-[#1E2235] border border-[#2B3048]">
              11 / 17
            </span>
          </div>
        </div>

        {/* 3 Clean Organization License Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch my-auto py-2">
          {/* Tier 1: 30–100 employees */}
          <div className="rounded-2xl bg-[#1E2235]/60 border border-[#2B3048] p-5 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="inline-block px-3 py-1 rounded bg-[#0C0F1A] border border-[#2B3048] text-[#F6F9FD] text-xs font-bold">
                سطح اول • ۳۰ تا ۱۰۰ نفر
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#F6F9FD]">
                شرکت‌های ۳۰ تا ۱۰۰ نفر
              </h3>
              <p className="text-xs sm:text-sm text-[#8A96AC] leading-relaxed">
                ثبت تجربه کاری واحدهای کلیدی و آماده‌سازی سریع نفرات جایگزین.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#2B3048]">
              <div className="text-xs text-[#8A96AC]">اشتراک سالانه:</div>
              {isEditingConfig ? (
                <input
                  type="number"
                  value={config.tier1Price}
                  onChange={(e) => handleConfigChange('tier1Price', e.target.value)}
                  className="mt-1.5 w-full px-3 py-1.5 rounded-lg bg-[#0C0F1A] border border-[#F6F9FD] text-[#F6F9FD] font-mono-ltr text-lg font-bold"
                />
              ) : (
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-3xl sm:text-4xl font-black text-[#F6F9FD]">
                    {config.tier1Price}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#8A96AC]">
                    میلیون تومان در سال
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Tier 2: Main Plan (101–200) */}
          <div className="rounded-2xl bg-[#0AB7A3]/12 border border-[#0AB7A3] p-5 flex flex-col justify-between shadow-[0_0_24px_rgba(10,183,163,0.12)]">
            <div className="space-y-2.5">
              <span className="inline-block px-3 py-1 rounded bg-[#0AB7A3] text-[#0C0F1A] text-xs font-black">
                پلن اصلی • ۱۰۱ تا ۲۰۰ نفر
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#F6F9FD]">
                شرکت‌های ۱۰۱ تا ۲۰۰ نفر
              </h3>
              <p className="text-xs sm:text-sm text-[#F6F9FD]/90 leading-relaxed">
                پوشش کامل چند واحد کاری، گزارش گلوگاه‌ها و داشبورد مدیریتی.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#0AB7A3]/40">
              <div className="text-xs text-[#0AB7A3] font-bold">اشتراک سالانه:</div>
              {isEditingConfig ? (
                <input
                  type="number"
                  value={config.tier2Price}
                  onChange={(e) => handleConfigChange('tier2Price', e.target.value)}
                  className="mt-1.5 w-full px-3 py-1.5 rounded-lg bg-[#0C0F1A] border border-[#0AB7A3] text-[#F6F9FD] font-mono-ltr text-lg font-bold"
                />
              ) : (
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-3xl sm:text-4xl font-black text-[#0AB7A3]">
                    {config.tier2Price}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#F6F9FD]">
                    میلیون تومان در سال
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Tier 3: Large Orgs & Holdings (201–1000+) */}
          <div className="rounded-2xl bg-[#1E2235]/60 border border-[#FE5A40]/70 p-5 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="inline-block px-3 py-1 rounded bg-[#FE5A40]/15 text-[#FE5A40] text-xs font-extrabold">
                سطح سوم • +۲۰۰ نفر و هلدینگ
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#F6F9FD]">
                سازمان‌های ۲۰۱ تا ۱۰۰۰ نفر
              </h3>
              <p className="text-xs sm:text-sm text-[#8A96AC] leading-relaxed">
                پوشش تمام شرکت‌های زیرمجموعه و داشبورد کلان ویژه مدیرعامل.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#2B3048]">
              <div className="text-xs text-[#FE5A40] font-bold">اشتراک سالانه:</div>
              {isEditingConfig ? (
                <input
                  type="number"
                  value={config.tier3Price}
                  onChange={(e) => handleConfigChange('tier3Price', e.target.value)}
                  className="mt-1.5 w-full px-3 py-1.5 rounded-lg bg-[#0C0F1A] border border-[#FE5A40] text-[#F6F9FD] font-mono-ltr text-lg font-bold"
                />
              ) : (
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-3xl sm:text-4xl font-black text-[#FE5A40]">
                    {config.tier3Price}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#F6F9FD]">
                    میلیون تومان در سال
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Clean Single-Row Summary Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#1E2235]/60 border border-[#0AB7A3]/60 flex items-center justify-between">
            <div>
              <div className="text-xs text-[#8A96AC]">هزینه نصب اولیه (یک‌بار)</div>
              <div className="text-sm font-extrabold text-[#F6F9FD] mt-0.5">
                راه‌اندازی روی سرور شرکت
              </div>
            </div>
            <span className="text-xl font-black text-[#0AB7A3]">{config.coreSetup} میلیون</span>
          </div>

          <div className="p-4 rounded-xl bg-[#1E2235]/60 border border-[#2B3048] flex items-center justify-between">
            <div>
              <div className="text-xs text-[#8A96AC]">میانگین قرارداد هر مشتری</div>
              <div className="text-sm font-extrabold text-[#F6F9FD] mt-0.5">
                درآمد سالانه هر شرکت
              </div>
            </div>
            <span className="text-xl font-black text-[#F6F9FD]">
              {config.avgBaseContract} میلیون
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#1E2235]/60 border border-[#2B3048] flex items-center justify-between">
            <div>
              <div className="text-xs text-[#8A96AC]">حاشیه سود ناخالص</div>
              <div className="text-sm font-extrabold text-[#F6F9FD] mt-0.5">
                سرور با خودِ مشتری است
              </div>
            </div>
            <span className="text-xl font-black text-[#0AB7A3]">۷۵٪ سود</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 12 — BUSINESS MODEL ARCHITECTURE (CONCISE 16:9 FIT, BRAND PALETTE)
 */
export const Slide13BusinessModel: React.FC = () => {
  return (
    <section
      aria-label="اسلاید دوازدهم: بیزینس مدل سینارو"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                مدل کسب‌وکار • جریان درآمدی، مشتریان هدف (+۳۰ نفر) و ساختار سودآوری
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                بیزینس مدل سینارو
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-[#0AB7A3]/15 border border-[#0AB7A3] text-xs font-extrabold text-[#0AB7A3]">
              فروش سازمانی (B2B) با اشتراک سالانه
            </span>
            <span className="font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1 rounded bg-[#1E2235] border border-[#2B3048]">
              12 / 17
            </span>
          </div>
        </div>

        {/* 4 Concise Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-auto py-2">
          <div className="p-4 rounded-xl bg-[#1E2235]/60 border border-[#0AB7A3] space-y-2.5">
            <div className="text-xs font-extrabold text-[#0AB7A3]">۰۱. جریان درآمدی</div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#F6F9FD]">از کجا درآمد داریم؟</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F6F9FD]/90 leading-relaxed">
              <li>• <span className="font-bold text-[#0AB7A3]">اشتراک سالانه:</span> ۳۰۰ تا ۷۵۰ میلیون تومان</li>
              <li>• <span className="font-bold text-[#F6F9FD]">نصب اولیه:</span> ۱۲۰ میلیون تومان</li>
              <li>• <span className="font-bold text-[#8A96AC]">تمدید سالانه:</span> پشتیبانی و ارتقا</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#1E2235]/60 border border-[#2B3048] space-y-2.5">
            <div className="text-xs font-extrabold text-[#F6F9FD]">۰۲. مشتریان هدف</div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#F6F9FD]">شرکت‌های +۳۰ نفر نیرو</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F6F9FD]/90 leading-relaxed">
              <li>• <span className="font-bold text-[#0AB7A3]">شرکت‌های بالای ۳۰ نفر</span> با کارهای تخصصی</li>
              <li>• <span className="font-bold text-[#F6F9FD]">صنعتی، فناوری، مالی و پخش</span></li>
              <li>• <span className="font-bold text-[#8A96AC]">خریدار:</span> مدیرعامل و هیئت‌مدیره</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#1E2235]/60 border border-[#FE5A40]/70 space-y-2.5">
            <div className="text-xs font-extrabold text-[#FE5A40]">۰۳. کانال فروش</div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#F6F9FD]">چطور می‌فروشیم؟</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F6F9FD]/90 leading-relaxed">
              <li>• <span className="font-bold text-[#FE5A40]">فروش مستقیم B2B:</span> جلسه دمو با مدیرعامل</li>
              <li>• <span className="font-bold text-[#F6F9FD]">شروع با پایلوت:</span> راه‌اندازی در یک واحد</li>
              <li>• <span className="font-bold text-[#0AB7A3]">قرارداد سالانه:</span> گسترش به کل شرکت</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#1E2235]/60 border border-[#2B3048] space-y-2.5">
            <div className="text-xs font-extrabold text-[#0AB7A3]">۰۴. سودآوری بالا</div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#F6F9FD]">چرا سودده و پایداره؟</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F6F9FD]/90 leading-relaxed">
              <li>• <span className="font-bold text-[#0AB7A3]">حاشیه سود ۷۵٪:</span> سرور با خودِ مشتری است</li>
              <li>• <span className="font-bold text-[#F6F9FD]">ماندگاری بالا:</span> ثبت کل تجربه شرکت</li>
              <li>• <span className="font-bold text-[#FE5A40]">سربه‌سر سریع:</span> فقط با ۱۰ مشتری فعال</li>
            </ul>
          </div>
        </div>

        {/* Bottom 3-Card Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3.5 rounded-xl bg-[#0C0F1A] border border-[#0AB7A3]/60 flex items-center justify-between">
            <span className="text-xs sm:text-sm text-[#8A96AC]">مشتری هدف اصلی:</span>
            <span className="text-sm sm:text-base font-black text-[#0AB7A3]">شرکت‌های بالای ۳۰ نفر</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0C0F1A] border border-[#2B3048] flex items-center justify-between">
            <span className="text-xs sm:text-sm text-[#8A96AC]">مدل قرارداد:</span>
            <span className="text-sm sm:text-base font-black text-[#F6F9FD]">نصب اولیه + اشتراک سالانه</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0C0F1A] border border-[#FE5A40]/60 flex items-center justify-between">
            <span className="text-xs sm:text-sm text-[#8A96AC]">مزیت مالی مدل نصبی:</span>
            <span className="text-sm sm:text-base font-black text-[#FE5A40]">صفر بودن هزینه سرور ابری</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 13 — COMPETITIVE ADVANTAGES (COMPACT 16:9 TABLE FIT, BRAND PALETTE)
 */
export const Slide14CompetitorMatrix: React.FC = () => {
  const [view, setView] = useState<'iranian' | 'global'>('iranian');
  const matrix = COMPETITOR_MATRICES[view];

  const renderBadge = (status: CompStatus, isSeynaro?: boolean) => {
    if (status === 'full') {
      return (
        <span
          title="دارد"
          className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-black ${
            isSeynaro
              ? 'bg-[#0AB7A3] text-[#0C0F1A]'
              : 'bg-[#F6F9FD]/15 text-[#F6F9FD]'
          }`}
        >
          ✓
        </span>
      );
    }
    if (status === 'partial') {
      return (
        <span
          title="نسبی"
          className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FE5A40]/20 text-[#FE5A40] text-xs font-bold"
        >
          ◐
        </span>
      );
    }
    return (
      <span
        title="ندارد"
        className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[#5B6880] text-xs"
      >
        ✕
      </span>
    );
  };

  return (
    <section
      aria-label="اسلاید سیزدهم: مزیت‌های رقابتی در برابر رقبای ایرانی و خارجی"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                مزیت رقابتی • مقایسه شفاف امکانات سینارو با ابزارهای موجود
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                {matrix.headline}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#1E2235] border border-[#2B3048] self-start">
              <button
                type="button"
                onClick={() => setView('iranian')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${
                  view === 'iranian'
                    ? 'bg-[#0AB7A3] text-[#0C0F1A]'
                    : 'text-[#8A96AC] hover:text-[#F6F9FD]'
                }`}
              >
                رقبای ایرانی
              </button>
              <button
                type="button"
                onClick={() => setView('global')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${
                  view === 'global'
                    ? 'bg-[#FE5A40] text-[#0C0F1A]'
                    : 'text-[#8A96AC] hover:text-[#F6F9FD]'
                }`}
              >
                رقبای خارجی
              </button>
            </div>
            <span className="hidden md:inline-block font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1.5 rounded bg-[#1E2235] border border-[#2B3048]">
              13 / 17
            </span>
          </div>
        </div>

        <div className="w-full overflow-x-auto rounded-2xl border border-[#2B3048] bg-[#1E2235]/60 my-auto">
          <table className="w-full text-right border-collapse min-w-[660px]">
            <thead>
              <tr className="border-b border-[#2B3048] bg-[#0C0F1A]/95">
                <th className="py-2.5 px-4 text-xs sm:text-sm font-extrabold text-[#F6F9FD] w-56">
                  امکانات و قابلیت‌ها
                </th>
                {matrix.columns.map((col) => (
                  <th
                    key={col.id}
                    className={`py-2.5 px-3 text-center border-r border-[#2B3048] ${
                      col.isSeynaro
                        ? 'bg-[#0AB7A3]/18 text-[#0AB7A3]'
                        : 'text-[#F6F9FD]'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-extrabold whitespace-nowrap">
                      {col.name}
                    </div>
                    <div className="text-[11px] text-[#8A96AC] font-medium whitespace-nowrap">
                      {col.subtitle}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2B3048]/70 text-xs sm:text-sm">
              {matrix.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-[#2B3048]/30 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-[#F6F9FD]">
                    {row.feature}
                  </td>
                  {row.values.map((val, cIdx) => {
                    const isSeynaroCol = matrix.columns[cIdx]?.isSeynaro;
                    return (
                      <td
                        key={cIdx}
                        className={`py-2.5 px-3 text-center border-r border-[#2B3048]/60 ${
                          isSeynaroCol ? 'bg-[#0AB7A3]/10' : ''
                        }`}
                      >
                        {renderBadge(val, isSeynaroCol)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#8A96AC] px-1">
          <div className="flex items-center gap-4">
            <span className="text-[#0AB7A3] font-bold">✓ دارد</span>
            <span className="text-[#FE5A40] font-bold">◐ نسبی</span>
            <span className="text-[#5B6880] font-bold">✕ ندارد</span>
            <span className="text-[#F6F9FD] font-medium">— {matrix.footnote}</span>
          </div>
          <span>{matrix.source}</span>
        </div>
      </div>
    </section>
  );
};
