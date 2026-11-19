export interface SlideMeta {
  index: number;
  numFa: string;
  shortTitle: string;
  sectionTag: string;
}

export const SLIDES_META: SlideMeta[] = [
  { index: 0, numFa: '۰۱', shortTitle: 'سینارو • کار شرکت نمی‌ایسته', sectionTag: 'شروع' },
  { index: 1, numFa: '۰۲', shortTitle: 'رفتن نیروهای کلیدی شرکت', sectionTag: 'مسئله اول' },
  { index: 2, numFa: '۰۳', shortTitle: 'اگر دکتر فضلی بود چه تصمیمی می‌گرفت؟', sectionTag: 'مسئله دوم' },
  { index: 3, numFa: '۰۴', shortTitle: 'قدیمی شدن داکیومنت‌ها بعد از ۶ ماه', sectionTag: 'مسئله سوم' },
  { index: 4, numFa: '۰۵', shortTitle: 'دانش صریح و ضمنی + ۶ موتور هوشمند', sectionTag: 'راه‌حل ما' },
  { index: 5, numFa: '۰۶', shortTitle: 'آورده‌های ما و Shadow Run مفهومی', sectionTag: 'کارکرد محصول' },
  { index: 6, numFa: '۰۷', shortTitle: 'ارزش سینارو برای کارمند، مدیر و مدیرعامل', sectionTag: 'ارزش‌آفرینی' },
  { index: 7, numFa: '۰۸', shortTitle: 'نتیجه نظرسنجی از ۲۰ شرکت', sectionTag: 'بازخورد بازار' },
  { index: 8, numFa: '۰۹', shortTitle: 'امنیت دیتا و نصب روی سرور شرکت', sectionTag: 'حفظ محرمانگی' },
  { index: 9, numFa: '۱۰', shortTitle: 'اندازه بازار (TAM / SAM / SOM)', sectionTag: 'بازار هدف' },
  { index: 10, numFa: '۱۱', shortTitle: 'مدل قیمت‌گذاری سازمانی', sectionTag: 'قیمت‌گذاری' },
  { index: 11, numFa: '۱۲', shortTitle: 'بیزینس مدل و درآمدزایی', sectionTag: 'مدل کسب‌وکار' },
  { index: 12, numFa: '۱۳', shortTitle: 'مقایسه با رقبای ایرانی و خارجی', sectionTag: 'مزیت رقابتی' },
  { index: 13, numFa: '۱۴', shortTitle: 'آینده محصول کجاست؟', sectionTag: 'نقشه راه' },
  { index: 14, numFa: '۱۵', shortTitle: 'تیم هم‌بنیان‌گذار سینارو', sectionTag: 'تیم ما' },
  { index: 15, numFa: '۱۶', shortTitle: 'سرمایه درخواستی و محل مصرف', sectionTag: 'جذب سرمایه' },
  { index: 16, numFa: '۱۷', shortTitle: 'سپاس از همراهی شما', sectionTag: 'پایان' },
];

export interface NeuroEngineNode {
  id: string;
  code: string;
  titleFa: string;
  titleEn: string;
  neuroDomain: string;
  summary: string;
  formulaOrMechanism: string;
  exampleOutput: string;
  accent: 'teal' | 'coral';
}

