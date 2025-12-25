import { useNewspaper } from "@/context/NewspaperContext";

const PageFooter = () => {
  const { pageInfo } = useNewspaper();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 pt-6 border-t-2 border-foreground">
      <div className="flex justify-between items-center text-xs text-muted-foreground font-body">
        <span>© {currentYear} Amine Moulai</span>
        <span className="font-display uppercase tracking-[0.2em]">
          {pageInfo.sectionName} — Page {pageInfo.pageNumber}
        </span>
        <span>Vol. {pageInfo.volume}, No. {pageInfo.issue}</span>
      </div>
      
      <div className="text-center mt-4">
        <div className="inline-block">
          <div className="newspaper-rule-double w-32 mx-auto" />
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mt-2">
            — End of Page —
          </span>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
