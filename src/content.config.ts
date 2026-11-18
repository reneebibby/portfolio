import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Each artwork is one Markdown file in src/content/artworks/.
// The frontmatter of that file must match the schema below; the Markdown
// body (optional) becomes the piece's description on its detail page.
const artworks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artworks" }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
    }),
});

export const collections = { artworks };
