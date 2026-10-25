import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Los archivos que empiezan por "_" (plantillas) no se publican.
const published = '**/[^_]*.md';

// Bio de la portada: about/es.md y about/en.md
const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: published }),
  schema: z.object({
    subtitle: z.string(),
    description: z.string(),
  }),
});

// Proyectos: projects/es/<nombre>.md y projects/en/<nombre>.md
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: published }),
  schema: z.object({
    title: z.string(),
    kind: z.string(),
    year: z.string(),
    status: z.string().optional(),
    order: z.number().default(0),
    tech: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

// Blog: blog/es/<slug>.md y blog/en/<slug>.md
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: published }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { about, projects, blog };
