/**
 * Utility to convert raw HTML content into clean Markdown
 * for Accept: text/markdown content negotiation (RFC / Cloudflare Markdown for Agents).
 */
export function convertHtmlToMarkdown(html: string): string {
  if (!html) return "";

  // 1. Extract title and meta description
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

  // 2. Strip non-content elements
  let clean = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "");

  // 3. Convert headings
  clean = clean.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, c) => `\n\n# ${c.trim()}\n\n`);
  clean = clean.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, c) => `\n\n## ${c.trim()}\n\n`);
  clean = clean.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, c) => `\n\n### ${c.trim()}\n\n`);
  clean = clean.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, c) => `\n\n#### ${c.trim()}\n\n`);
  clean = clean.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, (_, c) => `\n\n##### ${c.trim()}\n\n`);
  clean = clean.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, (_, c) => `\n\n###### ${c.trim()}\n\n`);

  // 4. Convert links: <a href="url">text</a> -> [text](url)
  clean = clean.replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
    const cleanText = text.replace(/<[^>]+>/g, "").trim();
    if (!cleanText) return "";
    return `[${cleanText}](${href})`;
  });

  // 5. Convert list items
  clean = clean.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, c) => `\n- ${c.trim()}`);
  clean = clean.replace(/<\/?(ul|ol)[^>]*>/gi, "\n");

  // 6. Convert paragraphs and breaks
  clean = clean.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, c) => `\n\n${c.trim()}\n\n`);
  clean = clean.replace(/<br\s*\/?>/gi, "\n");

  // 7. Strip remaining HTML tags
  clean = clean.replace(/<[^>]+>/g, "");

  // 8. Decode HTML entities
  clean = clean
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

  // 9. Format output
  const lines = clean
    .split("\n")
    .map((line) => line.trim())
    .filter((line, i, arr) => line !== "" || (i > 0 && arr[i - 1] !== ""));

  let markdown = lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();

  if (title && !markdown.startsWith("# ")) {
    markdown = `# ${title}\n\n${description ? `> ${description}\n\n` : ""}${markdown}`;
  }

  return markdown;
}

export function estimateTokenCount(text: string): number {
  return Math.max(1, Math.ceil(text.length / 4));
}
