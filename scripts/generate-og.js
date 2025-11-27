import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, "..", "src/content/blog");
const OUTPUT_DIR = path.join(__dirname, "..", "dist", "og");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function generateOGPage(post) {
  // Use generated OG image
  let imageUrl = `https://aexaware.com/og-images/${post.slug}.png`;

  const ogHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${post.title}</title>
  <meta name="description" content="${post.description}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="${post.title}" />
  <meta property="og:description" content="${post.description}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:url" content="https://aexaware.com/blog/${post.slug}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${post.title}" />
  <meta name="twitter:description" content="${post.description}" />
  <meta name="twitter:image" content="${imageUrl}" />
  
  <!-- Redirect to actual post -->
  <meta http-equiv="refresh" content="0;url=https://aexaware.com/blog/${post.slug}" />
  <script>window.location.href = "https://aexaware.com/blog/${post.slug}";</script>
</head>
<body>
  <p>Redirecting to <a href="https://aexaware.com/blog/${post.slug}">${post.title}</a>...</p>
</body>
</html>
`;

  const outputPath = path.join(OUTPUT_DIR, `${post.slug}.html`);
  fs.writeFileSync(outputPath, ogHtml.trim());
  console.log("Generated OG:", outputPath);
}

function getFiles(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });
  return Array.prototype.concat(...files);
}

const files = getFiles(POSTS_DIR);

files.forEach((filePath) => {
  if (filePath.endsWith(".mdx") || filePath.endsWith(".md")) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: meta } = matter(fileContent);

    if (!meta.slug) {
        // Fallback slug from filename
        meta.slug = path.basename(filePath, path.extname(filePath));
    }
    
    // Clean slug
    meta.slug = meta.slug.trim().replace(/^["']|["']$/g, '');

    generateOGPage(meta);
  }
});
