import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        date: z.string().or(z.date()).transform((val) => new Date(val)),
        image: image().optional(),
        imageAlt: z.string().optional(),
        tags: z.array(z.string()).optional(),
        category: z.string().optional(),
    }),
});

const portfolioCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        client: z.string().optional(),
        category: z.string(),
        description: z.string(),
        date: z.string().or(z.date()).transform((val) => new Date(val)),
        technologies: z.array(z.string()),
        duration: z.string().optional(),
        year: z.string().optional(),
        website: z.string().url().optional(),
        featured: z.boolean().default(false),
        image: image(),
        imageAlt: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'portfolio': portfolioCollection,
};
