"use client"

import { useState, useEffect, useCallback } from 'react';
import { FileText, Briefcase, Search, Home, Layers, Users, Mail, Rocket, Globe, Smartphone, Palette, Code2, ShoppingCart, Cloud, BrainCircuit } from 'lucide-react';
import Fuse from 'fuse.js';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";

interface SearchableItem {
    fileUrl: string;
    frontmatter: {
        title: string;
        description: string;
        category?: string;
    };
    content?: string;
}

// Static pages for navigation
const staticPages = [
    { title: 'Home', path: '/', icon: Home, description: 'Return to homepage' },
    { title: 'Services', path: '/services', icon: Layers, description: 'Explore our services' },
    { title: 'Web Development', path: '/services/web-development', icon: Globe, description: 'Custom web solutions' },
    { title: 'Mobile Development', path: '/services/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { title: 'UI/UX Design', path: '/services/ui-ux-design', icon: Palette, description: 'Beautiful interfaces' },
    { title: 'Software Solutions', path: '/services/software-solutions', icon: Code2, description: 'Custom software' },
    { title: 'E-Commerce', path: '/services/ecommerce', icon: ShoppingCart, description: 'Online stores' },
    { title: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud, description: 'Cloud infrastructure' },
    { title: 'AI/ML Integration', path: '/services/ai-ml-integration', icon: BrainCircuit, description: 'AI solutions' },
    { title: 'Case Studies', path: '/portfolio', icon: Briefcase, description: 'View our work' },
    { title: 'Blog', path: '/blog', icon: FileText, description: 'Read our articles' },
    { title: 'About Us', path: '/about', icon: Users, description: 'Learn about us' },
    { title: 'Contact', path: '/contact', icon: Mail, description: 'Get in touch' },
    { title: 'Start Project', path: '/start-project', icon: Rocket, description: 'Begin your project' },
];

export default function SearchDialog() {
    const [open, setOpen] = useState(false);
    const [fuse, setFuse] = useState<Fuse<SearchableItem> | null>(null);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Fuse.FuseResult<SearchableItem>[]>([]);
    const [filteredPages, setFilteredPages] = useState(staticPages);

    // Load Fuse.js index on mount
    useEffect(() => {
        fetch('/fuse.json')
            .then((res) => res.json())
            .then(({ index, list }) => {
                const fuseInstance = new Fuse<SearchableItem>(
                    list,
                    {
                        keys: ['frontmatter.title', 'frontmatter.description', 'content'],
                        threshold: 0.3,
                        includeScore: true,
                        minMatchCharLength: 2,
                    },
                    Fuse.parseIndex(index)
                );
                setFuse(fuseInstance);
            })
            .catch(console.error);
    }, []);

    // Handle keyboard shortcuts
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    // Search when query changes
    const handleSearch = useCallback((value: string) => {
        setQuery(value);

        const trimmedQuery = value.trim().toLowerCase();

        // Filter static pages
        if (trimmedQuery) {
            const filtered = staticPages.filter(page =>
                page.title.toLowerCase().includes(trimmedQuery) ||
                page.description.toLowerCase().includes(trimmedQuery)
            );
            setFilteredPages(filtered);
        } else {
            setFilteredPages(staticPages.slice(0, 6)); // Show first 6 when no query
        }

        // Search content with Fuse.js
        if (fuse && trimmedQuery) {
            const searchResults = fuse.search(trimmedQuery);
            setResults(searchResults.slice(0, 8)); // Limit to 8 results
        } else {
            setResults([]);
        }
    }, [fuse]);

    // Convert fileUrl to proper pathname
    const getPathname = (fileUrl: string): { path: string; type: 'blog' | 'portfolio' } => {
        if (fileUrl.includes('/content/blog/')) {
            const match = fileUrl.match(/\/content\/blog\/([^/]+)/);
            return { path: `/blog/${match?.[1] || ''}`, type: 'blog' };
        } else if (fileUrl.includes('/content/portfolio/')) {
            const match = fileUrl.match(/\/content\/portfolio\/([^/]+)/);
            return { path: `/portfolio/${match?.[1] || ''}`, type: 'portfolio' };
        }
        return { path: '/', type: 'blog' };
    };

    // Navigate to result
    const handleSelect = (path: string) => {
        setOpen(false);
        setQuery('');
        window.location.href = path;
    };

    // Separate content results by type
    const blogResults = results.filter(r => r.item.fileUrl.includes('/content/blog/'));
    const portfolioResults = results.filter(r => r.item.fileUrl.includes('/content/portfolio/'));

    return (
        <>
            {/* Search Trigger Button */}
            <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
                aria-label="Search"
            >
                <Search className="size-4" />
                <span className="hidden md:inline">Search</span>
                <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium bg-secondary/50 rounded border border-border/50">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            {/* Command Dialog */}
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput
                    placeholder="Search pages, posts, and projects..."
                    value={query}
                    onValueChange={handleSearch}
                />
                <CommandList>
                    <CommandEmpty>
                        {query ? 'No results found.' : 'Start typing to search...'}
                    </CommandEmpty>

                    {/* Static Pages */}
                    {filteredPages.length > 0 && (
                        <CommandGroup heading="Pages">
                            {filteredPages.map((page) => (
                                <CommandItem
                                    key={page.path}
                                    value={`${page.title} ${page.description}`}
                                    onSelect={() => handleSelect(page.path)}
                                    className="cursor-pointer"
                                >
                                    <div className="mr-3 p-1.5 rounded-lg bg-secondary/50 text-muted-foreground">
                                        <page.icon className="size-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium">{page.title}</p>
                                        <p className="text-xs text-muted-foreground">{page.description}</p>
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    )}

                    {(blogResults.length > 0 || portfolioResults.length > 0) && filteredPages.length > 0 && (
                        <CommandSeparator />
                    )}

                    {/* Blog Posts */}
                    {blogResults.length > 0 && (
                        <CommandGroup heading="Blog Posts">
                            {blogResults.map(({ item }) => (
                                <CommandItem
                                    key={item.fileUrl}
                                    value={item.frontmatter.title}
                                    onSelect={() => handleSelect(getPathname(item.fileUrl).path)}
                                    className="cursor-pointer"
                                >
                                    <div className="mr-3 p-1.5 rounded-lg bg-blue-500/10 text-blue-700">
                                        <FileText className="size-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium truncate">{item.frontmatter.title}</p>
                                        <p className="text-xs text-muted-foreground truncate">
                                            {item.frontmatter.category || 'Blog'}
                                        </p>
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    )}

                    {/* Portfolio Projects */}
                    {portfolioResults.length > 0 && (
                        <CommandGroup heading="Portfolio Projects">
                            {portfolioResults.map(({ item }) => (
                                <CommandItem
                                    key={item.fileUrl}
                                    value={item.frontmatter.title}
                                    onSelect={() => handleSelect(getPathname(item.fileUrl).path)}
                                    className="cursor-pointer"
                                >
                                    <div className="mr-3 p-1.5 rounded-lg bg-purple-500/10 text-purple-700">
                                        <Briefcase className="size-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium truncate">{item.frontmatter.title}</p>
                                        <p className="text-xs text-muted-foreground truncate">
                                            {item.frontmatter.category || 'Project'}
                                        </p>
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    )}
                </CommandList>
            </CommandDialog>
        </>
    );
}
