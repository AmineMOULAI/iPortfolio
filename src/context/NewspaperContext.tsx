import { createContext, useContext, useState, ReactNode } from 'react';

interface PageInfo {
  volume: number;
  issue: number;
  pageNumber: number;
  sectionName: string;
}

interface NewspaperContextType {
  pageInfo: PageInfo;
  setPageInfo: (info: Partial<PageInfo>) => void;
}

const NewspaperContext = createContext<NewspaperContextType | undefined>(undefined);

export const NewspaperProvider = ({ children }: { children: ReactNode }) => {
  const [pageInfo, setPageInfoState] = useState<PageInfo>({
    volume: 1,
    issue: 1,
    pageNumber: 1,
    sectionName: 'Front Page'
  });

  const setPageInfo = (info: Partial<PageInfo>) => {
    setPageInfoState(prev => ({ ...prev, ...info }));
  };

  return (
    <NewspaperContext.Provider value={{ pageInfo, setPageInfo }}>
      {children}
    </NewspaperContext.Provider>
  );
};

export const useNewspaper = () => {
  const context = useContext(NewspaperContext);
  if (!context) {
    throw new Error('useNewspaper must be used within NewspaperProvider');
  }
  return context;
};
