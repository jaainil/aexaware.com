import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const blog = await getCollection('blog');

    const sortedPosts = blog.sort((a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );

    return rss({
        title: 'Aexaware Infotech Blog',
        description: 'Insights on web development, AI/ML, cloud solutions, and digital innovation from Aexaware Infotech - your trusted software development partner in Vadodara, Gujarat, India.',
        site: context.site!,
        customData: `<language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <sy:updatePeriod>weekly</sy:updatePeriod>
        <sy:updateFrequency>1</sy:updateFrequency>`,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: new Date(post.data.date),
            link: `/blog/${post.id}/`,
            categories: ['Technology', 'Web Development', 'AI/ML'] as const,
            author: post.data.author,
        })),
    });
}
