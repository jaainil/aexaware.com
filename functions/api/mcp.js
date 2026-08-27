/**
 * Aexaware Infotech — MCP Server (Streamable HTTP Transport)
 * Spec: Model Context Protocol 2025-03-26
 * Endpoint: /api/mcp  (POST = JSON-RPC, GET = SSE stream)
 *
 * Tools exposed (LLM Function-Calling Compatible):
 *  1. list_services          — All 8 Aexaware engineering services
 *  2. list_portfolio         — Portfolio case studies with tech & metrics
 *  3. search_blog            — Keyword search across all blog articles
 *  4. get_contact_info       — Verified contact details & booking links
 *  5. provision_api_key      — Self-serve free sandbox API key (no form)
 *  6. submit_sandbox_inquiry — Safe simulated project inquiry estimation
 *  7. get_openapi_spec       — OpenAPI 3.1.0 specification URL & summary
 */

// ─── Static Tool Data ────────────────────────────────────────────────────────

const SERVICES = [
  // Build
  { name: "Web & Software Development", slug: "web-development", category: "Build", description: "Websites, e-commerce (Shopify, WooCommerce, custom), CMS and headless content, SaaS platforms and APIs, and legacy modernization on React, Next.js, Node.js, Python, and PHP.", url: "https://aexaware.com/services/web-development", techStack: ["React", "Next.js", "Node.js", "Python", "PHP", "Shopify", "WooCommerce", "WordPress", "Stripe", "PostgreSQL"] },
  { name: "Mobile App Development", slug: "mobile-development", category: "Build", description: "Cross-platform iOS and Android applications using React Native and Flutter with OTA updates and App Store / Google Play publishing.", url: "https://aexaware.com/services/mobile-development", techStack: ["React Native", "Flutter", "Expo", "Firebase", "Fastlane"] },
  { name: "MVP Development", slug: "mvp-development", category: "Build", description: "Rapid 2–6 week MVP development for startups and idea validation. PRD to production-ready web or mobile product.", url: "https://aexaware.com/services/mvp-development", techStack: ["React", "Node.js", "Supabase", "Vercel", "Figma"] },
  // AI & Data
  { name: "AI & Machine Learning", slug: "ai-ml-integration", category: "AI & Data", description: "LLM integration and chatbots, AI agent development with MCP servers and RAG, generative image/video pipelines, predictive analytics, computer vision, NLP, and data engineering with BI.", url: "https://aexaware.com/services/ai-ml-integration", techStack: ["OpenAI", "Anthropic", "LangChain", "Python", "pgvector", "Pinecone", "Stable Diffusion", "Kafka", "Spark", "Snowflake"] },
  // Infrastructure
  { name: "Cloud, DevOps & IoT", slug: "cloud-devops", category: "Infrastructure", description: "Cloud architecture and migration (AWS, GCP, Azure), Docker/Kubernetes, CI/CD, Terraform IaC, DevSecOps, monitoring, and IoT devices from firmware to edge.", url: "https://aexaware.com/services/cloud-devops", techStack: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "MQTT", "C/C++"] },
  // Design & Growth
  { name: "UI/UX Design", slug: "ui-ux-design", category: "Design & Growth", description: "Figma-based design systems, user research, wireframing, interactive prototyping, and usability testing.", url: "https://aexaware.com/services/ui-ux-design", techStack: ["Figma", "FigJam", "Lottie", "Framer", "Hotjar"] },
  { name: "Branding & Marketing", slug: "branding-positioning", category: "Design & Growth", description: "Brand identity and positioning, messaging and content, SEO, paid advertising (Google, Meta, LinkedIn), social and email, and conversion rate optimization.", url: "https://aexaware.com/services/branding-positioning", techStack: ["Figma", "Google Ads", "GA4", "Semrush", "Ahrefs", "Meta Ads"] },
  // Team
  { name: "Hire Developers", slug: "extended-team", category: "Team", description: "Dedicated developers, cross-functional pods, and specialized roles embedded in your team, plus white-label delivery for agencies under NDA.", url: "https://aexaware.com/services/extended-team", techStack: ["Any Stack", "React", "Node.js", "Python", "Agile", "NDA"] },
];

