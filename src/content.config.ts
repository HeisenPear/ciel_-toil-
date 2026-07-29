import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    /** Méta-description : 120 à 160 caractères. */
    description: z.string().min(80).max(180),
    /** Réponse courte extraite en tête d'article (bloc GEO). */
    answer: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Guide', 'Tarifs', 'Réglementation', 'Chantier', 'Particuliers', 'Tri']),
    /** Requêtes visées, utilisées pour le maillage et le suivi de position. */
    keywords: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
