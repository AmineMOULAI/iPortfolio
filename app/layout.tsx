import type { Metadata } from "next";
import "./globals.css";
import { NewspaperProvider } from "@/context/NewspaperContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Amine Moulai | Personal Journal of Record",
  description: "A personal portfolio website designed as a classic newspaper.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <TooltipProvider>
          <LanguageProvider>
            <NewspaperProvider>
              <div className="overflow-x-hidden perspective-3000">
                {children}
              </div>
              <Toaster />
              <Sonner />
            </NewspaperProvider>
          </LanguageProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
