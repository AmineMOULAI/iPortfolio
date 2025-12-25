import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";
import { getProjectBySlug, projects } from "@/data/projects";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;
  
  // Get project index for page numbering
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const pageNumber = 3 + projectIndex;

  if (!project) {
    return (
      <PageLayout pageNumber={2} sectionName="Projects">
        <div className="text-center py-16">
          <h1 className="font-display text-4xl font-bold mb-4">Project Not Found</h1>
          <PageLink to="/projects">← Return to Projects</PageLink>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout pageNumber={pageNumber} sectionName="Projects">
      {/* Back navigation */}
      <nav className="mb-6 pb-3 border-b border-border-light">
        <PageLink to="/projects" className="text-sm uppercase tracking-widest text-muted-foreground">
          ← Back to Projects
        </PageLink>
      </nav>

      {/* Article Layout */}
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
            <span><strong>Year:</strong> {project.year}</span>
            <span>|</span>
            <span><strong>Role:</strong> {project.role}</span>
            <span>|</span>
            <span><strong>Tech:</strong> {project.technologies.join(', ')}</span>
          </div>
        </header>

        {/* Main Image */}
        <figure className="mb-8">
          <div className="aspect-video bg-muted border border-border flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-body italic">
              [ Project Screenshot: {project.title} ]
            </span>
          </div>
          <figcaption className="text-xs font-body text-muted-foreground mt-2 italic text-center border-b border-border-light pb-2">
            Fig. 1 — {project.title} in action, {project.year}
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
                External Links
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

      {/* Navigation */}
      <div className="mt-12 pt-6 border-t-2 border-foreground flex justify-between text-sm">
        <PageLink to="/projects" className="uppercase tracking-widest">
          ← All Projects
        </PageLink>
        
        {/* Next/Prev Project */}
        {projectIndex < projects.length - 1 && (
          <PageLink to={`/projects/${projects[projectIndex + 1].slug}`} className="uppercase tracking-widest">
            Next: {projects[projectIndex + 1].title} →
          </PageLink>
        )}
      </div>
    </PageLayout>
  );
};

export default ProjectDetailPage;
