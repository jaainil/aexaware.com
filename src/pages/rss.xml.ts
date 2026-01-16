import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const blog = await getCollection('blog');

    // Sort by date descending
    const sortedPosts = blog.sort((a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );

    return rss({
        // Required: Your site's title
        title: 'Aexaware Infotech Blog',

        // Required: Your site's description
        description: 'Insights on web development, AI/ML, cloud solutions, and digital innovation from Aexaware Infotech',

        // Required: Your site's base URL (from astro.config.mjs site property)
        site: context.site!,

        // Optional: Add stylesheet for better browser viewing
        // stylesheet: '/rss/styles.xsl',

        // Optional: Custom XML elements
        customData: `<language>en-us</language>`,

        // Required: Array of RSS feed items
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: new Date(post.data.date),
            // Compute RSS link from post `id` (recommended in Astro v5)
            link: `/blog/${post.id}/`,
        })),
    });
}
