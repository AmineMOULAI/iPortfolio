const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="mt-16 pt-8 border-t-2 border-foreground">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-body">
        <p>© {currentYear} Amine Moulai. All rights reserved.</p>
        <p className="italic">Last updated: {lastUpdated}</p>
      </div>
      <div className="text-center mt-6 mb-4">
        <div className="inline-block border-t border-b border-border px-8 py-2">
          <span className="font-display text-xs uppercase tracking-[0.3em]">
            End of Edition
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
