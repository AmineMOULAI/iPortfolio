"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getQuotesForLanguage, QuoteItem } from "@/data/quotes";

// Fisher-Yates Shuffle helper to get random order without repeats
function createShuffledQueue(length: number, lastIndex: number | null = null): number[] {
  const indices = Array.from({ length }, (_, i) => i);
  
  // Shuffle array
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  
  // Prevent immediate repetition across reshuffles
  if (lastIndex !== null && indices.length > 1 && indices[0] === lastIndex) {
    [indices[0], indices[1]] = [indices[1], indices[0]];
  }
  
  return indices;
}

export default function SidebarQuote() {
  const { language } = useLanguage();
  const quotes = getQuotesForLanguage(language);
  
  const queueRef = useRef<number[]>([]);
  const queueIndexRef = useRef<number>(0);
  
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  // Initialize or re-shuffle when language changes
  const initShuffleQueue = useCallback(() => {
    if (quotes.length === 0) return;
    const newQueue = createShuffledQueue(quotes.length);
    queueRef.current = newQueue;
    queueIndexRef.current = 0;
    setCurrentQuoteIndex(newQueue[0]);
    setFadeState("in");
  }, [quotes.length]);

  useEffect(() => {
    initShuffleQueue();
  }, [language, initShuffleQueue]);

  // Function to advance to the next non-repeating quote in shuffled queue
  const advanceQuote = useCallback(() => {
    if (quotes.length === 0) return;
    setFadeState("out");

    setTimeout(() => {
      let nextQueueIdx = queueIndexRef.current + 1;
      
      // Reshuffle when full cycle finishes
      if (nextQueueIdx >= queueRef.current.length) {
        const lastQuoteIdx = queueRef.current[queueRef.current.length - 1];
        queueRef.current = createShuffledQueue(quotes.length, lastQuoteIdx);
        nextQueueIdx = 0;
      }
      
      queueIndexRef.current = nextQueueIdx;
      const nextQuoteIdx = queueRef.current[nextQueueIdx];
      setCurrentQuoteIndex(nextQuoteIdx);
      setFadeState("in");
    }, 350); // 350ms fade out duration
  }, [quotes.length]);

  // Rotate quotes every 10 seconds without repeating
  useEffect(() => {
    const timer = setInterval(() => {
      advanceQuote();
    }, 10000); // 10 seconds interval

    return () => clearInterval(timer);
  }, [advanceQuote]);

  const handleNext = () => {
    advanceQuote();
  };

  const handlePrev = () => {
    if (quotes.length === 0) return;
    setFadeState("out");

    setTimeout(() => {
      let prevQueueIdx = queueIndexRef.current - 1;
      if (prevQueueIdx < 0) {
        prevQueueIdx = queueRef.current.length - 1;
      }
      queueIndexRef.current = prevQueueIdx;
      setCurrentQuoteIndex(queueRef.current[prevQueueIdx]);
      setFadeState("in");
    }, 300);
  };

  const currentQuote: QuoteItem = quotes[currentQuoteIndex] || quotes[0];
  const isArabic = language === 'ar';

  return (
    <div className="mt-8 pt-4 border-t border-border-light relative group">
      {/* Newspaper Section Label (NO NUMERICAL ENUMERATION) */}
      <div className="flex justify-between items-center mb-3 font-display text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="font-bold flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 bg-foreground rounded-full" />
          {isArabic ? 'حكمة وفكر' : language === 'fr' ? 'Sagesse & Pensée' : 'Wisdom & Reflection'}
        </span>
        
        {/* Navigation Buttons (No numbers shown) */}
        <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handlePrev} 
            title="Previous quote"
            className="hover:text-foreground text-sm font-bold leading-none px-1 py-0.5 border border-border hover:border-foreground"
          >
            ‹
          </button>
          <button 
            onClick={handleNext} 
            title="Next quote"
            className="hover:text-foreground text-sm font-bold leading-none px-1 py-0.5 border border-border hover:border-foreground"
          >
            ›
          </button>
        </div>
      </div>

      {/* Quote Display with Smooth Fade Transition & Rich Arabic Calligraphy */}
      <div 
        className={`transition-opacity duration-500 ease-in-out min-h-[95px] flex flex-col justify-between ${
          fadeState === "in" ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className={`leading-relaxed ${
          isArabic 
            ? 'font-quran text-sm text-foreground/95 font-medium border-r-2 border-foreground pr-3 my-1' 
            : 'text-xs italic font-body text-foreground/90'
        }`}>
          {currentQuote.quote}
        </p>
        
        <p className="text-[11px] text-foreground font-display uppercase tracking-wider mt-3 not-italic font-bold flex items-center gap-1.5">
          <span className="text-muted-foreground text-[10px]">❖</span>
          <span>{currentQuote.author}</span>
        </p>
      </div>

      {/* 10-second Animated Progress Bar Line */}
      <div className="w-full bg-border-light h-0.5 mt-3 overflow-hidden">
        <div 
          key={`${language}-${currentQuoteIndex}`}
          className="bg-foreground h-full animate-quote-progress"
          style={{ animationDuration: '10s' }}
        />
      </div>
    </div>
  );
}
