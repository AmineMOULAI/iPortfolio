"use client";

import { notFound } from "next/navigation";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import { getEssayBySlug, getEssays, getRelatedEssaysInTopic } from "@/data/essays";
import { useLanguage } from "@/context/LanguageContext";

interface EssayClientViewProps {
  slug: string;
}

export default function EssayClientView({ slug }: EssayClientViewProps) {
  const { t, language } = useLanguage();
  const essay = getEssayBySlug(slug, language);
  const essaysList = getEssays(language);
  const relatedArticles = getRelatedEssaysInTopic(slug, language);

  if (!essay) {
    notFound();
  }

  const essayIndex = essaysList.findIndex(e => e.slug === slug);
  const byline = language === 'ar' 
    ? `بقلم` 
    : language === 'fr' 
    ? `Par` 
    : `By`;

  const headerTitle = language === 'ar'
    ? "— الجريدة الفلسفية والدراسات الفكرية —"
    : language === 'fr'
    ? "— LA GAZETTE PHILOSOPHIQUE & DISCOURS —"
    : "— THE PHILOSOPHICAL GAZETTE & DISCOURSE —";

  const topicLabel = language === 'ar' ? 'الموضوع' : language === 'fr' ? 'THÈME' : 'TOPIC';
  const relatedTitle = language === 'ar' 
    ? 'مقالات أخرى في هذا الموضوع' 
    : language === 'fr' 
    ? 'Autres articles dans ce thème' 
    : 'More Articles in this Topic';

  // Helper function to format Quranic verses with calligraphic typography in PURE BLACK & WHITE
  const renderParagraph = (text: string, index: number) => {
    if (text.includes("﴿") && text.includes("﴾")) {
      const parts = text.split(/(﴿[^﴾]+﴾)/g);
      return (
        <p key={index} className={index === 0 ? "drop-cap leading-relaxed" : "leading-relaxed"}>
          {parts.map((part, pIdx) => {
            if (part.startsWith("﴿") && part.endsWith("﴾")) {
              return (
                <span 
                  key={pIdx} 
                  className="font-quran inline-block font-bold text-foreground bg-muted/40 px-2 py-0.5 my-1 border-b-2 border-foreground"
                  dir="rtl"
                >
                  {part}
                </span>
              );
            }
            return part;
          })}
        </p>
      );
    }

    return (
      <p key={index} className={index === 0 ? "drop-cap leading-relaxed" : "leading-relaxed"}>
        {text}
      </p>
    );
  };

  return (
    <PageLayout pageNumber={11 + (essayIndex >= 0 ? essayIndex : 0)} sectionName={t.nav.essays}>
      {/* Back navigation */}
      <nav className="mb-6 pb-2 border-b border-border-light flex justify-between items-center text-xs font-display uppercase tracking-widest text-muted-foreground flex-wrap gap-2">
        <PageLink href="/essays" className="hover:underline">
          ← {t.essaysPage.allEssays}
        </PageLink>
        {essay.topicTitle && (
          <span className="font-bold border border-foreground/50 px-2 py-0.5 text-foreground">
            {topicLabel}: {essay.topicTitle}
          </span>
        )}
        <span>{t.footer.no} {essayIndex + 1} · {essay.date}</span>
      </nav>

      {/* Main Essay Article - Pure Black & White Newspaper Style */}
      <article className="max-w-4xl mx-auto">
        
        {/* Newspaper Editorial Banner & Masthead Headline */}
        <header className="text-center mb-10 pb-6 border-b-2 border-foreground">
          <div className="newspaper-rule-double max-w-lg mx-auto mb-3" />
          
          <span className="font-display text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground block mb-2">
            {headerTitle}
          </span>

          {essay.topicTitle && (
            <div className="mb-3">
              <span className="inline-block bg-foreground text-background font-display text-[11px] uppercase font-bold tracking-[0.2em] px-3 py-1">
                {topicLabel}: {essay.topicTitle}
              </span>
            </div>
          )}

          <h1 className="font-display text-3xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            {essay.title}
          </h1>

          <p className="font-body text-xl text-muted-foreground italic max-w-2xl mx-auto mb-4 leading-relaxed">
            {essay.subtitle}
          </p>

          {/* Kufi Calligraphic Author Byline (Pure Black & White) */}
          <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-widest text-foreground pt-3 border-t border-border-light max-w-md mx-auto">
            <span>{byline}</span>
            {language === 'ar' ? (
              <img 
                src="/amine_kufi.png" 
                alt="أمين مولاي" 
                className="h-8 md:h-10 w-auto inline-block object-contain dark:invert"
              />
            ) : (
              <span className="font-display font-bold text-base px-2 py-0.5 border border-foreground bg-background">
                {t.authorName}
              </span>
            )}
            <span>•</span>
            <span className="text-xs text-muted-foreground">{essay.date}</span>
          </div>

          <div className="newspaper-rule-double max-w-lg mx-auto mt-4" />
        </header>

        {/* Newspaper Article Body */}
        <div className="font-body text-lg leading-relaxed text-foreground space-y-6">
          {essay.content.map((paragraph, index) => (
            <div key={index} className="relative">
              {renderParagraph(paragraph, index)}
              {(index + 1) % 3 === 0 && index !== essay.content.length - 1 && (
                <div className="w-24 h-0.5 bg-foreground/30 mx-auto my-8" />
              )}
            </div>
          ))}
        </div>

        {/* Footnotes & Vocabulary Notes Section (Pure Black & White Frame) */}
        {essay.notes && essay.notes.length > 0 && (
          <section className="mt-12 pt-6 border-2 border-foreground p-6 bg-card relative shadow-xs">
            <div className="border-b border-border pb-2 mb-4 flex justify-between items-baseline">
              <h3 className="font-display text-xs uppercase tracking-[0.25em] font-bold text-foreground">
                {language === 'ar' ? '〔 الهوامش والملاحظات والقاموس 〕' : language === 'fr' ? '〔 Notes, Lexique & Définitions 〕' : '〔 Notes, Lexicon & Definitions 〕'}
              </h3>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">
                {language === 'ar' ? 'هوامش الجريدة' : 'Gazette Footnotes'}
              </span>
            </div>
            <ol className="space-y-3 font-body text-sm text-foreground/90 list-decimal list-inside leading-relaxed">
              {essay.notes.map((note, i) => (
                <li key={i} className="pl-1">
                  <span className="font-medium">{note}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Quranic & Academic References Section (Pure Black & White Calligraphy Frame) */}
        {essay.references && essay.references.length > 0 && (
          <section className="mt-6 pt-4 border-2 border-foreground p-5 bg-background">
            <h4 className="font-display text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-3 pb-2 border-b border-foreground flex items-center gap-2">
              <span className="text-foreground text-base">۞</span>
              <span>{language === 'ar' ? 'المراجع والآيات القرآنيّة' : language === 'fr' ? 'Références & Citations Coraniques' : 'Textual References & Citations'}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-body text-sm text-foreground">
              {essay.references.map((ref, i) => (
                <div key={i} className="flex gap-2 items-start bg-muted/20 p-2.5 border border-border">
                  <span className="text-foreground font-bold font-quran text-lg">﴿</span>
                  <span className={ref.includes("﴿") ? "font-quran text-base leading-relaxed text-foreground" : "text-xs font-body text-muted-foreground"}>
                    {ref}
                  </span>
                  {ref.includes("﴿") && <span className="text-foreground font-bold font-quran text-lg">﴾</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Articles in this Topic Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-12 pt-6 border-t-2 border-foreground">
            <h3 className="font-display text-lg uppercase font-bold tracking-wider mb-4 border-b border-foreground/30 pb-2">
              {relatedTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <div key={rel.slug} className="border border-border p-4 hover:border-foreground transition-colors">
                  <PageLink href={`/essays/${rel.slug}`} className="group">
                    <h4 className="font-display font-bold text-lg leading-tight group-hover:underline mb-1">
                      {rel.title}
                    </h4>
                  </PageLink>
                  <p className="font-body text-xs text-muted-foreground italic mb-2">
                    {rel.subtitle}
                  </p>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">
                    {rel.date}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      <div className="mt-12 pt-6 border-t-2 border-foreground flex justify-between text-sm">
        <PageLink href="/essays" className="uppercase tracking-widest">{t.essaysPage.allEssays}</PageLink>
        <PageLink href="/" className="uppercase tracking-widest">{t.projectsPage.backToFront}</PageLink>
      </div>
    </PageLayout>
  );
}
