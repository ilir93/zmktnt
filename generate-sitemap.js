import fs from 'fs';
import path from 'path';

const baseUrl = 'https://poezidashurie.com';
const poems = JSON.parse(fs.readFileSync('./src/data/poems.ts', 'utf-8')
  .replace('export const poems:', '')
  .replace('export interface Poem {', '')
  .replace('title: string;', '')
  .replace('author: string;', '')
  .replace('content: string;', '')
  .replace('}', '')
  .trim());

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${poems.map(poem => `
  <url>
    <loc>${baseUrl}/poezi/${poem.title.toLowerCase().replace(/ /g, '-')}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync(path.join('dist', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');