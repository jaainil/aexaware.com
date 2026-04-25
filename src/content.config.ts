import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const authorsCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
    schema: ({ image }) => z.object({
        name: z.string(),
        title: z.string().optional().default("Software Engineer"),
        bio: z.string().optional(),
        image: image().optional(),
        twitter: z.url().optional(),
        github: z.url().optional(),
        linkedin: z.url().optional(),
    }),
});

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        author: z.coerce.string(),
        date: z.string().or(z.date()).transform((val) => new Date(val)),
        image: image().optional(),
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
    'authors': authorsCollection,
    'blog': blogCollection,
    'portfolio': portfolioCollection,
};

