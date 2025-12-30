# AGENTS.md

This file provides guidelines for agentic coding assistants working in the Aexaware Infotech repository.

---

## Build & Development Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:4321

# Production
npm run build        # Build static site to /dist
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint (add to package.json if missing)
npm run typecheck    # Run TypeScript compiler (add: tsc --noEmit)

# Single test (when test framework is added)
npm test -- <pattern>  # Example: npm test -- Hero
```

---

## Project Architecture

- **Framework**: Astro 5.16 with React 18 integration (Islands Architecture)
- **Styling**: Tailwind CSS with HSL color variables in `src/styles/global.css`
- **Output**: Static Site Generation (SSG)
- **Content Collections**: Blog and portfolio managed via `src/content/config.ts` with Zod schemas

---

## Component Guidelines

### Astro Components (.astro)
```astro
---
import { cn } from '@/lib/utils';
import { Image } from 'astro:assets';

interface Props {
  title: string;
  className?: string;
}

const { title, className } = Astro.props;
---
<section class={cn("container mx-auto", className)}>
  <h1>{title}</h1>
</section>
```

### React Components (.tsx)
```tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'primary'
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("base-classes", className)} {...props}>
        {children}
      </div>
    )
  }
)
Component.displayName = "Component"
```

---

## Styling Conventions

### Utility Classes
- Always use `cn()` from `@/lib/utils` for className merging
- Prefer Tailwind utilities over custom CSS
- Use `text-balance` for multi-line text, `text-pretty` for paragraphs
- Responsive: `mobile-first`, use `md:` `lg:` breakpoints

### Color Variables
Use HSL variables from design system:
- `bg-background`, `text-foreground`
- `bg-primary`, `text-primary-foreground`
- `bg-muted`, `text-muted-foreground`
- `bg-card`, `text-card-foreground`

### Design Tokens
- Roundness: `rounded-card`, `rounded-card-lg`, `rounded-section`
- Spacing: `section-padding` (defined in global.css)
- Container: `container` (max-w-7xl) or `container-normal` (max-w-6xl)

---

## TypeScript Standards

- Strict mode enabled with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`
- Always type component props explicitly with interfaces
- Use `z.object()` for content collection schemas
- Use `React.HTMLAttributes<HTMLElement>` for extending native element props
- Import types: `import type { SomeType }`

### Example:
```typescript
interface Props {
  items: string[];
  direction?: "left" | "right";
  className?: string;
}
```

---

## Import Organization

```typescript
// 1. External libraries
import React from "react";
import { useState, useEffect } from 'react';

// 2. Radix UI / shadcn components
import { Button } from "@/components/ui/button";

// 3. Internal components
import Navbar from '@/components/Navbar.astro';
import { cn } from '@/lib/utils';

// 4. Icons
import { ArrowRight, Sparkles } from "lucide-react";

// 5. Utilities
import { formatDate } from '@/lib/utils';
```

Use `@/` alias for all src/ imports:
- `@/components/*` for components
- `@/lib/*` for utilities
- `@/layouts/*` for layouts
- `@/hooks/*` for custom hooks

---

## Naming Conventions

- **Files**: PascalCase for components (Button.astro, Card.tsx), kebab-case for utilities (use-mobile.tsx)
- **Components**: PascalCase (Hero, SearchDialog)
- **Functions**: camelCase (formatDate, slugify)
- **Variables**: camelCase (userName, isActive)
- **Constants**: UPPER_SNAKE_CASE for true constants, camelCase otherwise
- **CSS Classes**: Tailwind utilities, custom classes with kebab-case

---

## Code Quality

- **ESLint**: Configured for TypeScript + React Hooks
- **No semicolons**: Consistent with modern React patterns
- **Always use displayName** for React components with forwardRef
- **Error handling**: Use `.catch(console.error)` for async operations in components
- **Accessibility**: Include `aria-label` for interactive elements without text
- **Comments**: JSDoc style for props, inline comments only when necessary

---

## File Structure

```
src/
├── components/
│   ├── astro/           # Astro-only components (Hero.astro, CTA.astro)
│   ├── react/           # React interactive components (SearchDialog.tsx)
│   └── ui/              # Reusable UI primitives (button.tsx, card.tsx)
├── layouts/             # Page layouts (Layout.astro, ServicePageLayout.astro)
├── pages/               # File-based routing (index.astro, about.astro)
│   ├── blog/            # Blog routes
│   ├── portfolio/       # Portfolio routes
│   └── services/        # Service pages
├── hooks/               # Custom React hooks
├── lib/                 # Utilities (utils.ts)
├── styles/              # Global CSS (global.css)
└── content/             # Content collections
    ├── blog/            # Blog posts (frontmatter + MDX)
    └── portfolio/       # Portfolio items (frontmatter + images)
```

### Where to Place New Components:
- **Astro components**: `src/components/astro/`
- **Interactive React components**: `src/components/react/`
- **Reusable UI elements**: `src/components/ui/`
- **New pages**: `src/pages/` (file-based routing)
- **New services**: Create in `src/pages/services/[name].astro`
- **New blog posts**: `src/content/blog/[slug]/index.mdx`

---

## Content Collections

### Blog Posts
```yaml
---
title: "Post Title"
description: "Meta description"
author: "Author Name"
date: "2025-01-15"
image: ./cover.jpg
tags: ["tag1", "tag2"]
category: "Category"
featured: false
---
```

### Portfolio Projects
```yaml
---
title: "Project Title"
client: "Client Name"
category: "Web Development"
description: "Brief description"
date: "2025-01-15"
technologies: ["React", "Astro", "Tailwind"]
duration: "3 months"
year: "2025"
website: "https://example.com"
image: ./cover.jpg
---
```

---

## Testing (To Be Implemented)

The project currently does not have a test framework. When adding tests:
1. Install Vitest: `npm install -D vitest @testing-library/react @testing-library/user-event @vitest/ui`
2. Add to package.json:
   ```json
   "scripts": {
     "test": "vitest",
     "test:ui": "vitest --ui",
     "test:run": "vitest run"
   }
   ```
3. Place test files next to components: `Component.test.tsx`
4. Run single test: `npm test -- Component`

---

## Creating New Pages/Features

1. **New Service Page**: Create `src/pages/services/[service-name].astro` using ServicePageLayout
2. **New Component**: Follow existing patterns in `src/components/astro/` or `src/components/react/`
3. **New UI Component**: Use Radix UI primitives + CVA pattern, place in `src/components/ui/`
4. **New Blog Post**: Add folder to `src/content/blog/[slug]/` with `index.mdx` and cover image
5. **New Portfolio Item**: Add folder to `src/content/portfolio/[slug]/` with `index.md` and cover image

---

## Image Handling

- Use Astro's `<Image />` component for optimization
- Place source images in `src/assets/` for processing or `public/` for static files
- Specify width/height for layout
- Use format="webp" for better compression

---

## SEO Best Practices

- All pages extend Layout.astro with proper title/description props
- Use Astro's `<Schema />` for JSON-LD structured data
- Include canonical URLs via Layout.astro
- Images should have descriptive alt text
- Use proper heading hierarchy (h1 → h2 → h3)
