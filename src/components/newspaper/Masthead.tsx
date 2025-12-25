import { Link } from "react-router-dom";
import { useNewspaper } from "@/context/NewspaperContext";

interface MastheadProps {
  compact?: boolean;
}

const Masthead = ({ compact = false }: MastheadProps) => {
  const { pageInfo } = useNewspaper();
  
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (compact) {
    return (
      <header className="border-b border-foreground pb-4 mb-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="hover:opacity-70 transition-opacity">
            <span className="font-display text-2xl md:text-3xl font-black tracking-tight uppercase">
              Amine Moulai
            </span>
          </Link>
          
          <div className="text-right">
            <span className="volume-info block">{pageInfo.sectionName}</span>
            <span className="text-xs text-muted-foreground font-body">
              Vol. {pageInfo.volume}, No. {pageInfo.issue}
            </span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b-2 border-foreground pb-6 mb-8">
      {/* Top dateline with volume info */}
      <div className="flex justify-between items-center text-xs mb-4 font-body border-b border-border-light pb-2">
        <span className="text-muted-foreground">{today}</span>
        <span className="volume-info">Vol. {pageInfo.volume}, No. {pageInfo.issue}</span>
        <span className="text-muted-foreground">Perpignan, France</span>
      </div>
      
      {/* Newspaper nameplate */}
      <div className="text-center py-4">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase mb-1">
            Amine Moulai
          </h1>
        </Link>
        <p className="font-body text-sm italic text-muted-foreground tracking-wide">
          A Personal Journal of Record — Established 2025
        </p>
        <div className="newspaper-rule-double max-w-md mx-auto mt-4" />
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 md:gap-10 mt-6 text-sm uppercase tracking-[0.15em] font-display">
        <Link to="/" className="hover:underline underline-offset-4 decoration-2">Front Page</Link>
        <Link to="/projects" className="hover:underline underline-offset-4 decoration-2">Projects</Link>
        <Link to="/essays" className="hover:underline underline-offset-4 decoration-2">Essays</Link>
        <Link to="/reading" className="hover:underline underline-offset-4 decoration-2">Reading</Link>
        <Link to="/contact" className="hover:underline underline-offset-4 decoration-2">Letters</Link>
      </nav>
    </header>
  );
};

export default Masthead;
