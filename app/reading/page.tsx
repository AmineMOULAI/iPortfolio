"use client";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import BookQuotesWidget from "@/components/newspaper/BookQuotesWidget";
import { getBooks } from "@/data/books";
import { useLanguage } from "@/context/LanguageContext";

export default function ReadingPage() {
  const { t, language } = useLanguage();
  const booksList = getBooks(language);

  const subHeaderTitle = language === 'fr' 
    ? "Gazette Littéraire & Répertoire de Lecture" 
    : language === 'ar' 
    ? "الجريدة الأدبية وفهرس القراءات" 
    : "Literary Gazette & Reading Repertoire";

  return (
    <PageLayout pageNumber={15} sectionName={t.nav.reading}>
      {/* Old-Style Newspaper Section Banner */}
      <div className="border-b-2 border-foreground pb-4 mb-8 text-center">
        <div className="newspaper-rule-double max-w-lg mx-auto mb-3" />
        <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight mb-2">
          {t.readingPage.title}
        </h1>
        <p className="font-display text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">
          — {subHeaderTitle} —
        </p>
        <p className="font-body text-sm text-muted-foreground italic mt-2">
          {t.readingPage.subtitle}
        </p>
        <div className="newspaper-rule-double max-w-lg mx-auto mt-3" />
      </div>

      {/* Featured Non-Repeating Book Insight Quote Banner */}
      <BookQuotesWidget />

      {/* Old-Style Newspaper Grid of Literary Notices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksList.map((book) => (
          <PageLink key={book.slug} href={`/reading/${book.slug}`} className="group block">
            <article className="border border-foreground/80 p-5 bg-background hover:bg-accent/40 transition-all duration-200 h-full flex flex-col justify-between relative shadow-xs">
              
              {/* Vintage Corner Accents */}
              <div className="border-b border-border-light pb-3 mb-3">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Notice No. {booksList.indexOf(book) + 1}
                  </span>
                </div>

                {/* Title & Author */}
                <h2 className="font-display text-xl font-bold leading-tight group-hover:underline underline-offset-4 decoration-2 mb-1">
                  {book.title}
                </h2>
                <p className="font-body text-xs italic text-muted-foreground">
                  By {book.author}
                </p>
              </div>

              {/* Classic Gazette Classification Tags (NO STATUS) */}
              <div className="mt-2 pt-2 border-t border-border-light flex flex-wrap gap-2 text-[11px] font-body text-muted-foreground italic">
                <span>〔 {book.category} 〕</span>
                <span>〔 {book.dimension} 〕</span>
              </div>

              {/* View Notice Prompt */}
              <div className="mt-4 pt-2 border-t border-border text-center">
                <span className="font-display text-[10px] uppercase tracking-widest text-foreground group-hover:underline">
                  Read Notice →
                </span>
              </div>
            </article>
          </PageLink>
        ))}
      </div>

      <div className="mt-12 pt-4 border-t-2 border-foreground flex justify-between text-sm">
        <PageLink href="/essays" className="uppercase tracking-widest">{t.essaysPage.allEssays}</PageLink>
        <PageLink href="/contact" className="uppercase tracking-widest">{t.readingPage.toLetters}</PageLink>
      </div>
    </PageLayout>
  );
}
