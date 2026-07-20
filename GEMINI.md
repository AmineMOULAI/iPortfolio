# Context & AI Guidelines for iPortfolio

## Project Context
- **Name**: iPortfolio
- **Theme**: Digital Newspaper Personal Portfolio for **Amine Moulai** (L3 Computer Science student at Université de Perpignan specializing in AI, Automation, and Cognitive Systems).
- **Goal**: Showcase projects, academic works, essays, and reading lists in an editorial newspaper-style format with full 3-language support (English, French, Arabic).

## Tech Stack
- **Framework**: Next.js 14 (App Router), React 18, TypeScript.
- **Styling**: Tailwind CSS, custom newspaper CSS tokens in `app/globals.css`.
- **Fonts**:
  - English & French: `Playfair Display` (Headlines), `Source Serif 4` (Body), `Source Sans 3` (Sans-serif UI), `Source Code Pro` (Mono).
  - Arabic: `Cairo` (Headlines), `Amiri` (Body).
- **Internationalization (i18n)**:
  - Custom `LanguageContext` in `context/LanguageContext.tsx`.
  - Supported locales: `'en'` (English), `'fr'` (French), `'ar'` (Arabic - RTL).
  - Dictionaries centralized in `data/translations.ts`, `data/projects.ts`, `data/essays.ts`, and `data/books.ts`.
- **UI Components**: `shadcn-ui` / Radix UI primitives, Lucide React icons.

## Guidelines for AI Assistant
1. **TypeScript First**: Ensure all data models, props, and translations use strict TypeScript types (`Language`, `TranslationDictionary`, `Project`, `Essay`, `Book`).
2. **Server vs Client Components**:
   - Dynamic route pages (`app/projects/[slug]/page.tsx` and `app/essays/[slug]/page.tsx`) must remain Server Components to export `generateStaticParams()`.
   - Client interactivity and `useLanguage()` calls belong inside Client Components (`ProjectClientView`, `EssayClientView`, `Masthead`, `LanguageSwitcher`).
3. **RTL & Layout Consistency**:
   - Always ensure layout rules support both `ltr` and `rtl`. Use Tailwind RTL logical modifiers like `rtl:border-r`, `rtl:pr-6`, `rtl:left-4`, etc.
4. **Editorial Voice**:
   - Maintain an articulate, academic, and engaging newspaper tone across all three languages. Avoid generic placeholder copy.
5. **Dev Server Cache Note**:
   - If `Cannot find module './12.js'` or `vendor-chunks` error appears during `next dev`, run `rm -rf .next` to clear stale build artifacts.
