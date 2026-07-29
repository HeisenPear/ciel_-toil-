/**
 * Source de vérité unique du site.
 *
 * ⚠️ À PERSONNALISER AVANT MISE EN LIGNE — les valeurs marquées `TODO`
 * sont des placeholders. Les modifier ici les met à jour partout
 * (pages, données structurées JSON-LD, sitemap, robots.txt, llms.txt).
 */

export const SITE = {
  /** Nom commercial affiché partout. */
  name: 'Benne Express 37',
  /** Raison sociale utilisée dans les mentions légales et le JSON-LD. */
  legalName: 'Benne Express 37 SARL', // TODO
  /** URL canonique de production, sans slash final. */
  url: 'https://www.benne-express-37.fr', // TODO
  /** Baseline courte (≤ 70 caractères), reprise dans les title de secours. */
  tagline: 'Location de bennes à Tours et en Indre-et-Loire',
  description:
    "Location de bennes de 1 à 30 m³ à Tours et dans tout l'Indre-et-Loire (37). " +
    'Livraison sous 24 à 48 h pour chantiers, rénovations, déménagements et particuliers. ' +
    'Devis gratuit, tarif tout compris, déchets triés et valorisés.',
  locale: 'fr_FR',
  lang: 'fr',
  themeColor: '#F2A413',
  /** Année de création, utilisée pour l'ancienneté et le JSON-LD. */
  foundingYear: 2015, // TODO
} as const;

export const CONTACT = {
  phone: '02 47 00 00 00', // TODO
  phoneE164: '+33247000000', // TODO
  mobile: '06 00 00 00 00', // TODO
  mobileE164: '+33600000000', // TODO
  email: 'contact@benne-express-37.fr', // TODO
  address: {
    street: '1 rue de la Benne', // TODO
    postalCode: '37000', // TODO
    city: 'Tours',
    region: 'Centre-Val de Loire',
    country: 'FR',
  },
  /** Coordonnées du dépôt — utilisées par le JSON-LD LocalBusiness. */
  geo: { lat: 47.394144, lng: 0.68484 }, // TODO (centre de Tours par défaut)
  /** Horaires au format `schema.org` openingHours. */
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '18:00' },
    { days: ['Saturday'], opens: '08:00', closes: '12:00' },
  ],
  openingHoursHuman: [
    { label: 'Lundi – Vendredi', value: '7 h 30 – 18 h 00' },
    { label: 'Samedi', value: '8 h 00 – 12 h 00' },
    { label: 'Dimanche', value: 'Fermé' },
  ],
  siret: '000 000 000 00000', // TODO
  tva: 'FR00000000000', // TODO
  /** Récépissé de déclaration de transport de déchets (obligatoire). */
  recepisseDechets: 'N° 2015-37-XXXX', // TODO
} as const;

/**
 * Traitement du formulaire de devis.
 *
 * Le site étant 100 % statique, l'envoi est délégué à un service tiers.
 * Renseigner ici l'URL fournie par Formspree, Web3Forms, Basin ou l'API
 * interne du client. Tant que la valeur est vide, le formulaire bascule
 * automatiquement sur un envoi par `mailto:`.
 */
export const FORM = {
  endpoint: '', // TODO — ex. https://formspree.io/f/xxxxxxx
  /** Page de confirmation affichée après envoi. */
  redirect: '/merci',
} as const;

export const SOCIAL = {
  googleBusiness: '', // TODO — URL de la fiche établissement Google
  facebook: '', // TODO
  linkedin: '', // TODO
} as const;

/** Promesses commerciales reprises dans les blocs de réassurance. */
export const USP = [
  {
    title: 'Livraison sous 24 à 48 h',
    text: "Commande avant 16 h, benne déposée dès le lendemain ouvré sur Tours et sa première couronne.",
    icon: 'truck',
  },
  {
    title: 'Tarif tout compris',
    text: 'Livraison, location, enlèvement et traitement des déchets inclus. Aucun frais caché.',
    icon: 'euro',
  },
  {
    title: 'Tout le département',
    text: "Tours, Amboise, Loches, Chinon, Bourgueil… nous couvrons les 272 communes d'Indre-et-Loire.",
    icon: 'map',
  },
  {
    title: 'Déchets valorisés',
    text: 'Tri en centre agréé et traçabilité complète : plus de 85 % de nos déchets sont recyclés.',
    icon: 'recycle',
  },
] as const;

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  {
    label: 'Nos bennes',
    href: '/nos-bennes',
  },
  {
    label: 'Chantier',
    href: '/location-benne-chantier',
  },
  {
    label: 'Déménagement',
    href: '/location-benne-demenagement',
  },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Déchets acceptés', href: '/dechets-acceptes' },
  { label: 'Zones desservies', href: '/zones-desservies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
