## Brief overview

Project-specific guidelines for Orbiting Systems, focusing on build tools, coding conventions, and architectural patterns observed in the codebase and `AGENTS.md`.

## Development Commands

- **Dev Server:** Run `bun dev` to start the Vite server on port 8080 (host "::").
- **Build:** Run `bun run build:dev` for development builds.
- **Linting:** Run `eslint .` to lint the codebase. Note that `@typescript-eslint/no-unused-vars` is turned off.
- **Testing:** There are no tests configured. Do not run or write tests unless explicitly asked to set up a testing framework.

## Codebase Conventions

- **UI Components:** `shadcn/ui` components are used and require the `cn()` utility from `src/lib/utils.ts`.
- **TypeScript Configuration:** The project uses loose TypeScript rules:
  - `noImplicitAny` is set to `false`.
  - `noUnusedParameters` is set to `false`.
- **CSS:** Use HSL-only CSS variables as defined in `src/index.css`.
- **Plugins:** The `lovable-tagger` plugin is restricted to dev mode and must remain the last item in `vite.config.ts`.

## Architecture & Routing

- **Page Layout:** Ensure all pages are wrapped with the `Navbar` and `Footer` components.
- **Data Fetching:** There is no backend. Colocate mock data directly within the page components.
- **Routing:** Define new routes in `src/App.tsx` and ensure they are placed _before_ the catch-all `*` route.
