"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import PageLink from "./PageLink";
import { useLanguage } from "@/context/LanguageContext";
import { getExtractedBookInsights, shuffleBookArray, ExtractedBookInsight } from "@/utils/bookQuotes";

export default function BookQuotesWidget() {
  const { language } = useLanguage();
  const allInsights = getExtractedBookInsights(language);

  const queueRef = useRef<ExtractedBookInsight[]>([]);
  const queueIndexRef = useRef<number>(0);

  const [currentInsight, setCurrentInsight] = useState<ExtractedBookInsight | null>(null);
  const [fade, setFade] = useState<"in" | "out">("in");

  const isArabic = language === 'ar';

  // Initialize non-repeating shuffle queue
  const initQueue = useCallback(() => {
    if (allInsights.length === 0) return;
    const shuffled = shuffleBookArray(allInsights);
    queueRef.current = shuffled;
    queueIndexRef.current = 0;
    setCurrentInsight(shuffled[0]);
    setFade("in");
  }, [allInsights.length, language]);

  useEffect(() => {
    initQueue();
  }, [initQueue]);

  // Advance to next insight without repetition
  const advanceInsight = useCallback(() => {
    if (queueRef.current.length === 0) return;
    setFade("out");

    setTimeout(() => {
      let nextIdx = queueIndexRef.current + 1;
      if (nextIdx >= queueRef.current.length) {
        const lastInsight = queueRef.current[queueRef.current.length - 1];
        queueRef.current = shuffleBookArray(allInsights, lastInsight);
        nextIdx = 0;
      }

      queueIndexRef.current = nextIdx;
      setCurrentInsight(queueRef.current[nextIdx]);
      setFade("in");
    }, 350);
  }, [allInsights]);

  const rotatePrev = () => {
    if (queueRef.current.length === 0) return;
    setFade("out");

    setTimeout(() => {
      let prevIdx = queueIndexRef.current - 1;
      if (prevIdx < 0) {
        prevIdx = queueRef.current.length - 1;
      }
      queueIndexRef.current = prevIdx;
      setCurrentInsight(queueRef.current[prevIdx]);
      setFade("in");
    }, 300);
  };

  // 10-second automatic rotation
  useEffect(() => {
    const timer = setInterval(() => {
      advanceInsight();
    }, 10000);

    return () => clearInterval(timer);
  }, [advanceInsight]);

  if (!currentInsight) return null;

  const headerLabel = isArabic 
    ? "ملاحظات وتأملات من الكتب" 
    : language === 'fr' 
    ? "CITATIONS & RÉFLEXIONS LITTÉRAIRES" 
    : "LITERARY INSIGHTS & REFLECTIONS";

  const readBookBtn = isArabic 
    ? "اقرأ مراجعة الكتاب ←" 
    : language === 'fr' 
    ? "Consulter la fiche du livre →" 
    : "Read Book Notice →";

  return (
    <div className="border-2 border-foreground bg-card p-5 my-6 relative overflow-hidden shadow-xs">
      {/* Header Bar */}
      <div className="flex justify-between items-center border-b border-border-light pb-2 mb-3">
        <span className="font-display text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground flex items-center gap-1.5">
          <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
          {headerLabel}
        </span>
        <div className="flex items-center gap-1">
          <button 
            onClick={rotatePrev}
            className="hover:text-foreground text-xs font-bold px-1.5 py-0.5 border border-border hover:border-foreground"
            title="Previous reflection"
          >
            ‹
          </button>
          <button 
            onClick={advanceInsight}
            className="hover:text-foreground text-xs font-bold px-1.5 py-0.5 border border-border hover:border-foreground"
            title="Next reflection"
          >
            ›
          </button>
        </div>
      </div>

      {/* Animated Content */}
      <div 
        className={`transition-opacity duration-500 min-h-[90px] flex flex-col justify-between ${
          fade === "in" ? "opacity-100" : "opacity-0"
        }`}
      >
        <blockquote className={`text-base font-body leading-relaxed text-foreground/95 ${
          isArabic ? 'font-quran text-lg border-r-2 border-foreground pr-3' : 'italic border-l-2 border-foreground pl-3'
        }`}>
          "{currentInsight.insight}"
        </blockquote>

        <div className="mt-4 pt-2 border-t border-border-light flex justify-between items-center flex-wrap gap-2 text-xs">
          <span className="font-display uppercase tracking-wider font-bold text-muted-foreground">
            〔 {currentInsight.category} 〕 {currentInsight.bookTitle} — <span className="italic font-body">{currentInsight.author}</span>
          </span>
          <PageLink 
            href={`/reading/${currentInsight.bookSlug}`}
            className="font-display uppercase tracking-widest font-bold text-foreground hover:underline"
          >
            {readBookBtn}
          </PageLink>
        </div>
      </div>

      {/* Animated 10-second Progress Bar */}
      <div className="w-full bg-border-light h-0.5 mt-3 overflow-hidden">
        <div 
          key={`${language}-${queueIndexRef.current}-${currentInsight.bookSlug}`}
          className="bg-foreground h-full animate-quote-progress"
          style={{ animationDuration: '10s' }}
        />
      </div>
    </div>
  );
}
