/**
 * Communes d'Indre-et-Loire couvertes par le service.
 * Chaque entrée génère une page locale `/location-benne/<slug>`.
 *
 * `distance` = distance routière approximative depuis le dépôt de Tours (km).
 * `angle` = accroche locale unique, indispensable pour éviter le contenu dupliqué
 * (chaque page doit apporter une information que les autres n'ont pas).
 */

export type Commune = {
  slug: string;
  name: string;
  /** Forme utilisée dans une phrase : « à Tours », « au Grand-Pressigny ». */
  prep: string;
  cp: string;
  zone: Zone;
  distance: number;
  angle: string;
  /** Points de repère locaux, utiles au maillage sémantique. */
  reperes: string[];
  /** Communes limitrophes desservies — sert au maillage interne. */
  voisines: string[];
  priority?: boolean;
};

export type Zone =
  | 'Agglomération de Tours'
  | 'Val de Loire est'
  | 'Val de Loire ouest'
  | 'Nord Touraine'
  | 'Sud Touraine';

export const ZONES: Zone[] = [
  'Agglomération de Tours',
  'Val de Loire est',
  'Val de Loire ouest',
  'Nord Touraine',
  'Sud Touraine',
];

export const COMMUNES: Commune[] = [
  {
    slug: 'tours',
    name: 'Tours',
    prep: 'à Tours',
    cp: '37000',
    zone: 'Agglomération de Tours',
    distance: 0,
    angle:
      "Le centre ancien de Tours impose des contraintes fortes : rues étroites du Vieux-Tours, " +
      "stationnement réglementé et zone à trafic limité. Nous y déposons prioritairement des bennes " +
      "de 8 et 10 m³, et nous nous chargeons de la demande d'autorisation de voirie auprès de la Ville.",
    reperes: ['Vieux-Tours', 'Prébendes', 'Tours Nord', 'Rives du Cher', 'Beaujardin'],
    voisines: ['saint-cyr-sur-loire', 'joue-les-tours', 'saint-pierre-des-corps', 'la-riche'],
    priority: true,
  },
  {
    slug: 'joue-les-tours',
    name: 'Joué-lès-Tours',
    prep: 'à Joué-lès-Tours',
    cp: '37300',
    zone: 'Agglomération de Tours',
    distance: 7,
    angle:
      "Deuxième ville du département, Joué-lès-Tours mêle grands ensembles et lotissements pavillonnaires. " +
      "Les copropriétés du Morier et de la Rabière demandent une dépose sur parking privatif, " +
      "quand les quartiers pavillonnaires acceptent sans difficulté une benne 15 m³ sur l'allée.",
    reperes: ['La Rabière', 'Le Morier', 'Parc des Bretonnières', 'Zone de la Liodière'],
    voisines: ['tours', 'ballan-mire', 'chambray-les-tours', 'monts'],
    priority: true,
  },
  {
    slug: 'saint-cyr-sur-loire',
    name: 'Saint-Cyr-sur-Loire',
    prep: 'à Saint-Cyr-sur-Loire',
    cp: '37540',
    zone: 'Agglomération de Tours',
    distance: 5,
    angle:
      "Commune résidentielle en pleine rénovation de son parc pavillonnaire des années 1970. " +
      "La majorité de nos interventions à Saint-Cyr-sur-Loire concernent des extensions et " +
      "des réfections de toiture, avec des bennes à gravats de 8 m³ déposées en fond de propriété.",
    reperes: ['La Rabelais', 'Périgourd', 'Zone de la Ménardière', 'Quais de Loire'],
    voisines: ['tours', 'fondettes', 'notre-dame-doe', 'la-membrolle-sur-choisille'],
    priority: true,
  },
  {
    slug: 'saint-pierre-des-corps',
    name: 'Saint-Pierre-des-Corps',
    prep: 'à Saint-Pierre-des-Corps',
    cp: '37700',
    zone: 'Agglomération de Tours',
    distance: 5,
    angle:
      "Cœur industriel et ferroviaire de l'agglomération, Saint-Pierre-des-Corps concentre ateliers, " +
      "entrepôts et zones d'activité. Nous y intervenons surtout en bennes 20 et 30 m³ pour des " +
      "déchets industriels banals, avec possibilité de contrat de rotation régulière.",
    reperes: ['Gare de Saint-Pierre-des-Corps', 'Zone des Grands Mortiers', 'Quartier de la Morinerie'],
    voisines: ['tours', 'la-ville-aux-dames', 'saint-avertin', 'montlouis-sur-loire'],
    priority: true,
  },
  {
    slug: 'chambray-les-tours',
    name: 'Chambray-lès-Tours',
    prep: 'à Chambray-lès-Tours',
    cp: '37170',
    zone: 'Agglomération de Tours',
    distance: 8,
    angle:
      "Entre zones commerciales et pavillonnaire récent, Chambray-lès-Tours combine chantiers " +
      "d'aménagement de surfaces de vente et rénovations de maisons individuelles. " +
      "Les accès y sont larges : tous nos formats de bennes sont livrables.",
    reperes: ['Zone commerciale de la Vrillonnerie', 'Hôpital Trousseau', 'Les Perrières'],
    voisines: ['tours', 'joue-les-tours', 'saint-avertin', 'esvres'],
    priority: true,
  },
  {
    slug: 'saint-avertin',
    name: 'Saint-Avertin',
    prep: 'à Saint-Avertin',
    cp: '37550',
    zone: 'Agglomération de Tours',
    distance: 6,
    angle:
      "Commune résidentielle des bords du Cher, Saint-Avertin voit beaucoup de rénovations " +
      "de maisons anciennes et d'aménagements de jardins. Les bennes à déchets verts et " +
      "les bennes 8 m³ à gravats y sont les plus demandées.",
    reperes: ['Cité Vaugareau', 'Bords du Cher', 'Cœur de Ville'],
    voisines: ['tours', 'chambray-les-tours', 'larcay', 'saint-pierre-des-corps'],
  },
  {
    slug: 'la-riche',
    name: 'La Riche',
    prep: 'à La Riche',
    cp: '37520',
    zone: 'Agglomération de Tours',
    distance: 3,
    angle:
      "Commune dense accolée à Tours, La Riche impose souvent une dépose sur voirie. " +
      "Nous gérons pour vous l'arrêté temporaire de stationnement et privilégions " +
      "les créneaux matinaux pour limiter la gêne.",
    reperes: ['Prieuré Saint-Cosme', 'Zone du Plessis', 'Quartier des Varennes'],
    voisines: ['tours', 'saint-genouph', 'savonnieres', 'ballan-mire'],
  },
  {
    slug: 'fondettes',
    name: 'Fondettes',
    prep: 'à Fondettes',
    cp: '37230',
    zone: 'Agglomération de Tours',
    distance: 9,
    angle:
      "Fondettes s'étend sur le coteau et le val de Loire. Les propriétés du coteau ont " +
      "souvent des accès en pente : nous vérifions systématiquement la portance et la " +
      "hauteur libre avant la dépose d'une benne 15 m³.",
    reperes: ['Vallières', 'La Guignière', 'Le Bourg'],
    voisines: ['saint-cyr-sur-loire', 'luynes', 'la-membrolle-sur-choisille', 'saint-etienne-de-chigny'],
  },
  {
    slug: 'ballan-mire',
    name: 'Ballan-Miré',
    prep: 'à Ballan-Miré',
    cp: '37510',
    zone: 'Agglomération de Tours',
    distance: 11,
    angle:
      "Ballan-Miré combine lotissements récents et grandes propriétés boisées. " +
      "Les chantiers d'élagage et de défrichement y génèrent des volumes de déchets verts " +
      "qui partent en benne 20 m³ vers une plateforme de compostage locale.",
    reperes: ['Château de la Carte', 'Golf de Touraine', 'Zone de la Châtaigneraie'],
    voisines: ['joue-les-tours', 'savonnieres', 'la-riche', 'druye'],
  },
  {
    slug: 'la-ville-aux-dames',
    name: 'La Ville-aux-Dames',
    prep: 'à La Ville-aux-Dames',
    cp: '37700',
    zone: 'Agglomération de Tours',
    distance: 8,
    angle:
      "Commune du val, La Ville-aux-Dames est marquée par un habitat pavillonnaire " +
      "des années 1980 aujourd'hui en rénovation énergétique : dépose d'isolants, " +
      "de menuiseries et de cloisons, typiquement une benne 10 ou 15 m³.",
    reperes: ['Zone de la Longue Plaine', 'Bords de Loire'],
    voisines: ['saint-pierre-des-corps', 'montlouis-sur-loire', 'veretz'],
  },
  {
    slug: 'notre-dame-doe',
    name: "Notre-Dame-d'Oé",
    prep: "à Notre-Dame-d'Oé",
    cp: '37390',
    zone: 'Agglomération de Tours',
    distance: 8,
    angle:
      "Petite commune du nord de l'agglomération, Notre-Dame-d'Oé bénéficie d'un accès direct " +
      "depuis Tours Nord. Nos délais de livraison y sont parmi les plus courts du département : " +
      "24 h en moyenne.",
    reperes: ['Zone de la Rabelais', 'Le Bourg'],
    voisines: ['tours', 'saint-cyr-sur-loire', 'mettray', 'parcay-meslay'],
  },
  {
    slug: 'mettray',
    name: 'Mettray',
    prep: 'à Mettray',
    cp: '37390',
    zone: 'Nord Touraine',
    distance: 10,
    angle:
      "Mettray est desservie depuis notre dépôt en moins de 20 minutes. " +
      "Les chantiers y sont majoritairement des extensions de pavillons et " +
      "des réfections de terrasses, avec des bennes à gravats de 8 m³.",
    reperes: ['Dolmen de la Grotte aux Fées', 'Le Bourg'],
    voisines: ['notre-dame-doe', 'la-membrolle-sur-choisille', 'semblancay'],
  },
  {
    slug: 'la-membrolle-sur-choisille',
    name: 'La Membrolle-sur-Choisille',
    prep: 'à La Membrolle-sur-Choisille',
    cp: '37390',
    zone: 'Nord Touraine',
    distance: 10,
    angle:
      "Traversée par la vallée de la Choisille, la commune impose parfois des accès " +
      "sur terrain meuble. Nous conseillons alors une dépose sur plaques de répartition, " +
      "fournies sans supplément.",
    reperes: ['Vallée de la Choisille', 'Zone artisanale'],
    voisines: ['fondettes', 'mettray', 'saint-cyr-sur-loire'],
  },
  {
    slug: 'parcay-meslay',
    name: 'Parçay-Meslay',
    prep: 'à Parçay-Meslay',
    cp: '37210',
    zone: 'Nord Touraine',
    distance: 10,
    angle:
      "Parçay-Meslay concentre plusieurs zones d'activité au nord de Tours. " +
      "Nous y proposons des contrats de rotation pour les entreprises, " +
      "avec des bennes 20 et 30 m³ dédiées aux déchets industriels banals.",
    reperes: ['Grange de Meslay', 'Zone des Gaudières', 'Aéroport de Tours'],
    voisines: ['notre-dame-doe', 'rochecorbon', 'monnaie'],
  },
  {
    slug: 'rochecorbon',
    name: 'Rochecorbon',
    prep: 'à Rochecorbon',
    cp: '37210',
    zone: 'Val de Loire est',
    distance: 7,
    angle:
      "Les maisons troglodytiques du coteau de Rochecorbon génèrent des chantiers " +
      "atypiques : évacuation de tuffeau, aménagement de caves. Les accès étroits " +
      "y imposent souvent une benne 8 m³ ou des big bags.",
    reperes: ['Lanterne de Rochecorbon', 'Coteau troglodytique', 'Quais de Loire'],
    voisines: ['tours', 'vouvray', 'parcay-meslay'],
  },
  {
    slug: 'vouvray',
    name: 'Vouvray',
    prep: 'à Vouvray',
    cp: '37210',
    zone: 'Val de Loire est',
    distance: 12,
    angle:
      "Capitale viticole du Val de Loire est, Vouvray génère des déchets spécifiques : " +
      "bois de piquets, plastiques agricoles, gravats de caves. Nous adaptons le tri " +
      "aux filières viticoles locales.",
    reperes: ['Caves de Vouvray', 'Vignoble AOC', 'Vallée de la Cisse'],
    voisines: ['rochecorbon', 'vernou-sur-brenne', 'montlouis-sur-loire'],
  },
  {
    slug: 'vernou-sur-brenne',
    name: 'Vernou-sur-Brenne',
    prep: 'à Vernou-sur-Brenne',
    cp: '37210',
    zone: 'Val de Loire est',
    distance: 15,
    angle:
      "Commune viticole de la vallée de la Brenne, Vernou compte de nombreuses " +
      "longères en tuffeau. Les rénovations y produisent des gravats calcaires " +
      "que nous orientons vers une filière de valorisation en sous-couche routière.",
    reperes: ['Vallée de la Brenne', 'Vignoble de Vouvray'],
    voisines: ['vouvray', 'reugny', 'chancay'],
  },
  {
    slug: 'montlouis-sur-loire',
    name: 'Montlouis-sur-Loire',
    prep: 'à Montlouis-sur-Loire',
    cp: '37270',
    zone: 'Val de Loire est',
    distance: 12,
    angle:
      "Entre Loire et Cher, Montlouis-sur-Loire cumule vignoble et habitat résidentiel. " +
      "Nous y livrons aussi bien des bennes à déchets verts pour les particuliers que " +
      "des bennes à bois pour les exploitations viticoles.",
    reperes: ['Château de la Bourdaisière', 'Vignoble AOC Montlouis', 'Bords de Loire'],
    voisines: ['veretz', 'la-ville-aux-dames', 'vouvray', 'saint-martin-le-beau'],
  },
  {
    slug: 'veretz',
    name: 'Véretz',
    prep: 'à Véretz',
    cp: '37270',
    zone: 'Val de Loire est',
    distance: 12,
    angle:
      "Véretz s'étire le long du Cher sur un axe étroit. Les déposes en bord de RD976 " +
      "demandent une signalisation temporaire que nous fournissons systématiquement.",
    reperes: ['Bords du Cher', 'Château de Véretz'],
    voisines: ['saint-avertin', 'montlouis-sur-loire', 'larcay', 'azay-sur-cher'],
  },
  {
    slug: 'larcay',
    name: 'Larçay',
    prep: 'à Larçay',
    cp: '37270',
    zone: 'Agglomération de Tours',
    distance: 9,
    angle:
      "Larçay est une commune de coteau aux rues souvent étroites. " +
      "Nous privilégions les bennes 8 m³ et intervenons tôt le matin " +
      "pour limiter les croisements dans le bourg.",
    reperes: ['Castellum gallo-romain', 'Coteau du Cher'],
    voisines: ['saint-avertin', 'veretz', 'esvres'],
  },
  {
    slug: 'esvres',
    name: 'Esvres-sur-Indre',
    prep: 'à Esvres-sur-Indre',
    cp: '37320',
    zone: 'Sud Touraine',
    distance: 15,
    angle:
      "Esvres-sur-Indre connaît une forte croissance pavillonnaire. " +
      "Les chantiers de construction neuve y génèrent des déchets en mélange " +
      "que nous trions en centre agréé pour respecter les obligations de traçabilité.",
    reperes: ['Vallée de l’Indre', 'Zone artisanale des Grands Champs'],
    voisines: ['chambray-les-tours', 'larcay', 'truyes', 'veigne'],
  },
  {
    slug: 'veigne',
    name: 'Veigné',
    prep: 'à Veigné',
    cp: '37250',
    zone: 'Sud Touraine',
    distance: 14,
    angle:
      "Veigné, en bord d'Indre, est soumise à des contraintes de zone inondable. " +
      "Nous évitons les déposes prolongées en période de crue et proposons " +
      "des rotations rapprochées si nécessaire.",
    reperes: ['Moulin de Veigné', "Vallée de l'Indre"],
    voisines: ['montbazon', 'esvres', 'monts'],
  },
  {
    slug: 'montbazon',
    name: 'Montbazon',
    prep: 'à Montbazon',
    cp: '37250',
    zone: 'Sud Touraine',
    distance: 15,
    angle:
      "Au pied du donjon, le bourg de Montbazon est dense et passant. " +
      "Nous y déposons majoritairement des bennes 8 et 10 m³, en dehors " +
      "des heures de pointe de la RD910.",
    reperes: ['Forteresse de Montbazon', "Vallée de l'Indre"],
    voisines: ['veigne', 'monts', 'sorigny'],
  },
  {
    slug: 'monts',
    name: 'Monts',
    prep: 'à Monts',
    cp: '37260',
    zone: 'Sud Touraine',
    distance: 17,
    angle:
      "Monts accueille de nombreux projets de rénovation de maisons de bourg " +
      "et d'anciennes fermes. Les cours pavées demandent une dépose sur plaques " +
      "pour préserver le revêtement.",
    reperes: ['Château de Candé', "Vallée de l'Indre"],
    voisines: ['montbazon', 'veigne', 'joue-les-tours', 'artannes-sur-indre'],
  },
  {
    slug: 'amboise',
    name: 'Amboise',
    prep: 'à Amboise',
    cp: '37400',
    zone: 'Val de Loire est',
    distance: 25,
    angle:
      "Site classé au patrimoine mondial, Amboise impose des règles strictes " +
      "en secteur sauvegardé : durée de stationnement limitée, bâchage obligatoire " +
      "des bennes. Nous connaissons la procédure d'autorisation de la Ville et la gérons pour vous.",
    reperes: ['Château royal', 'Clos Lucé', 'Île d’Or', 'Vallée de la Masse'],
    voisines: ['nazelles-negron', 'saint-martin-le-beau', 'lussault-sur-loire', 'pocé-sur-cisse'],
    priority: true,
  },
  {
    slug: 'nazelles-negron',
    name: 'Nazelles-Négron',
    prep: 'à Nazelles-Négron',
    cp: '37530',
    zone: 'Val de Loire est',
    distance: 27,
    angle:
      "Face à Amboise, Nazelles-Négron mêle coteau troglodytique et plaine. " +
      "Les chantiers de réhabilitation de caves y produisent du tuffeau, " +
      "valorisé en remblai.",
    reperes: ['Coteau de la Cisse', 'Bords de Loire'],
    voisines: ['amboise', 'pocé-sur-cisse', 'vernou-sur-brenne'],
  },
  {
    slug: 'blere',
    name: 'Bléré',
    prep: 'à Bléré',
    cp: '37150',
    zone: 'Val de Loire est',
    distance: 27,
    angle:
      "Bléré est notre point d'appui pour la vallée du Cher est. " +
      "Nous y regroupons les tournées du secteur, ce qui permet de proposer " +
      "des délais courts malgré la distance depuis Tours.",
    reperes: ['Vallée du Cher', 'Chapelle Jehan de Seigne', 'Château de Chenonceau (à 3 km)'],
    voisines: ['saint-martin-le-beau', 'civray-de-touraine', 'athée-sur-cher'],
  },
  {
    slug: 'luynes',
    name: 'Luynes',
    prep: 'à Luynes',
    cp: '37230',
    zone: 'Val de Loire ouest',
    distance: 14,
    angle:
      "Luynes présente un tissu ancien en tuffeau et un aqueduc gallo-romain classé. " +
      "Les abords des monuments historiques imposent une dépose validée en amont : " +
      "nous réalisons systématiquement une visite technique préalable.",
    reperes: ['Aqueduc gallo-romain', 'Château de Luynes', 'Coteau de Loire'],
    voisines: ['fondettes', 'saint-etienne-de-chigny', 'cinq-mars-la-pile'],
  },
  {
    slug: 'langeais',
    name: 'Langeais',
    prep: 'à Langeais',
    cp: '37130',
    zone: 'Val de Loire ouest',
    distance: 25,
    angle:
      "Langeais commande l'ouest du Val de Loire. Nous y desservons aussi bien " +
      "le bourg médiéval, aux rues étroites, que les zones d'activité en bord de RD952 " +
      "où tous les formats de bennes passent sans contrainte.",
    reperes: ['Château de Langeais', 'Bords de Loire', 'Zone de la Boisnière'],
    voisines: ['cinq-mars-la-pile', 'saint-patrice', 'azay-le-rideau'],
    priority: true,
  },
  {
    slug: 'cinq-mars-la-pile',
    name: 'Cinq-Mars-la-Pile',
    prep: 'à Cinq-Mars-la-Pile',
    cp: '37130',
    zone: 'Val de Loire ouest',
    distance: 20,
    angle:
      "Commune de coteau et de val, Cinq-Mars-la-Pile compte beaucoup de caves " +
      "et de dépendances en rénovation. Les accès en pente y demandent " +
      "une évaluation technique avant dépose.",
    reperes: ['La Pile romaine', 'Coteau viticole', 'Bords de Loire'],
    voisines: ['langeais', 'luynes', 'saint-etienne-de-chigny'],
  },
  {
    slug: 'azay-le-rideau',
    name: 'Azay-le-Rideau',
    prep: 'à Azay-le-Rideau',
    cp: '37190',
    zone: 'Val de Loire ouest',
    distance: 27,
    angle:
      "Autour du château, le périmètre de protection du patrimoine encadre " +
      "le stationnement des bennes. Nous adaptons la durée de location " +
      "et le bâchage aux prescriptions de l'Architecte des Bâtiments de France.",
    reperes: ['Château d’Azay-le-Rideau', "Vallée de l'Indre", 'Marnay'],
    voisines: ['langeais', 'sache', 'villandry', 'rivarennes'],
  },
  {
    slug: 'savonnieres',
    name: 'Savonnières',
    prep: 'à Savonnières',
    cp: '37510',
    zone: 'Val de Loire ouest',
    distance: 14,
    angle:
      "Savonnières, entre Cher et coteau, accueille de nombreuses résidences secondaires " +
      "en rénovation. Nous proposons des locations longue durée aux propriétaires " +
      "qui ne résident pas sur place, avec état des lieux photo à l'enlèvement.",
    reperes: ['Grottes pétrifiantes', 'Bords du Cher', 'Villandry (à 4 km)'],
    voisines: ['ballan-mire', 'la-riche', 'villandry', 'druye'],
  },
  {
    slug: 'chinon',
    name: 'Chinon',
    prep: 'à Chinon',
    cp: '37500',
    zone: 'Val de Loire ouest',
    distance: 48,
    angle:
      "Chinon est notre point le plus à l'ouest. Le vignoble AOC et la ville médiévale " +
      "y génèrent deux types de chantiers très différents : évacuation de bois de vigne " +
      "en benne 20 m³, et rénovation de maisons en tuffeau en benne 8 m³.",
    reperes: ['Forteresse royale', 'Vignoble AOC Chinon', 'Quartier Saint-Étienne'],
    voisines: ['avoine', 'beaumont-en-veron', 'ile-bouchard', 'bourgueil'],
    priority: true,
  },
  {
    slug: 'avoine',
    name: 'Avoine',
    prep: 'à Avoine',
    cp: '37420',
    zone: 'Val de Loire ouest',
    distance: 55,
    angle:
      "Avoine et le secteur de Chinon-Ouest concentrent des activités industrielles " +
      "et de maintenance. Nous y proposons des bennes fermées et des contrats de rotation " +
      "adaptés aux flux réguliers de déchets industriels banals.",
    reperes: ['Zone industrielle', 'Bords de Loire'],
    voisines: ['chinon', 'beaumont-en-veron', 'bourgueil'],
  },
  {
    slug: 'bourgueil',
    name: 'Bourgueil',
    prep: 'à Bourgueil',
    cp: '37140',
    zone: 'Val de Loire ouest',
    distance: 48,
    angle:
      "Cœur du vignoble de Bourgueil, la commune génère des volumes saisonniers " +
      "importants : arrachage de vignes en hiver, taille au printemps. " +
      "Nous planifions les rotations sur ces pics d'activité.",
    reperes: ['Abbaye de Bourgueil', 'Vignoble AOC Bourgueil', 'Coteau'],
    voisines: ['chinon', 'avoine', 'restigne', 'langeais'],
  },
  {
    slug: 'loches',
    name: 'Loches',
    prep: 'à Loches',
    cp: '37600',
    zone: 'Sud Touraine',
    distance: 42,
    angle:
      "Sous-préfecture du sud du département, Loches possède une cité médiévale " +
      "en secteur protégé. Nous y intervenons avec des bennes 8 et 10 m³ " +
      "et regroupons nos tournées Sud-Touraine pour maintenir des tarifs équivalents à Tours.",
    reperes: ['Cité royale', 'Donjon de Loches', "Vallée de l'Indre", 'Zone de Vauzelles'],
    voisines: ['beaulieu-les-loches', 'perrusson', 'ligueil', 'montrésor'],
    priority: true,
  },
  {
    slug: 'ligueil',
    name: 'Ligueil',
    prep: 'à Ligueil',
    cp: '37240',
    zone: 'Sud Touraine',
    distance: 45,
    angle:
      "Ligueil dessert un large secteur rural du sud Touraine. " +
      "Les corps de ferme en rénovation y produisent des déchets mixtes " +
      "(bois, tuiles, ferraille) que nous trions à la source pour réduire le coût de traitement.",
    reperes: ['Bourg ancien', 'Plateau de Sainte-Maure'],
    voisines: ['loches', 'sainte-maure-de-touraine', 'descartes'],
  },
  {
    slug: 'sainte-maure-de-touraine',
    name: 'Sainte-Maure-de-Touraine',
    prep: 'à Sainte-Maure-de-Touraine',
    cp: '37800',
    zone: 'Sud Touraine',
    distance: 38,
    angle:
      "Positionnée sur l'A10, Sainte-Maure-de-Touraine est un point de passage " +
      "de nos tournées vers le sud du département. Cela nous permet d'y proposer " +
      "des délais de 24 à 48 h malgré l'éloignement.",
    reperes: ['Marché aux fromages', 'Échangeur A10', 'Zone de Vaugourdon'],
    voisines: ['ligueil', 'nouatre', 'ile-bouchard', 'descartes'],
  },
  {
    slug: 'descartes',
    name: 'Descartes',
    prep: 'à Descartes',
    cp: '37160',
    zone: 'Sud Touraine',
    distance: 58,
    angle:
      "Descartes marque la limite sud de notre zone. Nous y desservons " +
      "la vallée de la Creuse une à deux fois par semaine : réservez " +
      "quelques jours à l'avance pour caler la dépose sur notre passage.",
    reperes: ['Vallée de la Creuse', 'Musée Descartes', 'Zone artisanale'],
    voisines: ['ligueil', 'sainte-maure-de-touraine', 'preuilly-sur-claise'],
  },
  {
    slug: 'chateau-renault',
    name: 'Château-Renault',
    prep: 'à Château-Renault',
    cp: '37110',
    zone: 'Nord Touraine',
    distance: 32,
    angle:
      "Ancienne cité du cuir, Château-Renault compte plusieurs friches industrielles " +
      "en reconversion. Nous y intervenons sur des chantiers de curage " +
      "avec des bennes 30 m³ et un suivi de traçabilité renforcé.",
    reperes: ['Vallée de la Brenne', 'Musée du Cuir', 'Zone des Vaux'],
    voisines: ['monnaie', 'neuville-sur-brenne', 'autrèche'],
  },
  {
    slug: 'monnaie',
    name: 'Monnaie',
    prep: 'à Monnaie',
    cp: '37380',
    zone: 'Nord Touraine',
    distance: 18,
    angle:
      "Sur l'axe Tours – Château-Renault, Monnaie est desservie quotidiennement. " +
      "La commune connaît un fort développement pavillonnaire : les bennes 10 et 15 m³ " +
      "y sont les plus demandées pour les fins de chantier.",
    reperes: ['Zone de la Petite Vallée', 'Bourg'],
    voisines: ['parcay-meslay', 'chateau-renault', 'reugny'],
  },
  {
    slug: 'neuille-pont-pierre',
    name: 'Neuillé-Pont-Pierre',
    prep: 'à Neuillé-Pont-Pierre',
    cp: '37360',
    zone: 'Nord Touraine',
    distance: 25,
    angle:
      "Au carrefour de l'A28, Neuillé-Pont-Pierre est un point d'entrée " +
      "vers le nord du département. Nos camions y passent quotidiennement, " +
      "ce qui garantit des délais courts sur tout le secteur.",
    reperes: ['Échangeur A28', 'Forêt de Château-la-Vallière'],
    voisines: ['semblancay', 'chateau-la-valliere', 'sonzay'],
  },
  {
    slug: 'semblancay',
    name: 'Semblançay',
    prep: 'à Semblançay',
    cp: '37360',
    zone: 'Nord Touraine',
    distance: 18,
    angle:
      "Semblançay et ses hameaux sont accessibles par des voies communales étroites. " +
      "Nous vérifions l'itinéraire avant chaque dépose de benne 20 m³ " +
      "pour éviter tout demi-tour impossible.",
    reperes: ['Château de Semblançay', 'Étang'],
    voisines: ['neuille-pont-pierre', 'mettray', 'saint-antoine-du-rocher'],
  },
  {
    slug: 'chateau-la-valliere',
    name: 'Château-la-Vallière',
    prep: 'à Château-la-Vallière',
    cp: '37330',
    zone: 'Nord Touraine',
    distance: 42,
    angle:
      "Au cœur d'un secteur forestier, Château-la-Vallière génère beaucoup " +
      "de déchets verts et de bois. Nous orientons ces flux vers une plateforme " +
      "de valorisation énergétique du nord du département.",
    reperes: ['Lac du Val Joyeux', 'Forêt domaniale'],
    voisines: ['neuille-pont-pierre', 'savigne-sur-lathan'],
  },
  {
    slug: 'ile-bouchard',
    name: "L'Île-Bouchard",
    prep: "à L'Île-Bouchard",
    cp: '37220',
    zone: 'Sud Touraine',
    distance: 45,
    angle:
      "L'Île-Bouchard dessert la vallée de la Vienne. " +
      "Les chantiers y sont majoritairement agricoles ou viticoles : " +
      "ferraille, plastiques d'enrubannage, bois de taille.",
    reperes: ['Vallée de la Vienne', 'Sanctuaire', 'Bourg ancien'],
    voisines: ['chinon', 'sainte-maure-de-touraine', 'richelieu'],
  },
  {
    slug: 'richelieu',
    name: 'Richelieu',
    prep: 'à Richelieu',
    cp: '37120',
    zone: 'Sud Touraine',
    distance: 62,
    angle:
      "Ville idéale du XVIIᵉ siècle entièrement classée, Richelieu impose " +
      "une dépose hors des remparts ou une autorisation spécifique. " +
      "Nous étudions chaque intervention au cas par cas.",
    reperes: ['Ville classée', 'Parc du Château', 'Halles'],
    voisines: ['ile-bouchard', 'champigny-sur-veude'],
  },
];

export const getCommune = (slug: string) => COMMUNES.find((c) => c.slug === slug);

export const communesByZone = () =>
  ZONES.map((zone) => ({
    zone,
    communes: COMMUNES.filter((c) => c.zone === zone).sort((a, b) => a.distance - b.distance),
  })).filter((g) => g.communes.length > 0);

export const priorityCommunes = () => COMMUNES.filter((c) => c.priority);

/** Résout les communes voisines réellement présentes dans le référentiel. */
export const voisinesDe = (commune: Commune) =>
  commune.voisines
    .map((slug) => getCommune(slug))
    .filter((c): c is Commune => Boolean(c));
