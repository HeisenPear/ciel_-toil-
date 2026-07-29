/**
 * Référentiel des flux de déchets.
 * Sert la page /dechets-acceptes et les blocs de tri sur les pages bennes.
 */

export type Flux = {
  slug: string;
  name: string;
  /** Réponse courte et factuelle — format « answer-first » pour les moteurs génératifs. */
  definition: string;
  exemples: string[];
  interdits: string[];
  bennesConseillees: number[];
  /** Filière de traitement en aval. */
  filiere: string;
  /** Taux de valorisation indicatif. */
  valorisation: string;
};

export const FLUX: Flux[] = [
  {
    slug: 'gravats-inertes',
    name: 'Gravats et déchets inertes',
    definition:
      "Les gravats inertes regroupent les matériaux minéraux issus de la démolition qui ne se décomposent " +
      "pas et ne réagissent pas chimiquement : béton, brique, tuile, carrelage, parpaing, pierre, terre non polluée.",
    exemples: ['Béton et parpaings', 'Briques et tuiles', 'Carrelage et faïence', 'Terre et cailloux', 'Enrobés sans goudron'],
    interdits: ['Plâtre et placo', 'Amiante', 'Bois', 'Plastique', 'Laine de verre'],
    bennesConseillees: [1, 8],
    filiere: 'Concassage puis réemploi en sous-couche routière ou remblai.',
    valorisation: 'Jusqu’à 95 % valorisés',
  },
  {
    slug: 'dechets-melange',
    name: 'Déchets de chantier en mélange',
    definition:
      "Le mélange de chantier accepte les déchets non dangereux issus d'une rénovation sans tri préalable : " +
      "bois, plastique, isolants, menuiseries, plâtre, emballages. Le tri est réalisé après collecte en centre agréé.",
    exemples: ['Cloisons et plaques de plâtre', 'Menuiseries et vitrages', 'Isolants', 'Bois de coffrage', 'Emballages de chantier'],
    interdits: ['Amiante', 'Peintures et solvants', 'Batteries', 'Pneus', 'Déchets alimentaires'],
    bennesConseillees: [10, 15, 20],
    filiere: 'Tri mécanisé et manuel en centre agréé, puis orientation par matière.',
    valorisation: '60 à 75 % valorisés',
  },
  {
    slug: 'encombrants-demenagement',
    name: 'Encombrants et mobilier',
    definition:
      "La benne à encombrants reçoit tout ce qu'un logement contient et qui ne se recycle pas au bac jaune : " +
      "meubles, matelas, moquettes, jouets, textiles, objets volumineux. C'est le flux typique du déménagement " +
      "et du vide-maison.",
    exemples: ['Meubles démontés ou non', 'Matelas et sommiers', 'Moquettes et tapis', 'Textiles', 'Objets divers'],
    interdits: ['Électroménager (filière DEEE)', 'Écrans et informatique', 'Produits chimiques', 'Bouteilles de gaz'],
    bennesConseillees: [10, 20, 30],
    filiere: 'Démantèlement, valorisation matière et valorisation énergétique du refus.',
    valorisation: '55 à 70 % valorisés',
  },
  {
    slug: 'bois',
    name: 'Bois',
    definition:
      "Le flux bois regroupe le bois brut et le bois transformé non traité : palettes, coffrages, " +
      "charpente, mobilier en panneaux, cagettes. Il est broyé puis valorisé en panneaux ou en énergie.",
    exemples: ['Palettes', 'Charpente et coffrage', 'Panneaux et mélaminé', 'Portes et volets bois', 'Cagettes'],
    interdits: ['Traverses de chemin de fer', 'Bois traité en autoclave classe 4', 'Bois peint au plomb'],
    bennesConseillees: [15, 20, 30],
    filiere: 'Broyage puis panneaux de particules ou combustible biomasse.',
    valorisation: 'Jusqu’à 90 % valorisés',
  },
  {
    slug: 'dechets-verts',
    name: 'Déchets verts',
    definition:
      "Le flux vert accepte les résidus végétaux issus de l'entretien des espaces extérieurs : " +
      "tontes, tailles, branchages, souches, feuilles. Il part directement en plateforme de compostage.",
    exemples: ['Tontes de pelouse', 'Tailles de haies', 'Branchages et élagage', 'Souches', 'Feuilles mortes'],
    interdits: ['Terre et cailloux', 'Sacs plastique', 'Pots en plastique', 'Bâches'],
    bennesConseillees: [8, 10, 20, 30],
    filiere: 'Compostage en plateforme agréée d’Indre-et-Loire.',
    valorisation: '100 % valorisés',
  },
  {
    slug: 'ferraille-metaux',
    name: 'Ferraille et métaux',
    definition:
      "Les métaux ferreux et non ferreux (acier, fonte, aluminium, cuivre, zinc) sont recyclables à l'infini. " +
      "Leur valeur de reprise peut réduire le coût global de votre location.",
    exemples: ['Poutrelles et fers à béton', 'Tôles et gouttières', 'Radiateurs en fonte', 'Câbles', 'Structures métalliques'],
    interdits: ['Bouteilles de gaz', 'Fûts non vidés', 'Véhicules hors d’usage', 'Déchets amiantés'],
    bennesConseillees: [8, 15, 20],
    filiere: 'Cisaillage et refonte en aciérie.',
    valorisation: '100 % recyclés',
  },
  {
    slug: 'platre-placo',
    name: 'Plâtre et plaques de plâtre',
    definition:
      "Le plâtre doit être trié séparément : mélangé aux gravats, il rend l'ensemble non valorisable " +
      "et génère du sulfure d'hydrogène en décharge. Plaques, carreaux et enduits vont dans un flux dédié.",
    exemples: ['Plaques de plâtre (BA13)', 'Carreaux de plâtre', 'Enduits et cloisons sèches', 'Plafonds démontés'],
    interdits: ['Gravats', 'Laine de verre non séparée', 'Bois'],
    bennesConseillees: [10, 15],
    filiere: 'Recyclage en nouvelles plaques de plâtre.',
    valorisation: 'Jusqu’à 85 % recyclés',
  },
  {
    slug: 'dib',
    name: 'Déchets industriels banals (DIB)',
    definition:
      "Les DIB sont les déchets non dangereux produits par les entreprises, commerces et administrations : " +
      "cartons, plastiques, films, palettes, chutes de production. Ils relèvent de la responsabilité " +
      "du producteur et exigent un bordereau de suivi.",
    exemples: ['Cartons et papiers', 'Films et plastiques', 'Palettes', 'Chutes de production', 'Mobilier de bureau'],
    interdits: ['Déchets dangereux', 'DASRI (déchets de soins)', 'Déchets amiantés', 'Déchets alimentaires en vrac'],
    bennesConseillees: [20, 30],
    filiere: 'Tri en centre agréé, valorisation matière puis énergétique.',
    valorisation: '65 à 80 % valorisés',
  },
];

/** Flux jamais acceptés en benne — page /dechets-acceptes, section rouge. */
export const INTERDITS_ABSOLUS = [
  {
    name: 'Amiante',
    why: "Déchet dangereux soumis à une filière spécifique et à un conditionnement étanche. Nous pouvons vous orienter vers un prestataire agréé.",
  },
  {
    name: 'Produits chimiques, peintures, solvants',
    why: "Déchets dangereux : à déposer en déchèterie professionnelle ou à confier à un collecteur agréé.",
  },
  {
    name: 'Bouteilles de gaz et extincteurs',
    why: "Risque d'explosion lors du chargement et du déchargement. À rapporter au distributeur.",
  },
  {
    name: 'Pneumatiques',
    why: "Filière REP dédiée : reprise gratuite chez la plupart des garages et distributeurs.",
  },
  {
    name: 'Électroménager, écrans et matériel électrique (DEEE)',
    why: "Filière REP dédiée : reprise en déchèterie ou chez le distributeur lors d'un achat équivalent.",
  },
  {
    name: 'Déchets de soins, médicaments',
    why: "Filière DASRI : à rapporter en pharmacie.",
  },
];

export const getFlux = (slug: string) => FLUX.find((f) => f.slug === slug);
