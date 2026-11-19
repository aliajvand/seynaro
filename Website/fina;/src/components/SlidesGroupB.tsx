import React, { useState } from 'react';
import { motion } from 'motion/react';
import { STAKEHOLDER_VALUE_MAP, SURVEY_RESULTS } from '../data/slidesData';
import { SeynaroMasterMark } from './ParticleHeroSlide';

/**
 * SLIDE 06 — VALUE DELIVERED TO THE COMPANY & CONCEPTUAL SHADOW RUN (ARCHITECTURAL 5/7 SPLIT)
 */
export const Slide06CompanyValueGraph: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<'onboarding' | 'offboarding' | 'logic' | 'shadowrun'>('shadowrun');
  const [scenarioIdx, setScenarioIdx] = useState<number>(0);

  const conceptualScenarios = [
    {
      category: 'مثال ۱: نقد دیزاین (UI/UX)',
      question: '«دو تا ایراد اصلی دیزاین این صفحه پرداخت رو بگو؛ و اگر کارفرما اصرار داشت مرحله تایید حذف بشه، چه تصمیمی می‌گیری؟»',
      expertLogic:
        '۱. دکمه انصراف و پرداخت هم‌رنگ هستند. ۲. کارمزد ریز نوشته شده. اگر کارفرما اصرار کرد، مرحله تایید را فقط برای مبالغ سنگین نگه می‌داریم.',
      candidateEval: 'تشخیص دقیق هر دو ایراد دیزاین و پیشنهاد راه‌حل شرطی سقف مبلغ.',
      alignmentScore: '۹۴٪ هم‌فکری',
    },
    {
      category: 'مثال ۲: معماری فنی و کد',
      question: '«چرا توی این سرویس کل جدول رو کش نکردیم؟ و موقع ترافیک سنگین چه تصمیمی می‌گیری؟»',
      expertLogic:
        'کش کردن کل جدول باعث خطای موجودی می‌شود. موقع شلوغی، کارها را می‌فرستیم توی صف ولی قفل اصلی تراکنش را حفظ می‌کنیم.',
      candidateEval: 'تشخیص درست دلیل فنی و حفظ امنیت تراکنش در زمان شلوغی.',
      alignmentScore: '۹۱٪ هم‌فکری',
    },
    {
      category: 'مثال ۳: مدیریت بحران',
      question: '«بین قابلیت جدید برای مشتری بزرگ و رفع کندی سرور اصلی، کدوم رو اول انجام میدی و چرا؟»',
      expertLogic:
        'پایداری سرور اصلی خط قرمز است. اول سرور را پایدار می‌کنیم و به مشتری بزرگ یک راه‌حل موقت می‌دهیم.',
      candidateEval: 'تشخیص درست اولویت پایداری کل شرکت نسبت به یک درخواست موردی.',
      alignmentScore: '۹۶٪ هم‌فکری',
    },
  ];

  const nodeDetails = {
    onboarding: {
      title: 'آموزش سریع نیروی جدید (آنبوردینگ)',
      metric: 'کاهش آموزش از ۵ ماه به ۱ ماه',
      desc: 'نفر جدید با چالش‌های واقعی کار در «Shadow Run» تمرین می‌کند و سریع راه می‌افتد.',
    },
    offboarding: {
      title: 'خروج امن نیرو (آف‌بوردینگ)',
      metric: 'حفظ ۹۵٪ تجربه کاری',
      desc: 'پیش از خروج نفر کلیدی، منطق تصمیم‌گیری او ثبت و به جانشین منتقل شده است.',
    },
    logic: {
      title: 'ثبت تجربه و منطق افراد',
      metric: 'گفتگوهای ۲ دقیقه‌ای',
      desc: 'ثبت «چرایی» تصمیم‌ها و قلق‌های کاری در طول کار روزمره بدون گرفتن وقت تیم.',
    },
    shadowrun: {
      title: 'Shadow Run — سنجش مفهومی جانشین',
      metric: 'سنجش طرز فکر در عمل',
      desc: 'سؤال‌های مفهومی و موقعیت‌های واقعی کار برای اطمینان از هم‌فکری جانشین با نفر ارشد.',
    },
  };

  const activeScenario = conceptualScenarios[scenarioIdx];

  return (
    <section
      aria-label="اسلاید ششم: آورده‌های شرکت و Shadow Run مفهومی"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Top Architectural Header Bar */}
        <div className="w-full flex items-center justify-between border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                کارکرد عملی محصول • پیوند حافظه سازمانی با سنجش عملی جانشین
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                سینارو چه آورده‌ای برای شرکت داره؟
              </h2>
            </div>
          </div>
          <span className="font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1 rounded bg-[#1E2235] border border-[#2B3048]">
            06 / 17
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch my-auto py-2">
          {/* Right 5 Cols: Clean Unboxed Orbital SVG Graph (ثبت منطق افراد NOT connected to Shadow Run) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#1E2235]/55 border border-[#2B3048] p-5 flex flex-col justify-between space-y-4">
            <svg
              viewBox="0 0 460 250"
              className="w-full h-auto"
              aria-label="گراف عصبی آنبوردینگ، آف‌بوردینگ، ثبت منطق افراد و Shadow Run"
            >
              <defs>
                <linearGradient id="seynaroSynapseBeam" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="#0AB7A3" />
                  <stop offset="100%" stopColor="#FE5A40" />
                </linearGradient>
              </defs>

              {/* Orbital Ring on Right */}
              <circle
                cx="330"
                cy="125"
                r="82"
                fill="none"
                stroke="#2B3048"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />

              {/* Single Connector from Onboarding to Shadow Run (No line from ثبت منطق افراد!) */}
              <path
                d="M 306 46 C 235 46, 185 75, 142 105"
                fill="none"
                stroke="url(#seynaroSynapseBeam)"
                strokeWidth="2.5"
                className="animate-dash-flow"
              />

              {/* Node 1: آنبوردینگ */}
              <g onClick={() => setSelectedNode('onboarding')} className="cursor-pointer">
                <circle
                  cx="330"
                  cy="42"
                  r="22"
                  fill="#0C0F1A"
                  stroke={selectedNode === 'onboarding' ? '#0AB7A3' : '#F6F9FD'}
                  strokeWidth={selectedNode === 'onboarding' ? '2.8' : '1.8'}
                />
                <circle cx="330" cy="42" r="5" fill="#0AB7A3" />
                <text x="330" y="84" textAnchor="middle" fill="#F6F9FD" fontSize="12.5" fontWeight="800">
                  آنبوردینگ سریع
                </text>
              </g>

              {/* Node 2: آف‌بوردینگ */}
              <g onClick={() => setSelectedNode('offboarding')} className="cursor-pointer">
                <circle
                  cx="400"
                  cy="174"
                  r="22"
                  fill="#0C0F1A"
                  stroke={selectedNode === 'offboarding' ? '#0AB7A3' : '#8A96AC'}
                  strokeWidth={selectedNode === 'offboarding' ? '2.8' : '1.8'}
                />
                <circle cx="400" cy="174" r="5" fill="#0AB7A3" />
                <text x="400" y="216" textAnchor="middle" fill="#F6F9FD" fontSize="12.5" fontWeight="800">
                  آف‌بوردینگ امن
                </text>
              </g>

              {/* Node 3: ثبت منطق افراد (On the right orbital ring, NOT wired to Shadow Run) */}
              <g onClick={() => setSelectedNode('logic')} className="cursor-pointer">
                <circle
                  cx="260"
                  cy="174"
                  r="22"
                  fill="#0C0F1A"
                  stroke={selectedNode === 'logic' ? '#0AB7A3' : '#8A96AC'}
                  strokeWidth={selectedNode === 'logic' ? '2.8' : '1.8'}
                />
                <circle cx="260" cy="174" r="5" fill="#0AB7A3" />
                <text x="260" y="216" textAnchor="middle" fill="#F6F9FD" fontSize="12.5" fontWeight="800">
                  ثبت منطق افراد
                </text>
              </g>

              {/* Focal Left Node: Shadow Run */}
              <g onClick={() => setSelectedNode('shadowrun')} className="cursor-pointer">
                <circle
                  cx="95"
                  cy="125"
                  r="52"
                  fill="rgba(254, 90, 64, 0.14)"
                  stroke="#FE5A40"
                  strokeWidth={selectedNode === 'shadowrun' ? '3' : '2'}
                />
                <circle
                  cx="95"
                  cy="125"
                  r="38"
                  fill="#0C0F1A"
                  stroke="#FE5A40"
                  strokeOpacity="0.45"
                  strokeWidth="1.2"
                />
                <text
                  x="95"
                  y="122"
                  textAnchor="middle"
                  fill="#FE5A40"
                  fontSize="11.5"
                  fontWeight="900"
                  fontFamily="JetBrains Mono, monospace"
                >
                  Shadow Run
                </text>
                <text x="95" y="141" textAnchor="middle" fill="#F6F9FD" fontSize="11" fontWeight="700">
                  آزمون مفهومی
                </text>
                <text x="95" y="198" textAnchor="middle" fill="#0AB7A3" fontSize="12" fontWeight="700">
                  سنجش طرز فکر جانشین
                </text>
              </g>
            </svg>

            <div className="p-4 rounded-xl bg-[#0C0F1A] border border-[#2B3048] space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-extrabold text-[#F6F9FD]">
                  {nodeDetails[selectedNode].title}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#1E2235] border border-[#0AB7A3]/50 text-xs font-bold text-[#0AB7A3] whitespace-nowrap">
                  {nodeDetails[selectedNode].metric}
                </span>
              </div>
              <p className="text-xs text-[#8A96AC] leading-relaxed">
                {nodeDetails[selectedNode].desc}
              </p>
            </div>
          </div>

          {/* Left 7 Cols: Conceptual Shadow Run Workstation */}
          <div className="lg:col-span-7 rounded-2xl bg-[#1E2235]/60 border border-[#2B3048] p-5 sm:p-6 flex flex-col justify-between space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2B3048] pb-3">
              <div>
                <div className="text-xs font-bold text-[#FE5A40]">
                  محیط شبیه‌ساز <span className="font-mono-ltr">Shadow Run</span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#F6F9FD]">
                  نمونه سؤالات مفهومی برای سنجش منطق تصمیم‌گیری جانشین
                </h3>
              </div>
              <span className="px-3 py-1 rounded-lg bg-[#0AB7A3]/15 border border-[#0AB7A3] text-[#0AB7A3] text-xs font-extrabold">
                {activeScenario.alignmentScore}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {['۱. ایراد دیزاین', '۲. تصمیم فنی', '۳. مدیریت بحران'].map((label, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setScenarioIdx(idx)}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                    scenarioIdx === idx
                      ? 'bg-[#0AB7A3] text-[#0C0F1A] border-[#0AB7A3]'
                      : 'bg-[#0C0F1A] text-[#8A96AC] border-[#2B3048] hover:text-[#F6F9FD]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#0C0F1A] border border-[#FE5A40]/60">
                <div className="text-xs font-bold text-[#FE5A40]">{activeScenario.category}</div>
                <p className="mt-1.5 text-sm sm:text-base font-bold text-[#F6F9FD] leading-relaxed">
                  {activeScenario.question}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0C0F1A] border border-[#0AB7A3]/60">
                <div className="text-xs font-bold text-[#0AB7A3]">
                  منطق ثبت‌شده از کارشناس ارشد شرکت:
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-[#F6F9FD] leading-relaxed">
                  {activeScenario.expertLogic}
                </p>
              </div>

              <div className="px-4 py-3 rounded-xl bg-[#1E2235] border border-[#2B3048] flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[#8A96AC]">{activeScenario.candidateEval}</span>
                <span className="font-extrabold text-[#0AB7A3] shrink-0 mr-2">
                  آماده تحویل کار ✓
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 07 — 3-ROLE VALUE MAP (ARCHITECTURAL TABS + UNBOXED SVG DIAGRAM, BRAND PALETTE)
 */
export const Slide07StakeholderValueMap: React.FC = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<'employee' | 'manager' | 'ceo'>('employee');

  const activeRole =
    STAKEHOLDER_VALUE_MAP.find((r) => r.id === selectedRoleId) || STAKEHOLDER_VALUE_MAP[0];

  return (
    <section
      aria-label="اسلاید هفتم: ارزش سینارو برای کارمند، مدیر واحد و مدیرعامل"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Top Architectural Header + 3 Role Tabs */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                ارزش‌آفرینی سه‌وجهی • ابزارهای اختصاصی برای هر سطح سازمان
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                سینارو برای هر نقش چه ابزاری داره؟
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#1E2235] border border-[#2B3048]">
              {STAKEHOLDER_VALUE_MAP.map((role) => {
                const isActive = role.id === selectedRoleId;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRoleId(role.id)}
                    style={{
                      backgroundColor: isActive ? role.accentColor : 'transparent',
                      color: isActive ? '#0C0F1A' : '#8A96AC',
                    }}
                    className="px-3.5 py-2 rounded-lg text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap"
                  >
                    {role.titleFa} ({role.items.length})
                  </button>
                );
              })}
            </div>
            <span className="hidden md:inline-block font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1.5 rounded bg-[#1E2235] border border-[#2B3048]">
              07 / 17
            </span>
          </div>
        </div>

        {/* Main 12-Col Grid */}
        <motion.div
          key={activeRole.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch my-auto py-2"
        >
          {/* Right 7 Cols: Clean Architectural Bento List */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
            <div
              style={{ borderColor: activeRole.accentColor }}
              className="p-4 rounded-xl bg-[#1E2235]/75 border flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <span
                  className="text-base sm:text-lg font-black ml-2"
                  style={{ color: activeRole.accentColor }}
                >
                  دغدغه {activeRole.titleFa}:
                </span>
                <span className="text-xs sm:text-sm text-[#F6F9FD]">{activeRole.problemSummary}</span>
              </div>
              <span
                className="px-3 py-1 rounded-md text-xs font-extrabold bg-[#0C0F1A] border border-[#2B3048] shrink-0 self-start sm:self-auto"
                style={{ color: activeRole.accentColor }}
              >
                {activeRole.badgeText}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeRole.items.map((item, idx) => (
                <div
                  key={item.num}
                  className={`p-3.5 rounded-xl bg-[#1E2235]/50 border border-[#2B3048] flex items-center justify-between gap-3 ${
                    activeRole.items.length % 2 === 1 && idx === activeRole.items.length - 1
                      ? 'sm:col-span-2'
                      : ''
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-black px-1.5 py-0.5 rounded bg-[#0C0F1A] shrink-0"
                        style={{ color: activeRole.accentColor }}
                      >
                        {item.num}
                      </span>
                      <h4 className="text-sm font-extrabold text-[#F6F9FD] truncate">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#8A96AC] mt-1 pr-7">{item.desc}</p>
                  </div>
                  <span
                    className="text-sm font-black shrink-0"
                    style={{ color: activeRole.accentColor }}
                  >
                    ✓
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Left 5 Cols: Unboxed SVG Diagram (Zero Text Boxes, Zero Overflow) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#1E2235]/55 border border-[#2B3048] p-5 flex flex-col justify-between">
            <div className="my-auto flex items-center justify-center">
              {selectedRoleId === 'employee' && (
                <svg viewBox="0 0 380 265" className="w-full h-auto" aria-label="دیاگرام کارمند">
                  <circle
                    cx="190"
                    cy="128"
                    r="88"
                    fill="none"
                    stroke="#2B3048"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  />
                  <circle
                    cx="190"
                    cy="128"
                    r="40"
                    fill="rgba(10, 183, 163, 0.16)"
                    stroke="#0AB7A3"
                    strokeWidth="2.2"
                  />
                  <text x="190" y="126" textAnchor="middle" fill="#F6F9FD" fontSize="14.5" fontWeight="900">
                    کارمند
                  </text>
                  <text x="190" y="145" textAnchor="middle" fill="#0AB7A3" fontSize="11" fontWeight="700">
                    مالک دانش
                  </text>

                  {/* Top Node */}
                  <line x1="190" y1="88" x2="190" y2="50" stroke="#0AB7A3" strokeWidth="2" className="animate-dash-flow" />
                  <circle cx="190" cy="40" r="8" fill="#0AB7A3" />
                  <text x="190" y="22" textAnchor="middle" fill="#F6F9FD" fontSize="12.5" fontWeight="800">
                    فضای شخصی و دستیار هوشمند
                  </text>

                  {/* Bottom Right Node */}
                  <line x1="224" y1="150" x2="275" y2="184" stroke="#0AB7A3" strokeWidth="2" className="animate-dash-flow" />
                  <circle cx="284" cy="190" r="8" fill="#0AB7A3" />
                  <text x="284" y="216" textAnchor="middle" fill="#0AB7A3" fontSize="12.5" fontWeight="800">
                    گذرنامه مهارتی
                  </text>

                  {/* Bottom Left Node */}
                  <line x1="156" y1="150" x2="105" y2="184" stroke="#F6F9FD" strokeWidth="2" className="animate-dash-flow" />
                  <circle cx="96" cy="190" r="8" fill="#F6F9FD" />
                  <text x="96" y="216" textAnchor="middle" fill="#F6F9FD" fontSize="12.5" fontWeight="800">
                    اشتراک زمان‌دار
                  </text>

                  <line x1="45" y1="240" x2="335" y2="240" stroke="#2B3048" strokeWidth="1.5" />
                  <text x="190" y="258" textAnchor="middle" fill="#0AB7A3" fontSize="12" fontWeight="800">
                    دیوار آتش منابع انسانی: بدون مچ‌گیری ✓
                  </text>
                </svg>
              )}

              {selectedRoleId === 'manager' && (
                <svg viewBox="0 0 380 265" className="w-full h-auto" aria-label="دیاگرام مدیر واحد">
                  <circle
                    cx="190"
                    cy="48"
                    r="30"
                    fill="rgba(254, 90, 64, 0.16)"
                    stroke="#FE5A40"
                    strokeWidth="2.2"
                  />
                  <text x="190" y="52" textAnchor="middle" fill="#F6F9FD" fontSize="13" fontWeight="900">
                    مدیر واحد
                  </text>

                  <path d="M 164 68 L 85 124" stroke="#FE5A40" strokeWidth="2" className="animate-dash-flow" />
                  <path d="M 190 78 L 190 124" stroke="#0AB7A3" strokeWidth="2" className="animate-dash-flow" />
                  <path d="M 216 68 L 295 124" stroke="#F6F9FD" strokeWidth="2" className="animate-dash-flow" />

                  <circle cx="85" cy="138" r="12" fill="#0C0F1A" stroke="#FE5A40" strokeWidth="2.2" />
                  <text x="85" y="172" textAnchor="middle" fill="#FE5A40" fontSize="12.5" fontWeight="800">
                    کشف گلوگاه
                  </text>

                  <circle cx="190" cy="138" r="12" fill="#0C0F1A" stroke="#0AB7A3" strokeWidth="2.2" />
                  <text x="190" y="172" textAnchor="middle" fill="#0AB7A3" fontSize="12.5" fontWeight="800">
                    تعادل بار تیم
                  </text>

                  <circle cx="295" cy="138" r="12" fill="#0C0F1A" stroke="#F6F9FD" strokeWidth="2.2" />
                  <text x="295" y="172" textAnchor="middle" fill="#F6F9FD" fontSize="12.5" fontWeight="800">
                    پوشش مرخصی
                  </text>

                  {/* Clean Progress Bar */}
                  <rect x="60" y="206" width="260" height="10" rx="5" fill="#0C0F1A" />
                  <rect x="60" y="206" width="220" height="10" rx="5" fill="#0AB7A3" />
                  <text x="190" y="244" textAnchor="middle" fill="#0AB7A3" fontSize="12.5" fontWeight="800">
                    ۱۰۰٪ کارهای واحد دارای جانشین آماده ✓
                  </text>
                </svg>
              )}

              {selectedRoleId === 'ceo' && (
                <svg viewBox="0 0 380 265" className="w-full h-auto" aria-label="دیاگرام مدیرعامل">
                  <circle cx="190" cy="124" r="90" fill="none" stroke="#2B3048" strokeWidth="1.5" />
                  <circle
                    cx="190"
                    cy="124"
                    r="62"
                    fill="none"
                    stroke="#0AB7A3"
                    strokeOpacity="0.4"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                  />
                  <circle
                    cx="190"
                    cy="124"
                    r="36"
                    fill="rgba(10, 183, 163, 0.18)"
                    stroke="#0AB7A3"
                    strokeWidth="2.2"
                  />

                  <text x="190" y="129" textAnchor="middle" fill="#F6F9FD" fontSize="14" fontWeight="900">
                    مدیرعامل
                  </text>

                  <circle cx="95" cy="56" r="7" fill="#0AB7A3" />
                  <text x="95" y="38" textAnchor="middle" fill="#F6F9FD" fontSize="12" fontWeight="800">
                    واحد فنی ✓
                  </text>

                  <circle cx="285" cy="56" r="7" fill="#0AB7A3" />
                  <text x="285" y="38" textAnchor="middle" fill="#F6F9FD" fontSize="12" fontWeight="800">
                    واحد مالی ✓
                  </text>

                  <circle cx="95" cy="192" r="7" fill="#0AB7A3" />
                  <text x="95" y="216" textAnchor="middle" fill="#F6F9FD" fontSize="12" fontWeight="800">
                    زنجیره تأمین ✓
                  </text>

                  <circle cx="285" cy="192" r="7" fill="#0AB7A3" />
                  <text x="285" y="216" textAnchor="middle" fill="#F6F9FD" fontSize="12" fontWeight="800">
                    فروش و بازرگانی ✓
                  </text>

                  <text x="190" y="254" textAnchor="middle" fill="#0AB7A3" fontSize="12.5" fontWeight="800">
                    پایداری کامل شرکت بدون وابستگی به فرد ✓
                  </text>
                </svg>
              )}
            </div>

            <div className="p-3.5 rounded-xl bg-[#0C0F1A] border border-[#2B3048] text-xs text-[#8A96AC] text-center">
              <span className="text-[#0AB7A3] font-bold">تعهد معماری سینارو: </span>
              جداسازی کامل فضای شخصی کارمند از داده‌های عمومی سازمان
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * SLIDE 08 — FIELD SURVEY RESULTS OF 20 COMPANIES (ARCHITECTURAL RADIAL GAUGES, BRAND PALETTE)
 */
export const Slide08FieldSurveyGrid: React.FC = () => {
  const [selectedSurveyId, setSelectedSurveyId] = useState<string>('s1');

  const radius = 48;
  const circumference = 2 * Math.PI * radius;

  return (
    <section
      aria-label="اسلاید هشتم: نتایج پیمایش میدانی ۲۰ شرکت"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Top Architectural Header Bar */}
        <div className="w-full flex items-center justify-between border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0AB7A3]">
                اعتبارسنجی بازار • پیمایش مستقیم از مدیران و کارشناسان در ۲۰ شرکت
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F6F9FD]">
                بازخورد واقعی بازار از ۲۰ شرکت بررسی‌شده:
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block px-3 py-1 rounded-lg bg-[#0AB7A3]/15 border border-[#0AB7A3] text-xs font-bold text-[#0AB7A3]">
              ۸ شرکت آماده شروع پایلوت ✓
            </span>
            <span className="font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1 rounded bg-[#1E2235] border border-[#2B3048]">
              08 / 17
            </span>
          </div>
        </div>

        {/* 4 Architectural Radial Cards with Generous Whitespace */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-auto py-3">
          {SURVEY_RESULTS.map((cell) => {
            const isSelected = selectedSurveyId === cell.id;
            const dashOffset = circumference - (cell.percentNumber / 100) * circumference;

            return (
              <div
                key={cell.id}
                onClick={() => setSelectedSurveyId(cell.id)}
                style={{ borderColor: isSelected ? cell.color : '#2B3048' }}
                className="rounded-2xl bg-[#1E2235]/60 border p-5 flex flex-col items-center text-center justify-between cursor-pointer transition-all hover:bg-[#1E2235]"
              >
                <div className="w-full flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded bg-[#0C0F1A] border border-[#2B3048] text-xs font-extrabold"
                    style={{ color: cell.color }}
                  >
                    {cell.ratioFa}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: cell.color }}
                  />
                </div>

                <div className="my-5 flex items-center justify-center">
                  <svg viewBox="0 0 124 124" className="w-32 h-32">
                    <circle
                      cx="62"
                      cy="62"
                      r={radius}
                      fill="#0C0F1A"
                      stroke="#2B3048"
                      strokeWidth="10"
                    />
                    <circle
                      cx="62"
                      cy="62"
                      r={radius}
                      fill="transparent"
                      stroke={cell.color}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      transform="rotate(-90 62 62)"
                    />
                    <text
                      x="62"
                      y="69"
                      textAnchor="middle"
                      fill="#F6F9FD"
                      fontSize="26"
                      fontWeight="900"
                    >
                      {cell.percentFa}
                    </text>
                  </svg>
                </div>

                <div className="w-full space-y-2 text-right border-t border-[#2B3048] pt-3.5">
                  <h3 className="text-sm sm:text-base font-extrabold text-[#F6F9FD] leading-snug">
                    {cell.headline}
                  </h3>
                  <p className="text-xs text-[#8A96AC] leading-relaxed">{cell.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * SLIDE 09 — DATA SOVEREIGNTY & ON-PREMISE DEPLOYMENT (ARCHITECTURAL 60/40 SPLIT, BRAND PALETTE)
 */
export const Slide09SovereigntyReality: React.FC = () => {
  return (
    <section
      aria-label="اسلاید نهم: شرکت‌ها دوست ندارند دیتای شرکتشان در اینترنت پخش شود"
      className="slide-frame slide-scroll bg-architectural-grid"
    >
      <div className="slide-canvas-16x9 justify-between py-2">
        {/* Top Architectural Header Bar */}
        <div className="w-full flex items-center justify-between border-b border-[#2B3048] pb-3.5">
          <div className="flex items-center gap-3">
            <SeynaroMasterMark className="w-7 h-7 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-[#0AB7A3]">
              امنیت مستقل • استقرار درون‌سازمانی و ۱۰۰٪ ایزوله (On-Premise Air-Gapped)
            </span>
          </div>
          <span className="font-mono-ltr text-xs font-bold text-[#8A96AC] px-2.5 py-1 rounded bg-[#1E2235] border border-[#2B3048]">
            09 / 17
          </span>
        </div>

        {/* Main 60/40 Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto py-3">
          {/* Right 7 Cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F6F9FD] leading-[1.45]">
              شرکت‌ها اکثراً دوست ندارند دیتای شرکتشان در{' '}
              <span className="text-[#FE5A40]">اینترنت پخش شود.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#8A96AC] leading-[1.8]">
              به همین دلیل، سینارو{' '}
              <span className="text-[#0AB7A3] font-bold">
                مستقیماً روی سرور داخلی خودِ شرکت و بدون نیاز به اینترنت
              </span>{' '}
              نصب می‌شود تا تمام اسناد، تجربه‌ها و منطق تصمیم‌گیری ۱۰۰٪ در اختیار خود سازمان بماند.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 sm:p-5 rounded-xl bg-[#0AB7A3]/12 border border-[#0AB7A3]">
                <div className="text-2xl font-black text-[#0AB7A3]">۷۶٪ مدیران</div>
                <div className="mt-1 text-sm font-bold text-[#F6F9FD]">
                  ترجیح قطعی نصب روی سرور داخلی شرکت
                </div>
                <div className="mt-0.5 text-xs text-[#8A96AC]">
                  اطمینان کامل از محرمانگی اسناد تجاری
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#1E2235]/65 border border-[#FE5A40]/60">
                <div className="text-2xl font-black text-[#FE5A40]">بدون قطعی</div>
                <div className="mt-1 text-sm font-bold text-[#F6F9FD]">
                  فعال حتی در زمان قطعی کامل اینترنت
                </div>
                <div className="mt-0.5 text-xs text-[#8A96AC]">
                  مستقل از تحریم یا اختلال شبکه جهانی
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1E2235]/55 border border-[#2B3048]">
                <div className="text-sm sm:text-base font-extrabold text-[#F6F9FD]">
                  هوش مصنوعی ۱۰۰٪ آفلاین و بومی
                </div>
                <div className="mt-1 text-xs text-[#8A96AC]">
                  پردازش کامل مدل‌های زبانی در شبکه داخلی شرکت
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1E2235]/55 border border-[#2B3048]">
                <div className="text-sm sm:text-base font-extrabold text-[#F6F9FD]">
                  تایید سریع حراست و فناوری اطلاعات
                </div>
                <div className="mt-1 text-xs text-[#8A96AC]">
                  صفر ارسال داده به سرورهای ابری بیرونی
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left 5 Cols: Clean Air-Gap On-Premise Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <div className="w-full rounded-2xl bg-[#1E2235]/55 border border-[#2B3048] p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-[#2B3048] pb-3 mb-4 text-xs sm:text-sm">
                <span className="font-bold text-[#F6F9FD]">معماری ایزوله درون‌سازمانی</span>
                <span className="font-mono-ltr text-xs font-bold text-[#0AB7A3]">AIR-GAPPED</span>
              </div>

              <svg
                viewBox="0 0 360 310"
                className="w-full h-auto"
                aria-label="نصب داخلی در برابر ابر"
              >
                {/* Top: Blocked Public Cloud */}
                <g transform="translate(55, 6)">
                  <path
                    d="M 65 76 L 185 76 C 210 76, 225 60, 215 40 C 208 24, 190 21, 178 26 C 166 4, 128 0, 110 18 C 90 10, 64 21, 62 42 C 44 45, 42 76, 65 76 Z"
                    fill="#0C0F1A"
                    stroke="#5B6880"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <line
                    x1="112"
                    y1="26"
                    x2="152"
                    y2="66"
                    stroke="#FE5A40"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="152"
                    y1="26"
                    x2="112"
                    y2="66"
                    stroke="#FE5A40"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </g>
                <text x="180" y="108" textAnchor="middle" fill="#FE5A40" fontSize="12.5" fontWeight="800">
                  سرویس ابری بیرونی: خطر نشت دیتا و قطعی اینترنت
                </text>

                {/* Firewall Line */}
                <line
                  x1="30"
                  y1="138"
                  x2="330"
                  y2="138"
                  stroke="#FE5A40"
                  strokeWidth="2"
                  strokeDasharray="7 5"
                />
                <text x="180" y="158" textAnchor="middle" fill="#8A96AC" fontSize="11.5" fontWeight="700">
                  مرز ایزوله (عدم خروج داده به اینترنت)
                </text>

                {/* Bottom: On-Premise Server */}
                <g transform="translate(55, 175)">
                  <rect
                    x="0"
                    y="0"
                    width="250"
                    height="90"
                    rx="12"
                    fill="#0C0F1A"
                    stroke="#0AB7A3"
                    strokeWidth="2.2"
                  />
                  <circle cx="34" cy="30" r="6" fill="#0AB7A3" className="animate-telemetry-pulse" />
                  <line
                    x1="54"
                    y1="30"
                    x2="215"
                    y2="30"
                    stroke="#2B3048"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />

                  <circle cx="34" cy="60" r="6" fill="#0AB7A3" className="animate-telemetry-pulse" />
                  <line
                    x1="54"
                    y1="60"
                    x2="215"
                    y2="60"
                    stroke="#2B3048"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </g>
                <text x="180" y="294" textAnchor="middle" fill="#0AB7A3" fontSize="13.5" fontWeight="900">
                  سرور اختصاصی داخل شرکت (۱۰۰٪ امن و مستقل) ✓
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
