// @ts-check
import { defineConfig } from 'astro/config';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/tech-blog',
  integrations: [tailwind()],
  vite: {
    plugins: []
  }
});
