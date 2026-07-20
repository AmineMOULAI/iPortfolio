export type Language = 'en' | 'fr' | 'ar';

export interface TranslationDictionary {
  authorName: string;
  datelineLocation: string;
  subhead: string;
  nav: {
    frontPage: string;
    projects: string;
    essays: string;
    reading: string;
    letters: string;
  };
  sidebar: {
    contents: string;
    quote: string;
    quoteAuthor: string;
    self: string;
    projects: string;
    essays: string;
    reading: string;
  };
  footer: {
    rights: string;
    lastUpdated: string;
    endOfEdition: string;
    endOfPage: string;
    page: string;
    vol: string;
    no: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCaption: string;
    heroBio1: string;
    heroBio2: string;
    continuedOnEssays: string;
    pressAndProjects: string;
    turnToProjects: string;
    opinionEssays: string;
    readAllEssays: string;
    literatureReading: string;
    fullReadingList: string;
    writeLetter: string;
  };
  projectsPage: {
    title: string;
    subtitle: string;
    university: string;
    aiResearch: string;
    gameDev: string;
    academic: string;
    backToFront: string;
    toEssays: string;
    role: string;
    year: string;
    tech: string;
    externalLinks: string;
    backToProjects: string;
    allProjects: string;
    figCaption: string;
  };
  essaysPage: {
    title: string;
    subtitle: string;
    backToProjects: string;
    toReading: string;
    backToEssays: string;
    allEssays: string;
  };
  readingPage: {
    title: string;
    subtitle: string;
    toLetters: string;
  };
  contactPage: {
    title: string;
    dearAmine: string;
    cameAcross: string;
    myNameIs: string;
    andWritingToSay: string;
    placeholderMessage: string;
    placeholderName: string;
    withRegards: string;
    yourName: string;
    sendLetter: string;
    toastSuccessTitle: string;
    toastSuccessDesc: string;
    toastFillFields: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    authorName: "Amine Moulai",
    datelineLocation: "Perpignan, France",
    subhead: "A Personal Journal of Record — Established 2025",
    nav: {
      frontPage: "Front Page",
      projects: "Projects",
      essays: "Essays",
      reading: "Reading",
      letters: "Letters"
    },
    sidebar: {
      contents: "Contents",
      quote: '"The unexamined life is not worth living."',
      quoteAuthor: "— Socrates",
      self: "Self",
      projects: "Projects",
      essays: "Essays",
      reading: "Reading"
    },
    footer: {
      rights: "All rights reserved.",
      lastUpdated: "Last updated",
      endOfEdition: "End of Edition",
      endOfPage: "End of Page",
      page: "Page",
      vol: "Vol.",
      no: "No."
    },
    home: {
      heroTitle: "On Curiosity, Code, and the Human Mind",
      heroSubtitle: "An Introduction to the Author",
      heroCaption: "Amine Moulai at Université de Perpignan, 2025. — Personal Archive",
      heroBio1: "Amine Moulai is a 3rd-year Computer Science student at Université de Perpignan, specializing in AI and automation. Passionate about machine learning, algorithms, and systems, he builds practical, intelligent software that simplifies everyday workflows.",
      heroBio2: "His work spans multi-agent simulations, web intelligence tools, and game development, with a deep interest in exploring the intersection of AI, cognitive psychology, and human behavior.",
      continuedOnEssays: "— Continued on the Essays page",
      pressAndProjects: "Press & Projects",
      turnToProjects: "Turn to Projects →",
      opinionEssays: "Opinion & Essays",
      readAllEssays: "Read all essays →",
      literatureReading: "Literature & Reading",
      fullReadingList: "Full reading list →",
      writeLetter: "Write a Letter to the Editor →"
    },
    projectsPage: {
      title: "Projects & Works",
      subtitle: "A portfolio of academic and personal endeavors",
      university: "University",
      aiResearch: "AI & Research",
      gameDev: "Game Dev",
      academic: "Academic",
      backToFront: "← Front Page",
      toEssays: "Essays →",
      role: "Role",
      year: "Year",
      tech: "Tech",
      externalLinks: "External Links",
      backToProjects: "← Back to Projects",
      allProjects: "← All Projects",
      figCaption: "Fig. 1 — Project in action"
    },
    essaysPage: {
      title: "Opinion & Essays",
      subtitle: "Reflections on AI, psychology, and the intersection of mind and machine",
      backToProjects: "← Projects",
      toReading: "Reading →",
      backToEssays: "← Back to Essays",
      allEssays: "← All Essays"
    },
    readingPage: {
      title: "Reading List",
      subtitle: "Books and papers that shape my thinking",
      toLetters: "Letters →"
    },
    contactPage: {
      title: "Letters to the Editor",
      dearAmine: "Dear Amine,",
      cameAcross: "I came across your work and wanted to reach out.",
      myNameIs: "My name is",
      andWritingToSay: "and I am writing to say:",
      placeholderMessage: "Write your message here...",
      placeholderName: "Your Name",
      withRegards: "With regards,",
      yourName: "Your Name",
      sendLetter: "Send\nLetter",
      toastSuccessTitle: "Letter Sent",
      toastSuccessDesc: "Thank you for your message.",
      toastFillFields: "Please fill in all fields"
    }
  },
  fr: {
    authorName: "Amine Moulai",
    datelineLocation: "Perpignan, France",
    subhead: "Journal Personnel de Référence — Fondé en 2025",
    nav: {
      frontPage: "Une",
      projects: "Projets",
      essays: "Essais",
      reading: "Lectures",
      letters: "Courrier"
    },
    sidebar: {
      contents: "Sommaire",
      quote: '"Une vie sans examen ne vaut pas la peine d\'être vécue."',
      quoteAuthor: "— Socrate",
      self: "Présentation",
      projects: "Projets",
      essays: "Essais",
      reading: "Lectures"
    },
    footer: {
      rights: "Tous droits réservés.",
      lastUpdated: "Dernière mise à jour",
      endOfEdition: "Fin de l'Édition",
      endOfPage: "Fin de Page",
      page: "Page",
      vol: "Vol.",
      no: "N°"
    },
    home: {
      heroTitle: "Sur la Curiosité, le Code et l'Esprit Humain",
      heroSubtitle: "Présentation de l'Auteur",
      heroCaption: "Amine Moulai à l'Université de Perpignan, 2025. — Archives Personnelles",
      heroBio1: "Amine Moulai est étudiant en L3 informatique à l'Université de Perpignan, spécialisé en IA et automatisation. Passionné par l'apprentissage automatique, les algorithmes et les systèmes, il aime concevoir des projets concrets qui simplifient le quotidien des utilisateurs.",
      heroBio2: "Ses intérêts s'étendent également au développement de jeux vidéo, à la psychologie et aux liens entre l'IA, la cognition et le comportement humain, avec un intérêt particulier pour une réflexion critique sur l'interaction entre systèmes intelligents et êtres humains.",
      continuedOnEssays: "— Suite sur la page Essais",
      pressAndProjects: "Presse & Projets",
      turnToProjects: "Consulter les Projets →",
      opinionEssays: "Opinions & Essais",
      readAllEssays: "Lire tous les essais →",
      literatureReading: "Littérature & Lectures",
      fullReadingList: "Liste de lecture complète →",
      writeLetter: "Écrire une Lettre au Rédacteur →"
    },
    projectsPage: {
      title: "Projets & Travaux",
      subtitle: "Un portfolio de projets académiques et personnels",
      university: "Universitaire",
      aiResearch: "IA & Recherche",
      gameDev: "Développement de Jeux",
      academic: "Académique",
      backToFront: "← La Une",
      toEssays: "Essais →",
      role: "Rôle",
      year: "Année",
      tech: "Technologies",
      externalLinks: "Liens Externes",
      backToProjects: "← Retour aux Projets",
      allProjects: "← Tous les Projets",
      figCaption: "Fig. 1 — Projet en action"
    },
    essaysPage: {
      title: "Opinions & Essais",
      subtitle: "Réflexions sur l'IA, la psychologie et l'intersection entre esprit et machine",
      backToProjects: "← Projets",
      toReading: "Lectures →",
      backToEssays: "← Retour aux Essais",
      allEssays: "← Tous les Essais"
    },
    readingPage: {
      title: "Liste de Lecture",
      subtitle: "Livres et travaux qui façonnent ma pensée",
      toLetters: "Courrier →"
    },
    contactPage: {
      title: "Courrier des Lecteurs",
      dearAmine: "Cher Amine,",
      cameAcross: "J'ai découvert votre travail et souhaitais vous contacter.",
      myNameIs: "Mon nom est",
      andWritingToSay: "et je vous écris pour vous dire :",
      placeholderMessage: "Écrivez votre message ici...",
      placeholderName: "Votre Nom",
      withRegards: "Cordialement,",
      yourName: "Votre Nom",
      sendLetter: "Envoyer\nLa Lettre",
      toastSuccessTitle: "Lettre Envoyée",
      toastSuccessDesc: "Merci pour votre message.",
      toastFillFields: "Veuillez remplir tous les champs"
    }
  },
  ar: {
    authorName: "أمين مولاي",
    datelineLocation: "بيربينيا، فرنسا",
    subhead: "صحيفة شخصية توثيقية — تأسست عام 2025",
    nav: {
      frontPage: "الصفحة الأولى",
      projects: "المشاريع",
      essays: "المقالات",
      reading: "القراءات",
      letters: "الرسائل"
    },
    sidebar: {
      contents: "المحتويات",
      quote: '"الحياة التي لا تُفحص لا تستحق العيش."',
      quoteAuthor: "— سقراط",
      self: "نبذة",
      projects: "المشاريع",
      essays: "المقالات",
      reading: "القراءات"
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      lastUpdated: "آخر تحديث",
      endOfEdition: "نهاية الطبعة",
      endOfPage: "نهاية الصفحة",
      page: "صفحة",
      vol: "المجلد",
      no: "العدد"
    },
    home: {
      heroTitle: "عن الفضول، البرمجة، والعقل البشري",
      heroSubtitle: "مقدمة عن الكاتب",
      heroCaption: "أمين مولاي في جامعة بيربينيا، 2025. — الأرشيف الشخصي",
      heroBio1: "أمين مولاي طالب في السنة الثالثة إعلام آلي بجامعة بيربينيا، متخصص في الذكاء الاصطناعي والأتمتة. شغوف بالتعلم الآلي، الخوارزميات، والأنظمة، ويحب بناء مشاريع عملية تسهل المهام اليومية للمستخدمين.",
      heroBio2: "تمتد اهتماماته أيضاً إلى تطوير الألعاب، علم النفس، والروابط بين الذكاء الاصطناعي والمعرفة والسلوك البشري، مع التركيز على التفكير النقدي في كيفية تفاعل الأنظمة الذكية مع البشر.",
      continuedOnEssays: "— تتمة في صفحة المقالات",
      pressAndProjects: "الصحافة والمشاريع",
      turnToProjects: "انتقل إلى المشاريع ←",
      opinionEssays: "الآراء والمقالات",
      readAllEssays: "قراءة جميع المقالات ←",
      literatureReading: "الأدب والقراءات",
      fullReadingList: "قائمة القراءة الكاملة ←",
      writeLetter: "اكتب رسالة إلى المحرر ←"
    },
    projectsPage: {
      title: "المشاريع والأعمال",
      subtitle: "معرض للمشاريع الأكاديمية والشخصية",
      university: "جامعي",
      aiResearch: "الذكاء الاصطناعي والبحث",
      gameDev: "تطوير الألعاب",
      academic: "أكاديمي",
      backToFront: "← الصفحة الأولى",
      toEssays: "المقالات ←",
      role: "الدور",
      year: "السنة",
      tech: "التقنيات",
      externalLinks: "روابط خارجية",
      backToProjects: "← العودة للمشاريع",
      allProjects: "← كل المشاريع",
      figCaption: "شكل 1 — المشروع أثناء العمل"
    },
    essaysPage: {
      title: "الآراء والمقالات",
      subtitle: "تأملات في الذكاء الاصطناعي، علم النفس، والتقاء العقل بالآلة",
      backToProjects: "← المشاريع",
      toReading: "القراءات ←",
      backToEssays: "← العودة للمقالات",
      allEssays: "← كل المقالات"
    },
    readingPage: {
      title: "قائمة القراءة",
      subtitle: "الكتب والأوراق البحثية التي تشكل تفكيري",
      toLetters: "الرسائل ←"
    },
    contactPage: {
      title: "رسائل إلى المحرر",
      dearAmine: "عزيزي أمين،",
      cameAcross: "لقد اطلعت على أعمالك وأردت التواصل معك.",
      myNameIs: "اسمي هو",
      andWritingToSay: "وأكتب إليك لأقول:",
      placeholderMessage: "اكتب رسالتك هنا...",
      placeholderName: "اسمك",
      withRegards: "مع أطيب التحيات،",
      yourName: "اسمك",
      sendLetter: "إرسال\nالرسالة",
      toastSuccessTitle: "تم إرسال الرسالة",
      toastSuccessDesc: "شكراً لك على رسالتك.",
      toastFillFields: "يرجى ملء جميع الحقول"
    }
  }
};
