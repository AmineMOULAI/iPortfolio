const Sidebar = () => {
  const sections = [
    { id: 'self', label: 'Self' },
    { id: 'projects', label: 'Projects' },
    { id: 'essays', label: 'Essays' },
    { id: 'reading', label: 'Reading' },
  ];

  return (
    <aside className="hidden lg:block w-48 flex-shrink-0">
      <nav className="sticky top-8">
        <div className="border-t-2 border-b border-foreground py-3 mb-4">
          <span className="font-display text-xs uppercase tracking-widest font-bold">
            Contents
          </span>
        </div>
        <ul className="space-y-3 font-body text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="mt-8 pt-4 border-t border-border-light">
          <p className="text-xs text-muted-foreground italic font-body leading-relaxed">
            "The unexamined life is not worth living."
            <br />
            <span className="not-italic">— Socrates</span>
          </p>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
