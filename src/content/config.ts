import { defineCollection, z } from "astro:content";

export const postCollections = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    author: z.string(),
  }),
});

export const collections = {
  posts: postCollections,
};
