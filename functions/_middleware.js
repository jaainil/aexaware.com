export async function onRequest(context) {
  const { request, env } = context;
  const accept = request.headers.get("accept") || "";

  if (accept.toLowerCase().includes("text/markdown")) {
    const url = new URL(request.url);
    const pathname = url.pathname;

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

    // For nonexistent routes, return real HTTP 404 with helpful markdown pointers
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

    const default404Md = `# 404 - Page Not Found\n\nThe requested path \`${pathname}\` does not exist on **Aexaware Infotech**.\n\n## Helpful Navigation Links\n- [Homepage](/)\n- [LLMs Summary & System Docs](/llms.txt)\n- [Sitemap](/sitemap-index.xml)\n- [Services Directory](/services)\n- [Portfolio](/portfolio)\n- [API Catalog](/.well-known/api-catalog)\n- [MCP Server Card](/.well-known/mcp/server-card.json)\n`;
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
  response.headers.append("Vary", "Accept");
  if (!response.headers.has("Link")) {
    response.headers.set(
      "Link",
      '</.well-known/api-catalog>; rel="api-catalog", </llms.txt>; rel="describedby", </.well-known/mcp/server-card.json>; rel="service-desc", </services>; rel="service-doc", </auth.md>; rel="author-doc"'
    );
  }
  if (!response.headers.has("Content-Signal")) {
    response.headers.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
  }
  return response;
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