export const NEURO_ENGINES: NeuroEngineNode[] = [
  {
    id: 'm1',
    code: '۰۱',
    titleFa: 'ردیاب تصمیم‌های واقعی',
    titleEn: 'کشف از روی لاگ‌ها',
    neuroDomain: 'پایش رفتار کاری',
    summary: 'خواندن لاگ‌های کار (ERP، اکسل، کد) و کشف جاهایی که کار خارج از رویه عادی انجام شده.',
    formulaOrMechanism: 'مقایسه کار انجام‌شده با رویه مکتوب ← کشف قلق‌ها و استثناها',
    exampleOutput: 'تشخیص اینکه چرا یک پرونده خاص با شرط متفاوتی تایید شده است.',
    accent: 'teal',
  },
  {
    id: 'm2',
    code: '۰۲',
    titleFa: 'پرسش‌گر هوشمند ۲ دقیقه‌ای',
    titleEn: 'گفت‌وگوی کوتاه',
    neuroDomain: 'استخراج تجربه',
    summary: 'پرسیدن دلیل تصمیم‌های مهم در همان لحظه با ۲ سؤال کوتاه، بدون گرفتن وقت تیم.',
    formulaOrMechanism: 'پرسش ۲ دقیقه‌ای در لحظه ← ثبت «چرایی» تصمیم',
    exampleOutput: 'پرسش کوتاه از مدیر فنی درباره دلیل رد کردن یک گزینه طراحی.',
    accent: 'teal',
  },
  {
    id: 'm3',
    code: '۰۳',
    titleFa: 'تبدیل صحبت به قاعده',
    titleEn: 'ساختاردهی منطق',
    neuroDomain: 'مدل‌سازی ذهنی',
    summary: 'تبدیل توضیحات شفاهی و خودمانی به قواعد روشن «اگر... آنگاه... مگر اینکه...».',
    formulaOrMechanism: 'اگر (شرط برقرار بود) و (خط قرمزی نبود) ← تصمیم نهایی',
    exampleOutput: 'تبدیل ویس کارشناس ارشد به یک قانون شفاف برای نفر بعدی.',
    accent: 'teal',
  },
  {
    id: 'm4',
    code: '۰۴',
    titleFa: 'حافظه ماندگار ۳ لایه',
    titleEn: 'گراف دانش دائمی',
    neuroDomain: 'تثبیت حافظه',
    summary: 'ذخیره تجربه‌ها و روش کار در گراف دائمی بدون فراموشی یا توهم هوش مصنوعی.',
    formulaOrMechanism: 'حافظه رویدادی (تجربه) + معنایی (قوانین) + رویه‌ای (روش کار)',
    exampleOutput: 'ثبت دائمی قلق‌های فنی و تجاری شرکت در گراف دانش.',
    accent: 'teal',
  },
  {
    id: 'm5',
    code: '۰۵',
    titleFa: 'سنجش درستی و نبود تناقض',
    titleEn: 'راستی‌آزمایی منطقی',
    neuroDomain: 'کنترل صحت قواعد',
    summary: 'بررسی قواعد جدید با قوانین قبلی و لاگ‌های شرکت برای جلوگیری از ثبت اطلاعات متناقض.',
    formulaOrMechanism: 'تطبیق منطقی قواعد جدید با قوانین فعلی شرکت (SMT Solver)',
    exampleOutput: 'کشف تداخل بین دو رویه کاری پیش از آموزش به نیروی جدید.',
    accent: 'coral',
  },
  {
    id: 'm6',
    code: '۰۶',
    titleFa: 'قرنطینه تصمیم‌های حساس',
    titleEn: 'تایید دو نفره',
    neuroDomain: 'ایمنی تصمیم',
    summary: 'نگه داشتن تصمیم‌های پرریسک تا تایید مدیر واحد و ثبت سبک فکری هر متخصص.',
    formulaOrMechanism: 'تصمیم حساس ← نیاز به تایید کارشناس ارشد و مدیر واحد',
    exampleOutput: 'جلوگیری از اجرای خودسرانه کارهای مالی یا فنی حساس.',
    accent: 'coral',
  },
];

export interface ValueMapRole {
  id: 'employee' | 'manager' | 'ceo';
  titleFa: string;
  titleEn: string;
  subtitleFa: string;
  problemSummary: string;
  accentColor: string;
  glowColor: string;
  badgeText: string;
  items: { num: string; title: string; desc: string }[];
}

