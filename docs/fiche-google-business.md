# Fiche Google Business Profile — Rudy Capello

Tout ce qu'il faut pour créer, remplir et entretenir la fiche établissement.
Les valeurs sont déjà celles de l'entreprise et **sont exactement celles du site**
(`src/config/site.ts`) : le nom, l'adresse et le téléphone doivent rester
identiques au caractère près entre les deux — c'est ce que Google appelle la
cohérence NAP, *Name / Address / Phone*. Seules les rares valeurs marquées
`[À COMPLÉTER]` manquent encore.

> **Pourquoi cette fiche compte plus que le site pour le référencement local**
> Sur une requête « location benne Tours », Google affiche d'abord un bloc de
> trois fiches (le *pack local*), puis seulement les résultats classiques. Ce
> bloc capte l'essentiel des appels. La fiche est donc le premier levier, le
> site venant la conforter — et pas l'inverse.

---

## 1. Données à figer avant de commencer

| Donnée | Valeur | Champ du site |
| --- | --- | --- |
| Nom | **Rudy Capello** | `SITE.name` ✅ |
| Raison sociale | **Rudy Capello**, entrepreneur individuel | `SITE.legalName` ✅ |
| SIRET | **510 816 473 00019** | `CONTACT.siret` ✅ |
| Téléphone | **06 31 46 43 50** | `CONTACT.phone` ✅ |
| Adresse du siège | **90 rue de la Bichotière, 37250 Veigné** | `CONTACT.address` ✅ |
| Coordonnées GPS | 47.2836, 0.7161 (bourg de Veigné) | `CONTACT.geo` — à affiner sur le point exact |
| N° TVA intracommunautaire | `[À COMPLÉTER]` — si assujetti : FR 72 510 816 473 | `CONTACT.tva` |
| Récépissé de transport de déchets | `[À COMPLÉTER]` — préfecture d'Indre-et-Loire | `CONTACT.recepisseDechets` |
| E-mail professionnel | `[À COMPLÉTER]` | `CONTACT.email` |
| Nom de domaine | `[À COMPLÉTER]` — le site tourne sur l'URL Vercel | `SITE.url` |

> **Horaires à confirmer.** Le site annonce lundi–vendredi 7 h 30 – 18 h et samedi
> 8 h – 12 h (§ 7). Ce sont des valeurs reprises du modèle initial, pas des horaires
> validés : les corriger dans `CONTACT.openingHours` avant de les saisir sur la fiche.
> Une fiche annoncée ouverte quand personne ne décroche produit des avis négatifs.

Trois liens sont à récupérer **après** création de la fiche et à reporter dans
`SOCIAL` (ils alimentent le balisage `sameAs` et `hasMap` du site) :

| Lien | Où le trouver | Champ |
| --- | --- | --- |
| URL courte de la fiche | Profil → « Partager le profil » | `SOCIAL.googleBusiness` |
| Lien Google Maps | Maps → Partager → Copier le lien | `SOCIAL.googleMaps` |
| Lien direct « laisser un avis » | Profil → Avis → « Demander des avis » | `SOCIAL.googleReview` |

---

## 2. Création de la fiche

1. Aller sur [business.google.com](https://business.google.com) avec un compte
   Google **dédié à l'entreprise** (jamais un compte personnel : la fiche se
   transmet mal ensuite).
2. Vérifier d'abord qu'une fiche n'existe pas déjà : chercher le nom et
   l'adresse sur Maps. Un établissement peut avoir été créé automatiquement à
   partir d'annuaires. Si c'est le cas, **revendiquer** plutôt que créer — deux
   fiches sur la même adresse se neutralisent.
3. Type d'établissement : **zone de service sans adresse affichée**.
   C'est le choix correct ici — les clients ne viennent pas au dépôt, c'est la
   benne qui se déplace. L'adresse reste saisie (Google en a besoin pour situer
   l'établissement) mais n'est pas publiée.
4. Vérification : par vidéo dans la majorité des cas depuis 2023 — prévoir de
   filmer, en une prise et sans coupure, l'extérieur avec une plaque de rue
   lisible, le matériel (camion, bennes, marquage), puis un justificatif
   (Kbis, facture, courrier officiel). Compter 5 jours ouvrés de délai.

