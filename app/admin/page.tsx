"use client";

import { useState, useEffect } from "react";
import PageLayout from "@/components/newspaper/PageLayout";
import {
  Plus,
  Pencil,
  Trash2,
  Lock,
  Unlock,
  Sparkles,
  Eye,
  RefreshCw,
  Search,
  BookOpen,
  FolderCode,
  FileText,
  X,
  Check,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { ProjectData } from "@/data/projects";
import { EssayData } from "@/data/essays";
import { BookData } from "@/data/books";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Content Data
  const [content, setContent] = useState<{
    projects: ProjectData[];
    essays: EssayData[];
    books: BookData[];
  }>({ projects: [], essays: [], books: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Filters & Tabs
  const [activeTab, setActiveTab] = useState<"projects" | "essays" | "books">("projects");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<{
    type: "project" | "essay" | "book";
    oldSlug?: string;
  } | null>(null);

  // Delete State
  const [deletingItem, setDeletingItem] = useState<{
    type: "project" | "essay" | "book";
    slug: string;
    title: string;
  } | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Form Fields
  const [formType, setFormType] = useState<"project" | "essay" | "book">("project");
  const [formLang, setFormLang] = useState<"en" | "fr" | "ar">("en");
  
  const [slug, setSlug] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [titleFr, setTitleFr] = useState("");
  const [titleAr, setTitleAr] = useState("");

  const [summaryEn, setSummaryEn] = useState("");
  const [summaryFr, setSummaryFr] = useState("");
  const [summaryAr, setSummaryAr] = useState("");

  const [category, setCategory] = useState("ai");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [roleEn, setRoleEn] = useState("Creator & Developer");
  const [roleFr, setRoleFr] = useState("Créateur & Développeur");
  const [roleAr, setRoleAr] = useState("المبتكر والمطور الرئيسي");
  
  const [author, setAuthor] = useState("Robert Greene");
  const [technologies, setTechnologies] = useState("Python, Next.js, AI");
  const [githubLink, setGithubLink] = useState("");

  const [topicId, setTopicId] = useState("ai-philosophy");
  const [topicTitleEn, setTopicTitleEn] = useState("AI & Ethics");

  const [statusEn, setStatusEn] = useState<"Done" | "In progress" | "Not started">("In progress");
  const [statusFr, setStatusFr] = useState<"Terminé" | "En cours" | "Non commencé">("En cours");
  const [statusAr, setStatusAr] = useState<"مكتمل" | "قيد القراءة" | "لم يبدأ">("قيد القراءة");

  const [paragraphsEn, setParagraphsEn] = useState("");
  const [paragraphsFr, setParagraphsFr] = useState("");
  const [paragraphsAr, setParagraphsAr] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("iportfolio_admin_token");
    if (token === "admin-session-active") {
      setIsAuthenticated(true);
      fetchContent();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setAuthError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passcode }),
      });
      const data = await res.json();

      if (data.success) {
        localStorage.setItem("iportfolio_admin_token", data.token);
        setIsAuthenticated(true);
        fetchContent();
      } else {
        setAuthError(data.error || "Incorrect passcode");
      }
    } catch (err: any) {
      setAuthError("Failed to authenticate. " + err.message);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("iportfolio_admin_token");
    setIsAuthenticated(false);
  };

  const fetchContent = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/content");
      const data = await res.json();
      if (data.success) {
        setContent(data.data);
      }
    } catch (err) {
      console.error("Failed to load content:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSlug("");
    setTitleEn("");
    setTitleFr("");
    setTitleAr("");
    setSummaryEn("");
    setSummaryFr("");
    setSummaryAr("");
    setCategory("ai");
    setYear(new Date().getFullYear().toString());
    setRoleEn("Creator & Developer");
    setRoleFr("Créateur & Développeur");
    setRoleAr("المبتكر والمطور الرئيسي");
    setAuthor("Amine Moulai");
    setTechnologies("Python, Next.js, AI");
    setGithubLink("");
    setTopicId("general");
    setTopicTitleEn("General");
    setStatusEn("In progress");
    setStatusFr("En cours");
    setStatusAr("قيد القراءة");
    setParagraphsEn("");
    setParagraphsFr("");
    setParagraphsAr("");
    setImageFile(null);
    setImagePreview("");
    setEditingItem(null);
  };

  const openCreateModal = (type: "project" | "essay" | "book") => {
    resetForm();
    setFormType(type);
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const openEditModal = (type: "project" | "essay" | "book", item: any) => {
    resetForm();
    setFormType(type);
    setEditingItem({ type, oldSlug: item.slug });

    setSlug(item.slug || "");
    
    // Titles
    if (typeof item.title === "string") {
      setTitleEn(item.title);
      setTitleFr(item.title);
      setTitleAr(item.title);
    } else if (item.title) {
      setTitleEn(item.title.en || "");
      setTitleFr(item.title.fr || item.title.en || "");
      setTitleAr(item.title.ar || item.title.en || "");
    }

    // Summaries
    if (typeof item.summary === "string") {
      setSummaryEn(item.summary);
      setSummaryFr(item.summary);
      setSummaryAr(item.summary);
    } else if (item.summary) {
      setSummaryEn(item.summary.en || "");
      setSummaryFr(item.summary.fr || item.summary.en || "");
      setSummaryAr(item.summary.ar || item.summary.en || "");
    } else if (item.subtitle) {
      setSummaryEn(item.subtitle.en || "");
      setSummaryFr(item.subtitle.fr || item.subtitle.en || "");
      setSummaryAr(item.subtitle.ar || item.subtitle.en || "");
    }

    if (type === "project") {
      setCategory(item.category || "ai");
      setYear(item.year || new Date().getFullYear().toString());
      if (item.role) {
        setRoleEn(item.role.en || "Creator & Developer");
        setRoleFr(item.role.fr || item.role.en || "Créateur & Développeur");
        setRoleAr(item.role.ar || item.role.en || "المبتكر والمطور الرئيسي");
      }
      if (Array.isArray(item.technologies)) {
        setTechnologies(item.technologies.join(", "));
      }
      if (item.links && item.links.length > 0) {
        setGithubLink(item.links[0].href || "");
      }
      if (item.description) {
        setParagraphsEn(Array.isArray(item.description.en) ? item.description.en.join("\n\n") : "");
        setParagraphsFr(Array.isArray(item.description.fr) ? item.description.fr.join("\n\n") : "");
        setParagraphsAr(Array.isArray(item.description.ar) ? item.description.ar.join("\n\n") : "");
      }
    } else if (type === "essay") {
      setTopicId(item.topicId || "general");
      if (item.topicTitle) {
        setTopicTitleEn(item.topicTitle.en || "General");
      }
      if (item.content) {
        setParagraphsEn(Array.isArray(item.content.en) ? item.content.en.join("\n\n") : "");
        setParagraphsFr(Array.isArray(item.content.fr) ? item.content.fr.join("\n\n") : "");
        setParagraphsAr(Array.isArray(item.content.ar) ? item.content.ar.join("\n\n") : "");
      }
    } else if (type === "book") {
      setAuthor(item.author || "Unknown Author");
      if (item.category) {
        setCategory(typeof item.category === "string" ? item.category : item.category.en || "General");
      }
      if (item.status) {
        setStatusEn(item.status.en || "In progress");
        setStatusFr(item.status.fr || "En cours");
        setStatusAr(item.status.ar || "قيد القراءة");
      }
      if (item.insights) {
        setParagraphsEn(Array.isArray(item.insights.en) ? item.insights.en.join("\n\n") : "");
        setParagraphsFr(Array.isArray(item.insights.fr) ? item.insights.fr.join("\n\n") : "");
        setParagraphsAr(Array.isArray(item.insights.ar) ? item.insights.ar.join("\n\n") : "");
      }
      if (item.coverBg) {
        setImagePreview(item.coverBg);
      }
    }

    setIsModalOpen(true);
  };

  const handleAutoScaffold = () => {
    if (!titleFr) setTitleFr(titleEn);
    if (!titleAr) setTitleAr(titleEn);

    if (!summaryFr) setSummaryFr(summaryEn);
    if (!summaryAr) setSummaryAr(summaryEn);

    if (!paragraphsFr) setParagraphsFr(paragraphsEn);
    if (!paragraphsAr) setParagraphsAr(paragraphsEn);

    setStatusMessage("✨ Multilingual content scaffolded for French and Arabic!");
  };

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

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusMessage("");

    const splitParagraphs = (text: string) =>
      text
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean);

    try {
      const payload: any = {
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
      };

      if (slug.trim()) {
        payload.slug = slug.trim();
      }

      if (formType === "project") {
        payload.category = category;
        payload.year = year;
        payload.role = {
          en: roleEn,
          fr: roleFr || roleEn,
          ar: roleAr || roleEn,
        };
        payload.technologies = technologies.split(",").map((t) => t.trim()).filter(Boolean);
        payload.description = {
          en: splitParagraphs(paragraphsEn),
          fr: splitParagraphs(paragraphsFr || paragraphsEn),
          ar: splitParagraphs(paragraphsAr || paragraphsEn),
        };
        if (githubLink) {
          payload.links = [{ label: "GitHub", href: githubLink, external: true }];
        }
      } else if (formType === "essay") {
        payload.topicId = topicId;
        payload.topicTitle = { en: topicTitleEn, fr: topicTitleEn, ar: topicTitleEn };
        payload.subtitle = payload.summary;
        payload.date = {
          en: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" }),
          fr: new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" }),
          ar: new Date().toLocaleDateString("ar-SA", { year: "numeric", month: "long" }),
        };
        payload.content = {
          en: splitParagraphs(paragraphsEn),
          fr: splitParagraphs(paragraphsFr || paragraphsEn),
          ar: splitParagraphs(paragraphsAr || paragraphsEn),
        };
      } else if (formType === "book") {
        payload.author = author || "Unknown Author";
        payload.category = { en: category, fr: category, ar: category };
        payload.dimension = { en: "Intellectual", fr: "Intellectuelle", ar: "فكرية" };
        payload.status = {
          en: statusEn,
          fr: statusFr,
          ar: statusAr,
        };
        payload.insights = {
          en: splitParagraphs(paragraphsEn),
          fr: splitParagraphs(paragraphsFr || paragraphsEn),
          ar: splitParagraphs(paragraphsAr || paragraphsEn),
        };
      }

      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: formType,
          oldSlug: editingItem?.oldSlug,
          ...(imagePreview && imageFile ? { imageBase64: imagePreview, imageName: imageFile.name } : {}),
          payload,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatusMessage(`🎉 Successfully saved ${formType.toUpperCase()} "${data.slug}"!`);
        setIsModalOpen(false);
        fetchContent();
      } else {
        setStatusMessage(`❌ Error: ${data.error}`);
      }
    } catch (err: any) {
      setStatusMessage(`❌ Save failed: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!deletingItem) return;
    setIsDeleting(true);

    try {
      const res = await fetch(
        `/api/admin/content?type=${deletingItem.type}&slug=${deletingItem.slug}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (data.success) {
        setStatusMessage(`🗑️ Deleted ${deletingItem.type} "${deletingItem.slug}"`);
        setDeletingItem(null);
        fetchContent();
      } else {
        setStatusMessage(`❌ Failed to delete: ${data.error}`);
      }
    } catch (err: any) {
      setStatusMessage(`❌ Error deleting item: ${err.message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  // Helper getters for items title
  const getItemTitle = (item: any): string => {
    if (!item) return "Untitled";
    if (typeof item.title === "string") return item.title;
    return item.title.en || item.title.fr || item.title.ar || "Untitled";
  };

  const getItemSummary = (item: any): string => {
    if (!item) return "";
    if (typeof item.summary === "string") return item.summary;
    if (item.summary) return item.summary.en || item.summary.fr || item.summary.ar || "";
    if (item.subtitle) return item.subtitle.en || item.subtitle.fr || item.subtitle.ar || "";
    return "";
  };

  // Filter items
  const filteredProjects = content.projects.filter((p) =>
    getItemTitle(p).toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredEssays = content.essays.filter((e) =>
    getItemTitle(e).toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredBooks = content.books.filter((b) =>
    getItemTitle(b).toLowerCase().includes(searchQuery.toLowerCase())
  );

  // If Not Authenticated, show Login Gate
  if (!isAuthenticated) {
    return (
      <PageLayout pageNumber={99} sectionName="Editorial Desk · Protected Gate" showMasthead={true}>
        <div className="max-w-md mx-auto my-12 p-8 border-2 border-foreground bg-background shadow-lg text-center space-y-6">
          <div className="w-16 h-16 border-2 border-foreground rounded-full flex items-center justify-center mx-auto bg-muted">
            <Lock className="w-8 h-8 text-foreground" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block">
              RESTRICTED PRESSROOM ACCESS
            </span>
            <h1 className="font-display text-2xl md:text-3xl font-black uppercase mt-1">
              Editor Login Gate
            </h1>
            <p className="font-body text-xs text-muted-foreground italic mt-2">
              Portfolio content modification is restricted to Amine Moulai. Public visitors have read-only access.
            </p>
          </div>

          {authError && (
            <div className="p-3 border border-red-500 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs font-mono flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-left">
              <label className="font-display text-xs uppercase tracking-wider block mb-1">
                Enter Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-3 py-2 border border-foreground bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-foreground"
              />
              <span className="text-[10px] text-muted-foreground font-mono mt-1 block">
                Default passcode: <code className="font-bold">amine2026</code>
              </span>
            </div>

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-3 bg-foreground text-background font-display text-xs uppercase tracking-widest font-bold border border-foreground hover:bg-background hover:text-foreground transition-all flex items-center justify-center gap-2"
            >
              {isAuthenticating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Verifying...
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" /> Authenticate & Access Dashboard
                </>
              )}
            </button>
          </form>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout pageNumber={99} sectionName="Editorial Desk · Pressroom Dashboard" showMasthead={true}>
      <div className="max-w-6xl mx-auto space-y-8 pb-16">
        
        {/* Top Header & Admin Bar */}
        <div className="border-b-2 border-foreground pb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest px-2 py-0.5 border border-foreground bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold">
                <ShieldCheck className="w-3 h-3" /> Editor Mode Active
              </span>
              <span className="font-mono text-xs text-muted-foreground">Amine Moulai Pressroom</span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-black uppercase mt-1">
              Content Control Center
            </h1>
            <p className="font-body text-sm text-muted-foreground italic mt-1">
              Add, edit, or remove portfolio items across all languages (English, French, Arabic). Changes reflect live instantly for all visitors.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchContent()}
              className="p-2 border border-foreground hover:bg-muted transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={handleLogout}
              className="px-3 py-2 border border-foreground bg-background hover:bg-muted font-display text-xs uppercase tracking-widest flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" /> Lock Session
            </button>
          </div>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <div className="p-4 border border-foreground bg-muted font-mono text-xs flex items-center justify-between">
            <span>{statusMessage}</span>
            <button onClick={() => setStatusMessage("")} className="hover:opacity-70">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-foreground p-4 bg-background flex justify-between items-center">
            <div>
              <span className="font-mono text-[10px] uppercase text-muted-foreground block">Projects</span>
              <span className="font-display text-3xl font-black">{content.projects.length}</span>
            </div>
            <FolderCode className="w-8 h-8 text-muted-foreground stroke-1" />
          </div>

          <div className="border border-foreground p-4 bg-background flex justify-between items-center">
            <div>
              <span className="font-mono text-[10px] uppercase text-muted-foreground block">Essays & Articles</span>
              <span className="font-display text-3xl font-black">{content.essays.length}</span>
            </div>
            <FileText className="w-8 h-8 text-muted-foreground stroke-1" />
          </div>

          <div className="border border-foreground p-4 bg-background flex justify-between items-center">
            <div>
              <span className="font-mono text-[10px] uppercase text-muted-foreground block">Reading List</span>
              <span className="font-display text-3xl font-black">{content.books.length}</span>
            </div>
            <BookOpen className="w-8 h-8 text-muted-foreground stroke-1" />
          </div>
        </div>

        {/* Controls Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 border-b border-border-light pb-4">
          {/* Tabs */}
          <div className="flex border border-foreground divide-x divide-foreground">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 text-xs font-display uppercase tracking-wider flex items-center gap-2 ${
                activeTab === "projects" ? "bg-foreground text-background font-bold" : "hover:bg-muted"
              }`}
            >
              🚀 Projects ({content.projects.length})
            </button>
            <button
              onClick={() => setActiveTab("essays")}
              className={`px-4 py-2 text-xs font-display uppercase tracking-wider flex items-center gap-2 ${
                activeTab === "essays" ? "bg-foreground text-background font-bold" : "hover:bg-muted"
              }`}
            >
              ✍️ Essays ({content.essays.length})
            </button>
            <button
              onClick={() => setActiveTab("books")}
              className={`px-4 py-2 text-xs font-display uppercase tracking-wider flex items-center gap-2 ${
                activeTab === "books" ? "bg-foreground text-background font-bold" : "hover:bg-muted"
              }`}
            >
              📚 Books ({content.books.length})
            </button>
          </div>

          {/* Search & Add Button */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search titles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs font-mono border border-foreground bg-background focus:outline-none"
              />
            </div>

            <button
              onClick={() => openCreateModal(activeTab === "projects" ? "project" : activeTab === "essays" ? "essay" : "book")}
              className="px-4 py-2 bg-foreground text-background font-display text-xs uppercase tracking-widest font-bold border border-foreground hover:bg-background hover:text-foreground transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Plus className="w-4 h-4" /> Add {activeTab === "projects" ? "Project" : activeTab === "essays" ? "Essay" : "Book"}
            </button>
          </div>
        </div>

        {/* Content Table / List */}
        <div className="border border-foreground bg-background divide-y divide-border">
          {activeTab === "projects" && (
            filteredProjects.length === 0 ? (
              <div className="p-8 text-center text-xs font-mono text-muted-foreground">No projects found.</div>
            ) : (
              filteredProjects.map((project) => (
                <div key={project.slug} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/40 transition-colors">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-foreground text-background font-bold">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">/{project.slug}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold">
                      {getItemTitle(project)}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground line-clamp-2">
                      {getItemSummary(project)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`/projects/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 text-xs font-mono border border-foreground hover:bg-foreground hover:text-background flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" /> View
                    </a>
                    <button
                      onClick={() => openEditModal("project", project)}
                      className="px-2.5 py-1 text-xs font-mono border border-foreground hover:bg-foreground hover:text-background flex items-center gap-1"
                    >
                      <Pencil className="w-3 h-3" /> Edit
                    </button>
                    <button
                      onClick={() => setDeletingItem({ type: "project", slug: project.slug, title: getItemTitle(project) })}
                      className="px-2.5 py-1 text-xs font-mono border border-red-600 text-red-600 hover:bg-red-600 hover:text-white flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Delete
                    </button>
                  </div>
                </div>
              ))
            )
          )}

          {activeTab === "essays" && (
            filteredEssays.length === 0 ? (
              <div className="p-8 text-center text-xs font-mono text-muted-foreground">No essays found.</div>
            ) : (
              filteredEssays.map((essay) => (
                <div key={essay.slug} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/40 transition-colors">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-foreground text-background font-bold">
                        {essay.topicId || "essay"}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {typeof essay.date === "string" ? essay.date : essay.date?.en}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">/{essay.slug}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold">
                      {getItemTitle(essay)}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground line-clamp-2">
                      {getItemSummary(essay)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`/essays/${essay.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 text-xs font-mono border border-foreground hover:bg-foreground hover:text-background flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" /> View
                    </a>
                    <button
                      onClick={() => openEditModal("essay", essay)}
                      className="px-2.5 py-1 text-xs font-mono border border-foreground hover:bg-foreground hover:text-background flex items-center gap-1"
                    >
                      <Pencil className="w-3 h-3" /> Edit
                    </button>
                    <button
                      onClick={() => setDeletingItem({ type: "essay", slug: essay.slug, title: getItemTitle(essay) })}
                      className="px-2.5 py-1 text-xs font-mono border border-red-600 text-red-600 hover:bg-red-600 hover:text-white flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Delete
                    </button>
                  </div>
                </div>
              ))
            )
          )}

          {activeTab === "books" && (
            filteredBooks.length === 0 ? (
              <div className="p-8 text-center text-xs font-mono text-muted-foreground">No books found.</div>
            ) : (
              filteredBooks.map((book) => (
                <div key={book.slug} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/40 transition-colors">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-foreground text-background font-bold">
                        {book.author}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {book.status?.en || "In progress"}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">/{book.slug}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold">
                      {getItemTitle(book)}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground line-clamp-2">
                      {getItemSummary(book)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="/reading"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 text-xs font-mono border border-foreground hover:bg-foreground hover:text-background flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" /> View
                    </a>
                    <button
                      onClick={() => openEditModal("book", book)}
                      className="px-2.5 py-1 text-xs font-mono border border-foreground hover:bg-foreground hover:text-background flex items-center gap-1"
                    >
                      <Pencil className="w-3 h-3" /> Edit
                    </button>
                    <button
                      onClick={() => setDeletingItem({ type: "book", slug: book.slug, title: getItemTitle(book) })}
                      className="px-2.5 py-1 text-xs font-mono border border-red-600 text-red-600 hover:bg-red-600 hover:text-white flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Delete
                    </button>
                  </div>
                </div>
              ))
            )
          )}
        </div>

        {/* Modal: Add or Edit Content */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-background border-2 border-foreground w-full max-w-4xl p-6 space-y-6 max-h-[90vh] overflow-y-auto my-8 shadow-2xl">
              <div className="flex justify-between items-start border-b border-border pb-4">
                <div>
                  <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                    {editingItem ? "EDIT EXISTING ITEM" : "CREATE NEW ITEM"}
                  </span>
                  <h2 className="font-display text-2xl font-black uppercase">
                    {editingItem ? `Edit ${formType}` : `Publish New ${formType}`}
                  </h2>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 border border-foreground hover:bg-muted"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Type Switcher */}
              <div className="flex justify-between items-center flex-wrap gap-4 border-b border-border-light pb-4">
                <div className="flex gap-2">
                  {(["project", "essay", "book"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormType(t)}
                      className={`px-3 py-1.5 text-xs font-display uppercase tracking-widest border ${
                        formType === t ? "bg-foreground text-background font-bold" : "border-border-light"
                      }`}
                    >
                      {t === "project" ? "🚀 Project" : t === "essay" ? "✍️ Essay" : "📚 Book"}
                    </button>
                  ))}
                </div>

                {/* Multilingual Tabs */}
                <div className="flex border border-foreground text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setFormLang("en")}
                    className={`px-3 py-1 ${formLang === "en" ? "bg-foreground text-background font-bold" : "hover:bg-muted"}`}
                  >
                    English (EN)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormLang("fr")}
                    className={`px-3 py-1 ${formLang === "fr" ? "bg-foreground text-background font-bold" : "hover:bg-muted"}`}
                  >
                    Français (FR)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormLang("ar")}
                    className={`px-3 py-1 ${formLang === "ar" ? "bg-foreground text-background font-bold" : "hover:bg-muted"}`}
                  >
                    العربية (AR)
                  </button>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-6">
                
                {/* Basic Meta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs uppercase block mb-1">Slug (URL Identifier)</label>
                    <input
                      type="text"
                      placeholder="e.g. voxinsight"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono border border-foreground bg-background"
                    />
                    <span className="text-[10px] text-muted-foreground font-mono">Leave blank to auto-generate from English title</span>
                  </div>

                  {formType === "project" && (
                    <div>
                      <label className="font-display text-xs uppercase block mb-1">Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono border border-foreground bg-background"
                      >
                        <option value="ai">AI & Intelligence</option>
                        <option value="university">University & Academic</option>
                        <option value="gamedev">Game Dev & Simulation</option>
                      </select>
                    </div>
                  )}

                  {formType === "book" && (
                    <div>
                      <label className="font-display text-xs uppercase block mb-1">Author</label>
                      <input
                        type="text"
                        placeholder="e.g. Robert Greene"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono border border-foreground bg-background"
                      />
                    </div>
                  )}

                  {formType === "essay" && (
                    <div>
                      <label className="font-display text-xs uppercase block mb-1">Topic Category</label>
                      <input
                        type="text"
                        placeholder="e.g. AI Philosophy"
                        value={topicTitleEn}
                        onChange={(e) => setTopicTitleEn(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono border border-foreground bg-background"
                      />
                    </div>
                  )}
                </div>

                {/* Multilingual Fields */}
                <div className="p-4 border border-border bg-muted/20 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold uppercase">
                      Editing Language: {formLang === "en" ? "English" : formLang === "fr" ? "Français" : "العربية"}
                    </span>
                    <button
                      type="button"
                      onClick={handleAutoScaffold}
                      className="px-2.5 py-1 text-[11px] font-mono border border-foreground bg-background hover:bg-foreground hover:text-background transition-colors flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-amber-500" /> Auto-Scaffold FR/AR
                    </button>
                  </div>

                  <div>
                    <label className="font-display text-xs uppercase block mb-1">Title ({formLang.toUpperCase()})</label>
                    <input
                      type="text"
                      required={formLang === "en"}
                      value={formLang === "en" ? titleEn : formLang === "fr" ? titleFr : titleAr}
                      onChange={(e) => {
                        if (formLang === "en") setTitleEn(e.target.value);
                        else if (formLang === "fr") setTitleFr(e.target.value);
                        else setTitleAr(e.target.value);
                      }}
                      className="w-full px-3 py-2 text-sm font-display border border-foreground bg-background"
                      dir={formLang === "ar" ? "rtl" : "ltr"}
                    />
                  </div>

                  <div>
                    <label className="font-display text-xs uppercase block mb-1">
                      {formType === "essay" ? "Subtitle" : "Summary"} ({formLang.toUpperCase()})
                    </label>
                    <textarea
                      rows={2}
                      value={formLang === "en" ? summaryEn : formLang === "fr" ? summaryFr : summaryAr}
                      onChange={(e) => {
                        if (formLang === "en") setSummaryEn(e.target.value);
                        else if (formLang === "fr") setSummaryFr(e.target.value);
                        else setSummaryAr(e.target.value);
                      }}
                      className="w-full px-3 py-2 text-xs font-body border border-foreground bg-background"
                      dir={formLang === "ar" ? "rtl" : "ltr"}
                    />
                  </div>

                  <div>
                    <label className="font-display text-xs uppercase block mb-1">
                      {formType === "book" ? "Key Insights" : "Detailed Content"} ({formLang.toUpperCase()})
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Separate paragraphs with a blank line (double enter)."
                      value={formLang === "en" ? paragraphsEn : formLang === "fr" ? paragraphsFr : paragraphsAr}
                      onChange={(e) => {
                        if (formLang === "en") setParagraphsEn(e.target.value);
                        else if (formLang === "fr") setParagraphsFr(e.target.value);
                        else setParagraphsAr(e.target.value);
                      }}
                      className="w-full px-3 py-2 text-xs font-body border border-foreground bg-background"
                      dir={formLang === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                </div>

                {/* Additional Metadata */}
                {formType === "project" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="font-display text-xs uppercase block mb-1">Year</label>
                      <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono border border-foreground bg-background"
                      />
                    </div>
                    <div>
                      <label className="font-display text-xs uppercase block mb-1">Technologies</label>
                      <input
                        type="text"
                        placeholder="Python, Next.js, AI"
                        value={technologies}
                        onChange={(e) => setTechnologies(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono border border-foreground bg-background"
                      />
                    </div>
                    <div>
                      <label className="font-display text-xs uppercase block mb-1">GitHub Link</label>
                      <input
                        type="url"
                        placeholder="https://github.com/..."
                        value={githubLink}
                        onChange={(e) => setGithubLink(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono border border-foreground bg-background"
                      />
                    </div>
                  </div>
                )}

                {/* Submit / Cancel Buttons */}
                <div className="flex justify-end items-center gap-3 border-t border-border pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-foreground text-xs font-display uppercase tracking-wider"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-2 bg-foreground text-background font-display text-xs uppercase tracking-widest font-bold border border-foreground hover:bg-background hover:text-foreground transition-all flex items-center gap-2"
                  >
                    {isSaving ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Saving...
                      </>
                    ) : (
                      <>
                        <Check className="w-3.5 h-3.5" /> Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deletingItem && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-background border-2 border-foreground w-full max-w-md p-6 space-y-4 shadow-2xl">
              <h3 className="font-display text-xl font-black uppercase text-red-600">
                Confirm Deletion
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Are you sure you want to delete <strong className="text-foreground">{deletingItem.title}</strong>? This will permanently remove it from the portfolio dataset.
              </p>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  onClick={() => setDeletingItem(null)}
                  className="px-4 py-2 border border-foreground text-xs font-display uppercase"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={isDeleting}
                  className="px-4 py-2 bg-red-600 text-white font-display text-xs uppercase tracking-widest font-bold border border-red-600 hover:bg-red-700 transition-all flex items-center gap-1"
                >
                  {isDeleting ? "Deleting..." : "Confirm Delete"}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </PageLayout>
  );
}
