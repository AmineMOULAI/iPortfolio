import { Language } from "./translations";

export interface LocalizedText {
  en: string;
  fr: string;
  ar: string;
}

export interface LocalizedArray {
  en: string[];
  fr: string[];
  ar: string[];
}

export interface ProjectData {
  slug: string;
  title: string | LocalizedText;
  category: 'university' | 'ai' | 'gamedev';
  summary: LocalizedText;
  year: string;
  role: LocalizedText;
  technologies: string[];
  description: LocalizedArray;
  links?: Array<{ label: string; href: string; external?: boolean }>;
  image?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: 'university' | 'ai' | 'gamedev';
  summary: string;
  year: string;
  role: string;
  technologies: string[];
  description: string[];
  links?: Array<{ label: string; href: string; external?: boolean }>;
  image?: string;
}

export const rawProjects: ProjectData[] = [
  {
    slug: "tafaqquh",
    title: {
      en: "Tafaqquh",
      fr: "Tafaqquh",
      ar: "تَفَقُّه (Tafaqquh)"
    },
    category: "ai",
    summary: {
      en: "A platform bridging knowledge, faith, research, and writing, dedicated to a deep understanding of Islamic sciences and intellectual growth.",
      fr: "Une plateforme reliant savoir, foi, recherche et écriture, dédiée à la compréhension profonde des sciences islamiques et à l'épanouissement intellectuel.",
      ar: "منصة تجمع بين العلم، الإيمان، البحث، والتدوين، تهدف إلى الفهم العميق للعلوم الإسلامية والبناء الفكري."
    },
    year: "2025",
    role: {
      en: "Founder & Lead Developer",
      fr: "Fondateur & Développeur Principal",
      ar: "المؤسس والمطور الرئيسي"
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "i18next", "Vercel"],
    image: "/tafaqah1.png",
    description: {
      en: [
        "Tafaqquh is an ambitious platform designed to foster a rigorous, structured, and accessible approach to Islamic knowledge, research, and writing.",
        "Built with Next.js, TypeScript, and modern animation libraries, it offers a refined user interface that seamlessly integrates traditional Islamic calligraphy and aesthetic principles with cutting-edge web design.",
        "The platform is structured around five core pillars: Foundations (intellectual methodology), Religion (authentic understanding), Research (methodological rigor), Writing (expressive clarity), and Impact & Expansion (community outreach and educational initiatives).",
        "Tafaqquh also incorporates smart tools such as Izkur, a voice-activated digital Dhikr companion and Telegram bot, demonstrating the fusion of technology and spiritual practice."
      ],
      fr: [
        "Tafaqquh est une plateforme ambitieuse conçue pour encourager une approche rigoureuse, structurée et accessible de la connaissance islamique, de la recherche et de la rédaction.",
        "Développée avec Next.js, TypeScript et des bibliothèques d'animation modernes, elle propose une interface utilisateur raffinée qui intègre harmonieusement la calligraphie traditionnelle et les motifs géométriques islamiques aux standards modernes du design web.",
        "La plateforme s'articule autour de cinq axes fondamentaux : les Fondements (méthodologie intellectuelle), la Religion (compréhension authentique), la Recherche (rigueur scientifique), l'Écriture (clarté d'expression) et l'Impact & Expansion (rayonnement communautaire).",
        "Tafaqquh intègre également des outils intelligents tels que Izkur, un compagnon de Dhikr vocal avec bot Telegram, illustrant l'alliance entre technologie moderne et spiritualité."
      ],
      ar: [
        "تَفَقُّه هي منصة طموحة مصممة لتعزيز منهجية رصينة وممتدة في طلب العلم الشرعي والبحث العلمي والتدوين الفكري.",
        "طُوِّرت المنصة باستخدام Next.js وTypeScript وأحدث تقنيات التصميم، متيحة واجهة مستخدم راقية تجمع بين الجماليات والخط العربي والزخارف الهندسية والمعايير البرمجية الحديثة.",
        "تتأسس المنصة على خمسة محاور رئيسية: الأسس (المنهجية الفكرية)، الدين (الفهم الأصيل)، البحث (الرؤية والتحقيق)، الكتابة (التعبير والبيان)، والأثر والتوسع (النفع المتعدي والمشاريع).",
        "كما تضم المنصة أدوات ذكية مثل تطبيق 'اذْكُرْ' للتسبيح الصوتي التفاعلي وبوت تلغرام، مما يجسد سد الفجوة بين التقنية الحديثة والسلوك الروحي."
      ]
    },
    links: [
      { label: "Vercel Link", href: "https://tafaquh.vercel.app/", external: true },
      { label: "GitHub", href: "https://github.com/AmineMOULAI/tafaquh", external: true }
    ]
  },
  {
    slug: "voxinsight",
    title: {
      en: "VoxInsight",
      fr: "VoxInsight",
      ar: "فوكس إنسايت (VoxInsight)"
    },
    category: "ai",
    summary: {
      en: "An AI-driven customer review intelligence suite that transforms feedback into actionable insights via market audits, real-time B2C arbitration, and B2B virtual management.",
      fr: "Une suite d'intelligence artificielle d'analyse des avis clients qui transforme les retours en données exploitables via des audits de marché et du management virtuel.",
      ar: "منظومة ذكاء اصطناعي لتحليل آراء العملاء وتحويل الملاحظات إلى رؤى عملية عبر تدقيق السوق والإدارة الافتراضية."
    },
    year: "2024",
    role: {
      en: "Creator & Lead Developer",
      fr: "Créateur & Développeur Principal",
      ar: "المبتكر والمطور الرئيسي"
    },
    technologies: ["Python", "Gemini CLI", "Streamlit", "Playwright"],
    image: "/screen.png",
    description: {
      en: [
        "VoxInsight is a comprehensive software suite built to extract and analyze customer feedback at scale. It operates across three distinct pillars: B2B bulk auditing, B2C real-time consumer arbitration, and B2B daily virtual management.",
        "The Market Audit engine utilizes Playwright to scrape thousands of reviews, leveraging AI to identify long-term market trends and outputting professional Markdown reports for strategic decision-making.",
        "For real-time consumer guidance, the suite features an interactive Streamlit WebApp acting as a Consumer Arbitrator, providing instant buy/no-buy recommendations alongside an operational Virtual Manager that drafts responses for business owners.",
        "This project demonstrates the powerful integration of large language models with web automation tools to bridge the gap between raw data and tangible business intelligence."
      ],
      fr: [
        "VoxInsight est une suite logicielle complète conçue pour extraire et analyser les avis clients à grande échelle. Elle s'articule autour de trois piliers distincts : audit B2B en masse, arbitrage consommateur B2C en temps réel et gestion virtuelle quotidienne B2B.",
        "Le moteur d'audit de marché utilise Playwright pour collecter des milliers d'avis, exploitant l'IA pour identifier les tendances à long terme et générer des rapports Markdown professionnels pour la prise de décision stratégique.",
        "Pour les applications en temps réel, la suite intègre une WebApp Streamlit interactive agissant comme un arbitre pour consommateurs, fournissant des recommandations d'achat instantanées, ainsi qu'un manager virtuel qui génère des alertes opérationnelles et rédige des réponses.",
        "Ce projet démontre l'intégration puissante des grands modèles de langage avec des outils d'automatisation web pour combler l'écart entre données brutes et intelligence d'affaires."
      ],
      ar: [
        "فوكس إنسايت هي منظومة برمجية متكاملة مصممة لاستخراج وتحليل آراء العملاء على نطاق واسع. تعمل عبر ثلاثة محاور رئيسية لتلبية احتياجات السوق المختلفة: التدقيق الجماعي للأعمال، التحكيم المباشر للمستهلكين، والإدارة الافتراضية اليومية.",
        "يستخدم محرك تدقيق السوق أداة Playwright لجمع آلاف التقييمات، مستفيداً من الذكاء الاصطناعي لتحديد الاتجاهات طويلة المدى وتصدير تقارير احترافية لاتخاذ القرارات الاستراتيجية.",
        "في التطبيقات المباشرة، تتضمن المنظومة تطبيق Streamlit تفاعلي يعمل كحَكَم للمستهلك، متيحاً توصيات فورية بالشراء من عدمه، إلى جانب مدير افتراضي يولد تنبيهات تشغيلية ويصيغ الردود لأصحاب الأعمال.",
        "يبرز هذا المشروع التكامل القوي بين نماذج اللغة الكبيرة وأدوات الأتمتة لسد الفجوة بين البيانات الخام ورؤى الأعمال الملموسة."
      ]
    },
    links: [
      { label: "GitHub", href: "https://github.com/AmineMOULAI/VoxInsight", external: true }
    ]
  },
  {
    slug: "psycho-robots",
    title: {
      en: "Psycho-robots",
      fr: "Psycho-robots",
      ar: "سايكو ريبوتس (Psycho-robots)"
    },
    category: "university",
    summary: {
      en: "Simulation of heterogeneous multi-agent robots on a 2D grid exploring cooperation, trust, and conflict handling modeled after psychological theories.",
      fr: "Simulation de robots hétérogènes sur une grille 2D qui explorent, coopèrent et gèrent les conflits pour modéliser des comportements collectifs inspirés de la psychologie.",
      ar: "محاكاة لروبوتات متجانسة وغير متجانسة على شبكة ثنائية الأبعاد تستكشف وتتعاون وتدير النزاعات لنمذجة السلوك الجماعي المستوحى من علم النفس."
    },
    year: "2025",
    role: {
      en: "Software Developer",
      fr: "Développeur Logiciel",
      ar: "مطور برمجيات"
    },
    technologies: ["C/C++", "Python"],
    image: "/PsychoRobots1.png",
    description: {
      en: [
        "The Psycho-robots project began as a technical exercise in multi-agent simulation and evolved into an exploration of emergent cooperation.",
        "In the simulation, each robot operates with individual goals and limited local information. Cooperation emerges naturally from local interactions rather than centralized control.",
        "The system implements psychological models including trust-building mechanisms, reputation systems, and conflict resolution protocols.",
        "This bottom-up emergence mirrors findings from behavioral economics and social psychology regarding how autonomous agents self-organize."
      ],
      fr: [
        "Le projet Psycho-robots a débuté comme un exercice technique de simulation multi-agents pour évoluer vers une réflexion sur la nature même de la coopération.",
        "Dans la simulation, chaque robot fonctionne avec des objectifs individuels et des informations limitées sur ses pairs. La coopération émerge d'interactions locales.",
        "Le système intègre divers modèles psychologiques, notamment des mécanismes de confiance, des systèmes de réputation et des protocoles de résolution de conflits.",
        "Cette émergence s'inspire de l'économie comportementale et de la psychologie sociale sur l'auto-organisation des groupes humains."
      ],
      ar: [
        "بدأ مشروع سايكو ريبوتس كتمرين تقني في محاكاة الوكلاء المتعددين وسرعان ما تطور إلى تأمل في طبيعة التعاون ذاتها.",
        "في المحاكاة، يعمل كل روبوت بأهداف فردية ومعلومات محدودة عن أقرانه. ينشأ التعاون ليس من قيادة مركزية بل من التفاعلات المحلية.",
        "يطبق النظام نماذج نفسية متعددة تشمل آليات بناء الثقة، أنظمة السمعة، وبروتوكولات حل النزاعات.",
        "يعكس هذا البروز الذاتي نتائج الاقتصاد السلوكي وعلم النفس الاجتماعي حول كيفية تنظيم المجموعات البشرية لنفسها."
      ]
    },
    links: [
      { label: "GitHub", href: "#", external: true },
      { label: "Demo", href: "#", external: true }
    ]
  },
  {
    slug: "rv32i-carcassonne",
    title: {
      en: "RV32I Processor & Carcassonne",
      fr: "Processeur RV32I & Carcassonne",
      ar: "معالج RV32I ولعبة كركاسون"
    },
    category: "university",
    summary: {
      en: "Design of a 32-bit RISC-V processor architecture paired with a strategic digital board game implementation in a hardware/software team setting.",
      fr: "Conception d'un processeur RISC-V 32 bits et d'un jeu de stratégie associé, combinant architecture matérielle et logique logicielle.",
      ar: "تصميم معالج RISC-V 32-بت ولعبة استراتيجية مرافقة، يجمع بين هندسة العتاد والمنطق البرمجي في عمل جماعي."
    },
    year: "2024",
    role: {
      en: "Hardware & Software Engineer",
      fr: "Ingénieur Matériel & Logiciel",
      ar: "مهندس عتاد وبرمجيات"
    },
    technologies: ["VHDL", "C/C++"],
    image: "/carcassonne.jpg",
    description: {
      en: [
        "This dual project combined low-level hardware architecture design with high-level game logic, creating a unique intersection of computer architecture and software engineering.",
        "The RV32I processor implementation involved designing and verifying a complete 32-bit RISC-V CPU, including instruction fetch, decoding, ALU, register files, and memory interfacing.",
        "Parallel to the hardware work, we developed a digital version of the Carcassonne board game, implementing tile placement validation, feature scoring, and AI opponents.",
        "The project highlighted effective hardware/software co-design, team coordination, and modular system architecture."
      ],
      fr: [
        "Ce projet double a combiné la conception matérielle bas niveau et la logique de jeu haut niveau, créant une intersection unique entre architecture informatique et génie logiciel.",
        "L'implémentation du processeur RV32I a impliqué la conception et la vérification d'un processeur RISC-V 32 bits complet.",
        "En parallèle, nous avons développé une version numérique du jeu de société Carcassonne avec validation du placement des tuiles et IA adverses.",
        "La collaboration en équipe a apporté des leçons précieuses sur la gestion de projet et l'intégration des composants."
      ],
      ar: [
        "جمع هذا المشروع المزدوج بين تصميم العتاد منخفض المستوى ومنطق الألعاب عالي المستوى في التقاء مميز بين معماريّة الحاسوب وهندسة البرمجيات.",
        "تضمن تنفيذ معالج RV32I تصميم والتحقق من وحدة معالجة مركزية RISC-V كاملة بقدرة 32-بت.",
        "بالتوازي مع عمل العتاد، طورنا نسخة رقمية من لعبة كركاسون اللوحية مع التحقق من قواعد اللعبة ومنافسين باستخدام الذكاء الاصطناعي.",
        "علمنا جانب التعاون الجماعي دروساً قيمة في إدارة المشاريع وواجهات النظام الواضحة."
      ]
    }
  },
  {
    slug: "python-games",
    title: {
      en: "Python Game Suite",
      fr: "Jeux en Python",
      ar: "ألعاب بلغة بايثون"
    },
    category: "gamedev",
    summary: {
      en: "Development of interactive games in Python with custom GUIs, focusing on algorithms, state management, and data structures.",
      fr: "Développement de petits jeux en Python avec interfaces graphiques, axé sur les algorithmes de jeu et la gestion d'état.",
      ar: "تطوير ألعاب صغيرة بلغة بايثون برواجهات رسمية، مع التركيز على خوارزميات الألعاب وإدارة الحالات."
    },
    year: "2023–2024",
    role: {
      en: "Game Developer",
      fr: "Développeur de Jeux",
      ar: "مطور ألعاب"
    },
    technologies: ["Python", "Tkinter", "Pygame"],
    image: "/python.png",
    description: {
      en: [
        "A collection of interactive games built to explore fundamental game development concepts.",
        "Projects included classic arcade games reimagined with custom mechanics and puzzle games featuring procedural elements.",
        "The development process emphasized clean software architecture, cleanly separating game state logic from rendering layers."
      ],
      fr: [
        "Une collection de jeux interactifs conçus pour explorer les concepts fondamentaux du développement de jeux.",
        "Les projets comprenaient des jeux classiques réinventés avec des mécaniques personnalisées.",
        "Le développement a mis l'accent sur une architecture propre séparant le logique du jeu de la présentation."
      ],
      ar: [
        "مجموعة ألعاب تفاعلية طُورت لاستكشاف المفاهيم الأساسية لتطوير الألعاب.",
        "شملت المشاريع ألعاباً كلاسيكية مُعاد إبتكارها بميكانيكيات خاصة وألعاب ألغاز.",
        "ركزت عملية التطوير على الهندسة النظيفة وفصل منطق اللعبة عن طبقات العرض."
      ]
    },
    links: [
      { label: "GitHub", href: "#", external: true }
    ]
  },
  {
    slug: "automotive-automation",
    title: {
      en: "Automotive Workflows & Book Platform",
      fr: "Automatisation Automobile & Plateforme de Livres",
      ar: "أتمتة قطاع السيارات ومنصة الكتب"
    },
    category: "university",
    summary: {
      en: "Process automation for the automotive sector paired with a community platform for reading discovery and inventory tracking.",
      fr: "Automatisation de processus pour le secteur automobile et plateforme communautaire de livres.",
      ar: "أتمتة العمليات لقطاع السيارات ومنصة كتب مجتمعية لإدارة الأدوات عبر الإنترنت."
    },
    year: "2024",
    role: {
      en: "Full Stack Developer",
      fr: "Développeur Full Stack",
      ar: "مطور برمجيات متكامل"
    },
    technologies: ["n8n", "Web Stack", "APIs"],
    description: {
      en: [
        "This project addressed real-world process automation challenges in the automotive sector by designing workflows that minimized repetitive data tasks.",
        "The automation engine linked inventory systems, customer databases, and appointment schedulers via n8n integration nodes.",
        "Alongside the automation pipeline, a community book platform was developed to enable book lovers to share recommendations, review titles, and manage reading lists."
      ],
      fr: [
        "Ce projet a répondu aux défis d'automatisation du secteur automobile en réduisant la saisie manuelle des données.",
        "La plateforme d'automatisation a connecté plusieurs systèmes (inventaire, bases clients, plannings) grâce à n8n.",
        "En parallèle, la plateforme de livres a créé un espace communautaire pour partager des recommandations de lecture."
      ],
      ar: [
        "عالج هذا المشروع تحديات الأتمتة الواقعية في قطاع السيارات، مدمجاً أنظمة تدفق العمل لتقليل الإدخال اليدوي للبيانات.",
        "ربطت منصة الأتمتة بين أنظمة متعددة تشمل إدارة المخزون وقواعد بيانات العملاء باستخدام n8n.",
        "إلى جانب عمل السيارات، أنشأت منصة الكتب مساحة مجتمعية للقراء لمشاركة التوصيات ومتابعة قراءاتهم."
      ]
    }
  },
  {
    slug: "godot-prototype",
    title: {
      en: "Godot Prototype",
      fr: "Prototype Godot",
      ar: "نموذج أولي على محرك غودو (Godot)"
    },
    category: "gamedev",
    summary: {
      en: "Experimental game prototype exploring 2D mechanics and player interactions using the Godot engine.",
      fr: "Prototype de jeu expérimental explorant des mécaniques 2D et des interactions avec le moteur Godot.",
      ar: "نموذج أولي للعبة تجريبية يستكشف ميكانيكيات ثنائية الأبعاد وتفاعلات اللاعبين باستخدام محرك غودو."
    },
    year: "Ongoing",
    role: {
      en: "Developer",
      fr: "Développeur",
      ar: "مطور"
    },
    technologies: ["GDScript", "Godot 4"],
    description: {
      en: [
        "An ongoing exploration of game design principles using the Godot engine.",
        "Current focus areas include procedural level generation, physics-based interactions, and responsive character controls."
      ],
      fr: [
        "Une exploration continue des principes du game design avec le moteur Godot.",
        "Les axes actuels incluent la génération procédurale de niveaux et la physique interactive."
      ],
      ar: [
        "استكشاف مستمر لمبادئ تصميم الألعاب باستخدام محرك غودو.",
        "تركز مجالات العمل الحالية على التوليد الإجرائي للمراحل والتحكم السلس في الشخصيات."
      ]
    }
  }
];

export const getProjects = (lang: Language = 'en'): Project[] => {
  return rawProjects.map(p => ({
    slug: p.slug,
    title: typeof p.title === 'string' ? p.title : p.title[lang] || p.title.en,
    category: p.category,
    summary: p.summary[lang] || p.summary.en,
    year: p.year,
    role: p.role[lang] || p.role.en,
    technologies: p.technologies,
    description: p.description[lang] || p.description.en,
    links: p.links,
    image: p.image
  }));
};

export const getProjectBySlug = (slug: string, lang: Language = 'en'): Project | undefined => {
  const p = rawProjects.find(item => item.slug === slug);
  if (!p) return undefined;
  return {
    slug: p.slug,
    title: typeof p.title === 'string' ? p.title : p.title[lang] || p.title.en,
    category: p.category,
    summary: p.summary[lang] || p.summary.en,
    year: p.year,
    role: p.role[lang] || p.role.en,
    technologies: p.technologies,
    description: p.description[lang] || p.description.en,
    links: p.links,
    image: p.image
  };
};

export const projects = getProjects('en');