const PORTFOLIO = [
  {
    name: "Qreius",
    slug: "qreius",
    industry: "Technology / Web Platform",
    description: "High-performance, cloud-native website with React, Tailwind CSS, shadcn/ui, real-user monitoring, and HSTS security hardening.",
    techStack: ["React", "Tailwind CSS", "shadcn/ui", "Cloudflare CDN", "Vercel"],
    deliveryWeeks: 3,
    highlights: ["Core Web Vitals: all green", "HSTS + security headers", "Real-user monitoring"],
    url: "https://aexaware.com/portfolio/qreius",
    liveUrl: "https://qreius.com/"
  },
  {
    name: "ADFerti",
    slug: "adferti",
    industry: "Agriculture / E-Commerce",
    description: "WordPress 6.9 + WooCommerce e-commerce platform for an agriculture fertilizer brand with Elementor layouts, RankMath SEO, and Hostinger CDN.",
    techStack: ["WordPress 6.9", "WooCommerce", "Elementor", "RankMath", "Hostinger CDN"],
    deliveryWeeks: 4,
    highlights: ["Full WooCommerce store", "SEO-optimized product catalog", "Mobile-first responsive design"],
    url: "https://aexaware.com/portfolio/adferti",
    liveUrl: "https://adferti.com/"
  },
  {
    name: "Shravonix",
    slug: "shravonix",
    industry: "Media / Publishing",
    description: "Custom Ghost CMS 6.8 theme with React frontend, Node.js/Express backend, Cloudflare CDN, Giscus comments, and real-user monitoring.",
    techStack: ["Ghost CMS 6.8", "React", "Node.js", "Express", "Cloudflare CDN"],
    deliveryWeeks: 4,
    highlights: ["Custom Ghost theme", "Giscus comment system", "Real-user monitoring (RUM)"],
    url: "https://aexaware.com/portfolio/shravonix",
    liveUrl: "https://shravonix.com/"
  },
  {
    name: "Bharat Krushi Bio Fertilizer",
    slug: "bharat-krushi",
    industry: "Agriculture / E-Commerce",
    description: "WordPress + WooCommerce platform with LiteSpeed server, Yoast SEO, and responsive Elementor layouts for the Indian agriculture market.",
    techStack: ["WordPress", "WooCommerce", "LiteSpeed", "Yoast SEO", "Elementor"],
    deliveryWeeks: 4,
    highlights: ["Agriculture industry vertical", "LiteSpeed caching", "Yoast SEO"],
    url: "https://aexaware.com/portfolio/bharat-krushi",
    liveUrl: "https://bharatkrushibiofertilizer.com/"
  },
  {
    name: "JK Fertilizers",
    slug: "jk-fertilizers",
    industry: "Agriculture / E-Commerce (Multilingual)",
    description: "WordPress + WooCommerce with GTranslate multilingual support, GSAP animations, Yoast SEO, and Hostinger CDN.",
    techStack: ["WordPress", "WooCommerce", "GTranslate", "GSAP", "Yoast SEO"],
    deliveryWeeks: 5,
    highlights: ["Multilingual (GTranslate)", "GSAP scroll animations", "Multi-currency pricing"],
    url: "https://aexaware.com/portfolio/jk-fertilizers",
    liveUrl: "https://jkfertilizers.com/"
  }
];