export const STAKEHOLDER_VALUE_MAP: ValueMapRole[] = [
  {
    id: 'employee',
    titleFa: 'کارمند',
    titleEn: 'Employee',
    subtitleFa: 'حفظ ارزش تخصص و راحتی در کار',
    problemSummary: 'ترس از جایگزین شدن و کلافگی از سؤال‌های تکراری همکاران',
    accentColor: '#0AB7A3',
    glowColor: 'rgba(10, 183, 163, 0.14)',
    badgeText: '۷ ابزار کارمند',
    items: [
      { num: '۰۱', title: 'داشبورد کارهای من', desc: 'نمای یکجا و مرتب کارهای روزانه' },
      { num: '۰۲', title: 'فضای شخصی دانش', desc: 'محیط امن یادداشت‌ها و تجربه‌های فردی' },
      { num: '۰۳', title: 'جست‌وجوی سریع فایل', desc: 'پیدا کردن فوری سوابق و تصمیم‌ها' },
      { num: '۰۴', title: 'دستیار شخصی پاسخ‌گو', desc: 'پاسخ خودکار به سؤالات تکراری همکاران' },
      { num: '۰۵', title: 'اشتراک‌گذاری زمان‌دار', desc: 'دسترسی موقت و قابل لغو در پروژه‌ها' },
      { num: '۰۶', title: 'گذرنامه مهارتی و رزومه', desc: 'کارنامه معتبر برای ترفیع و حقوق' },
      { num: '۰۷', title: 'دفتر شفافیت دسترسی', desc: 'مشاهده دقیق استفاده‌کنندگان از دانش' },
    ],
  },
  {
    id: 'manager',
    titleFa: 'مدیر واحد',
    titleEn: 'Manager',
    subtitleFa: 'تعادل بار تیم و پوشش کامل مرخصی',
    problemSummary: 'غافلگیری هنگام استعفا یا مرخصی نیروها و قفل شدن کارها',
    accentColor: '#FE5A40',
    glowColor: 'rgba(254, 90, 64, 0.14)',
    badgeText: '۷ ابزار مدیر واحد',
    items: [
      { num: '۰۱', title: 'ظرفیت زنده تیم', desc: 'دیدن بار کاری و زمان آزاد اعضا' },
      { num: '۰۲', title: 'تعادل بار کاری', desc: 'تقسیم منصفانه کار و پیشگیری از خستگی' },
      { num: '۰۳', title: 'نقشه کارهای تک‌نفره', desc: 'کشف کارهایی که فقط یک نفر بلد است' },
      { num: '۰۴', title: 'بررسی اثر مرخصی', desc: 'شبیه‌سازی غیبت افراد قبل از تایید مرخصی' },
      { num: '۰۵', title: 'پرونده‌ها و تعهدات باز', desc: 'پایش کارهای در خطر توقف' },
      { num: '۰۶', title: 'جابه‌جایی هوشمند کار', desc: 'سپردن تسک به جانشین آماده در شلوغی' },
      { num: '۰۷', title: 'پیش‌نویس گزارش هفتگی', desc: 'گزارش خودکار عملکرد واحد برای مدیرعامل' },
    ],
  },
  {
    id: 'ceo',
    titleFa: 'مدیرعامل',
    titleEn: 'CEO',
    subtitleFa: 'پایداری شرکت و حفظ دانش کلیدی',
    problemSummary: 'وابستگی ۷۵٪ کارهای حیاتی شرکت به چند نفر خاص',
    accentColor: '#0AB7A3',
    glowColor: 'rgba(10, 183, 163, 0.14)',
    badgeText: '۵ ابزار مدیرعامل',
    items: [
      { num: '۰۱', title: 'سازمان در یک نگاه', desc: 'تصویر کلی سلامت کارها در تمام واحدها' },
      { num: '۰۲', title: 'نقشه ریسک خوابیدن کار', desc: 'شناسایی نقاط آسیب‌پذیر پیش از بحران' },
      { num: '۰۳', title: 'فرآیندهای تک‌نفره و جانشین', desc: 'اطمینان از وجود جانشین برای هر کار مهم' },
      { num: '۰۴', title: 'پرونده‌های متوقف و گلوگاه‌ها', desc: 'کشف سریع گیرهای کاری بین واحدها' },
      { num: '۰۵', title: 'گزارش مدیریتی مستند', desc: 'گزارش آماده برای هیئت‌مدیره و سهامداران' },
    ],
  },
];

export interface SurveyCell {
  id: string;
  percentNumber: number;
  percentFa: string;
  ratioFa: string;
  ratioCount: number;
  ratioTotal: number;
  headline: string;
  detail: string;
  color: string;
}

