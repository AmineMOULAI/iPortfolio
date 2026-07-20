"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import PageLink from "./PageLink";
import { useLanguage } from "@/context/LanguageContext";
import { getExtractedEssayQuotes, shuffleArray, ExtractedEssayQuote } from "@/utils/essayQuotes";

export default function EssayQuotesWidget() {
  const { language } = useLanguage();
  const allQuotes = getExtractedEssayQuotes(language);

  const queueRef = useRef<ExtractedEssayQuote[]>([]);
  const queueIndexRef = useRef<number>(0);

  const [currentQuote, setCurrentQuote] = useState<ExtractedEssayQuote | null>(null);
  const [fade, setFade] = useState<"in" | "out">("in");

  const isArabic = language === 'ar';

  // Initialize non-repeating shuffle queue on mount or language change
  const initQueue = useCallback(() => {
    if (allQuotes.length === 0) return;
    const shuffled = shuffleArray(allQuotes);
    queueRef.current = shuffled;
    queueIndexRef.current = 0;
    setCurrentQuote(shuffled[0]);
    setFade("in");
  }, [allQuotes.length, language]);

  useEffect(() => {
    initQueue();
  }, [initQueue]);

  // Advance to the next non-repeating quote in the shuffled queue
  const advanceQuote = useCallback(() => {
    if (queueRef.current.length === 0) return;
    setFade("out");

    setTimeout(() => {
      let nextIdx = queueIndexRef.current + 1;
      // When full cycle finishes, reshuffle without repeating the last quote
      if (nextIdx >= queueRef.current.length) {
        const lastQuote = queueRef.current[queueRef.current.length - 1];
        queueRef.current = shuffleArray(allQuotes, lastQuote);
        nextIdx = 0;
      }

      queueIndexRef.current = nextIdx;
      setCurrentQuote(queueRef.current[nextIdx]);
      setFade("in");
    }, 350); // 350ms fade duration
  }, [allQuotes]);

  const rotatePrev = () => {
    if (queueRef.current.length === 0) return;
    setFade("out");

    setTimeout(() => {
      let prevIdx = queueIndexRef.current - 1;
      if (prevIdx < 0) {
        prevIdx = queueRef.current.length - 1;
      }
      queueIndexRef.current = prevIdx;
      setCurrentQuote(queueRef.current[prevIdx]);
      setFade("in");
    }, 300);
  };

  // 10-second automatic rotation without repetition
  useEffect(() => {
    const timer = setInterval(() => {
      advanceQuote();
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, [advanceQuote]);

  if (!currentQuote) return null;

  const headerLabel = isArabic 
    ? "من مقتطفات المقالات والأفكار" 
    : language === 'fr' 
    ? "EXTRACTS & INSIGHTS FROM ESSAYS" 
    : "EXCERPTS & INSIGHTS FROM ESSAYS";

  const readEssayBtn = isArabic 
    ? "اقرأ المقال كاملاً ←" 
    : language === 'fr' 
    ? "Lire l'essai complet →" 
    : "Read Full Essay →";

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
            title="Previous excerpt"
          >
            ‹
          </button>
          <button 
            onClick={advanceQuote}
            className="hover:text-foreground text-xs font-bold px-1.5 py-0.5 border border-border hover:border-foreground"
            title="Next excerpt"
          >
            ›
          </button>
        </div>
      </div>

      {/* Animated Excerpt Content */}
      <div 
        className={`transition-opacity duration-500 min-h-[90px] flex flex-col justify-between ${
          fade === "in" ? "opacity-100" : "opacity-0"
        }`}
      >
        <blockquote className={`text-base font-body leading-relaxed text-foreground/95 ${
          isArabic ? 'font-quran text-lg border-r-2 border-foreground pr-3' : 'italic border-l-2 border-foreground pl-3'
        }`}>
          "{currentQuote.quote}"
        </blockquote>

        <div className="mt-4 pt-2 border-t border-border-light flex justify-between items-center flex-wrap gap-2 text-xs">
          <span className="font-display uppercase tracking-wider font-bold text-muted-foreground">
            〔 {currentQuote.topicTitle} 〕 {currentQuote.essayTitle}
          </span>
          <PageLink 
            href={`/essays/${currentQuote.essaySlug}`}
            className="font-display uppercase tracking-widest font-bold text-foreground hover:underline"
          >
            {readEssayBtn}
          </PageLink>
        </div>
      </div>

      {/* Animated 10-second Progress Bar */}
      <div className="w-full bg-border-light h-0.5 mt-3 overflow-hidden">
        <div 
          key={`${language}-${queueIndexRef.current}-${currentQuote.essaySlug}`}
          className="bg-foreground h-full animate-quote-progress"
          style={{ animationDuration: '10s' }}
        />
      </div>
    </div>
  );
}
