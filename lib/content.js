// ---------------------------------------------------------------------------
// Hafix Solution — site content (English + Arabic)
// Every translatable string is an object { en, ar }
// ---------------------------------------------------------------------------

export const company = {
  name: 'Hafix Solution',
  nameAr: 'حافيكس سوليوشن',
  tagline: { en: 'Technology that moves business forward', ar: 'تقنية تُقدّم أعمالك إلى الأمام' },
  city: { en: 'Al Jubail, Saudi Arabia', ar: 'الجبيل، المملكة العربية السعودية' },
  founded: '2018',
};

export const contact = {
  address: {
    en: 'Hafix Company Ltd — Ibn Al Bitar, Al Safa District, Postal Code 35514, Al Jubail, Eastern Province, Saudi Arabia',
    ar: 'شركة حافيكس المحدودة — ابن البطار، حي الصفا، الرمز البريدي ٣٥٥١٤، الجبيل، المنطقة الشرقية، المملكة العربية السعودية',
  },
  addressShort: { en: 'Al Jubail, Eastern Province, KSA', ar: 'الجبيل، المنطقة الشرقية، السعودية' },
  legal: {
    name: { en: 'Hafix Company Ltd', ar: 'شركة حافيكس المحدودة' },
    cr: '7054257022',
    crAr: '٧٠٥٤٢٥٧٠٢٢',
    vat: '314775904400003',
  },
  phone: '+966 53 698 5370',
  phoneHref: '+966536985370',
  whatsapp: '+966 53 698 5370',
  whatsappHref: '966536985370',
  email: 'info@hafixsolution.com',
  sales: 'sales@hafixsolution.com',
  hours: {
    en: 'Sunday – Thursday, 9:00 AM – 6:00 PM (AST)',
    ar: 'الأحد – الخميس، ٩:٠٠ صباحاً – ٦:٠٠ مساءً (توقيت السعودية)',
  },
  // Regions we work from. Only the Saudi office has a street address on file;
  // the others are presence locations, deliberately not given invented addresses.
  offices: [
    {
      country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      city: { en: 'Al Jubail', ar: 'الجبيل' },
      role: { en: 'Head office', ar: 'المكتب الرئيسي' },
      flag: '🇸🇦',
      phone: '+966 53 698 5370',
      phoneHref: '+966536985370',
      address: {
        en: 'Ibn Al Bitar, Al Safa District, Postal Code 35514, Al Jubail',
        ar: 'ابن البطار، حي الصفا، الرمز البريدي ٣٥٥١٤، الجبيل',
      },
      mapQuery: 'Ibn Al Bitar, Al Safa District, Al Jubail 35514, Saudi Arabia',
      primary: true,
    },
    {
      country: { en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' },
      city: { en: 'Dubai', ar: 'دبي' },
      role: { en: 'Gulf operations', ar: 'عمليات الخليج' },
      flag: '🇦🇪',
      phone: '+966 53 698 5370',
      phoneHref: '+966536985370',
      address: null,
      mapQuery: 'Dubai, United Arab Emirates',
    },
    {
      country: { en: 'Qatar', ar: 'قطر' },
      city: { en: 'Doha', ar: 'الدوحة' },
      role: { en: 'Client services', ar: 'خدمات العملاء' },
      flag: '🇶🇦',
      phone: '+966 53 698 5370',
      phoneHref: '+966536985370',
      address: null,
      mapQuery: 'Doha, Qatar',
    },
    {
      country: { en: 'Kuwait', ar: 'الكويت' },
      city: { en: 'Kuwait City', ar: 'مدينة الكويت' },
      role: { en: 'Client services', ar: 'خدمات العملاء' },
      flag: '🇰🇼',
      phone: '+966 53 698 5370',
      phoneHref: '+966536985370',
      address: null,
      mapQuery: 'Kuwait City, Kuwait',
    },
    {
      country: { en: 'India', ar: 'الهند' },
      city: { en: 'Mangalore', ar: 'مانغالور' },
      role: { en: 'Delivery centre', ar: 'مركز التنفيذ' },
      flag: '🇮🇳',
      phone: '+91 95911 80784',
      phoneHref: '+919591180784',
      address: null,
      mapQuery: 'Mangalore, Karnataka, India',
    },
  ],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'X', href: 'https://x.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
    { label: 'YouTube', href: 'https://youtube.com/' },
  ],
};

export const nav = {
  links: [
    { href: '/', label: { en: 'Home', ar: 'الرئيسية' } },
    { href: '/services', label: { en: 'Services', ar: 'خدماتنا' } },
    { href: '/works', label: { en: 'Work', ar: 'أعمالنا' } },
    { href: '/about', label: { en: 'About', ar: 'من نحن' } },
    { href: '/contact', label: { en: 'Contact', ar: 'تواصل معنا' } },
  ],
  cta: { en: 'Start a project', ar: 'ابدأ مشروعك' },
  menu: { en: 'Menu', ar: 'القائمة' },
  close: { en: 'Close', ar: 'إغلاق' },
};

