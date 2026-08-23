export async function onRequest(context) {
  const { request, env } = context;
  const accept = request.headers.get("accept") || "";

  const url = new URL(request.url);
  const pathname = url.pathname;
  const isJsonPreferred =
    accept.toLowerCase().includes("application/json") ||
    accept.toLowerCase().includes("application/problem+json") ||
    pathname.startsWith("/api/") ||
    (pathname.endsWith(".json") && !pathname.includes(".html"));

  // Programmatic Self-Serve API Key Generation for Autonomous Agents & Developers
  if (pathname === "/api/keys/provision" || pathname === "/api/v1/auth/keys" || pathname === "/api/keys") {
    const randomHex = Math.random().toString(16).substring(2, 10) + Math.random().toString(16).substring(2, 10);
    const keyPayload = {
      status: "success",
      api_key: `aex_free_${randomHex}`,
      tier: "developer_free_trial",
      monthly_quota: 10000,
      rate_limit: "120 req/min",
      sandbox_mode: true,
      features: [
        "Full access to OpenAPI 3.1.0 specification",
        "Model Context Protocol (MCP) tool executions",
        "LLMs structured markdown context",
        "Zero credit card required",
        "No sales form gate"
      ],
      endpoints: {
        docs: "https://aexaware.com/docs",
        developers: "https://aexaware.com/developers",
        sandbox: "https://aexaware.com/developers#sandbox",
        openapi_json: "https://aexaware.com/openapi.json",
        mcp_server_card: "https://aexaware.com/.well-known/mcp/server-card.json",
        agent_instructions: "https://aexaware.com/agent-instructions.md"
      },
      created_at: new Date().toISOString()
    };

    return new Response(JSON.stringify(keyPayload, null, 2), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, OPTIONS",
        "access-control-allow-headers": "Content-Type, Authorization, X-API-Key"
      }
    });
  }

  // Sandbox Endpoint Mock Simulation for Agents
  if (pathname === "/api/inquiry/sandbox" || pathname.startsWith("/api/sandbox")) {
    const sandboxPayload = {
      status: "success",
      environment: "sandbox",
      message: "Sandbox request executed successfully.",
      quota_remaining: 9980,
      timestamp: new Date().toISOString(),
      resolution_hint: "Sandbox mode allows agents and developers to test integrations without triggering live transactional operations."
    };

    return new Response(JSON.stringify(sandboxPayload, null, 2), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*"
      }
    });
  }

  // RFC 9728 OAuth Protected Resource Metadata Handler
  if (pathname === "/.well-known/oauth-protected-resource") {
    try {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.ok) {
        const text = await assetRes.text();
        return new Response(text, {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "access-control-allow-origin": "*",
            "vary": "Accept"
          }
        });
      }
    } catch (e) {
      // fallback
    }
  }

  // RFC 8414 OAuth Authorization Server Metadata Handler (with WorkOS auth.md agent_auth block)
  if (pathname === "/.well-known/oauth-authorization-server") {
    try {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.ok) {
        const text = await assetRes.text();
        return new Response(text, {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "access-control-allow-origin": "*",
            "vary": "Accept"
          }
        });
      }
    } catch (e) {
      // fallback
    }
  }

  // MCP Server Card Discovery Handler
  if (pathname === "/.well-known/mcp/server-card.json") {
    try {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.ok) {
        const text = await assetRes.text();
        return new Response(text, {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "access-control-allow-origin": "*",
            "vary": "Accept"
          }
        });
      }
    } catch (e) {
      // fallback
    }
  }

  // ARD (Agentic Resource Discovery) ai-catalog.json Manifest Handler
  if (pathname === "/.well-known/ai-catalog.json" || pathname === "/ai-catalog.json") {
    try {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.ok) {
        const text = await assetRes.text();
        return new Response(text, {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "access-control-allow-origin": "*",
            "vary": "Accept"
          }
        });
      }
    } catch (e) {
      // fallback
    }
  }

  // DNS for AI Discovery (DNS-AID) Manifest Handler
  if (pathname === "/.well-known/dns-aid.json") {
    try {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.ok) {
        const text = await assetRes.text();
        return new Response(text, {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "access-control-allow-origin": "*",
            "vary": "Accept"
          }
        });
      }
    } catch (e) {
      // fallback
    }
  }

  // DNS for AI Discovery (DNS-AID) BIND Zone File Handler
  if (pathname === "/.well-known/dns-aid.zone") {
    try {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.ok) {
        const text = await assetRes.text();
        return new Response(text, {
          status: 200,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "access-control-allow-origin": "*",
            "vary": "Accept"
          }
        });
      }
    } catch (e) {
      // fallback
    }
  }

  // Direct Markdown file request handler (e.g. /auth.md, /agent-instructions.md)
  if (pathname.endsWith(".md")) {
    try {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.ok) {
        const mdText = await assetRes.text();
        const tokens = Math.max(1, Math.ceil(mdText.length / 4));
        return new Response(mdText, {
          status: 200,
          headers: {
            "content-type": "text/markdown; charset=utf-8",
            "x-markdown-tokens": String(tokens),
            "access-control-allow-origin": "*",
            "vary": "Accept"
          }
        });
      }
    } catch (e) {
      // fallback
    }
  }

  // Handle JSON requests for agents and API clients
  if (isJsonPreferred && !accept.toLowerCase().includes("text/markdown")) {
    try {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.ok) {
        return assetRes;
      }
    } catch (e) {
      // asset fetch failed, proceed to structured error
    }

    return createStructuredJsonError({
      status: 404,
      code: "NOT_FOUND",
      message: `The requested resource '${pathname}' was not found on this server.`,
      path: pathname,
    });
  }

  if (accept.toLowerCase().includes("text/markdown")) {
    const candidates = [];
    if (pathname === "/" || pathname === "/index.html") {
      candidates.push("/index.md", "/llms.txt", "/auth.md");
    } else {
      const cleanPath = pathname.replace(/\/$/, "");
      candidates.push(`${cleanPath}.md`, `${cleanPath}/index.md`);
    }

    for (const candidate of candidates) {
      try {
        const candidateReq = new Request(new URL(candidate, request.url).toString(), request);
        const mdRes = await env.ASSETS.fetch(candidateReq);
        if (mdRes.ok) {
          const mdText = await mdRes.text();
          const tokens = Math.max(1, Math.ceil(mdText.length / 4));
          return new Response(mdText, {
            status: 200,
            headers: {
              "content-type": "text/markdown; charset=utf-8",
              "x-markdown-tokens": String(tokens),
              "vary": "Accept",
              "access-control-allow-origin": "*"
            }
          });
        }
      } catch (e) {
        // continue to fallback
      }
    }

    const htmlRes = await env.ASSETS.fetch(request);
    if (htmlRes.ok) {
      const contentType = htmlRes.headers.get("content-type") || "";
      if (contentType.includes("text/html") || contentType === "") {
        const html = await htmlRes.text();
        const markdown = convertHtmlToMarkdown(html);
        const tokens = Math.max(1, Math.ceil(markdown.length / 4));
        return new Response(markdown, {
          status: htmlRes.status,
          headers: {
            "content-type": "text/markdown; charset=utf-8",
            "x-markdown-tokens": String(tokens),
            "vary": "Accept",
            "access-control-allow-origin": "*"
          }
        });
      }
      return htmlRes;
    }

    // For nonexistent routes in markdown mode, return real HTTP 404 with helpful markdown pointers
    try {
      const notFoundReq = new Request(new URL("/404.md", request.url).toString(), request);
      const notFoundRes = await env.ASSETS.fetch(notFoundReq);
      if (notFoundRes.ok) {
        const mdText = await notFoundRes.text();
        const tokens = Math.max(1, Math.ceil(mdText.length / 4));
        return new Response(mdText, {
          status: 404,
          headers: {
            "content-type": "text/markdown; charset=utf-8",
            "x-markdown-tokens": String(tokens),
            "vary": "Accept",
            "access-control-allow-origin": "*"
          }
        });
      }
    } catch (e) {
      // continue to default fallback
    }

    const default404Md = `# 404 - Page Not Found\n\nThe requested path \`${pathname}\` does not exist on **Aexaware Infotech**.\n\n## Resolution Hints\n- Check the requested URL for typographical errors.\n- Consult the XML sitemap at https://aexaware.com/sitemap-index.xml\n- Review our services directory at https://aexaware.com/services\n\n## Helpful Navigation Links\n- [Homepage](/)\n- [LLMs Summary & System Docs](/llms.txt)\n- [Sitemap](/sitemap-index.xml)\n- [OpenAPI Spec](/openapi.json)\n- [Services Directory](/services)\n- [Portfolio](/portfolio)\n- [API Catalog](/.well-known/api-catalog)\n- [MCP Server Card](/.well-known/mcp/server-card.json)\n`;
    const tokens = Math.max(1, Math.ceil(default404Md.length / 4));
    return new Response(default404Md, {
      status: 404,
      headers: {
        "content-type": "text/markdown; charset=utf-8",
        "x-markdown-tokens": String(tokens),
        "vary": "Accept",
        "access-control-allow-origin": "*"
      }
    });
  }

  const response = await context.next();

  // If response is an error and client prefers JSON, return structured JSON error
  if (response.status >= 400 && isJsonPreferred) {
    return createStructuredJsonError({
      status: response.status,
      code: response.status === 404 ? "NOT_FOUND" : "REQUEST_FAILED",
      message: `Request to '${pathname}' failed with HTTP ${response.status}.`,
      path: pathname,
    });
  }

  response.headers.append("Vary", "Accept");
  if (!response.headers.has("Link")) {
    response.headers.set(
      "Link",
      '</openapi.json>; rel="service-desc", </.well-known/api-catalog>; rel="api-catalog", </llms.txt>; rel="describedby", </.well-known/mcp/server-card.json>; rel="service-desc", </services>; rel="service-doc", </auth.md>; rel="author-doc"'
    );
  }
  if (!response.headers.has("Content-Signal")) {
    response.headers.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
  }
  return response;
}

