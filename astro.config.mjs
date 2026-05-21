import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://agediscriminationcalc.com',
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
