/**
 * Génère les images bitmap dérivées des SVG sources :
 *  - public/apple-touch-icon.png (180 × 180)
 *  - public/og/og-default.jpg    (1200 × 630)
 *
 * À relancer après toute modification du logo :  npm run assets
 */
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const publicDir = path.join(root, 'public');

await mkdir(path.join(publicDir, 'og'), { recursive: true });

const logo = await readFile(path.join(publicDir, 'logo.svg'));

await sharp(logo, { density: 384 })
  .resize(180, 180)
  .png()
  .toFile(path.join(publicDir, 'apple-touch-icon.png'));

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1B2333"/>
      <stop offset="100%" stop-color="#0F1622"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g opacity="0.08" stroke="#FFFFFF" stroke-width="1">
    ${Array.from({ length: 22 }, (_, i) => `<path d="M${i * 56} 0 V630"/>`).join('')}
    ${Array.from({ length: 12 }, (_, i) => `<path d="M0 ${i * 56} H1200"/>`).join('')}
  </g>

  <g transform="translate(800 118) scale(1.15)" stroke="#7A5209" stroke-width="8" stroke-linejoin="round">
    <path d="M20 240 L54 108 H228 L262 240 Z" fill="#F2A413"/>
    <path d="M64 146 H218" stroke-opacity="0.35" stroke-width="8"/>
    <path d="M50 190 H232" stroke-opacity="0.35" stroke-width="8"/>
  </g>

  <text x="80" y="230" font-family="Archivo, Arial, sans-serif" font-size="40" font-weight="700" fill="#F2A413" letter-spacing="6">TOURS · INDRE-ET-LOIRE 37</text>
  <text x="80" y="330" font-family="Archivo, Arial, sans-serif" font-size="76" font-weight="800" fill="#FFFFFF">Location de bennes</text>
  <text x="80" y="415" font-family="Archivo, Arial, sans-serif" font-size="76" font-weight="800" fill="#FFFFFF">de 1 à 30 m³</text>
  <text x="80" y="480" font-family="Inter, Arial, sans-serif" font-size="32" fill="#A6B4C9">Chantier · Rénovation · Déménagement · Particuliers</text>
  <rect x="80" y="520" width="360" height="6" fill="#F2A413"/>
  <text x="80" y="576" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="600" fill="#E9EDF3">Livraison sous 24 à 48 h — devis gratuit</text>
</svg>`;

await writeFile(path.join(publicDir, 'og', 'og-default.svg'), ogSvg);

await sharp(Buffer.from(ogSvg))
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(path.join(publicDir, 'og', 'og-default.jpg'));

console.log('Assets générés : apple-touch-icon.png, og/og-default.jpg');
