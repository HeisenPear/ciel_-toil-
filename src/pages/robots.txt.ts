import type { APIRoute } from 'astro';
import { SITE } from '../config/site';

/**
 * robots.txt généré au build pour rester synchronisé avec `SITE.url`.
 *
 * Les robots des moteurs génératifs (GPTBot, ClaudeBot, PerplexityBot,
 * Google-Extended…) sont explicitement autorisés : c'est la condition
 * de base pour que le site puisse être cité dans leurs réponses.
 * Les retirer de cette liste revient à sortir des résultats des IA.
 */
const GENERATIVE_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'meta-externalagent',
  'Amazonbot',
  'YouBot',
  'cohere-ai',
  'Diffbot',
];

export const GET: APIRoute = () => {
  const body = [
    '# robots.txt',
    `# ${SITE.name} — ${SITE.tagline}`,
    '',
    'User-agent: *',
    'Allow: /',
    'Disallow: /merci',
    '',
    '# Moteurs de recherche génératifs — accès explicitement autorisé',
    ...GENERATIVE_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    '# Aspirateurs de contenu sans valeur de référencement',
    'User-agent: SemrushBot',
    'Disallow: /',
    '',
    'User-agent: AhrefsBot',
    'Disallow: /',
    '',
    'User-agent: MJ12bot',
    'Disallow: /',
    '',
    `Sitemap: ${SITE.url}/sitemap-index.xml`,
    `Host: ${SITE.url.replace(/^https?:\/\//, '')}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