export const hero = {
  eyebrow: {
    en: 'Technology & Creative Studio — Saudi Arabia · UAE · Qatar · Kuwait · India',
    ar: 'استوديو تقني وإبداعي — السعودية · الإمارات · قطر · الكويت · الهند',
  },
  titleA: { en: 'We build brands', ar: 'نبني علامات' },
  rotator: {
    en: ['that lead.', 'that scale.', 'that endure.', 'that convert.'],
    ar: ['تقود السوق.', 'تنمو بثبات.', 'تصمد طويلاً.', 'تحقق النتائج.'],
  },
  sub: {
    en: 'Hafix Solution is a technology and creative partner headquartered in Al Jubail, Saudi Arabia, with teams in Dubai, Qatar, Kuwait and India. We craft digital marketing, websites and end-to-end software that help ambitious businesses grow with confidence.',
    ar: 'حافيكس سوليوشن شريك تقني وإبداعي، مقرّه الرئيسي الجبيل في المملكة العربية السعودية، وله فرق في دبي وقطر والكويت والهند. نصمّم التسويق الرقمي والمواقع الإلكترونية والحلول البرمجية المتكاملة التي تُمكّن الشركات الطموحة من النمو بثقة.',
  },
  cta1: { en: 'Start a project', ar: 'ابدأ مشروعك' },
  cta2: { en: 'View our work', ar: 'شاهد أعمالنا' },
  scroll: { en: 'Scroll to explore', ar: 'انزل للاستكشاف' },
};

export const stats = [
  { value: '120+', label: { en: 'Projects delivered', ar: 'مشروعاً مُنجزاً' } },
  { value: '40+', label: { en: 'Brands partnered', ar: 'علامة تجارية' } },
  { value: '08', label: { en: 'Years of craft', ar: 'سنة من الخبرة' } },
  { value: '98%', label: { en: 'Client retention', ar: 'استمرارية العملاء' } },
];

export const clients = [
  { name: 'Fattoush Restaurant', country: { en: 'Saudi Arabia', ar: 'السعودية' }, logo: '/clients/fattoush-burgundy.png', style: 'fattoush' },
  { name: 'Fattoush Restaurant & Banquet', country: { en: 'Saudi Arabia', ar: 'السعودية' }, logo: '/clients/fattoush-green.png', style: 'fattoush' },
  { name: 'BOKAI', country: { en: 'Saudi Arabia', ar: 'السعودية' }, logo: '/clients/bokai.png', style: 'bokai' },
  { name: 'DUBOXX', country: { en: 'United Arab Emirates', ar: 'الإمارات' }, logo: '/clients/duboxx.png', style: 'duboxx' },
  { name: 'Orange Group', country: { en: 'GCC', ar: 'الخليج' }, logo: '/clients/orange-mark.png', style: 'orange' },
];

export const marqueeTitle = {
  en: 'Trusted by businesses across the GCC',
  ar: 'موثوق من قِبل الشركات في دول الخليج',
};

export const story = [
  {
    num: '01',
    kicker: { en: 'Where it all began', ar: 'من أين بدأت الحكاية' },
    title: { en: 'One roof for everything a business needs to grow.', ar: 'سقف واحد لكل ما تحتاجه الشركة لتنمو.' },
    body: {
      en: 'Hafix Solution started in Saudi Arabia’s Eastern Province with a simple belief — a company should not need five different agencies to grow. Marketing, design and engineering belong in one room, speaking one language, answering to one outcome: your revenue.',
      ar: 'بدأت حافيكس سوليوشن في المنطقة الشرقية بالسعودية بقناعة بسيطة: لا ينبغي أن تحتاج الشركة إلى خمس وكالات مختلفة لتنمو. التسويق والتصميم والهندسة يجب أن تجتمع في غرفة واحدة، تتحدث بلغة واحدة، وتُسأل عن نتيجة واحدة: نمو أعمالك.',
    },
  },
  {
    num: '02',
    kicker: { en: 'How we work', ar: 'كيف نعمل' },
    title: { en: 'Strategy first. Craft always.', ar: 'الاستراتيجية أولاً، والإتقان دائماً.' },
    body: {
      en: 'Every engagement begins with research — your market, your numbers, your competitors. Then comes design that earns attention, and engineering that keeps its promises. No random decoration, no wasted budget, only work that solves a problem.',
      ar: 'يبدأ كل مشروع بالبحث: سوقك، أرقامك، منافسوك. ثم يأتي تصميم يستحق الانتباه، وهندسة تفي بوعودها. لا عناصر زخرفية بلا معنى، ولا ميزانية مُهدَرة، فقط عمل يحل مشكلة حقيقية.',
    },
  },
  {
    num: '03',
    kicker: { en: 'Where we are going', ar: 'إلى أين نتجه' },
    title: { en: 'From the Gulf, to the world.', ar: 'من الخليج إلى العالم.' },
    body: {
      en: 'From Al Jubail and Riyadh to Dubai, Doha, Kuwait City and Mangalore, we are building a studio that serves ambitious businesses across the Gulf and India — bilingual by default, engineering-led by choice, and measured by the results our clients can see in their books.',
      ar: 'من الجبيل والرياض إلى دبي والدوحة والكويت ومانغالور، نبني استوديو يخدم الشركات الطموحة في الخليج والهند: ثنائي اللغة بشكل افتراضي، يقوده الهندسة، ويُقاس بالنتائج التي يراها عملاؤنا في أرقامهم.',
    },
  },
];

