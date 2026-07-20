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
  icons: {
    icon: "/amine_kufi.png",
    shortcut: "/amine_kufi.png",
    apple: "/amine_kufi.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cairo:wght@400;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=EB+Garamond:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Naskh+Arabic:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Readex+Pro:wght@400;600;700&family=Reem+Kufi:wght@500;600;700;800&family=Scheherazade+New:wght@400;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&display=swap" 
          rel="stylesheet" 
        />
      </head>
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
