import fs from 'fs';
import path from 'path';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, "..", "src/content/blog");
const OUTPUT_DIR = path.join(__dirname, "..", "dist", "og-images");
const TEMPLATE_PATH = path.join(__dirname, "..", "public", "OG-BLOG.svg");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function fetchFont() {
  // Fetch Inter Bold from unpkg
  const fontUrl = 'https://unpkg.com/@fontsource/inter@5.0.18/files/inter-latin-700-normal.woff';
  const response = await fetch(fontUrl);
  if (!response.ok) {
      throw new Error(`Failed to fetch font: ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  console.log(`Downloaded font size: ${arrayBuffer.byteLength} bytes`);
  return Buffer.from(arrayBuffer);
}

function getFiles(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });
  return Array.prototype.concat(...files);
}

async function generateImages() {
  console.log("🎨 Starting OG Image Generation...");
  
  let fontData;
  try {
    console.log("Downloading font...");
    fontData = await fetchFont();
  } catch (e) {
    console.error("Failed to download font:", e);
    process.exit(1);
  }

  let templateSrc = "";
  if (fs.existsSync(TEMPLATE_PATH)) {
    const templateSvg = fs.readFileSync(TEMPLATE_PATH);
    const templateB64 = Buffer.from(templateSvg).toString('base64');
    templateSrc = `data:image/svg+xml;base64,${templateB64}`;
  } else {
    console.warn("⚠️ Template SVG not found at public/OG-BLOG.svg. Using fallback gradient.");
  }

  const files = getFiles(POSTS_DIR);
  
  for (const filePath of files) {
    if (filePath.endsWith(".mdx") || filePath.endsWith(".md")) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data: meta } = matter(fileContent);

      if (!meta.slug) {
          meta.slug = path.basename(filePath, path.extname(filePath));
      }
      // Clean slug
      const slug = meta.slug.trim().replace(/^["']|["']$/g, '');
      const title = meta.title || "Blog Post";

      console.log(`Generating image for: ${title}`);

      const markup = html`
        <div style="display: flex; width: 1200px; height: 630px; background-color: #000; color: white; align-items: center; justify-content: center; position: relative;">
          ${templateSrc ? html`<img src="${templateSrc}" style="position: absolute; top: 0; left: 0; width: 1200px; height: 630px; object-fit: cover;" />` : html`<div style="position: absolute; top: 0; left: 0; width: 1200px; height: 630px; background: linear-gradient(to bottom right, #1a1a1a, #000);"></div>`}
          
          <div style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 1000px; text-align: center;">
             <div style="font-size: 70px; font-weight: 700; line-height: 1.2; text-shadow: 0 4px 20px rgba(0,0,0,0.8); margin-bottom: 20px;">
               ${title}
             </div>
             <div style="font-size: 30px; color: #ccc; font-weight: 400; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
               aexaware.com
             </div>
          </div>
        </div>
      `;

      const svg = await satori(markup, {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            weight: 700,
            style: 'normal',
          },
        ],
      });

      const resvg = new Resvg(svg, {
        fitTo: {
          mode: 'width',
          value: 1200,
        },
      });
      
      const pngData = resvg.render();
      const pngBuffer = pngData.asPng();

      const outputPath = path.join(OUTPUT_DIR, `${slug}.png`);
      fs.writeFileSync(outputPath, pngBuffer);
    }
  }
  
  console.log("✅ All OG images generated!");
}

generateImages();