---

## 3. Nom de l'établissement

> **Rudy Capello**

**Règle absolue : le nom ne contient aucun mot-clé.** « Rudy Capello — Location
de bennes Tours pas cher » est un motif de suspension immédiate, et la suspension
fait disparaître la fiche du pack local du jour au lendemain. Le nom de la fiche
doit être le nom réel de l'entreprise, celui qu'un client lit sur le camion.

L'entreprise étant une entreprise individuelle, son nom est celui de
l'exploitant : c'est parfaitement normal dans le métier et ne pénalise en rien
le classement — l'activité est portée par la catégorie (§ 4) et par les services
(§ 9), pas par le nom.

> **Si les camions portent une enseigne** (un nom commercial peint sur les
> portières, différent de « Rudy Capello »), c'est cette enseigne qui doit
> figurer sur la fiche **et** sur le site : dans ce cas, changer `SITE.name`
> dans `src/config/site.ts` et le texte du logo dans
> `src/components/Logo.astro`, et rien d'autre — le nom se propage partout
> automatiquement.

---

## 4. Catégories

Les intitulés exacts sont à choisir dans la liste déroulante de Google, qui
évolue et diffère parfois d'un pays à l'autre. Les libellés ci-dessous sont
donnés dans l'ordre de préférence, avec l'équivalent anglais pour lever toute
ambiguïté au moment de la sélection.

**Catégorie principale** (la plus déterminante — elle décide des requêtes sur
lesquelles la fiche peut apparaître) :

1. `Service de location de bennes à ordures` (*Dumpster rental service*)
2. À défaut : `Service de collecte des déchets` (*Garbage collection service*)

**Catégories secondaires** (5 maximum ; n'en ajouter aucune qui ne corresponde
pas à une prestation réellement vendue — une catégorie de trop dilue la fiche) :

- `Service de gestion des déchets` (*Waste management service*)
- `Service de débarras` (*Junk removal service*)
- `Entreprise de recyclage` (*Recycling center* uniquement si un site de tri est
  exploité en propre — sinon **ne pas cocher**)
- `Service de nettoyage de chantier` (*Construction cleaning service*)

---

## 5. Description de l'établissement (750 caractères maximum)

À copier telle quelle une fois le nom validé — **730 caractères** sur les 750
autorisés, sauts de ligne compris :

```
Rudy Capello loue des bennes à déchets à Tours et dans toute l'Indre-et-Loire. Nous intervenons chez les professionnels du bâtiment — maçons, couvreurs, entreprises générales, syndics — comme chez les particuliers : déménagement, vide-maison, débarras de cave ou de grenier, rénovation.

Vous n'avez aucun format à choisir. Décrivez vos déchets et la quantité au téléphone : nous déterminons la benne adaptée, vérifions l'accès et annonçons un tarif ferme et tout compris — livraison, mise à disposition 7 jours, enlèvement et traitement.

Dépose sous 24 à 48 h sur l'agglomération de Tours, 48 à 72 h sur le reste du département. Nous prenons en charge l'autorisation de voirie et faisons trier chaque chargement en centre agréé.
```

Trois règles pour toute réécriture :

- **Pas d'URL, pas de numéro de téléphone, pas de promotion** dans la
  description : Google les supprime et peut refuser la modification entière.
- Le premier paragraphe est le seul visible sans clic sur « Plus » : il doit
  contenir l'activité, la ville et le département.
- La description n'est **pas** un facteur de classement direct, mais c'est le
  texte que reprennent ChatGPT, Perplexity et les AI Overviews quand ils citent
  l'établissement. Il doit être factuel et autoportant.

---

## 6. Zone de service

Google limite à 20 zones. En déclarer 272 est impossible, et une zone trop large
dilue la pertinence. La bonne granularité : **le département en premier, puis les
communes qui pèsent réellement**.

1. Indre-et-Loire (département)
2. Tours
3. Veigné
4. Montbazon
5. Joué-lès-Tours
6. Saint-Avertin
7. Chambray-lès-Tours
8. Saint-Cyr-sur-Loire
9. Saint-Pierre-des-Corps
10. La Riche
11. Fondettes
12. Amboise
13. Chinon
14. Loches
15. Château-Renault

