import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://aexaware.com',
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        mdx(),
        sitemap(),
    ],
    output: 'static',
    image: {
        domains: ['images.unsplash.com', 'i.pravatar.cc'],
    },
});
