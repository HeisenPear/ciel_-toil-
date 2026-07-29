/**
 * Valide `vercel.json` avec le validateur de Vercel lui-même.
 *
 * Les `source` des headers/redirects utilisent la syntaxe path-to-regexp,
 * pas de la regex brute : une alternance comme `/(a.txt|b.txt)` est rejetée,
 * mais seulement au moment du déploiement. Ce script fait remonter l'erreur
 * au build local, avant le push.
 *
 * Lancé par `npm run check`. Se met en retrait sans échouer si
 * @vercel/routing-utils n'est pas installé (installation en production).
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

let getTransformedRoutes;
try {
  ({ getTransformedRoutes } = await import('@vercel/routing-utils'));
} catch {
  console.log('@vercel/routing-utils absent — validation de vercel.json ignorée.');
  process.exit(0);
}

const config = JSON.parse(readFileSync(path.join(root, 'vercel.json'), 'utf8'));

const { error } = getTransformedRoutes({
  cleanUrls: config.cleanUrls,
  trailingSlash: config.trailingSlash,
  headers: config.headers,
  redirects: config.redirects,
  rewrites: config.rewrites,
});

if (error) {
  console.error('vercel.json invalide :');
  for (const message of error.errors ?? [error.message]) console.error(`  - ${message}`);
  if (error.link) console.error(`  → ${error.link}`);
  process.exit(1);
}

console.log('vercel.json valide.');
