"use client";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import { getTopics, getEssays } from "@/data/essays";
import { useLanguage } from "@/context/LanguageContext";

export default function EssaysListPage() {
  const { t, language } = useLanguage();
  const topicsList = getTopics(language);
  const allEssays = getEssays(language);

  const bannerSubtitle = language === 'fr' 
    ? "Grands Thèmes Philosophies & Discours" 
    : language === 'ar' 
    ? "دليل المواضيع الفلسفية والتأملات الفكرية" 
    : "Directory of Philosophical Topics & Discourses";

  const exploreTopicText = language === 'ar' 
    ? "تصفّح العدد الخاص بهذا الموضوع ←" 
    : language === 'fr' 
    ? "Consulter l'Édition du Thème →" 
    : "Explore Topic Edition →";

  const articlesInTopicLabel = language === 'ar' ? 'مقالات في هذا الموضوع' : language === 'fr' ? 'articles contenus' : 'articles contained';
  const issueVolLabel = language === 'ar' ? 'موضوع رقم' : language === 'fr' ? 'THÈME N°' : 'TOPIC VOL.';
  const readArticleText = language === 'ar' ? 'اقرأ المقال' : language === 'fr' ? 'Lire' : 'Read';

  return (
    <PageLayout pageNumber={10} sectionName={t.nav.essays}>
      {/* Newspaper Section Banner */}
      <div className="border-b-2 border-foreground pb-4 mb-8 text-center">
        <div className="newspaper-rule-double max-w-md mx-auto mb-3" />
        <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight mb-2">
          {t.essaysPage.title}
        </h1>
        <p className="font-display text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">
          — {bannerSubtitle} —
        </p>
        <p className="font-body text-sm text-muted-foreground italic mt-2">
          {t.essaysPage.subtitle}
        </p>
        <div className="newspaper-rule-double max-w-md mx-auto mt-3" />
      </div>

      {/* TOPIC EDITIONS GRID (Newspaper Special Issues) */}
      <div className="mb-12">
        <div className="border-b-2 border-foreground pb-2 mb-6 flex justify-between items-end flex-wrap gap-2">
          <h2 className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider">
            {language === 'ar' ? 'مواضيع المقالات والجريدة' : language === 'fr' ? 'Fascicules & Thèmes Principaux' : 'Topic Editions & Themes'}
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            {topicsList.length} {language === 'ar' ? 'مواضيع رئيسية' : language === 'fr' ? 'thèmes structurés' : 'structured topics'} · {allEssays.length} {language === 'ar' ? 'مقالات' : language === 'fr' ? 'articles' : 'articles'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topicsList.map((topic, index) => (
            <section 
              key={topic.topic_id}
              className="border-2 border-foreground bg-card p-6 flex flex-col justify-between hover:shadow-sm transition-all"
            >
              <div>
                {/* Topic Header Meta */}
                <div className="flex justify-between items-center border-b border-border-light pb-2 mb-4">
                  <span className="font-display text-xs uppercase font-bold tracking-[0.25em] bg-foreground text-background px-2.5 py-0.5">
                    {issueVolLabel} 0{index + 1}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground italic">
                    {topic.articles.length} {articlesInTopicLabel}
                  </span>
                </div>

                {/* Topic Title */}
                <PageLink href={`/essays/topic/${topic.topic_id}`} className="group">
                  <h3 className="font-display text-3xl md:text-4xl font-black leading-tight group-hover:underline underline-offset-4 decoration-2 mb-4">
                    {topic.topic_title}
                  </h3>
                </PageLink>

                {/* Articles Preview Table of Contents */}
                <div className="border-t border-b border-border-light py-3 my-4 space-y-3 font-body">
                  <span className="text-[11px] font-display uppercase tracking-widest text-muted-foreground font-bold block mb-1">
                    {language === 'ar' ? 'محتويات هذا الموضوع :' : language === 'fr' ? 'Articles inclus dans ce thème :' : 'Articles in this topic:'}
                  </span>
                  <ul className="space-y-2">
                    {topic.articles.map((art, aIdx) => (
                      <li key={art.slug} className="flex justify-between items-baseline gap-2 text-sm">
                        <PageLink href={`/essays/${art.slug}`} className="hover:underline font-bold text-foreground line-clamp-1">
                          {aIdx + 1}. {art.title}
                        </PageLink>
                        <span className="font-mono text-[10px] text-muted-foreground shrink-0">{readArticleText} →</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t-2 border-foreground">
                <PageLink 
                  href={`/essays/topic/${topic.topic_id}`} 
                  className="block text-center font-display text-xs uppercase tracking-widest text-background bg-foreground py-3 font-bold hover:bg-foreground/80 transition-colors"
                >
                  {exploreTopicText}
                </PageLink>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="mt-12 pt-4 border-t-2 border-foreground flex justify-between text-sm">
        <PageLink href="/projects" className="uppercase tracking-widest">{t.essaysPage.backToProjects}</PageLink>
        <PageLink href="/reading" className="uppercase tracking-widest">{t.essaysPage.toReading}</PageLink>
      </div>
    </PageLayout>
  );
}
