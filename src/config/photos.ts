/**
 * Photographies du parc et des chantiers.
 *
 * ⚠️ Déposer les fichiers dans `public/photos/`, puis ajouter une entrée ici.
 * Tant que le tableau est vide, les composants retombent automatiquement sur
 * l'illustration vectorielle : aucune image cassée, aucun trou dans la mise en page.
 *
 * Bonnes pratiques :
 *  - format `.jpg` (photo) ou `.webp`, largeur 1600 px suffit ;
 *  - un `alt` descriptif et factuel — c'est du contenu indexé, pas de la décoration ;
 *  - `featured: true` pour les 3 photos mises en avant sur l'accueil.
 */

export type Photo = {
  /** Chemin depuis `public/`, ex. `/photos/camion-ampliroll.jpg`. */
  src: string;
  /** Description factuelle de ce que montre l'image. */
  alt: string;
  /** Légende affichée sous la photo (facultative). */
  caption?: string;
  /** Largeur et hauteur réelles du fichier, pour réserver la place et éviter le CLS. */
  width: number;
  height: number;
  featured?: boolean;
};

export const PHOTOS: Photo[] = [];

export const featuredPhotos = () => {
  const mises = PHOTOS.filter((p) => p.featured);
  return mises.length > 0 ? mises : PHOTOS.slice(0, 3);
};

export const hasPhotos = () => PHOTOS.length > 0;
