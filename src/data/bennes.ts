/**
 * Catalogue des bennes proposées à la location.
 * Les prix sont indicatifs et doivent être validés par le client (TODO).
 */

export type Benne = {
  slug: string;
  /** Volume en m³, sert de clé de tri et d'affichage. */
  volume: number;
  name: string;
  /** Phrase de positionnement (≤ 90 caractères) reprise en méta-description. */
  punchline: string;
  /** Réponse directe « pour quoi faire ? » — bloc GEO answer-first. */
  answer: string;
  dimensions: { long: number; larg: number; haut: number };
  /** Charge utile maximale en tonnes. */
  charge: number;
  /** Équivalence concrète pour aider au dimensionnement. */
  equivalence: string;
  /** Type d'accès requis pour la dépose. */
  acces: string;
  priceFrom: number; // € TTC — TODO à valider
  usages: string[];
  dechets: string[];
  /** Vrai pour la benne mise en avant sur la home. */
  featured?: boolean;
};

export const BENNES: Benne[] = [
  {
    slug: 'big-bag-1m3',
    volume: 1,
    name: 'Big bag 1 m³',
    punchline: 'Le sac de chantier pour les petits volumes de gravats en ville.',
    answer:
      "Le big bag de 1 m³ est la solution la plus économique pour évacuer moins d'une tonne de gravats " +
      "quand aucune benne ne peut être déposée : cour intérieure, centre-ville de Tours, copropriété sans accès camion.",
    dimensions: { long: 0.9, larg: 0.9, haut: 1.1 },
    charge: 1,
    equivalence: 'Environ 8 à 10 brouettes de gravats.',
    acces: 'Aucun accès camion nécessaire : le sac est livré plié, enlevé par grue.',
    priceFrom: 130,
    usages: ['Petits travaux', 'Salle de bain', 'Jardinage'],
    dechets: ['Gravats', 'Terre', 'Déchets verts'],
  },
  {
    slug: 'benne-8m3',
    volume: 8,
    name: 'Benne 8 m³',
    punchline: 'La benne à gravats de référence pour les déchets lourds et denses.',
    answer:
      "La benne de 8 m³ est conçue pour les déchets lourds : gravats, béton, terre, tuiles, carrelage. " +
      "Son faible encombrement lui permet de se garer sur une place de stationnement standard à Tours, " +
      "tout en encaissant jusqu'à 8 tonnes de matériaux inertes.",
    dimensions: { long: 3.4, larg: 1.8, haut: 1.3 },
    charge: 8,
    equivalence: "Le contenu d'une salle de bain et d'une cuisine entièrement déposées.",
    acces: 'Une place de stationnement (3,5 m) et 4 m de hauteur libre.',
    priceFrom: 290,
    usages: ['Rénovation', 'Démolition partielle', 'Terrassement'],
    dechets: ['Gravats', 'Béton', 'Terre', 'Tuiles et carrelage'],
    featured: true,
  },
  {
    slug: 'benne-10m3',
    volume: 10,
    name: 'Benne 10 m³',
    punchline: 'Le format polyvalent pour un vide-maison ou un déménagement.',
    answer:
      "La benne de 10 m³ est le format le plus demandé par les particuliers d'Indre-et-Loire. " +
      "Elle absorbe le contenu d'un appartement complet lors d'un déménagement ou d'un débarras : " +
      "meubles, cartons, matelas, encombrants.",
    dimensions: { long: 3.5, larg: 2.0, haut: 1.5 },
    charge: 5,
    equivalence: "Le débarras complet d'un T3 (meubles + cartons).",
    acces: 'Une place de stationnement (4 m) et 4 m de hauteur libre.',
    priceFrom: 320,
    usages: ['Déménagement', 'Vide-maison', 'Débarras de cave ou grenier'],
    dechets: ['Encombrants', 'Bois', 'Mobilier', 'Cartons'],
    featured: true,
  },
  {
    slug: 'benne-15m3',
    volume: 15,
    name: 'Benne 15 m³',
    punchline: 'Le bon compromis pour une rénovation complète de maison.',
    answer:
      "La benne de 15 m³ couvre un chantier de rénovation complet sans rotation intermédiaire : " +
      "dépose de cloisons, plâtre, isolants, menuiseries et déchets en mélange sur un pavillon de 100 m².",
    dimensions: { long: 5.5, larg: 2.2, haut: 1.3 },
    charge: 6,
    equivalence: "La rénovation intérieure d'une maison de 100 m².",
    acces: 'Un accès camion de 6 m de long minimum, sol stabilisé.',
    priceFrom: 390,
    usages: ['Rénovation complète', 'Chantier artisan', 'Extension'],
    dechets: ['Déchets en mélange', 'Plâtre et placo', 'Bois', 'Isolants'],
    featured: true,
  },
  {
    slug: 'benne-20m3',
    volume: 20,
    name: 'Benne 20 m³',
    punchline: 'Le volume chantier pour les déchets encombrants et volumineux.',
    answer:
      "La benne de 20 m³ s'adresse aux chantiers professionnels et aux gros débarras : " +
      "elle réduit le nombre de rotations sur les déchets volumineux mais peu denses (bois, placo, ferraille, DIB).",
    dimensions: { long: 6.0, larg: 2.3, haut: 1.5 },
    charge: 8,
    equivalence: "Le vide-maison complet d'un pavillon avec dépendances.",
    acces: 'Un accès camion de 8 m et une zone de dépose dégagée.',
    priceFrom: 450,
    usages: ['Gros œuvre', 'Vide-maison total', 'Chantier professionnel'],
    dechets: ['Déchets industriels banals', 'Bois', 'Ferraille', 'Encombrants'],
  },
  {
    slug: 'benne-30m3',
    volume: 30,
    name: 'Benne 30 m³',
    punchline: 'Le plus grand volume, réservé aux déchets légers et volumineux.',
    answer:
      "La benne de 30 m³ est réservée aux déchets légers et très volumineux : cartons, plastiques, " +
      "polystyrène, mobilier, déchets verts. Elle ne peut pas recevoir de gravats en raison de son poids à vide.",
    dimensions: { long: 6.5, larg: 2.4, haut: 2.0 },
    charge: 9,
    equivalence: "Une opération de curage de local commercial ou de bâtiment tertiaire.",
    acces: 'Un accès poids lourd complet et une aire de manœuvre.',
    priceFrom: 520,
    usages: ['Industrie', 'Curage de local', 'Événementiel', 'Collectivité'],
    dechets: ['Cartons', 'Plastiques', 'Déchets verts', 'Mobilier'],
  },
];

export const getBenne = (slug: string) => BENNES.find((b) => b.slug === slug);
export const featuredBennes = () => BENNES.filter((b) => b.featured);
