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

export interface TopicData {
  topic_id: string;
  topic_title: LocalizedText;
  articles: EssayData[];
}

export interface Topic {
  topic_id: string;
  topic_title: string;
  articles: Essay[];
}

export interface EssayData {
  slug: string;
  topicId?: string;
  topicTitle?: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  date: LocalizedText;
  content: LocalizedArray;
  notes?: LocalizedArray;
  references?: LocalizedArray;
}

export interface Essay {
  slug: string;
  topicId?: string;
  topicTitle?: string;
  title: string;
  subtitle: string;
  date: string;
  content: string[];
  notes?: string[];
  references?: string[];
}

export const rawEssays: EssayData[] = [
  {
    "slug": "the-convergence-of-cognitive-science-and-neural-architectures",
    "topicId": "ai-cognition",
    "topicTitle": {
        "en": "Artificial Intelligence & Cognition",
        "fr": "Artificial Intelligence & Cognition",
        "ar": "Artificial Intelligence & Cognition"
    },
    "title": {
        "en": "The Convergence of Cognitive Science and Neural Architectures",
        "fr": "The Convergence of Cognitive Science and Neural Architectures",
        "ar": "The Convergence of Cognitive Science and Neural Architectures"
    },
    "subtitle": {
        "en": "Exploring how biological neural dynamics inform next-generation reasoning systems.",
        "fr": "Exploring how biological neural dynamics inform next-generation reasoning systems.",
        "ar": "Exploring how biological neural dynamics inform next-generation reasoning systems."
    },
    "date": {
        "en": "July 2026",
        "fr": "July 2026",
        "ar": "July 2026"
    },
    "content": {
        "en": [
            "As artificial intelligence advances from pattern recognition toward deliberate reasoning, the principles governing human cognition are becoming central to computational design.",
            "By modeling working memory, attention allocation, and symbolic abstraction alongside deep representation learning, we open new avenues for resilient and interpretable machine intelligence.",
            "This essay examines how cognitive architectures bridge the gap between connectionist neural networks and structured reasoning."
        ],
        "fr": [
            "As artificial intelligence advances from pattern recognition toward deliberate reasoning, the principles governing human cognition are becoming central to computational design.",
            "By modeling working memory, attention allocation, and symbolic abstraction alongside deep representation learning, we open new avenues for resilient and interpretable machine intelligence.",
            "This essay examines how cognitive architectures bridge the gap between connectionist neural networks and structured reasoning."
        ],
        "ar": [
            "As artificial intelligence advances from pattern recognition toward deliberate reasoning, the principles governing human cognition are becoming central to computational design.",
            "By modeling working memory, attention allocation, and symbolic abstraction alongside deep representation learning, we open new avenues for resilient and interpretable machine intelligence.",
            "This essay examines how cognitive architectures bridge the gap between connectionist neural networks and structured reasoning."
        ]
    }
},
  {
    slug: "le-coran-livre-de-connaissance-ou-morale",
    topicId: "centralite-du-coran",
    topicTitle: {
      en: "The Centrality of the Quran",
      fr: "La Centralité du Coran",
      ar: "مركزية القرآن"
    },
    title: {
      en: "The Quran: A Book of Knowledge or a Book of Morals?",
      fr: "Le Coran : Livre de Connaissance ou Livre de Morale ?",
      ar: "هل القرآن كتابٌ للمعرفة أم كتابٌ أخلاقي؟"
    },
    subtitle: {
      en: "Reflections on the active role of the Quran in daily life and modern society.",
      fr: "Réflexions sur l'efficacité et l'incarnation du Coran dans la vie quotidienne.",
      ar: "تأملات في فاعلية القرآن وتجسيده في الواقع والمعاملات."
    },
    date: {
      en: "April 2025",
      fr: "Avril 2025",
      ar: "أبريل 2025"
    },
    content: {
      en: [
        "If we define the Quran, we say that it is the word of Allah Almighty, reflecting its divine sanctity. This sanctity comes from the greatness of its Revealer. Therefore, debating its sanctity is unnecessary. What people often overlook, however, is the active role of the Quran. Why do we not see the Quran embodied in reality? Why do we not see a 'living Quran', as the Prophet (peace be upon him) was described? What convinced Muslims to abandon the active guidance of the Quran?",
        "The Quran itself needs no arbitrary definition; it defines itself across many verses: 'This is the Book about which there is no doubt', and 'A blessed Book which We revealed to you that they may reflect upon its verses'. It is 'the Wise Quran', containing decisive speech: 'It is a decisive statement, and it is not a jest'. It holds great dignity: 'It is the speech of a noble Messenger'. Thus, no one needs to redefine the Quran, for Allah Himself preserved and elevated it above all other books.",
        "The issue is not a lack of reverence. Every Ramadan, many recite and complete the Quran multiple times, competing in its recitation. Yet if asked about the meaning of a single verse, many cannot explain it. More critically, even among those who understand, where is the application? Contemplating (tadabbur) and practicing the Quran has become rare in the Ummah, which aligns with the prophetic grievance regarding the abandonment of the Quran.",
        "Allah revealed the Book without distortion: '(A Book) straight, to warn of severe punishment from Him and to give good tidings to the believers who do righteous deeds'. Yet we have reduced this Book to a mere symbol of blessing, despite verses showing its foundational role: 'We sent Our messengers with clear proofs and brought down with them the Book and the balance that people may maintain justice'.",
        "Have Muslims truly internalized this? Where is the Quran in our reality—in individual ethics, community rules, and state constitutions? Often, when social or economic crises arise, secular liberal frameworks are summoned as primary references, while Quranic solutions are dismissed as outdated. This distorted perception has led to the marginalization of the Quran.",
        "Some argue that modern sciences are absent from the Quran. Yet the Quran came to guide human knowledge. If science alone were sufficient, we would not witness widespread destruction; weapons of mass destruction are products of advanced science without moral guidance. The Quran arrived to direct knowledge toward noble ends.",
        "Therefore, we must reconsider how we approach the Quran, correcting our perceptions and restoring its active role. Human beings cannot march forward without the fuel of the Quranic vision."
      ],
      fr: [
        "Si l’on veut définir le Coran, on dira qu’il est la parole d’Allah, exalté soit-Il, et Sa parole montre l’immense sacralité de ce Livre. La sacralité du Livre provient de la grandeur de Celui qui l’a révélé. Ainsi, il n’est pas pertinent de débattre de sa sacralité. Cependant, ce que les gens ignorent et négligent, c’est l’efficacité du Coran. Pourquoi ne voyons-nous pas le Coran incarné dans la réalité ? Pourquoi ne voyons-nous pas un « Coran vivant », comme le Prophète (paix et bénédictions sur lui) a été décrit ? Par quoi les musulmans ont-ils été convaincus d’abandonner le Coran ?",
        "Le Coran lui-même n’a pas besoin d’être décrit ni interprété arbitrairement ; il s’est lui-même défini dans de nombreux versets : « Voilà le Livre au sujet duquel il n’y a aucun doute », et « un Livre que Nous avons fait descendre vers toi, béni, afin qu’ils méditent sur ses versets et que les doués d’intelligence se rappellent ». Il est aussi « le Coran plein de sagesse », et ce qu’il contient est une parole décisive : « C’est certes une parole décisive, et non une plaisanterie ». Il est également dit : « Certes, c’est un rappel ; que celui qui veut s’en souvienne, dans des feuillets honorés, élevés, purifiés, entre les mains de scribes nobles et vertueux ». Il possède une grande dignité : « C’est la parole d’un noble Messager, doué de force, ayant un rang élevé auprès du Maître du Trône, obéi et digne de confiance ». Ainsi, nul ne devrait prétendre définir le Coran pour les gens, car Allah, Celui qui l’a révélé, a assuré sa préservation, sa sacralité et son élévation au-dessus des autres livres.",
        "Le problème ne réside pas dans la sacralité du Coran. On voit, chaque mois de Ramadan, des personnes se consacrer à sa lecture et le terminer plusieurs fois, ainsi que des écoles coraniques et une forte compétition pour le réciter entièrement. Mais si l’on interroge sur le sens d’un mot ou d’un verset, la majorité en est incapable. Et ce n’est même pas le pire : certains ont compris, mais où est la mise en pratique ? Le constat est que la méditation du Coran et son application sont devenues presque inexistantes dans la communauté musulmane, et la plainte prophétique concernait justement l’abandon du Coran.",
        "Allah, qui a révélé le Livre à Son serviteur, n’y a mis aucune ambiguïté. Il dit : « (un Livre) droit, afin d’avertir d’un châtiment sévère venant de Lui et d’annoncer aux croyants qui accomplissent de bonnes œuvres qu’ils auront une belle récompense ». Il dit aussi : « un Livre béni que Nous avons fait descendre vers toi afin qu’ils méditent ses versets ». Il dit encore : « Le mois de Ramadan au cours duquel le Coran a été descendu comme guide pour les gens ». Et aussi : « Ce Coran guide vers ce qu’il y a de plus droit ». Pourtant, nous avons réduit ce Livre à un simple objet de bénédiction, alors qu’il contient des versets montrant son rôle central : « Nous avons envoyé Nos messagers avec des preuves, et fait descendre avec eux le Livre et la balance afin que les gens établissent la justice ».",
        "Les musulmans ont-ils réellement pris conscience de tout cela ? Où est le Coran dans notre réalité ? Au niveau individuel : où sont les comportements et les valeurs ? Au niveau de la société : où sont les règles coraniques pour l’organiser ? Où sont les lois coraniques qui la réforment ? Elles sont presque absentes. Au niveau des autorités : où est la référence coranique dans les États ? On voit plutôt les responsables faire appel à des experts pour résoudre les problèmes sociaux, politiques ou économiques, souvent avec des solutions fondées sur une base libérale. Et lorsque l’on affirme que le Coran propose des solutions profondes, les réactions sont négatives, parfois agressives. Le modèle devient alors l’Occident, tandis que le Coran est marginalisé dans la pensée et dans la référence.",
        "Certains avancent aussi que le Coran ne contient pas les sciences modernes. Pourtant, le Coran est venu guider la connaissance humaine. Si la science seule suffisait, nous ne verrions pas les destructions massives dans le monde. Les guerres et les armes destructrices sont le produit du progrès scientifique, mais elles servent aussi à détruire. Il existe un progrès scientifique, et cela n’est pas nié ; mais il n’y a pas de science sans orientation. Le Coran est venu orienter ces connaissances vers une finalité noble. Le Coran est au-dessus du simple savoir accumulé dans la mémoire humaine.",
        "Ainsi, il est nécessaire de reconsidérer l’efficacité du Coran, de corriger notre vision à son égard et d’améliorer notre manière de l'aborder. Même si le musulman cherche une alternative au Coran, il n’en trouvera pas tant que les cieux et la terre subsisteront. L’être humain restera incapable d’avancer sans le « carburant » du Coran."
      ],
      ar: [
        "إن جئنا لتعريف القرآن فنقول إنه قول الله عز وجل، وكلامه يبين مدى قداسة هذا الكتاب. وقداسة الكتاب هي من عظمة قائله عز وجل. بالتالي لا ينفع أن نتجادل في قداسة الكتاب، ولكن ما يجهله الناس ويغفلون عنه هو فاعلية القرآن. لِمَ لا نرى القرآن متجسدًا في الواقع؟ لِمَ لا نرى قرآنًا يمشي كما وُصِف الرسول صلى الله عليه وسلم؟ بما أُقنع المسلمون كي يهجروا القرآن؟",
        "القرآن نفسه لا يحتاج لأن يُوصف أو يُتَقوَّل عليه، فقد تبيّن في العديد من الآيات وصف القرآن: ﴿ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ﴾، وأنه ﴿كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ﴾، وأنه ﴿وَالْقُرْآنِ الْحَكِيمِ﴾، وأن ما يحتويه قول عظيم، لقوله عز وجل: ﴿إِنَّهُ لَقَوْلٌ فَصْلٌ * وَمَا هُوَ بِالْهَزْلِ﴾. وقيل أيضًا: ﴿كَلَّا إِنَّهَا تَذْكِرَةٌ * فَمَنْ شَاءَ ذَكَرَهُ * فِي صُحُفٍ مُكَرَّمَةٍ * مَرْفُوعَةٍ مُطَهَّرَةٍ * بِأَيْدِي سَفَرَةٍ * كِرَامٍ بَرَرَةٍ﴾. وله منزلة عظيمة، لقوله: ﴿إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ * ذِي قُوَّةٍ عِندَ ذِي الْعَرْشِ مَكِينٍ * مُطَاعٍ ثَمَّ أَمِينٍ﴾. فلا يتقدم أحد ليعرّف القرآن للناس، فالله عز وجل الذي نزّله حرص على حفظه وتقديسه ورفعه على الكتب الأخرى.",
        "فالمشكلة لا تكمن في قداسة القرآن؛ إذ ترى في كل شهر رمضان أناسًا مقبلة على قراءة القرآن وختمه مرات ومرات، ومدارس قرآنية وتسابقًا نحو ختم القرآن الكريم بشدة. ولكن إن سألت عن معنى لفظة أو آية يعجز الغالب عن شرحها، ولا تكمن المشكلة في ذلك فقط، بل الأسوأ أن أناسًا فهموا، ولكن أين العمل بالآيات؟ الشاهد أن تدبر القرآن والعمل به أصبح شبه منعدم في الأمة الإسلامية، والرسول صلى الله عليه وسلم عندما بث شكواه كانت عن هجران القرآن.",
        "فالله عز وجل الذي أنزل على عبده الكتاب لم يجعل له عوجًا، وفيه قال: ﴿قَيِّمًا لِيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ وَيُبَشِّرَ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا﴾. وقال أيضًا: ﴿كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ﴾. وقال أيضًا: ﴿شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ﴾. وقال أيضًا في سورة الإسراء: ﴿إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ﴾. ونحن الذين جعلنا هذا الكتاب كتابًا للبركة فقط، مع أن القرآن نفسه يحتوي آيات تبين أهميته، حين قال عز وجل: ﴿لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ وَأَنزَلْنَا مَعَهُمُ الْكِتَابَ وَالْمِيزَانَ لِيَقُومَ النَّاسُ بِالْقِسْطِ﴾.",
        "فهل تيقن المسلمون بكل هذا؟ وبعد ذلك، أين القرآن في واقعنا؟ على مستوى الفرد، أين الأخلاق والمعاملات؟ على مستوى المجتمع، أين القواعد القرآنية في ضبط المجتمع؟ أين الحدود القرآنية التي تصلح المجتمع؟ تكاد تكون غائبة. وعلى مستوى السلطات، أين الدستور القرآني في الدول؟ وهكذا ترى المسؤولين في كل مشكلة اجتماعية أو سياسية أو اقتصادية يستدعون مختصين لحلها، وعادة ما يكون الحل معتمدًا على الركيزة الليبرالية الخالصة. وعندما تقول إن في القرآن حلًا جذريًا للمشكلة، تكون ردود الأفعال سلبية وشرسة أحيانًا، ويقال إن القرآن ليس له شأن في حل المشكلات المعاصرة. ويأتون بأعذار لا تنتهي: لكل وقت وقته، لسنا في زمن الماضي، نحن متقدمون. وترى أن المعيار عادة ما يكون الغرب. في كل صغيرة وكبيرة تجد المركزية الغربية حاضرة، والقرآن معزول. لكن إذا كان الأمر مجرد كلام عنه، فكل يدافع عنه ويقدسه ويجعل له مكانة عالية، أما إذا تعلق الأمر بجعل الأفكار القرآنية مرجعية في الفكر، فلا، هناك ما هو أعلى منه، وهو الغرب. كل هذا تصور مشوه عند المسلمين أدى إلى هجران القرآن.",
        "وهناك من يأتيك بفكرة أن القرآن لا تجد فيه العلوم المعاصرة، بينما القرآن أتى لهداية المعرفة الإنسانية. ولو كان العلم وحده يكفي لما رأينا الدمار الشامل في العالم؛ فالحروب والأسلحة المدمرة من صنع العلم المتطور، لكنها أداة إبادة. أين صفة الرشد التي أتى بها القرآن؟ نعم، هناك تطور وعلم، ولا ننفي ذلك، ولكن لا علم بدون مرشد. القرآن أتى ليرشد هذه المعارف إلى غايتها النبيلة. القرآن أعلى من أن يكون مجرد علم أو معرفة تُخزن في ذاكرة الإنسان ثم تنتهي.",
        "فالشاهد أنه يجب إعادة النظر في فاعلية القرآن وتصحيح التصورات تجاهه، وحسن التعامل معه. وحتى لو سعى المسلم إلى البحث عن بديل للقرآن فلن يجد ما دامت السماوات والأرض؛ سيعجز الإنسان المسلم، وسيبقى عاجزًا، عن السير دون وقود القرآن."
      ]
    },
    notes: {
      en: [
        "Living Quran: Refers to Aisha's (RA) famous description of the Prophet Muhammad (PBUH): 'His character was the Quran'.",
        "Decisive statement: Translation of Al-Fasl, denoting speech that clearly separates truth from falsehood.",
        "Noble scribes: Refers to angels entrusted with conveying revelation.",
        "Tadabbur (Contemplation): Deep reflection with the heart aimed at extracting divine wisdom to transform behavior.",
        "The Balance (Al-Mizan): Quranic metaphor for absolute justice and moral uprightness.",
        "Liberal framework: Secular paradigms that exclude religious ethics from public governance."
      ],
      fr: [
        "Coran vivant : Cette expression fait écho à la célèbre description du Prophète Muhammad par son épouse Aïcha : « Son caractère était le Coran ».",
        "Parole décisive : Traduction du terme Al-Fasl. Il désigne un discours qui tranche entre le vrai et le faux.",
        "Scribes nobles et vertueux : Fait référence aux Anges chargés de transmettre fidèlement la Révélation.",
        "Méditation (Tadabbur) : Réflexion profonde du cœur visant à extraire les sagesses divines pour transformer son comportement.",
        "La balance (Al-Mizan) : Allégorie coranique représentant la justice et l'équité absolue.",
        "Base libérale : Désigne ici les paradigmes laïques qui écartent la religion de la gestion des affaires publiques."
      ],
      ar: [
        "قرآنًا يمشي: تحيل هذه العبارة إلى الوصف الشهير لأم المؤمنين عائشة رضي الله عنها: 'كان خلقه القرآن'.",
        "قول فصل: القول الذي يفصل بين الحق والباطل، والعدل والظلم.",
        "سفرة كرام بررة: الملائكة المكلفون بنقل الوحي بأمانة.",
        "التدبر: تأمل عميق بالقلب يهدف إلى استخلاص الحكم الإلهية بغرض تغيير السلوك.",
        "الميزان: كناية قرآنية تعبر عن العدل، والإنصاف المطلق.",
        "الركيزة الليبرالية: المناهج والأفكار العلمانية التي تُقصي الدين عن إدارة الشؤون العامة."
      ]
    },
    references: {
      en: [
        "Surah Al-Baqarah, Verse 2.",
        "Surah Sad, Verse 29.",
        "Surah Ya-Sin, Verse 2.",
        "Surah At-Tariq, Verses 13-14.",
        "Surah Abasa, Verses 11-16.",
        "Surah At-Takwir, Verses 19-21.",
        "Surah Al-Kahf, Verse 2.",
        "Surah Al-Baqarah, Verse 185.",
        "Surah Al-Isra, Verse 9.",
        "Surah Al-Hadid, Verse 25."
      ],
      fr: [
        "Sourate Al-Baqara, verset 2.",
        "Sourate Sad, verset 29.",
        "Sourate Ya-Sin, verset 2.",
        "Sourate At-Tariq, versets 13-14.",
        "Sourate Abasa, versets 11-16.",
        "Sourate At-Takwir, versets 19-21.",
        "Sourate Al-Kahf, verset 2.",
        "Sourate Al-Baqara, verset 185.",
        "Sourate Al-Isra, verset 9.",
        "Sourate Al-Hadid, verset 25."
      ],
      ar: [
        "سورة البقرة، الآية 2.",
        "سورة ص، الآية 29.",
        "سورة يس، الآية 2.",
        "سورة الطارق، الآيتان 13-14.",
        "سورة عبس، الآيات 11-16.",
        "سورة التكوير، الآيات 19-21.",
        "سورة الكهف، الآية 2.",
        "سورة البقرة، الآية 185.",
        "سورة الإسراء، الآية 9.",
        "سورة الحديد، الآية 25."
      ]
    }
  },
  {
    slug: "meditation-du-coran-reservee-aux-cheikhs",
    topicId: "centralite-du-coran",
    topicTitle: {
      en: "The Centrality of the Quran",
      fr: "La Centralité du Coran",
      ar: "مركزية القرآن"
    },
    title: {
      en: "Is Contemplating the Quran Reserved for Scholars?",
      fr: "Le Coran, ou la méditation du Coran, est-il réservé aux savants ?",
      ar: "هل القرآن أو تدبر القرآن للمشايخ؟"
    },
    subtitle: {
      en: "Reframing accessibility, personal responsibility, and daily reflection.",
      fr: "Démystifier l'accès au Coran et la responsabilité individuelle.",
      ar: "تبسيط الوصول إلى القرآن والتفكر الفردي المسؤول."
    },
    date: {
      en: "March 2025",
      fr: "Mars 2025",
      ar: "مارس 2025"
    },
    content: {
      en: [
        "This essay stems from a personal conversation with a coworker who expressed that scholars had made contemplating the Quran seem overly complex and intimidating for ordinary people. This reflects a widespread belief that tadabbur is reserved exclusively for senior scholars. If we accept this premise, ordinary people will inevitably abandon personal engagement with the Quran.",
        "If an ordinary Muslim reads 'The month of Ramadan in which was revealed the Quran, a guidance for the people', they understand that guidance is offered to all people, not just specialized scholars. Reflecting on its verses guides any sincere reader toward uprightness.",
        "Allah states: 'And We have certainly made the Quran easy for remembrance, so is there any who will remember?' This clear verse refutes the excuse that the Quran is unapproachable. While some verses require deep scholarship, core guidance remains accessible.",
        "Ironically, many people delve into complex poetry or literature without hesitation, yet claim inability when encountering Quranic text.",
        "Abandoning the Quran over a single difficult word fosters a mindset of avoidance that spills into daily life—quitting relationships or tasks at the first hurdle.",
        "The goal for an ordinary person is not exhaustive scholarship, but applying what one understands and making the Quran a daily compass. For instance, Surah Al-Hujurat provides clear principles for community ethics and brotherhood.",
        "Surah An-Nur opens with explicit guidance for social order. Anyone can draw practical lessons from its clear verses.",
        "The Quran is divine speech filled with layers of wisdom. Approaching it with patience opens doors of insight.",
        "Every Muslim should correct their perception, start with small actionable steps, and seek knowledge when encountering complex passages without abandoning the whole text."
      ],
      fr: [
        "Le point de départ de cet article n'est pas une simple idée théorique, mais une situation que j'ai vécue personnellement. Je parlais avec un ami au travail de la méditation du Coran, et il m'a dit que les cheikhs nous ont fait détester ce domaine, qu'ils nous l'ont rendu difficile et complexe aux yeux des gens. Ces paroles, bien que dites spontanément, résument une conception adoptée par la majorité, à savoir que la méditation du Coran n'est pas une chose aisée pour les gens ordinaires, et qu'elle est réservée exclusivement aux grands savants.",
        "Si nous prenons un musulman ordinaire qui ne comprend pas grand-chose aux discours des savants, et que nous lui présentons des versets du Coran, comme : « Le mois de Ramadan au cours duquel le Coran a été descendu comme guide pour les gens », il vous répondrait très clairement que le Coran est une guidance pour les gens en général, pas uniquement pour les spécialistes.",
        "D'un autre côté, Allah dit : « En effet, Nous avons rendu le Coran facile pour la méditation, y a-t-il quelqu'un pour réfléchir ? ». Même ce verset qui exhorte les gens à tirer des leçons du Coran montre qu'il est facile à comprendre et à méditer. Il n'y a donc aucune excuse pour celui qui prétend que le Coran est incompréhensible.",
        "Ce qui est étonnant, c'est que certaines personnes qui prétendent que le Coran est complexe se plongent dans des recherches profondes pour comprendre un mot d'un poète ou d'un écrivain. Quant à la parole d'Allah, ils abandonnent dès la première difficulté.",
        "Cette mentalité d'abandon fondée sur la simple difficulté d'un mot représente un danger. Si chaque personne abandonne le Coran dès qu'elle se heurte à une difficulté, où allons-nous ?",
        "L'objectif pour un musulman ordinaire n'est pas d'achever la lecture du Coran en l'ayant totalement médité et maîtrisé comme un savant. L'objectif est plutôt d'agir selon ses capacités et de faire du Coran une référence dans son quotidien. Par exemple, la sourate Al-Hujurat traite entièrement de la fraternité et de la gestion de la société.",
        "De même, la sourate An-Nur énonce des préceptes clairs, à tel point qu'un enfant à l'école primaire pourrait en déduire des règles de vie.",
        "L'idée est que le Coran est la parole d'Allah, et chaque verset contient une sagesse. Ceux qui plongent dans ses profondeurs sont émerveillés par sa cohérence.",
        "Chaque musulman doit corriger sa perception du Coran, faire preuve de patience et commencer par le minimum selon ses capacités, sans tout abandonner au premier obstacle."
      ],
      ar: [
        "منطلق هذا المقال ليس مجرد فكرة نظرية، بل موقف وقع لي شخصيًا. فقد كنت أتحدث مع صديق في العمل عن تدبر القرآن، فقال لي: إن الشيوخ كرّهونا في هذا الباب، واستصعبوا الأمر علينا، وجعلوه مستشكلًا في نظر الناس. وهذا الكلام، وإن قيل بعفوية، يلخّص تصورًا تبنّاه أغلب المسلمين: أن تدبر القرآن ليس بالشيء الهيّن على الناس، وبالتالي فهو مخصوص فقط لكبار العلماء والمشايخ.",
        "لو أتينا بشخص مسلم عام لا يفقه كثيرًا مما يقول العلماء، وعرَضنا عليه آيات في القرآن، مثل: ﴿شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ﴾، لأجابك بكل وضوح أن القرآن نزل في شهر رمضان، وهو هداية للناس، فبالتالي هذا المسلم العام هو من الناس أيضًا، وأن من تدبر القرآن يهتدي.",
        "وفي جهة أخرى، يقول الله عز وجل: ﴿وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ﴾. وحتى هذه الآية التي توصي الناس بالاتعاظ بالقرآن، فهي ميسرة للفهم والتدبر، فلا عذر لمن يقول إن القرآن مستشكل وصعب الفهم.",
        "والعجب أن بعض الأشخاص الذين يدّعون أن القرآن مستشكل، تجده في بحوث عميقة لفهم لفظ ألقاه شاعر أو كاتب، وقد لا يفيده. أما قول الله عز وجل، فيقولون: ما عادوا يفهمون ولا يفقهون، وهذا خطير جدًا.",
        "فعقلية الهجر لمجرد استشكال لفظ أو معنى آية يعود بالخطر على المجتمع المسلم؛ فإذا كل من أخذ بالقرآن ثم اصطدم بلفظ يعيق طريقه هجر، فإلى أين؟",
        "فالهدف ليس ختم القرآن تدبرًا وعملاً لشخص مسلم عامي؛ فهذا قد يكلَّف به شخص من أهل العلم الكبار، ولكن الهدف هو العمل بما استطاع، ووضع القرآن كمرجعية في يومياته. مثلًا في العلاقات الاجتماعية، سورة الحجرات كلها تتكلم عن إدارة المجتمع الإسلامي.",
        "ولو قرأت أيضًا في سورة النور، لوجدت افتتاحها بآية تعد جوابًا لهذا السؤال المطروح، إذ يقول عز وجل: ﴿سُورَةٌ أَنزَلْنَاهَا وَفَرَضْنَاهَا وَأَنزَلْنَا فِيهَا آيَاتٍ بَيِّنَاتٍ لَّعَلَّكُمْ تَذَكَّرُونَ﴾.",
        "والفكرة هي أن القرآن هو كلام الله عز وجل، وإنه ليس ككتاب آخر؛ فكل شيء فيه حكمة. لذلك، الذين يغطسون في أعماق القرآن ينبهرون بدقته وحكمته وتكامله العجيب.",
        "فالمشكلة تبدأ بالتصور الذي يحمله المسلمون عن القرآن. فعلى كل مسلم أن يصحح تصوره تجاه القرآن، وأن يصبر عليه، ويبدأ بأقل القليل، والله المستعان."
      ]
    },
    notes: {
      en: [
        "Tadabbur: Deep contemplation aimed at practical application in daily life.",
        "Hajr: Abandonment of the Quran in recitation, contemplation, or action.",
        "Al-Qist: Absolute equity and moral justice in social interactions."
      ],
      fr: [
        "Tadabbur : Ce terme désigne la méditation profonde et la réflexion sur le sens des versets.",
        "Hajr : Ce mot fait référence à l'abandon du Coran (lecture, méditation ou application).",
        "Al-Qist : Ce concept représente l'équité et la justice absolue."
      ],
      ar: [
        "التدبر: التأمل العميق والتفكر في معاني الآيات لاستخلاص العبر العملية.",
        "الهجران: يشير إلى هجر القرآن (تلاوةً، وتدبراً، وعملاً).",
        "القسط: يمثل العدل المطلق والإنصاف والاستقامة الأخلاقية."
      ]
    },
    references: {
      en: [
        "Surah Al-Baqarah, Verse 185.",
        "Surah Al-Mu'minun, Verse 68.",
        "Surah Al-Qamar, Verse 17.",
        "Surah Sad, Verse 29.",
        "Surah Al-Furqan, Verse 20.",
        "Surah Al-Hujurat, Verse 10.",
        "Surah An-Nur, Verse 1."
      ],
      fr: [
        "Sourate Al-Baqara, verset 185.",
        "Sourate Al-Mu'minun, verset 68.",
        "Sourate Al-Qamar, verset 17.",
        "Sourate Sad, verset 29.",
        "Sourate Al-Furqan, verset 20.",
        "Sourate Al-Hujurat, verset 10.",
        "Sourate An-Nur, verset 1."
      ],
      ar: [
        "سورة البقرة، الآية 185.",
        "سورة المؤمنون، الآية 68.",
        "سورة القمر، الآية 17.",
        "سورة ص، الآية 29.",
        "سورة الفرقان، الآية 20.",
        "سورة الحجرات، الآية 10.",
        "سورة النور، الآية 1."
      ]
    }
  },
  {
    slug: "coran-multiples-interpretations-excuse-abandon",
    topicId: "centralite-du-coran",
    topicTitle: {
      en: "The Centrality of the Quran",
      fr: "La Centralité du Coran",
      ar: "مركزية القرآن"
    },
    title: {
      en: "Multiple Interpretations: An Excuse to Abandon the Quran?",
      fr: "Le Coran porte-t-il de multiples interprétations : une excuse pour l'abandonner ?",
      ar: "القرآن حمّال أوجه: عذرٌ لهجران القرآن؟"
    },
    subtitle: {
      en: "Addressing common misconceptions and navigating textual nuances.",
      fr: "Déconstruire le prétexte des sens multiples et aborder la nuance.",
      ar: "تفنيد أوهام الأوجه المتعددة وإدراك مرونة النص."
    },
    date: {
      en: "February 2025",
      fr: "Février 2025",
      ar: "فبراير 2025"
    },
    content: {
      en: [
        "The phrase 'The Quran carries multiple facets' is often cited (attributed to Ali ibn Abi Talib when sending Ibn Abbas to debate the Kharijites). Some use this idea to argue that multiple interpretations hinder personal reflection. Is this a valid excuse?",
        "Does the entire Quran carry ambiguous interpretations, from Al-Fatiha to An-Nas? While allegorical or complex verses exist, Allah explicitly instructs: 'If you disagree over anything, refer it to Allah and the Messenger'.",
        "If the entire text were hopelessly ambiguous, how could the Quran command us to return to its guidance?",
        "The Quran is explicitly described as a guide: 'Indeed, this Quran guides to that which is most suitable'. Its primary function is to establish clarity and justice.",
        "The vast majority of the Quran is clear and accessible. When encountering complex verses, one can consult scholarly works while continuing to reflect on clear passages. Ali's statement concludes with: 'Interpret it in its best sense'.",
        "Verses like 'Say: He is Allah, One' or the foundational moral commands in Surah Al-Ikhlas, Al-Mu'minun, and An-Nur leave no room for confusion.",
        "The Quran meets each reader at their capacity: 'Allah does not charge a soul except with that which is within its capacity'. Difficulties should invite deeper study rather than abandonment."
      ],
      fr: [
        "C'est une parole qui circule beaucoup parmi les musulmans. Si son attribution est authentique, elle remonte à Ali ibn Abi Talib, lorsqu'il envoya Ibn Abbas débattre avec les Kharijites. Elle a été comprise selon l'idée que le Coran possède de multiples facettes d'interprétation, ce qui entraverait le processus de méditation. Cette excuse est-elle suffisante ?",
        "Si le Coran porte en lui diverses possibilités d'interprétation, l'intégralité du Coran est-elle réellement ainsi ? Si les versets d'Allah portent plusieurs sens et que le musulman craint de les méditer, cela peut concerner des versets précis. Mais l'ensemble du Coran se limite-t-il à cela ? Allah dit pourtant : « Puis, si vous vous disputez en quoi que ce soit, renvoyez-le à Allah et au Messager ».",
        "Si le Coran tout entier était soumis à de multiples interprétations divergentes, comment pourrait-il nous ordonner de revenir à lui et à la Sunna ?",
        "Deuxièmement : comment concilier cette idée avec le fait qu'il est mentionné dans le Livre : « Certes, ce Coran guide vers ce qu'il y a de plus droit » ?",
        "Ce qu'il faut retenir, c'est que la majeure partie du Coran est accessible. Il y aura toujours des éléments qui poseront difficulté, mais ce n'est pas un obstacle insurmontable. D'ailleurs, le récit attribué à Ali se complète par sa recommandation : « Portez-le sur son meilleur sens ».",
        "Des versets comme : « Dis : \"Il est Allah, Unique\" » ou les préceptes de la sourate Al-Ikhlas, Al-Mu'minun, et An-Nur sont évidents et peuvent être médités avec la plus grande facilité.",
        "En conclusion, il y a dans le Coran ce qui est à la portée des gens du commun et ce qui est réservé aux spécialistes. Chacun agit selon ses capacités : « Allah n'impose à aucune âme une charge supérieure à sa capacité »."
      ],
      ar: [
        "مقولة تردّد بين المسلمين بكثرة. إن صح إسنادُها فهي تعود إلى علي بن أبي طالب رضي الله عنه، لما بعث ابنَ عباس حبرَ الأمة رضي الله عنه إلى الخوارج لمناظرتهم. وأُخذت بتصور أن القرآن يحمّل أوجهًا مختلفة، بالتالي هذا يعيق عملية التدبر. فهل هذا العذر كافٍ؟",
        "وإن كان القرآن كلامَ الله يحمّل أوجهًا مختلفة في التأويل، وهل كل القرآن من «الحمد لله رب العالمين» إلى «من الجنة والناس» كذلك؟ فهذه واحدة. إن كانت آيات الله تحمّل أوجهًا مختلفة، بالتالي يخاف المسلم أن يتدبرها، فذلك مفهوم. قد يكون في المتشابهات، وقد يكون في أمور أخرى، ولكن هل يتوقف كل القرآن على هذا فقط؟ والله عز وجل يقول: ﴿فَإِن تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ إِن كُنتُمْ تؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ﴾.",
        "فإن كان القرآن كلّه حمّال أوجه، وهذا يمنع التدبر، فكيف للقرآن أن يأمرنا بأن نعود إليه وإلى سنة الرسول صلى الله عليه وسلم؟",
        "والثانية: كيف للقرآن الذي ذُكر فيه: ﴿إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ﴾؟ أو كيف أن كون القرآن حمّال أوجه يجعلنا نهجر تدبره وهو كتاب هدى؟ والله يقول: ﴿لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ وَأَنزَلْنَا مَعَهُمُ الْكِتَابَ وَالْمِيزَانَ لِيَقُومَ النَّاسُ بِالْقِسْطِ﴾.",
        "الشاهد أن أكثر القرآن ميسَّر، وفيه دائمًا ما يستشكِلُه الإنسان، فذلك ليس بالصعب. اتركه للبحث عن الأجوبة، وعند من لهم أو من يعلم أكثر في الأوجه واللغة والبيان وأسباب النزول، وإلى آخره من علوم القرآن وأصوله. فالرواية المسندة إلى علي رضي الله عنه تكتمل أيضًا بقوله: «فاحمِلوه على أحسنه»، وأيضًا ابن عباس رضي الله عنه لما ناظر الخوارج ناظرَهم بالقرآن، وذلك من ذكائه وحسن فهمه لكتاب الله.",
        "فلا يعقل أن يدع المسلمُ القرآنَ ويهجرَ تدبّرَه بحجة أنه حمّال أوجه. نعم، يسعى ويحاول، ثم إذا توقف على آية فيها أوجه، يبحث، أو على الأقل ينتقل إلى آية لا تحمل أوجه. لو قلنا مثلًا في سورة الإخلاص: ﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾، فيها أوجه؟",
        "وفي قوله عز وجل: ﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ * الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ * وَالَّذِينَ هُمْ عَنِ اللَّغْوِ مُعْرِضُونَ * وَالَّذِينَ هُمْ لِلزَّكَاةِ فَاعِلُونَ﴾. أو في سورة النور: ﴿قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ﴾. وآيات أخرى بيِّنة يمكن فهمها وتدبرها بسهولة.",
        "فالشاهد أن في القرآن هناك ما يقدر عليه العامي، وهناك ما يقدر عليه أهل الاختصاص، وهناك ما يكون لأهل العلم، وخيرهم أهل الإيمان. بالتالي كلٌّ على حسب قدرته. فليسعَ كل مسلم على حسب قدرته. والله عز وجل يقول: ﴿لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا﴾. لكن لا يصنع عوائق بنفسه لترك القرآن. والصبر عليه أحق من الصبر على غيره. كيف ولا؟ ﴿بَلْ هُوَ قُرْآنٌ مَّجِيدٌ * فِي لَوْحٍ مَّحْفُوظٍ﴾. والله المستعان."
      ]
    },
    notes: {
      en: [
        "Hammal awjuh (Multi-faceted): A text carrying multiple linguistic or legal interpretations.",
        "Tadabbur: Reflection connecting textual meaning with personal action.",
        "Al-Mutashabihat: Allegorical or complex verses requiring specialized knowledge.",
        "Al-Bayan: Rhetorical clarity and eloquence of speech.",
        "Asbab An-Nuzul: Historical context and occasions of revelation."
      ],
      fr: [
        "Hammal awjuh : Aux multiples facettes (interprétations).",
        "Tadabbur : L'acte de méditation profonde.",
        "Al-Mutashabihat : Les versets équivoques ou allégoriques.",
        "Al-Bayan : L'éloquence et la clarté du discours.",
        "Asbab An-Nuzul : Les circonstances de la révélation."
      ],
      ar: [
        "حمّال أوجه: أي يحمل احتمالات وتأويلات متعددة في الفهم.",
        "المتشابهات: الآيات التي قد تلتبس معانيها أو تحتمل أكثر من وجه.",
        "تدبّر: التأمل العميق في معاني الآيات وربطها بالواقع.",
        "أسباب النزول: الأحداث والظروف التي نزلت فيها الآيات، وتساعد في فهمها.",
        "البيان: الفصاحة ووضوح الكلام ودلالته."
      ]
    },
    references: {
      en: [
        "Surah An-Nisa, Verse 59.",
        "Surah Al-Isra, Verse 9.",
        "Surah Al-Hadid, Verse 25.",
        "Surah Al-Ikhlas, Verse 1.",
        "Surah Al-Mu'minun, Verses 1–4.",
        "Surah An-Nur, Verse 30.",
        "Surah Al-Baqarah, Verse 286.",
        "Surah Al-Buruj, Verses 21–22."
      ],
      fr: [
        "Sourate An-Nisa, verset 59.",
        "Sourate Al-Isra, verset 9.",
        "Sourate Al-Hadid, verset 25.",
        "Sourate Al-Ikhlas, verset 1.",
        "Sourate Al-Mu'minun, versets 1 à 4.",
        "Sourate An-Nur, verset 30.",
        "Sourate Al-Baqara, verset 286.",
        "Sourate Al-Buruj, versets 21-22."
      ],
      ar: [
        "﴿فَإِن تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ إِن كُنتُمْ تُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ﴾ — سورة النساء، الآية 59.",
        "﴿إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ﴾ — سورة الإسراء، الآية 9.",
        "﴿لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ وَأَنزَلْنَا مَعَهُمُ الْكِتَابَ وَالْمِيزَانَ لِيَقُومَ النَّاسُ بِالْقِسْطِ﴾ — سورة الحديد، الآية 25.",
        "﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾ — سورة الإخلاص، الآية 1.",
        "﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ * الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ * وَالَّذِينَ هُمْ عَنِ اللَّغْوِ مُعْرِضُونَ * وَالَّذِينَ هُمْ لِلزَّكَاةِ فَاعِلُونَ﴾ — سورة المؤمنون، الآيات 1–4.",
        "﴿قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ﴾ — سورة النور، الآية 30.",
        "﴿لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا﴾ — سورة البقرة، الآية 286.",
        "﴿بَلْ هُوَ قُرْآنٌ مَّجِيدٌ * فِي لَوْحٍ مَّحْفُوظٍ﴾ — سورة البروج، الآيتان 21–22."
      ]
    }
  },
  {
    slug: "psychologie-des-masses-et-comportement",
    topicId: "comprendre-la-nature-humaine",
    topicTitle: {
      en: "Understanding Human Nature",
      fr: "Comprendre la Nature Humaine",
      ar: "فهم الطبيعة البشرية"
    },
    title: {
      en: "Mass Psychology and Social Dynamics",
      fr: "Psychologie des Masses et Dynamiques Sociales",
      ar: "علم نفس الجماهير والديناميكيات الاجتماعية"
    },
    subtitle: {
      en: "Examining cognitive biases, collective behavior, and individual responsibility.",
      fr: "Analyse des biais cognitifs, du comportement collectif et de la responsabilité individuelle.",
      ar: "تحليل التحيزات المعرفية والسلوك الجماعي والمسؤولية الفردية."
    },
    date: {
      en: "May 2025",
      fr: "Mai 2025",
      ar: "مايو 2025"
    },
    content: {
      en: [
        "Understanding human nature requires examining how individuals behave within group structures. Collective dynamics often amplify emotional responses and diminish individual critical thinking.",
        "To foster true intellectual autonomy, one must recognize social conditioning and return to conscious, principled decision-making grounded in moral clarity."
      ],
      fr: [
        "Comprendre la nature humaine nécessite d'examiner comment l'individu se comporte au sein des structures de groupe. Les dynamiques collectives amplifient souvent les réponses émotionnelles au détriment de la réflexion critique individuelle.",
        "Pour cultiver une véritable autonomie intellectuelle, l'être humain doit prendre conscience des conditionnements sociaux et revenir à des choix conscients fondés sur une éthique claire."
      ],
      ar: [
        "يتطلب فهم الطبيعة البشرية فحص كيفية تصرف الفرد داخل الهياكل الجماعية. غالباً ما تضخم الديناميكيات الجماعية الاستجابات العاطفية وتضعف التفكير النقدي الفردي.",
        "لتعزيز الاستقلالية الفكرية الحقيقية، يجب على الإنسان إدراك التكيف الاجتماعي والعودة إلى اتخاذ قرارات واعية ومبنية على مبادئ أخلاقية واضحة."
      ]
    },
    notes: {
      en: [
        "Mass Psychology: The study of how individual thought processes change in group environments.",
        "Autonomy: The capacity of a rational individual to make informed, un-coerced decisions."
      ],
      fr: [
        "Psychologie des masses : Étude des modifications de la pensée individuelle au sein d'un groupe.",
        "Autonomie intellectuelle : Capacité d'un individu rationnel à prendre des décisions éclairées sans coercition."
      ],
      ar: [
        "علم نفس الجماهير: دراسة كيفية تغير عمليات التفكير الفردي داخل البيئات الجماعية.",
        "الاستقلالية الفكرية: قدرة الفرد العاقل على اتخاذ قرارات مستنيرة ودون إكراه."
      ]
    },
    references: {
      en: [
        "Le Bon, Gustave. The Crowd: A Study of the Popular Mind, 1895.",
        "Frankl, Viktor E. Man's Search for Meaning, 1946."
      ],
      fr: [
        "Le Bon, Gustave. Psychologie des Foules, 1895.",
        "Frankl, Viktor E. Découvrir un sens à sa vie, 1946."
      ],
      ar: [
        "غوستاف لوبون، سيكولوجية الجماهير، 1895.",
        "فيكتور فرانكل، الإنسان يبحث عن المعنى، 1946."
      ]
    }
  },
  {
    slug: "attention-et-discipline-a-lerique-numerique",
    topicId: "comprendre-la-nature-humaine",
    topicTitle: {
      en: "Understanding Human Nature",
      fr: "Comprendre la Nature Humaine",
      ar: "فهم الطبيعة البشرية"
    },
    title: {
      en: "Attention and Discipline in the Digital Age",
      fr: "L'Attention et la Discipline à l'Ère Numérique",
      ar: "الانتباه والانضباط في العصر الرقمي"
    },
    subtitle: {
      en: "Preserving deep contemplation and focus amid constant stimulation.",
      fr: "Préserver la réflexion profonde et la concentration face aux stimulations constantes.",
      ar: "الحفاظ على التفكير العميق والتركيز في ظل التحفيز المستمر."
    },
    date: {
      en: "June 2025",
      fr: "Juin 2025",
      ar: "يونيو 2025"
    },
    content: {
      en: [
        "The digital age presents an unprecedented challenge to the human mind: the fragmentation of attention. Constant streams of information fragment memory and weaken the capacity for sustained reflection.",
        "Restoring mental clarity requires intentional discipline, daily quietude, and a conscious effort to prioritize depth over speed."
      ],
      fr: [
        "L'ère numérique pose un défi sans précédent à l'esprit humain : la fragmentation de l'attention. Le flux continu d'informations morcelle la mémoire et affaiblit la capacité de réflexion soutenue.",
        "Restaurer la clarté mentale exige une discipline intentionnelle, des moments quotidiens de silence et un effort conscient pour privilégier la profondeur sur la vitesse."
      ],
      ar: [
        "يفرض العصر الرقمي تحدياً غير مسبوق على العقل البشري: تشتت الانتباه. يتسبب التدفق المستمر للمعلومات في تجزئة الذاكرة وتضعيف القدرة على التفكير المستمر.",
        "تطلب استعادة الصفاء الذهني انضباطاً مقصوداً، ولحظات صمت يومية، وجهداً واعياً لتفضيل العمق على السرعة."
      ]
    },
    notes: {
      en: [
        "Attention Economy: The perspective treating human attention as a scarce commodity.",
        "Deep Work: Professional or reflective activities performed in a state of distraction-free concentration."
      ],
      fr: [
        "Économie de l'attention : Modèle considérant l'attention humaine comme une ressource rare et exploitée.",
        "Travail profond (Deep Work) : Activités de réflexion ou de création réalisées dans une concentration absolue."
      ],
      ar: [
        "اقتصاد الانتباه: منظور يتعامل مع الانتباه البشري كسلعة نادرة ومستهدفة.",
        "العمل العميق: الأنشطة الفكرية أو الإبداعية التي تُنفَّذ في حالة من التركيز الخالي من المشتتات."
      ]
    },
    references: {
      en: [
        "Newport, Cal. Deep Work: Rules for Focused Success in a Distracted World, 2016.",
        "Carr, Nicholas. The Shallows: What the Internet Is Doing to Our Brains, 2010."
      ],
      fr: [
        "Newport, Cal. Deep Work : Retrouver la concentration dans un monde de distractions, 2016.",
        "Carr, Nicholas. Internet rend-il bête ?, 2010."
      ],
      ar: [
        "كال نيوبورت، العمل العميق: قواعد للنجاح الممركز في عالم مشتت، 2016.",
        "نيكولاس كار، ما الذي يفعله إنترنت بأدمغتنا، 2010."
      ]
    }
  }
];

