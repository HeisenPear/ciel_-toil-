/**
 * Générateurs de données structurées JSON-LD (schema.org).
 *
 * Tous les nœuds partagent des `@id` stables afin de former un graphe cohérent :
 * c'est ce qui permet à Google — et aux moteurs génératifs qui consomment ces
 * données — de relier une page à l'entreprise, à ses services et à sa zone
 * de chalandise plutôt que de lire des blocs isolés.
 */

import { SITE, CONTACT, SOCIAL } from '../config/site';
import type { QA } from '../data/faq';

export const ID = {
  organization: `${SITE.url}/#organization`,
  website: `${SITE.url}/#website`,
  localBusiness: `${SITE.url}/#localbusiness`,
} as const;

const sameAs = [SOCIAL.googleBusiness, SOCIAL.facebook, SOCIAL.linkedin].filter(Boolean);

/**
 * Sujets sur lesquels l'entreprise fait autorité.
 *
 * Utile aux moteurs génératifs : c'est ce qui permet de rattacher l'entité à une
 * question (« qui loue des bennes à Tours ? ») plutôt qu'à une simple chaîne de
 * caractères. À garder aligné avec le contenu réellement publié sur le site.
 */
const EXPERTISES = [
  'Location de benne à déchets',
  'Évacuation de gravats et de déchets inertes',
  'Débarras et vide-maison',
  'Tri et valorisation des déchets de chantier',
  'Autorisation de voirie pour dépose de benne',
  'Obligation de tri 7 flux sur les chantiers du bâtiment',
];

/** Le téléphone est le canal principal du site : il est déclaré comme tel. */
const contactPoint = {
  '@type': 'ContactPoint',
  contactType: 'customer service',
  telephone: CONTACT.phoneE164,
  ...(CONTACT.email ? { email: CONTACT.email } : {}),
  availableLanguage: ['fr'],
  areaServed: 'FR-37',
  hoursAvailable: CONTACT.openingHours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
};

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ID.organization,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    telephone: CONTACT.phoneE164,
    ...(CONTACT.email ? { email: CONTACT.email } : {}),
    knowsAbout: EXPERTISES,
    contactPoint,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/logo.svg`,
      width: 512,
      height: 512,
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: SITE.url,
    name: SITE.name,
    inLanguage: 'fr-FR',
    publisher: { '@id': ID.organization },
  };
}

/**
 * Le nœud le plus important pour le référencement local :
 * il porte l'adresse, les horaires, la géolocalisation et la zone desservie.
 */
export function localBusinessSchema(areaServed: string[]) {
  return {
    '@type': ['LocalBusiness', 'WasteManagementService'],
    '@id': ID.localBusiness,
    name: SITE.name,
    image: `${SITE.url}/og/og-default.jpg`,
    url: SITE.url,
    telephone: CONTACT.phoneE164,
    ...(CONTACT.email ? { email: CONTACT.email } : {}),
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Carte bancaire, Virement, Espèces',
    description: SITE.description,
    knowsAbout: EXPERTISES,
    contactPoint,
    parentOrganization: { '@id': ID.organization },
    /* Relie la page à la fiche Google Business : les deux se confortent
       mutuellement dans le pack local. */
    ...(SOCIAL.googleMaps ? { hasMap: SOCIAL.googleMaps } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      postalCode: CONTACT.address.postalCode,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.region,
      addressCountry: CONTACT.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CONTACT.geo.lat,
      longitude: CONTACT.geo.lng,
    },
    openingHoursSpecification: CONTACT.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Indre-et-Loire',
        identifier: '37',
      },
      ...areaServed.map((name) => ({ '@type': 'City', name })),
    ],
    /* Rayon d'intervention : couvre le département depuis Tours. */
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: CONTACT.geo.lat,
        longitude: CONTACT.geo.lng,
      },
      geoRadius: '70000',
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE.url}${item.url}`,
    })),
  };
}

export function faqSchema(items: QA[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

type ServiceInput = {
  name: string;
  description: string;
  url: string;
  areaServed: string[];
};

/**
 * Le site ne publie plus de catalogue de formats : il n'y a donc pas
 * d'`OfferCatalog`. Un balisage qui listerait des produits absents des pages
 * serait une incohérence sanctionnée par Google — et le format de benne n'est
 * de toute façon plus un produit à choisir, mais le résultat d'un échange
 * téléphonique.
 */
export function serviceSchema({ name, description, url, areaServed }: ServiceInput) {
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType: 'Location de benne à déchets',
    provider: { '@id': ID.localBusiness },
    areaServed: areaServed.map((city) => ({ '@type': 'City', name: city })),
    /* Le devis est le point d'entrée, et il se prend par téléphone. */
    termsOfService: `${SITE.url}/tarifs`,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE.url}/contact`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: CONTACT.phoneE164,
        contactType: 'customer service',
        availableLanguage: ['fr'],
      },
    },
  };
}

/**
 * Nœud `WebPage` de la page courante.
 *
 * `speakable` désigne le bloc « réponse directe » (`AnswerBox`) : c'est le
 * paragraphe autoportant que l'on souhaite voir extrait et cité — par les
 * assistants vocaux comme par les moteurs génératifs.
 */
export function webPageSchema(input: { url: string; name: string; description: string }) {
  return {
    '@type': 'WebPage',
    '@id': input.url,
    url: input.url,
    name: input.name,
    description: input.description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': ID.website },
    about: { '@id': ID.localBusiness },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-answer-block]'],
    },
  };
}

export function howToSchema(input: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@type': 'HowTo',
    name: input.name,
    description: input.description,
    step: input.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    inLanguage: 'fr-FR',
    mainEntityOfPage: { '@type': 'WebPage', '@id': input.url },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { '@id': ID.organization },
    publisher: { '@id': ID.organization },
    ...(input.image ? { image: input.image } : {}),
  };
}

/** Assemble les nœuds en un unique `@graph`, format recommandé par Google. */
export function graph(nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
