"use client";

import { useState } from "react";
import PageLink from "./PageLink";
import { useLanguage } from "@/context/LanguageContext";

interface PageCornerCurlProps {
  nextHref?: string;
  prevHref?: string;
  nextLabel?: string;
  prevLabel?: string;
}

export default function PageCornerCurl({ nextHref, prevHref, nextLabel, prevLabel }: PageCornerCurlProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  const defaultNextHref = isArabic ? "/reading" : "/projects";
  const defaultNextLabel = isArabic ? "الصفحة التالية ←" : "Next Page →";

  const targetHref = nextHref || defaultNextHref;
  const targetLabel = nextLabel || defaultNextLabel;

  return (
    <div className="hidden md:block fixed bottom-0 right-0 z-40 rtl:right-auto rtl:left-0 pointer-events-auto">
      <PageLink 
        href={targetHref} 
        className="group relative block w-20 h-20 overflow-visible"
        title={targetLabel}
      >
        {/* Interactive 3D Corner Peel / Dog-Ear Paper Curl */}
        <div className="absolute bottom-0 right-0 rtl:right-auto rtl:left-0 w-16 h-16 transition-all duration-300 ease-out transform group-hover:w-24 group-hover:h-24">
          
          {/* Under-page shadow */}
          <div className="absolute inset-0 bg-black/20 blur-md transform group-hover:scale-110 transition-transform" />
          
          {/* Folded paper flap */}
          <div 
            className="absolute bottom-0 right-0 rtl:right-auto rtl:left-0 w-0 h-0 border-solid border-b-[48px] border-l-[48px] border-b-border-light border-l-transparent rtl:border-l-[48px] rtl:border-r-[48px] group-hover:border-b-[72px] group-hover:border-l-[72px] transition-all duration-300 drop-shadow-md"
            style={{
              filter: "drop-shadow(-3px -3px 5px rgba(0,0,0,0.25))"
            }}
          >
            {/* Ink Stamp / Page Flip Hint */}
            <span className="absolute bottom-[-40px] right-[10px] rtl:right-auto rtl:left-[10px] text-[8px] font-display uppercase tracking-tighter text-foreground/80 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none">
              TURN ⏎
            </span>
          </div>

          {/* Paper Back Texture */}
          <div className="absolute bottom-0 right-0 rtl:right-auto rtl:left-0 w-12 h-12 bg-amber-100/40 dark:bg-neutral-800/40 transform rotate-45 translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform border border-border/50 pointer-events-none" />
        </div>
      </PageLink>
    </div>
  );
}