function createStructuredJsonError({ status = 404, code = "NOT_FOUND", message = "", path = "", resolutionHints = [] }) {
  const defaultHints = [
    "Verify the URL path and query parameters for typographical errors.",
    "Discover all valid URLs using the XML Sitemap at https://aexaware.com/sitemap-index.xml",
    "Inspect machine-readable system documentation at https://aexaware.com/llms.txt",
    "Check the OpenAPI 3.1.0 specification at https://aexaware.com/openapi.json or https://aexaware.com/openapi.yaml",
    "Browse the RFC 9727 API catalog at https://aexaware.com/.well-known/api-catalog",
    "Reach out to info@aexaware.com or submit an inquiry at https://aexaware.com/contact"
  ];

  const payload = {
    error: {
      code,
      status,
      message: message || (status === 404 ? "Resource not found." : "An error occurred."),
      path,
      timestamp: new Date().toISOString(),
      resolution_hints: resolutionHints.length > 0 ? resolutionHints : defaultHints,
      links: {
        homepage: "https://aexaware.com/",
        sitemap: "https://aexaware.com/sitemap-index.xml",
        llms_txt: "https://aexaware.com/llms.txt",
        openapi_json: "https://aexaware.com/openapi.json",
        openapi_yaml: "https://aexaware.com/openapi.yaml",
        api_catalog: "https://aexaware.com/.well-known/api-catalog",
        mcp_server_card: "https://aexaware.com/.well-known/mcp/server-card.json",
        services: "https://aexaware.com/services",
        contact: "https://aexaware.com/contact"
      }
    }
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status,
    headers: {
      "content-type": "application/problem+json; charset=utf-8",
      "vary": "Accept",
      "access-control-allow-origin": "*"
    }
  });
}