export const services = [
  {
    slug: 'digital-marketing',
    num: '01',
    icon: 'megaphone',
    title: { en: 'Digital Marketing', ar: 'التسويق الرقمي' },
    short: {
      en: 'Performance campaigns across Google, Meta, TikTok and Snap that turn spend into measurable revenue.',
      ar: 'حملات أداء عبر جوجل وميتا وتيك توك وسناب تُحوّل الإنفاق إلى إيرادات قابلة للقياس.',
    },
    bullets: {
      en: ['Paid search & social ads', 'Campaign strategy & funnels', 'Analytics & conversion tracking', 'Monthly reporting & optimisation'],
      ar: ['إعلانات البحث والمنصات الاجتماعية', 'استراتيجية الحملات ومسارات التحويل', 'التحليلات وتتبّع التحويلات', 'تقارير شهرية وتحسين مستمر'],
    },
  },
  {
    slug: 'web-development',
    num: '02',
    icon: 'code',
    title: { en: 'Web Development', ar: 'تطوير المواقع' },
    short: {
      en: 'Fast, secure, bilingual websites built to load in under two seconds and rank on page one.',
      ar: 'مواقع سريعة وآمنة وثنائية اللغة، تُحمّل في أقل من ثانيتين وتتصدّر نتائج البحث.',
    },
    bullets: {
      en: ['Corporate & landing pages', 'Headless CMS integration', 'Core Web Vitals optimisation', 'Bilingual EN / AR with RTL'],
      ar: ['مواقع تعريفية وصفحات هبوط', 'ربط أنظمة إدارة المحتوى', 'تحسين سرعة الأداء', 'ثنائية اللغة مع دعم RTL'],
    },
  },
  {
    slug: 'business-software',
    num: '03',
    icon: 'chip',
    title: { en: 'Software for Your Business', ar: 'برمجيات مخصّصة لأعمالك' },
    short: {
      en: 'Custom tools built around how your team actually works — not the other way around.',
      ar: 'أدوات مخصّصة تُبنى على طريقة عمل فريقك فعلياً، لا العكس.',
    },
    bullets: {
      en: ['ERP, CRM & inventory systems', 'Workflow automation', 'Legacy system modernisation', 'Third-party API integrations'],
      ar: ['أنظمة تخطيط الموارد وإدارة العملاء والمخزون', 'أتمتة سير العمل', 'تحديث الأنظمة القديمة', 'ربط واجهات البرمجة الخارجية'],
    },
  },
  {
    slug: 'end-to-end',
    num: '04',
    icon: 'layers',
    title: { en: 'End-to-End Software Solutions', ar: 'حلول برمجية متكاملة' },
    short: {
      en: 'From discovery workshops to deployment, hosting and support — one team owns the whole journey.',
      ar: 'من ورش الاكتشاف إلى النشر والاستضافة والدعم — فريق واحد يتولى الرحلة كاملة.',
    },
    bullets: {
      en: ['Discovery & product roadmap', 'Architecture & UI/UX design', 'Development & QA', 'Deployment, hosting & AMC'],
      ar: ['الاكتشاف وخريطة المنتج', 'المعمارية وتصميم التجربة', 'التطوير وضمان الجودة', 'النشر والاستضافة والصيانة'],
    },
  },
  {
    slug: 'branding',
    num: '05',
    icon: 'crown',
    title: { en: 'Company Branding', ar: 'بناء العلامة التجارية' },
    short: {
      en: 'Identity systems that look timeless in the boardroom and unmistakable on the street.',
      ar: 'أنظمة هوية تبدو خالدة في قاعة الاجتماعات ولا تُخطأ في الشارع.',
    },
    bullets: {
      en: ['Logo & visual identity', 'Brand guidelines & tone of voice', 'Packaging & print collateral', 'Rebranding & brand refresh'],
      ar: ['الشعار والهوية البصرية', 'دليل العلامة ونبرة الخطاب', 'التغليف والمطبوعات', 'إعادة بناء العلامة وتحديثها'],
    },
  },
  {
    slug: 'social-media',
    num: '06',
    icon: 'share',
    title: { en: 'Social Media Handling', ar: 'إدارة وسائل التواصل الاجتماعي' },
    short: {
      en: 'Bilingual content, community management and reporting that keep your brand in the conversation.',
      ar: 'محتوى ثنائي اللغة، وإدارة مجتمع، وتقارير تُبقي علامتك حاضرة في الحوار.',
    },
    bullets: {
      en: ['Content calendars & copywriting', 'Reels, shorts & studio production', 'Community management', 'Influencer & campaign support'],
      ar: ['خطط المحتوى وكتابة النصوص', 'ريلز وفيديوهات قصيرة وإنتاج', 'إدارة المجتمع والتفاعل', 'دعم المؤثرين والحملات'],
    },
  },
  {
    slug: 'mobile-apps',
    num: '07',
    icon: 'phone',
    title: { en: 'Mobile App Development', ar: 'تطوير تطبيقات الجوال' },
    short: {
      en: 'Native and cross-platform apps for iOS and Android, published and maintained end to end.',
      ar: 'تطبيقات أصلية ومتعددة المنصات لأنظمة iOS وAndroid، من النشر إلى الصيانة.',
    },
    bullets: {
      en: ['iOS & Android apps', 'Flutter / React Native', 'App Store & Play deployment', 'Push, payments & maps'],
      ar: ['تطبيقات iOS وAndroid', 'فلاتر / رياكت نيتف', 'النشر في المتاجر', 'الإشعارات والدفع والخرائط'],
    },
  },
  {
    slug: 'ui-ux',
    num: '08',
    icon: 'pen',
    title: { en: 'UI / UX Design', ar: 'تصميم واجهات وتجربة المستخدم' },
    short: {
      en: 'Interfaces shaped by research and testing, designed in both English and Arabic layouts.',
      ar: 'واجهات مبنية على البحث والاختبار، مصمّمة بالعربية والإنجليزية معاً.',
    },
    bullets: {
      en: ['User research & wireframes', 'Design systems & prototypes', 'Usability testing', 'RTL design adaptation'],
      ar: ['بحث المستخدمين والمخططات الأولية', 'أنظمة التصميم والنماذج', 'اختبارات سهولة الاستخدام', 'مواءمة التصاميم للعربية'],
    },
  },
  {
    slug: 'seo',
    num: '09',
    icon: 'search',
    title: { en: 'SEO & Content', ar: 'تحسين محركات البحث والمحتوى' },
    short: {
      en: 'Technical SEO and Arabic-first content that put your business in front of buyers who are ready.',
      ar: 'تحسين تقني ومحتوى عربي يضع نشاطك أمام المشترين الجاهزين.',
    },
    bullets: {
      en: ['Technical & on-page SEO', 'Arabic & English keyword research', 'Content strategy & writing', 'Local SEO for KSA & GCC'],
      ar: ['تحسين تقني وداخلي', 'بحث الكلمات بالعربية والإنجليزية', 'استراتيجية المحتوى وكتابته', 'تحسين محلي للسعودية والخليج'],
    },
  },
  {
    slug: 'ecommerce',
    num: '10',
    icon: 'cart',
    title: { en: 'E-commerce Solutions', ar: 'حلول التجارة الإلكترونية' },
    short: {
      en: 'Storefronts that convert, with payments, shipping and inventory wired in from day one.',
      ar: 'متاجر تُحوّل الزوار إلى مشترين، مع ربط الدفع والشحن والمخزون من اليوم الأول.',
    },
    bullets: {
      en: ['Shopify, WooCommerce & custom', 'Payment gateway integration', 'Shipping & inventory setup', 'Conversion rate optimisation'],
      ar: ['شوبيفاي وووكومرس وحلول مخصّصة', 'ربط بوابات الدفع', 'إعداد الشحن والمخزون', 'تحسين معدل التحويل'],
    },
  },
  {
    slug: 'production',
    num: '11',
    icon: 'camera',
    title: { en: 'Video Production & Photography', ar: 'إنتاج الفيديو والتصوير' },
    short: {
      en: 'Brand films, product shoots and photography produced by a crew that understands marketing.',
      ar: 'أفلام للعلامة وتصوير منتجات وجلسات احترافية، من فريق يفهم التسويق.',
    },
    bullets: {
      en: ['Brand & corporate films', 'Product & food photography', 'Event coverage & reels', 'Editing, colour & sound'],
      ar: ['أفلام تعريفية ومؤسسية', 'تصوير المنتجات والطعام', 'تغطية الفعاليات والريلز', 'المونتاج والتلوين والصوت'],
    },
  },
  {
    slug: 'cloud',
    num: '12',
    icon: 'cloud',
    title: { en: 'Cloud, DevOps & IT Support', ar: 'الحوسبة السحابية والدعم التقني' },
    short: {
      en: 'Reliable infrastructure, backups and monitoring — plus a support desk that actually answers.',
      ar: 'بنية تحتية موثوقة ونسخ احتياطية ومراقبة، مع دعم فني يردّ فعلاً.',
    },
    bullets: {
      en: ['AWS / Azure hosting & migration', 'CI/CD & automated backups', 'Security hardening & monitoring', 'AMC & helpdesk support'],
      ar: ['استضافة وترحيل على AWS وAzure', 'التكامل المستمر والنسخ التلقائي', 'تأمين الأنظمة والمراقبة', 'عقود صيانة ودعم فني'],
    },
  },
  {
    slug: 'ai',
    num: '13',
    icon: 'spark',
    title: { en: 'AI & Business Automation', ar: 'الذكاء الاصطناعي وأتمتة الأعمال' },
    short: {
      en: 'Practical AI — chatbots, document automation and dashboards that remove hours of manual work.',
      ar: 'ذكاء اصطناعي عملي: روبوتات محادثة، وأتمتة المستندات، ولوحات بيانات تُختصر ساعات من العمل اليدوي.',
    },
    bullets: {
      en: ['Chatbots & AI assistants', 'Document & data automation', 'Business intelligence dashboards', 'Process consulting'],
      ar: ['روبوتات المحادثة والمساعدات الذكية', 'أتمتة المستندات والبيانات', 'لوحات ذكاء الأعمال', 'استشارات إعادة هندسة العمليات'],
    },
  },
  {
    slug: 'print',
    num: '14',
    icon: 'print',
    title: { en: 'Graphic Design & Print', ar: 'التصميم الجرافيكي والمطبوعات' },
    short: {
      en: 'Brochures, signage, vehicle wraps and exhibition stands — print that carries the brand offline.',
      ar: 'كتيبات ولافتات وتغليف مركبات وأجنحة معارض — مطبوعات تحمل علامتك خارج الإنترنت.',
    },
    bullets: {
      en: ['Brochures & catalogues', 'Signage & vehicle branding', 'Exhibition & booth design', 'Print production management'],
      ar: ['كتيبات وفهارس', 'اللافتات وتغليف المركبات', 'تصميم أجنحة المعارض', 'إدارة إنتاج الطباعة'],
    },
  },
];

