import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Integrations
import mermaid from 'astro-mermaid';
import lighthouse from 'astro-lighthouse';
import robotsTxt from 'astro-robots-txt';
import umami from "@yeskunall/astro-umami";
import llmsTxtIntegration from "astro-llms-txt-generator";
import compressor from "astro-compressor";
import compress from "@playform/compress";
import writenex from "@writenex/astro";
import fuse from 'astro-fuse';

// Reading time integration (must come before mdx)
import readingTime from 'astro-reading-time';

// https://astro.build/config
export default defineConfig({
    site: 'https://aexaware.com',

    // FIX: Updated from boolean to object for Astro 4/5+
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
    },

    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        // Reading time must come before mdx
        readingTime(),
        mdx({
            optimize: true,
        }),

        // Content & Generators
        writenex({ allowProduction: false }),
        llmsTxtIntegration(),
        mermaid({
            theme: 'default',
            autoTheme: true,
            mermaidConfig: {
                startOnLoad: false,
                flowchart: { curve: 'basis', padding: 20 },
                themeVariables: {
                    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif',
                }
            }
        }),

        // Search - Fuse.js index generation
        fuse(['frontmatter.title', 'frontmatter.description', 'content'], {
            basedOn: 'source',
            filter: (path) => path.startsWith('/src/content/blog/') || path.startsWith('/src/content/portfolio/'),
        }),

        // Analytics & SEO
        // Note: Ensure Lighthouse only runs in the environments you want (e.g. not every local dev save)
        lighthouse(),
        umami({ id: "7401816d-713e-4916-960b-d314f2b36d3d" }),

        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            // FIX: Removed 'lastmod: new Date()' to prevent false SEO updates. 
            // Let the integration detect file modification times if possible, 
            // or manage this manually per page.
        }),
        robotsTxt({
            sitemap: true,
            policy: [
                {
                    userAgent: '*',
                    allow: '/',
                    disallow: ['/api/', '/admin/'], // Added /admin/ as a safety default
                    // Note: Googlebot ignores crawlDelay, but useful for other bots
                    crawlDelay: 2,
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

    output: 'static',

    image: {
        // FIX: 'domains' is deprecated in favor of strict remotePatterns in newer Astro versions, 
        // but if on older versions, this is fine. Ideally, migrate to:
        // remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
        domains: [],
    },

    server: {
        host: true, // Listens on all addresses (0.0.0.0)
        // FIX: Explicitly allow only your production domain and localhost to prevent Host Header attacks
        allowedHosts: ['aexaware.com', 'localhost', '.aexaware.com'],
    },

    // Developer Experience
    vite: {
        build: {
            // beneficial for large react/mermaid chunks
            chunkSizeWarningLimit: 1000,
        }
    }
});