> Veigné et Montbazon ouvrent la liste juste après Tours parce que la proximité
> reste, avec les avis, le premier facteur du pack local : c'est là que la fiche
> a le plus de chances de sortir en tête.

> Cette liste reprend l'ordre de priorité de `src/data/communes.ts`. Les 46
> communes disposant d'une page dédiée sur le site restent couvertes par la zone
> départementale — la page locale prend le relais sur ces requêtes.

---

## 7. Horaires

| Jour | Horaires |
| --- | --- |
| Lundi – Vendredi | 07:30 – 18:00 |
| Samedi | 08:00 – 12:00 |
| Dimanche | Fermé |

> À aligner avec `CONTACT.openingHours` si les horaires réels diffèrent.

**Horaires exceptionnels — à saisir en janvier pour toute l'année.** Une fiche
annoncée ouverte un jour férié où personne ne répond génère des appels perdus et,
à terme, des avis négatifs. Jours à renseigner : 1er janvier, lundi de Pâques,
1er mai, 8 mai, Ascension, lundi de Pentecôte, 14 juillet, 15 août,
1er novembre, 11 novembre, 25 décembre — plus la fermeture annuelle si elle
existe.

---

## 8. Attributs

À cocher dans « Informations » → « Attributs ». Ne cocher que ce qui est vrai :

- Devis gratuit
- Rendez-vous obligatoire : **non**
- Entrée accessible en fauteuil roulant : sans objet (zone de service)
- Paiements acceptés : carte bancaire, virement, espèces
- Services sur place / à domicile : **service à domicile**
- Propriété : `[À COMPLÉTER si applicable — entreprise familiale, etc.]`

---

## 9. Services

À créer un par un dans « Modifier le profil » → « Services ». Le nom du service
peut, lui, contenir des mots-clés — c'est l'un des rares endroits où c'est
autorisé et utile. Description limitée à 300 caractères.

| Service | Description |
| --- | --- |
| Location de benne pour chantier | Bennes pour artisans et entreprises du bâtiment en Indre-et-Loire : rotations sous 24 h, tri en centre agréé, bordereau de suivi des déchets et facturation mensuelle possible. |
| Location de benne pour déménagement | Benne déposée devant chez vous et chargée à votre rythme pendant 7 jours : meubles, matelas, cartons, encombrants. Sans minimum de commande. |
| Évacuation de gravats | Béton, terre, tuiles, carrelage : benne à gravats dimensionnée pour les déchets denses, posable sur une place de stationnement en ville. |
| Débarras et vide-maison | Débarras complet de logement, cave, grenier ou succession, avec rotation possible si le volume dépasse la prévision. |
| Benne pour rénovation | Cloisons, plâtre, isolants, menuiseries : un seul contenant pour un chantier de rénovation, sans rotation intermédiaire. |
| Autorisation de voirie | Dépôt du dossier d'occupation temporaire du domaine public auprès de la mairie, y compris à Tours, quand la benne est posée sur la rue. |
| Enlèvement et traitement des déchets | Enlèvement sur simple appel, pesée, tri en centre agréé d'Indre-et-Loire et remise du bordereau de suivi. |

**Ne pas créer de « Produits »** avec des formats de bennes : le site ne publie
plus de catalogue et n'affiche aucun prix. Une fiche qui annonce des produits que
le site ne montre pas crée une incohérence, et un prix affiché sur la fiche
devient une promesse opposable.

---

## 10. Photos

C'est le poste le plus rentable de la fiche, et celui qui est presque toujours
bâclé. Une fiche avec 30 photos réelles surperforme systématiquement une fiche
qui en a 5.

**À produire :**

