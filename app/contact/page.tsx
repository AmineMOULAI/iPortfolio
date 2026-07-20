"use client";

import { useState } from "react";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import { playPaperSound } from "@/utils/audio";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isStamped, setIsStamped] = useState(false);

  const { toast } = useToast();
  const { t, language } = useLanguage();

  const isArabic = language === 'ar';
  const isFrench = language === 'fr';

  const emailTarget = "moulaiamine01@gmail.com";
  const whatsappNumber = "33745943735";

  // Dispatch Letter via API (Email) and WhatsApp with Ink Stamp Animation
  const handleSendLetter = async () => {
    if (!name.trim() || !message.trim()) {
      toast({ 
        title: isArabic ? "يرجى ملء جميع الحقول" : isFrench ? "Veuillez remplir les champs" : "Please fill in all required fields", 
        variant: "destructive" 
      });
      return;
    }

    playPaperSound();
    setIsStamped(true);

    const emailSubject = subject.trim() 
      ? `[Gazette Letter] ${subject}` 
      : `[Gazette Letter] Message from ${name}`;

    const formattedMessage = isArabic
      ? `السلام عليكم عزيزي أمين،\n\nأنا ${name}.\nموضوع الرسالة: ${subject || 'مراسلة جديدة'}\n\nنص الرسالة:\n${message}\n\n— مُرسلة عبر موقع الجريدة الشخصية`
      : `Dear Amine,\n\nMy name is ${name}.\nSubject: ${subject || 'General Inquiry'}\n\nMessage:\n${message}\n\n— Sent via Portfolio Gazette`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    // Dispatch background email notification to moulaiamine01@gmail.com
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      }).catch(() => {});
    } catch {
      // Ignore background fetch error
    }

    toast({ 
      title: isArabic ? "تم ختم وإرسال الرسالة! 📮" : isFrench ? "Lettre estampillée et envoyée ! 📮" : "Letter Stamped & Sent! 📮", 
      description: isArabic ? "جاري فتح واتساب والبريد الإلكتروني لنقل رسالتك لأمين..." : "Sending message to Amine via Email & WhatsApp..." 
    });

    // Launch WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);
  };

  const subjectLabel = isArabic ? "موضوع الرسالة :" : isFrench ? "Objet de la lettre :" : "Subject of Letter:";

  return (
    <PageLayout pageNumber={20} sectionName={t.nav.letters}>
      <div className="max-w-2xl mx-auto">
        
        {/* Newspaper Section Banner */}
        <div className="border-b-2 border-foreground pb-4 mb-8 text-center">
          <div className="newspaper-rule-double max-w-sm mx-auto mb-3" />
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-1">
            {t.contactPage.title}
          </h1>
          <p className="font-display text-xs uppercase tracking-[0.25em] font-bold text-muted-foreground">
            — {isArabic ? "قسم المراسلات والرسائل" : isFrench ? "Lettres à la Rédaction" : "Letters to the Editor"} —
          </p>
          <div className="newspaper-rule-double max-w-sm mx-auto mt-3" />
        </div>

        {/* Vintage Letter Paper */}
        <div className="letter-paper border-2 border-foreground p-6 md:p-10 relative min-h-[500px] shadow-sm overflow-hidden">
          
          {/* Animated Ink Stamp Effect Overlay (Appears on Submit) */}
          {isStamped && (
            <div className="absolute top-12 right-12 rtl:right-auto rtl:left-12 z-30 pointer-events-none animate-ink-stamp">
              <div className="border-4 border-red-800 text-red-800 dark:border-red-600 dark:text-red-500 p-3 font-display uppercase tracking-widest text-center rotate-[-8deg] bg-background/90 shadow-md">
                <span className="text-2xl font-black block border-b-2 border-current pb-1 mb-1">
                  {isArabic ? "تم الإرسال" : isFrench ? "EXPÉDIÉ" : "SENT"}
                </span>
                <span className="text-[9px] font-bold block tracking-[0.2em]">
                  GAZETTE OFFICIAL STAMP
                </span>
                <span className="text-[8px] font-mono block mt-0.5">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          )}

          {/* Salutation */}
          <p className="font-body text-xl font-bold mb-4">{t.contactPage.dearAmine}</p>
          
          <p className="font-body text-sm text-muted-foreground italic mb-6">
            {t.contactPage.cameAcross}
          </p>
          
          {/* Name Input Line */}
          <div className="font-body text-base mb-4 flex flex-wrap items-baseline gap-2">
            <span>{t.contactPage.myNameIs}</span>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b-2 border-foreground bg-transparent px-2 py-1 font-bold text-foreground focus:outline-none min-w-[200px] flex-1"
              placeholder={t.contactPage.placeholderName}
            />
            <span>{t.contactPage.andWritingToSay}</span>
          </div>

          {/* Subject Line */}
          <div className="font-body text-base mb-6 flex flex-wrap items-baseline gap-2 border-b border-border-light pb-2">
            <span className="font-display text-xs uppercase tracking-wider font-bold text-muted-foreground">{subjectLabel}</span>
            <input 
              type="text" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border-b border-foreground/60 bg-transparent px-2 py-1 font-body text-sm text-foreground focus:outline-none flex-1"
              placeholder={isArabic ? "موضوع الرسالة..." : isFrench ? "Objet..." : "Subject..."}
            />
          </div>

          {/* Main Message Textarea */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent font-body text-base md:text-lg leading-relaxed resize-none focus:outline-none min-h-[180px] border-b-2 border-border-light placeholder:italic placeholder:text-muted-foreground/60"
            placeholder={t.contactPage.placeholderMessage}
          />

          {/* Sign-off */}
          <div className="mt-6 font-body">
            <p className="text-sm text-muted-foreground">{t.contactPage.withRegards}</p>
            <p className="text-lg font-bold italic mt-1">{name || t.contactPage.placeholderName}</p>
          </div>

          {/* Single Animated Stamp Submit Button */}
          <button 
            type="button"
            onClick={handleSendLetter}
            className="absolute bottom-6 right-6 rtl:right-auto rtl:left-6 stamp w-28 h-28 flex flex-col items-center justify-center bg-background hover:bg-accent border-2 border-foreground transition-all shadow-md group"
          >
            <span className="text-xl mb-1 group-hover:scale-110 transition-transform">📮</span>
            <span className="font-display text-xs font-black uppercase tracking-wider text-center leading-tight">
              {isArabic ? "إرسالالرسالة" : isFrench ? "EXPÉDIER LA LETTRE" : "SEND LETTER"}
            </span>
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 pt-4 border-t-2 border-foreground flex justify-between text-sm">
          <PageLink href="/reading" className="uppercase tracking-widest">← {t.readingPage.title}</PageLink>
          <PageLink href="/" className="uppercase tracking-widest">{t.projectsPage.backToFront}</PageLink>
        </div>
      </div>
    </PageLayout>
  );
}
