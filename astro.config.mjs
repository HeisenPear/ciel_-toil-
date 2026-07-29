// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { SITE } from './src/config/site.ts';

export default defineConfig({
  site: SITE.url,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR' },
      },
      // Les pages légales n'ont pas vocation à être poussées dans l'index.
      filter: (page) =>
        !page.includes('/mentions-legales') &&
        !page.includes('/politique-de-confidentialite') &&
        !page.includes('/merci'),
      changefreq: 'monthly',
      serialize(item) {
        if (item.url === `${SITE.url}/`) {
          item.priority = 1.0;
          item.changefreq = /** @type {any} */ ('weekly');
        } else if (item.url.includes('/location-benne-')) {
          item.priority = 0.9;
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.6;
        } else {
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
  // Les polices sont auto-hébergées via les paquets @fontsource-variable
  // (importés dans src/styles/global.css) : aucune requête réseau au build
  // ni vers un CDN tiers à l'exécution — meilleur LCP et conformité RGPD.
  vite: {
    plugins: [tailwindcss()],
  },
});
