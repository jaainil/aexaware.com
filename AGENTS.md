# AGENTS.md

Guidelines for agentic coding assistants working in the Aexaware Infotech repository.

---

## Package Manager

This project uses **Bun** as the package manager. All commands should use `bun` or `bunx` instead of `npm` or `pnpm`.

---

## Build & Development Commands

```bash
bun run dev        # Start dev server at http://localhost:4321 with hot reload
bun run build      # Build static site to /dist for production
bun run preview    # Preview production build locally on http://localhost:4321
bun start          # Serve dist at localhost:4321
bun run astro      # Direct access to Astro CLI
```

## Code Quality Commands

```bash
bunx eslint .      # Run ESLint on all files
bunx tsc --noEmit  # Run TypeScript type checking
```

**Testing:** No test framework currently configured. Manual testing only.

---

## Project Architecture

- **Framework**: Astro 5.17 with React 19 (Islands Architecture)
- **Styling**: Tailwind CSS v4 with HSL color variables
- **Output**: Static Site Generation (SSG)
- **Content**: Blog and portfolio via `src/content/config.ts` with Zod schemas
- **Fonts**: Plus Jakarta Sans (body), Space Grotesk (headings), Inter
- **Dark Mode**: Class-based (`.dark`)
- **Search**: Fuse.js integration with automatic index generation
- **Integrations**: MDX, Sitemap, Umami Analytics, Lighthouse, Mermaid diagrams

---

## Component Guidelines

### Astro (.astro)

- Import icons from `lucide-astro`
- Destructure `Astro.props` at top of frontmatter
- Use `cn()` from `@/lib/utils` for className merging
- Use `.astro` extension for components that don't need client interactivity

### React (.tsx)

- Add `"use client"` directive at top for client components
- Use `React.forwardRef` with proper typing
- Use `class-variance-authority` (CVA) for variants
- Import icons from `lucide-react`
- Set `displayName` for components with forwardRef
- Group related components in logical folders (ui/, astro/, react/)

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

---

## Styling Conventions

- Always use `cn()` from `@/lib/utils` for className merging
- Prefer Tailwind utilities over custom CSS
- Mobile-first responsive: `md:` `lg:` breakpoints
- Containers: `container` (max-w-7xl), `container-wide` (max-w-1440px)
- Roundness: `rounded-card` (1.5rem), `rounded-section` (2.5rem)
- Colors: HSL variables - `bg-background`, `bg-primary`, `text-muted-foreground`

---

## TypeScript Standards

- Strict mode enabled
- Always type component props explicitly with interfaces
- Use `z.object()` for content collection schemas
- Use `React.HTMLAttributes<HTMLElement>` for extending native element props
- Import types: `import type { SomeType }`
- Enable strict flags: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`

---

## Import Organization

```typescript
// 1. External libraries (React, hooks)
// 2. Radix UI / shadcn components (@/components/ui/*)
// 3. Internal components (@/components/*)
// 4. Utilities (@/lib/utils)
// 5. Icons (lucide-react or lucide-astro)
// 6. Types and schemas
```

Use `@/` alias for all src/ imports.

---

## Naming Conventions

- **Files**: PascalCase (Hero.astro, Card.tsx)
- **Components**: PascalCase (Hero, SearchDialog)
- **Functions/Variables**: camelCase (formatDate, isActive)
- **Constants**: UPPER_SNAKE_CASE for true constants
- **Props Interfaces**: ComponentName + Props (e.g., `ButtonProps`)

---

## Code Quality

- **ESLint**: Configured with TypeScript + React Hooks rules
- **No semicolons**: Modern React patterns
- **Error handling**: Use `.catch(console.error)` for async operations
- **Accessibility**: Include `aria-label` for interactive elements without text
- **Comments**: JSDoc for props, inline comments only when necessary
- **React hooks**: Follow rules of hooks, use proper dependencies

---

## Testing

- **No test framework currently configured** (check roadmap for future testing setup)
- **No automated tests available** - cannot run a single test or test suite
- Manual testing required for component changes
- Test responsive behavior at mobile, tablet, and desktop breakpoints
- Test search functionality across blog and portfolio content

---

## File Structure

```
src/
├── assets/         # Images processed by Astro
├── components/     # astro/, react/, ui/
├── content/        # Content collections (blog/, portfolio/) with MDX files
├── hooks/          # Custom React hooks
├── layouts/        # Page layouts (Layout.astro, ServicePageLayout.astro)
├── lib/            # Utilities (utils.ts)
├── pages/          # File-based routing (blog/, portfolio/, services/)
└── styles/         # Global CSS
```

Astro components → `src/components/astro/`

---

## SEO & Analytics

- Use `astro-seo` `<SEO />` component for meta tags, Open Graph, Twitter cards
- Use `astro-seo-schema` `<Schema />` for JSON-LD structured data
- Include canonical URLs via `canonical` prop (defaults to `Astro.url.href`)
- Images require descriptive `alt` text
- Open Graph requires: `title`, `type`, `image`, `url`
- Umami Analytics configured for privacy-friendly tracking
- Sitemap auto-generated with weekly changefreq
- Robots.txt configured with strategic disallow rules

---

## Image Handling

- Use Astro's `<Image />` component for optimization
- Source images in `src/assets/` (processed) or `public/` (static)
- Specify width/height for layout
- Use `format="webp"` for better compression
- Use descriptive alt text for accessibility

---

## Content Management

### Blog & Portfolio Collections

- **Blog schema**: title, description, author, date, image
- **Portfolio schema**: title, client, category, description, date, technologies, duration, year, website, image
- Use MDX files with frontmatter in respective collection folders
- Content files live in `src/content/blog/` and `src/content/portfolio/`
- Each content piece should be in its own folder with an index.mdx file

### Search Integration

- Fuse.js index automatically generated during build
- Searchable fields: title, description, content
- Search is case-insensitive with threshold 0.3
- Static pages also included in search results
- Command-K keyboard shortcut triggers search dialog

---

## Security & Performance

- Output: Static Site Generation (SSG) for security and speed
- Allowed hosts restricted in config to prevent Host Header attacks
- Responsive images enabled globally with Sharp (lanczos3 kernel)
- Compression via astro-compressor and @playform/compress
- Lighthouse integration for performance monitoring
- Robots.txt rules to prevent crawling of low-value pages