| Type | Quantité | Notes |
| --- | --- | --- |
| Logo | 1 | 720 × 720 px minimum, carré, fond uni |
| Photo de couverture | 1 | 1024 × 576 px (16:9), un camion en situation |
| Camions | 4 à 6 | De face, de profil, marquage lisible |
| Bennes vides | 6 à 8 | Différents volumes, posées, sous plusieurs angles |
| Dépose en cours | 4 à 6 | Le bras qui pose la benne : c'est la photo qui rassure |
| Chantiers réels | 6 à 10 | Avec accord du client, sans visage identifiable |
| Équipe | 2 à 3 | Le chauffeur devant son camion, en tenue |
| Repères locaux | 2 à 4 | Une benne avec un élément reconnaissable de Tours en fond |

**Consignes de prise de vue :** téléphone récent, en paysage, de jour, sans
filtre ni logo incrusté. Photo prise au niveau des yeux, benne entière dans le
cadre.

**Deux idées reçues à écarter :**

- *Géotaguer les photos ne sert à rien* — Google supprime les métadonnées EXIF à
  l'import. Ce qui compte : que la photo soit réellement prise sur place et
  qu'elle contienne des indices visuels locaux.
- *Renommer les fichiers « location-benne-tours.jpg » ne sert à rien non plus* —
  le nom du fichier est perdu à l'import. Autant garder un nommage clair pour
  l'archivage interne, mais sans en attendre un effet SEO.

**Cadence :** 3 à 5 photos nouvelles par mois. La fraîcheur des photos est un
signal d'activité que Google prend en compte.

---

## 11. Lien vers le site

Renseigner l'accueil, avec un marquage qui permet de distinguer le trafic de la
fiche du reste du trafic Google :

```
https://[DOMAINE]/?utm_source=google-business&utm_medium=referral&utm_campaign=fiche-etablissement
```

Ne pas utiliser `utm_medium=organic` : la fiche serait comptée avec la recherche
naturelle et deviendrait invisible dans les statistiques.

Deux liens supplémentaires méritent d'être ajoutés dans « Liens » :

- Lien « Devis » → `https://[DOMAINE]/contact?utm_source=google-business&utm_medium=referral&utm_campaign=devis`
- Lien « Rendez-vous » → laisser vide (la prise de rendez-vous se fait par
  téléphone, un lien qui n'aboutit pas dégrade l'expérience).

---

## 12. Questions / réponses à amorcer

La section Q&R est ouverte à tous : n'importe qui peut poser une question, et
n'importe qui peut y répondre. Mieux vaut l'occuper soi-même. Poser ces
questions depuis un compte tiers (un proche, pas le compte de la fiche), puis y
répondre depuis le compte de l'établissement. Voter « utile » sur ses propres
réponses les fait remonter.

1. **Quel est le délai pour être livré ?**
   Sous 24 à 48 h ouvrées sur Tours et son agglomération, 48 à 72 h sur le reste
   de l'Indre-et-Loire, pour toute commande validée avant 16 h.

2. **Comment savoir quelle taille de benne prendre ?**
   Vous n'avez pas à le savoir : décrivez-nous vos déchets et une quantité
   approximative au téléphone, nous déterminons le format adapté et vérifions
   l'accès avant de nous engager.

3. **Combien coûte une location ?**
   Le tarif est établi sur devis gratuit pendant l'appel. Il dépend du volume, de
   la nature des déchets et de la commune. Le prix annoncé est ferme et tout
   compris : livraison, 7 jours de mise à disposition, enlèvement et traitement.

4. **Combien de temps puis-je garder la benne ?**
   7 jours calendaires sont inclus. L'enlèvement anticipé est gratuit, et une
   extension est possible sur simple appel.

5. **Puis-je poser la benne dans la rue ?**
   Oui, avec une autorisation d'occupation temporaire du domaine public délivrée
   par la mairie. Nous déposons le dossier à votre place. Sur un terrain privé,
   aucune démarche n'est nécessaire.

6. **Que puis-je mettre dans la benne ?**
   Tous les déchets non dangereux : gravats, bois, ferraille, plâtre,
   encombrants, cartons, déchets verts, mélange de chantier. Sont interdits
   l'amiante, les peintures et solvants, les bouteilles de gaz, les pneus,
   l'électroménager et les déchets de soins.

7. **Intervenez-vous en dehors de Tours ?**
   Oui, dans les 272 communes d'Indre-et-Loire : Amboise, Chinon, Loches,
   Bourgueil, Château-Renault et l'ensemble du département.