export const process = [
  {
    num: '01',
    title: { en: 'Discovery', ar: 'الاكتشاف' },
    body: {
      en: 'We study your business, market and competitors, then define what success should look like in numbers.',
      ar: 'نبحث نشاطك وسوقك ومنافسيك، ثم نحدد شكل النجاح بالأرقام.',
    },
  },
  {
    num: '02',
    title: { en: 'Strategy', ar: 'الاستراتيجية' },
    body: {
      en: 'A clear plan, timeline and budget — no surprises, no vague deliverables, no hidden costs.',
      ar: 'خطة واضحة وجدول زمني وميزانية محددة: بلا مفاجآت ولا بنود غامضة.',
    },
  },
  {
    num: '03',
    title: { en: 'Design', ar: 'التصميم' },
    body: {
      en: 'Concepts, revisions and a design system that stays consistent across every touchpoint.',
      ar: 'مفاهيم وتعديلات ونظام تصميم متسق في كل نقطة تواصل.',
    },
  },
  {
    num: '04',
    title: { en: 'Build', ar: 'التنفيذ' },
    body: {
      en: 'Development and content production, with weekly demos so you always see progress.',
      ar: 'التطوير وإنتاج المحتوى، مع عروض أسبوعية تتابع فيها التقدّم.',
    },
  },
  {
    num: '05',
    title: { en: 'Launch', ar: 'الإطلاق' },
    body: {
      en: 'Testing, go-live, training for your team and a launch campaign that makes noise.',
      ar: 'الاختبار والإطلاق وتدريب فريقك وحملة إطلاق تترك أثراً.',
    },
  },
  {
    num: '06',
    title: { en: 'Grow', ar: 'النمو' },
    body: {
      en: 'Monthly optimisation, reporting and support — we stay after the launch, not just until it.',
      ar: 'تحسين وتقارير ودعم شهري — نبقى بعد الإطلاق، لا حتى لحظته فقط.',
    },
  },
];

