import fs from "fs";
import path from "path";
import { rawProjects, ProjectData } from "@/data/projects";
import { rawEssays, EssayData } from "@/data/essays";
import { rawBooks, BookData } from "@/data/books";

function getFilePath(fileName: string): string {
  return path.join(process.cwd(), "data", fileName);
}

function updateArrayInFile(fileName: string, marker: string, newArray: any[]): void {
  const filePath = getFilePath(fileName);
  const content = fs.readFileSync(filePath, "utf-8");
  
  const startIndex = content.indexOf(marker);
  if (startIndex === -1) {
    throw new Error(`Could not locate marker "${marker}" in ${fileName}`);
  }

  const arrayStart = startIndex + marker.length;
  const arrayEnd = content.indexOf("\n];", arrayStart);
  if (arrayEnd === -1) {
    throw new Error(`Could not locate closing "];" in ${fileName}`);
  }

  const jsonString = JSON.stringify(newArray, null, 2);
  const updatedContent =
    content.substring(0, arrayStart) +
    "\n" +
    jsonString.substring(1, jsonString.length - 1) +
    "\n" +
    content.substring(arrayEnd);

  fs.writeFileSync(filePath, updatedContent, "utf-8");
}

export function getAllContent() {
  return {
    projects: rawProjects,
    essays: rawEssays,
    books: rawBooks,
  };
}

export function saveProject(project: ProjectData, oldSlug?: string) {
  const targetSlug = oldSlug || project.slug;
  const index = rawProjects.findIndex((p) => p.slug === targetSlug);

  let updated: ProjectData[];
  if (index !== -1) {
    updated = [...rawProjects];
    updated[index] = project;
  } else {
    updated = [project, ...rawProjects];
  }

  updateArrayInFile("projects.ts", "export const rawProjects: ProjectData[] = [", updated);
  return { success: true, slug: project.slug };
}

export function deleteProject(slug: string) {
  const updated = rawProjects.filter((p) => p.slug !== slug);
  updateArrayInFile("projects.ts", "export const rawProjects: ProjectData[] = [", updated);
  return { success: true };
}

export function saveEssay(essay: EssayData, oldSlug?: string) {
  const targetSlug = oldSlug || essay.slug;
  const index = rawEssays.findIndex((e) => e.slug === targetSlug);

  let updated: EssayData[];
  if (index !== -1) {
    updated = [...rawEssays];
    updated[index] = essay;
  } else {
    updated = [essay, ...rawEssays];
  }

  updateArrayInFile("essays.ts", "export const rawEssays: EssayData[] = [", updated);
  return { success: true, slug: essay.slug };
}

export function deleteEssay(slug: string) {
  const updated = rawEssays.filter((e) => e.slug !== slug);
  updateArrayInFile("essays.ts", "export const rawEssays: EssayData[] = [", updated);
  return { success: true };
}

export function saveBook(book: BookData, oldSlug?: string) {
  const targetSlug = oldSlug || book.slug;
  const index = rawBooks.findIndex((b) => b.slug === targetSlug);

  let updated: BookData[];
  if (index !== -1) {
    updated = [...rawBooks];
    updated[index] = book;
  } else {
    updated = [book, ...rawBooks];
  }

  updateArrayInFile("books.ts", "export const rawBooks: BookData[] = [", updated);
  return { success: true, slug: book.slug };
}

export function deleteBook(slug: string) {
  const updated = rawBooks.filter((b) => b.slug !== slug);
  updateArrayInFile("books.ts", "export const rawBooks: BookData[] = [", updated);
  return { success: true };
}
