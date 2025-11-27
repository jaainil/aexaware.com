import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://aexaware.com';
const BLOG_DIR = path.join(__dirname, '../src/content/blog');

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/services/web-development',
  '/services/mobile-development',
  '/services/ui-ux-design',
  '/services/software-solutions',
  '/services/ecommerce',
  '/services/cloud-devops',
  '/services/ai-ml-integration',
  '/contact',
  '/about',
  '/portfolio',
  '/blog',
];

function getBlogSlugs() {
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
      // Read file content to check for slug in frontmatter, otherwise use filename
      const content = fs.readFileSync(file, 'utf-8');
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        const slugMatch = frontmatter.match(/slug:\s*(.+)/);
        if (slugMatch) {
          return `/blog/${slugMatch[1].trim()}`;
        }
      }
      
      // Fallback to filename without extension
      return `/blog/${path.basename(file, '.mdx')}`;
    });
}

const generateSitemap = () => {
  const blogRoutes = getBlogSlugs();
  const allRoutes = [...staticRoutes, ...blogRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      return `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  const distPath = path.resolve(__dirname, '../public');
  
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generated!');
};

generateSitemap();