export const industries = [
  { name: { en: 'Real Estate & Construction', ar: 'العقارات والمقاولات' }, icon: 'building' },
  { name: { en: 'Restaurants & Hospitality', ar: 'المطاعم والضيافة' }, icon: 'cup' },
  { name: { en: 'Healthcare & Clinics', ar: 'الرعاية الصحية والعيادات' }, icon: 'heart' },
  { name: { en: 'Retail & E-commerce', ar: 'التجزئة والتجارة الإلكترونية' }, icon: 'cart' },
  { name: { en: 'Logistics & Transport', ar: 'النقل والخدمات اللوجستية' }, icon: 'truck' },
  { name: { en: 'Education & Training', ar: 'التعليم والتدريب' }, icon: 'book' },
  { name: { en: 'Finance & Professional Services', ar: 'المالية والخدمات المهنية' }, icon: 'coin' },
  { name: { en: 'Industrial & Manufacturing', ar: 'القطاع الصناعي والتصنيع' }, icon: 'gear' },
];

export const priorities = [
  {
    title: { en: 'Quality', ar: 'الجودة' },
    body: {
      en: 'Quality is not negotiable. Every project ships with precision, tested on real devices and real browsers, even when the deadline is tight.',
      ar: 'الجودة ليست قابلة للتفاوض. كل مشروع يُسلَّم بإتقان، ومُختبَر على أجهزة ومتصفحات حقيقية، حتى مع ضيق الوقت.',
    },
  },
  {
    title: { en: 'Creativity', ar: 'الإبداع' },
    body: {
      en: 'We bring ideas that are not copy-paste — concepts built for your market, your culture and your customer.',
      ar: 'نقدّم أفكاراً ليست نسخاً مكرّرة، بل مفاهيم مصمّمة لسوقك وثقافتك وعميلك.',
    },
  },
  {
    title: { en: 'Reasonableness', ar: 'الاتزان' },
    body: {
      en: 'No decoration for its own sake. The design must first solve the user’s problem — then it can be beautiful.',
      ar: 'لا عناصر لمجرد الزينة. التصميم يجب أن يحل مشكلة المستخدم أولاً، ثم يكون جميلاً.',
    },
  },
  {
    title: { en: 'Reliability', ar: 'الالتزام' },
    body: {
      en: 'We deliver on the date we promised, in English and in Arabic, and we answer the phone after the invoice is paid.',
      ar: 'نلتزم بالموعد الذي وعدنا به، بالعربية والإنجليزية، ونرد على الهاتف بعد استلام الفاتورة.',
    },
  },
];

