// Galerie interactive — grid asymétrique, lightbox, filtres, animations Framer Motion
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

type Category = 'all' | 'ciel' | 'carplay';

interface GalleryImage {
  src: string;
  alt: string;
  category: 'ciel' | 'carplay';
  span?: string;
}

const images: GalleryImage[] = [
  {
    src: '/images/hero-ciel-etoile.jpg',
    alt: 'Galaxie fibre optique violette avec étoiles filantes — ciel étoilé sur mesure',
    category: 'ciel',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/ciel-bmw-m3.jpg',
    alt: 'Ciel étoilé blanc sur BMW M3 Competition — sièges cuir orange',
    category: 'ciel',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/ciel-bmw-m2.jpg',
    alt: 'BMW M2 coupé — ciel étoilé bleu glacé',
    category: 'ciel',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/ciel-rouge-initiales.jpg',
    alt: 'Initiales lumineuses personnalisées sur ciel étoilé rouge',
    category: 'ciel',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/carplay-porsche.jpg',
    alt: 'Intégration Apple CarPlay sur Porsche Cayman — écran tactile',
    category: 'carplay',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/images/ciel-plafond-detail.jpg',
    alt: 'Détail plafond fibre optique — étoiles blanches sur tissu anthracite',
    category: 'ciel',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/ciel-initiales-white.jpg',
    alt: 'Initiales en fibre optique sur ciel étoilé anthracite',
    category: 'ciel',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/ciel-initiales-2.jpg',
    alt: 'Vue d\'ensemble plafond personnalisé — fibres optiques haute densité',
    category: 'ciel',
    span: 'col-span-1 row-span-1',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, scale: 0.93, transition: { duration: 0.3 } },
};

export default function Galerie() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [filter, setFilter] = useState<Category>('all');

  const filtered = filter === 'all' ? images : images.filter((img) => img.category === filter);

  const filters: { value: Category; label: string }[] = [
    { value: 'all',     label: 'Tout voir' },
    { value: 'ciel',    label: 'Ciel étoilé' },
    { value: 'carplay', label: 'CarPlay' },
  ];

  return (
    <section
      id="galerie"
      className="py-28 px-4"
      style={{ background: 'linear-gradient(180deg, #06060C 0%, #0D0D18 40%, #06060C 100%)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '0.4em' }}
            className="text-[#C4962A] text-xs uppercase mb-5"
          >
            Nos réalisations
          </p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl md:text-6xl text-[#F0EDE6]"
          >
            Galerie
          </h2>
          <div className="w-12 h-px bg-[#C4962A] mx-auto mt-6" />
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '0.15em' }}
              className={`px-6 py-2 text-xs uppercase border transition-all duration-300 ${
                filter === value
                  ? 'border-[#C4962A] text-[#C4962A] bg-[#C4962A]/10'
                  : 'border-white/15 text-white/45 hover:border-[#C4962A]/40 hover:text-white/70'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[240px] gap-3"
          >
            {filtered.map((img, i) => {
              const spanClass =
                filter === 'all'
                  ? (img.span ?? 'col-span-1 row-span-1')
                  : 'col-span-1 row-span-1';

              return (
                <motion.div
                  key={img.src}
                  variants={itemVariants}
                  className={`group relative cursor-pointer overflow-hidden ${spanClass}`}
                  onClick={() => setLightboxIndex(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Voir : ${img.alt}`}
                  onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    width={500}
                    height={500}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#06060C]/0 group-hover:bg-[#06060C]/45 transition-colors duration-400 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="w-12 h-12 border border-[#C4962A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M10 4v12M4 10h12" stroke="#C4962A" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '0.15em' }}
                      className="text-[9px] uppercase text-[#C4962A] bg-[#06060C]/80 px-2 py-1"
                    >
                      {img.category === 'ciel' ? 'Ciel étoilé' : 'CarPlay'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={filtered.map((img) => ({ src: img.src, alt: img.alt }))}
          styles={{
            container: { backgroundColor: 'rgba(6, 6, 12, 0.98)' },
            navigationPrev: { color: '#C4962A' },
            navigationNext: { color: '#C4962A' },
          }}
        />
      </div>
    </section>
  );
}
