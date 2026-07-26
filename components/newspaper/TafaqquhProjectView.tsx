"use client";

import { useLanguage } from "@/context/LanguageContext";
import PageLink from "@/components/newspaper/PageLink";

interface TafaqquhProjectViewProps {
  projectIndex: number;
  totalProjects: number;
  nextSlug?: string;
  nextTitle?: string;
}

export default function TafaqquhProjectView({
  projectIndex,
  totalProjects,
  nextSlug,
  nextTitle,
}: TafaqquhProjectViewProps) {
  const { t, language } = useLanguage();

  // Dynamic image selections based on active language
  const langKey = language === "ar" ? "ar" : language === "fr" ? "fr" : "en";
  
  const heroPic = `/tafaqquh_pics/hero_${langKey}.png`;
  const axesPic = `/tafaqquh_pics/axes_${langKey}.png`;
  const fullPagePic = `/tafaqquh_pics/${langKey}.png`;

  // Localized text dictionary for Tafaqquh feature presentation
  const content = {
    en: {
      kicker: "GAZETTE SPECIAL FEATURE EDITION · PLATFORM DISCOVERY & ARCHITECTURE",
      title: "Tafaqquh (تَفَقُّه)",
      subtitle: "Bridging Sacred Tradition, Methodological Rigor, and Modern Digital Architecture",
      dateline: "RESEARCH REPORT & ARCHITECTURE OVERVIEW — ESTABLISHED 2025",
      heroCaption: "Figure 1.0 — The Hero interface of Tafaqquh featuring Amiri Naskh calligraphy, an interactive open letter modal, and multi-language support (AR / FR / EN).",
      axesCaption: "Figure 2.0 — The 5 Methodological Axes of Tafaqquh: Foundations, Religion, Research, Writing, and Impact & Expansion.",
      fullPageCaption: "Figure 3.0 — Panoramic preview of the complete responsive Tafaqquh landing page.",
      
      leadTitle: "I. Vision & Philosophical Foundations",
      leadParagraph1: "Tafaqquh (تَفَقُّه) is a modern web application and intellectual initiative designed to foster a structured, rigorous, and authentic approach to Islamic knowledge, research, and writing. Inspired by traditional scholarship and executed with contemporary digital standards, the platform serves as a bridge between foundational texts and modern intellectual engagement.",
      leadParagraph2: "Built using Next.js 14+ (App Router), TypeScript, Framer Motion, and Tailwind CSS, the platform delivers a fast, responsive, and aesthetically immersive experience. Its visual identity incorporates traditional Arabic calligraphy, geometric ornamentation, and subtle micro-animations that evoke the elegance of classic manuscripts within a clean broadside UI.",

      quoteText: "“In the Name of Allah, the Most Merciful... O seeker of goodness, know that the path of knowledge is the path of the prophets, and that ignorance is a disease whose cure is knowledge.”",
      quoteSource: "— Excerpt from the Tafaqquh Open Letter Manifesto",

      axesTitle: "II. The Five Methodological Axes (المحاور الخمسة)",
      axesSub: "Each pillar represents a strategic phase in the student and researcher's intellectual journey:",
      
      axis1Title: "1. الأسس (Foundations)",
      axis1Desc: "Establishes the intellectual and methodological base: reading deeply, verifying sources, and cultivating critical discipline.",

      axis2Title: "2. الدين (Religion / Dîn)",
      axis2Desc: "Provides authentic, text-guided understanding of Quranic verses, prophetic traditions, and classical scholarly consensus.",

      axis3Title: "3. البحث (Research)",
      axis3Desc: "Teaches how to formulate research questions, compare evidence, analyze sources, and write reliable scientific syntheses.",

      axis4Title: "4. الكتابة (Writing)",
      axis4Desc: "Transforms understanding into structured expression, helping researchers draft clear essays, guides, and published works.",

      axis5Title: "5. الأثر والتوسع (Impact & Expansion)",
      axis5Desc: "Drives community outreach, educational initiatives, geographic expansion, and a halal funding model for sustainable growth.",

      aiTitle: "III. Intelligent Utilities: Izkur (اذْكُرْ) & Telegram Bot",
      aiDesc: "Alongside the core platform, Tafaqquh integrates smart spiritual tools, including Izkur (اذْكُرْ) — a voice-activated digital Dhikr companion and Telegram bot (@izkur_tafaqquh_bot). Using real-time speech recognition, Izkur allows users to perform hands-free Dhikr, track daily streaks, and participate in collective group counter challenges.",

      techStackTitle: "IV. Technical Architecture & Stack",
      tech1: "Next.js 14+ (App Router, Server Components & Static Site Generation)",
      tech2: "TypeScript & Strict Type Safety across all localized modules",
      tech3: "Framer Motion & GSAP for calligraphy SVG drawing and smooth scroll transitions",
      tech4: "i18next & Custom RTL/LTR Layout Engine for seamless AR/FR/EN switching",
      tech5: "Nodemailer & Honeypot / reCAPTCHA v3 protection for secure inquiries",

      galleryTitle: "V. Complete Platform Presentation",
      menuTitle: "VI. Navigation Menu & Drawer Interface",
      menuCaption: "Figure 4.0 — The Interactive Navigation Menu & Drawer Interface of Tafaqquh, highlighting language selection, section jump links, and responsive drawer navigation.",
      
      linksHeader: "EXPLORE LIVE PLATFORM & CODE REPOSITORIES",
      vercelBtn: "Visit Live Vercel Platform",
      githubBtn: "View Source Code on GitHub",
      botBtn: "Open Izkur Telegram Bot",
    },
    fr: {
      kicker: "ÉDITION SPÉCIALE GAZETTE · DÉCOUVERTE & ARCHITECTURE",
      title: "Tafaqquh (تَفَقُّه)",
      subtitle: "Unir la Tradition Sacrée, la Rigueur Méthodologique et l'Architecture Web Moderne",
      dateline: "RAPPORT DE RECHERCHE & PRÉSENTATION — ÉTABLI EN 2025",
      heroCaption: "Figure 1.0 — L'interface d'accueil de Tafaqquh avec calligraphie Amiri Naskh, lettre ouverte interactive et support multilingue (AR / FR / EN).",
      axesCaption: "Figure 2.0 — Les 5 Axes Méthodologiques de Tafaqquh : Assises, Religion, Recherche, Écriture et Rayonnement.",
      fullPageCaption: "Figure 3.0 — Aperçu panoramique complet de la landing page réactive de Tafaqquh.",
      
      leadTitle: "I. Vision et Fondations Philosophiques",
      leadParagraph1: "Tafaqquh (تَفَقُّه) est une application web moderne et une initiative intellectuelle visant à encourager une approche structurée, rigoureuse et authentique des sciences islamiques, de la recherche et de la rédaction. Inspirée par l'héritage scientifique traditionnel et réalisée selon les standards du web contemporain, la plateforme agit comme un pont entre les textes fondateurs et la pensée moderne.",
      leadParagraph2: "Développée avec Next.js 14+ (App Router), TypeScript, Framer Motion et Tailwind CSS, la plateforme offre une expérience rapide, fluide et visuellement immersive. Son identité visuelle associe calligraphie arabe traditionnelle, motifs géométriques et micro-animations subtiles pour offrir l'élégance des manuscrits classiques au sein d'une interface épurée.",

      quoteText: "« Au nom d'Allah, le Tout Miséricordieux... Ô chercheur de bien, sache que le chemin du savoir est le chemin des prophètes, et que l'ignorance est une maladie dont le remède est la connaissance. »",
      quoteSource: "— Extrait de la Lettre Ouverte du Projet Tafaqquh",

      axesTitle: "II. Les Cinq Axes Méthodologiques (المحاور الخمسة)",
      axesSub: "Chaque pilier représente une étape stratégique dans le parcours de l'étudiant et du chercheur :",
      
      axis1Title: "1. الأسس (Fondements / Assises)",
      axis1Desc: "Établit le socle intellectuel et méthodologique : lecture approfondie, vérification des sources et discipline de l'esprit.",

      axis2Title: "2. الدين (Religion / Dîn)",
      axis2Desc: "Offre une compréhension authentique et guidée des textes coraniques, des traditions prophétiques et du consensus des savants.",

      axis3Title: "3. البحث (Recherche)",
      axis3Desc: "Enseigne la formulation des problématiques, la comparaison des preuves, l'analyse des sources et la rédaction de synthèses scientifiques.",

      axis4Title: "4. الكتابة (Écriture)",
      axis4Desc: "Transforme la compréhension en expression structurée, aidant à rédiger des articles clairs, des guides et des publications.",

      axis5Title: "5. الأثر والتوسع (Rayonnement & Impact)",
      axis5Desc: "Développe l'action communautaire, les initiatives éducatives, l'expansion géographique et un modèle de financement éthique.",

      aiTitle: "III. Outils Intelligents : Izkur (اذْكُرْ) & Bot Telegram",
      aiDesc: "En complément de la plateforme, Tafaqquh intègre des outils spirituels intelligents comme Izkur (اذْكُرْ) — un compagnon de Dhikr à reconnaissance vocale interactive et son bot Telegram (@izkur_tafaqquh_bot). Grâce à l'analyse vocale en temps réel, Izkur permet d'effectuer son Dhikr sans les mains, de suivre ses séries quotidiennes et de participer aux compteurs collectifs.",

      techStackTitle: "IV. Architecture Technique & Technologies",
      tech1: "Next.js 14+ (App Router, Server Components & Génération Statique SSG)",
      tech2: "TypeScript & Typage Stricte sur l'ensemble des modules multilingues",
      tech3: "Framer Motion & GSAP pour les animations SVG calligraphiques et transitions",
      tech4: "i18next & Moteur de mise en page RTL/LTR pour un basculement fluide AR/FR/EN",
      tech5: "Nodemailer & Protection Honeypot / reCAPTCHA v3 pour des formulaires sécurisés",

      galleryTitle: "V. Présentation Globale de la Plateforme",
      menuTitle: "VI. Interface de Navigation & Menu Tiroir",
      menuCaption: "Figure 4.0 — L'interface de navigation et menu tiroir de Tafaqquh, mettant en valeur la sélection des langues, les liens rapides et le tiroir réactif.",
      
      linksHeader: "DÉCOUVRIR LA PLATEFORME EN LIGNE & CODE SOURCE",
      vercelBtn: "Visiter l'Application sur Vercel",
      githubBtn: "Voir le Code Source sur GitHub",
      botBtn: "Ouvrir le Bot Telegram Izkur",
    },
    ar: {
      kicker: "تغطية خاصة — استعراض المنظومة والمهندسية البرمجية",
      title: "تَفَقُّه (Tafaqquh)",
      subtitle: "الجمع بين الأصالة الشرعية، المنهجية البحثية، والتقنيات الرقمية الحديثة",
      dateline: "تقرير تقني واستعراض معماري — تأسس سنة 2025",
      heroCaption: "الشكل 1.0 — الواجهة الرئيسية لمنصة تفقه وتظهر فيها الخطوط العربية (الناخ)، والرسالة الافتتاحية التفاعلية، ودعم اللغات (عربي / فرنسي / إنجليزي).",
      axesCaption: "الشكل 2.0 — المحاور الخمسة الرئيسية لمنصة تفقه: الأسس، الدين، البحث، الكتابة، والأثر والتوسع.",
      fullPageCaption: "الشكل 3.0 — نظرة شاملة واستعراض كامل لصفحة الهبوط لمنصة تفقه.",
      
      leadTitle: "أولاً: الرؤية والأسس الفكرية",
      leadParagraph1: "منصة 'تَفَقُّه' هي تطبيق ويب حديث ومبادرة فكرية طموحة تهدف إلى تعزيز منهجية رصينة وممتدة في طلب العلم الشرعي والبحث العلمي والتدوين الفكري. تستلهم المنصة روح التراث العلمي الإسلامي وتصيغها وفق أعلى المعايير البرمجية والتصميمية الحديثة لتكون جسراً بين النصوص الأصيلة والتفكير المعاصر.",
      leadParagraph2: "طُوِّرت المنصة باستخدام Next.js 14+ وTypeScript وFramer Motion وTailwind CSS، متيحة واجهة مستخدم راقية تجمع بين الجماليات والخط العربي والزخارف الهندسية والمعايير البرمجية الحديثة، مما يوفر تجربة تصفح سلسة وعميقة.",

      quoteText: "«بسم الله الرحمن الرحيم... يا طالب الخير، اعلم أن طريق العلم هو طريق الأنبياء، وأن الجهل داء دواؤه التعلم والعرفان.»",
      quoteSource: "— اقتباس من الرسالة الافتتاحية لمنصة تفقه",

      axesTitle: "ثانياً: المحاور الخمسة الرئيسية (المحاور)",
      axesSub: "يمثل كل محور مرحلة استراتيجية في رحلة الطالب والباحث:",
      
      axis1Title: "1. الأسس (Foundations)",
      axis1Desc: "ترسيخ القاعدة الفكرية والمنهجية: القراءة العميقة، التثبت من المصادر، وبناء ملكة النقد العلمي.",

      axis2Title: "2. الدين (Religion / Dîn)",
      axis2Desc: "تقديم فهم أصيل وممنهج للنصوص القرآنية، الأحاديث النبوية، وآثار العلماء.",

      axis3Title: "3. البحث (Research)",
      axis3Desc: "تنمية مهارات التوثيق والتحقيق العلمي، مقارنة الأدلة، وصياغة البحوث الرصينة.",

      axis4Title: "4. الكتابة (Writing)",
      axis4Desc: "تحويل الفهم إلى بيان وكتابة، وتدريب الباحثين على صياغة المقالات والدراسات المحكمة.",

      axis5Title: "5. الأثر والتوسع (Impact & Expansion)",
      axis5Desc: "نشر النفع، خدمة المجتمع، المبادرات التعليمية، والشراكات مع نموذج تمويل حلال مستدام.",

      aiTitle: "ثالثاً: الأدوات الذكية: تطبيق (اذْكُرْ) وبوت التلغرام",
      aiDesc: "إلى جانب المنصة الرئيسية، تتضمن تفقه أدوات ذكية تفاعلية مثل تطبيق 'اذْكُرْ' (Izkur) للتسبيح الصوتي التفاعلي وبوت تلغرام (@izkur_tafaqquh_bot). يتيح التطبيق بالتعرف الصوتي المباشر التسبيح دون الحاجة للمس الشاشة، متابعة الإنجاز اليومي، والمشاركة في التحديات الجماعية.",

      techStackTitle: "رابعاً: المعمارية البرمجية والتقنيات",
      tech1: "Next.js 14+ (App Router، مكونات خادمة وتوليد صفحات مكتملة SSG)",
      tech2: "TypeScript ودعم كامل للنمذجة الصارمة عبر اللغات المختلفة",
      tech3: "Framer Motion وGSAP للتحريك التفاعلي ورسم خطوط SVG",
      tech4: "i18next ودعم اتجاهات الكتابة RTL/LTR للتبديل الفوري بين العربية، الفرنسية، والإنجليزي",
      tech5: "Nodemailer وحماية حثيثة ضد البريد المزعج reCAPTCHA v3",

      galleryTitle: "خامساً: المعرض الكامل للمنصة",
      menuTitle: "سادساً: واجهة القائمة والملاحة التفاعلية",
      menuCaption: "الشكل 4.0 — واجهة القائمة والملاحة التفاعلية لمنصة تفقه وتظهر فيها خيارات التبديل بين اللغات والتنقل السريع بين المحاور.",
      
      linksHeader: "روابط المنصة الحية والمصدر البرمجي",
      vercelBtn: "زيارة تطبيق تفقه على Vercel",
      githubBtn: "عرض المصدر على GitHub",
      botBtn: "فتح بوت التسبيح على Telegram",
    }
  };

  const c = content[langKey];

  return (
    <article className="max-w-4xl mx-auto">
      {/* Broadside Newspaper Header */}
      <header className="mb-8 pb-6 border-b-2 border-foreground text-center">
        <div className="newspaper-rule-double max-w-xl mx-auto mb-3" />
        <span className="font-display text-xs uppercase tracking-[0.25em] font-bold text-muted-foreground block mb-2">
          {c.kicker}
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-black leading-tight uppercase mb-3 tracking-tight">
          {c.title}
        </h1>
        <p className="font-body text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto mb-4 leading-relaxed">
          {c.subtitle}
        </p>

        {/* Newspaper Dateline & Meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground border-t border-b border-border-light py-2.5 max-w-2xl mx-auto">
          <span>{c.dateline}</span>
          <span>•</span>
          <span>{t.projectsPage.year}: 2025</span>
          <span>•</span>
          <span>{t.projectsPage.role}: {t.authorName}</span>
        </div>
        <div className="newspaper-rule-double max-w-xl mx-auto mt-4" />
      </header>

      {/* Quick Action Badges */}
      <div className="mb-10 p-4 border-2 border-foreground bg-card flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-display text-xs uppercase font-bold tracking-wider">
            PRODUCTION DEPLOYMENT ACTIVE
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://tafaquh.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-foreground text-background font-display text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            🚀 {c.vercelBtn} →
          </a>
          <a
            href="https://github.com/AmineMOULAI/tafaquh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-foreground font-display text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            💻 GitHub Repository →
          </a>
        </div>
      </div>

      {/* Section I: Hero Presentation */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-black uppercase tracking-tight mb-4 border-b border-foreground pb-2">
          {c.leadTitle}
        </h2>

        {/* Hero Screenshot Figure */}
        <figure className="mb-6 border-2 border-foreground p-2 bg-background shadow-md">
          <div className="aspect-[16/10] bg-muted overflow-hidden relative border border-border">
            <img
              src={heroPic}
              alt="Tafaqquh Hero Interface Screenshot"
              className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-xs font-body text-muted-foreground italic mt-3 text-center border-t border-border-light pt-2">
            {c.heroCaption}
          </figcaption>
        </figure>

        <div className="font-body text-lg leading-relaxed space-y-4">
          <p className="drop-cap">{c.leadParagraph1}</p>
          <p>{c.leadParagraph2}</p>
        </div>

        {/* Broadside Pull-Quote Box */}
        <blockquote className="my-8 p-6 border-2 border-foreground bg-muted/40 relative text-center">
          <span className="text-4xl font-serif leading-none absolute -top-4 left-6 bg-background px-2 text-foreground">
            “
          </span>
          <p className="font-body text-xl italic leading-relaxed text-foreground font-medium mb-3">
            {c.quoteText}
          </p>
          <cite className="font-display text-xs uppercase tracking-widest text-muted-foreground not-italic font-bold">
            {c.quoteSource}
          </cite>
        </blockquote>
      </section>

      {/* Section II: The 5 Methodological Axes */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-black uppercase tracking-tight mb-4 border-b border-foreground pb-2">
          {c.axesTitle}
        </h2>
        <p className="font-body text-base text-muted-foreground italic mb-6">
          {c.axesSub}
        </p>

        {/* Axes Screenshot Figure */}
        <figure className="mb-8 border-2 border-foreground p-2 bg-background shadow-md">
          <div className="aspect-[16/10] bg-muted overflow-hidden relative border border-border">
            <img
              src={axesPic}
              alt="Tafaqquh 5 Axes Screenshot"
              className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-xs font-body text-muted-foreground italic mt-3 text-center border-t border-border-light pt-2">
            {c.axesCaption}
          </figcaption>
        </figure>

        {/* Grid of 5 Axes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border hover:border-foreground transition-colors bg-card">
            <h3 className="font-display text-base font-bold uppercase mb-2 text-foreground">
              {c.axis1Title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {c.axis1Desc}
            </p>
          </div>

          <div className="p-4 border border-border hover:border-foreground transition-colors bg-card">
            <h3 className="font-display text-base font-bold uppercase mb-2 text-foreground">
              {c.axis2Title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {c.axis2Desc}
            </p>
          </div>

          <div className="p-4 border border-border hover:border-foreground transition-colors bg-card">
            <h3 className="font-display text-base font-bold uppercase mb-2 text-foreground">
              {c.axis3Title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {c.axis3Desc}
            </p>
          </div>

          <div className="p-4 border border-border hover:border-foreground transition-colors bg-card">
            <h3 className="font-display text-base font-bold uppercase mb-2 text-foreground">
              {c.axis4Title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {c.axis4Desc}
            </p>
          </div>

          <div className="p-4 border border-border hover:border-foreground transition-colors bg-card md:col-span-2">
            <h3 className="font-display text-base font-bold uppercase mb-2 text-foreground">
              {c.axis5Title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {c.axis5Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Section III: AI & Smart Tools (Izkur) */}
      <section className="mb-12 p-6 border-2 border-foreground bg-muted/20">
        <h2 className="font-display text-xl font-bold uppercase tracking-tight mb-3 flex items-center gap-2">
          <span>🎙️</span> {c.aiTitle}
        </h2>
        <p className="font-body text-base leading-relaxed text-foreground/90 mb-4">
          {c.aiDesc}
        </p>
        <div className="pt-2 border-t border-border-light flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            BOT HANDLE: @izkur_tafaqquh_bot
          </span>
          <a
            href="https://t.me/izkur_tafaqquh_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-display uppercase font-bold underline underline-offset-4 hover:text-muted-foreground"
          >
            {c.botBtn} →
          </a>
        </div>
      </section>

      {/* Section IV: Technical Architecture */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-black uppercase tracking-tight mb-4 border-b border-foreground pb-2">
          {c.techStackTitle}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs uppercase tracking-wide">
          <li className="p-3 border border-border bg-card flex items-start gap-2">
            <span className="text-foreground font-bold">✓</span> {c.tech1}
          </li>
          <li className="p-3 border border-border bg-card flex items-start gap-2">
            <span className="text-foreground font-bold">✓</span> {c.tech2}
          </li>
          <li className="p-3 border border-border bg-card flex items-start gap-2">
            <span className="text-foreground font-bold">✓</span> {c.tech3}
          </li>
          <li className="p-3 border border-border bg-card flex items-start gap-2">
            <span className="text-foreground font-bold">✓</span> {c.tech4}
          </li>
          <li className="p-3 border border-border bg-card flex items-start gap-2 md:col-span-2">
            <span className="text-foreground font-bold">✓</span> {c.tech5}
          </li>
        </ul>
      </section>

      {/* Section V: Panoramic Full Page Gallery */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-black uppercase tracking-tight mb-4 border-b border-foreground pb-2">
          {c.galleryTitle}
        </h2>
        <figure className="border-2 border-foreground p-2 bg-background shadow-lg">
          <div className="max-h-[600px] overflow-y-auto border border-border scrollbar-thin scrollbar-thumb-foreground">
            <img
              src={fullPagePic}
              alt="Full Tafaqquh Landing Page Screenshot"
              className="w-full h-auto object-cover"
            />
          </div>
          <figcaption className="text-xs font-body text-muted-foreground italic mt-3 text-center border-t border-border-light pt-2">
            {c.fullPageCaption}
          </figcaption>
        </figure>
      </section>

      {/* Section VI: Interactive Navigation Menu Showcase */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-black uppercase tracking-tight mb-4 border-b border-foreground pb-2">
          {c.menuTitle}
        </h2>
        <figure className="border-2 border-foreground p-2 bg-background shadow-lg">
          <div className="max-h-[650px] overflow-y-auto border border-border flex items-center justify-center bg-muted/20">
            <img
              src="/menu.png"
              alt="Tafaqquh Navigation Menu Screenshot"
              className="w-full max-w-sm md:max-w-md h-auto object-contain py-4"
            />
          </div>
          <figcaption className="text-xs font-body text-muted-foreground italic mt-3 text-center border-t border-border-light pt-2">
            {c.menuCaption}
          </figcaption>
        </figure>
      </section>

      {/* Broadside Footer Action Bar */}
      <section className="pt-6 border-t-2 border-foreground text-center">
        <h3 className="font-display text-xs uppercase tracking-[0.25em] font-bold text-muted-foreground mb-4">
          {c.linksHeader}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://tafaquh.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-foreground text-background font-display text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            {c.vercelBtn} →
          </a>
          <a
            href="https://github.com/AmineMOULAI/tafaquh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-foreground font-display text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            {c.githubBtn} →
          </a>
        </div>
      </section>
    </article>
  );
}
