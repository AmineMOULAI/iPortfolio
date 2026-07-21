import fs from "fs";
import path from "path";

export interface LocalizedText {
  en: string;
  fr: string;
  ar: string;
}

export interface LocalizedArray {
  en: string[];
  fr: string[];
  ar: string[];
}

export interface PublishProjectPayload {
  slug?: string;
  title: string | LocalizedText;
  category: "university" | "ai" | "gamedev";
  summary: string | LocalizedText;
  year?: string;
  role?: string | LocalizedText;
  technologies?: string[];
  description: string[] | LocalizedArray;
  links?: Array<{ label: string; href: string; external?: boolean }>;
}

export interface PublishEssayPayload {
  slug?: string;
  topicId?: string;
  topicTitle?: string | LocalizedText;
  title: string | LocalizedText;
  subtitle: string | LocalizedText;
  date?: string | LocalizedText;
  content: string[] | LocalizedArray;
  notes?: string[] | LocalizedArray;
  references?: string[] | LocalizedArray;
}

export interface PublishBookPayload {
  slug?: string;
  title: string | LocalizedText;
  author: string;
  category: string | LocalizedText;
  dimension?: string | LocalizedText;
  dates?: string | LocalizedText;
  status?: {
    en: "Done" | "In progress" | "Not started";
    fr: "Terminé" | "En cours" | "Non commencé";
    ar: "مكتمل" | "قيد القراءة" | "لم يبدأ";
  };
  insights: string[] | LocalizedArray;
  coverBg?: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toLocalizedText(input: string | LocalizedText | undefined, fallback: string = ""): LocalizedText {
  if (!input) {
    return { en: fallback, fr: fallback, ar: fallback };
  }
  if (typeof input === "string") {
    return { en: input, fr: input, ar: input };
  }
  return {
    en: input.en || fallback,
    fr: input.fr || input.en || fallback,
    ar: input.ar || input.en || fallback,
  };
}

function toLocalizedArray(input: string[] | LocalizedArray | undefined): LocalizedArray {
  if (!input) {
    return { en: [], fr: [], ar: [] };
  }
  if (Array.isArray(input)) {
    return { en: input, fr: input, ar: input };
  }
  return {
    en: input.en || [],
    fr: input.fr || input.en || [],
    ar: input.ar || input.en || [],
  };
}

export function publishProject(payload: PublishProjectPayload, projectRoot: string = process.cwd()): { success: boolean; slug: string } {
  const filePath = path.join(projectRoot, "data", "projects.ts");
  const rawContent = fs.readFileSync(filePath, "utf-8");

  const titleLoc = toLocalizedText(payload.title, "Untitled Project");
  const slug = payload.slug || slugify(titleLoc.en);
  const summaryLoc = toLocalizedText(payload.summary, "");
  const roleLoc = toLocalizedText(payload.role, "Creator");
  const descLoc = toLocalizedArray(payload.description);
  const year = payload.year || new Date().getFullYear().toString();
  const category = payload.category || "ai";
  const technologies = payload.technologies || [];
  const links = payload.links || [];

  const newProjectObj = {
    slug,
    title: titleLoc,
    category,
    summary: summaryLoc,
    year,
    role: roleLoc,
    technologies,
    description: descLoc,
    ...(links.length > 0 ? { links } : {}),
  };

  const projectJson = JSON.stringify(newProjectObj, null, 4);

  // Prepend into rawProjects array
  const marker = "export const rawProjects: ProjectData[] = [";
  if (!rawContent.includes(marker)) {
    throw new Error("Could not locate rawProjects array in data/projects.ts");
  }

  const updatedContent = rawContent.replace(
    marker,
    `${marker}\n  ${projectJson},`
  );

  fs.writeFileSync(filePath, updatedContent, "utf-8");
  return { success: true, slug };
}

export function publishEssay(payload: PublishEssayPayload, projectRoot: string = process.cwd()): { success: boolean; slug: string } {
  const filePath = path.join(projectRoot, "data", "essays.ts");
  const rawContent = fs.readFileSync(filePath, "utf-8");

  const titleLoc = toLocalizedText(payload.title, "Untitled Essay");
  const slug = payload.slug || slugify(titleLoc.en);
  const subtitleLoc = toLocalizedText(payload.subtitle, "");
  const dateLoc = toLocalizedText(payload.date, new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" }));
  const contentLoc = toLocalizedArray(payload.content);
  const notesLoc = payload.notes ? toLocalizedArray(payload.notes) : undefined;
  const refsLoc = payload.references ? toLocalizedArray(payload.references) : undefined;
  const topicId = payload.topicId || "general";
  const topicTitleLoc = payload.topicTitle ? toLocalizedText(payload.topicTitle, "General") : undefined;

  const newEssayObj = {
    slug,
    ...(topicId ? { topicId } : {}),
    ...(topicTitleLoc ? { topicTitle: topicTitleLoc } : {}),
    title: titleLoc,
    subtitle: subtitleLoc,
    date: dateLoc,
    content: contentLoc,
    ...(notesLoc ? { notes: notesLoc } : {}),
    ...(refsLoc ? { references: refsLoc } : {}),
  };

  const essayJson = JSON.stringify(newEssayObj, null, 4);

  const marker = "export const rawEssays: EssayData[] = [";
  if (!rawContent.includes(marker)) {
    throw new Error("Could not locate rawEssays array in data/essays.ts");
  }

  const updatedContent = rawContent.replace(
    marker,
    `${marker}\n  ${essayJson},`
  );

  fs.writeFileSync(filePath, updatedContent, "utf-8");
  return { success: true, slug };
}

export function publishBook(payload: PublishBookPayload, projectRoot: string = process.cwd()): { success: boolean; slug: string } {
  const filePath = path.join(projectRoot, "data", "books.ts");
  const rawContent = fs.readFileSync(filePath, "utf-8");

  const titleLoc = toLocalizedText(payload.title, "Untitled Book");
  const slug = payload.slug || slugify(titleLoc.en);
  const categoryLoc = toLocalizedText(payload.category, "General");
  const dimensionLoc = toLocalizedText(payload.dimension, "Intellectual");
  const datesLoc = payload.dates ? toLocalizedText(payload.dates, "") : undefined;
  const insightsLoc = toLocalizedArray(payload.insights);
  const author = payload.author || "Unknown Author";

  const defaultStatus = {
    en: "In progress" as const,
    fr: "En cours" as const,
    ar: "قيد القراءة" as const,
  };

  const newBookObj = {
    slug,
    title: titleLoc,
    author,
    category: categoryLoc,
    dimension: dimensionLoc,
    ...(datesLoc ? { dates: datesLoc } : {}),
    status: payload.status || defaultStatus,
    insights: insightsLoc,
    ...(payload.coverBg ? { coverBg: payload.coverBg } : {}),
  };

  const bookJson = JSON.stringify(newBookObj, null, 4);

  const marker = "export const rawBooks: BookData[] = [";
  if (!rawContent.includes(marker)) {
    throw new Error("Could not locate rawBooks array in data/books.ts");
  }

  const updatedContent = rawContent.replace(
    marker,
    `${marker}\n  ${bookJson},`
  );

  fs.writeFileSync(filePath, updatedContent, "utf-8");
  return { success: true, slug };
}