export const SURVEY_RESULTS: SurveyCell[] = [
  {
    id: 's1',
    percentNumber: 95,
    percentFa: '۹۵٪',
    ratioFa: '۱۹ از ۲۰ شرکت',
    ratioCount: 19,
    ratioTotal: 20,
    headline: 'ضربه نبودن نفر کلیدی رو خورده‌اند',
    detail: 'خروج یا مرخصی نیروی اصلی مستقیماً کار شرکت رو مختل کرده است.',
    color: '#FE5A40',
  },
  {
    id: 's2',
    percentNumber: 75,
    percentFa: '۷۵٪',
    ratioFa: '۱۵ از ۲۰ شرکت',
    ratioCount: 15,
    ratioTotal: 20,
    headline: 'نمی‌دونن کدوم کارها فقط به یک نفر وصله',
    detail: 'مدیران تصویر روشنی از فرآیندهای قفل‌شده در ذهن افراد ندارند.',
    color: '#FE5A40',
  },
  {
    id: 's3',
    percentNumber: 55,
    percentFa: '۵۵٪',
    ratioFa: '۶ از ۱۱ کارمند',
    ratioCount: 6,
    ratioTotal: 11,
    headline: 'نگران‌اند با آموزش کار، جایگاهشون به خطر بیفته',
    detail: 'بدون حفظ احترام و امنیت شغلی، کسی قلق‌های کاریش رو ثبت نمی‌کنه.',
    color: '#0AB7A3',
  },
  {
    id: 's4',
    percentNumber: 67,
    percentFa: '۶۷٪',
    ratioFa: '۶ از ۹ مدیرعامل',
    ratioCount: 6,
    ratioTotal: 9,
    headline: 'شخصاً تصمیم خرید این محصول رو می‌گیرند',
    detail: 'نخوابیدن کار شرکت دغدغه مستقیم شخص مدیرعامل و هیئت‌مدیره است.',
    color: '#0AB7A3',
  },
];

export interface MarketSegment {
  id: 'tam' | 'sam' | 'som';
  code: string;
  titleFa: string;
  orgsCountFa: string;
  valueFa: string;
  shareBadge: string;
  details: string;
  segmentsList: string[];
  color: string;
}

export const MARKET_SEGMENTS: MarketSegment[] = [
  {
    id: 'tam',
    code: 'TAM',
    titleFa: 'کل بازار ایران (TAM)',
    orgsCountFa: '۲۵ هزار شرکت (+۳۰ نفر)',
    valueFa: '۱۰ همت در سال',
    shareBadge: 'شرکت‌های بالای ۳۰ نفر نیرو',
    details: 'بر پایه میانگین لایسنس سالانه ۴۰۰ میلیون تومان برای شرکت‌های بالای ۳۰ نفر:',
    segmentsList: [
      'واحدهای صنعتی و تولیدی +۳۰ نفر',
      '۱۱٬۰۰۰ شرکت دانش‌بنیان و فناور',
      'شرکت‌های خدماتی، بازرگانی و پخش',
    ],
    color: '#F6F9FD',
  },
  {
    id: 'sam',
    code: 'SAM',
    titleFa: 'بازار هدف ما (SAM)',
    orgsCountFa: '۴ هزار شرکت دانش‌محور',
    valueFa: '۱/۶ همت در سال',
    shareBadge: '۴٬۰۰۰ شرکت دانش‌محور (+۳۰ نفر)',
    details: 'شرکت‌های بالای ۳۰ نفر با وابستگی بالا به دانش فنی، مالی و عملیاتی افراد:',
    segmentsList: [
      '۴٬۰۷۰ شرکت دانش‌بنیان فناور',
      'شرکت‌های نرم‌افزاری، فین‌تک و پرداخت',
      'بانک‌ها، بیمه‌ها و نهادهای مالی',
    ],
    color: '#0AB7A3',
  },
  {
    id: 'som',
    code: 'SOM',
    titleFa: 'سهم هدف تا ۱۴۰۸ (SOM)',
    orgsCountFa: '۶۵ مشتری فعال',
    valueFa: '۱/۶٪ از SAM',
    shareBadge: '۶۵ شرکت فعال تا ۱۴۰۸',
    details: 'تمرکز روی شرکت‌های بالای ۳۰ نفر با بیشترین هزینه توقف کار:',
    segmentsList: [
      'شرکت‌های ۳۰ تا +۳۰۰ نفر با عملیات حساس',
      'هلدینگ‌های صنعتی، دارویی و پخش',
      'واحدهای مالی، بازرگانی و فنی',
    ],
    color: '#FE5A40',
  },
];

