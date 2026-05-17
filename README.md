# Dorian Auto Prestige — Site vitrine

Site statique Astro pour un artisan automobile spécialisé dans :
- **Ciel étoilé fibre optique** (plafond, contreportes)
- **Intégration CarPlay / Android Auto**

---

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# → http://localhost:4321

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## Personnalisation obligatoire avant mise en ligne

### 1. Numéro WhatsApp
Chercher et remplacer `33600000000` dans tous les fichiers :
- `src/components/FloatingWhatsApp.tsx`
- `src/components/Contact.astro`

### 2. Formulaire de contact
**Option A — Formspree (recommandé)**
1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un formulaire, récupérer l'ID (ex: `xpwzlqkr`)
3. Dans `src/components/Contact.astro`, remplacer `VOTRE_FORM_ID` :
   ```html
   action="https://formspree.io/f/xpwzlqkr"
   ```

**Option B — Netlify Forms**
Dans `src/components/Contact.astro`, commenter le form Formspree et décommenter le bloc Netlify (voir les commentaires dans le fichier).

### 3. URL du site
Dans `astro.config.mjs`, remplacer :
```js
site: 'https://dorian-auto-prestige.fr',
```

### 4. Nom de l'entreprise
Chercher `Dorian Auto Prestige` dans :
- `src/layouts/BaseLayout.astro`
- `src/components/Nav.astro`
- `src/pages/index.astro`

### 5. Schema.org LocalBusiness
Dans `src/layouts/BaseLayout.astro`, compléter l'adresse et l'email dans `schemaData`.

### 6. Open Graph image
Ajouter une image `public/og-image.jpg` (1200×630 px) pour le partage réseaux sociaux.

---

## Ajout de photos

Photos sources dans `photos_dorian/`. Les photos sélectionnées sont copiées dans :
- `src/assets/images/` — hero uniquement (optimisation Astro)
- `public/images/` — toutes les autres

Pour ajouter une nouvelle photo CarPlay :
1. Copier le fichier dans `public/images/`
2. L'ajouter au tableau `images` dans `src/components/Galerie.tsx`

---

## Déploiement Vercel

Le fichier `vercel.json` est déjà configuré. Il suffit de :
1. Connecter le repo à Vercel
2. Vercel détecte automatiquement Astro
3. `npm run build` → dossier `dist/`

---

## Stack

| Outil | Usage |
|-------|-------|
| [Astro 4](https://astro.build) | Framework SSG |
| [React 18](https://react.dev) | Islands interactives |
| [Tailwind CSS 3](https://tailwindcss.com) | Styles utilitaires |
| [Framer Motion](https://www.framer.com/motion/) | Animations React |
| [yet-another-react-lightbox](https://yet-another-react-lightbox.com) | Galerie lightbox |
| [Vercel](https://vercel.com) | Hébergement |

---

## Structure

```
src/
  components/
    Nav.astro              Navigation principale
    Hero.astro             Section hero plein écran
    Prestations.astro      Cartes des prestations
    Galerie.tsx            Galerie interactive (React island)
    Avantages.astro        Arguments de vente
    Temoignages.astro      Avis clients
    Contact.astro          Formulaire de devis
    FloatingWhatsApp.tsx   Bouton WhatsApp flottant (React island)
    SEO.astro              Balises meta réutilisables
  layouts/
    BaseLayout.astro       Shell HTML global
  pages/
    index.astro            Page d'accueil
  styles/
    global.css             Variables CSS, animations, reset
public/
  images/                  Photos optimisées
  favicon.svg
  robots.txt
```
