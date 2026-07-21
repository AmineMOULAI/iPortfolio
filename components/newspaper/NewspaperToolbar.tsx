"use client";

import { useState, useEffect } from "react";
import { Printer, Sparkles, Radio, CloudSun } from "lucide-react";

export default function NewspaperToolbar() {
  const [halftoneEnabled, setHalftoneEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleHalftone = () => {
    const nextState = !halftoneEnabled;
    setHalftoneEnabled(nextState);
    if (nextState) {
      document.body.classList.add("halftone-ink");
    } else {
      document.body.classList.remove("halftone-ink");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!mounted) return null;

  return (
    <div className="bg-muted/60 border-y border-border-light py-1.5 px-3 text-xs font-mono mb-6 flex flex-wrap items-center justify-between gap-3 select-none print:hidden">
      {/* Weather & Edition Ticker */}
      <div className="flex items-center gap-3 overflow-hidden text-muted-foreground">
        <span className="flex items-center gap-1 font-bold text-foreground shrink-0">
          <CloudSun className="w-3.5 h-3.5 text-amber-600" /> Perpignan ☀️ 24°C
        </span>
        <span className="text-border">|</span>
        <span className="flex items-center gap-1.5 shrink-0">
          <Radio className="w-3 h-3 text-emerald-600 animate-pulse" />
          <span className="font-semibold text-foreground uppercase tracking-wide">EDITION STATUS:</span> ACTIVE · L3 COMPUTER SCIENCE
        </span>
      </div>

      {/* Interactive Toolbar Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleHalftone}
          title="Toggle vintage newsprint halftone effect"
          className={`px-2 py-0.5 text-[11px] border uppercase transition-colors flex items-center gap-1 ${
            halftoneEnabled
              ? "bg-foreground text-background border-foreground font-bold"
              : "border-border-light hover:border-foreground text-muted-foreground hover:text-foreground"
          }`}
        >
          <Sparkles className="w-3 h-3" />
          {halftoneEnabled ? "Ink Effect On" : "Vintage Ink"}
        </button>

        <button
          onClick={handlePrint}
          title="Print or Save Front Page as PDF"
          className="px-2 py-0.5 text-[11px] border border-border-light hover:border-foreground text-muted-foreground hover:text-foreground uppercase transition-colors flex items-center gap-1"
        >
          <Printer className="w-3 h-3" />
          Print Broadside
        </button>
      </div>
    </div>
  );
}
