# AGENTS.md

Guidelines for agentic coding assistants working in the Aexaware Infotech repository.

---

## Build & Development Commands

```bash
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build static site to /dist
npm run preview  # Preview production build locally
npm start        # Serve dist at localhost:4321

# Add to package.json if needed:
# npm run lint     # Run ESLint
# npm run typecheck # Run tsc --noEmit
# npm test -- <pattern>  # Run single test (when framework added)
```

---

## Project Architecture

- **Framework**: Astro 5.16 with React 18 (Islands Architecture)
- **Styling**: Tailwind CSS with HSL color variables
- **Output**: Static Site Generation (SSG)
- **Content**: Blog and portfolio via `src/content/config.ts` with Zod schemas
- **Fonts**: Plus Jakarta Sans (body), Space Grotesk (headings), Inter
- **Dark Mode**: Class-based (`.dark`)

---

## Component Guidelines

### Astro (.astro)
- Import icons from `lucide-astro`
- Destructure `Astro.props` at top of frontmatter
- Use `cn()` from `@/lib/utils` for className merging

### React (.tsx)
- Add `"use client"` directive at top
- Use `React.forwardRef` with proper typing
- Use `class-variance-authority` (CVA) for variants
- Import icons from `lucide-react`
- Set `displayName` for components with forwardRef

```tsx
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant = 'default', children, ...props }, ref) => (
    <div ref={ref} className={cn("base-classes", className)} {...props}>
      {children}
    </div>
  )
)
Component.displayName = "Component"
```

---

## Styling Conventions

- Always use `cn()` from `@/lib/utils` for className merging
- Prefer Tailwind utilities over custom CSS
- Use `text-balance` for multi-line text, `text-pretty` for paragraphs
- Mobile-first responsive: `md:` `lg:` breakpoints
- Custom utilities: `section-padding`, `glass-panel`
- Containers: `container` (max-w-7xl), `container-normal` (max-w-7xl), `container-wide` (max-w-1440px)
- Roundness: `rounded-card` (1.5rem), `rounded-card-lg` (2rem), `rounded-section` (2.5rem)
- Colors: HSL variables - `bg-background`, `bg-primary`, `text-muted-foreground`, `bg-card`

---

## TypeScript Standards

- Strict mode enabled with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`
- Always type component props explicitly with interfaces
- Use `z.object()` for content collection schemas
- Use `React.HTMLAttributes<HTMLElement>` for extending native element props
- Import types: `import type { SomeType }`

---

## Import Organization

```typescript
// 1. External libraries (React, hooks)
// 2. Radix UI / shadcn components (@/components/ui/*)
// 3. Internal components (@/components/*)
// 4. Utilities (@/lib/utils)
// 5. Icons (lucide-react)
```

Use `@/` alias for all src/ imports.

---

## Naming Conventions

- **Files**: PascalCase for components (Hero.astro, Card.tsx)
- **Components**: PascalCase (Hero, SearchDialog)
- **Functions/Variables**: camelCase (formatDate, isActive)
- **Constants**: UPPER_SNAKE_CASE for true constants
- **CSS Classes**: Tailwind utilities or kebab-case custom classes

---

## Code Quality

- **ESLint**: TypeScript + React Hooks rules configured
- **No semicolons**: Modern React patterns
- **Error handling**: Use `.catch(console.error)` for async operations
- **Accessibility**: Include `aria-label` for interactive elements without text
- **Comments**: JSDoc for props, inline comments only when necessary
- **Package interop**: Handle packages like `react-fast-marquee` with type assertions

---

## File Structure

```
src/
├── components/     # astro/, react/, ui/
├── layouts/        # Page layouts
├── pages/          # File-based routing (blog/, portfolio/, services/)
├── hooks/          # Custom React hooks
├── lib/            # Utilities (utils.ts)
├── styles/         # Global CSS
└── content/        # Content collections (blog/, portfolio/)
```

**New placement**: Astro components → `src/components/astro/`

---

## Content Collections

Refer to `src/content/config.ts` for Zod schemas. Blog posts use MDX with frontmatter, portfolio items use markdown.

---

## SEO & Analytics Integrations

- **Reading time**: `astro-reading-time` calculates automatically
- **Search**: `astro-fuse` generates search index for blog/portfolio
- **Diagrams**: `astro-mermaid` for flowcharts and diagrams
- **Analytics**: `@yeskunall/astro-umami` for visitor tracking
- **Lighthouse**: Performance audit integration
- **Sitemap**: Auto-generated with weekly changefreq
- **Robots.txt**: Blocks low-value tag/category pages from indexing

---

## Image Handling

- Use Astro's `<Image />` component for optimization
- Source images in `src/assets/` (processed) or `public/` (static)
- Specify width/height for layout
- Use `format="webp"` for better compression

---

## SEO Best Practices

- All pages extend Layout.astro with proper title/description props
- Use `astro-seo` `<SEO />` component in `<head>` for meta tags, Open Graph, Twitter cards
- Use `astro-seo-schema` `<Schema />` component for JSON-LD structured data (powered by `schema-dts`)
- Include canonical URLs via `canonical` prop on SEO component (defaults to `Astro.url.href`)
- Images should have descriptive alt text (required for `openGraph.basic.image` and `twitter.image`)
- Use proper heading hierarchy (h1 → h2 → h3)
- For Open Graph, if defined, must include all 4 basic props: `title`, `type`, `image`, `url`

### Schema Example
```astro
---
import { Schema } from 'astro-seo-schema';
---

<Schema
  item={{
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aexaware Infotech',
    url: 'https://aexaware.com'
  }}
/>
```
