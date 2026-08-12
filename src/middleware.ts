import type { MiddlewareHandler } from "astro";
import { convertHtmlToMarkdown, estimateTokenCount } from "./lib/html-to-markdown";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const accept = context.request.headers.get("accept") || "";

  if (accept.toLowerCase().includes("text/markdown")) {
    const url = new URL(context.request.url);
    const pathname = url.pathname;

    // 1. Check for static markdown candidates
    const candidates: string[] = [];
    if (pathname === "/" || pathname === "/index.html") {
      candidates.push("/index.md", "/llms.txt", "/auth.md");
    } else {
      const cleanPath = pathname.replace(/\/$/, "");
      candidates.push(`${cleanPath}.md`, `${cleanPath}/index.md`);
    }

    for (const candidate of candidates) {
      try {
        const candidateUrl = new URL(candidate, context.request.url);
        const mdRes = await fetch(candidateUrl.toString());
        if (mdRes.ok && (mdRes.headers.get("content-type") || "").includes("text/markdown")) {
          const mdText = await mdRes.text();
          const tokens = estimateTokenCount(mdText);
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
        // ignore and fallback to HTML conversion
      }
    }

    // 2. Fetch HTML and convert to Markdown
    const response = await next();
    const contentType = response.headers.get("content-type") || "";

    if (response.ok && (contentType.includes("text/html") || contentType === "")) {
      const html = await response.text();
      const markdown = convertHtmlToMarkdown(html);
      const tokens = estimateTokenCount(markdown);

      return new Response(markdown, {
        status: response.status,
        headers: {
          "content-type": "text/markdown; charset=utf-8",
          "x-markdown-tokens": String(tokens),
          "vary": "Accept",
          "access-control-allow-origin": "*"
        }
      });
    }

    return response;
  }

  const response = await next();
  response.headers.append("Vary", "Accept");
  return response;
};