const BLOG_POSTS = [
  { slug: "7-essential-websites-for-software-engineers-daily", title: "7 Essential Websites for Software Engineers Daily", tags: ["engineering", "tools", "productivity"] },
  { slug: "a-complete-guide-to-the-product-design-process", title: "A Complete Guide to the Product Design Process", tags: ["design", "product", "UX"] },
  { slug: "beyond-the-refresh-how-tech-giants-handle-billions-of-typing-events-without-breaking-the-internet", title: "Beyond the Refresh: How Tech Giants Handle Billions of Typing Events", tags: ["engineering", "scalability", "architecture"] },
  { slug: "ci-cd-for-llm-apps-run-tests-with-evidently-github-actions", title: "CI/CD for LLM Apps: Run Tests with Evidently + GitHub Actions", tags: ["AI", "LLM", "CI/CD", "DevOps"] },
  { slug: "cloud-native-devsecops-resilient-software", title: "Cloud-Native & DevSecOps: Build Resilient Software", tags: ["cloud", "DevOps", "security"] },
  { slug: "cors-explained-real-engineering-trade-offs-and-pain-points", title: "CORS Explained: Real Engineering Trade-offs & Pain Points", tags: ["web", "security", "API"] },
  { slug: "docker-container-security-10-layers-of-production-ready-hardening", title: "Docker Container Security: 10 Layers of Production-Ready Hardening", tags: ["docker", "security", "DevOps"] },
  { slug: "free-llm-and-gen-ai-courses-to-take-in-2025", title: "Free LLM and Gen AI Courses to Take in 2025", tags: ["AI", "LLM", "education"] },
  { slug: "how-instagram-ships-new-features-overnight-no-app-store-update-required-a-deep-dive-into-react-native-ota-magic", title: "How Instagram Ships New Features Overnight: React Native OTA Magic", tags: ["React Native", "mobile", "OTA"] },
  { slug: "how-to-choose-a-trusted-web-development-company-2025-guide", title: "How To Choose A Trusted Web Development Company 2025 Guide", tags: ["web development", "guide", "outsourcing"] },
  { slug: "how-to-not-write-garbage-code-by-linus-torvalds", title: "How to Not Write Garbage Code (by Linus Torvalds)", tags: ["engineering", "code quality", "best practices"] },
  { slug: "how-to-optimize-your-seo-strategy-for-google-ai-overviews-in-2025", title: "How to Optimize Your SEO Strategy for Google AI Overviews in 2025", tags: ["SEO", "AI", "marketing"] },
  { slug: "is-wordpress-still-the-best-cms-in-2025", title: "Is WordPress Still the Best CMS in 2025?", tags: ["CMS", "WordPress", "web development"] },
  { slug: "outsource-web-development-to-india-2026-the-no-burn-guide", title: "Outsource Web Development to India (2026): The No-Burn Guide", tags: ["outsourcing", "India", "web development"] },
  { slug: "owasp-top-10-llm-how-to-test-your-gen-ai-app-in-2025", title: "OWASP Top 10 LLM: How to Test Your Gen AI App in 2025", tags: ["AI", "LLM", "security", "OWASP"] },
  { slug: "react-19-2-features-that-transform-app-performance", title: "React 19.2 Features That Transform App Performance", tags: ["React", "performance", "web development"] },
  { slug: "state-of-css-2025-modern-features-every-business-needs", title: "State of CSS 2025: Modern Features Every Business Needs", tags: ["CSS", "web", "frontend"] },
  { slug: "taming-data-variety-ai-ml-integration-cloud-devops", title: "Taming Data Variety: Scalable AI/ML Integration with Cloud & DevOps", tags: ["AI", "ML", "cloud", "DevOps"] },
  { slug: "the-state-of-modern-authentication-and-authorization-2", title: "The State of Modern Authentication and Authorization", tags: ["auth", "security", "OAuth"] },
  { slug: "toon-vs-json-the-most-token-efficient-format-for-ai-agents", title: "TOON vs JSON: The Most Token-Efficient Format for AI Agents", tags: ["AI", "agents", "LLM", "MCP"] },
  { slug: "why-stripes-api-never-breaks-date-based-versioning-explained", title: "Why Stripe's API Never Breaks: Date-Based Versioning Explained", tags: ["API", "versioning", "engineering"] },
];

// ─── MCP Protocol Constants ───────────────────────────────────────────────────

const MCP_PROTOCOL_VERSION = "2025-03-26";
const SERVER_INFO = {
  name: "aexaware-mcp-server",
  version: "1.0.0",
};

const CAPABILITIES = {
  tools: { listChanged: false },
};

// ─── Tool Definitions (JSON Schema — Strict LLM Function-Calling) ────────────

