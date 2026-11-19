import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BUDGET_ITEMS, BudgetAllocationItem } from '../data/slidesData';
import { SeynaroMasterMark } from './ParticleHeroSlide';

/**
 * SLIDE 14 — PRODUCT FUTURE HORIZON (CONCISE + UNBOXED SVG TEXT, BRAND PALETTE)
 */
export const Slide15FutureHorizon: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      num: '۰۱',
      badge: 'گام اول آینده',
      title: 'تحقیق و توسعه هوشمند (R&D)',
      subtitle: 'پیشنهاد راه‌حل‌های جدید علمی برای بهبود کارهای شرکت',
      desc: 'سینارو روش کار شرکت را با مقالات روز دنیا تطبیق می‌دهد و راه‌های سریع‌تر و کم‌هزینه‌تر را به تیم پیشنهاد می‌دهد.',
      example: 'مثال: پیشنهاد روش جدید زمان‌بندی تولید متناسب با دستگاه‌های کارخانه.',
      color: '#0AB7A3',
    },
    {
      num: '۰۲',
      badge: 'گام دوم آینده',
      title: 'پیشنهاد کار جدید بر اساس پتانسیل تیم',
      subtitle: '«با این تیم و مهارتی که داری، این محصول جدید رو هم بساز»',
      desc: 'با شناخت دقیق مهارت بچه‌ها و ظرفیت خالی تیم‌ها، به مدیرعامل می‌گوید چه سرویس جدیدی را می‌تواند بدون استخدام جدید راه بیندازد.',
      example: 'مثال: استفاده از ۳۰٪ ظرفیت خالی تیم دیتا برای ساخت سرویس جدید.',
      color: '#F6F9FD',
    },
    {
      num: '۰۳',
      badge: 'گام سوم آینده',
      title: 'فریلنسری درون‌سازمانی (بازارچه داخلی)',
      subtitle: 'انجام پروژه‌های باز شرکت توسط همکارانی که وقت آزاد دارن',
      desc: 'به‌جای برون‌سپاری پروژه‌ها، بچه‌هایی که وقت آزاد دارند پروژه‌های بقیه واحدها را برمی‌دارند و پاداش مستقیم می‌گیرند.',
      example: 'مثال: ساخت داشبورد مالی واحد بازرگانی توسط یکی از بچه‌های تیم فنی.',
      color: '#FE5A40',
    },
  ];

  return (
    <section
      aria-label="اسلاید چهاردهم: آینده محصول چیست؟"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        <div className="w-full flex items-center justify-between border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                نقشه راه آینده • بعد از ثبت دانش شرکت چه ارزشی خلق می‌شود؟
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                آینده‌ی محصول کجاست؟
              </h2>
            </div>
          </div>
          <span className="font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1 rounded bg-[#1E2235] border border-[#2B3048]">
            14 / 17
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-auto py-2">
          {pillars.map((pillar, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                onClick={() => setSelectedPillar(idx)}
                onMouseEnter={() => setSelectedPillar(idx)}
                style={{ borderColor: isSelected ? pillar.color : '#2B3048' }}
                className="rounded-2xl p-5 border bg-[#1E2235]/60 hover:bg-[#1E2235] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-extrabold px-2.5 py-1 rounded bg-[#0C0F1A] border border-[#2B3048]"
                      style={{ color: pillar.color }}
                    >
                      {pillar.badge}
                    </span>
                    <span className="text-lg font-black text-[#8A96AC]">{pillar.num}</span>
                  </div>

                  {/* Mini SVG Illustration — ZERO <rect> BOXES AROUND TEXT */}
                  <div className="w-full h-24 rounded-xl bg-[#0C0F1A] border border-[#2B3048] flex items-center justify-center p-2">
                    {idx === 0 && (
                      <svg viewBox="0 0 240 80" className="w-full h-full">
                        <circle cx="55" cy="28" r="14" fill="rgba(10,183,163,0.18)" stroke="#0AB7A3" strokeWidth="2" />
                        <text x="55" y="64" textAnchor="middle" fill="#F6F9FD" fontSize="11.5" fontWeight="800">
                          دانش روز دنیا
                        </text>
                        <path d="M 80 28 L 160 28" stroke="#0AB7A3" strokeWidth="2.5" className="animate-dash-flow" />
                        <circle cx="185" cy="28" r="14" fill="rgba(246,249,253,0.15)" stroke="#F6F9FD" strokeWidth="2" />
                        <text x="185" y="64" textAnchor="middle" fill="#0AB7A3" fontSize="11.5" fontWeight="800">
                          بهبود کار شرکت
                        </text>
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg viewBox="0 0 240 80" className="w-full h-full">
                        <circle cx="55" cy="28" r="15" fill="rgba(246,249,253,0.14)" stroke="#F6F9FD" strokeWidth="2" />
                        <text x="55" y="64" textAnchor="middle" fill="#F6F9FD" fontSize="11.5" fontWeight="800">
                          پتانسیل تیم
                        </text>
                        <path d="M 80 28 L 160 28" stroke="#0AB7A3" strokeWidth="2.5" className="animate-dash-flow" />
                        <circle cx="185" cy="28" r="15" fill="rgba(10,183,163,0.18)" stroke="#0AB7A3" strokeWidth="2" />
                        <text x="185" y="64" textAnchor="middle" fill="#0AB7A3" fontSize="11.5" fontWeight="800">
                          محصول جدید
                        </text>
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg viewBox="0 0 240 80" className="w-full h-full">
                        <circle cx="55" cy="28" r="14" fill="rgba(10,183,163,0.18)" stroke="#0AB7A3" strokeWidth="2" />
                        <text x="55" y="64" textAnchor="middle" fill="#F6F9FD" fontSize="11.5" fontWeight="800">
                          ظرفیت آزاد
                        </text>
                        <path d="M 80 28 L 160 28" stroke="#FE5A40" strokeWidth="2.5" className="animate-dash-flow" />
                        <circle cx="185" cy="28" r="14" fill="rgba(254,90,64,0.2)" stroke="#FE5A40" strokeWidth="2" />
                        <text x="185" y="64" textAnchor="middle" fill="#FE5A40" fontSize="11.5" fontWeight="800">
                          بازارچه داخلی
                        </text>
                      </svg>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-[#F6F9FD]">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold" style={{ color: pillar.color }}>
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[#8A96AC] leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#2B3048] text-xs text-[#F6F9FD]">
                  {pillar.example}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 15 — FOUNDING TEAM (2-COLUMN SHOWCASE, UPDATED ALI AJVAND BIO, NO 3RD CARD)
 */
export const Slide15FoundingTeam: React.FC = () => {
  return (
    <section
      aria-label="اسلاید پانزدهم: تیم بنیان‌گذار سینارو"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                تیم ما • ترکیب فنی، هوش مصنوعی، فروش و طراحی محصول
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                تیم هم‌بنیان‌گذار سینارو
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8A96AC] bg-[#1E2235] px-3 py-1 rounded-lg border border-[#2B3048]">
              مهندسی کامپیوتر — دانشگاه آزاد علوم و تحقیقات
            </span>
            <span className="font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1 rounded bg-[#1E2235] border border-[#2B3048]">
              15 / 17
            </span>
          </div>
        </div>

        {/* Clean 2-Column Founder Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch my-auto py-2">
          {/* Founder 1: Ali Ajvand */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl bg-[#1E2235]/70 border border-[#0AB7A3] p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#0C0F1A] border border-[#0AB7A3] shrink-0">
                  <img
                    src="/assets/aistudio/5800704537475008145__1__2c9a616c.jpg"
                    alt="علی آجوند"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#F6F9FD]">علی آجوند</h3>
                  <div className="text-xs sm:text-sm font-bold text-[#0AB7A3] mt-1">
                    هم‌بنیان‌گذار • دیتا، هوش مصنوعی و فروش
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 pt-3 border-t border-[#2B3048] text-xs sm:text-sm text-[#F6F9FD]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0AB7A3] font-black">•</span>
                  <span>طراحی و ساخت سامانه گزارش‌دهی میدانی شرکت <span className="font-mono-ltr font-bold">JTI</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0AB7A3] font-black">•</span>
                  <span>ساخت ۷ محصول داده‌محور و سیستم‌های هوش مصنوعی سازمانی (<span className="font-mono-ltr font-bold">RAG</span>)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0AB7A3] font-black">•</span>
                  <span>برگزیده هکاتون کارخانه نوآوری آزادی (پیش‌بینی تقاضا)</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-[#2B3048] flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#8A96AC]">شماره تماس مستقیم:</span>
              <span className="font-mono-ltr font-bold text-[#0AB7A3]">۰۹۱۹۵۲۵۳۴۶۲</span>
            </div>
          </motion.div>

          {/* Founder 2: Hossein Naderi */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="rounded-2xl bg-[#1E2235]/70 border border-[#FE5A40] p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#0C0F1A] border border-[#FE5A40] shrink-0">
                  <img
                    src="/assets/aistudio/100082376_f32ee439.jpg"
                    alt="حسین نادری"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#F6F9FD]">حسین نادری</h3>
                  <div className="text-xs sm:text-sm font-bold text-[#FE5A40] mt-1">
                    هم‌بنیان‌گذار • محصول و تجربه کاربری
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 pt-3 border-t border-[#2B3048] text-xs sm:text-sm text-[#F6F9FD]">
                <li className="flex items-start gap-2">
                  <span className="text-[#FE5A40] font-black">•</span>
                  <span>مدیر محصول در «دراپینو»</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FE5A40] font-black">•</span>
                  <span>طراح تجربه کاربری در «زرین‌پال»</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FE5A40] font-black">•</span>
                  <span>کسب رتبه ۱ فین‌تک‌کاپ نمایشگاه الکامپ</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-[#2B3048] flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#8A96AC]">شماره تماس مستقیم:</span>
              <span className="font-mono-ltr font-bold text-[#FE5A40]">۰۹۳۳۸۸۸۱۹۱۱</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 16 — THE ASK & BUDGET ALLOCATION (DECLUTTERED, SPACIOUS 16:9 FIT, BRAND PALETTE)
 */
export const Slide16AskAndBudget: React.FC = () => {
  const [selectedBudget, setSelectedBudget] = useState<BudgetAllocationItem>(BUDGET_ITEMS[0]);
  const [activeTranche, setActiveTranche] = useState<1 | 2>(1);

  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  let cumulativePercent = 0;

  return (
    <section
      aria-label="اسلاید شانزدهم: درخواست سرمایه ۹ میلیارد تومانی و تقسیم بودجه"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                جذب سرمایه دو مرحله‌ای • ۶۵٪ نقدی + ۳۵٪ زیرساخت و شبکه فروش
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                جذب سرمایه: <span className="text-[#FE5A40]">۹ میلیارد تومان</span> در ازای{' '}
                <span className="text-[#0AB7A3]">۱۵٪ سهام</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-xs bg-[#1E2235] px-3.5 py-1.5 rounded-lg border border-[#0AB7A3]/60">
              <span className="text-[#8A96AC]">ارزش‌گذاری:</span>
              <span className="font-extrabold text-[#F6F9FD]">۶۰ میلیارد تومان</span>
              <span>·</span>
              <span className="text-[#0AB7A3] font-bold">سربه‌سر با ۱۰ مشتری</span>
            </div>
            <span className="hidden md:inline-block font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1.5 rounded bg-[#1E2235] border border-[#2B3048]">
              16 / 17
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-auto py-2">
          {/* Right 7 Cols: Clean Donut & 5 Single-Line Bars */}
          <div className="lg:col-span-7 rounded-2xl bg-[#1E2235]/60 border border-[#2B3048] p-4 sm:p-5 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-extrabold text-[#F6F9FD]">
                محل مصرف سرمایه (۹ میلیارد تومان)
              </h3>
              <span className="text-xs text-[#8A96AC]">روی هر بخش کلیک کنید</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              {/* SVG Donut Chart */}
              <div className="sm:col-span-5 flex items-center justify-center">
                <svg viewBox="0 0 180 180" className="w-40 h-40">
                  {BUDGET_ITEMS.map((item) => {
                    const strokeDasharray = `${(item.percent / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -((cumulativePercent / 100) * circumference);
                    cumulativePercent += item.percent;
                    const isSelected = selectedBudget.id === item.id;

                    return (
                      <circle
                        key={item.id}
                        cx="90"
                        cy="90"
                        r={radius}
                        fill="transparent"
                        stroke={item.color}
                        strokeWidth={isSelected ? 22 : 16}
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        transform="rotate(-90 90 90)"
                        onClick={() => setSelectedBudget(item)}
                        className="cursor-pointer transition-all duration-200"
                      />
                    );
                  })}
                  <circle cx="90" cy="90" r="48" fill="#0C0F1A" />
                  <text
                    x="90"
                    y="85"
                    textAnchor="middle"
                    fill={selectedBudget.color}
                    fontSize="22"
                    fontWeight="900"
                  >
                    {selectedBudget.percentFa}
                  </text>
                  <text
                    x="90"
                    y="105"
                    textAnchor="middle"
                    fill="#F6F9FD"
                    fontSize="11"
                    fontWeight="700"
                  >
                    {selectedBudget.amountFa}
                  </text>
                </svg>
              </div>

              {/* 5 Compact Rows */}
              <div className="sm:col-span-7 space-y-2">
                {BUDGET_ITEMS.map((item) => {
                  const isSelected = selectedBudget.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedBudget(item)}
                      onMouseEnter={() => setSelectedBudget(item)}
                      style={{
                        borderColor: isSelected ? item.color : '#2B3048',
                      }}
                      className="px-3 py-2 rounded-xl bg-[#0C0F1A]/90 border transition-all cursor-pointer flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="font-bold text-[#F6F9FD]">{item.title}</span>
                      </div>
                      <span className="font-black whitespace-nowrap" style={{ color: item.color }}>
                        {item.amountFa} ({item.percentFa})
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="p-3 rounded-xl bg-[#0C0F1A] border text-xs"
              style={{ borderColor: selectedBudget.color }}
            >
              <span className="font-bold ml-1.5" style={{ color: selectedBudget.color }}>
                خروجی {selectedBudget.title}:
              </span>
              <span className="text-[#F6F9FD]">{selectedBudget.deliverables}</span>
            </div>
          </div>

          {/* Left 5 Cols: Two Clean Milestone Tranches */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            <div
              onClick={() => setActiveTranche(1)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeTranche === 1
                  ? 'bg-[#1E2235] border-[#0AB7A3]'
                  : 'bg-[#1E2235]/50 border-[#2B3048]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-[#0AB7A3] text-[#0C0F1A] text-xs font-black">
                  مرحله اول • ماه اول (هم‌زمان با قرارداد)
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#0AB7A3]">
                  ۴ میلیارد تومان
                </span>
              </div>
              <p className="mt-2.5 text-xs sm:text-sm text-[#F6F9FD] leading-relaxed">
                دریافت در ابتدای همکاری برای ۶ ماه اول: تکمیل نسخه نصبی، تجهیز سرور تست و اجرای ۳ پایلوت در شرکت‌های بالای ۳۰ نفر.
              </p>
            </div>

            <div
              onClick={() => setActiveTranche(2)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeTranche === 2
                  ? 'bg-[#1E2235] border-[#FE5A40]'
                  : 'bg-[#1E2235]/50 border-[#2B3048]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-[#FE5A40] text-[#0C0F1A] text-xs font-black">
                  مرحله دوم • ماه هفتم (پس از پایلوت‌ها)
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#FE5A40]">
                  ۵ میلیارد تومان
                </span>
              </div>
              <p className="mt-2.5 text-xs sm:text-sm text-[#F6F9FD] leading-relaxed">
                دریافت در ابتدای ماه هفتم پس از موفقیت پایلوت‌ها: گسترش تیم فروش B2B، ورود به هلدینگ‌ها و رسیدن به ۱۰ مشتری فعال.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0C0F1A] border border-[#2B3048] flex items-center justify-between text-xs font-extrabold">
              <span className="text-[#0AB7A3]">نقدی: ۵/۸۵ میلیارد (۶۵٪)</span>
              <span className="text-[#5B6880]">|</span>
              <span className="text-[#F6F9FD]">زیرساخت و شبکه فروش: ۳/۱۵ میلیارد (۳۵٪)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 17 (FINAL SLIDE) — THANK YOU & CLOSING (NO TOP "سینا" BOX, WITH OFFICIAL MASTER MARK)
 */
export const Slide17ClosingThankYou: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
  return (
    <section
      aria-label="اسلاید پایانی: سپاس از همراهی شما"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 text-center justify-between py-4">
        <div className="flex justify-center">
          <div className="p-3.5 rounded-2xl bg-[#1E2235]/70 border border-[#2B3048]">
            <SeynaroMasterMark className="w-12 h-12" />
          </div>
        </div>

        <div className="space-y-3 my-auto py-4">
          <div className="text-base sm:text-lg font-bold text-[#0AB7A3]">
            ساعت ۲ نصفه‌شب؛ این بار هیچ تلفنی از سرِ بحران زنگ نمی‌خوره.
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#F6F9FD] leading-tight">
            سپاس از همراهی شما
          </h2>
          <p className="text-lg sm:text-2xl font-extrabold text-[#0AB7A3]">
            آدما جابه‌جا میشن، اما کارِ شرکت هیچ‌وقت نمی‌ایسته.
          </p>
        </div>

        {/* Contact & Founders Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
          {/* Ali Ajvand */}
          <div className="p-4 rounded-2xl bg-[#1E2235]/70 border border-[#0AB7A3]/60 flex items-center gap-3.5 text-right">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-[#0C0F1A] border border-[#0AB7A3] shrink-0">
              <img
                src="/assets/aistudio/5800704537475008145__1__2c9a616c.jpg"
                alt="علی آجوند"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="text-base font-extrabold text-[#F6F9FD]">علی آجوند</div>
              <div className="text-xs text-[#0AB7A3]">دیتا، هوش مصنوعی و فروش</div>
              <div className="mt-1 font-mono-ltr text-sm text-[#F6F9FD] font-bold">
                ۰۹۱۹۵۲۵۳۴۶۲
              </div>
            </div>
          </div>

          {/* Hossein Naderi */}
          <div className="p-4 rounded-2xl bg-[#1E2235]/70 border border-[#FE5A40]/60 flex items-center gap-3.5 text-right">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-[#0C0F1A] border border-[#FE5A40] shrink-0">
              <img
                src="/assets/aistudio/100082376_f32ee439.jpg"
                alt="حسین نادری"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="text-base font-extrabold text-[#F6F9FD]">حسین نادری</div>
              <div className="text-xs text-[#FE5A40]">محصول و تجربه کاربری</div>
              <div className="mt-1 font-mono-ltr text-sm text-[#F6F9FD] font-bold">
                ۰۹۳۳۸۸۸۱۹۱۱
              </div>
            </div>
          </div>

          {/* Website */}
          <div className="p-4 rounded-2xl bg-[#0AB7A3] text-[#0C0F1A] flex flex-col items-center justify-center">
            <div className="text-xs font-extrabold opacity-85">وب‌سایت سینارو</div>
            <div className="font-mono-ltr text-xl font-black mt-0.5">
              www.seynaro.ir
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={onRestart}
            className="px-5 py-2 rounded-lg bg-[#1E2235] border border-[#2B3048] hover:border-[#0AB7A3] text-xs sm:text-sm font-bold text-[#8A96AC] hover:text-[#F6F9FD] transition-colors"
          >
            برگشت به اسلاید اول
          </button>
        </div>
      </div>
    </section>
  );
};
