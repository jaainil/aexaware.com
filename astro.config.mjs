import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import mermaid from 'astro-mermaid';
import lighthouse from 'astro-lighthouse';
import robotsTxt from 'astro-robots-txt';
import umami from "@yeskunall/astro-umami";
import llmsTxtIntegration from "astro-llms-txt-generator";
import compressor from "astro-compressor";
import writenex from "@writenex/astro";
import readingTime from "astro-reading-time";

// https://astro.build/config
export default defineConfig({
    site: 'https://aexaware.com',
    prefetch: true,
    integrations: [
        lighthouse(),
        llmsTxtIntegration(),
        umami({ id: "7401816d-713e-4916-960b-d314f2b36d3d" }),
        writenex(),
        readingTime(),
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        mermaid({
            theme: 'default',
            autoTheme: true,
            mermaidConfig: {
                startOnLoad: false,
                logLevel: 'error',
                securityLevel: 'strict',
                flowchart: {
                    curve: 'basis',
                    padding: 20
                },
                themeVariables: {
                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                }
            }
        }),
        mdx({
            optimize: true,
        }),
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
        }),
        robotsTxt({
            sitemap: true,
            policy: [
                {
                    userAgent: '*',
                    allow: '/',
                    disallow: ['/api/'],
                    crawlDelay: 0.5,
                },
            ],
        }),
        // Compress integration must be last for optimal compression
        compress({
            CSS: true,
            HTML: true,
            Image: true,
            JavaScript: true,
            JSON: true,
            SVG: true,
            Logger: 2,
        }),
        compressor(),
    ],
    output: 'static',
    image: {
        domains: ['images.unsplash.com', 'i.pravatar.cc'],
    },
    server: {
        host: true,
        allowedHosts: true,
    },
});
