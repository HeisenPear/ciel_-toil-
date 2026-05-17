import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dorian-auto-prestige.fr',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
  image: {
    remotePatterns: [],
  },
});
