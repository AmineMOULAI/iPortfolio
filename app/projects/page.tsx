"use client";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import { getProjects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const projectsList = getProjects(language);

  const universityProjects = projectsList.filter(p => p.category === 'university');
  const aiProjects = projectsList.filter(p => p.category === 'ai' || p.slug === 'psycho-robots');
  const gameDevProjects = projectsList.filter(p => p.category === 'gamedev');

  return (
    <PageLayout pageNumber={2} sectionName={t.nav.projects}>
      {/* Section Header */}
      <div className="border-b-2 border-foreground pb-2 mb-6">
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight">
          {t.projectsPage.title}
        </h1>
        <p className="font-body text-sm text-muted-foreground italic mt-1">
          {t.projectsPage.subtitle}
        </p>
      </div>

      {/* Photo Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {projectsList.map((project) => (
          <PageLink 
            key={project.slug} 
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <article className="border border-border hover:border-foreground transition-colors">
              {/* Project Image Placeholder */}
              <div className="aspect-square bg-muted flex items-center justify-center border-b border-border group-hover:bg-accent transition-colors">
                <span className="text-muted-foreground text-xs font-body text-center px-2">
                  [ {project.title} ]
                </span>
              </div>
              
              {/* Caption */}
              <div className="p-3">
                <h3 className="font-display text-sm font-bold leading-tight mb-1 group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground font-body line-clamp-2">
                  {project.summary}
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mt-2">
                  {project.year} · {project.technologies[0]}
                </p>
              </div>
            </article>
          </PageLink>
        ))}
      </div>

      {/* Category Sections */}
      <div className="border-t-2 border-foreground pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* University Column */}
          <div className="md:border-r md:border-border-light md:pr-6 rtl:md:border-r-0 rtl:md:border-l rtl:md:pl-6 rtl:md:pr-0">
            <div className="border-b border-foreground pb-1 mb-4">
              <h2 className="font-display text-lg uppercase tracking-wide font-bold">
                {t.projectsPage.university}
              </h2>
            </div>
            <div className="space-y-3">
              {universityProjects.map(project => (
                <article key={project.slug} className="pb-3 border-b border-border-light last:border-0">
                  <PageLink href={`/projects/${project.slug}`}>
                    <h3 className="font-display font-bold text-sm">{project.title}</h3>
                  </PageLink>
                  <p className="text-xs text-muted-foreground">{project.year}</p>
                </article>
              ))}
            </div>
          </div>

          {/* AI Column */}
          <div className="md:border-r md:border-border-light md:pr-6 rtl:md:border-r-0 rtl:md:border-l rtl:md:pl-6 rtl:md:pr-0">
            <div className="border-b border-foreground pb-1 mb-4">
              <h2 className="font-display text-lg uppercase tracking-wide font-bold">
                {t.projectsPage.aiResearch}
              </h2>
            </div>
            <div className="space-y-3">
              {aiProjects.slice(0, 2).map(project => (
                <article key={project.slug} className="pb-3 border-b border-border-light last:border-0">
                  <PageLink href={`/projects/${project.slug}`}>
                    <h3 className="font-display font-bold text-sm">{project.title}</h3>
                  </PageLink>
                  <p className="text-xs text-muted-foreground">{project.year}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Game Dev Column */}
          <div>
            <div className="border-b border-foreground pb-1 mb-4">
              <h2 className="font-display text-lg uppercase tracking-wide font-bold">
                {t.projectsPage.gameDev}
              </h2>
            </div>
            <div className="space-y-3">
              {gameDevProjects.map(project => (
                <article key={project.slug} className="pb-3 border-b border-border-light last:border-0">
                  <PageLink href={`/projects/${project.slug}`}>
                    <h3 className="font-display font-bold text-sm">{project.title}</h3>
                  </PageLink>
                  <p className="text-xs text-muted-foreground">{project.year}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 pt-4 border-t border-border flex justify-between text-sm">
        <PageLink href="/" className="uppercase tracking-widest">
          {t.projectsPage.backToFront}
        </PageLink>
        <PageLink href="/essays" className="uppercase tracking-widest">
          {t.projectsPage.toEssays}
        </PageLink>
      </div>
    </PageLayout>
  );
}
