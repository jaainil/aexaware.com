import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Comments } from "@/components/Comments";
import BlogEngagement from "@/components/BlogEngagement";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);
    if (!post) {
        return {
            title: "Post Not Found",
        };
    }
    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            authors: post.author ? [post.author] : undefined,
            publishedTime: post.date,
            images: post.image ? [post.image] : undefined,
        },
    };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <article className="pt-32 pb-24 lg:pt-48 lg:pb-32">
                <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
                    <div className="mb-8">
                        <Button
                            variant="ghost"
                            asChild
                            className="-ml-4 text-muted-foreground hover:text-primary"
                        >
                            <Link href="/blog">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Blog
                            </Link>
                        </Button>
                    </div>

                    <div className="mb-10">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags?.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-foreground mb-6">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-muted-foreground text-sm">
                            <div className="flex items-center gap-2">
                                <User className="size-4" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="size-4" />
                                {post.date}
                            </div>
                        </div>
                        {post.image && (
                            <div className="mt-8 aspect-video rounded-3xl overflow-hidden bg-muted relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}
                    </div>

                    <BlogEngagement
                        title={post.title}
                    />

                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-medium prose-h1:text-4xl prose-h1:leading-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-img:shadow-lg">
                        <MDXRemote source={post.content} />
                    </div>

                    <Comments />
                </div>
            </article>

            <Footer />
        </div>
    );
}
