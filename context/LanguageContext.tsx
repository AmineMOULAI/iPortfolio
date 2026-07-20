"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations, TranslationDictionary } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem("app_lang") as Language;
    if (saved && (saved === 'en' || saved === 'fr' || saved === 'ar')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app_lang", lang);
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const isRTL = language === 'ar';
  const t = translations[language];

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    if (isRTL) {
      document.body.classList.add('rtl-arabic');
    } else {
      document.body.classList.remove('rtl-arabic');
    }
  }, [dir, language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isRTL }}>
      <div dir={dir} className={isRTL ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
