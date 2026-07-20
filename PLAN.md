# iPortfolio Project Master Strategy & Implementation Plan

## Project Vision
A personal portfolio styled as a classic digital newspaper for **Amine Moulai**, featuring 3-language support (English, French, Arabic RTL), editorial typography, interactive dynamic sections, and static site generation (SSG) for high performance.

---

## Phase 1: Architecture & UI Foundation (Completed)
- [x] **Framework Migration**: Migrated from Vite to Next.js 14 (App Router) + TypeScript.
- [x] **Newspaper Design System**: Custom borders (`newspaper-rule-double`, `column-rule`), drop-caps (`drop-cap`), and paper textures.
- [x] **Core Layout**: Masthead nameplate, multi-column front page, contents sidebar, and issue footer.

## Phase 2: Multi-Language (i18n) & RTL Engine (Completed)
- [x] **Context Provider**: Built `LanguageProvider` supporting `'en'`, `'fr'`, and `'ar'` with `localStorage` persistence.
- [x] **RTL Layout Engine**: Configured `dir="rtl"` with Tailwind logical modifiers (`rtl:border-r`, `rtl:pr-6`, `rtl:left-4`).
- [x] **Arabic Typography**: Integrated Google Fonts (`Cairo` for headlines, `Amiri` for body text).
- [x] **Language Switcher**: Built header language toggle in `components/newspaper/LanguageSwitcher.tsx`.

## Phase 3: Language Content Refinement Strategy (In Progress)
- [x] **Step 3.1 — English (`EN`) Review & Refinement**:
  - [x] Refined main editorial bio (*3rd-year CS Student at Université de Perpignan*).
  - [x] Expanded project details (*VoxInsight*, *Psycho-robots*, *RV32I & Carcassonne*, *Python Game Suite*, *Automotive Workflows*, *Godot Prototype*).
  - [x] Grouped essays/articles by **Topics** (e.g. *Topic: La Centralité du Coran / مركزية القرآن*) with topic filtering and related article recommendations.
- [ ] **Step 3.2 — French (`FR`) Review & Refinement**:
  - [ ] Polish French academic and technical vocabulary across all pages and projects.
  - [ ] Ensure natural, native French phrasing for essay subtitles and project summaries.
- [x] **Step 3.3 — Arabic (`AR`) Review & Refinement**:
  - [x] Integrated custom Arabic calligraphy logo (`amine_kufi.png`) exclusively for the Arabic (`ar`) version in full and compact Masthead headers.
  - [ ] Polish Arabic technical terms (الذكاء الاصطناعي، أتمتة العمليات، معمارية المعالجات).
  - [ ] Verify RTL font scaling and line height adjustments across all viewports.

## Phase 4: Build Stability & Performance (Completed)
- [x] **Server/Client Component Separation**: Dynamic route `[slug]` pages export `generateStaticParams()` while delegating UI rendering to client components.
- [x] **Dev Cache Resolution**: Established standard fix for dev server chunk caching (`rm -rf .next`).
- [x] **Reading List & Book Detail Pages**: Built clean `/reading` grid (titles & tags) and 21 dedicated `/reading/[slug]` pages presenting each book with its cover mockup, dates, status, and insights.
- [x] **Production Static Generation**: Verified `next build` generates 38 static pages cleanly without errors.

## Phase 5: Final Quality Assurance & Deployment (Ready)
- [ ] Final visual inspection across English, French, and Arabic modes.
- [ ] Deploy to Vercel via GitHub connection.