export const testimonials = [];

export const works = [];

export const workFilters = [{ id: 'all', label: { en: 'All', ar: 'الكل' } }];

export const faqs = [
  {
    q: { en: 'How much does a project cost?', ar: 'كم تبلغ تكلفة المشروع؟' },
    a: {
      en: 'A landing page starts from SAR 4,500, a corporate website from SAR 12,000, and full branding programmes from SAR 15,000. Custom software is quoted after a free discovery session, because scope matters more than guesswork.',
      ar: 'تبدأ صفحة الهبوط من ٤٬٥٠٠ ريال، والموقع التعريفي من ١٢٬٠٠٠ ريال، وبرامج الهوية الكاملة من ١٥٬٠٠٠ ريال. أمّا البرمجيات المخصّصة فتُسعَّر بعد جلسة اكتشاف مجانية، لأن نطاق العمل أهم من التقديرات.',
    },
  },
  {
    q: { en: 'How long does it take?', ar: 'كم تستغرق مدة التنفيذ؟' },
    a: {
      en: 'Most websites take 3–6 weeks, branding 4–8 weeks, and custom software 8–20 weeks depending on complexity. You get a dated plan before we start.',
      ar: 'تستغرق معظم المواقع من ٣ إلى ٦ أسابيع، والهوية من ٤ إلى ٨ أسابيع، والبرمجيات المخصّصة من ٨ إلى ٢٠ أسبوعاً حسب التعقيد. ستحصل على خطة مؤرّخة قبل البدء.',
    },
  },
  {
    q: { en: 'Do you work in both English and Arabic?', ar: 'هل تعملون بالعربية والإنجليزية؟' },
    a: {
      en: 'Yes. Every website, campaign and software interface we deliver is bilingual with proper RTL layouts, Arabic typography and native-level copywriting. This website is an example.',
      ar: 'نعم. كل موقع وحملة وواجهة برمجية نُسلّمها تكون ثنائية اللغة مع تخطيط RTL صحيح وخطوط عربية وكتابة بمستوى الناطقين بها. هذا الموقع مثال على ذلك.',
    },
  },
  {
    q: { en: 'Where are you based, and which markets do you cover?', ar: 'أين مقرّكم وما الأسواق التي تخدمونها؟' },
    a: {
      en: 'Our head office is in Al Jubail, in Saudi Arabia’s Eastern Province, with teams in Dubai, Qatar, Kuwait and India. That means we understand the Eastern Province market — its industries, buying culture and regulations — and can meet you face to face, in our office or yours, anywhere in the GCC.',
      ar: 'مقرّنا الرئيسي في الجبيل بالمنطقة الشرقية في السعودية، ولدينا فرق في دبي وقطر والكويت والهند. لذلك نفهم سوق المنطقة الشرقية: قطاعاته وثقافة الشراء فيه وأنظمته، ويمكننا مقابلتك وجهاً لوجه في مكتبنا أو مكتبك في أي دولة خليجية.',
    },
  },
  {
    q: { en: 'What happens after launch?', ar: 'ماذا يحدث بعد الإطلاق؟' },
    a: {
      en: 'Every project includes a warranty period, training for your team and optional annual maintenance contracts covering hosting, backups, updates, security and monthly reporting.',
      ar: 'يشمل كل مشروع فترة ضمان وتدريباً لفريقك، مع إمكانية التعاقد على صيانة سنوية تغطي الاستضافة والنسخ الاحتياطي والتحديثات والأمان والتقارير الشهرية.',
    },
  },
  {
    q: { en: 'Can you work with our existing brand or system?', ar: 'هل يمكنكم العمل مع هويتنا أو نظامنا الحالي؟' },
    a: {
      en: 'Often, yes. We audit what you already have, keep what works and rebuild what is holding you back — including integrations with your existing ERP, CRM or accounting software.',
      ar: 'في كثير من الحالات نعم. نراجع ما لديك، ونحافظ على ما ينجح، ونعيد بناء ما يعيقك، بما في ذلك الربط مع أنظمة تخطيط الموارد أو إدارة العملاء أو المحاسبة الحالية.',
    },
  },
];

