/**
 * Source de vérité unique du site.
 *
 * Les valeurs sont celles de l'entreprise, à l'exception de celles encore
 * marquées `TODO` (voir `docs/fiche-google-business.md` § 1). Les modifier ici
 * les met à jour partout : pages, JSON-LD, sitemap, robots.txt, llms.txt,
 * mentions légales.
 *
 * Les champs vides (`''`) sont gérés partout : le site n'affiche jamais un
 * bloc vide ni un lien mort. Renseigner la valeur suffit à faire réapparaître
 * l'information.
 */

export const SITE = {
  /**
   * Nom affiché partout.
   *
   * Entreprise individuelle : le nom de l'exploitant est le nom de
   * l'entreprise. C'est aussi celui qui devra figurer sur la fiche Google —
   * y ajouter un mot-clé ou une ville est un motif de suspension.
   */
  name: 'Rudy Capello',
  /** Raison sociale utilisée dans les mentions légales et le JSON-LD. */
  legalName: 'Rudy Capello',
  /**
   * URL canonique de production, sans slash final.
   *
   * Pointe aujourd'hui sur le domaine Vercel du projet `location-benne`, seul
   * domaine réellement servi. À remplacer par le nom de domaine définitif le
   * jour où il est branché — un canonical vers un domaine qui ne résout pas
   * empêche toute indexation.
   */
  url: 'https://location-benne-xi.vercel.app', // TODO — domaine définitif
  /** Baseline courte (≤ 70 caractères), reprise dans les title de secours. */
  tagline: 'Location de bennes à Tours et en Indre-et-Loire',
  description:
    "Location de bennes de 1 à 30 m³ à Tours et dans tout l'Indre-et-Loire (37). " +
    'Livraison sous 24 à 48 h pour chantiers, rénovations, déménagements et particuliers. ' +
    'Devis gratuit, tarif tout compris, déchets triés et valorisés.',
  locale: 'fr_FR',
  lang: 'fr',
  themeColor: '#F2A413',
} as const;

export const CONTACT = {
  phone: '06 31 46 43 50',
  phoneE164: '+33631464350',
  /**
   * Vide tant qu'aucune adresse professionnelle n'existe : le domaine n'est pas
   * déposé, donc aucune boîte ne relèverait le courrier. Un `mailto:` mort
   * coûte plus qu'il ne rapporte — les blocs e-mail disparaissent d'eux-mêmes.
   */
  email: '', // TODO — dès qu'une adresse professionnelle existe
  /**
   * Siège de l'entreprise individuelle. Publié uniquement là où la loi
   * l'impose (mentions légales) et dans le JSON-LD, jamais mis en avant comme
   * une adresse d'accueil : les clients ne s'y déplacent pas, c'est la benne
   * qui vient. La fiche Google doit être créée en « zone de service », adresse
   * masquée.
   */
  address: {
    street: '90 rue de la Bichotière',
    postalCode: '37250',
    city: 'Veigné',
    region: 'Centre-Val de Loire',
    country: 'FR',
  },
  /** Coordonnées du siège — utilisées par le JSON-LD LocalBusiness. */
  geo: { lat: 47.2836, lng: 0.7161 }, // Veigné (bourg) — à affiner sur le point exact de la fiche Google
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
  siret: '510 816 473 00019',
  /**
   * Vide tant que le régime de TVA n'est pas connu. Une entreprise en
   * franchise en base n'a pas de numéro à publier, mais doit porter la mention
   * « TVA non applicable, article 293 B du CGI » — c'est ce qu'affichent les
   * mentions légales tant que ce champ reste vide. Si l'entreprise est
   * assujettie, le numéro est FR 72 510 816 473.
   */
  tva: '', // TODO — selon le régime de TVA
  /** Récépissé de déclaration de transport de déchets (obligatoire pour la collecte). */
  recepisseDechets: '', // TODO — numéro délivré par la préfecture d'Indre-et-Loire
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

/**
 * Profils externes.
 *
 * `googleBusiness` et `googleMaps` alimentent le JSON-LD (`sameAs` et `hasMap`) :
 * ce sont les deux liens qui relient le site à la fiche Google Business Profile,
 * condition d'un référencement local solide. Voir `docs/fiche-google-business.md`
 * pour la procédure de création de la fiche et l'endroit où récupérer ces URL.
 */
export const SOCIAL = {
  /** URL courte de la fiche (Google Business Profile → « Partager le profil »). */
  googleBusiness: '', // TODO — ex. https://g.co/kgs/xxxxxxx
  /** Lien Google Maps de l'établissement (partage → copier le lien). */
  googleMaps: '', // TODO — ex. https://maps.app.goo.gl/xxxxxxx
  /** Lien direct « laisser un avis », à envoyer aux clients par SMS. */
  googleReview: '', // TODO — ex. https://g.page/r/xxxxxxxxxxxx/review
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
    label: 'Quelle benne ?',
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
