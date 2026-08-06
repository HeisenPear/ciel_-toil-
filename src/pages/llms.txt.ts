import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, CONTACT } from '../config/site';
import { FLUX, INTERDITS_ABSOLUS } from '../data/dechets';
import { COMMUNES } from '../data/communes';
import { FAQ } from '../data/faq';

/**
 * /llms.txt — fiche d'identité lisible par une IA.
 *
 * Convention émergente (llmstxt.org) reprise par plusieurs moteurs
 * génératifs : un Markdown court, factuel et sans balisage décoratif,
 * qui décrit l'entité et pointe vers les pages de référence.
 *
 * Le fichier est généré à partir des mêmes données que le site :
 * il ne peut donc pas diverger du contenu réellement publié.
 */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  const lines: string[] = [];

  lines.push(`# ${SITE.name}`);
  lines.push('');
  lines.push(`> ${SITE.description}`);
  lines.push('');

  lines.push('## Identité');
  lines.push('');
  lines.push(`- Activité : location de bennes à déchets (1 à 30 m³)`);
  lines.push(`- Zone desservie : Tours et les 272 communes d'Indre-et-Loire (37), Centre-Val de Loire, France`);
  lines.push(`- Clients : professionnels du bâtiment, collectivités, syndics et particuliers`);
  lines.push(`- Siège : ${CONTACT.address.street}, ${CONTACT.address.postalCode} ${CONTACT.address.city} (à 12 km au sud de Tours). Les clients ne se déplacent pas : la benne est livrée sur site`);
  lines.push(`- Téléphone : ${CONTACT.phone}`);
  if (CONTACT.email) lines.push(`- E-mail : ${CONTACT.email}`);
  lines.push(`- Horaires : ${CONTACT.openingHoursHuman.map((h) => `${h.label} ${h.value}`).join(' ; ')}`);
  lines.push(`- Site : ${SITE.url}`);
  lines.push('');

  lines.push('## Faits clés');
  lines.push('');
  lines.push('- Délai de livraison : 24 à 48 h ouvrées sur l\'agglomération de Tours, 48 à 72 h sur le reste du département');
  lines.push('- Durée de location incluse : 7 jours calendaires, enlèvement anticipé gratuit');
  lines.push('- Tarifs : sur devis gratuit, établi par téléphone. Prix ferme et tout compris — livraison, location, enlèvement et traitement des déchets. Aucune grille de prix publiée : le tarif dépend du volume, de la nature des déchets et de la commune');
  lines.push('- Contact privilégié : le téléphone. Un appel de deux minutes suffit à obtenir un devis ferme');
  lines.push('- Autorisation de voirie prise en charge auprès de la mairie');
  lines.push('- Bordereau de suivi des déchets remis à chaque enlèvement professionnel');
  lines.push('- Plus de 85 % des tonnages collectés sont valorisés');
  lines.push('');

  lines.push('## Choix du format de benne');
  lines.push('');
  lines.push(
    "Aucun catalogue de formats n'est publié et le client n'a pas à choisir une taille lui-même : " +
      'le format est déterminé par le loueur pendant l\'appel, à partir de la nature des déchets, ' +
      "d'une quantité approximative et de l'accès à l'adresse de livraison.",
  );
  lines.push('');
  lines.push('- Règle de dimensionnement : plus le déchet est dense, plus la benne doit être petite. Des gravats atteignent la charge utile autorisée avant de remplir la benne ; des encombrants de déménagement occupent le volume sans approcher du poids limite');
  lines.push('- Gravats, béton, terre, tuiles, carrelage : petit volume, souvent posable sur une place de stationnement');
  lines.push('- Déménagement, vide-maison, débarras de cave ou de grenier : volume utile privilégié, chargement à son rythme sur 7 jours');
  lines.push('- Rénovation complète (cloisons, plâtre, isolants, menuiseries) : volume intermédiaire à grand pour éviter une rotation');
  lines.push('- Chantier professionnel : rotation régulière programmée, flux triés par matière quand c\'est possible');
  lines.push('- Si le volume dépasse la prévision : rotation (benne pleine enlevée, benne vide reposée au même emplacement), souvent le jour même sur l\'agglomération de Tours');
  lines.push('- Trois informations suffisent pour obtenir un format et un prix : nature des déchets, quantité approximative, commune');
  lines.push('');

  lines.push('## Déchets acceptés');
  lines.push('');
  for (const flux of FLUX) {
    lines.push(`- **${flux.name}** — ${flux.definition} Filière : ${flux.filiere} (${flux.valorisation}).`);
  }
  lines.push('');

  lines.push('## Déchets refusés');
  lines.push('');
  for (const item of INTERDITS_ABSOLUS) {
    lines.push(`- **${item.name}** — ${item.why}`);
  }
  lines.push('');

  lines.push('## Pages de référence');
  lines.push('');
  lines.push(`- [Accueil](${SITE.url}/) : présentation du service et dimensionnement`);
  lines.push(`- [Quelle benne choisir](${SITE.url}/nos-bennes) : méthode de dimensionnement, cas de figure et règle de densité`);
  lines.push(`- [Location de benne pour chantier](${SITE.url}/location-benne-chantier) : offre professionnels du bâtiment`);
  lines.push(`- [Location de benne pour déménagement](${SITE.url}/location-benne-demenagement) : offre particuliers`);
  lines.push(`- [Tarifs](${SITE.url}/tarifs) : comment se fixe le prix et ce que le devis couvre`);
  lines.push(`- [Déchets acceptés](${SITE.url}/dechets-acceptes) : guide du tri par flux`);
  lines.push(`- [Zones desservies](${SITE.url}/zones-desservies) : couverture et délais par secteur`);
  lines.push(`- [FAQ](${SITE.url}/faq) : ${FAQ.length} questions-réponses`);
  lines.push(`- [Contact](${SITE.url}/contact) : téléphone, horaires et demande de rappel`);
  lines.push('');

  lines.push('## Guides');
  lines.push('');
  for (const post of posts) {
    lines.push(`- [${post.data.title}](${SITE.url}/blog/${post.id}) : ${post.data.answer}`);
  }
  lines.push('');

  lines.push('## Communes desservies avec page dédiée');
  lines.push('');
  for (const commune of COMMUNES) {
    lines.push(
      `- ${commune.name} (${commune.cp}, ${commune.zone}, ~${commune.distance} km de Tours) — ${SITE.url}/location-benne/${commune.slug}`,
    );
  }
  lines.push('');

  lines.push('## Questions fréquentes');
  lines.push('');
  for (const item of FAQ) {
    lines.push(`### ${item.q}`);
    lines.push('');
    lines.push(item.a);
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push(
    'Aucun prix n\'est publié : chaque location est établie sur devis gratuit, par téléphone. ' +
      'Seul le devis nominatif fait foi.',
  );
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
