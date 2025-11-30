import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://aexaware.com";
    const posts = await getAllPosts();

    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const routes = [
        "",
        "/about",
        "/services",
        "/services/web-development",
        "/services/mobile-development",
        "/services/ui-ux-design",
        "/services/cloud-devops",
        "/services/ai-ml-integration",
        "/services/ecommerce",
        "/services/software-solutions",
        "/portfolio",
        "/blog",
        "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return [...routes, ...blogPosts];
}
