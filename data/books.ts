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

export interface BookData {
  slug: string;
  title: LocalizedText;
  author: string;
  category: LocalizedText;
  dimension: LocalizedText;
  dates?: LocalizedText;
  status: {
    en: 'Done' | 'In progress' | 'Not started';
    fr: 'Terminé' | 'En cours' | 'Non commencé';
    ar: 'مكتمل' | 'قيد القراءة' | 'لم يبدأ';
  };
  insights: LocalizedArray;
  coverBg?: string; // Tailwind color class for book cover mockup
}

export interface Book {
  slug: string;
  title: string;
  author: string;
  category: string;
  dimension: string;
  dates?: string;
  status: string;
  insights: string[];
  coverBg?: string;
}

export const rawBooks: BookData[] = [
  {
    slug: "les-48-lois-du-pouvoir",
    title: {
      en: "The 48 Laws of Power",
      fr: "Les 48 lois du pouvoir",
      ar: "48 قانوناً للقوة"
    },
    author: "Robert Greene",
    category: {
      en: "Psychology",
      fr: "Psychologie",
      ar: "علم النفس"
    },
    dimension: {
      en: "Emotional & Intellectual",
      fr: "Émotionnelle, Intellectuelle",
      ar: "عاطفية، فكرية"
    },
    dates: {
      en: "May 23, 2023 → July 9, 2023",
      fr: "23 mai 2023 → 9 juillet 2023",
      ar: "23 مايو 2023 ← 9 يوليو 2023"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-amber-950 text-amber-100",
    insights: {
      en: ["Mastery of power dynamics, influence, and strategic composure", "Navigating human psychology and social posture"],
      fr: ["Compréhension des dynamiques de pouvoir et d'influence", "Maîtrise des émotions et stratégie relationnelle"],
      ar: ["فهم ديناميكيات القوة والتأثير والسيطرة على الذات", "إتقان العلاقات الإستراتيجية وعلوم النفس السلوكية"]
    }
  },
  {
    slug: "21-lecons-pour-le-xxi-siecle",
    title: {
      en: "21 Lessons for the 21st Century",
      fr: "21 leçons pour le XXIe siècle",
      ar: "21 درساً للقرن الحادي والعشرين"
    },
    author: "Yuval Noah Harari",
    category: {
      en: "Human Behavior",
      fr: "Comportement humain",
      ar: "السلوك البشري"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    dates: {
      en: "January 1, 2024 → January 31, 2024",
      fr: "1 janvier 2024 → 31 janvier 2024",
      ar: "1 يناير 2024 ← 31 يناير 2024"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-slate-900 text-slate-100",
    insights: {
      en: ["Impact of AI and biotech on the future of humanity", "Navigating focus and truth in the age of information noise"],
      fr: ["Impact de l'IA et de la biotechnologie sur le futur de l'humanité", "Gestion de l'information à l'ère de la désinformation"],
      ar: ["تأثير الذكاء الاصطناعي والتكنولوجيا الحيوية على مستقبل البشرية", "إدارة الانتباه والحقيقة في عصر التضليل الإعلامي"]
    }
  },
  {
    slug: "apologie-de-socrate",
    title: {
      en: "Apology of Socrates",
      fr: "L'apologie de Socrate",
      ar: "دفاع سقراط"
    },
    author: "Platon",
    category: {
      en: "Philosophy",
      fr: "Philosophie",
      ar: "الفلسفة"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    dates: {
      en: "October 20, 2023 → November 6, 2023",
      fr: "20 octobre 2023 → 6 novembre 2023",
      ar: "20 أكتوبر 2023 ← 6 نوفمبر 2023"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-stone-800 text-stone-100",
    insights: {
      en: ["Uncompromising pursuit of truth and intellectual integrity", "The foundational principle: wisdom begins in knowing what one does not know"],
      fr: ["Recherche sans concession de la vérité et intégrité morale", "La prise de conscience de son propre savoir et de son ignorance"],
      ar: ["السعي غير المشروط وراء الحقيقة والنزاهة الفكرية", "الوعي بحدود المعرفة الذاتية وضرورة فحص الحياة"]
    }
  },
  {
    slug: "ainsi-parlait-zarathoustra",
    title: {
      en: "Thus Spoke Zarathustra",
      fr: "Ainsi parlait Zarathoustra",
      ar: "هكذا تكلم زارادشت"
    },
    author: "Friedrich Nietzsche",
    category: {
      en: "Philosophy",
      fr: "Philosophie",
      ar: "الفلسفة"
    },
    dimension: {
      en: "Spiritual",
      fr: "Spirituelle",
      ar: "روحانية"
    },
    dates: {
      en: "November 30, 2023",
      fr: "30 novembre 2023",
      ar: "30 نوفمبر 2023"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-zinc-900 text-zinc-100",
    insights: {
      en: ["Self-overcoming and creating one's own authentic values", "Embracing individual responsibility and spiritual depth"],
      fr: ["Dépassement de soi et création de ses propres valeurs", "Affirmation de la volonté et recherche d'accomplissement"],
      ar: ["التسامي الذاتي وصياغة القيم الحقيقية الخاصة", "إرادة القوة والسعي والارتقاء الشخصي"]
    }
  },
  {
    slug: "influence-et-manipulation",
    title: {
      en: "Influence: The Psychology of Persuasion",
      fr: "Influence et manipulation",
      ar: "التأثير: علم نفس الإقناع"
    },
    author: "Robert Cialdini",
    category: {
      en: "Psychology",
      fr: "Psychologie",
      ar: "علم النفس"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    dates: {
      en: "February 4, 2024",
      fr: "4 février 2024",
      ar: "4 فبراير 2024"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-indigo-950 text-indigo-100",
    insights: {
      en: ["The 6 core principles of human persuasion and compliance", "Recognizing and navigating cognitive levers in communication"],
      fr: ["Les 6 principes fondamentaux de la persuasion humaine", "Détection et protection contre les leviers d'influence"],
      ar: ["المبادئ الستة الأساسية للإقناع البشري", "فهم آليات التأثير والوقاية من التلاعب السلوكي"]
    }
  },
  {
    slug: "manuel-depictete",
    title: {
      en: "The Enchiridion (Handbook)",
      fr: "Manuel d'Épictète",
      ar: "مختصر إبكتيتوس (الدليل)"
    },
    author: "Épictète",
    category: {
      en: "Philosophy",
      fr: "Philosophie",
      ar: "الفلسفة"
    },
    dimension: {
      en: "Intellectual & Spiritual",
      fr: "Intellectuelle, Spirituelle",
      ar: "فكرية، روحانية"
    },
    dates: {
      en: "July 14, 2024",
      fr: "14 juillet 2024",
      ar: "14 يوليو 2024"
    },
    status: { en: 'In progress', fr: 'En cours', ar: 'قيد القراءة' },
    coverBg: "bg-neutral-800 text-neutral-100",
    insights: {
      en: ["The dichotomy of control: focusing strictly on what is within our power", "Cultivating mental clarity and emotional resilience"],
      fr: ["Dichotomie du contrôle : distinguer ce qui dépend de nous de ce qui n'en dépend pas", "Sérénité et discipline de l'esprit"],
      ar: ["ثنائية التحكم: التمييز بين ما يخضع لإرادتنا وما لا يخضع لها", "تطوير الصلابة الذهنية والسلام الداخلي"]
    }
  },
  {
    slug: "comment-se-faire-des-amis",
    title: {
      en: "How to Win Friends and Influence People",
      fr: "Comment se faire des amis",
      ar: "كيف تكسب الأصدقاء وتؤثر في الناس"
    },
    author: "Dale Carnegie",
    category: {
      en: "Communication",
      fr: "Communication",
      ar: "التواصل"
    },
    dimension: {
      en: "Emotional",
      fr: "Émotionnelle",
      ar: "عاطفية"
    },
    dates: {
      en: "February 12, 2025",
      fr: "12 février 2025",
      ar: "12 فبراير 2025"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-blue-950 text-blue-100",
    insights: {
      en: ["Active listening and genuine interest in people", "The fundamentals of constructive, empathetic communication"],
      fr: ["Écoute active et intérêt sincère envers autrui", "Art des relations humaines et bienveillance"],
      ar: ["الاستماع الفعال والاهتمام الصادق بالآخرين", "فن العلاقات الإنسانية والتواصل الإيجابي"]
    }
  },
  {
    slug: "les-7-habitudes",
    title: {
      en: "The 7 Habits of Highly Effective People",
      fr: "Les 7 habitudes de ceux qui réalisent tout ce qu'il entreprennent",
      ar: "العادات السبع للناس الأكثر فعالية"
    },
    author: "Stephen R. Covey",
    category: {
      en: "Personal Development",
      fr: "Développement personnel",
      ar: "التطوير الذاتي"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    dates: {
      en: "July 20, 2024",
      fr: "20 juillet 2024",
      ar: "20 يوليو 2024"
    },
    status: { en: 'In progress', fr: 'En cours', ar: 'قيد القراءة' },
    coverBg: "bg-emerald-950 text-emerald-100",
    insights: {
      en: ["Proactivity, starting with the end in mind, and prioritizing vital tasks", "Synergy and continuous self-renewal"],
      fr: ["Proactivité, vision à long terme et gestion des priorités", "Synergie et amélioration continue (aiguiser la scie)"],
      ar: ["المبادرة، البدء والغاية في الذهن، وترتيب الأولويات", "العمل الجماعي والتجديد المستمر لمهارات الذات"]
    }
  },
  {
    slug: "l-art-de-la-victoire",
    title: {
      en: "Shoe Dog: A Memoir by the Creator of Nike",
      fr: "L'art de la victoire",
      ar: "فن الناجحين (Shoe Dog)"
    },
    author: "Phil Knight",
    category: {
      en: "Personal Development",
      fr: "Développement personnel",
      ar: "التطوير الذاتي"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    dates: {
      en: "January 25, 2023 → February 9, 2023",
      fr: "25 janvier 2023 → 9 février 2023",
      ar: "25 يناير 2023 ← 9 فبراير 2023"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-orange-950 text-orange-100",
    insights: {
      en: ["Resilience in the face of uncertainty and entrepreneurial grit", "Building a global brand through perseverance and team trust"],
      fr: ["Résilience face à l'incertitude et passion dans l'entrepreneuriat", "La construction d'une vision malgré les obstacles majeurs"],
      ar: ["الصمود في مواجهة عدم اليقين وشغف ريادة الأعمال", "بناء الرؤى وتجاوز العقبات الكبرى بالتصميم"]
    }
  },
  {
    slug: "12-regles-pour-une-vie",
    title: {
      en: "12 Rules for Life: An Antidote to Chaos",
      fr: "12 règles pour une vie (un antidote au chaos)",
      ar: "12 قاعدة للحياة: ترياق للفوضى"
    },
    author: "Jordan B. Peterson",
    category: {
      en: "Personal Development",
      fr: "Développement personnel",
      ar: "التطوير الذاتي"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    dates: {
      en: "February 12, 2023 → March 22, 2023",
      fr: "12 février 2023 → 22 mars 2023",
      ar: "12 فبراير 2023 ← 22 مارس 2023"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-red-950 text-red-100",
    insights: {
      en: ["Pursuing meaning through personal responsibility over immediate gratification", "Balancing order and chaos in daily life"],
      fr: ["Recherche de sens à travers la responsabilité personnelle", "Équilibre entre ordre et chaos dans l'existence"],
      ar: ["البحث عن المعنى من خلال تحمل المسؤولية الفردية", "موازنة النظام مع الفوضى في إدارة الحياة"]
    }
  },
  {
    slug: "elon-musk",
    title: {
      en: "Elon Musk",
      fr: "Elon Musk",
      ar: "إيلون ماسك"
    },
    author: "Ashlee Vance",
    category: {
      en: "Personal Development",
      fr: "Développement personnel",
      ar: "التطوير الذاتي"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-cyan-950 text-cyan-100",
    insights: {
      en: ["First-principles thinking and bold mission orientation", "High-intensity execution and engineering problem solving"],
      fr: ["Raisonnement par les premiers principes et vision audacieuse", "Exécution à haute intensité et résolution de problèmes complexes"],
      ar: ["التفكير من المبادئ الأولى والرؤية التكنولوجية الجريئة", "التنفيذ عالي الشدة وحل المشكلات الهندسية المعقدة"]
    }
  },
  {
    slug: "l-alchimiste",
    title: {
      en: "The Alchemist",
      fr: "L'alchimiste",
      ar: "الكيماوي (الساحر)"
    },
    author: "Paulo Coelho",
    category: {
      en: "Literature",
      fr: "Littérature",
      ar: "الأدب"
    },
    dimension: {
      en: "Spiritual",
      fr: "Spirituelle",
      ar: "روحانية"
    },
    dates: {
      en: "January 18, 2023",
      fr: "18 janvier 2023",
      ar: "18 يناير 2023"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-yellow-950 text-yellow-100",
    insights: {
      en: ["Listening to intuition and pursuing one's Personal Legend", "Recognizing the signs and lessons along the journey of life"],
      fr: ["Écoute de son intuition et poursuite de sa Légende Personnelle", "La valeur du voyage et des apprentissages du chemin"],
      ar: ["الإصغاء إلى الحدس ومتابعة الأسطورة الشخصية", "تقدير رحلة السعي والدروس المكتسبة من الطريق"]
    }
  },
  {
    slug: "priorite-aux-priorites",
    title: {
      en: "First Things First",
      fr: "Priorité aux priorités",
      ar: "إدارة الأولويات"
    },
    author: "Stephen R. Covey",
    category: {
      en: "Personal Development",
      fr: "Développement personnel",
      ar: "التطوير الذاتي"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    dates: {
      en: "April 18, 2023 → May 25, 2023",
      fr: "18 avril 2023 → 25 mai 2023",
      ar: "18 أبريل 2023 ← 25 مايو 2023"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-teal-950 text-teal-100",
    insights: {
      en: ["Focusing on Quadrant II tasks: important over urgent", "Aligning daily schedules with core principles and long-term vision"],
      fr: ["Mise en avant des tâches importantes non urgentes (Cadran II)", "Alignement du temps quotidien avec les valeurs fondamentales"],
      ar: ["التركيز على المهام الهامة غير المستعجلة", "مواءمة الوقت اليومي مع المبادئ والرؤية العميقة"]
    }
  },
  {
    slug: "qui-a-pique-mon-fromage",
    title: {
      en: "Who Moved My Cheese?",
      fr: "Qui a piqué mon fromage ?",
      ar: "من تحرك بقطعة الجبن الخاصة بي؟"
    },
    author: "Spencer Johnson",
    category: {
      en: "Personal Development",
      fr: "Développement personnel",
      ar: "التطوير الذاتي"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    dates: {
      en: "March 24, 2023 → March 26, 2023",
      fr: "24 mars 2023 → 26 mars 2023",
      ar: "24 مارس 2023 ← 26 مارس 2023"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-amber-900 text-amber-100",
    insights: {
      en: ["Embracing change quickly and letting go of fear", "Monitoring signs of change early to stay adaptable"],
      fr: ["Adaptabilité rapide face au changement et dépassement de la peur", "Anticipation des évolutions personnelles et professionnelles"],
      ar: ["سرعة التكيف مع التغيير والتغلب على الخوف من المجهول", "مراقبة المؤشرات المبكرة للتطور الشخصي والمهني"]
    }
  },
  {
    slug: "les-miserables",
    title: {
      en: "Les Misérables",
      fr: "Les misérables",
      ar: "البؤساء"
    },
    author: "Victor Hugo",
    category: {
      en: "Literature",
      fr: "Littérature",
      ar: "الأدب"
    },
    dimension: {
      en: "Emotional",
      fr: "Émotionnelle",
      ar: "عاطفية"
    },
    dates: {
      en: "August 7, 2022",
      fr: "7 août 2022",
      ar: "7 أغسطس 2022"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-blue-900 text-blue-100",
    insights: {
      en: ["Redemption, compassion, and the struggle for human dignity", "The transformative power of empathy and moral grace"],
      fr: ["Rédemption, compassion et justice sociale", "La force de l'empathie humaine face à l'adversité"],
      ar: ["الخلاص، الرحمة، والعدالة الاجتماعية في وجه المعاناة", "قوة التعاطف البشري والكرامة الأخلاقية"]
    }
  },
  {
    slug: "intelligence-relationnelle",
    title: {
      en: "Social Intelligence",
      fr: "Intelligence relationnelle",
      ar: "الذكاء الاجتماعي"
    },
    author: "Daniel Goleman",
    category: {
      en: "Psychology",
      fr: "Psychologie",
      ar: "علم النفس"
    },
    dimension: {
      en: "Emotional",
      fr: "Émotionnelle",
      ar: "عاطفية"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-purple-950 text-purple-100",
    insights: {
      en: ["Neuroscience of human connection and social awareness", "How interpersonal relationships shape brain function and performance"],
      fr: ["Neuroscience des interactions et empathie sociale", "Impact de nos connexions relationnelles sur notre bien-être"],
      ar: ["علم أعصاب التفاعلات البشرية والتعاطف الاجتماعي", "تأثير العلاقات الإنسانية على الصحة الذهنية والأداء"]
    }
  },
  {
    slug: "les-11-lois-de-la-reussite",
    title: {
      en: "11 Rules for Success",
      fr: "Les 11 lois de la réussite",
      ar: "قوانين النجاح الـ 11"
    },
    author: "Anthony Robbins",
    category: {
      en: "Personal Development",
      fr: "Développement personnel",
      ar: "التطوير الذاتي"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    dates: {
      en: "January 1, 2023 → January 15, 2023",
      fr: "1 janvier 2023 → 15 janvier 2023",
      ar: "1 يناير 2023 ← 15 يناير 2023"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-rose-950 text-rose-100",
    insights: {
      en: ["Mindset control and emotional state management", "Taking decisive, sustained action toward strategic goals"],
      fr: ["Maîtrise de l'état d'esprit et conditionnement mental positif", "Passage à l'action massif et clarté des objectifs"],
      ar: ["إدارة الحالة الذهنية والتفكير الإيجابي الفعال", "اتخاذ خطوات عملية حاسمة نحو الأهداف المفصلة"]
    }
  },
  {
    slug: "reflechissez-et-devenez-riche",
    title: {
      en: "Think and Grow Rich",
      fr: "Réfléchissez et devenez riche",
      ar: "فكر وازدد ثراءً"
    },
    author: "Napoleon Hill",
    category: {
      en: "Personal Development",
      fr: "Développement personnel",
      ar: "التطوير الذاتي"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    status: { en: 'In progress', fr: 'En cours', ar: 'قيد القراءة' },
    coverBg: "bg-yellow-900 text-yellow-100",
    insights: {
      en: ["Definite major purpose, persistence, and the Mastermind concept", "Translating focused thought into concrete achievement"],
      fr: ["Désir ardent, persévérance et puissance de l'esprit d'équipe", "Transformation de la vision en réalité tangible"],
      ar: ["الرغبة الإيجابية، المثابرة، وقوة العقل الجماعي", "تحويل الأفكار المركزة إلى إنجازات ملموسة"]
    }
  },
  {
    slug: "mars-et-venus-se-rencontrent",
    title: {
      en: "Mars and Venus on a Date",
      fr: "Mars et Vénus se rencontrent",
      ar: "الرجال من المريخ والنساء من الزهرة"
    },
    author: "John Gray",
    category: {
      en: "Psychology",
      fr: "Psychologie",
      ar: "علم النفس"
    },
    dimension: {
      en: "Emotional",
      fr: "Émotionnelle",
      ar: "عاطفية"
    },
    status: { en: 'In progress', fr: 'En cours', ar: 'قيد القراءة' },
    coverBg: "bg-fuchsia-950 text-fuchsia-100",
    insights: {
      en: ["Understanding complementary psychological communication styles", "Fostering mutual appreciation and emotional intelligence"],
      fr: ["Compréhension des différences psychologiques et communicationnelles", "Bienveillance et écoute dans les relations interpersonnelles"],
      ar: ["فهم الاختلافات النفسية وأساليب التواصل المكملة", "تعزيز التفاهم والذكاء العاطفي في العلاقات"]
    }
  },
  {
    slug: "dopamine-detox",
    title: {
      en: "Dopamine Detox",
      fr: "Dopamine Detox",
      ar: "تخلص من التشتت (Dopamine Detox)"
    },
    author: "Thibaut Meurisse",
    category: {
      en: "Personal Development",
      fr: "Développement personnel",
      ar: "التطوير الذاتي"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    dates: {
      en: "February 5, 2024",
      fr: "5 février 2024",
      ar: "5 فبراير 2024"
    },
    status: { en: 'Done', fr: 'Terminé', ar: 'مكتمل' },
    coverBg: "bg-sky-950 text-sky-100",
    insights: {
      en: ["Clearing digital overstimulation and regaining deep focus", "Structuring routines for high-value deep work"],
      fr: ["Réduction de la surstimulation numérique et restauration de la concentration", "Création d'environnements propices au travail profond"],
      ar: ["الحد من الإفراط في التنبيه الرقمي واستعادة التركيز العميق", "تنظيم البيئة لزيادة الإنتاجية الإنجازية"]
    }
  },
  {
    slug: "l-art-de-la-guerre",
    title: {
      en: "The Art of War",
      fr: "L'art de la guerre",
      ar: "فن الحرب"
    },
    author: "Sun Tzu",
    category: {
      en: "Strategy & Philosophy",
      fr: "Philosophie & Stratégie",
      ar: "الاستراتيجية والفلسفة"
    },
    dimension: {
      en: "Intellectual",
      fr: "Intellectuelle",
      ar: "فكرية"
    },
    status: { en: 'Not started', fr: 'Non commencé', ar: 'لم يبدأ' },
    coverBg: "bg-stone-900 text-stone-100",
    insights: {
      en: ["Strategic foresight, self-knowledge, and resource efficiency", "Achieving objectives through preparation rather than raw friction"],
      fr: ["Stratégie, économie des forces et connaissance de soi et de l'adversaire", "La victoire optimale sans conflit inutile"],
      ar: ["التخطيط الاستراتيجي، معرفة الذات والخصم، وكفاءة الموارد", "تحقيق الأهداف بالحكمة والتحضير بدلاً من المواجهة العبثية"]
    }
  }
];

export const getBooks = (lang: Language = 'en'): Book[] => {
  return rawBooks.map(b => ({
    slug: b.slug,
    title: b.title[lang] || b.title.en,
    author: b.author,
    category: b.category[lang] || b.category.en,
    dimension: b.dimension[lang] || b.dimension.en,
    dates: b.dates ? (b.dates[lang] || b.dates.en) : undefined,
    status: b.status[lang] || b.status.en,
    coverBg: b.coverBg,
    insights: b.insights[lang] || b.insights.en
  }));
};

export const getBookBySlug = (slug: string, lang: Language = 'en'): Book | undefined => {
  const b = rawBooks.find(item => item.slug === slug);
  if (!b) return undefined;
  return {
    slug: b.slug,
    title: b.title[lang] || b.title.en,
    author: b.author,
    category: b.category[lang] || b.category.en,
    dimension: b.dimension[lang] || b.dimension.en,
    dates: b.dates ? (b.dates[lang] || b.dates.en) : undefined,
    status: b.status[lang] || b.status.en,
    coverBg: b.coverBg,
    insights: b.insights[lang] || b.insights.en
  };
};

export const books = getBooks('en');
