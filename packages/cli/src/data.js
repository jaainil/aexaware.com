/**
 * Static data — mirrors the MCP server tool data.
 * Bundled so the CLI works fully offline for discovery commands.
 */

export const SERVICES = [
  // Web & Application Development
  { name: 'Web Development',        category: 'Web & App',    tech: 'React, Next.js, Node.js, Python, PostgreSQL', url: 'https://aexaware.com/services/web-development' },
  { name: 'Mobile Development',     category: 'Web & App',    tech: 'React Native, Flutter, Expo, Firebase',       url: 'https://aexaware.com/services/mobile-development' },
  { name: 'E-Commerce Development', category: 'Web & App',    tech: 'WooCommerce, Stripe, Shopify',                url: 'https://aexaware.com/services/ecommerce' },
  { name: 'CMS Development',        category: 'Web & App',    tech: 'WordPress, Ghost, Contentful, Strapi',        url: 'https://aexaware.com/services/cms-development' },
  { name: 'MVP Development',        category: 'Web & App',    tech: 'React, Node.js, Supabase, Vercel',            url: 'https://aexaware.com/services/mvp-development' },
  { name: 'Software Solutions',     category: 'Web & App',    tech: 'Node.js, Python, PostgreSQL, Redis',          url: 'https://aexaware.com/services/software-solutions' },
  // AI / ML
  { name: 'AI/ML Integration',      category: 'AI / ML',      tech: 'OpenAI API, LangChain, FastAPI, pgvector',    url: 'https://aexaware.com/services/ai-ml-integration' },
  { name: 'AI Agent Development',   category: 'AI / ML',      tech: 'LangChain, LlamaIndex, FastMCP, Pinecone',    url: 'https://aexaware.com/services/ai-agent-development' },
  { name: 'Generative AI',          category: 'AI / ML',      tech: 'OpenAI, Claude, Gemini, Mistral',             url: 'https://aexaware.com/services/generative-ai' },
  { name: 'AI Image & Video Gen',   category: 'AI / ML',      tech: 'Stable Diffusion, DALL·E 3, Replicate',       url: 'https://aexaware.com/services/ai-image-video-generation' },
  { name: 'Data Science',           category: 'AI / ML',      tech: 'Python, Pandas, scikit-learn, dbt',           url: 'https://aexaware.com/services/data-science' },
  { name: 'Big Data Solutions',     category: 'AI / ML',      tech: 'Spark, Kafka, Snowflake, Airflow',            url: 'https://aexaware.com/services/big-data-solutions' },
  // Cloud & DevOps
  { name: 'Cloud & DevOps',         category: 'Cloud',        tech: 'AWS, GCP, Docker, Kubernetes, Terraform',     url: 'https://aexaware.com/services/cloud-devops' },
  // Design & Marketing
  { name: 'UI/UX Design',           category: 'Design',       tech: 'Figma, User Research, Design Systems',        url: 'https://aexaware.com/services/ui-ux-design' },
  { name: 'Branding & Positioning', category: 'Design',       tech: 'Brand Identity, Strategy, Frameworks',        url: 'https://aexaware.com/services/branding-positioning' },
  { name: 'Digital Marketing',      category: 'Design',       tech: 'SEO, SEM, GA4, Meta Ads, Ahrefs',             url: 'https://aexaware.com/services/digital-marketing' },
  // Engagement Models
  { name: 'Extended Team',          category: 'Engagement',   tech: 'Staff Augmentation, Any Stack',               url: 'https://aexaware.com/services/extended-team' },
  { name: 'White Label Services',   category: 'Engagement',   tech: 'White-Label, NDA, Any Stack',                 url: 'https://aexaware.com/services/white-label-services' },
  { name: 'IoT Solutions',          category: 'Engagement',   tech: 'MQTT, Arduino, AWS IoT, Node.js',             url: 'https://aexaware.com/services/iot' },
];

export const PORTFOLIO = [
  { name: 'Qreius',                       industry: 'Technology',       tech: 'React, Tailwind, Cloudflare, Vercel',          weeks: 3, live: 'https://qreius.com/' },
  { name: 'ADFerti',                      industry: 'Agriculture / E-Commerce', tech: 'WordPress, WooCommerce, Elementor',     weeks: 4, live: 'https://adferti.com/' },
  { name: 'Shravonix',                    industry: 'Media / Publishing', tech: 'Ghost CMS, React, Node.js, Cloudflare',      weeks: 4, live: 'https://shravonix.com/' },
  { name: 'Bharat Krushi Bio Fertilizer', industry: 'Agriculture / E-Commerce', tech: 'WordPress, WooCommerce, LiteSpeed',     weeks: 4, live: 'https://bharatkrushibiofertilizer.com/' },
  { name: 'JK Fertilizers',              industry: 'Agriculture / Multilingual', tech: 'WordPress, WooCommerce, GTranslate',  weeks: 5, live: 'https://jkfertilizers.com/' },
];

