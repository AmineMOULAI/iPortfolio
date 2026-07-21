"use client";
import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useNewspaper } from '@/context/NewspaperContext';
import { useLanguage } from '@/context/LanguageContext';
import Masthead from './Masthead';
import NewspaperToolbar from './NewspaperToolbar';
import PageFooter from './PageFooter';
import Sidebar from './Sidebar';
import PageCornerCurl from './PageCornerCurl';
import { playPaperSound } from '@/utils/audio';

interface PageLayoutProps {
  children: ReactNode;
  pageNumber: number;
  sectionName: string;
  showMasthead?: boolean;
  showFullMasthead?: boolean;
  showSidebar?: boolean;
}

const PageLayout = ({ 
  children, 
  pageNumber, 
  sectionName, 
  showMasthead = true,
  showFullMasthead = false,
  showSidebar = false
}: PageLayoutProps) => {
  const { setPageInfo } = useNewspaper();
  const { t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    setPageInfo({ pageNumber, sectionName });
    playPaperSound();
  }, [pageNumber, sectionName, setPageInfo, pathname]);

  return (
    <div className="newspaper-viewport min-h-screen bg-background overflow-hidden relative">
      <div 
        key={pathname}
        className="newspaper-page newspaper-page-fold origin-left rtl:origin-right min-h-screen bg-background relative"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 relative z-10">
          {showMasthead && (
            <>
              <Masthead compact={!showFullMasthead} />
              <NewspaperToolbar />
            </>
          )}
          
          <div className={`flex flex-col ${showSidebar ? 'lg:flex-row' : ''} gap-8`}>
            {showSidebar && <Sidebar />}
            
            <main className={`flex-1 min-h-[calc(100vh-280px)] ${showSidebar ? 'lg:border-l lg:border-border-light lg:pl-8 rtl:lg:border-l-0 rtl:lg:border-r rtl:lg:pl-0 rtl:lg:pr-8' : ''}`}>
              {children}
            </main>
          </div>
          
          <PageFooter />
        </div>
        
        {/* Fixed page number */}
        <div className="page-number rtl:right-auto rtl:left-4">
          {t.footer.page} {pageNumber}
        </div>

        {/* Interactive 3D Newspaper Corner Flip Curl */}
        <PageCornerCurl />
      </div>
    </div>
  );
};

export default PageLayout;