export const sections = {
  services: {
    kicker: { en: 'Our Services', ar: 'خدماتنا' },
    title: { en: 'Everything you need, in one box.', ar: 'كل ما تحتاجه، في صندوق واحد.' },
    body: {
      en: 'Fourteen disciplines under one roof, so your brand, your website and your software never contradict each other.',
      ar: 'أربعة عشر تخصصاً تحت سقف واحد، حتى لا تتناقض علامتك مع موقعك أو برمجياتك.',
    },
  },
  works: {
    kicker: { en: 'Featured Work', ar: 'أعمال مميزة' },
    title: { en: 'Work we can talk about.', ar: 'أعمال يمكننا الحديث عنها.' },
    body: {
      en: 'We publish case studies only with our clients’ written approval. The ones below are in review — ask us and we will walk you through the work directly.',
      ar: 'لا ننشر دراسات الحالة إلا بموافقة كتابية من عملائنا. الأعمال التالية قيد المراجعة — اطلب منا عرضاً مباشراً للأعمال.',
    },
    empty: {
      title: { en: 'Case studies are in review.', ar: 'دراسات الحالة قيد المراجعة.' },
      body: {
        en: 'Confidentiality clauses cover most of our recent projects, so we publish only what clients have cleared. Request the private portfolio and we will send selected work within one business day.',
        ar: 'معظم مشاريعنا الأخيرة مشمولة باتفاقيات سرية، ولذلك ننشر ما وافق عليه العملاء فقط. اطلب ملف الأعمال الخاص وسنرسل أعمالاً مختارة خلال يوم عمل واحد.',
      },
    },
  },
  process: {
    kicker: { en: 'How We Work', ar: 'طريقة عملنا' },
    title: { en: 'A process you can plan around.', ar: 'عملية يمكنك التخطيط على أساسها.' },
    body: {
      en: 'Six stages, clear owners, dated milestones and weekly visibility from day one to long after launch.',
      ar: 'ست مراحل، ومسؤولون واضحون، ومراحل مؤرّخة، ومتابعة أسبوعية من اليوم الأول وحتى ما بعد الإطلاق.',
    },
  },
  industries: {
    kicker: { en: 'Industries', ar: 'القطاعات' },
    title: { en: 'Experience that translates.', ar: 'خبرة تُترجم إلى نتائج.' },
    body: {
      en: 'We have delivered projects across eight sectors, each with its own language, regulations and customer behaviour.',
      ar: 'نفّذنا مشاريع في ثمانية قطاعات، لكل منها لغته وأنظمته وسلوك عملائه.',
    },
  },
  priorities: {
    kicker: { en: 'Our Priorities', ar: 'أولوياتنا' },
    title: { en: 'What we never compromise on.', ar: 'ما لا نتنازل عنه أبداً.' },
  },
  testimonials: {
    kicker: { en: 'Client Words', ar: 'آراء العملاء' },
    title: { en: 'The opinion that matters most.', ar: 'الرأي الأهم عندنا.' },
  },
  faq: {
    kicker: { en: 'Questions', ar: 'الأسئلة الشائعة' },
    title: { en: 'Before you ask.', ar: 'قبل أن تسأل.' },
  },
  contact: {
    kicker: { en: 'Let’s Talk', ar: 'لنتحدث' },
    title: { en: 'Tell us what you are building.', ar: 'أخبرنا بما تبنيه.' },
    body: {
      en: 'Send us a message and we will come back within one business day with ideas, a rough budget and a timeline. Or call us — we pick up.',
      ar: 'أرسل لنا رسالة وسنعود إليك خلال يوم عمل واحد بأفكار وميزانية تقديرية وجدول زمني. أو اتصل بنا — نرد عليك.',
    },
  },
};

