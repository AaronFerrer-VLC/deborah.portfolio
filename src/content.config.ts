import { defineCollection, z } from 'astro:content'

const dataCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  })
});

export const collections = {
  data: dataCollection,
  // ...other collections...
};