export interface PricingConfig {
  tier1Price: number;
  tier2Price: number;
  tier3Price: number;
  coreSetup: number;
  avgBaseContract: number;
  grossMarginMin: number;
  grossMarginMax: number;
}

export const INITIAL_PRICING_CONFIG: PricingConfig = {
  tier1Price: 300,
  tier2Price: 480,
  tier3Price: 750,
  coreSetup: 120,
  avgBaseContract: 400,
  grossMarginMin: 72,
  grossMarginMax: 78,
};

export type CompStatus = 'full' | 'partial' | 'none';

export interface CompetitorMatrixData {
  id: 'iranian' | 'global';
  tabLabel: string;
  headline: string;
  subheadline: string;
  footnote: string;
  source: string;
  columns: {
    id: string;
    name: string;
    subtitle: string;
    isSeynaro?: boolean;
  }[];
  rows: {
    feature: string;
    values: CompStatus[];
  }[];
}

export const COMPETITOR_MATRICES: Record<'iranian' | 'global', CompetitorMatrixData> = {
  iranian: {
    id: 'iranian',
    tabLabel: 'رقبای داخلی (ایرانی)',
    headline: 'ایرانی‌ها کار روزمره رو ثبت می‌کنن؛ اما جانشین تربیت نمی‌کنن.',
    subheadline: 'سینارو مکمل سیستم‌های فعلی شرکت است و منطق تصمیم افراد را حفظ می‌کند.',
    footnote: 'مکمل ERP و اتوماسیون اداری، نه جایگزین آن‌ها',
    source: 'مستندات رسمی محصولات',
    columns: [
      { id: 'seynaro', name: 'سینارو', subtitle: 'تداوم کار و جانشین', isSeynaro: true },
      { id: 'mizito', name: 'میزیتو', subtitle: 'مدیریت تسک' },
      { id: 'pendar', name: 'پندار (KM)', subtitle: 'پایگاه دانش' },
      { id: 'hamkaran', name: 'همکاران سیستم', subtitle: 'مالی و ERP' },
      { id: 'faragostar', name: 'فراگستر', subtitle: 'اتوماسیون' },
      { id: 'chargoon', name: 'چارگون', subtitle: 'اداری و منابع انسانی' },
    ],
    rows: [
      { feature: 'نامه‌نگاری اداری و دبیرخانه', values: ['none', 'none', 'none', 'partial', 'full', 'full'] },
      { feature: 'حسابداری، حقوق و ERP', values: ['none', 'none', 'none', 'full', 'none', 'partial'] },
      { feature: 'مدیریت پروژه و تسک تیمی', values: ['partial', 'full', 'none', 'none', 'partial', 'partial'] },
      { feature: 'پایگاه دانش و مستندات', values: ['full', 'partial', 'full', 'none', 'none', 'partial'] },
      { feature: 'ثبت قلق‌ها و منطق تصمیم با AI', values: ['full', 'none', 'none', 'none', 'none', 'none'] },
      { feature: 'سنجش عملی جانشین (Shadow Run)', values: ['full', 'none', 'none', 'none', 'none', 'none'] },
      { feature: 'پوشش مرخصی و تعادل بار تیم', values: ['full', 'none', 'none', 'none', 'none', 'none'] },
      { feature: 'نصب روی سرور داخلی شرکت', values: ['full', 'none', 'full', 'full', 'full', 'full'] },
    ],
  },
  global: {
    id: 'global',
    tabLabel: 'رقبای خارجی (جهانی)',
    headline: 'خارجی‌ها فقط داکیومنت می‌سازن؛ سینارو جانشین رو در عمل می‌سنجه.',
    subheadline: 'ابزارهای ابری خارجی با تحریم و قطعی اینترنت متوقف می‌شوند.',
    footnote: 'نصب ۱۰۰٪ داخلی روی سرور شرکت بدون نیاز به اینترنت',
    source: 'گزارش‌های G2',
    columns: [
      { id: 'seynaro', name: 'سینارو', subtitle: 'تداوم کار و جانشین', isSeynaro: true },
      { id: 'tango', name: 'Tango / Scribe', subtitle: 'ضبط اسکرین‌شات' },
      { id: 'trainual', name: 'Trainual / Guru', subtitle: 'آموزش کارکنان' },
      { id: 'outline', name: 'Outline / Wiki', subtitle: 'ویکی تیمی' },
      { id: 'snoooz', name: 'Snoooz / Sensay', subtitle: 'مرخصی و خروج' },
    ],
    rows: [
      { feature: 'ضبط خودکار کلیک و اسکرین‌شات', values: ['partial', 'full', 'partial', 'none', 'none'] },
      { feature: 'اتصال به Slack و Teams', values: ['none', 'full', 'full', 'partial', 'full'] },
      { feature: 'ثبت چرایی تصمیم و قلق با AI', values: ['full', 'partial', 'full', 'partial', 'partial'] },
      { feature: 'سنجش عملی جانشین (Shadow Run)', values: ['full', 'none', 'none', 'none', 'none'] },
      { feature: 'پوشش مرخصی و تعادل بار کاری', values: ['full', 'none', 'none', 'none', 'partial'] },
      { feature: 'نصب داخلی بدون اینترنت + فارسی', values: ['full', 'none', 'none', 'full', 'none'] },
    ],
  },
};

