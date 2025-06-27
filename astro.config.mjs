// @ts-check
import { defineConfig } from 'astro/config';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

// https://astro.build/config
export default defineConfig({
  collections: {
    blog,
  },
  vite: {
    plugins: []
  }
});