export const rawTopics: TopicData[] = [
  {
    topic_id: "centralite-du-coran",
    topic_title: {
      en: "The Centrality of the Quran",
      fr: "La Centralité du Coran",
      ar: "مركزية القرآن"
    },
    articles: rawEssays.filter(e => e.topicId === "centralite-du-coran")
  },
  {
    topic_id: "comprendre-la-nature-humaine",
    topic_title: {
      en: "Understanding Human Nature",
      fr: "Comprendre la Nature Humaine",
      ar: "فهم الطبيعة البشرية"
    },
    articles: rawEssays.filter(e => e.topicId === "comprendre-la-nature-humaine")
  }
];

const mapEssay = (e: EssayData, lang: Language): Essay => ({
  slug: e.slug,
  topicId: e.topicId,
  topicTitle: e.topicTitle ? (e.topicTitle[lang] || e.topicTitle.en) : undefined,
  title: e.title[lang] || e.title.en,
  subtitle: e.subtitle[lang] || e.subtitle.en,
  content: e.content[lang] || e.content.en,
  date: e.date[lang] || e.date.en,
  notes: e.notes ? (e.notes[lang] || e.notes.en) : undefined,
  references: e.references ? (e.references[lang] || e.references.en) : undefined
});

export const getTopics = (lang: Language = 'en'): Topic[] => {
  return rawTopics.map(t => ({
    topic_id: t.topic_id,
    topic_title: t.topic_title[lang] || t.topic_title.en,
    articles: t.articles.map(e => mapEssay(e, lang))
  }));
};

export const getTopicById = (topicId: string, lang: Language = 'en'): Topic | undefined => {
  const t = rawTopics.find(item => item.topic_id === topicId);
  if (!t) return undefined;
  return {
    topic_id: t.topic_id,
    topic_title: t.topic_title[lang] || t.topic_title.en,
    articles: t.articles.map(e => mapEssay(e, lang))
  };
};

export const getEssays = (lang: Language = 'en'): Essay[] => {
  return rawEssays.map(e => mapEssay(e, lang));
};

export const getEssayBySlug = (slug: string, lang: Language = 'en'): Essay | undefined => {
  const e = rawEssays.find(item => item.slug === slug);
  if (!e) return undefined;
  return mapEssay(e, lang);
};

export const getRelatedEssaysInTopic = (slug: string, lang: Language = 'en'): Essay[] => {
  const current = rawEssays.find(item => item.slug === slug);
  if (!current || !current.topicId) return [];
  return rawEssays
    .filter(item => item.topicId === current.topicId && item.slug !== slug)
    .map(item => mapEssay(item, lang));
};

export const essays = getEssays('en');
