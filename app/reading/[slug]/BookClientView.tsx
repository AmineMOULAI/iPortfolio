"use client";

import { notFound } from "next/navigation";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import { getBookBySlug, getBooks } from "@/data/books";
import { useLanguage } from "@/context/LanguageContext";

interface BookClientViewProps {
  slug: string;
}

export default function BookClientView({ slug }: BookClientViewProps) {
  const { t, language } = useLanguage();
  const book = getBookBySlug(slug, language);
  const booksList = getBooks(language);

  if (!book) {
    notFound();
  }

  const bookIndex = booksList.findIndex(b => b.slug === slug);
  const pageNumber = 16 + (bookIndex >= 0 ? bookIndex : 0);

  return (
    <PageLayout pageNumber={pageNumber} sectionName={t.nav.reading}>
      {/* Back navigation */}
      <nav className="mb-6 pb-3 border-b border-border-light">
        <PageLink href="/reading" className="text-sm uppercase tracking-widest text-muted-foreground">
          ← {t.readingPage.title}
        </PageLink>
      </nav>

      {/* Book Presentation Section - Old Newspaper Style */}
      <article className="max-w-3xl mx-auto">
        
        {/* Newspaper Column Notice Header */}
        <div className="text-center mb-8 border-b-2 border-foreground pb-6">
          <div className="newspaper-rule-double max-w-sm mx-auto mb-3" />
          <span className="font-display text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">
            — LITERARY NOTICE No. {bookIndex + 1} —
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mt-2 mb-1">
            {book.title}
          </h1>
          <p className="font-body text-xl text-muted-foreground italic">
            By {book.author}
          </p>
          <div className="newspaper-rule-double max-w-sm mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-border">
          
          {/* Editorial Book Cover Mockup (Vintage Frame) */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className={`w-48 h-68 border-2 border-foreground p-6 shadow-md flex flex-col justify-between text-center relative ${book.coverBg || 'bg-card text-foreground'}`}>
              <div className="border border-current/40 p-4 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest block opacity-70 mb-2 font-display">
                    {book.category}
                  </span>
                  <h2 className="font-display text-lg font-bold leading-tight uppercase">
                    {book.title}
                  </h2>
                </div>
                <div>
                  <div className="w-8 h-0.5 bg-current mx-auto mb-2 opacity-50" />
                  <p className="text-xs italic font-body opacity-90">
                    {book.author}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Metadata Notice (NO STATUS BADGE) */}
          <div className="md:col-span-8">
            <div className="border border-border-light p-4 bg-muted/20 mb-6 font-body text-sm space-y-2">
              <div className="flex justify-between border-b border-border-light pb-2">
                <span className="text-muted-foreground uppercase font-display text-xs tracking-wider">Category</span>
                <span className="font-bold">{book.category}</span>
              </div>
              <div className="flex justify-between border-b border-border-light pb-2">
                <span className="text-muted-foreground uppercase font-display text-xs tracking-wider">Dimension</span>
                <span className="font-bold">{book.dimension}</span>
              </div>
              {book.dates && (
                <div className="flex justify-between pt-1 text-xs text-muted-foreground">
                  <span className="uppercase font-display tracking-wider">Reading Period</span>
                  <span className="italic">{book.dates}</span>
                </div>
              )}
            </div>

            {/* Key Insights & Takeaways */}
            <div>
              <h3 className="font-display text-xs uppercase tracking-[0.2em] font-bold mb-3 border-b-2 border-foreground pb-1">
                Critical Insights & Reflections
              </h3>
              <ul className="space-y-3 font-body text-base leading-relaxed">
                {book.insights.map((insight, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-foreground font-bold">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center text-sm font-display uppercase tracking-widest pt-4 border-t-2 border-foreground">
          <PageLink href="/reading">
            ← {t.readingPage.title}
          </PageLink>

          {bookIndex < booksList.length - 1 && (
            <PageLink href={`/reading/${booksList[bookIndex + 1].slug}`}>
              Next: {booksList[bookIndex + 1].title} →
            </PageLink>
          )}
        </div>
      </article>
    </PageLayout>
  );
}
