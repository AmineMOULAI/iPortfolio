import { Link } from "react-router-dom";

const Masthead = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="border-b-2 border-foreground pb-6 mb-8">
      {/* Top dateline */}
      <div className="flex justify-between items-center text-sm text-muted-foreground mb-4 font-body">
        <span>{today}</span>
        <span className="italic">A Personal Journal of Record</span>
      </div>
      
      {/* Newspaper nameplate */}
      <div className="text-center">
        <Link to="/" className="hover:no-underline">
          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight uppercase mb-2">
            Amine Moulai
          </h1>
        </Link>
        <div className="newspaper-rule-double max-w-xs mx-auto mt-4" />
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 mt-6 text-sm uppercase tracking-widest font-display">
        <a href="#self" className="hover:underline underline-offset-4">Self</a>
        <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
        <a href="#essays" className="hover:underline underline-offset-4">Essays</a>
        <a href="#reading" className="hover:underline underline-offset-4">Reading</a>
      </nav>
    </header>
  );
};

export default Masthead;
