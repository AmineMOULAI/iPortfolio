"use client";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import SectionHeader from "@/components/newspaper/SectionHeader";
import EssayQuotesWidget from "@/components/newspaper/EssayQuotesWidget";
import BookQuotesWidget from "@/components/newspaper/BookQuotesWidget";
import { getProjects } from "@/data/projects";
import { getEssays } from "@/data/essays";
import { getBooks } from "@/data/books";
import { useLanguage } from "@/context/LanguageContext";

export default function Index() {
  const { t, language } = useLanguage();
  
  const featuredProjects = getProjects(language).slice(0, 3);
  const featuredEssays = getEssays(language).slice(0, 3);
  const featuredBooks = getBooks(language).slice(0, 2);

  return (
    <PageLayout pageNumber={1} sectionName={t.nav.frontPage} showMasthead={true} showFullMasthead={true} showSidebar={true}>
      {/* Main Front Page Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Lead Story - About Me */}
        <article id="self" className="md:col-span-8 md:border-r md:border-border-light md:pr-6 rtl:md:border-r-0 rtl:md:border-l rtl:md:pl-6 rtl:md:pr-0">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 uppercase">
            {t.home.heroTitle}
          </h2>
          
          <p className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-4 border-b border-border-light pb-2">
            {t.home.heroSubtitle}
          </p>

          {/* Main Photo with Caption */}
          <figure className="mb-6">
            <div className="aspect-[4/3] bg-muted border border-border flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-body italic">
                [ Author Portrait ]
              </span>
            </div>
            <figcaption className="text-xs font-body text-muted-foreground mt-2 italic border-b border-border-light pb-2">
              {t.home.heroCaption}
            </figcaption>
          </figure>
          
          <div className="font-body text-base leading-relaxed space-y-4">
            <p className="drop-cap">
              {t.home.heroBio1}
            </p>
            <p>
              {t.home.heroBio2}
            </p>
            <p className="text-sm text-muted-foreground italic">
              {t.home.continuedOnEssays}
            </p>
          </div>
        </article>

        {/* Right Column - Press & Projects Teaser */}
        <aside id="projects" className="md:col-span-4">
          <div className="border-t-2 border-b border-foreground py-2 mb-4">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] font-bold">
              {t.home.pressAndProjects}
            </h3>
          </div>
          
          {/* Featured Project Teasers */}
          <div className="space-y-4">
            {featuredProjects.map(project => (
              <article key={project.slug} className="pb-4 border-b border-border-light">
                <PageLink href={`/projects/${project.slug}`} className="group block">
                  {project.image && (
                    <div className="aspect-video w-full mb-2 bg-muted border border-border overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h4 className="font-display text-lg font-bold leading-tight mb-1 group-hover:underline">
                    {project.title}
                  </h4>
                </PageLink>
                <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-1">
                  {project.summary}
                </p>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {project.year} · {project.category === 'university' ? t.projectsPage.academic : project.category === 'ai' ? t.projectsPage.aiResearch : t.projectsPage.gameDev}
                </span>
              </article>
            ))}
          </div>

          <PageLink href="/projects" className="block text-sm font-display uppercase tracking-widest mt-4 text-center py-2 border border-foreground hover:bg-foreground hover:text-background transition-colors">
            {t.home.turnToProjects}
          </PageLink>
        </aside>
      </div>

      {/* Bottom Section - Essays & Reading Teasers */}
      <div className="mt-8 pt-6 border-t-2 border-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Essays Column */}
          <div className="md:border-r md:border-border-light md:pr-6 rtl:md:border-r-0 rtl:md:border-l rtl:md:pl-6 rtl:md:pr-0">
            <SectionHeader title={t.home.opinionEssays} id="essays" />
            
            {/* Animated Essay Quotes Excerpt Widget */}
            <EssayQuotesWidget />

            <div className="space-y-3">
              {featuredEssays.map(essay => (
                <article key={essay.slug}>
                  <PageLink href={`/essays/${essay.slug}`}>
                    <h4 className="font-display font-bold leading-tight">
                      {essay.title}
                    </h4>
                  </PageLink>
                  <p className="text-sm text-muted-foreground font-body">
                    {essay.subtitle}
                  </p>
                </article>
              ))}
            </div>

            <PageLink href="/essays" className="text-sm uppercase tracking-widest mt-4 block">
              {t.home.readAllEssays}
            </PageLink>
          </div>

          {/* Reading Column */}
          <div className="md:pl-6 rtl:md:pl-0 rtl:md:pr-6">
            <SectionHeader title={t.home.literatureReading} id="reading" />
            
            {/* Animated Book Insights & Quotes Widget */}
            <BookQuotesWidget />

            <div className="space-y-3">
              {featuredBooks.map(book => (
                <article key={book.title}>
                  <h4 className="font-display font-bold leading-tight">
                    {book.title}
                  </h4>
                  <p className="text-xs text-muted-foreground italic font-body">
                    {book.author}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {book.insights[0]}
                  </p>
                </article>
              ))}
            </div>

            <PageLink href="/reading" className="text-sm uppercase tracking-widest mt-4 block">
              {t.home.fullReadingList}
            </PageLink>
          </div>
        </div>
      </div>

      {/* Contact Teaser */}
      <div className="mt-8 pt-4 border-t border-border text-center">
        <PageLink href="/contact" className="inline-block border-2 border-foreground px-6 py-3 font-display uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors">
          {t.home.writeLetter}
        </PageLink>
      </div>
    </PageLayout>
  );
}
