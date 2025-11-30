const fs = require('fs');
const path = require('path');
const glob = require('glob');

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');
const PUBLIC_IMG_DIR = path.join(process.cwd(), 'public/blog-images');

if (!fs.existsSync(PUBLIC_IMG_DIR)) {
    fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

// Get all directories in content/blog
const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
const dirs = entries.filter(entry => entry.isDirectory()).map(entry => entry.name);

dirs.forEach(slug => {
    const postDir = path.join(CONTENT_DIR, slug);
    const targetImgDir = path.join(PUBLIC_IMG_DIR, slug);

    // Find images
    const images = glob.sync('*.{png,jpg,jpeg,webp,gif}', { cwd: postDir });

    if (images.length > 0) {
        if (!fs.existsSync(targetImgDir)) {
            fs.mkdirSync(targetImgDir, { recursive: true });
        }

        images.forEach(image => {
            const srcPath = path.join(postDir, image);
            const destPath = path.join(targetImgDir, image);

            // Move file
            fs.renameSync(srcPath, destPath);
            console.log(`Moved ${image} to ${destPath}`);
        });

        // Update MDX file
        const mdxFile = glob.sync('*.mdx', { cwd: postDir })[0];
        if (mdxFile) {
            const mdxPath = path.join(postDir, mdxFile);
            let content = fs.readFileSync(mdxPath, 'utf-8');

            // Update frontmatter image
            // Regex to match image: "path/to/image.png" or "./image.png"
            // We assume frontmatter image is just the filename or relative path
            // We need to replace it with /blog-images/slug/image.png

            // Update frontmatter
            content = content.replace(/^image:\s*["']?(\.?\/)?([^"'\n]+)["']?/m, (match, prefix, filename) => {
                // Check if this filename was one of the moved images
                if (images.includes(filename)) {
                    return `image: "/blog-images/${slug}/${filename}"`;
                }
                return match;
            });

            // Update markdown images ![alt](./image.png) or ![alt](image.png)
            // This regex is a bit simplistic but should work for standard markdown images
            content = content.replace(/!\[(.*?)\]\((\.?\/)?([^)]+)\)/g, (match, alt, prefix, filename) => {
                if (images.includes(filename)) {
                    return `![${alt}](/blog-images/${slug}/${filename})`;
                }
                return match;
            });

            // Also update standard <img> tags if any
            content = content.replace(/<img[^>]+src=["'](\.?\/)?([^"']+)["'][^>]*>/g, (match, prefix, filename) => {
                if (images.includes(filename)) {
                    return match.replace(filename, `/blog-images/${slug}/${filename}`);
                }
                return match;
            });

            fs.writeFileSync(mdxPath, content);
            console.log(`Updated ${mdxFile}`);
        }
    }
});
