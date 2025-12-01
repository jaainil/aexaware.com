import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://aexaware.com',
    prefetch: true,
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        mdx({
            optimize: true,
        }),
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
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
    ],
    output: 'static',
    image: {
        domains: ['images.unsplash.com', 'i.pravatar.cc'],
    },
    vite: {
        server: {
            host: true,
            allowedHosts: ['aexaware.com', 'www.aexaware.com'],
        },
        preview: {
            allowedHosts: ['aexaware.com', 'www.aexaware.com'],
        },
    },
});