const TOOLS = [
  {
    name: "list_services",
    description: "Returns all 8 engineering service pillars offered by Aexaware Infotech, including service name, category, description, tech stack, and service URL. Use this when a user asks what Aexaware does, what services are available, or needs help finding the right service.",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional filter by category. One of: 'Build', 'AI & Data', 'Infrastructure', 'Design & Growth', 'Team'. Omit to return all services.",
          enum: ["Build", "AI & Data", "Infrastructure", "Design & Growth", "Team"]
        }
      },
      required: []
    }
  },
  {
    name: "list_portfolio",
    description: "Returns Aexaware Infotech's portfolio of delivered client projects including project name, industry, description, tech stack used, delivery timeline, key outcomes, and live URL. Use this when a user wants to see examples of past work or case studies.",
    inputSchema: {
      type: "object",
      properties: {
        industry: {
          type: "string",
          description: "Optional filter by industry keyword (e.g. 'agriculture', 'media', 'e-commerce')."
        }
      },
      required: []
    }
  },
  {
    name: "search_blog",
    description: "Searches Aexaware's technical blog for articles matching a keyword query. Returns matching posts with title, slug, URL, and tags. Blog covers AI/ML, cloud architecture, DevOps, web development, mobile, security, and engineering best practices.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search keyword or topic (e.g. 'docker security', 'LLM agents', 'React Native OTA', 'API versioning')"
        }
      },
      required: ["query"]
    }
  },
  {
    name: "get_contact_info",
    description: "Returns verified contact details for Aexaware Infotech: email, phone, office address, booking link for free technical consultation, and project inquiry form URL. Use this when a user wants to get in touch, book a meeting, or start a project.",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: "provision_api_key",
    description: "Programmatically provisions a free sandbox API key for Aexaware's developer tier. No credit card or sales form required. Returns an active API key with quota details. Use this when an agent or developer needs to authenticate against Aexaware's sandbox endpoints.",
    inputSchema: {
      type: "object",
      properties: {
        agent_name: {
          type: "string",
          description: "Name of the requesting agent or developer application (e.g. 'ClaudeAgent', 'MyApp/1.0')"
        },
        client_email: {
          type: "string",
          description: "Optional contact email for key delivery"
        }
      },
      required: []
    }
  },
  {
    name: "submit_sandbox_inquiry",
    description: "Simulates submitting a project inquiry in Aexaware's safe test sandbox. Returns estimated delivery timeline, recommended team size, and consultation URL without triggering real CRM notifications.",
    inputSchema: {
      type: "object",
      properties: {
        project_name: {
          type: "string",
          description: "Title or summary of the software project"
        },
        service_category: {
          type: "string",
          description: "Primary capability area required",
          enum: [
            "Web Development",
            "Mobile Development",
            "MVP Development",
            "AI Agent Development",
            "Generative AI",
            "Cloud & DevOps",
            "Software Solutions",
            "UI/UX Design",
            "Extended Team"
          ]
        },
        timeline_weeks: {
          type: "integer",
          description: "Target delivery duration in weeks (typically 2-6 weeks for MVPs)"
        },
        tech_stack: {
          type: "array",
          items: { "type": "string" },
          description: "Array of preferred technologies or frameworks"
        }
      },
      required: ["project_name", "service_category"]
    }
  },
  {
    name: "get_openapi_spec",
    description: "Returns the URL and summary of Aexaware's machine-readable OpenAPI 3.1.0 specification. Use this when an agent needs to understand the full API surface, discover all available endpoints, or integrate programmatically.",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  }
];

// ─── Tool Handlers ────────────────────────────────────────────────────────────

function handleListServices({ category } = {}) {
  const results = category
    ? SERVICES.filter(s => s.category === category)
    : SERVICES;

  return {
    total: results.length,
    services: results.map(s => ({
      name: s.name,
      category: s.category,
      description: s.description,
      tech_stack: s.techStack,
      url: s.url
    }))
  };
}

function handleListPortfolio({ industry } = {}) {
  const results = industry
    ? PORTFOLIO.filter(p =>
        p.industry.toLowerCase().includes(industry.toLowerCase()) ||
        p.description.toLowerCase().includes(industry.toLowerCase())
      )
    : PORTFOLIO;

  return {
    total: results.length,
    projects: results.map(p => ({
      name: p.name,
      industry: p.industry,
      description: p.description,
      tech_stack: p.techStack,
      delivery_weeks: p.deliveryWeeks,
      highlights: p.highlights,
      case_study_url: p.url,
      live_url: p.liveUrl
    }))
  };
}

function handleSearchBlog({ query }) {
  const q = query.toLowerCase();
  const results = BLOG_POSTS.filter(post =>
    post.title.toLowerCase().includes(q) ||
    post.tags.some(tag => tag.toLowerCase().includes(q)) ||
    post.slug.toLowerCase().includes(q)
  );

  return {
    query,
    total_results: results.length,
    posts: results.map(p => ({
      title: p.title,
      url: `https://aexaware.com/blog/${p.slug}`,
      tags: p.tags
    }))
  };
}

