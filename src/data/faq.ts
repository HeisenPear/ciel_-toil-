/**
 * Base de questions/réponses.
 *
 * Format volontairement « answer-first » : la première phrase de chaque réponse
 * doit se suffire à elle-même si elle est extraite par un moteur de recherche
 * ou un moteur génératif (ChatGPT, Perplexity, Gemini, AI Overviews).
 *
 * `topics` permet de filtrer la FAQ affichée par page pour éviter
 * de dupliquer le même bloc FAQPage sur tout le site.
 */

export type Topic =
  | 'general'
  | 'tarifs'
  | 'chantier'
  | 'demenagement'
  | 'dechets'
  | 'logistique'
  | 'local';

export type QA = { q: string; a: string; topics: Topic[] };

export const FAQ: QA[] = [
  {
    q: "Combien coûte la location d'une benne à Tours ?",
    a:
      "À Tours, comptez entre 290 et 520 € TTC selon le volume, pour une location de 7 jours incluant " +
      "la livraison, l'enlèvement et le traitement des déchets. Une benne 8 m³ à gravats démarre à 290 € TTC, " +
      "une benne 10 m³ pour déménagement à 320 € TTC, une benne 30 m³ à 520 € TTC. " +
      "Le prix dépend de trois facteurs : le volume, le type de déchets et la commune de livraison.",
    topics: ['tarifs', 'general'],
  },
  {
    q: 'Quelle taille de benne choisir ?',
    a:
      "Choisissez le volume selon la nature du déchet, pas seulement selon la quantité. " +
      "Pour des gravats ou de la terre, prenez une benne 8 m³ : au-delà, la charge utile est atteinte " +
      "avant le volume. Pour un déménagement ou un débarras, une benne 10 m³ absorbe un T3 complet. " +
      "Pour une rénovation de maison, comptez 15 m³. Pour des déchets légers et volumineux " +
      "(cartons, mobilier, déchets verts), montez à 20 ou 30 m³.",
    topics: ['general', 'chantier', 'demenagement'],
  },
  {
    q: "Faut-il une autorisation pour poser une benne sur la voie publique ?",
    a:
      "Oui. Toute benne posée sur la voirie, un trottoir ou une place de stationnement nécessite " +
      "une autorisation d'occupation temporaire du domaine public, délivrée par la mairie. " +
      "À Tours, la demande doit être déposée environ 10 jours ouvrés avant la pose et donne lieu " +
      "à une redevance. Nous nous chargeons de la démarche à votre place, sur simple demande. " +
      "Sur un terrain privé (allée, cour, parking), aucune autorisation n'est nécessaire.",
    topics: ['logistique', 'general', 'local'],
  },
  {
    q: 'Sous quel délai la benne est-elle livrée ?',
    a:
      "Sur Tours et sa première couronne, la benne est livrée sous 24 à 48 h ouvrées pour toute " +
      "commande passée avant 16 h. Sur le reste de l'Indre-et-Loire, comptez 48 à 72 h ; " +
      "les secteurs de Chinon, Loches et Descartes sont desservis lors de tournées planifiées, " +
      "il est donc préférable de réserver 3 à 4 jours à l'avance.",
    topics: ['logistique', 'general', 'local'],
  },
  {
    q: 'Combien de temps puis-je garder la benne ?',
    a:
      "La durée standard est de 7 jours calendaires, incluse dans le tarif. " +
      "Au-delà, chaque jour supplémentaire est facturé au tarif d'immobilisation. " +
      "Pour un chantier long, la formule au mois est plus économique. " +
      "Si vous terminez plus tôt, il suffit d'appeler : l'enlèvement anticipé est gratuit.",
    topics: ['logistique', 'tarifs'],
  },
  {
    q: 'Que se passe-t-il si je dépasse le poids autorisé ?',
    a:
      "Un dépassement de charge utile entraîne une facturation à la tonne supplémentaire et, " +
      "au-delà d'un certain seuil, un refus de chargement pour des raisons de sécurité routière. " +
      "La benne ne doit jamais être remplie au-dessus des ridelles : le chargement doit rester " +
      "sous le niveau des bords pour permettre le bâchage obligatoire.",
    topics: ['logistique', 'chantier'],
  },
  {
    q: 'Quels déchets sont interdits en benne ?',
    a:
      "Sont formellement interdits : l'amiante, les produits chimiques, peintures et solvants, " +
      "les bouteilles de gaz et extincteurs, les pneumatiques, l'électroménager et le matériel " +
      "électrique (DEEE), ainsi que les déchets de soins. Ces flux relèvent de filières spécifiques. " +
      "Nous pouvons vous orienter vers le bon prestataire.",
    topics: ['dechets', 'general'],
  },
  {
    q: 'Peut-on mélanger les déchets dans une benne ?',
    a:
      "Oui pour les déchets non dangereux, via une benne « déchets en mélange » triée après collecte. " +
      "Non pour les gravats : mélangés à du plâtre, du bois ou du plastique, ils perdent leur statut " +
      "de déchets inertes et le coût de traitement augmente fortement. Trier à la source reste " +
      "l'option la plus économique.",
    topics: ['dechets', 'tarifs', 'chantier'],
  },
  {
    q: 'De quel espace ai-je besoin pour recevoir une benne ?',
    a:
      "Prévoyez la longueur de la benne plus 2 mètres de dégagement, une largeur de 2,5 m minimum " +
      "et surtout 4,5 m de hauteur libre : le camion ampliroll lève la benne à la verticale pour la déposer. " +
      "Attention aux branches, câbles électriques, auvents et porches. Le sol doit être stabilisé ; " +
      "sur terrain meuble ou pavé, nous posons des plaques de répartition sans supplément.",
    topics: ['logistique', 'general'],
  },
  {
    q: 'Intervenez-vous dans tout le département d’Indre-et-Loire ?',
    a:
      "Oui, nous livrons dans les 272 communes d'Indre-et-Loire, de Château-Renault au nord " +
      "à Descartes au sud, et de Bléré à l'est jusqu'à Chinon et Bourgueil à l'ouest. " +
      "Les tournées sont regroupées par secteur, ce qui nous permet de maintenir un tarif " +
      "identique sur l'ensemble de l'agglomération de Tours.",
    topics: ['local', 'general'],
  },
  {
    q: 'Louez-vous des bennes aux particuliers ?',
    a:
      "Oui, sans minimum de commande ni justificatif professionnel. " +
      "Les particuliers représentent une part importante de notre activité : déménagements, " +
      "vide-maisons, débarras de cave, rénovations de salle de bain, élagage de jardin. " +
      "Le paiement se fait par carte ou virement à la commande.",
    topics: ['demenagement', 'general'],
  },
  {
    q: "Une benne est-elle rentable pour un déménagement ?",
    a:
      "Oui dès que le volume à évacuer dépasse deux à trois remorques de voiture. " +
      "Une benne 10 m³ à 320 € TTC évite une dizaine d'allers-retours en déchèterie, " +
      "les frais de carburant, la location d'une remorque et surtout les files d'attente. " +
      "La benne reste sur place plusieurs jours : vous chargez à votre rythme.",
    topics: ['demenagement', 'tarifs'],
  },
  {
    q: 'Fournissez-vous un bordereau de suivi des déchets ?',
    a:
      "Oui, un bordereau de suivi des déchets (BSD) est remis à chaque enlèvement professionnel, " +
      "avec le tonnage pesé, la nature du flux et le centre de traitement. " +
      "Ce document est obligatoire pour les entreprises du bâtiment et constitue la preuve " +
      "de la traçabilité exigée par la réglementation.",
    topics: ['chantier', 'dechets'],
  },
  {
    q: "Que faire si la benne est pleine avant la fin du chantier ?",
    a:
      "Appelez-nous : nous effectuons une rotation, c'est-à-dire l'enlèvement de la benne pleine " +
      "et la dépose immédiate d'une benne vide au même emplacement. Sur l'agglomération de Tours, " +
      "une rotation peut souvent être réalisée le jour même si la demande est faite avant 10 h.",
    topics: ['chantier', 'logistique'],
  },
  {
    q: "Proposez-vous des bennes pour les copropriétés et les syndics ?",
    a:
      "Oui. Nous intervenons pour les copropriétés d'Indre-et-Loire lors de travaux de ravalement, " +
      "de réfection de toiture ou de vidage de caves collectives, avec facturation directe au syndic " +
      "et planning de rotation défini à l'avance.",
    topics: ['chantier', 'local'],
  },
  {
    q: 'Comment se déroule une location de benne, étape par étape ?',
    a:
      "En quatre étapes : 1) vous demandez un devis en précisant le volume, le type de déchets " +
      "et la commune ; 2) vous recevez un tarif ferme sous 2 h ouvrées ; 3) la benne est déposée " +
      "au créneau convenu, sur plaques si nécessaire ; 4) vous appelez quand vous avez terminé " +
      "et nous l'enlevons, avec pesée et bordereau à l'appui.",
    topics: ['general', 'logistique'],
  },
];

export const faqByTopic = (topic: Topic, limit?: number) => {
  const list = FAQ.filter((item) => item.topics.includes(topic));
  return typeof limit === 'number' ? list.slice(0, limit) : list;
};
