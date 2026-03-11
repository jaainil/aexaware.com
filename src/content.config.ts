import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        authorTitle: z.string().optional().default("Software Engineer"),
        date: z.string().or(z.date()).transform((val) => new Date(val)),
        image: image().optional(),
        faq: z.array(z.object({
            question: z.string(),
            answer: z.string(),
        })).optional().default([]),
    }),
});

const portfolioCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        client: z.string().optional(),
        category: z.string(),
        description: z.string(),
        date: z.string().or(z.date()).transform((val) => new Date(val)),
        technologies: z.array(z.string()),
        duration: z.string().optional(),
        year: z.string().or(z.number()).transform((val) => String(val)).optional(),
        website: z.url().optional(),
        image: image(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'portfolio': portfolioCollection,
};

