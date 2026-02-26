import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Integrations
import mermaid from "astro-mermaid";
import robotsTxt from "astro-robots-txt";
import umami from "@yeskunall/astro-umami";
import pageMarkdown from "@nuasite/llm-enhancements";
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
    pageMarkdown({
      includeStaticPages: true,
      includeFrontmatter: true,
      llmEndpoint: {
        siteName: "Aexaware Infotech",
        description: "Full-service digital agency specializing in web development, mobile apps, AI/ML integration, and cloud solutions",
      },
      llmsTxt: {
        siteName: "Aexaware Infotech",
        description: "Full-service digital agency specializing in web development, mobile apps, AI/ML integration, and cloud solutions",
        allowCrawling: true,
        instructions: "Aexaware Infotech is a software development company based in Vadodara, Gujarat, India. We specialize in building scalable web, mobile, AI, and DevOps solutions.",
      },
    }),
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
      lastmod: new Date(),
      namespaces: {
        news: false,
        xhtml: false,
        image: true,
        video: true,
      },
    }),
    robotsTxt({
      sitemap: true,
      policy: [
        // Allow ALL bots including AI crawlers
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
        // AI Crawlers - Allow all for AI citation
        {
          userAgent: "GPTBot",
          allow: "/",
        },
        {
          userAgent: "ChatGPT-User",
          allow: "/",
        },
        {
          userAgent: "Claude-Web",
          allow: "/",
        },
        {
          userAgent: "claude-bot",
          allow: "/",
        },
        {
          userAgent: "PerplexityBot",
          allow: "/",
        },
        {
          userAgent: "Google-Extended",
          allow: "/",
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

  output: "static",

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

  // Enable caching for incremental builds
  cache: {
    enabled: true,
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
