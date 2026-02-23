# AGENTS.md

Guidelines for agentic coding assistants working in the Aexaware Infotech repository.

## Package Manager

This project uses **Bun** as the package manager. Use `bun` or `bunx` instead of `npm` or `pnpm`.

## Build & Development Commands

```bash
bun run dev        # Start dev server at http://localhost:4321 with hot reload
bun run build      # Build static site to /dist for production
bun run preview    # Preview production build locally on http://localhost:4321
bun start          # Serve dist at localhost:4321
bun run astro      # Direct access to Astro CLI
bun run typecheck  # Run TypeScript type checking
```

## Code Quality Commands

```bash
bunx eslint .      # Run ESLint on all files
bun run typecheck # Run TypeScript type checking
```

**Testing:** No test framework configured. Manual testing only - verify changes at mobile, tablet, and desktop breakpoints.

## Project Architecture

- **Framework**: Astro 5.17 with React 19 (Islands Architecture)
- **Styling**: Tailwind CSS v4 with HSL color variables
- **Output**: Static Site Generation (SSG)
- **Content**: Blog and portfolio via `src/content/config.ts` with Zod schemas
- **Fonts**: Plus Jakarta Sans (body), Space Grotesk (headings), Inter
- **Dark Mode**: Class-based (`.dark`)
- **Search**: Fuse.js with automatic index generation (Command-K)
- **Integrations**: MDX, Sitemap, Umami Analytics, Lighthouse, Mermaid, Robots TXT, RSS

## Component Guidelines

### Astro (.astro)
- Import icons from `lucide-astro`
- Destructure `Astro.props` at top of frontmatter
- Use `cn()` from `@/lib/utils` for className merging
- Use `.astro` for static components (no client interactivity)

### React (.tsx)
- Add `"use client"` at top for interactive components
- Use `React.forwardRef` with proper typing
- Use `class-variance-authority` (CVA) for variants
- Import icons from `lucide-react`
- Set `displayName` for forwardedRef components

```tsx
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant = "default", children, ...props }, ref) => (
    <div ref={ref} className={cn("base-classes", className)} {...props}>
      {children}
    </div>
  )
);
Component.displayName = "Component";
```

## Code Style

### Imports (in order)
1. External libraries (React, hooks)
2. Radix UI / shadcn components (@/components/ui/*)
3. Internal components (@/components/*)
4. Utilities (@/lib/utils)
5. Icons (lucide-react or lucide-astro)
6. Types and schemas

Use `@/` alias for all src/ imports. Example:
```typescript
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/astro/Hero"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import type { ComponentProps } from "@/types"
```

### Formatting & Conventions
- **No semicolons**: Modern React patterns
- **No trailing commas**: Keep lines compact
- **Single quotes**: For strings except JSX attributes
- **Destructuring**: Prefer destructuring for props and imports
- **Arrow functions**: Use for callbacks, explicit `return` when needed

### TypeScript Standards
- Strict mode enabled - always type props explicitly with interfaces
- Use `z.object()` for content collection schemas
- Use `React.HTMLAttributes<HTMLElement>` for extending native element props
- Import types: `import type { SomeType }` (not `import { type ... }`)
- Enable strict flags: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`

### Naming Conventions
- **Files**: PascalCase (Hero.astro, Card.tsx)
- **Components**: PascalCase (Hero, SearchDialog)
- **Functions/Variables**: camelCase (formatDate, isActive)
- **Constants**: UPPER_SNAKE_CASE for true constants
- **Props Interfaces**: ComponentName + Props (e.g., `ButtonProps`)

### Error Handling
- Use `.catch(console.error)` for async operations without fallbacks
- Wrap potentially failing code in try/catch for user-facing errors
- Never expose internal errors to users - show friendly messages

### Accessibility
- Include `aria-label` for interactive elements without text
- Use semantic HTML (nav, main, section, article)
- Ensure keyboard navigation works for all interactive elements
- Test with screen readers before committing

### Comments
- JSDoc for public component props
- Inline comments only when logic is non-obvious
- Avoid comments explaining what code does - focus on why

## File Structure

```
src/
├── assets/           # Images processed by Astro
├── components/
│   ├── astro/        # Static Astro components (use for no interactivity)
│   ├── blog/         # Blog-specific components
│   ├── contact/     # Contact form components
│   ├── global/      # Global components (Navbar, Footer)
│   ├── home/        # Homepage sections
│   ├── portfolio/   # Portfolio-specific components
│   ├── react/       # Interactive React components (use client)
│   ├── services/    # Service-related components
│   ├── shared/      # Shared across multiple pages
│   └── ui/          # shadcn/ui components
├── content/
│   ├── blog/        # Blog posts (MDX)
│   └── portfolio/   # Portfolio projects (MD/MDX)
├── hooks/           # Custom React hooks
├── layouts/         # Page layouts
├── lib/             # Utilities (utils.ts)
├── pages/           # File-based routing
│   ├── blog/        # Blog routes
│   ├── portfolio/   # Portfolio routes
│   └── services/    # Service pages
└── styles/          # Global CSS
```

## SEO & Analytics

- Use `astro-seo` `<SEO />` for meta tags, Open Graph, Twitter cards
- Use `astro-seo-schema` `<Schema />` for JSON-LD structured data
- Include canonical URLs via `canonical` prop (defaults to `Astro.url.href`)
- Images require descriptive `alt` text
- Open Graph requires: `title`, `type`, `image`, `url`

## Content Management

- **Blog schema**: title, description, author, date, image
- **Portfolio schema**: title, client, category, description, date, technologies, duration, year, website, image
- Content files in `src/content/blog/` and `src/content/portfolio/`
- Each content piece in its own folder with `index.md` or `index.mdx` file

## Security & Performance

- Static Site Generation (SSG) for security
- Allowed hosts restricted in config (prevents Host Header attacks)
- Use Astro's `<Image />` component with width/height and `format="webp"`
- Fuse.js search with case-insensitive matching (threshold 0.3)
- Command-K keyboard shortcut triggers search dialog
- Use `astro-compressor` for gzip compression
- Use `sharp` for image optimization
