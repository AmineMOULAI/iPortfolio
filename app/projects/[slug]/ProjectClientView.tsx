"use client";

import { notFound } from "next/navigation";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import { getProjectBySlug, getProjects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

import TafaqquhProjectView from "@/components/newspaper/TafaqquhProjectView";

interface ProjectClientViewProps {
  slug: string;
}

export default function ProjectClientView({ slug }: ProjectClientViewProps) {
  const { t, language } = useLanguage();
  const project = getProjectBySlug(slug, language);
  const projectsList = getProjects(language);
  
  if (!project) {
    notFound();
  }

  const projectIndex = projectsList.findIndex(p => p.slug === slug);
  const pageNumber = 3 + (projectIndex >= 0 ? projectIndex : 0);
  const nextProject = projectIndex < projectsList.length - 1 ? projectsList[projectIndex + 1] : undefined;

  return (
    <PageLayout pageNumber={pageNumber} sectionName={t.nav.projects}>
      {/* Back navigation */}
      <nav className="mb-6 pb-3 border-b border-border-light">
        <PageLink href="/projects" className="text-sm uppercase tracking-widest text-muted-foreground">
          {t.projectsPage.backToProjects}
        </PageLink>
      </nav>

      {/* Article Content */}
      {slug === "tafaqquh" ? (
        <TafaqquhProjectView
          projectIndex={projectIndex}
          totalProjects={projectsList.length}
          nextSlug={nextProject?.slug}
          nextTitle={nextProject?.title}
        />
      ) : (
        <article>
          {/* Headline */}
          <header className="mb-8 pb-6 border-b border-border">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 uppercase">
              {project.title}
            </h1>
            
            <p className="font-body text-xl text-muted-foreground italic mb-4">
              {project.summary}
            </p>

            {/* Meta info line */}
            <div className="flex flex-wrap gap-4 text-sm font-body text-muted-foreground border-t border-b border-border-light py-3">
              <span><strong>{t.projectsPage.year}:</strong> {project.year}</span>
              <span>|</span>
              <span><strong>{t.projectsPage.role}:</strong> {project.role}</span>
              <span>|</span>
              <span><strong>{t.projectsPage.tech}:</strong> {project.technologies.join(', ')}</span>
            </div>
          </header>

          {/* Main Image */}
          <figure className="mb-8">
            <div className="aspect-video bg-muted border border-border flex items-center justify-center overflow-hidden relative">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain md:object-cover bg-neutral-900/5 dark:bg-neutral-950"
                />
              ) : (
                <span className="text-muted-foreground text-sm font-body italic">
                  [ {project.title} ]
                </span>
              )}
            </div>
            <figcaption className="text-xs font-body text-muted-foreground mt-2 italic text-center border-b border-border-light pb-2">
              {t.projectsPage.figCaption} — {project.title}, {project.year}
            </figcaption>
          </figure>

          {/* Article Content */}
          <div className="max-w-2xl mx-auto">
            {project.description.map((paragraph, index) => (
              <p 
                key={index} 
                className={`font-body text-lg leading-relaxed mb-6 ${index === 0 ? 'drop-cap' : ''}`}
              >
                {paragraph}
              </p>
            ))}

            {/* Links Section */}
            {project.links && project.links.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-display text-sm uppercase tracking-widest mb-3 font-bold">
                  {t.projectsPage.externalLinks}
                </h3>
                <div className="flex gap-6">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm font-body underline underline-offset-4 hover:text-muted-foreground"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      )}

      {/* Navigation */}
      <div className="mt-12 pt-6 border-t-2 border-foreground flex justify-between text-sm">
        <PageLink href="/projects" className="uppercase tracking-widest">
          {t.projectsPage.allProjects}
        </PageLink>
        
        {/* Next/Prev Project */}
        {nextProject && (
          <PageLink href={`/projects/${nextProject.slug}`} className="uppercase tracking-widest">
            → {nextProject.title}
          </PageLink>
        )}
      </div>
    </PageLayout>
  );
}
