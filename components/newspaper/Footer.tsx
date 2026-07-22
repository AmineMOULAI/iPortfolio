"use client";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const locale = language === 'fr' ? 'fr-FR' : language === 'ar' ? 'ar-SA' : 'en-US';
  const lastUpdated = new Date().toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="mt-16 pt-8 border-t-2 border-foreground">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-body">
        <p>© {currentYear} {t.authorName}. {t.footer.rights}</p>
        <p className="italic">{t.footer.lastUpdated}: {lastUpdated}</p>
      </div>
      <div className="text-center mt-6 mb-4 flex flex-col items-center gap-2">
        <div className="inline-block border-t border-b border-border px-8 py-2">
          <span className="font-display text-xs uppercase tracking-[0.3em]">
            {t.footer.endOfEdition}
          </span>
        </div>
        <div className="mt-1">
          <a
            href="/admin"
            className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground opacity-40 hover:opacity-100 transition-opacity hover:underline"
          >
            🔒 Pressroom Desk
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
