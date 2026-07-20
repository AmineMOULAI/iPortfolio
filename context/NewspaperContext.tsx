"use client";

import { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';

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

  const setPageInfo = useCallback((info: Partial<PageInfo>) => {
    setPageInfoState(prev => {
      // Avoid unnecessary updates if the info is already the same
      const hasChanges = Object.keys(info).some(
        key => info[key as keyof PageInfo] !== prev[key as keyof PageInfo]
      );
      if (!hasChanges) return prev;
      return { ...prev, ...info };
    });
  }, []);

  const value = useMemo(() => ({ pageInfo, setPageInfo }), [pageInfo, setPageInfo]);

  return (
    <NewspaperContext.Provider value={value}>
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