function handleGetContactInfo() {
  return {
    company: "Aexaware Infotech",
    legal_name: "Aexaware Infotech Pvt Ltd",
    email: "info@aexaware.com",
    phone: "+91 81407 34392",
    address: "Office no 13, 3rd Floor Aarya's landmark, Canal Ring Road, Sevasi, Vadodara, Gujarat 391101, India",
    booking_link: "https://cal.com/aexaware-infotech",
    project_form: "https://aexaware.com/start-project",
    contact_page: "https://aexaware.com/contact",
    website: "https://aexaware.com",
    social: {
      linkedin: "https://www.linkedin.com/company/aexaware",
      twitter: "https://twitter.com/aexaware",
      github: "https://github.com/aexaware",
      instagram: "https://www.instagram.com/aexaware"
    }
  };
}

function handleProvisionApiKey({ agent_name, client_email } = {}) {
  const randomHex = Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10);
  return {
    status: "success",
    api_key: `aex_free_${randomHex}`,
    tier: "developer_free_trial",
    monthly_quota: 10000,
    rate_limit: "120 req/min",
    sandbox_mode: true,
    agent_name: agent_name || "anonymous",
    created_at: new Date().toISOString(),
    endpoints: {
      developer_portal: "https://aexaware.com/developers",
      sandbox: "https://aexaware.com/developers#sandbox",
      openapi: "https://aexaware.com/openapi.json",
      mcp_server: "https://aexaware.com/api/mcp"
    },
    note: "Free tier includes full sandbox access. No credit card required."
  };
}

function handleSubmitSandboxInquiry({ project_name, service_category, timeline_weeks, tech_stack } = {}) {
  const weeks = timeline_weeks || 4;
  return {
    status: "success",
    environment: "sandbox",
    message: "Sandbox inquiry validated and estimated successfully. Zero CRM side-effects.",
    project_name: project_name || "Untitled Project",
    service_category: service_category || "MVP Development",
    estimated_delivery_weeks: weeks,
    recommended_team_size: "1 Lead Full-Stack Engineer + 1 UI/UX Specialist",
    tech_stack_validated: tech_stack || ["React", "Node.js", "PostgreSQL"],
    consultation_url: "https://cal.com/aexaware-infotech",
    project_intake_url: "https://aexaware.com/start-project"
  };
}

function handleGetOpenApiSpec() {
  return {
    format: "OpenAPI 3.1.0",
    endpoints: {
      json: "https://aexaware.com/openapi.json",
      yaml: "https://aexaware.com/openapi.yaml",
      api_mirror_json: "https://aexaware.com/api/openapi.json"
    },
    paths_defined: [
      "GET /openapi.json",
      "GET /openapi.yaml",
      "POST /api/keys/provision",
      "POST /api/inquiry/sandbox",
      "GET /llms.txt",
      "GET /.well-known/api-catalog",
      "GET /.well-known/mcp/server-card.json",
      "GET /.well-known/agent-skills/index.json"
    ],
    mcp_server: "https://aexaware.com/api/mcp",
    developer_portal: "https://aexaware.com/developers"
  };
}

// ─── JSON-RPC Dispatcher ─────────────────────────────────────────────────────

function jsonrpc(id, result) {
  return { jsonrpc: "2.0", id: id ?? null, result };
}

function jsonrpcError(id, code, message, data) {
  return { jsonrpc: "2.0", id: id ?? null, error: { code, message, ...(data ? { data } : {}) } };
}

function handleRpc(body) {
  const { method, params, id } = body;

  switch (method) {
    case "initialize":
      return jsonrpc(id, {
        protocolVersion: MCP_PROTOCOL_VERSION,
        serverInfo: SERVER_INFO,
        capabilities: CAPABILITIES,
        instructions: "Aexaware Infotech MCP Server. Use list_services to discover engineering capabilities, search_blog for technical articles, list_portfolio for case studies, get_contact_info to reach the team, provision_api_key for free sandbox access, submit_sandbox_inquiry for simulated project scopes, and get_openapi_spec for full API documentation."
      });

    case "notifications/initialized":
      return null; // No response for notifications

    case "tools/list":
      return jsonrpc(id, { tools: TOOLS });

    case "tools/call": {
      const { name, arguments: args = {} } = params ?? {};
      let toolResult;

      try {
        switch (name) {
          case "list_services":           toolResult = handleListServices(args); break;
          case "list_portfolio":          toolResult = handleListPortfolio(args); break;
          case "search_blog":             toolResult = handleSearchBlog(args); break;
          case "get_contact_info":        toolResult = handleGetContactInfo(); break;
          case "provision_api_key":       toolResult = handleProvisionApiKey(args); break;
          case "submit_sandbox_inquiry":  toolResult = handleSubmitSandboxInquiry(args); break;
          case "get_openapi_spec":        toolResult = handleGetOpenApiSpec(); break;
          default:
            return jsonrpcError(id, -32601, `Unknown tool: ${name}`);
        }

        return jsonrpc(id, {
          content: [{ type: "text", text: JSON.stringify(toolResult, null, 2) }],
          isError: false
        });
      } catch (err) {
        return jsonrpc(id, {
          content: [{ type: "text", text: `Tool execution error: ${err.message}` }],
          isError: true
        });
      }
    }

    case "ping":
      return jsonrpc(id, {});

    default:
      return jsonrpcError(id, -32601, `Method not found: ${method}`);
  }
}

