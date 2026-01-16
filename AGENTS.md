# AGENTS.md

Guidelines for agentic coding assistants working in the Aexaware Infotech repository.

---

## Build & Development Commands

```bash
bun run dev        # Start dev server at http://localhost:4321
bun run build      # Build static site to /dist
bun run preview    # Preview production build locally
bun start          # Serve dist at localhost:4321
```

## Code Quality Commands

```bash
bunx eslint .      # Run ESLint on all files
bunx tsc --noEmit  # Run TypeScript type checking
```

---

## Project Architecture

- **Framework**: Astro 5.16 with React 19 (Islands Architecture)
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

- **Files**: PascalCase (Hero.astro, Card.tsx)
- **Components**: PascalCase (Hero, SearchDialog)
- **Functions/Variables**: camelCase (formatDate, isActive)
- **Constants**: UPPER_SNAKE_CASE for true constants

---

## Code Quality

- **ESLint**: Configured with TypeScript + React Hooks rules
- **No semicolons**: Modern React patterns
- **Error handling**: Use `.catch(console.error)` for async operations
- **Accessibility**: Include `aria-label` for interactive elements without text
- **Comments**: JSDoc for props, inline comments only when necessary

## Testing

- **No test framework currently configured** (check roadmap for future testing setup)
- Manual testing required for component changes
- Test responsive behavior at mobile, tablet, and desktop breakpoints

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

Astro components → `src/components/astro/`

---

## SEO & Analytics

- Use `astro-seo` `<SEO />` component for meta tags, Open Graph, Twitter cards
- Use `astro-seo-schema` `<Schema />` for JSON-LD structured data
- Include canonical URLs via `canonical` prop (defaults to `Astro.url.href`)
- Images require descriptive `alt` text
- Open Graph requires: `title`, `type`, `image`, `url`

---

## Image Handling

- Use Astro's `<Image />` component for optimization
- Source images in `src/assets/` (processed) or `public/` (static)
- Specify width/height for layout
- Use `format="webp"` for better compression
