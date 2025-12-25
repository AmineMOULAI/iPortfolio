import { ReactNode, useEffect } from 'react';
import { useNewspaper } from '@/context/NewspaperContext';
import Masthead from './Masthead';
import PageFooter from './PageFooter';

interface PageLayoutProps {
  children: ReactNode;
  pageNumber: number;
  sectionName: string;
  showMasthead?: boolean;
  showFullMasthead?: boolean;
}

const PageLayout = ({ 
  children, 
  pageNumber, 
  sectionName, 
  showMasthead = true,
  showFullMasthead = false 
}: PageLayoutProps) => {
  const { setPageInfo } = useNewspaper();

  useEffect(() => {
    setPageInfo({ pageNumber, sectionName });
  }, [pageNumber, sectionName, setPageInfo]);

  return (
    <div className="newspaper-page animate-page-turn">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-6">
        {showMasthead && <Masthead compact={!showFullMasthead} />}
        
        <main className="min-h-[calc(100vh-280px)]">
          {children}
        </main>
        
        <PageFooter />
      </div>
      
      {/* Fixed page number */}
      <div className="page-number">
        Page {pageNumber}
      </div>
    </div>
  );
};

export default PageLayout;
