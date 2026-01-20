"use client";

import { useState, useEffect, useCallback } from "react";
import {
  FileText,
  Briefcase,
  Search,
  Home,
  Layers,
  Users,
  Mail,
  Rocket,
  Globe,
  Smartphone,
  Palette,
  Code2,
  ShoppingCart,
  Cloud,
  BrainCircuit,
} from "lucide-react";
import Fuse from "fuse.js";
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
  {
    title: "Home",
    path: "/",
    icon: Home,
    description: "Return to homepage",
    keywords: "landing, main, root"
  },
  {
    title: "Services",
    path: "/services",
    icon: Layers,
    description: "Explore our capabilities",
    keywords: "offerings, solutions, help, what we do"
  },
  {
    title: "Web Development",
    path: "/services/web-development",
    icon: Globe,
    description: "Custom web solutions",
    keywords: "react, next.js, node.js, frontend, backend, full stack, pwa, website"
  },
  {
    title: "Mobile Development",
    path: "/services/mobile-development",
    icon: Smartphone,
    description: "iOS & Android apps",
    keywords: "react native, flutter, ios, android, app, mobile application, cross-platform"
  },
  {
    title: "UI/UX Design",
    path: "/services/ui-ux-design",
    icon: Palette,
    description: "Beautiful interfaces",
    keywords: "figma, wireframe, prototype, user experience, user interface, brand identity, design system"
  },
  {
    title: "Software Solutions",
    path: "/services/software-solutions",
    icon: Code2,
    description: "Custom software",
    keywords: "saas, enterprise, legacy modernization, api integration, microservices, architecture"
  },
  {
    title: "E-Commerce",
    path: "/services/ecommerce",
    icon: ShoppingCart,
    description: "Online stores",
    keywords: "shopify, woocommerce, online store, marketplace, payment gateway, stripe, cart"
  },
  {
    title: "Cloud & DevOps",
    path: "/services/cloud-devops",
    icon: Cloud,
    description: "Cloud infrastructure",
    keywords: "aws, azure, gcp, docker, kubernetes, ci/cd, infrastructure as code, security"
  },
  {
    title: "AI/ML Integration",
    path: "/services/ai-ml-integration",
    icon: BrainCircuit,
    description: "AI solutions",
    keywords: "artificial intelligence, machine learning, chatbot, llm, gpt, predictive analytics, vision"
  },
  {
    title: "Digital Marketing",
    path: "/services/digital-marketing",
    icon: Rocket,
    description: "Growth acceleration",
    keywords: "seo, sem, social media, content marketing, email marketing, analytics, growth",
  },
  {
    title: "White Label",
    path: "/services/white-label-services",
    icon: Users,
    description: "Agency partnerships",
    keywords: "agency partner, outsource, white label, dedicated team, expansion",
  },
  {
    title: "Extended Team",
    path: "/services/extended-team",
    icon: Users,
    description: "Scale your workforce",
    keywords: "staff augmentation, dedicated developers, hire remote, offshore, nearshore",
  },
  {
    title: "MVP Development",
    path: "/services/mvp-development",
    icon: Rocket,
    description: "Launch your idea",
    keywords: "startup, prototype, proof of concept, minimum viable product, launch",
  },
  {
    title: "CMS Development",
    path: "/services/cms-development",
    icon: FileText,
    description: "Manage your content",
    keywords: "wordpress, content management system, headless cms, strapi, sanity",
  },
  {
    title: "Case Studies",
    path: "/portfolio",
    icon: Briefcase,
    description: "View our work",
    keywords: "projects, portfolio, work, examples, success stories"
  },
  {
    title: "Blog",
    path: "/blog",
    icon: FileText,
    description: "Read our articles",
    keywords: "articles, news, insights, tutorial, guide"
  },
  {
    title: "About Us",
    path: "/about",
    icon: Users,
    description: "Learn about us",
    keywords: "company, team, culture, mission, vision"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: Mail,
    description: "Get in touch",
    keywords: "email, phone, address, support, help, inquiry"
  },
  {
    title: "Start Project",
    path: "/start-project",
    icon: Rocket,
    description: "Begin your project",
    keywords: "hire, quote, estimate, proposal"
  },
];

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [fuse, setFuse] = useState<Fuse<SearchableItem> | null>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [filteredPages, setFilteredPages] = useState(staticPages);

  // Load Fuse.js index on mount
  useEffect(() => {
    fetch("/fuse.json")
      .then((res) => res.json())
      .then(({ index, list }) => {
        const fuseInstance = new Fuse<SearchableItem>(
          list,
          {
            keys: ["frontmatter.title", "frontmatter.description", "content"],
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
  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value);

      const trimmedQuery = value.trim().toLowerCase();

      // Filter static pages
      if (trimmedQuery) {
        const filtered = staticPages.filter(
          (page) =>
            page.title.toLowerCase().includes(trimmedQuery) ||
            page.description.toLowerCase().includes(trimmedQuery) ||
            page.keywords?.toLowerCase().includes(trimmedQuery)
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
    },
    [fuse]
  );

  // Convert fileUrl to proper pathname
  const getPathname = (
    fileUrl: string
  ): { path: string; type: "blog" | "portfolio" } => {
    if (fileUrl.includes("/content/blog/")) {
      const match = fileUrl.match(/\/content\/blog\/([^/]+)/);
      return { path: `/blog/${match?.[1] || ""}`, type: "blog" };
    } else if (fileUrl.includes("/content/portfolio/")) {
      const match = fileUrl.match(/\/content\/portfolio\/([^/]+)/);
      return { path: `/portfolio/${match?.[1] || ""}`, type: "portfolio" };
    }
    return { path: "/", type: "blog" };
  };

  // Navigate to result
  const handleSelect = (path: string) => {
    setOpen(false);
    setQuery("");
    window.location.assign(path);
  };

  // Separate content results by type
  const blogResults = results.filter((r) =>
    r.item.fileUrl.includes("/content/blog/")
  );
  const portfolioResults = results.filter((r) =>
    r.item.fileUrl.includes("/content/portfolio/")
  );

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
            {query ? "No results found." : "Start typing to search..."}
          </CommandEmpty>

          {/* Static Pages */}
          {filteredPages.length > 0 && (
            <CommandGroup heading="Pages">
              {filteredPages.map((page) => (
                <CommandItem
                  key={page.path}
                  value={`${page.title} ${page.description} ${page.keywords || ""}`}
                  onSelect={() => handleSelect(page.path)}
                  className="cursor-pointer"
                >
                  <div className="mr-3 p-1.5 rounded-lg bg-secondary/50 text-muted-foreground">
                    <page.icon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{page.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {page.description}
                    </p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {(blogResults.length > 0 || portfolioResults.length > 0) &&
            filteredPages.length > 0 && <CommandSeparator />}

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
                    <p className="font-medium truncate">
                      {item.frontmatter.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      Blog
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
                    <p className="font-medium truncate">
                      {item.frontmatter.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.frontmatter.category || "Project"}
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
