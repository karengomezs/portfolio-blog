import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
  img: z.string(),
  title: z.string(),
  description: z.string(),
});

export const collections = {
  blog: blogCollection,
};
