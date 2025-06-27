// @ts-check
import { defineConfig } from 'astro/config';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  base: '/tech-blog',
  integrations: [mdx()],
  vite: {
    plugins: []
  }
});
