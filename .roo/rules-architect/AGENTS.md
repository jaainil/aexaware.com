# Project Architecture Rules (Non-Obvious Only)

- Pages manually frame Navbar/Footer (no shared layout; [\`src/pages/Index.tsx\`](src/pages/Index.tsx:46,279))
- Routes MUST precede \`\*\` catch-all ([\`src/App.tsx\`](src/App.tsx:28))
- Mock data inline per-page (no backend)
- lovable-tagger dev-only last plugin ([\`vite.config.ts\`](vite.config.ts:12))
