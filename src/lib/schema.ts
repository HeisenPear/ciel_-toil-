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

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ID.organization,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: CONTACT.email,
    telephone: CONTACT.phoneE164,
    foundingDate: String(SITE.foundingYear),
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
    email: CONTACT.email,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Carte bancaire, Virement, Espèces',
    description: SITE.description,
    parentOrganization: { '@id': ID.organization },
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
  /** Offres listées dans le catalogue du service. */
  offers?: { name: string; description: string; price: number; url?: string }[];
};

export function serviceSchema({ name, description, url, areaServed, offers }: ServiceInput) {
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType: 'Location de benne à déchets',
    provider: { '@id': ID.localBusiness },
    areaServed: areaServed.map((city) => ({ '@type': 'City', name: city })),
    ...(offers?.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name,
            itemListElement: offers.map((offer) => ({
              '@type': 'Offer',
              name: offer.name,
              description: offer.description,
              priceCurrency: 'EUR',
              price: offer.price,
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: offer.price,
                priceCurrency: 'EUR',
                valueAddedTaxIncluded: true,
                minPrice: offer.price,
              },
              availability: 'https://schema.org/InStock',
              ...(offer.url ? { url: offer.url.startsWith('http') ? offer.url : `${SITE.url}${offer.url}` } : {}),
            })),
          },
        }
      : {}),
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
