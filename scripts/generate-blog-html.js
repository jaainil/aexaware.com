import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://aexaware.com';
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const DIST_DIR = path.join(__dirname, '../dist');

/**
 * Extract frontmatter from MDX file
 */
function extractFrontmatter(mdxContent) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = mdxContent.match(frontmatterRegex);
  
  if (!match) return null;
  
  const frontmatterText = match[1];
  const frontmatter = {};
  
  // Parse YAML-like frontmatter
  const lines = frontmatterText.split('\n');
  let currentKey = null;
  
  lines.forEach(line => {
    // Handle arrays
    if (line.trim().startsWith('-') && currentKey) {
      if (!Array.isArray(frontmatter[currentKey])) {
        frontmatter[currentKey] = [];
      }
      frontmatter[currentKey].push(line.trim().substring(1).trim().replace(/["\[\]]/g, ''));
    } else {
      // Handle key: value pairs
      const colonIndex = line.indexOf(':');
      if (colonIndex > -1) {
        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();
        
        // Remove quotes and brackets
        value = value.replace(/^["']|["']$/g, '');
        value = value.replace(/^\[|\]$/g, '');
        
        frontmatter[key] = value;
        currentKey = key;
      }
    }
  });
  
  return frontmatter;
}

/**
 * Generate HTML with proper OG meta tags
 */
function generateHTML(frontmatter, slug) {
  const title = frontmatter.title || 'Blog Post';
  const description = frontmatter.description || '';
  const author = frontmatter.author || 'Aexaware Team';
  const date = frontmatter.date || '';
  const url = `${SITE_URL}/blog/${slug}`;
  
  // Handle image path
  let imageUrl = `${SITE_URL}/og-image.png`;
  if (frontmatter.image && frontmatter.image.startsWith('./')) {
    const imageName = frontmatter.image.replace('./', '');
    imageUrl = `${SITE_URL}/blog-images/${slug}/${imageName}`;
  } else if (frontmatter.image && frontmatter.image.startsWith('http')) {
    imageUrl = frontmatter.image;
  }

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- HTML Meta Tags -->
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="author" content="${author}">
  
  <!-- Open Graph Meta Tags -->
  <meta property="og:url" content="${url}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:width" content="1920">
  <meta property="og:image:height" content="1080">
  <meta property="og:site_name" content="Aexaware Infotech">
  
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="aexaware.com">
  <meta property="twitter:url" content="${url}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${imageUrl}">
  
  <!-- Article specific meta tags -->
  <meta property="article:published_time" content="${date}T00:00:00Z">
  <meta property="article:author" content="${author}">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="${url}">
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.png" sizes="any" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  
  <!-- Preconnect to fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
  </noscript>
  
  <!-- Redirect to SPA -->
  <meta http-equiv="refresh" content="0;url=/#/blog/${slug}">
  <script>
    // Immediate redirect for better UX
    window.location.href = '/#/blog/${slug}';
  </script>
</head>
<body>
  <!-- Fallback content for crawlers -->
  <article>
    <h1>${title}</h1>
    <p>${description}</p>
    <p>By ${author} on ${date}</p>
    ${frontmatter.image ? `<img src="${imageUrl}" alt="${title}" />` : ''}
  </article>
  
  <!-- This page will redirect to the full blog post -->
  <p>If you are not redirected automatically, <a href="/#/blog/${slug}">click here</a>.</p>
</body>
</html>`;
}

/**
 * Copy blog images to dist/blog-images directory
 */
function copyBlogImages() {
  const blogImagesDir = path.join(DIST_DIR, 'blog-images');
  
  const blogFolders = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  blogFolders.forEach(slug => {
    const sourceDir = path.join(BLOG_DIR, slug);
    const destDir = path.join(blogImagesDir, slug);
    
    // Create destination directory
    fs.mkdirSync(destDir, { recursive: true });
    
    // Copy all image files
    const files = fs.readdirSync(sourceDir);
    files.forEach(file => {
      if (/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(file)) {
        const sourcePath = path.join(sourceDir, file);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(sourcePath, destPath);
      }
    });
  });
  
  console.log('📦 Blog images copied to dist/blog-images/\n');
}

/**
 * Main function to generate all blog HTML files
 */
function generateBlogHTML() {
  console.log('🚀 Generating static HTML files for blog posts...\n');
  
  if (!fs.existsSync(BLOG_DIR)) {
    console.error('❌ Blog directory not found:', BLOG_DIR);
    process.exit(1);
  }
  
  // First, copy all blog images
  copyBlogImages();
  
  const blogFolders = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  let successCount = 0;
  let errorCount = 0;
  
  blogFolders.forEach(slug => {
    try {
      const mdxPath = path.join(BLOG_DIR, slug, `${slug}.mdx`);
      
      if (!fs.existsSync(mdxPath)) {
        console.warn(`⚠️  MDX file not found for slug: ${slug}`);
        errorCount++;
        return;
      }
      
      const mdxContent = fs.readFileSync(mdxPath, 'utf-8');
      const frontmatter = extractFrontmatter(mdxContent);
      
      if (!frontmatter) {
        console.warn(`⚠️  No frontmatter found for: ${slug}`);
        errorCount++;
        return;
      }
      
      const html = generateHTML(frontmatter, slug);
      
      // Create output directory
      const outputDir = path.join(DIST_DIR, 'blog', slug);
      fs.mkdirSync(outputDir, { recursive: true });
      
      // Write HTML file
      const outputPath = path.join(outputDir, 'index.html');
      fs.writeFileSync(outputPath, html, 'utf-8');
      
      console.log(`✅ Generated: blog/${slug}/index.html`);
      console.log(`   Title: ${frontmatter.title}`);
      successCount++;
      
    } catch (error) {
      console.error(`❌ Error processing ${slug}:`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Successfully generated: ${successCount} files`);
  if (errorCount > 0) {
    console.log(`   ❌ Errors: ${errorCount}`);
  }
  console.log(`\n✨ Blog HTML generation complete!`);
}

// Run the script
generateBlogHTML();
