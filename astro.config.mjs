import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Integrations
import mermaid from "astro-mermaid";
import robotsTxt from "astro-robots-txt";
import umami from "@yeskunall/astro-umami";
import llmsTxtIntegration from "astro-llms-txt-generator";
import compressor from "astro-compressor";
import compress from "@playform/compress";
import writenex from "@imjp/writenex-astro";

// Reading time integration (must come before mdx)
import readingTime from "astro-reading-time";

// https://astro.build/config
export default defineConfig({
  site: "https://aexaware.com",

  // FIX: Updated from boolean to object for Astro 4/5+
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  integrations: [
    react(),
    // Reading time must come before mdx
    readingTime(),
    mdx({
      optimize: true,
    }),

    // Content & Generators
    writenex({ allowProduction: false }),
    llmsTxtIntegration(),
    mermaid({
      theme: "default",
      autoTheme: true,
      mermaidConfig: {
        startOnLoad: false,
        flowchart: { curve: "basis", padding: 20 },
        themeVariables: {
          fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif",
        },
      },
    }),



    // Analytics & SEO
    // Note: Ensure Lighthouse only runs in the environments you want (e.g. not every local dev save)
    // lighthouse(),
    umami({ id: "7401816d-713e-4916-960b-d314f2b36d3d" }),

    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      // FIX: Removed 'lastmod: new Date()' to prevent false SEO updates.
      // Let the integration detect file modification times if possible,
      // or manage this manually per page.
    }),
    robotsTxt({
      sitemap: true,
      policy: [
        // Allow ALL bots/crawlers to index the site
        {
          userAgent: "*",
          allow: "/",
          disallow: [
            "/api/",      // Backend endpoints — no crawling needed
            "/admin/",    // Private admin area
            "/tags/",     // Low-value tag aggregation pages
            "/category/", // Low-value category pages
            "/*?*",       // Block query-param variants (duplicate content prevention)
          ],
        },
      ],
    }),

    // Optimization (Always keep last)
    compress(),
    compressor({
      gzip: true,
      brotli: true,
    }),
  ],

  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  devToolbar: {
    placement: "bottom-right",
  },

  image: {
    // Optimized image service configuration (Astro 5.17+)
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Options: lanczos3 (default), lanczos2, cubic, mitchell, catrom, etc.
        kernel: "mks2021",
      },
    },
    // Note: 'domains' and 'experimentalLayout' are deprecated/removed in favor of standard patterns
  },

  server: {
    host: true, // Listens on all addresses (0.0.0.0)
    // FIX: Explicitly allow only your production domain and localhost to prevent Host Header attacks
    allowedHosts: ["aexaware.com", "localhost", ".aexaware.com"],
  },

  // Developer Experience
  vite: {
    plugins: [tailwindcss()],
    build: {
      // beneficial for large react/mermaid chunks
      chunkSizeWarningLimit: 1000,
    },
  },
});
