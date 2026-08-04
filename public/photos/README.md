# Photos du parc

Déposer ici les photographies fournies par le client, puis déclarer chaque fichier
dans `src/config/photos.ts`.

Tant que `PHOTOS` est vide, le site affiche l'illustration vectorielle de secours :
rien n'est cassé, il manque simplement les vraies images.

## Fichiers attendus

| Nom de fichier suggéré | Contenu |
| --- | --- |
| `camion-ampliroll.jpg` | Le camion ampliroll bras Dalby en cours de dépose devant un pavillon |
| `benne-multibenne-rouge.jpg` | La benne rouge à ridelles, posée au sol |
| `benne-gravats-chargee.jpg` | La benne à rehausse grillagée chargée de gravats de tuffeau |

Les noms sont libres — seule compte la correspondance avec `src`
dans `src/config/photos.ts`.

## Recommandations techniques

- **Format** : `.jpg` (photo) ou `.webp`. Éviter le PNG, trois fois plus lourd à qualité égale.
- **Largeur** : 1600 px suffit largement. Au-delà, on alourdit la page sans gain visible.
- **Poids** : viser moins de 300 Ko par fichier après compression.
- **Orientation** : les photos prises au téléphone en mode portrait fonctionnent,
  mais le paysage remplit mieux les blocs de la page d'accueil.
- **`width` / `height`** : renseigner les dimensions réelles du fichier dans
  `src/config/photos.ts`. Elles réservent la place pendant le chargement et évitent
  que la page saute — un critère mesuré par Google (CLS).

## Exemple de déclaration

```ts
export const PHOTOS: Photo[] = [
  {
    src: '/photos/camion-ampliroll.jpg',
    alt: "Camion ampliroll équipé d'un bras Dalby déposant une benne devant un pavillon",
    caption: 'Dépose sur allée privée, secteur de Tours',
    width: 1600,
    height: 1200,
    featured: true,
  },
];
```
