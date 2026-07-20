"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

const languages: { code: Language; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'ar', label: 'العربية', name: 'العربية' }
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center border border-foreground divide-x divide-foreground text-xs font-display uppercase tracking-wider bg-background relative z-20">
      {languages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setLanguage(lang.code);
            }}
            title={lang.name}
            className={`px-2.5 py-1 transition-colors cursor-pointer select-none ${
              isActive
                ? "bg-foreground text-background font-bold"
                : "hover:bg-accent hover:text-foreground text-foreground"
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
