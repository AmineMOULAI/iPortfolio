"use client";
import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from "@/lib/utils";
import { playPaperSound } from "@/utils/audio";

interface PageLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

const PageLink = ({ href, children, className, title }: PageLinkProps) => {
  return (
    <Link 
      href={href} 
      title={title}
      onClick={() => playPaperSound()}
      className={cn("hover:text-muted-foreground transition-colors cursor-pointer", className)}
    >
      {children}
    </Link>
  );
};

export default PageLink;
