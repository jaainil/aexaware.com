# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Commands (non-standard)

- Dev: \`bun dev\` (vite on port 8080, host "::")
- \`bun run build:dev\` (vite build --mode development)
- Lint: \`eslint . \` (flat config, \`@typescript-eslint/no-unused-vars\` off)
- No tests configured (no scripts/deps)

## Conventions (discovered)

- shadcn/ui requires \`cn()\` from [\`src/lib/utils.ts\`](src/lib/utils.ts:4)
- lovable-tagger plugin only in dev mode, last in [\`vite.config.ts\`](vite.config.ts:12)
- All pages frame with Navbar/Footer (see [\`src/pages/Index.tsx\`](src/pages/Index.tsx:46,279))
- Mock data colocated in pages (no backend)
- Routes added above \`\*\` catch-all in [\`src/App.tsx\`](src/App.tsx:28)
- Loose TS: \`noImplicitAny: false\`, \`noUnusedParameters: false\` ([\`tsconfig.json\`](tsconfig.json:9,10))
- shadcn aliases via [\`components.json\`](components.json); HSL-only CSS vars [\`src/index.css\`](src/index.css)