export interface BudgetAllocationItem {
  id: string;
  numFa: string;
  title: string;
  percent: number;
  percentFa: string;
  amountFa: string;
  amountBillion: number;
  color: string;
  deliverables: string;
}

export const BUDGET_ITEMS: BudgetAllocationItem[] = [
  {
    id: 'b1',
    numFa: '۱',
    title: 'تیم فنی و توسعه هسته محصول',
    percent: 45,
    percentFa: '۴۵٪',
    amountFa: '۴/۰۵ میلیارد',
    amountBillion: 4.05,
    color: '#0AB7A3',
    deliverables: 'تکمیل ۶ موتور هوشمند، محیط Shadow Run و نسخه نصبی روی سرور شرکت‌ها',
  },
  {
    id: 'b2',
    numFa: '۲',
    title: 'فروش سازمانی و اجرای پایلوت‌ها',
    percent: 20,
    percentFa: '۲۰٪',
    amountFa: '۱/۸۰ میلیارد',
    amountBillion: 1.8,
    color: '#FE5A40',
    deliverables: 'جلسات دمو با مدیران، اجرای پایلوت در شرکت‌های +۳۰ نفر و قراردادهای فروش',
  },
  {
    id: 'b3',
    numFa: '۳',
    title: 'دسترسی مستقیم به شرکت‌های هدف',
    percent: 15,
    percentFa: '۱۵٪',
    amountFa: '۱/۳۵ میلیارد',
    amountBillion: 1.35,
    color: '#F6F9FD',
    deliverables: 'ارتباط مستقیم با مدیران عامل شرکت‌های بالای ۳۰ نفر و هلدینگ‌ها',
  },
  {
    id: 'b4',
    numFa: '۴',
    title: 'سرور، سخت‌افزار پردازشی و دفتر',
    percent: 10,
    percentFa: '۱۰٪',
    amountFa: '۰/۹۰ میلیارد',
    amountBillion: 0.9,
    color: '#8A96AC',
    deliverables: 'تهیه سرورهای تست مدل‌های هوش مصنوعی آفلاین و تجهیز دفتر کار',
  },
  {
    id: 'b5',
    numFa: '۵',
    title: 'حقوقی، قراردادها و ذخیره نقدینگی',
    percent: 10,
    percentFa: '۱۰٪',
    amountFa: '۰/۹۰ میلیارد',
    amountBillion: 0.9,
    color: '#5B6880',
    deliverables: 'تنظیم قراردادهای محرمانگی سازمانی (SLA) و ذخیره احتیاطی شرکت',
  },
];