function convertHtmlToMarkdown(html) {
  if (!html) return "";

  let title = "";
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
  if (titleMatch && titleMatch[1]) {
    title = titleMatch[1].replace(/<[^>]+>/g, "").trim();
  }

  let description = "";
  const descMatch =
    html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i) ||
    html.match(/<meta\s+content=["'](.*?)["']\s+name=["']description["']/i);
  if (descMatch && descMatch[1]) {
    description = descMatch[1].trim();
  }

  let clean = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "");

  clean = clean.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, c) => `\n\n# ${c.trim()}\n\n`);
  clean = clean.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, c) => `\n\n## ${c.trim()}\n\n`);
  clean = clean.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, c) => `\n\n### ${c.trim()}\n\n`);
  clean = clean.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, c) => `\n\n#### ${c.trim()}\n\n`);

  clean = clean.replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
    const cleanText = text.replace(/<[^>]+>/g, "").trim();
    if (!cleanText) return "";
    return `[${cleanText}](${href})`;
  });

  clean = clean.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, c) => `\n- ${c.trim()}`);
  clean = clean.replace(/<\/?(ul|ol)[^>]*>/gi, "\n");

  clean = clean.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, c) => `\n\n${c.trim()}\n\n`);
  clean = clean.replace(/<br\s*\/?>/gi, "\n");

  clean = clean.replace(/<[^>]+>/g, "");

  clean = clean
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

  const lines = clean
    .split("\n")
    .map((l) => l.trim())
    .filter((line, i, arr) => line !== "" || (i > 0 && arr[i - 1] !== ""));

  let markdown = lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();

  if (title && !markdown.startsWith("# ")) {
    markdown = `# ${title}\n\n${description ? `> ${description}\n\n` : ""}${markdown}`;
  }

  return markdown;
}
