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
    }),
});

export const collections = {
    'blog': blogCollection,
};
