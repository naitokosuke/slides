import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "articles/*.md",
      schema: z.object({
        id: z.string(),
        title: z.string(),
        slug: z.string(),
        excerpt: z.string(),
        author: z.string(),
        publishedAt: z.string(),
        tags: z.array(z.string()),
        imageUrl: z.string().optional(),
      }),
    }),
  },
});
