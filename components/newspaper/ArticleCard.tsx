import Link from "next/link";

interface ArticleCardProps {
  title: string;
  summary: string;
  meta?: string;
  links?: Array<{ label: string; href: string; external?: boolean }>;
  variant?: 'default' | 'feature' | 'list';
  to?: string;
}

const ArticleCard = ({ title, summary, meta, links, variant = 'default', to }: ArticleCardProps) => {
  const TitleTag = variant === 'feature' ? 'h2' : 'h3';
  
  const titleClasses = {
    feature: 'font-display text-3xl md:text-4xl font-bold mb-4 leading-tight',
    default: 'font-display text-xl md:text-2xl font-bold mb-2 leading-tight',
    list: 'font-display text-lg font-bold mb-1 leading-tight',
  };

  const summaryClasses = {
    feature: 'font-body text-lg leading-relaxed mb-4',
    default: 'font-body text-base leading-relaxed mb-3 text-muted-foreground',
    list: 'font-body text-sm leading-relaxed text-muted-foreground',
  };

  return (
    <article className={`${variant === 'feature' ? 'mb-10' : 'mb-6'}`}>
      {to ? (
        <Link href={to} className="group">
          <TitleTag className={`${titleClasses[variant]} group-hover:underline underline-offset-2`}>
            {title}
          </TitleTag>
        </Link>
      ) : (
        <TitleTag className={titleClasses[variant]}>{title}</TitleTag>
      )}
      
      <p className={summaryClasses[variant]}>{summary}</p>
      
      {meta && (
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-body">
          {meta}
        </p>
      )}
      
      {links && links.length > 0 && (
        <div className="flex gap-4 text-sm font-body">
          {links.map((link, index) => (
            <span key={index}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  {link.label} →
                </a>
              ) : (
                <Link href={link.href} className="article-link">
                  {link.label} →
                </Link>
              )}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default ArticleCard;
