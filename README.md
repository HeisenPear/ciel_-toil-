# Benne Express 37 — site vitrine

Site vitrine d'un loueur de bennes basé à **Tours**, intervenant sur l'ensemble du
département d'**Indre-et-Loire (37)**. Cible : professionnels du bâtiment (chantiers,
rénovation) et particuliers (déménagement, vide-maison, débarras).

Le site est conçu pour deux canaux d'acquisition :

- **SEO local** — pages par intention (chantier / déménagement), par produit (6 formats de
  bennes) et par commune (46 pages locales), données structurées `LocalBusiness`, maillage
  interne dense.
- **GEO** (*Generative Engine Optimization*) — être cité par ChatGPT, Claude, Perplexity,
  Gemini et les AI Overviews : blocs de réponse directe, contenu factuel et chiffré,
  `robots.txt` autorisant explicitement les crawlers d'IA, et un fichier `/llms.txt`
  généré à partir des mêmes données que le site.

---

## Stack

| Choix | Pourquoi |
| --- | --- |
| **Astro 7** en `output: 'static'` | Zéro JavaScript côté client par défaut → LCP et INP excellents, ce qui compte directement en SEO. Le seul script embarqué est le menu mobile (< 1 Ko). |
| **Tailwind CSS 4** (plugin Vite) | Thème centralisé dans `@theme`, purge automatique, CSS critique inliné par Astro. |
| **Polices auto-hébergées** (`@fontsource-variable`) | Aucune requête vers Google Fonts : meilleur LCP, pas de transfert de données vers un tiers (RGPD). |
| **Collections de contenu** (`glob` + Zod) | Les articles de blog sont validés au build : un frontmatter incomplet casse le build plutôt que la page. |
| **`@astrojs/sitemap`** | Sitemap généré avec priorités et fréquences par type de page. |
| **Aucun framework UI** | Rien à hydrater. React/Vue seraient du poids mort sur un site vitrine. |

Prérequis : Node 20+.

```bash
npm install
npm run dev        # serveur de développement
npm run build      # génération statique dans dist/
npm run preview    # prévisualisation du build
npm run check      # typage Astro + validation de vercel.json
npm run assets     # régénère favicon PNG et image Open Graph depuis les SVG
```

---

## Personnalisation

### 1. Les informations du client — `src/config/site.ts`

**C'est le seul fichier à modifier pour mettre le site en production.** Toutes les
valeurs marquées `// TODO` sont des placeholders. Les changer ici les propage partout :
pages, JSON-LD, `robots.txt`, `llms.txt`, sitemap, mentions légales.

| Bloc | Contenu |
| --- | --- |
| `SITE` | Nom commercial, raison sociale, URL canonique, description, année de création |
| `CONTACT` | Téléphones, e-mail, adresse, coordonnées GPS du dépôt, horaires, SIRET, TVA, récépissé de transport de déchets |
| `FORM` | Endpoint du formulaire de devis (voir plus bas) |
| `SOCIAL` | Fiche Google Business, Facebook, LinkedIn — alimentent le `sameAs` du JSON-LD |
| `USP` | Les 4 arguments de réassurance affichés sur l'accueil |
| `NAV` | La navigation principale |

### 2. Le formulaire de devis

Le site étant statique, l'envoi est délégué à un service tiers. Renseignez
`FORM.endpoint` avec l'URL fournie par Formspree, Web3Forms, Basin ou l'API du client.

**Tant que `endpoint` est vide, le formulaire bascule automatiquement sur un `mailto:`** —
il reste donc fonctionnel dès la mise en ligne, mais l'expérience est dégradée. À brancher
avant toute campagne d'acquisition.

Le formulaire embarque déjà un pot de miel anti-spam, une case de consentement RGPD
obligatoire et une redirection vers `/merci`.

### 3. Les données métier — `src/data/`

| Fichier | Rôle |
| --- | --- |
| `bennes.ts` | Les 6 formats : dimensions, charge utile, équivalence concrète, accès requis, prix. **Les prix sont indicatifs et doivent être validés.** |
| `communes.ts` | Les 46 communes générant une page locale. Chaque entrée porte un `angle` — un paragraphe spécifique à la commune. Voir l'avertissement ci-dessous. |
| `dechets.ts` | Les 8 flux collectés + les 6 catégories interdites |
| `faq.ts` | 16 questions/réponses, filtrables par thème pour éviter de dupliquer le même bloc `FAQPage` partout |

Ajouter une commune = ajouter un objet dans `COMMUNES` : la page, le sitemap, le
maillage interne et le JSON-LD suivent automatiquement.