export const BLOG_POSTS = [
  { title: '7 Essential Websites for Software Engineers Daily',              slug: '7-essential-websites-for-software-engineers-daily',                tags: ['engineering', 'productivity'] },
  { title: 'A Complete Guide to the Product Design Process',                 slug: 'a-complete-guide-to-the-product-design-process',                    tags: ['design', 'UX'] },
  { title: 'Beyond the Refresh: How Tech Giants Handle Typing Events',       slug: 'beyond-the-refresh-how-tech-giants-handle-billions-of-typing-events-without-breaking-the-internet', tags: ['scalability', 'architecture'] },
  { title: 'CI/CD for LLM Apps: Run Tests with Evidently + GitHub Actions',  slug: 'ci-cd-for-llm-apps-run-tests-with-evidently-github-actions',        tags: ['AI', 'LLM', 'CI/CD'] },
  { title: 'Cloud-Native & DevSecOps: Build Resilient Software',             slug: 'cloud-native-devsecops-resilient-software',                         tags: ['cloud', 'DevOps', 'security'] },
  { title: 'CORS Explained: Real Engineering Trade-offs',                    slug: 'cors-explained-real-engineering-trade-offs-and-pain-points',         tags: ['web', 'security', 'API'] },
  { title: 'Docker Container Security: 10 Layers of Hardening',             slug: 'docker-container-security-10-layers-of-production-ready-hardening', tags: ['docker', 'security', 'DevOps'] },
  { title: 'Free LLM and Gen AI Courses to Take in 2025',                   slug: 'free-llm-and-gen-ai-courses-to-take-in-2025',                        tags: ['AI', 'LLM', 'education'] },
  { title: 'How Instagram Ships New Features Overnight: React Native OTA',  slug: 'how-instagram-ships-new-features-overnight-no-app-store-update-required-a-deep-dive-into-react-native-ota-magic', tags: ['React Native', 'mobile', 'OTA'] },
  { title: 'How to Choose a Trusted Web Development Company',               slug: 'how-to-choose-a-trusted-web-development-company-2025-guide',        tags: ['web development', 'guide'] },
  { title: "How to Not Write Garbage Code (by Linus Torvalds)",             slug: 'how-to-not-write-garbage-code-by-linus-torvalds',                    tags: ['engineering', 'code quality'] },
  { title: 'How to Optimize SEO for Google AI Overviews in 2025',           slug: 'how-to-optimize-your-seo-strategy-for-google-ai-overviews-in-2025', tags: ['SEO', 'AI', 'marketing'] },
  { title: 'Is WordPress Still the Best CMS in 2025?',                      slug: 'is-wordpress-still-the-best-cms-in-2025',                           tags: ['CMS', 'WordPress'] },
  { title: 'Outsource Web Development to India (2026): The No-Burn Guide',  slug: 'outsource-web-development-to-india-2026-the-no-burn-guide',         tags: ['outsourcing', 'India'] },
  { title: 'OWASP Top 10 LLM: How to Test Your Gen AI App',                 slug: 'owasp-top-10-llm-how-to-test-your-gen-ai-app-in-2025',              tags: ['AI', 'LLM', 'security'] },
  { title: 'React 19.2 Features That Transform App Performance',            slug: 'react-19-2-features-that-transform-app-performance',                 tags: ['React', 'performance'] },
  { title: 'State of CSS 2025: Modern Features Every Business Needs',       slug: 'state-of-css-2025-modern-features-every-business-needs',             tags: ['CSS', 'frontend'] },
  { title: 'Taming Data Variety: Scalable AI/ML + Cloud + DevOps',         slug: 'taming-data-variety-ai-ml-integration-cloud-devops',                 tags: ['AI', 'ML', 'cloud'] },
  { title: 'The State of Modern Authentication and Authorization',           slug: 'the-state-of-modern-authentication-and-authorization-2',             tags: ['auth', 'security', 'OAuth'] },
  { title: 'TOON vs JSON: Most Token-Efficient Format for AI Agents',       slug: 'toon-vs-json-the-most-token-efficient-format-for-ai-agents',         tags: ['AI', 'agents', 'LLM'] },
  { title: "Why Stripe's API Never Breaks: Date-Based Versioning",          slug: 'why-stripes-api-never-breaks-date-based-versioning-explained',       tags: ['API', 'versioning', 'engineering'] },
];

export const CONTACT = {
  email:    'info@aexaware.com',
  phone:    '+91 81407 34392',
  address:  "Office no 13, 3rd Floor Aarya's landmark, Canal Ring Road, Sevasi, Vadodara, Gujarat 391101, India",
  website:  'https://aexaware.com',
  booking:  'https://cal.com/aexaware-infotech',
  project:  'https://aexaware.com/start-project',
  contact:  'https://aexaware.com/contact',
  linkedin: 'https://www.linkedin.com/company/aexaware',
  twitter:  'https://twitter.com/aexaware',
  github:   'https://github.com/aexaware',
};

export const MCP_CONFIG = {
  endpoint:         'https://aexaware.com/api/mcp',
  serverCard:       'https://aexaware.com/.well-known/mcp/server-card.json',
  protocolVersion:  '2025-03-26',
  transport:        'streamable-http',
  tools: ['list_services', 'list_portfolio', 'search_blog', 'get_contact_info', 'provision_api_key', 'submit_sandbox_inquiry', 'get_openapi_spec'],
};

export const API_BASE = 'https://aexaware.com';
export const CLI_VERSION = '1.0.0';
