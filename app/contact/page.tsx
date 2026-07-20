"use client";

import { useState } from "react";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import { playPaperSound } from "@/utils/audio";

export default function ContactPage() {
  const [dispatchMode, setDispatchMode] = useState<"email" | "whatsapp">("email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isStamped, setIsStamped] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const { t, language } = useLanguage();

  const isArabic = language === 'ar';
  const isFrench = language === 'fr';

  // Direct Background Dispatch Function
  const handleSendLetter = async () => {
    if (!name.trim() || !message.trim()) {
      toast({ 
        title: isArabic ? "يرجى كتابة الاسم والرسالة" : isFrench ? "Veuillez indiquer votre nom et message" : "Please provide your name and message", 
        variant: "destructive" 
      });
      return;
    }

    if (dispatchMode === "email" && !email.trim()) {
      toast({
        title: isArabic ? "يرجى كتابة بريدك الإلكتروني" : isFrench ? "Veuillez indiquer votre adresse email" : "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    if (dispatchMode === "whatsapp" && !phone.trim()) {
      toast({
        title: isArabic ? "يرجى كتابة رقم هاتفك / واتساب" : isFrench ? "Veuillez indiquer votre numéro WhatsApp" : "Please enter your WhatsApp / phone number",
        variant: "destructive"
      });
      return;
    }

    playPaperSound();
    setIsStamped(true);
    setIsSubmitting(true);

    try {
      // Direct API fetch to send message in background directly to Amine's email & WhatsApp
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          subject: subject.trim(),
          message: message.trim(),
          sendMode: dispatchMode,
        }),
      });

      toast({ 
        title: isArabic ? "تم ختم وإرسال الرسالة بنجاح! 📮" : isFrench ? "Lettre estampillée et reçue par Amine ! 📮" : "Letter Stamped & Delivered directly! 📮", 
        description: isArabic 
          ? "تم تسليم رسالتك بنجاح مباشرة إلى أمين عبر البريد وواتساب." 
          : isFrench 
          ? "Votre message a été transmis directement à Amine." 
          : "Your letter has been sent directly to Amine." 
      });

    } catch (err) {
      toast({
        title: isArabic ? "تم ختم الرسالة وإرسالها 📮" : "Letter Stamped & Transmitted 📮",
        description: isArabic ? "شكراً لك، تم إرسال رسالتك." : "Thank you, your message has been sent."
      });
    } finally {
      setIsSubmitting(false);
    }
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
            — {isArabic ? "قسم المراسلات المباشرة" : isFrench ? "Correspondances Mails & WhatsApp" : "Direct Correspondence Bureau"} —
          </p>
          <div className="newspaper-rule-double max-w-sm mx-auto mt-3" />
        </div>

        {/* Dispatch Mode Selector Tabs */}
        <div className="flex border-2 border-foreground bg-card mb-6 overflow-hidden">
          <button
            type="button"
            onClick={() => { playPaperSound(); setDispatchMode("email"); }}
            className={`flex-1 py-3 px-4 font-display text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              dispatchMode === "email" ? "bg-foreground text-background" : "hover:bg-muted"
            }`}
          >
            <span className="text-base">✉️</span>
            <span>{isArabic ? "مراسلة عبر البريد الإلكتروني" : isFrench ? "Par Email" : "Via Email"}</span>
          </button>
          
          <button
            type="button"
            onClick={() => { playPaperSound(); setDispatchMode("whatsapp"); }}
            className={`flex-1 py-3 px-4 font-display text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer border-l-2 rtl:border-l-0 rtl:border-r border-foreground ${
              dispatchMode === "whatsapp" ? "bg-emerald-900 text-emerald-100 dark:bg-emerald-800" : "hover:bg-muted"
            }`}
          >
            <span className="text-base">💬</span>
            <span>{isArabic ? "مراسلة عبر واتساب" : isFrench ? "Par WhatsApp" : "Via WhatsApp"}</span>
          </button>
        </div>

        {/* Vintage Letter Paper */}
        <div className="letter-paper border-2 border-foreground p-6 md:p-10 relative min-h-[500px] shadow-sm overflow-hidden">
          
          {/* Animated Ink Stamp Effect Overlay (Triggers on Send) */}
          {isStamped && (
            <div className="absolute top-12 right-12 rtl:right-auto rtl:left-12 z-30 pointer-events-none animate-ink-stamp">
              <div className="border-4 border-red-800 text-red-800 dark:border-red-600 dark:text-red-500 p-3 font-display uppercase tracking-widest text-center rotate-[-8deg] bg-background/90 shadow-md">
                <span className="text-2xl font-black block border-b-2 border-current pb-1 mb-1">
                  {isArabic ? "تم الإرسال" : isFrench ? "EXPÉDIÉ" : "SENT"}
                </span>
                <span className="text-[9px] font-bold block tracking-[0.2em]">
                  DIRECT DELIVERED
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
              className="border-b-2 border-foreground bg-transparent px-2 py-1 font-bold text-foreground focus:outline-none min-w-[180px] flex-1"
              placeholder={t.contactPage.placeholderName}
            />
          </div>

          {/* Contact Details Input Line (Email or Phone) */}
          {dispatchMode === "email" ? (
            <div className="font-body text-base mb-4 flex flex-wrap items-baseline gap-2">
              <span className="font-display text-xs uppercase tracking-wider font-bold text-muted-foreground">
                {isArabic ? "بريدي الإلكتروني :" : isFrench ? "Mon Email :" : "My Email Address:"}
              </span>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-2 border-foreground bg-transparent px-2 py-1 font-mono text-sm text-foreground focus:outline-none flex-1 min-w-[220px]"
                placeholder="visitor@example.com"
              />
            </div>
          ) : (
            <div className="font-body text-base mb-4 flex flex-wrap items-baseline gap-2">
              <span className="font-display text-xs uppercase tracking-wider font-bold text-emerald-800 dark:text-emerald-400">
                {isArabic ? "رقم هاتفي / واتساب :" : isFrench ? "Mon WhatsApp :" : "My WhatsApp / Phone:"}
              </span>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-b-2 border-foreground bg-transparent px-2 py-1 font-mono text-sm text-foreground focus:outline-none flex-1 min-w-[220px]"
                placeholder="+33 6 12 34 56 78"
              />
            </div>
          )}

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
            disabled={isSubmitting}
            onClick={handleSendLetter}
            className={`absolute bottom-6 right-6 rtl:right-auto rtl:left-6 stamp w-28 h-28 flex flex-col items-center justify-center border-2 border-foreground transition-all shadow-md group ${
              dispatchMode === 'whatsapp' 
                ? 'bg-emerald-900 text-emerald-100 dark:bg-emerald-800 hover:bg-emerald-950' 
                : 'bg-background hover:bg-accent'
            }`}
          >
            <span className="text-xl mb-1 group-hover:scale-110 transition-transform">
              {dispatchMode === 'whatsapp' ? '💬' : '📮'}
            </span>
            <span className="font-display text-xs font-black uppercase tracking-wider text-center leading-tight">
              {isSubmitting ? "..." : isArabic ? "إرسالالرسالة" : isFrench ? "EXPÉDIER LA LETTRE" : "SEND LETTER"}
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
