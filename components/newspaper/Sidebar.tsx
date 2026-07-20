"use client";
import { useLanguage } from "@/context/LanguageContext";
import SidebarQuote from "./SidebarQuote";

const Sidebar = () => {
  const { t } = useLanguage();

  const sections = [
    { id: 'self', label: t.sidebar.self },
    { id: 'projects', label: t.sidebar.projects },
    { id: 'essays', label: t.sidebar.essays },
    { id: 'reading', label: t.sidebar.reading },
  ];

  return (
    <aside className="hidden lg:block w-48 flex-shrink-0">
      <nav className="sticky top-8">
        <div className="border-t-2 border-b border-foreground py-3 mb-4">
          <span className="font-display text-xs uppercase tracking-widest font-bold">
            {t.sidebar.contents}
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
        
        <SidebarQuote />
      </nav>
    </aside>
  );
};

export default Sidebar;
