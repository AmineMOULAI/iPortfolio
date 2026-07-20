"use client";

import { notFound } from "next/navigation";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import { getTopicById, getTopics } from "@/data/essays";
import { useLanguage } from "@/context/LanguageContext";

interface TopicClientViewProps {
  topicId: string;
}

export default function TopicClientView({ topicId }: TopicClientViewProps) {
  const { t, language } = useLanguage();
  const topic = getTopicById(topicId, language);
  const allTopics = getTopics(language);

  if (!topic) {
    notFound();
  }

  const topicIndex = allTopics.findIndex(t => t.topic_id === topicId);
  const prevTopic = topicIndex > 0 ? allTopics[topicIndex - 1] : null;
  const nextTopic = topicIndex < allTopics.length - 1 ? allTopics[topicIndex + 1] : null;

  const specialEditionLabel = language === 'ar' 
    ? "— طبعة خاصة : موضوع اليوم —" 
    : language === 'fr' 
    ? "— ÉDITION SPÉCIALE : THÈME DU JOUR —" 
    : "— SPECIAL EDITION : TOPIC OF THE DAY —";

  const readMoreText = language === 'ar' 
    ? "قراءة المقال كاملاً ←" 
    : language === 'fr' 
    ? "Lire l'essai complet →" 
    : "Read Full Essay →";

  const articleLabel = language === 'ar' ? 'مقال رقم' : language === 'fr' ? 'ARTICLE N°' : 'ARTICLE NO.';
  const backToEssaysLabel = language === 'ar' ? '← دليل مواضيع المقالات' : language === 'fr' ? '← Index des Thèmes' : '← Topic Index';

  return (
    <PageLayout pageNumber={10 + topicIndex} sectionName={`${t.nav.essays} · ${topic.topic_title}`}>
      {/* Top Breadcrumb Nav */}
      <nav className="mb-6 pb-2 border-b border-border-light flex justify-between items-center text-xs font-display uppercase tracking-widest text-muted-foreground flex-wrap gap-2">
        <PageLink href="/essays" className="hover:underline">
          {backToEssaysLabel}
        </PageLink>
        <span className="font-mono text-xs text-muted-foreground">
          {topic.articles.length} {language === 'ar' ? 'مقالات' : language === 'fr' ? 'articles' : 'articles'}
        </span>
      </nav>

      {/* Topic Masthead Header */}
      <header className="border-b-2 border-foreground pb-6 mb-8 text-center">
        <div className="newspaper-rule-double max-w-md mx-auto mb-3" />
        
        <span className="font-display text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground block mb-2">
          {specialEditionLabel}
        </span>

        <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight mb-3">
          {topic.topic_title}
        </h1>

        <div className="newspaper-rule-double max-w-md mx-auto mt-4" />
      </header>

      {/* Articles Grid in Classic Newspaper Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topic.articles.map((essay, index) => (
          <article 
            key={essay.slug} 
            className="border border-foreground/80 p-6 bg-background flex flex-col justify-between hover:shadow-xs transition-all duration-200"
          >
            <div>
              {/* Header Meta */}
              <div className="flex justify-between items-baseline border-b border-border-light pb-2 mb-3">
                <span className="font-display text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                  {articleLabel} {index + 1}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {essay.date}
                </span>
              </div>

              {/* Headline */}
              <PageLink href={`/essays/${essay.slug}`} className="group">
                <h2 className="font-display text-2xl font-bold leading-tight group-hover:underline underline-offset-4 decoration-2 mb-2">
                  {essay.title}
                </h2>
              </PageLink>

              {/* Subtitle / Teaser */}
              <p className="font-body text-sm italic text-muted-foreground mb-4">
                {essay.subtitle}
              </p>

              {/* Preview with Drop Cap */}
              <div className="font-body text-sm leading-relaxed text-foreground/90 border-t border-border-light pt-3">
                <p className="drop-cap line-clamp-4">
                  {essay.content[0]}
                </p>
              </div>
            </div>

            {/* Read Essay Action */}
            <div className="mt-6 pt-3 border-t-2 border-foreground text-center">
              <PageLink 
                href={`/essays/${essay.slug}`} 
                className="font-display text-xs uppercase tracking-widest text-foreground font-bold hover:underline"
              >
                {readMoreText}
              </PageLink>
            </div>
          </article>
        ))}
      </div>

      {/* Topic Pagination Footer */}
      <div className="mt-12 pt-4 border-t-2 border-foreground flex justify-between items-center text-xs font-display uppercase tracking-widest flex-wrap gap-4">
        {prevTopic ? (
          <PageLink href={`/essays/topic/${prevTopic.topic_id}`} className="hover:underline">
            ← {prevTopic.topic_title}
          </PageLink>
        ) : (
          <PageLink href="/essays" className="hover:underline">
            {backToEssaysLabel}
          </PageLink>
        )}

        <PageLink href="/essays" className="font-bold border border-foreground px-3 py-1">
          {language === 'ar' ? 'عرض جميع المواضيع' : language === 'fr' ? 'Tous les thèmes' : 'All Topics'}
        </PageLink>

        {nextTopic ? (
          <PageLink href={`/essays/topic/${nextTopic.topic_id}`} className="hover:underline">
            {nextTopic.topic_title} →
          </PageLink>
        ) : (
          <PageLink href="/reading" className="hover:underline">
            {t.essaysPage.toReading}
          </PageLink>
        )}
      </div>
    </PageLayout>
  );
}
