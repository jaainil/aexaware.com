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
    }),
    robotsTxt({
      sitemap: true,
      policy: [
        // ─── Default: All Bots ──────────────────────────────────────────────
        {
          userAgent: "*",
          allow: "/",
          crawlDelay: 5, // Respected by Bing, Yandex, Baidu and others
        },

        // ─── Google Family ──────────────────────────────────────────────────
        // Googlebot IGNORES crawlDelay — it self-regulates via Search Console
        {
          userAgent: "Googlebot",
          allow: "/",
        },
        {
          userAgent: "Googlebot-Image",
          allow: "/",
        },
        {
          userAgent: "Googlebot-Video",
          allow: "/",
        },
        {
          userAgent: "AdsBot-Google",
          allow: "/",
        },
        // Google-Extended = Gemini / AI Overviews training token (not a crawlDelay bot)
        {
          userAgent: "Google-Extended",
          allow: "/",
        },

        // ─── Bing / Microsoft ────────────────────────────────────────────────
        {
          userAgent: "Bingbot",
          allow: "/",
          crawlDelay: 2, // Bingbot respects crawl-delay
        },
        {
          userAgent: "msnbot",
          allow: "/",
          crawlDelay: 2,
        },
        {
          userAgent: "BingPreview",
          allow: "/",
        },

        // ─── Yandex ─────────────────────────────────────────────────────────
        {
          userAgent: "YandexBot",
          allow: "/",
          crawlDelay: 3,
        },
        {
          userAgent: "YandexImages",
          allow: "/",
        },

        // ─── Baidu ──────────────────────────────────────────────────────────
        {
          userAgent: "Baiduspider",
          allow: "/",
          crawlDelay: 5,
        },

        // ─── Apple ──────────────────────────────────────────────────────────
        {
          userAgent: "Applebot",
          allow: "/",
        },
        {
          userAgent: "Applebot-Extended",
          allow: "/",
        },

        // ─── DuckDuckGo ─────────────────────────────────────────────────────
        {
          userAgent: "DuckDuckBot",
          allow: "/",
        },

        // ─── Yahoo ──────────────────────────────────────────────────────────
        {
          userAgent: "Slurp",
          allow: "/",
          crawlDelay: 3,
        },

        // ─── Social / Preview Bots ───────────────────────────────────────────
        // These need access to render OG/Twitter card previews
        {
          userAgent: "facebookexternalhit",
          allow: "/",
        },
        {
          userAgent: "Twitterbot",
          allow: "/",
        },
        {
          userAgent: "LinkedInBot",
          allow: "/",
        },
        {
          userAgent: "WhatsApp",
          allow: "/",
        },
        {
          userAgent: "Discordbot",
          allow: "/",
        },
        {
          userAgent: "Slackbot",
          allow: "/",
        },
        {
          userAgent: "TelegramBot",
          allow: "/",
        },

        // ─── AI Crawlers — Allow all for AI citation ─────────────────────────
        // Note: AI bots generally do NOT respect crawl-delay; omitted intentionally
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
          userAgent: "ClaudeBot",
          allow: "/",
        },
        {
          userAgent: "PerplexityBot",
          allow: "/",
        },
        {
          userAgent: "cohere-ai",
          allow: "/",
        },
        {
          userAgent: "meta-externalagent",
          allow: "/",
        },
        {
          userAgent: "Amazonbot",
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
