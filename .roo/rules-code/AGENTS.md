# Project Coding Rules (Non-Obvious Only)

- shadcn/ui requires \`cn()\` from [\`src/lib/utils.ts\`](src/lib/utils.ts:4)
- All pages frame with Navbar/Footer ([\`src/pages/Index.tsx\`](src/pages/Index.tsx:46,279))
- Mock data colocated in pages (no backend)
- Routes added above \`\*\` catch-all ([\`src/App.tsx\`](src/App.tsx:28))
- Loose TS: \`noImplicitAny: false\`, \`noUnusedParameters: false\` ([\`tsconfig.json\`](tsconfig.json:9,10))
- \`@typescript-eslint/no-unused-vars\` off ([\`eslint.config.js\`](eslint.config.js))