> **⚠️ Sur les pages par commune.** Elles ne valent que si chacune apporte une
> information que les autres n'ont pas. Le champ `angle` est là pour ça : contraintes
> d'accès locales, type de chantiers dominants, spécificité du bâti. Dupliquer un texte
> générique en changeant seulement le nom de la ville produit du contenu de faible valeur
> et se retourne contre le référencement. **Faites relire ces textes par le client** :
> il connaît son terrain mieux que quiconque, et ses corrections sont exactement ce qui
> rend ces pages défendables.

---

## Ce qui est en place côté SEO

- Un `<h1>` unique par page, hiérarchie `h2`/`h3` cohérente
- `title` sous 65 caractères (le suffixe de marque n'est ajouté que s'il tient),
  `description` entre 130 et 165 caractères
- Canonical, `hreflang` fr-FR + x-default, Open Graph et Twitter Card sur chaque page
- **JSON-LD en `@graph`** avec des `@id` stables : `Organization`, `WebSite`,
  `LocalBusiness` + `WasteManagementService` (adresse, horaires, `geo`, `areaServed`,
  rayon d'intervention), puis selon la page `Service` avec `OfferCatalog`, `Product`,
  `FAQPage`, `HowTo`, `BreadcrumbList`, `BlogPosting`, `ItemList`, `Place`
- Fil d'Ariane visible **et** balisé
- Maillage interne : communes voisines, bennes proches, articles liés, plan du site
- Sitemap avec priorités différenciées ; pages légales et `/merci` exclues et en `noindex`
- Images : SVG inline (aucune requête), image Open Graph 1200×630 générée au build

## Ce qui est en place côté GEO

- **Blocs « En bref »** (`AnswerBox`) en tête de page : un paragraphe autoportant,
  factuel et chiffré, directement extractible par un moteur génératif
- Contenu structuré en questions/réponses, tableaux comparatifs et listes — les formats
  que les LLM citent le plus volontiers
- Chiffres explicites plutôt que superlatifs : volumes, tonnages, délais, prix, distances
- **`/llms.txt`** — fiche d'identité lisible par une IA (convention *llmstxt.org*),
  générée depuis `src/data/` : elle ne peut donc pas diverger du contenu publié
- **`robots.txt`** autorisant explicitement `GPTBot`, `ClaudeBot`, `PerplexityBot`,
  `Google-Extended`, `OAI-SearchBot`, `Applebot-Extended` et consorts.
  Les retirer de cette liste revient à sortir des réponses des IA.

---

## Structure

```
src/
├── config/site.ts          ← LE fichier à personnaliser
├── data/                   ← bennes, communes, déchets, FAQ
├── lib/schema.ts           ← générateurs JSON-LD
├── layouts/BaseLayout.astro← <head>, JSON-LD, header, footer
├── components/             ← Hero, Section, BenneCard, Faq, DevisForm, AnswerBox…
├── content/blog/           ← articles Markdown
└── pages/
    ├── index.astro
    ├── nos-bennes/[slug].astro          → 6 pages produit
    ├── location-benne/[commune].astro   → 46 pages locales
    ├── location-benne-chantier.astro
    ├── location-benne-demenagement.astro
    ├── tarifs.astro · dechets-acceptes.astro · zones-desservies.astro
    ├── faq.astro · contact.astro · merci.astro · plan-du-site.astro · 404.astro
    ├── blog/
    ├── robots.txt.ts       ← généré au build
    └── llms.txt.ts         ← généré au build
```

73 pages générées.

---

## Déploiement

Optimisé pour **Vercel** (`vercel.json` fourni : `cleanUrls`, en-têtes de sécurité,
CSP stricte, cache immuable sur les assets, redirections). Fonctionne à l'identique sur
Netlify, Cloudflare Pages ou tout hébergement statique — le build produit `dist/`.

Après le premier déploiement :

1. Remplacer `SITE.url` par le domaine réel (avant la mise en ligne, idéalement)
2. Déclarer le site dans la Google Search Console et soumettre `/sitemap-index.xml`
3. Créer et vérifier la fiche Google Business Profile, puis reporter son URL dans
   `SOCIAL.googleBusiness` — c'est le premier levier de référencement local
4. Vérifier les données structurées avec le test des résultats enrichis de Google
5. Brancher `FORM.endpoint`

---

## Checklist avant mise en ligne

- [ ] `src/config/site.ts` : tous les `TODO` remplacés (nom, URL, téléphones, e-mail,
      adresse, coordonnées GPS, SIRET, TVA, récépissé de transport de déchets)
- [ ] Tarifs de `src/data/bennes.ts` validés par le client
- [ ] Textes des pages communes relus par le client
- [ ] `FORM.endpoint` configuré et testé
- [ ] Mentions légales complétées (éditeur, directeur de publication, hébergeur, médiateur)
- [ ] Photos réelles du parc de bennes fournies par le client — elles remplaceront
      avantageusement les illustrations SVG sur les pages produit
- [ ] Fiche Google Business Profile créée et reliée
