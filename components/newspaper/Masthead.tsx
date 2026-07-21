"use client";
import Link from "next/link";
import Image from "next/image";
import { useNewspaper } from "@/context/NewspaperContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

interface MastheadProps {
  compact?: boolean;
}

const Masthead = ({ compact = false }: MastheadProps) => {
  const { pageInfo } = useNewspaper();
  const { t, language } = useLanguage();
  
  const locale = language === 'fr' ? 'fr-FR' : language === 'ar' ? 'ar-SA' : 'en-US';
  const today = new Date().toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const isArabic = language === 'ar';

  if (compact) {
    return (
      <header className="border-b border-foreground pb-4 mb-6">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <Link href="/" className="hover:opacity-70 transition-opacity flex items-center gap-3">
            {isArabic ? (
              <Image 
                src="/amine_kufi.png" 
                alt="أمين مولاي" 
                width={180}
                height={60}
                priority
                className="h-10 md:h-12 w-auto object-contain dark:invert"
              />
            ) : (
              <span className="font-display text-2xl md:text-3xl font-black tracking-tight uppercase">
                {t.authorName}
              </span>
            )}
          </Link>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="text-end">
              <span className="volume-info block">{pageInfo.sectionName}</span>
              <span className="text-xs text-muted-foreground font-body">
                {t.footer.vol} {pageInfo.volume}, {t.footer.no} {pageInfo.issue}
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b-2 border-foreground pb-6 mb-8">
      {/* Top dateline with volume info and language switcher */}
      <div className="flex justify-between items-center text-xs mb-4 font-body border-b border-border-light pb-2 flex-wrap gap-2">
        <span className="text-muted-foreground">{today}</span>
        <div className="flex items-center gap-4">
          <span className="volume-info">{t.footer.vol} {pageInfo.volume}, {t.footer.no} {pageInfo.issue}</span>
          <LanguageSwitcher />
        </div>
        <span className="text-muted-foreground">{t.datelineLocation}</span>
      </div>
      
      {/* Newspaper nameplate */}
      <div className="text-center py-4">
        <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
          {isArabic ? (
            <div className="flex flex-col items-center">
              <Image 
                src="/amine_kufi.png" 
                alt="أمين مولاي" 
                width={400}
                height={160}
                priority
                className="h-20 md:h-28 lg:h-32 w-auto mx-auto object-contain my-2 dark:invert"
              />
            </div>
          ) : (
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase mb-1">
              {t.authorName}
            </h1>
          )}
        </Link>
        <p className="font-body text-sm italic text-muted-foreground tracking-wide mt-1">
          {t.subhead}
        </p>
        <div className="newspaper-rule-double max-w-md mx-auto mt-4" />
      </div>

      {/* Navigation */}
      <nav className="flex justify-center flex-wrap gap-4 md:gap-8 mt-6 text-sm uppercase tracking-[0.15em] font-display items-center">
        <Link href="/" className="hover:underline underline-offset-4 decoration-2">{t.nav.frontPage}</Link>
        <Link href="/projects" className="hover:underline underline-offset-4 decoration-2">{t.nav.projects}</Link>
        <Link href="/essays" className="hover:underline underline-offset-4 decoration-2">{t.nav.essays}</Link>
        <Link href="/reading" className="hover:underline underline-offset-4 decoration-2">{t.nav.reading}</Link>
        <Link href="/contact" className="hover:underline underline-offset-4 decoration-2">{t.nav.letters}</Link>
        <Link href="/admin" className="hover:underline underline-offset-4 decoration-2 px-2 py-0.5 border border-foreground bg-muted font-bold text-xs">
          🗞️ {t.nav.editor}
        </Link>
      </nav>
    </header>
  );
};

export default Masthead;
