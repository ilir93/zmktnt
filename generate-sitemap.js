import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.poezidashurieperty.com';
const currentDate = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Write sitemap file
fs.writeFileSync(path.join('dist', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');