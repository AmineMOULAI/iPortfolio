"use client";

import { useState } from "react";
import PageLayout from "@/components/newspaper/PageLayout";
import SectionHeader from "@/components/newspaper/SectionHeader";
import { Plus, Newspaper, CheckCircle2, Sparkles, Image as ImageIcon, ArrowRight } from "lucide-react";

export default function AdminPublishPage() {
  const [type, setType] = useState<"project" | "essay" | "book">("project");
  const [titleEn, setTitleEn] = useState("");
  const [titleFr, setTitleFr] = useState("");
  const [titleAr, setTitleAr] = useState("");
  
  const [summaryEn, setSummaryEn] = useState("");
  const [summaryFr, setSummaryFr] = useState("");
  const [summaryAr, setSummaryAr] = useState("");

  const [category, setCategory] = useState("ai");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [role, setRole] = useState("Creator & Developer");
  const [author, setAuthor] = useState("Amine Moulai");
  const [technologies, setTechnologies] = useState("Python, Next.js, AI");
  const [githubLink, setGithubLink] = useState("");

  const [paragraphsEn, setParagraphsEn] = useState("");
  const [paragraphsFr, setParagraphsFr] = useState("");
  const [paragraphsAr, setParagraphsAr] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [publishedSlug, setPublishedSlug] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAutoScaffold = () => {
    if (!titleFr) setTitleFr(titleEn);
    if (!titleAr) setTitleAr(titleEn);

    if (!summaryFr) setSummaryFr(summaryEn);
    if (!summaryAr) setSummaryAr(summaryEn);

    if (!paragraphsFr) setParagraphsFr(paragraphsEn);
    if (!paragraphsAr) setParagraphsAr(paragraphsEn);

    setStatusMessage("✨ Multilingual scaffolding applied for English, French, and Arabic!");
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const splitParagraphs = (text: string) =>
        text
          .split("\n\n")
          .map((p) => p.trim())
          .filter(Boolean);

      const payload: any = {
        type,
        title: {
          en: titleEn || "Untitled",
          fr: titleFr || titleEn || "Untitled",
          ar: titleAr || titleEn || "Untitled",
        },
        summary: {
          en: summaryEn,
          fr: summaryFr || summaryEn,
          ar: summaryAr || summaryEn,
        },
        ...(imagePreview && imageFile
          ? { imageBase64: imagePreview, imageName: imageFile.name }
          : {}),
      };

      if (type === "project") {
        payload.category = category;
        payload.year = year;
        payload.role = { en: role, fr: role, ar: role };
        payload.technologies = technologies.split(",").map((t) => t.trim()).filter(Boolean);
        payload.description = {
          en: splitParagraphs(paragraphsEn),
          fr: splitParagraphs(paragraphsFr || paragraphsEn),
          ar: splitParagraphs(paragraphsAr || paragraphsEn),
        };
        if (githubLink) {
          payload.links = [{ label: "GitHub", href: githubLink, external: true }];
        }
      } else if (type === "book") {
        payload.author = author;
        payload.category = { en: category, fr: category, ar: category };
        payload.insights = {
          en: splitParagraphs(paragraphsEn),
          fr: splitParagraphs(paragraphsFr || paragraphsEn),
          ar: splitParagraphs(paragraphsAr || paragraphsEn),
        };
      } else {
        // Essay
        payload.subtitle = payload.summary;
        payload.content = {
          en: splitParagraphs(paragraphsEn),
          fr: splitParagraphs(paragraphsFr || paragraphsEn),
          ar: splitParagraphs(paragraphsAr || paragraphsEn),
        };
      }

      const res = await fetch("/api/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setPublishedSlug(data.slug);
        setStatusMessage(`🎉 Successfully published ${type.toUpperCase()}! Slug: ${data.slug}`);
      } else {
        setStatusMessage(`❌ Error: ${data.error}`);
      }
    } catch (err: any) {
      setStatusMessage(`❌ Publish failed: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout pageNumber={99} sectionName="Editorial Desk · Pressroom" showMasthead={true}>
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b-2 border-foreground pb-4 flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block">
              AUTHENTIC NEWSPAPER PRESSROOM
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-black uppercase">
              The Editor&apos;s Desk
            </h1>
            <p className="font-body text-sm text-muted-foreground italic mt-1">
              Add new projects, essays, or reading list entries directly into your digital portfolio with full 3-language auto-generation.
            </p>
          </div>

          <div className="flex gap-2">
            {(["project", "essay", "book"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`px-4 py-2 text-xs font-display uppercase tracking-widest border transition-all ${
                  type === t
                    ? "bg-foreground text-background font-bold border-foreground shadow-sm"
                    : "border-border-light hover:border-foreground"
                }`}
              >
                {t === "project" ? "🚀 Project" : t === "essay" ? "✍️ Essay" : "📚 Book"}
              </button>
            ))}
          </div>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div className="p-4 border border-foreground bg-muted font-mono text-xs flex items-center justify-between">
            <span>{statusMessage}</span>
            {publishedSlug && (
              <a
                href={type === "project" ? `/projects/${publishedSlug}` : type === "essay" ? `/essays/${publishedSlug}` : "/reading"}
                className="underline hover:opacity-80 font-bold ml-4 inline-flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                View Live Item <ArrowRight className="w-3 h-3" />
              </a>
            )}
          </div>
        )}

        <form onSubmit={handlePublish} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Form Inputs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Title & Metadata */}
            <div className="border border-border p-5 space-y-4 bg-background">
              <h2 className="font-display text-sm uppercase tracking-widest font-bold border-b border-border-light pb-2 flex items-center gap-2">
                <Newspaper className="w-4 h-4" /> Content Metadata
              </h2>

              <div>
                <label className="block font-mono text-xs uppercase mb-1">Title (English)</label>
                <input
                  type="text"
                  required
                  value={titleEn}
                  onChange={(e) => setTitleEn(e.target.value)}
                  placeholder="e.g. Autonomous Multi-Agent Neural Mesh"
                  className="w-full p-2 border border-border bg-background font-body text-sm focus:outline-none focus:border-foreground"
                />
              </div>

              {type === "project" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase mb-1">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full p-2 border border-border bg-background font-body text-sm"
                    >
                      <option value="ai">AI & Machine Learning</option>
                      <option value="university">University Project</option>
                      <option value="gamedev">Game Dev & Graphics</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase mb-1">Year</label>
                    <input
                      type="text"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full p-2 border border-border bg-background font-body text-sm"
                    />
                  </div>
                </div>
              )}

              {type === "book" && (
                <div>
                  <label className="block font-mono text-xs uppercase mb-1">Author</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Douglas Hofstadter"
                    className="w-full p-2 border border-border bg-background font-body text-sm"
                  />
                </div>
              )}

              {type === "project" && (
                <div>
                  <label className="block font-mono text-xs uppercase mb-1">Technologies (Comma separated)</label>
                  <input
                    type="text"
                    value={technologies}
                    onChange={(e) => setTechnologies(e.target.value)}
                    placeholder="Python, PyTorch, Next.js, Tailwind"
                    className="w-full p-2 border border-border bg-background font-body text-sm"
                  />
                </div>
              )}

              <div>
                <label className="block font-mono text-xs uppercase mb-1">Summary / Lead Paragraph (English)</label>
                <textarea
                  rows={2}
                  required
                  value={summaryEn}
                  onChange={(e) => setSummaryEn(e.target.value)}
                  placeholder="Concise overview or editorial lead..."
                  className="w-full p-2 border border-border bg-background font-body text-sm focus:outline-none focus:border-foreground"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block font-mono text-xs uppercase mb-1 flex items-center gap-1">
                  <ImageIcon className="w-3.5 h-3.5" /> Attach Photo / Graphic (Optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 border border-border bg-background text-xs font-mono"
                />
                {imagePreview && (
                  <div className="mt-2 relative aspect-video border border-foreground overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>

            {/* Main Content Paragraphs */}
            <div className="border border-border p-5 space-y-4 bg-background">
              <h2 className="font-display text-sm uppercase tracking-widest font-bold border-b border-border-light pb-2">
                Article Body Paragraphs (English)
              </h2>
              <p className="font-mono text-xs text-muted-foreground">
                Separate paragraphs by pressing Enter twice.
              </p>
              <textarea
                rows={6}
                required
                value={paragraphsEn}
                onChange={(e) => setParagraphsEn(e.target.value)}
                placeholder="Write or paste your article text here..."
                className="w-full p-2 border border-border bg-background font-body text-sm focus:outline-none focus:border-foreground leading-relaxed"
              />
            </div>

            {/* Multilingual Translation Scaffold Button */}
            <div className="border border-border p-5 bg-muted/30 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" /> Multilingual Support (EN / FR / AR)
                  </h3>
                  <p className="font-body text-xs text-muted-foreground">
                    Click to auto-scaffold missing French and Arabic translations instantly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAutoScaffold}
                  className="px-3 py-1.5 text-xs font-mono uppercase bg-foreground text-background hover:opacity-90 transition-opacity"
                >
                  Auto-Scaffold
                </button>
              </div>

              {/* Collapsible language overrides */}
              <details className="text-xs font-mono space-y-3 pt-2 border-t border-border-light">
                <summary className="cursor-pointer font-bold uppercase">View / Edit French & Arabic Overrides</summary>
                
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block mb-1">Titre (Français)</label>
                    <input
                      type="text"
                      value={titleFr}
                      onChange={(e) => setTitleFr(e.target.value)}
                      className="w-full p-1.5 border border-border bg-background font-body"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">العنوان (العربية)</label>
                    <input
                      type="text"
                      value={titleAr}
                      onChange={(e) => setTitleAr(e.target.value)}
                      className="w-full p-1.5 border border-border bg-background font-body text-right"
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Texte principal (Français)</label>
                    <textarea
                      rows={3}
                      value={paragraphsFr}
                      onChange={(e) => setParagraphsFr(e.target.value)}
                      className="w-full p-1.5 border border-border bg-background font-body"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">النص الرئيسي (العربية)</label>
                    <textarea
                      rows={3}
                      value={paragraphsAr}
                      onChange={(e) => setParagraphsAr(e.target.value)}
                      className="w-full p-1.5 border border-border bg-background font-body text-right"
                      dir="rtl"
                    />
                  </div>
                </div>
              </details>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-foreground text-background font-display font-black text-sm uppercase tracking-widest hover:opacity-90 transition-opacity border-2 border-foreground flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Printing & Publishing..." : `Publish ${type.toUpperCase()} to Portfolio`}
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Live Broadsheet Preview */}
          <div className="lg:col-span-5 border-2 border-foreground p-6 bg-background self-start space-y-4 shadow-sm">
            <div className="border-b border-foreground pb-2 flex justify-between items-center">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                LIVE BROADSHEET PREVIEW
              </span>
              <span className="font-mono text-[10px] bg-foreground text-background px-2 py-0.5 uppercase">
                {type}
              </span>
            </div>

            <article className="space-y-3">
              <h2 className="font-display text-xl md:text-2xl font-black leading-tight uppercase">
                {titleEn || "Your Headline Will Appear Here"}
              </h2>

              <p className="font-body text-xs text-muted-foreground uppercase tracking-widest border-b border-border-light pb-2">
                {year} · {category.toUpperCase()} · BY {role.toUpperCase()}
              </p>

              {imagePreview ? (
                <figure>
                  <div className="aspect-video bg-muted border border-border overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <figcaption className="text-[11px] font-body text-muted-foreground italic mt-1 border-b border-border-light pb-1">
                    [ Plate I: Press Illustration ]
                  </figcaption>
                </figure>
              ) : (
                <div className="aspect-video bg-muted border border-dashed border-border flex items-center justify-center text-muted-foreground font-body text-xs italic">
                  [ No Photo Attached ]
                </div>
              )}

              <p className="font-body text-sm font-semibold leading-relaxed border-l-2 border-foreground pl-3 my-2">
                {summaryEn || "The lead summary of your article or project will be rendered here in bold press style."}
              </p>

              <div className="font-body text-xs leading-relaxed space-y-2 text-foreground/90">
                {paragraphsEn ? (
                  paragraphsEn.split("\n\n").map((p, idx) => (
                    <p key={idx} className={idx === 0 ? "drop-cap" : ""}>
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="italic text-muted-foreground">
                    Body text paragraphs will be formatted in clean broadsheet newspaper serif typography.
                  </p>
                )}
              </div>

              {technologies && type === "project" && (
                <div className="pt-2 border-t border-border-light flex flex-wrap gap-1">
                  {technologies.split(",").map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 border border-border bg-muted">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
