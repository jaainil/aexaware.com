import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

/**
 * Dynamic RSS feed generation for blog posts
 * Replaces the static RSS file in /public
 */
export const GET: APIRoute = async ({ site }) => {
    const blogPosts = await getCollection('blog');

    // Sort posts by date, newest first
    const sortedPosts = blogPosts.sort((a, b) =>
        b.data.date.getTime() - a.data.date.getTime()
    );

    return rss({
        title: 'Aexaware Infotech Blog',
        description: 'Insights on web development, AI/ML, cloud solutions, and digital innovation from Aexaware Infotech',
        site: site || 'https://aexaware.com',
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: `/blog/${post.slug}/`,
            author: post.data.author,
            categories: post.data.tags || [],
        })),
        customData: `<language>en-us</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<image>
  <url>${site || 'https://aexaware.com'}/og-image.png</url>
  <title>Aexaware Infotech Blog</title>
  <link>${site || 'https://aexaware.com'}/blog</link>
</image>`,
        stylesheet: false,
    });
};
