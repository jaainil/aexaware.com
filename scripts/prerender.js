import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const BLOG_DIR = path.resolve(__dirname, '../src/content/blog');

function getBlogRoutes() {
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
      
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        const slugMatch = frontmatter.match(/slug:\s*(.+)/);
        if (slugMatch) {
          const slug = slugMatch[1].trim().replace(/^["']|["']$/g, '');
          return `/blog/${slug}`;
        }
      }
      
      return `/blog/${path.basename(file, '.mdx')}`;
    });
}

async function prerender() {
  console.log('🚀 Starting prerendering...');

  // Start the preview server
  const server = spawn('npm', ['run', 'preview', '--', '--port', '4173'], { 
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..')
  });

  // Give the server some time to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.error('PAGE ERROR:', err));

    // Define static routes
    const routes = [
      '/',
      '/about',
      '/services',
      '/contact',
      '/blog',
      ...getBlogRoutes()
    ];

    console.log(`Found ${routes.length} routes to prerender.`);

    for (const route of routes) {
      const url = `http://localhost:4173${route}`;
      console.log(`Rendering ${route}...`);
      
      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // If it's a blog post, wait for the article meta tag to ensure SEO is loaded
        if (route.startsWith('/blog/') && route !== '/blog') {
          try {
            await page.waitForSelector('meta[property="og:type"][content="article"]', { timeout: 10000 });
          } catch (e) {
            console.warn(`⚠️ Timeout waiting for SEO tags on ${route}. Page might not have loaded correctly.`);
          }
        } else {
           // Small delay for other pages
           await new Promise(r => setTimeout(r, 500));
        }

        const html = await page.content();
        
        // Determine file path
        // If route is /blog/foo, we want dist/blog/foo/index.html
        const relativePath = route === '/' ? 'index.html' : `${route}/index.html`;
        const filePath = path.join(DIST_DIR, relativePath);
        const dir = path.dirname(filePath);

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(filePath, html);
      } catch (e) {
        console.error(`Failed to render ${route}:`, e);
      }
    }

  } catch (error) {
    console.error('Prerendering failed:', error);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
    server.kill();
    console.log('✨ Prerendering complete!');
    process.exit(0);
  }
}

prerender();
