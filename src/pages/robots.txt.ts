import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
    const siteUrl = site?.toString().replace(/\/$/, '') || 'https://aexaware.com';
    const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
`.trim();

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
