import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Integrations
import mermaid from "astro-mermaid";
import robotsTxt from "astro-robots-txt";
import umami from "@yeskunall/astro-umami";
import pageMarkdown from "@nuasite/llm-enhancements";
import compressor from "astro-compressor";
import compress from "@playform/compress";
import writenex from "@imjp/writenex-astro";

// Reading time integration (must come before mdx)
import readingTime from "astro-reading-time";

// https://astro.build/config
export default defineConfig({
  site: "https://aexaware.com",

  // FIX: Updated from boolean to object for Astro 4/5+
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  integrations: [
    react(),
    // Reading time must come before mdx
    readingTime(),
    mdx({
      optimize: true,
    }),

    // Content & Generators
    writenex({ allowProduction: false }),
    pageMarkdown({
      includeStaticPages: true,
      includeFrontmatter: true,
      llmEndpoint: {
        siteName: "Aexaware Infotech",
        description:
          "Aexaware Infotech is a full-service software development company based in Vadodara, Gujarat, India. Founded in 2024, we help startups and enterprises turn ideas into scalable web, mobile, AI/ML, and cloud solutions. Our team specializes in React, Next.js, Node.js, Python, and modern cloud infrastructure.",
        additionalContent: `## Sitemap

Full sitemap: https://aexaware.com/sitemap-0.xml

## Services (All 28 Pages)

Aexaware Infotech offers 28 specialized technology services across six capability areas:

### Web & Application Development
- [Web Development](https://aexaware.com/services/web-development) – React, Next.js, Node.js, Python, PHP, Full-Stack, Progressive Web Apps
- [Mobile Development](https://aexaware.com/services/mobile-development) – React Native, Flutter, iOS, Android cross-platform apps
- [E-Commerce Development](https://aexaware.com/services/ecommerce) – WooCommerce, custom e-commerce platforms, payment integration
- [CMS Development](https://aexaware.com/services/cms-development) – WordPress, Ghost, headless CMS, Contentful
- [MVP Development](https://aexaware.com/services/mvp-development) – Rapid prototyping, idea validation, startup-ready products
- [Software Solutions](https://aexaware.com/services/software-solutions) – Enterprise software, SaaS platforms, custom business applications

### AI / ML & Data Science
- [AI/ML Integration](https://aexaware.com/services/ai-ml-integration) – Model deployment, ML APIs, intelligent automation pipelines
- [AI Agent Development](https://aexaware.com/services/ai-agent-development) – Autonomous LLM agents, multi-agent systems, RAG pipelines
- [Generative AI](https://aexaware.com/services/generative-ai) – ChatGPT, Claude, Gemini, custom LLM application development
- [AI Image & Video Generation](https://aexaware.com/services/ai-image-video-generation) – Stable Diffusion, DALL·E, Sora, custom generative pipelines
- [TensorFlow Development](https://aexaware.com/services/tensorflow-development) – Model training, fine-tuning, TFX production pipelines
- [Deep Learning](https://aexaware.com/services/deep-learning) – Computer vision, NLP, speech recognition, predictive modeling
- [Data Science](https://aexaware.com/services/data-science) – Statistical modeling, EDA, hypothesis testing, ML workflows
- [Data Analysis](https://aexaware.com/services/data-analysis) – Business reporting, KPI dashboards, actionable insights
- [Data Visualization](https://aexaware.com/services/data-visualization) – D3.js, Plotly, Tableau, interactive business dashboards
- [Big Data Solutions](https://aexaware.com/services/big-data-solutions) – Data lakes, ETL pipelines, Spark, Kafka, data warehousing

### Cloud & DevOps
- [Cloud & DevOps](https://aexaware.com/services/cloud-devops) – AWS, GCP, Azure, multi-cloud architecture and management
- [DevOps Implementation](https://aexaware.com/services/devops-implementation) – Docker, Kubernetes, Terraform, CI/CD pipeline setup
- [DevOps Automation](https://aexaware.com/services/devops-automation) – Infrastructure as code, monitoring, GitOps, automated testing
- [DevOps Strategy Consulting](https://aexaware.com/services/devops-strategy-consulting) – DevOps maturity assessment, toolchain selection, roadmapping
- [Business Intelligence](https://aexaware.com/services/business-intelligence) – Tableau, Power BI, Looker, custom BI dashboards

### Design & Marketing
- [UI/UX Design](https://aexaware.com/services/ui-ux-design) – Figma, user research, wireframing, prototyping, design systems
- [Branding & Positioning](https://aexaware.com/services/branding-positioning) – Brand identity, visual strategy, positioning frameworks
- [Digital Marketing](https://aexaware.com/services/digital-marketing) – SEO, SEM, social media, content marketing, performance marketing
- [Conversion Rate Optimization](https://aexaware.com/services/conversion-rate-optimization) – A/B testing, heatmaps, UX audits, funnel analysis

### Engagement Models
- [Extended Team](https://aexaware.com/services/extended-team) – Dedicated developers, staff augmentation, team extension
- [White Label Services](https://aexaware.com/services/white-label-services) – White-label development for agencies and resellers
- [IoT Solutions](https://aexaware.com/services/iot) – Connected devices, sensors, firmware, IoT dashboards

## Portfolio

### [Qreius – React-Based Modern Web Platform](https://aexaware.com/portfolio/qreius)
A high-performance, cloud-native website built with React, Tailwind CSS, shadcn/ui, Cloudflare CDN, and Vercel. Delivered in 3 weeks with real-user monitoring and HSTS security. Live: https://qreius.com/

### [ADFerti – Corporate Website & WooCommerce E-Commerce](https://aexaware.com/portfolio/adferti)
WordPress 6.9 + WooCommerce e-commerce platform for an agriculture/fertilizer brand. Includes Elementor layouts, RankMath SEO, and Hostinger CDN. Delivered in 4 weeks. Live: https://adferti.com/

### [Shravonix – Custom Ghost CMS Website](https://aexaware.com/portfolio/shravonix)
Custom Ghost CMS 6.8 theme with React frontend, Node.js/Express backend, Cloudflare CDN, Giscus comments, and real-user monitoring. Delivered in 4 weeks. Live: https://shravonix.com/

### [Bharat Krushi Bio Fertilizer – Corporate & E-Commerce](https://aexaware.com/portfolio/bharat-krushi)
WordPress + WooCommerce platform with LiteSpeed server, Yoast SEO, and responsive Elementor layouts. Delivered in 4 weeks for agriculture industry. Live: https://bharatkrushibiofertilizer.com/

### [JK Fertilizers – Multilingual Corporate Website](https://aexaware.com/portfolio/jk-fertilizers)
WordPress + WooCommerce with GTranslate multilingual support, GSAP animations, Yoast SEO, and Hostinger CDN. Delivered in 5 weeks. Live: https://jkfertilizers.com/`,

      },
      llmsTxt: {
        siteName: "Aexaware Infotech",
        description:
          "Full-service software development company based in Vadodara, Gujarat, India. We build scalable web, mobile, AI/ML, cloud, and DevOps solutions for startups and enterprises worldwide.",
        allowCrawling: true,
        instructions: `Aexaware Infotech (https://aexaware.com) is a software development company founded in 2024 in Vadodara, Gujarat, India.

## About

We are a customer-centric, full-stack technology partner helping startups and enterprises build:
- Modern web applications (React, Next.js, Astro, Node.js, Python, PHP/Laravel)
- Mobile apps (React Native, Flutter, iOS, Android)
- AI/ML solutions (LLM integration, AI agents, Generative AI, TensorFlow, computer vision)
- Cloud & DevOps infrastructure (AWS, GCP, Azure, CI/CD, Kubernetes, Terraform)
- UI/UX design, branding, digital marketing, and CRO
- E-commerce platforms (WooCommerce, custom solutions)
- CMS implementations (WordPress, Ghost, headless CMS)

Contact: hello@aexaware.com | +91 81407 34392
Location: Vadodara, Gujarat, India
LinkedIn: https://www.linkedin.com/company/aexaware
Twitter/X: https://twitter.com/aexaware

## Sitemap

XML Sitemap: https://aexaware.com/sitemap-0.xml

## Key Pages

- Homepage: https://aexaware.com/
- About Us: https://aexaware.com/about
- Services Overview: https://aexaware.com/services
- Portfolio: https://aexaware.com/portfolio
- Blog: https://aexaware.com/blog
- Contact: https://aexaware.com/contact
- Start a Project: https://aexaware.com/start-project
- Privacy Policy: https://aexaware.com/privacy-policy
- Terms of Service: https://aexaware.com/terms
- Book a Free Consultation: https://cal.com/aexaware-infotech

## Services (28 Specialized Services)

### Web & Application Development
- Web Development: https://aexaware.com/services/web-development
  React, Next.js, Node.js, Python, PHP, Full-Stack, Progressive Web Apps
- Mobile Development: https://aexaware.com/services/mobile-development
  React Native, Flutter, iOS, Android cross-platform apps
- E-Commerce: https://aexaware.com/services/ecommerce
  WooCommerce, custom e-commerce platforms, payment integration
- CMS Development: https://aexaware.com/services/cms-development
  WordPress, Ghost, headless CMS, Contentful
- MVP Development: https://aexaware.com/services/mvp-development
  Rapid prototyping, idea validation, startup-ready products
- Software Solutions: https://aexaware.com/services/software-solutions
  Enterprise software, SaaS platforms, custom business applications

### AI / Machine Learning & Data Science
- AI/ML Integration: https://aexaware.com/services/ai-ml-integration
  Model deployment, ML APIs, intelligent automation pipelines
- AI Agent Development: https://aexaware.com/services/ai-agent-development
  Autonomous LLM agents, multi-agent systems, RAG pipelines
- Generative AI: https://aexaware.com/services/generative-ai
  ChatGPT, Claude, Gemini, custom LLM application development
- AI Image & Video Generation: https://aexaware.com/services/ai-image-video-generation
  Stable Diffusion, DALL·E, Sora, custom generative pipelines
- TensorFlow Development: https://aexaware.com/services/tensorflow-development
  Model training, fine-tuning, TFX production pipelines
- Deep Learning: https://aexaware.com/services/deep-learning
  Computer vision, NLP, speech recognition, predictive modeling
- Data Science: https://aexaware.com/services/data-science
  Statistical modeling, EDA, hypothesis testing, ML workflows
- Data Analysis: https://aexaware.com/services/data-analysis
  Business reporting, KPI dashboards, actionable insights
- Data Visualization: https://aexaware.com/services/data-visualization
  D3.js, Plotly, Tableau, interactive business dashboards
- Big Data Solutions: https://aexaware.com/services/big-data-solutions
  Data lakes, ETL pipelines, Spark, Kafka, data warehousing

### Cloud & DevOps
- Cloud & DevOps: https://aexaware.com/services/cloud-devops
  AWS, GCP, Azure, multi-cloud architecture and management
- DevOps Implementation: https://aexaware.com/services/devops-implementation
  Docker, Kubernetes, Terraform, CI/CD pipeline setup
- DevOps Automation: https://aexaware.com/services/devops-automation
  Infrastructure as code, monitoring, GitOps, automated testing
- DevOps Strategy Consulting: https://aexaware.com/services/devops-strategy-consulting
  DevOps maturity assessment, toolchain selection, roadmapping
- Business Intelligence: https://aexaware.com/services/business-intelligence
  Tableau, Power BI, Looker, custom BI dashboards

### Design & Marketing
- UI/UX Design: https://aexaware.com/services/ui-ux-design
  Figma, user research, wireframing, prototyping, design systems
- Branding & Positioning: https://aexaware.com/services/branding-positioning
  Brand identity, visual strategy, positioning frameworks
- Digital Marketing: https://aexaware.com/services/digital-marketing
  SEO, SEM, social media, content marketing, performance marketing
- Conversion Rate Optimization: https://aexaware.com/services/conversion-rate-optimization
  A/B testing, heatmaps, UX audits, funnel analysis

### Engagement Models
- Extended Team: https://aexaware.com/services/extended-team
  Dedicated developers, staff augmentation, team extension
- White Label Services: https://aexaware.com/services/white-label-services
  White-label development for agencies and resellers
- IoT Solutions: https://aexaware.com/services/iot
  Connected devices, sensors, firmware, IoT dashboards

## Portfolio Projects

### Qreius – React-Based Modern Web Platform
URL: https://aexaware.com/portfolio/qreius
Client: Qreius | Industry: Technology
Description: High-performance, cloud-native website with React, Tailwind CSS, shadcn/ui, Cloudflare CDN, Vercel. Delivered in 3 weeks.
Live Site: https://qreius.com/

### ADFerti – Corporate Website & WooCommerce Platform
URL: https://aexaware.com/portfolio/adferti
Client: ADFerti | Industry: Agriculture / Fertilizers
Description: WordPress 6.9 + WooCommerce e-commerce platform with Elementor, RankMath SEO, Hostinger CDN. Delivered in 4 weeks.
Live Site: https://adferti.com/

### Shravonix – Custom Ghost CMS Website
URL: https://aexaware.com/portfolio/shravonix
Client: Shravonix | Industry: Technology / Content Publishing
Description: Custom Ghost CMS 6.8 theme with React, Node.js, Cloudflare CDN, Giscus comments, real-user monitoring. Delivered in 4 weeks.
Live Site: https://shravonix.com/

### Bharat Krushi Bio Fertilizer – Corporate & E-Commerce Site
URL: https://aexaware.com/portfolio/bharat-krushi
Client: Bharat Krushi Bio Fertilizer | Industry: Agriculture
Description: WordPress + WooCommerce with LiteSpeed server, Yoast SEO, responsive Elementor layouts. Delivered in 4 weeks.
Live Site: https://bharatkrushibiofertilizer.com/

### JK Fertilizers – Multilingual Corporate Website
URL: https://aexaware.com/portfolio/jk-fertilizers
Client: JK Fertilizers | Industry: Agriculture / Fertilizers
Description: WordPress + WooCommerce with GTranslate multilingual, GSAP animations, Yoast SEO, Hostinger CDN. Delivered in 5 weeks.
Live Site: https://jkfertilizers.com/

## Blog

Technical articles on web development, AI/ML, DevOps, and software engineering.
Blog Index: https://aexaware.com/blog
RSS Feed: https://aexaware.com/rss.xml

### All Blog Posts
- [React 19 Features That Transform App Performance](https://aexaware.com/blog/react-19-2-features-that-transform-app-performance)
- [CI/CD for LLM Apps: Run Tests with Evidently & GitHub Actions](https://aexaware.com/blog/ci-cd-for-llm-apps-run-tests-with-evidently-github-actions)
- [Cloud-Native DevSecOps: Resilient Software](https://aexaware.com/blog/cloud-native-devsecops-resilient-software)
- [Docker Container Security: 10 Layers of Production-Ready Hardening](https://aexaware.com/blog/docker-container-security-10-layers-of-production-ready-hardening)
- [OWASP Top 10 for LLM: How to Test Your Gen AI App in 2025](https://aexaware.com/blog/owasp-top-10-llm-how-to-test-your-gen-ai-app-in-2025)
- [State of CSS 2025: Modern Features Every Business Needs](https://aexaware.com/blog/state-of-css-2025-modern-features-every-business-needs)
- [WordPress to Astro: The Real Engineering Trade-offs](https://aexaware.com/blog/wordpress-to-astro-the-real-engineering-trade-offs)
- [How to Choose a Trusted Web Development Company – 2025 Guide](https://aexaware.com/blog/how-to-choose-a-trusted-web-development-company-2025-guide)
- [Top AI Tools for Web Development in 2025](https://aexaware.com/blog/top-ai-tools-for-web-development-in-2025)
- [How to Optimize Your SEO Strategy for Google AI Overviews in 2025](https://aexaware.com/blog/how-to-optimize-your-seo-strategy-for-google-ai-overviews-in-2025)
- [Free LLM and Gen AI Courses to Take in 2025](https://aexaware.com/blog/free-llm-and-gen-ai-courses-to-take-in-2025)
- [Is WordPress Still the Best CMS in 2025?](https://aexaware.com/blog/is-wordpress-still-the-best-cms-in-2025)
- [7 Essential Websites for Software Engineers Daily](https://aexaware.com/blog/7-essential-websites-for-software-engineers-daily)
- [A Complete Guide to the Product Design Process](https://aexaware.com/blog/a-complete-guide-to-the-product-design-process)
- [Beyond the Refresh: How Tech Giants Handle Billions of Typing Events](https://aexaware.com/blog/beyond-the-refresh-how-tech-giants-handle-billions-of-typing-events-without-breaking-the-internet)
- [CORS Explained: Real Engineering Trade-offs and Pain Points](https://aexaware.com/blog/cors-explained-real-engineering-trade-offs-and-pain-points)
- [How Instagram Ships New Features Overnight (React Native OTA)](https://aexaware.com/blog/how-instagram-ships-new-features-overnight-no-app-store-update-required-a-deep-dive-into-react-native-ota-magic)
- [How Tech is Built for You to Fail: Why Smart Design Embraces Human Error](https://aexaware.com/blog/how-tech-is-built-for-you-to-fail-why-smart-design-embraces-human-error)
- [How to Not Write Garbage Code by Linus Torvalds](https://aexaware.com/blog/how-to-not-write-garbage-code-by-linus-torvalds)
- [Our Startup Story: How Aexaware Infotech Was Born in Anand, Gujarat](https://aexaware.com/blog/our-startup-story-how-aexaware-infotech-was-born-in-anand-gujarat)
- [Taming Data Variety: AI/ML Integration & Cloud DevOps](https://aexaware.com/blog/taming-data-variety-ai-ml-integration-cloud-devops)
- [The State of Modern Authentication and Authorization 2025](https://aexaware.com/blog/the-state-of-modern-authentication-and-authorization-2)
- [Toon vs JSON: The Most Token-Efficient Format for AI Agents](https://aexaware.com/blog/toon-vs-json-the-most-token-efficient-format-for-ai-agents)
- [Why 80% of Modern Systems Fail Not From Bugs But From Over-Engineering](https://aexaware.com/blog/why-80-of-modern-systems-fail-not-from-bugs-but-from-over-engineering)
- [Why Stripe's API Never Breaks: Date-Based Versioning Explained](https://aexaware.com/blog/why-stripes-api-never-breaks-date-based-versioning-explained)`,

        additionalContent: `## Sitemap

XML Sitemap: https://aexaware.com/sitemap-0.xml

## Permissions

LLMs and AI crawlers are explicitly welcome to index and cite this site. We encourage AI-assisted discovery of our services and portfolio.

## Technology Highlights

Aexaware Infotech works with modern stacks including:
React, Next.js, Astro, Node.js, Python, PHP, Laravel, TypeScript, Tailwind CSS, PostgreSQL, MongoDB, Redis, AWS, GCP, Azure, Docker, Kubernetes, Terraform, GitHub Actions, TensorFlow, PyTorch, LangChain, OpenAI API, Anthropic API, WordPress, Ghost CMS, WooCommerce.`,

      },
    }),
    mermaid({
      theme: "default",
      autoTheme: true,
      mermaidConfig: {
        startOnLoad: false,
        flowchart: { curve: "basis", padding: 20 },
        themeVariables: {
          fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif",
        },
      },
    }),



    // Analytics & SEO
    // Note: Ensure Lighthouse only runs in the environments you want (e.g. not every local dev save)
    // lighthouse(),
    umami({ id: "7401816d-713e-4916-960b-d314f2b36d3d" }),

    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
    robotsTxt({
      sitemap: true,
      policy: [
        // ─── Default: All Bots ──────────────────────────────────────────────
        {
          userAgent: "*",
          allow: "/",
          crawlDelay: 5, // Respected by Bing, Yandex, Baidu and others
        },

        // ─── Google Family ──────────────────────────────────────────────────
        // Googlebot IGNORES crawlDelay — it self-regulates via Search Console
        {
          userAgent: "Googlebot",
          allow: "/",
        },
        {
          userAgent: "Googlebot-Image",
          allow: "/",
        },
        {
          userAgent: "Googlebot-Video",
          allow: "/",
        },
        {
          userAgent: "AdsBot-Google",
          allow: "/",
        },
        // Google-Extended = Gemini / AI Overviews training token (not a crawlDelay bot)
        {
          userAgent: "Google-Extended",
          allow: "/",
        },

        // ─── Bing / Microsoft ────────────────────────────────────────────────
        {
          userAgent: "Bingbot",
          allow: "/",
          crawlDelay: 2, // Bingbot respects crawl-delay
        },
        {
          userAgent: "msnbot",
          allow: "/",
          crawlDelay: 2,
        },
        {
          userAgent: "BingPreview",
          allow: "/",
        },

        // ─── Yandex ─────────────────────────────────────────────────────────
        {
          userAgent: "YandexBot",
          allow: "/",
          crawlDelay: 3,
        },
        {
          userAgent: "YandexImages",
          allow: "/",
        },

        // ─── Baidu ──────────────────────────────────────────────────────────
        {
          userAgent: "Baiduspider",
          allow: "/",
          crawlDelay: 5,
        },

        // ─── Apple ──────────────────────────────────────────────────────────
        {
          userAgent: "Applebot",
          allow: "/",
        },
        {
          userAgent: "Applebot-Extended",
          allow: "/",
        },

        // ─── DuckDuckGo ─────────────────────────────────────────────────────
        {
          userAgent: "DuckDuckBot",
          allow: "/",
        },

        // ─── Yahoo ──────────────────────────────────────────────────────────
        {
          userAgent: "Slurp",
          allow: "/",
          crawlDelay: 3,
        },

        // ─── Social / Preview Bots ───────────────────────────────────────────
        // These need access to render OG/Twitter card previews
        {
          userAgent: "facebookexternalhit",
          allow: "/",
        },
        {
          userAgent: "Twitterbot",
          allow: "/",
        },
        {
          userAgent: "LinkedInBot",
          allow: "/",
        },
        {
          userAgent: "WhatsApp",
          allow: "/",
        },
        {
          userAgent: "Discordbot",
          allow: "/",
        },
        {
          userAgent: "Slackbot",
          allow: "/",
        },
        {
          userAgent: "TelegramBot",
          allow: "/",
        },

        // ─── AI Crawlers — Allow all for AI citation ─────────────────────────
        // Note: AI bots generally do NOT respect crawl-delay; omitted intentionally
        {
          userAgent: "GPTBot",
          allow: "/",
        },
        {
          userAgent: "ChatGPT-User",
          allow: "/",
        },
        {
          userAgent: "Claude-Web",
          allow: "/",
        },
        {
          userAgent: "claude-bot",
          allow: "/",
        },
        {
          userAgent: "ClaudeBot",
          allow: "/",
        },
        {
          userAgent: "PerplexityBot",
          allow: "/",
        },
        {
          userAgent: "cohere-ai",
          allow: "/",
        },
        {
          userAgent: "meta-externalagent",
          allow: "/",
        },
        {
          userAgent: "Amazonbot",
          allow: "/",
        },
      ],
    }),

    // Optimization (Always keep last)
    compress(),
    compressor({
      gzip: true,
      brotli: true,
    }),
  ],

  output: "static",

  devToolbar: {
    placement: "bottom-right",
  },

  image: {
    // Optimized image service configuration (Astro 5.17+)
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Options: lanczos3 (default), lanczos2, cubic, mitchell, catrom, etc.
        kernel: "mks2021",
      },
    },
    // Note: 'domains' and 'experimentalLayout' are deprecated/removed in favor of standard patterns
  },

  server: {
    host: true, // Listens on all addresses (0.0.0.0)
    // FIX: Explicitly allow only your production domain and localhost to prevent Host Header attacks
    allowedHosts: ["aexaware.com", "localhost", ".aexaware.com"],
  },

  // Enable caching for incremental builds
  cache: {
    enabled: true,
  },

  // Developer Experience
  vite: {
    plugins: [tailwindcss()],
    build: {
      // beneficial for large react/mermaid chunks
      chunkSizeWarningLimit: 1000,
    },
  },
});