export const ui = {
  allServices: { en: 'All services', ar: 'كل الخدمات' },
  readMore: { en: 'Read more', ar: 'اقرأ المزيد' },
  viewProject: { en: 'View project', ar: 'عرض المشروع' },
  seeAll: { en: 'See all work', ar: 'كل الأعمال' },
  getQuote: { en: 'Get a free quote', ar: 'احصل على عرض مجاني' },
  talkToUs: { en: 'Talk to us', ar: 'تحدث إلينا' },
  sendMessage: { en: 'Send message', ar: 'إرسال الرسالة' },
  sending: { en: 'Sending…', ar: 'جارٍ الإرسال…' },
  sent: { en: 'Message sent — we will reply within one business day.', ar: 'تم إرسال الرسالة — سنرد خلال يوم عمل واحد.' },
  form: {
    name: { en: 'Full name', ar: 'الاسم الكامل' },
    email: { en: 'Email address', ar: 'البريد الإلكتروني' },
    phone: { en: 'Phone / WhatsApp', ar: 'الهاتف / واتساب' },
    company: { en: 'Company', ar: 'الشركة' },
    service: { en: 'Service needed', ar: 'الخدمة المطلوبة' },
    message: { en: 'Tell us about your project', ar: 'أخبرنا عن مشروعك' },
    consent: { en: 'I agree to be contacted about this enquiry.', ar: 'أوافق على التواصل معي بخصوص هذا الطلب.' },
    required: { en: 'Please complete the required fields.', ar: 'يرجى إكمال الحقول المطلوبة.' },
  },
  footer: {
    blurb: {
      en: 'A technology and creative studio in Al Jubail, Saudi Arabia, building brands, websites and software for businesses across the Gulf and India.',
      ar: 'استوديو تقني وإبداعي في الجبيل بالمملكة العربية السعودية، يبني العلامات والمواقع والبرمجيات للشركات في الخليج والهند.',
    },
    explore: { en: 'Explore', ar: 'استكشف' },
    servicesList: { en: 'Services', ar: 'الخدمات' },
    getInTouch: { en: 'Get in touch', ar: 'تواصل معنا' },
    office: { en: 'Office', ar: 'المكتب' },
    rights: { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
    built: { en: 'Bilingual by design — English & Arabic.', ar: 'ثنائي اللغة بالتصميم — الإنجليزية والعربية.' },
    cr: { en: 'CR No.', ar: 'السجل التجاري' },
    vat: { en: 'VAT No.', ar: 'الرقم الضريبي' },
    officesLabel: { en: 'Offices', ar: 'مكاتبنا' },
    top: { en: 'Back to top', ar: 'العودة للأعلى' },
  },
  language: { en: 'العربية', ar: 'English' },
};

export const aboutPage = {
  kicker: { en: 'About Hafix', ar: 'عن حافيكس' },
  title: { en: 'A studio built for businesses that intend to grow.', ar: 'استوديو بُنيَ للشركات التي تنوي النمو.' },
  lead: {
    en: 'Hafix Solution is a bilingual technology and creative studio headquartered in Al Jubail, Saudi Arabia, with teams in the UAE, Qatar, Kuwait and India. Since 2018 we have helped more than forty brands across the Gulf launch, modernise and scale — with marketing, design and engineering handled by one accountable team.',
    ar: 'حافيكس سوليوشن استوديو تقني وإبداعي ثنائي اللغة في الدمام، المملكة العربية السعودية. منذ عام ٢٠١٨ ساعدنا أكثر من أربعين علامة في الخليج على الإطلاق والتحديث والنمو، عبر فريق واحد مسؤول عن التسويق والتصميم والهندسة.',
  },
  values: [
    {
      title: { en: 'Accountability', ar: 'المسؤولية' },
      body: {
        en: 'One team, one contract, one number to call. We do not outsource your project and disappear.',
        ar: 'فريق واحد، وعقد واحد، ورقم واحد للتواصل. لا نُسنِد مشروعك لجهة أخرى ثم نختفي.',
      },
    },
    {
      title: { en: 'Bilingual by default', ar: 'ثنائية اللغة أصلاً' },
      body: {
        en: 'Arabic is not an afterthought translated at the end. Every deliverable is designed for both languages from the first sketch.',
        ar: 'العربية ليست فكرة لاحقة تُترجم في النهاية. كل ما نُسلّمه مصمّم للغتين من أول رسم.',
      },
    },
    {
      title: { en: 'Measurement', ar: 'القياس' },
      body: {
        en: 'If we cannot measure it, we do not sell it. Every campaign and product ships with the numbers that define success.',
        ar: 'ما لا يمكن قياسه لا نبيعه. كل حملة ومنتج يُسلَّم مع الأرقام التي تعرّف النجاح.',
      },
    },
    {
      title: { en: 'Longevity', ar: 'الاستدامة' },
      body: {
        en: 'We build systems that your team can run for years, with documentation, training and support that continue.',
        ar: 'نبني أنظمة يمكن لفريقك تشغيلها لسنوات، مع توثيق وتدريب ودعم مستمر.',
      },
    },
  ],
  timeline: [
    { year: '2018', title: { en: 'Founded in the Eastern Province', ar: 'التأسيس في المنطقة الشرقية' }, body: { en: 'Started with three people, two laptops and a single branding client.', ar: 'بدأنا بثلاثة أشخاص وحاسوبين وعميل واحد للهوية البصرية.' } },
    { year: '2020', title: { en: 'Engineering added', ar: 'إضافة الهندسة' }, body: { en: 'Built our first custom ERP for a trading group in the Eastern Province.', ar: 'بنينا أول نظام تخطيط موارد مخصّص لمجموعة تجارية في المنطقة الشرقية.' } },
    { year: '2022', title: { en: 'Full-service studio', ar: 'استوديو متكامل الخدمات' }, body: { en: 'Marketing, production and software brought fully in-house.', ar: 'أصبح التسويق والإنتاج والبرمجيات داخلياً بالكامل.' } },
    { year: '2024', title: { en: 'Regional footprint', ar: 'حضور إقليمي' }, body: { en: 'Teams in Dubai, Doha, Kuwait City and Mangalore alongside the Saudi head office.', ar: 'فرق في دبي والدوحة والكويت ومانغالور إلى جانب المكتب الرئيسي في السعودية.' } },
    { year: '2026', title: { en: 'AI & automation practice', ar: 'ممارسة الذكاء الاصطناعي والأتمتة' }, body: { en: 'A dedicated practice helping clients remove manual work with practical AI.', ar: 'ممارسة متخصصة تساعد العملاء على تقليص العمل اليدوي بذكاء اصطناعي عملي.' } },
  ],
};

export const contactPage = {
  kicker: { en: 'Contact', ar: 'تواصل' },
  title: { en: 'Saudi head office, regional reach.', ar: 'مكتب رئيسي في السعودية وامتداد إقليمي.' },
  body: {
    en: 'Visit us in Al Khobar Al Shamaliya, call, WhatsApp, or send the form — whatever is easiest. Enquiries are answered within one business day, in English or Arabic.',
    ar: 'زرنا في الخبر الشمالية، أو اتصل، أو راسلنا على واتساب، أو أرسل النموذج — أيها أسهل لك. نرد على الاستفسارات خلال يوم عمل واحد، بالعربية أو الإنجليزية.',
  },
  phone: { en: 'Call', ar: 'اتصال' },
  whatsapp: { en: 'WhatsApp', ar: 'واتساب' },
  emailLabel: { en: 'Email', ar: 'البريد' },
  hoursLabel: { en: 'Working hours', ar: 'ساعات العمل' },
};

/* --------------------------------------------------------------------------- */
/* Case study detail per project                                                */
/* --------------------------------------------------------------------------- */
export const workDetails = {};
