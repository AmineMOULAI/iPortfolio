import { Language } from "./translations";

export interface QuoteItem {
  quote: string;
  author: string;
  category?: 'quran' | 'hadith' | 'scholar' | 'tech' | 'philosophy';
}

export const quotesDatabase: Record<Language, QuoteItem[]> = {
  ar: [
    {
      quote: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
      author: "— سورة العلق، الآية 1",
      category: "quran"
    },
    {
      quote: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
      author: "— سورة طه، الآية 114",
      category: "quran"
    },
    {
      quote: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
      author: "— الحديث الشريف (رواية مسلم)",
      category: "hadith"
    },
    {
      quote: "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ",
      author: "— الحديث الشريف",
      category: "hadith"
    },
    {
      quote: "الْعِلْمُ حَارِسُكَ وَأَنْتَ حَارِسُ الْمَالِ، وَالْعِلْمُ يَزْكُو عَلَى الإِنْفَاقِ وَالْمَالُ تَنْقُصُهُ الإِنْفَاقُ",
      author: "— أمير المؤمنين علي بن أبي طالب رضي الله عنه",
      category: "scholar"
    },
    {
      quote: "حَاسِبُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُحَاسَبُوا، وَزِنُوهَا قَبْلَ أَنْ تُوزَنُوا",
      author: "— أمير المؤمنين عمر بن الخطاب رضي الله عنه",
      category: "scholar"
    },
    {
      quote: "عُنْوَانُ سَعَادَةِ الْعَبْدِ ثَلاَثَةٌ: إِذَا أُنْعِمَ عَلَيْهِ شَكَرَ، وَإِذَا ابْتُلِيَ صَبَرَ، وَإِذَا أَذْنَبَ اسْتَغْفَرَ",
      author: "— الإمام ابن قيم الجوزية رحمه الله",
      category: "scholar"
    },
    {
      quote: "يَا ابْنَ آدَمَ، إِنَّمَا أَنْتَ أَيَّامٌ، كُلَّمَا ذَهَبَ يَوْمٌ ذَهَبَ بَعْضُكَ",
      author: "— الحسن البصري رحمه الله",
      category: "scholar"
    },
    {
      quote: "مَنْ أَرَادَ الدُّنْيَا فَعَلَيْهِ بِالْعِلْمِ، وَمَنْ أَرَادَ الآخِرَةَ فَعَلَيْهِ بِالْعِلْمِ، وَمَنْ أَرَادَهُمَا مَعًا فَعَلَيْهِ بِالْعِلْمِ",
      author: "— الإمام الشافعي رحمه الله",
      category: "scholar"
    },
    {
      quote: "شعاري دائماً البحث عن الحقيقة، لا نصرة ما يُعتقد سبقه.",
      author: "— الحسن بن الهيثم (رائد علم البصريات والمنهج العلمي)",
      category: "tech"
    },
    {
      quote: "قداسة القرآن من عظمة قائله عز وجل، ولكن ما يغفل عنه الكثيرون هو فاعليته وتطبيقه في إحياء النفوس وبناء النهضة.",
      author: "— أمين مولاي (من مقال: مركزية القرآن)",
      category: "scholar"
    },
    {
      quote: "تدبر القرآن ليس حكراً على نخبة محددة، بل هو خطاب إلهي ميسر موجه لكل عقل يتطلع للهداية والتفكر.",
      author: "— أمين مولاي (من مقال: تدبر القرآن)",
      category: "scholar"
    },
    {
      quote: "التركيز في العصر الرقمي ليس مجرد مهارة تنظيمية، بل هو جهاد نفسي واستعادة لسيادة العقل والروح.",
      author: "— أمين مولاي (من مقال: التركيز في العصر الرقمي)",
      category: "tech"
    },
    {
      quote: "العمل الوحيد الذي يُرضيك هو أن تفعل ما تعتقد أنه عمل عظيم، والسبيل الوحيد لذلك هو أن تحب ما تفعل.",
      author: "— ستيف جوبز (رائد التكنولوجيا والابتكار)",
      category: "tech"
    },
    {
      quote: "العلم بلا دين أعرج، والدين بلا علم أعمى.",
      author: "— ألبرت أينشتاين",
      category: "philosophy"
    },
    {
      quote: "الْقَلْبُ كَالإِنَاءِ، مَا دَامَ مَلِيئًا بِالْمَاءِ لاَ يَدْخُلُهُ الْهَوَاءُ، فَكَذَلِكَ الْقَلْبُ المَلِيءُ بِعَظَمَةِ اللَّهِ لاَ يَدْخُلُهُ حُبُّ الدُّنْيَا",
      author: "— الإمام الغزالي رحمه الله",
      category: "scholar"
    },
    {
      quote: "البحث عن المعرفة فريضة أخلاقية على كل من يسعى لبناء واقع أفضل.",
      author: "— الخوارزمي (مؤسس علم الجبر)",
      category: "tech"
    }
  ],
  fr: [
    {
      quote: "« Quiconque emprunte un chemin à la recherche de la science, Allah lui facilite un chemin vers le Paradis. »",
      author: "— Prophète Muhammad (ﷺ)",
      category: "hadith"
    },
    {
      quote: "« Certes, Allah aime que lorsque l'un de vous accomplit une œuvre, il la parfaire avec excellence et précision. »",
      author: "— Prophète Muhammad (ﷺ)",
      category: "hadith"
    },
    {
      quote: "« La seule façon de faire du grand travail est d'aimer ce que vous faites avec passion et dévouement. »",
      author: "— Steve Jobs (Pionnier de la Technologie)",
      category: "tech"
    },
    {
      quote: "« Le devoir de celui qui cherche la vérité est de se faire l'ennemi de tout ce qu'il lit et d'attaquer les textes sous tous les angles. »",
      author: "— Alhazen / Ibn al-Haytham (Pionnier de la Méthode Scientifique)",
      category: "tech"
    },
    {
      quote: "« Demandez-vous des comptes à vous-mêmes avant d'être jugés, et pesez vos œuvres avant qu'elles ne soient pesées. »",
      author: "— Omar ibn al-Khattab (RA)",
      category: "scholar"
    },
    {
      quote: "« Le savoir est ton gardien, tandis que tu es le gardien des biens. Le savoir grandit avec le partage. »",
      author: "— Ali ibn Abi Talib (RA)",
      category: "scholar"
    },
    {
      quote: "« Ô fils d'Adam, tu n'es qu'une somme de jours ; chaque jour qui s'en va emporte une partie de toi. »",
      author: "— Al-Hasan al-Basri",
      category: "scholar"
    },
    {
      quote: "« La science sans religion est boiteuse, la religion sans science est aveugle. »",
      author: "— Albert Einstein",
      category: "philosophy"
    },
    {
      quote: "« Le cœur dans son cheminement vers le Créateur est semblable à un oiseau : l'amour en est la tête, la crainte et l'espoir en sont les deux ailes. »",
      author: "— Ibn al-Qayyim",
      category: "scholar"
    },
    {
      quote: "« La technologie n'est rien. Ce qui est important, c'est d'avoir foi dans les gens, qu'ils soient fondamentalement bons et intelligents. »",
      author: "— Steve Jobs",
      category: "tech"
    },
    {
      quote: "« Celui qui désire ce monde doit s'armer de savoir, celui qui désire l'au-delà doit s'armer de savoir, et celui qui désire les deux doit s'armer de savoir. »",
      author: "— Imam Al-Shafi'i",
      category: "scholar"
    },
    {
      quote: "« La véritable richesse d'un être humain ne réside pas dans l'abondance des biens, mais dans la noblesse de l'âme. »",
      author: "— Imam Al-Ghazali",
      category: "scholar"
    }
  ],
  en: [
    {
      quote: '"Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise."',
      author: "— Prophet Muhammad (ﷺ)",
      category: "hadith"
    },
    {
      quote: '"Verily, God loves that when any one of you performs a task, he completes it with excellence and mastery."',
      author: "— Prophet Muhammad (ﷺ)",
      category: "hadith"
    },
    {
      quote: '"The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle."',
      author: "— Steve Jobs (Tech Visionary)",
      category: "tech"
    },
    {
      quote: '"The duty of the man who investigates the writings of scientists is to make himself an enemy of all that he reads and attack it from every side."',
      author: "— Ibn al-Haytham / Alhazen (Father of Modern Optics & Scientific Method)",
      category: "tech"
    },
    {
      quote: '"Take account of yourselves before you are called to account, and weigh your deeds before they are weighed for you."',
      author: "— Umar ibn al-Khattab (RA)",
      category: "scholar"
    },
    {
      quote: '"Knowledge guards you, while you guard wealth. Knowledge increases by sharing, while wealth decreases by spending."',
      author: "— Ali ibn Abi Talib (RA)",
      category: "scholar"
    },
    {
      quote: '"O Son of Adam, you are but a sum of days; whenever a day passes, a part of you passes away."',
      author: "— Al-Hasan al-Basri",
      category: "scholar"
    },
    {
      quote: '"Science without religion is lame, religion without science is blind."',
      author: "— Albert Einstein",
      category: "philosophy"
    },
    {
      quote: '"The heart on its journey toward God is like a bird: love is its head, and fear and hope are its two wings."',
      author: "— Ibn al-Qayyim",
      category: "scholar"
    },
    {
      quote: '"Technology is nothing. What\'s important is that you have a faith in people, that they\'re basically good and smart."',
      author: "— Steve Jobs",
      category: "tech"
    },
    {
      quote: '"Whoever desires this world must seek knowledge, whoever desires the Hereafter must seek knowledge, and whoever desires both must seek knowledge."',
      author: "— Imam Al-Shafi'i",
      category: "scholar"
    },
    {
      quote: '"True richness is not the abundance of material possessions, but the contentment and nobility of the soul."',
      author: "— Imam Al-Ghazali",
      category: "scholar"
    }
  ]
};

export const getQuotesForLanguage = (lang: Language): QuoteItem[] => {
  return quotesDatabase[lang] || quotesDatabase.en;
};