// ─── CORS Headers ────────────────────────────────────────────────────────────

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Mcp-Session-Id",
  "Access-Control-Expose-Headers": "Mcp-Session-Id",
};

// ─── Cloudflare Pages Function Entry Point ───────────────────────────────────

export async function onRequest({ request }) {
  const method = request.method.toUpperCase();

  // Handle CORS preflight
  if (method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS });
  }

  // ── GET: SSE stream for server-initiated messages ───────────────────────
  if (method === "GET") {
    const accept = request.headers.get("Accept") || "";

    if (accept.includes("text/event-stream")) {
      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();
      const encoder = new TextEncoder();

      // Send a single SSE endpoint_event so clients know the server is live
      const endpointEvent = `event: endpoint\ndata: ${JSON.stringify({ endpoint: "/api/mcp" })}\n\n`;
      writer.write(encoder.encode(endpointEvent)).then(() => writer.close());

      return new Response(readable, {
        status: 200,
        headers: {
          ...CORS,
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
          "X-Accel-Buffering": "no",
        }
      });
    }

    // Non-SSE GET: return server capabilities as JSON
    return new Response(JSON.stringify({
      server: SERVER_INFO,
      protocol: MCP_PROTOCOL_VERSION,
      transport: "streamable-http",
      endpoint: "https://aexaware.com/api/mcp",
      capabilities: CAPABILITIES,
      tools_count: TOOLS.length,
      tools: TOOLS.map(t => ({ name: t.name, description: t.description, inputSchema: t.inputSchema })),
      usage: {
        initialize: { method: "POST", body: { jsonrpc: "2.0", method: "initialize", params: { protocolVersion: MCP_PROTOCOL_VERSION, clientInfo: { name: "YourClient", version: "1.0" }, capabilities: {} }, id: 1 } },
        list_tools: { method: "POST", body: { jsonrpc: "2.0", method: "tools/list", id: 2 } },
        call_tool:  { method: "POST", body: { jsonrpc: "2.0", method: "tools/call", params: { name: "list_services", arguments: {} }, id: 3 } }
      }
    }, null, 2), {
      status: 200,
      headers: { ...CORS, "Content-Type": "application/json; charset=utf-8" }
    });
  }

  // ── POST: JSON-RPC messages ─────────────────────────────────────────────
  if (method === "POST") {
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify(jsonrpcError(null, -32700, "Parse error: invalid JSON")),
        { status: 400, headers: { ...CORS, "Content-Type": "application/json" } }
      );
    }

    // Batch request support
    const isBatch = Array.isArray(body);
    const messages = isBatch ? body : [body];
    const responses = messages
      .map(msg => handleRpc(msg))
      .filter(r => r !== null); // drop notifications

    const accept = request.headers.get("Accept") || "";

    // Streamable HTTP: if client requests SSE, stream responses
    if (accept.includes("text/event-stream")) {
      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();
      const encoder = new TextEncoder();

      (async () => {
        for (const resp of responses) {
          const data = `event: message\ndata: ${JSON.stringify(resp)}\n\n`;
          await writer.write(encoder.encode(data));
        }
        await writer.close();
      })();

      return new Response(readable, {
        status: 200,
        headers: {
          ...CORS,
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache",
        }
      });
    }

    // Standard JSON response
    const payload = isBatch ? responses : (responses[0] ?? null);
    return new Response(JSON.stringify(payload, null, 2), {
      status: 200,
      headers: { ...CORS, "Content-Type": "application/json; charset=utf-8" }
    });
  }

  return new Response(
    JSON.stringify(jsonrpcError(null, -32600, "Method not allowed")),
    { status: 405, headers: { ...CORS, "Content-Type": "application/json" } }
  );
}