8. **Travaillez-vous avec les particuliers ?**
   Oui, sans minimum de commande : déménagement, vide-maison, débarras de cave ou
   de grenier, rénovation, élagage.

9. **Que se passe-t-il si la benne est trop petite ?**
   Nous organisons une rotation : la benne pleine est enlevée et une benne vide
   est reposée au même emplacement, souvent le jour même sur l'agglomération.

10. **Fournissez-vous un bordereau de suivi des déchets ?**
    Oui, systématiquement pour les enlèvements professionnels, avec la pesée et
    la traçabilité de la filière de traitement.

---

## 13. Avis clients

Les avis sont, avec la proximité, le facteur de classement local le plus lourd.
Objectif réaliste : **1 à 2 avis nouveaux par semaine**, en continu. Vingt avis
obtenus en un mois puis plus rien est un signal moins bon que deux avis par
semaine pendant six mois.

**Le moment qui marche :** juste après l'enlèvement de la benne, pendant que le
client est encore devant l'emplacement libéré. Le chauffeur envoie le SMS depuis
son téléphone avant de repartir.

**SMS type :**

```
Bonjour [PRÉNOM], la benne a bien été enlevée. Si tout s'est bien passé, un avis
Google nous aiderait beaucoup — c'est 30 secondes : [LIEN AVIS]
Merci ! Rudy
```

**Ce qui est interdit** (et détectable) : offrir une remise contre un avis,
demander uniquement aux clients contents, poster des avis depuis les comptes de
l'équipe. La sanction va du filtrage silencieux à la suspension.

**Réponses types** — répondre à **tous** les avis, sous 48 h. La réponse est
lue par les futurs clients bien plus que par l'auteur de l'avis.

*Avis 5 étoiles :*
```
Merci [PRÉNOM] ! Content que la dépose se soit bien passée [PRÉCISION : à
Joué-lès-Tours / pour votre vide-maison]. À bientôt si un nouveau chantier se
présente. Rudy Capello
```

*Avis 3 étoiles :*
```
Merci pour ce retour, [PRÉNOM] — et désolé pour [POINT PRÉCIS]. Vous avez
raison, c'est un point que nous devons améliorer. Je vous rappelle cette semaine
pour en parler directement. Rudy
```

*Avis 1 étoile :*
```
Bonjour [PRÉNOM]. Ce que vous décrivez ne correspond pas à ce que nous voulons
faire, et je le regrette. Je souhaite comprendre ce qui s'est passé et vous
proposer une solution : joignez-moi au 06 31 46 43 50. Rudy Capello
```

Ne jamais répondre à chaud, ne jamais contredire publiquement, ne jamais citer
d'informations personnelles du client dans la réponse.

---

## 14. Posts Google

Un post par semaine minimum. Chaque post disparaît de l'affichage principal au
bout de 7 jours (hors offres), mais reste consultable. Format : 150 à 300
caractères utiles, une photo, un bouton d'action « Appeler ».

1. **Un chantier de rénovation à évacuer cette semaine ?**
   Benne livrée sous 24 à 48 h sur Tours et l'agglomération. On dimensionne avec
   vous par téléphone, et le prix annoncé est ferme.

2. **Vous videz une maison ?**
   Cave, grenier, garage : on dépose la benne, vous chargez à votre rythme
   pendant 7 jours, on enlève sur simple appel.

3. **Gravats : la benne pleine n'est pas la benne la plus rentable.**
   Un mètre cube de béton pèse plus de 2 tonnes. On vous explique en deux minutes
   quel format prendre pour éviter la surcharge.

4. **Benne sur la rue : on s'occupe de la mairie.**
   Autorisation d'occupation du domaine public déposée par nos soins, à Tours
   comme dans les communes du département.

5. **Artisans : le tri 7 flux est une obligation, pas une option.**
   Bois, métal, plâtre, verre, carton, plastique, minéraux. On organise le
   séquencement des bennes et le bordereau de suivi.

