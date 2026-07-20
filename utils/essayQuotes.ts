import { getEssays, getTopics } from "@/data/essays";
import { Language } from "@/data/translations";

export interface ExtractedEssayQuote {
  quote: string;
  essaySlug: string;
  essayTitle: string;
  topicTitle: string;
}

// Fisher-Yates Shuffle helper to prevent repeat occurrences
export function shuffleArray<T>(array: T[], lastElement?: T): T[] {
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

// Automatically extract impactful quotes from essays paragraphs
export function getExtractedEssayQuotes(lang: Language): ExtractedEssayQuote[] {
  const essays = getEssays(lang);
  const topics = getTopics(lang);
  const extractedQuotes: ExtractedEssayQuote[] = [];

  essays.forEach((essay) => {
    const topic = topics.find((t) => t.topic_id === essay.topicId);
    const topicTitle = topic ? topic.topic_title : (lang === 'ar' ? 'مقال رأي' : 'Essay');

    // Extract sentences or short paragraphs that make powerful quotes
    essay.content.forEach((paragraph) => {
      // Split paragraph into sentences if too long, or use concise paragraphs directly
      const sentences = paragraph.split(/(?<=[.!?؟])\s+/);
      
      sentences.forEach((sentence) => {
        const trimmed = sentence.trim();
        // Keep quotes that are between 40 and 220 characters long
        if (trimmed.length >= 40 && trimmed.length <= 220) {
          // Remove surrounding brackets or quotes if present
          const cleanQuote = trimmed.replace(/^[«"“'‘]/, '').replace(/[»"”'’]$/, '').trim();
          extractedQuotes.push({
            quote: cleanQuote,
            essaySlug: essay.slug,
            essayTitle: essay.title,
            topicTitle: topicTitle
          });
        }
      });
    });
  });

  return extractedQuotes;
}
