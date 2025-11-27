import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://aexaware.com';
const BLOG_DIR = path.join(__dirname, '../src/content/blog');

function getBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  function getFiles(dir) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    const files = dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    });
    return Array.prototype.concat(...files);
  }
  
  const files = getFiles(BLOG_DIR);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const content = fs.readFileSync(file, 'utf-8');
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      
      const metadata = {};
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        
        const titleMatch = frontmatter.match(/title:\s*["']?(.+?)["']?$/m);
        if (titleMatch) metadata.title = titleMatch[1];
        
        const descMatch = frontmatter.match(/description:\s*["']?(.+?)["']?$/m);
        if (descMatch) metadata.description = descMatch[1];
        
        const dateMatch = frontmatter.match(/date:\s*["']?(.+?)["']?$/m);
        if (dateMatch) metadata.date = dateMatch[1];
        
        const slugMatch = frontmatter.match(/slug:\s*["']?(.+?)["']?$/m);
        if (slugMatch) metadata.slug = slugMatch[1];
      }
      
      // Fallback slug
      if (!metadata.slug) {
        metadata.slug = path.basename(file, '.mdx');
      }
      
      return metadata;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

const generateRSS = () => {
  const posts = getBlogPosts();
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>My Blog</title>
    <link>${SITE_URL}</link>
    <description>Latest updates and articles</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title || 'Untitled'}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description || ''}]]></description>
    </item>`).join('')}
  </channel>
</rss>`;

  const distPath = path.resolve(__dirname, '../public');
  
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  fs.writeFileSync(path.join(distPath, 'rss.xml'), rss);
  console.log('✅ rss.xml generated!');
};

generateRSS();
