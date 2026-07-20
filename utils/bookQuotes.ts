import { getBooks } from "@/data/books";
import { Language } from "@/data/translations";

export interface ExtractedBookInsight {
  insight: string;
  bookSlug: string;
  bookTitle: string;
  author: string;
  category: string;
}

// Fisher-Yates Shuffle helper to prevent repeat occurrences
export function shuffleBookArray<T>(array: T[], lastElement?: T): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  if (lastElement && result.length > 1 && result[0] === lastElement) {
    [result[0], result[1]] = [result[1], result[0]];
  }
  return result;
}

// Automatically extract key insights from books database
export function getExtractedBookInsights(lang: Language): ExtractedBookInsight[] {
  const books = getBooks(lang);
  const extracted: ExtractedBookInsight[] = [];

  books.forEach((book) => {
    book.insights.forEach((insight) => {
      const trimmed = insight.trim();
      if (trimmed.length > 0) {
        extracted.push({
          insight: trimmed,
          bookSlug: book.slug,
          bookTitle: book.title,
          author: book.author,
          category: book.category
        });
      }
    });
  });

  return extracted;
}
