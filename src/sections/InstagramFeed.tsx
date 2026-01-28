'use client';

import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const instaPosts = [
  {
    id: 1,
    url: 'https://www.instagram.com/ic_studiomx/', // Link to main profile for now, or specific post
    image: '/images/puerta.JPG',
    alt: 'Puerta Residencial IC Studio',
  },
  {
    id: 2,
    url: 'https://www.instagram.com/ic_studiomx/',
    image: '/images/puerta_closeup.JPG',
    alt: 'Detalle de madera',
  },
  {
    id: 3,
    url: 'https://www.instagram.com/ic_studiomx/',
    image: '/images/wood_HD.JPG',
    alt: 'Textura madera parota',
  },
  {
    id: 4,
    url: 'https://www.instagram.com/ic_studiomx/',
    image: '/images/workshop.JPG',
    alt: 'Taller de carpintería',
  },
  {
    id: 5,
    url: 'https://www.instagram.com/ic_studiomx/',
    image: '/images/hielera_abierta.JPG',
    alt: 'Hielera de madera',
  },
  {
    id: 6,
    url: 'https://www.instagram.com/ic_studiomx/',
    image: '/images/casa_de_perro.JPG',
    alt: 'Casa de mascota moderna',
  },
];

export function InstagramFeed() {
  return (
    <section className="py-20 bg-bone overflow-hidden">
      <div className="container mx-auto px-5 mb-10 flex flex-col items-center text-center">
        <motion.a
          href="https://www.instagram.com/ic_studiomx/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-green-dark hover:text-wood-light transition-colors duration-300"
        >
          <Instagram className="w-5 h-5" />
          <span className="font-semibold tracking-wide uppercase text-sm">
            Síguenos en Instagram
          </span>
        </motion.a>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif font-bold mt-3 text-green-dark"
        >
          @ic_studiomx
        </motion.h2>
      </div>

      {/* Grid / Slider Container */}
      {/* Mobile: Horizontal Scroll (Shopify style) | Desktop: Grid */}
      <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-6 md:pb-0 scrollbar-hide">
        {instaPosts.map((post, idx) => (
          <motion.a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative flex-shrink-0 w-[80vw] md:w-auto aspect-square snap-center group border-r border-bone/10 md:border-none"
          >
            <Image
              src={post.image}
              alt={post.alt}
              fill
              className="object-cover transition-transform duration-700 md:group-hover:scale-110"
              sizes="(max-width: 768px) 80vw, 16vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-green-dark/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white drop-shadow-lg transform scale-90 md:group-hover:scale-100 transition-transform" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
