import fs from "fs";
import path from "path";

const ROOT_DIR = process.cwd();
const DRAFTS_DIR = path.join(ROOT_DIR, "content", "drafts");
const UPLOADS_DIR = path.join(ROOT_DIR, "public", "uploads");

// Ensure directories exist
if (!fs.existsSync(DRAFTS_DIR)) {
  fs.mkdirSync(DRAFTS_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

function parseFrontMatter(text) {
  let meta = {};
  let contentText = text;

  if (text.startsWith("---")) {
    const endFmIndex = text.indexOf("---", 3);
    if (endFmIndex !== -1) {
      const fmString = text.substring(3, endFmIndex).trim();
      contentText = text.substring(endFmIndex + 3).trim();

      const lines = fmString.split("\n");
      for (const line of lines) {
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
          const key = line.substring(0, colonIndex).trim();
          let value = line.substring(colonIndex + 1).trim();

          // Basic array parsing if comma separated
          if (value.startsWith("[") && value.endsWith("]")) {
            value = value.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, ""));
          }
          meta[key] = value;
        }
      }
    }
  }

  return { meta, contentText };
}

function processContentParagraphs(contentText) {
  // Split by double line breaks or headers
  const rawParagraphs = contentText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0 && !p.startsWith("---"));

  return rawParagraphs;
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function processDraftFile(filePath) {
  console.log(`\n🗞️  Processing draft: ${filePath}`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { meta, contentText } = parseFrontMatter(raw);

  const type = meta.type || "essay"; // 'project' | 'essay' | 'book'
  const title = meta.title || path.basename(filePath, path.extname(filePath));
  const slug = meta.slug || slugify(title);

  // Process images in draft directory if directory draft
  const draftDir = path.dirname(filePath);
  const filesInDir = fs.readdirSync(draftDir);
  for (const file of filesInDir) {
    if (/\.(png|jpe?g|webp|gif|svg)$/i.test(file)) {
      const src = path.join(draftDir, file);
      const dest = path.join(UPLOADS_DIR, `${slug}-${file}`);
      fs.copyFileSync(src, dest);
      console.log(`  📸 Copied image to /uploads/${slug}-${file}`);
    }
  }

  const paragraphs = processContentParagraphs(contentText);

  const localizedTitle = meta["title_fr"] || meta["title_ar"] ? {
    en: meta.title_en || meta.title || title,
    fr: meta.title_fr || meta.title || title,
    ar: meta.title_ar || meta.title || title,
  } : title;

  const localizedSummary = meta["summary_fr"] || meta["summary_ar"] ? {
    en: meta.summary_en || meta.summary || meta.subtitle || "",
    fr: meta.summary_fr || meta.summary || meta.subtitle || "",
    ar: meta.summary_ar || meta.summary || meta.subtitle || "",
  } : (meta.summary || meta.subtitle || paragraphs[0] || "");

  const localizedParagraphs = {
    en: meta.content_en ? meta.content_en.split("\n\n") : paragraphs,
    fr: meta.content_fr ? meta.content_fr.split("\n\n") : paragraphs,
    ar: meta.content_ar ? meta.content_ar.split("\n\n") : paragraphs,
  };

  // Dynamic import of publisher module
  const publisher = await import("../lib/publisher.ts");

  if (type === "project") {
    const result = publisher.publishProject({
      slug,
      title: localizedTitle,
      category: meta.category || "ai",
      summary: localizedSummary,
      year: meta.year || new Date().getFullYear().toString(),
      role: meta.role || "Creator & Developer",
      technologies: Array.isArray(meta.technologies)
        ? meta.technologies
        : (meta.technologies || "").split(",").map((s) => s.trim()).filter(Boolean),
      description: localizedParagraphs,
      links: meta.github ? [{ label: "GitHub", href: meta.github, external: true }] : [],
    }, ROOT_DIR);
    console.log(`✅  Successfully published Project: "${title}" (slug: ${result.slug})`);
  } else if (type === "book") {
    const result = publisher.publishBook({
      slug,
      title: localizedTitle,
      author: meta.author || "Unknown Author",
      category: meta.category || "General",
      dimension: meta.dimension || "Intellectual",
      dates: meta.dates || undefined,
      status: {
        en: meta.status || "In progress",
        fr: meta.status_fr || "En cours",
        ar: meta.status_ar || "قيد القراءة",
      },
      insights: localizedParagraphs,
      coverBg: meta.coverBg || "bg-amber-900/30 border-amber-800",
    }, ROOT_DIR);
    console.log(`✅  Successfully published Book: "${title}" (slug: ${result.slug})`);
  } else {
    // Default: Essay
    const result = publisher.publishEssay({
      slug,
      topicId: meta.topicId || "general",
      topicTitle: meta.topicTitle || "Essays",
      title: localizedTitle,
      subtitle: localizedSummary,
      date: meta.date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" }),
      content: localizedParagraphs,
    }, ROOT_DIR);
    console.log(`✅  Successfully published Essay: "${title}" (slug: ${result.slug})`);
  }
}

async function main() {
  const argFile = process.argv[2];

  if (argFile) {
    const fullPath = path.isAbsolute(argFile) ? argFile : path.join(ROOT_DIR, argFile);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ File not found: ${fullPath}`);
      process.exit(1);
    }
    await processDraftFile(fullPath);
  } else {
    // Scan content/drafts
    const files = fs.readdirSync(DRAFTS_DIR);
    const mdFiles = files.filter((f) => f.endsWith(".md") || f.endsWith(".txt"));

    if (mdFiles.length === 0) {
      console.log(`ℹ️  No draft files found in ${DRAFTS_DIR}`);
      console.log(`💡  Drop a markdown file in content/drafts/ or run: node scripts/publish.mjs path/to/article.md`);
      return;
    }

    for (const f of mdFiles) {
      await processDraftFile(path.join(DRAFTS_DIR, f));
    }
  }
}

main().catch((err) => {
  console.error("❌ Error publishing draft:", err);
  process.exit(1);
});