6. **Amiante, peintures, bouteilles de gaz : jamais en benne.**
   Ces déchets relèvent de filières réglementées. En cas de doute, appelez-nous :
   on vous oriente, même si ce n'est pas vers nous.

7. **Nous livrons aussi à Amboise, Chinon, Loches et Château-Renault.**
   Tournées régulières par secteur dans tout le département, sans surcoût
   prohibitif.

8. **Plus de 85 % des tonnages collectés sont valorisés.**
   Tri en centre agréé d'Indre-et-Loire, pesée et traçabilité complète du
   chargement.

> Le contenu ci-dessus reprend uniquement des affirmations déjà publiées sur le
> site. Toute nouvelle promesse (délai, pourcentage, tarif) doit apparaître aux
> deux endroits, ou à aucun.

---

## 15. Ce qu'il ne faut jamais faire

Chacun de ces points entraîne une suspension, c'est-à-dire la disparition de la
fiche du jour au lendemain — et une procédure de rétablissement qui prend
plusieurs semaines.

- Ajouter des mots-clés ou une ville au nom de l'établissement.
- Utiliser une adresse qui n'est pas un lieu d'activité réel (domicile d'un
  proche, boîte postale, bureau virtuel).
- Créer une deuxième fiche pour une autre ville sans établissement réel sur
  place. Une seule fiche, une zone de service large : c'est la structure correcte.
- Publier un numéro de téléphone qui redirige vers un centre d'appel externe.
- Acheter des avis, ou en échanger contre une remise.
- Laisser la fiche à l'abandon : une fiche sans post ni photo pendant six mois
  recule mécaniquement dans le pack local.

---

## 16. Entretien : le rythme minimal

| Fréquence | Action |
| --- | --- |
| À chaque enlèvement | Demander l'avis par SMS depuis le téléphone du chauffeur |
| Sous 48 h | Répondre à chaque nouvel avis et à chaque question |
| Hebdomadaire | Publier un post |
| Mensuelle | Ajouter 3 à 5 photos ; relever appels, itinéraires et clics site |
| Trimestrielle | Vérifier catégories, services et zone ; corriger les horaires |
| Annuelle (janvier) | Saisir les horaires exceptionnels de tous les jours fériés |

**Indicateurs à suivre**, disponibles dans « Performances » de la fiche :

- Appels reçus depuis la fiche (le seul qui compte vraiment ici)
- Requêtes déclenchant l'affichage (elles indiquent quelles pages écrire ensuite)
- Clics vers le site, avec le paramètre `utm_campaign=fiche-etablissement`
- Demandes d'itinéraire, par commune d'origine

---

## 17. Cohérence NAP au-delà de Google

Le même triplet nom / adresse / téléphone, à la virgule près, sur :

- le site (`src/config/site.ts`, qui alimente aussi le balisage JSON-LD) ;
- Google Business Profile ;
- Bing Places, PagesJaunes, Yelp, Apple Business Connect ;
- les fédérations et annuaires du secteur (FNADE, syndicats du BTP locaux) ;
- les mentions légales et les factures.

Une adresse écrite « 1 rue de la Benne » ici et « 1 r. de la Benne » ailleurs
suffit à créer deux entités distinctes aux yeux des moteurs, et à diluer le
signal local.

---

## 18. Checklist de mise en ligne

- [ ] Données du tableau §1 figées et reportées dans `src/config/site.ts`
- [ ] Domaine acheté, site en ligne, `SITE.url` à jour
- [ ] Fiche créée ou revendiquée, vérification obtenue
- [ ] Type « zone de service » activé, adresse masquée
- [ ] Catégorie principale + secondaires renseignées
- [ ] Description (§5) copiée
- [ ] 15 zones de service saisies
- [ ] Horaires + horaires exceptionnels de l'année
- [ ] 7 services créés avec leurs descriptions
- [ ] Logo, couverture et 20 photos minimum
- [ ] Lien du site avec les paramètres UTM
- [ ] 10 questions/réponses amorcées
- [ ] Lien d'avis récupéré et enregistré dans le téléphone des chauffeurs
- [ ] 3 liens reportés dans `SOCIAL` (`googleBusiness`, `googleMaps`, `googleReview`)
- [ ] Premier post publié
