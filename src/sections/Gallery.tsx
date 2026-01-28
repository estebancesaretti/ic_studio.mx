'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const images = [
  {
    src: '/images/puerta.JPG',
    alt: 'Entrada Residencial',
    caption: 'Entrada Residencial',
  },
  {
    src: '/images/puerta_closeup.JPG',
    alt: 'Detalle de Acabado',
    caption: 'Detalle de Acabado',
  },
  {
    src: '/images/hielera_abierta.JPG',
    alt: 'Hielera Premium',
    caption: 'Hielera Premium',
  },
  {
    src: '/images/logo_sobre_madera.JPG',
    alt: 'Grabado Personalizado',
    caption: 'Grabado Personalizado',
  },
  {
    src: '/images/tablas.JPG',
    alt: 'Mesa de Parota',
    caption: 'Mesa de Parota',
  },
  // Duplicate few for grid density if needed, but sticking to legacy items
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Keyboard nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft')
        setSelectedImage((prev) =>
          prev !== null && prev > 0 ? prev - 1 : images.length - 1,
        );
      if (e.key === 'ArrowRight')
        setSelectedImage((prev) =>
          prev !== null && prev < images.length - 1 ? prev + 1 : 0,
        );
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-24 bg-green-dark text-bone">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.2em] uppercase block mb-3">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            Nuestra Galería
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-xl group cursor-pointer bg-black/20"
              onClick={() => setSelectedImage(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10 opacity-80" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-green-dark/90 backdrop-blur px-4 py-2 rounded-lg translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-medium tracking-wide">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Nav */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  selectedImage > 0 ? selectedImage - 1 : images.length - 1,
                );
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden md:flex"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  selectedImage < images.length - 1 ? selectedImage + 1 : 0,
                );
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden md:flex"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full max-w-5xl max-h-[85vh] md:max-h-[90vh]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-2 rounded-full">
                <p className="text-white text-sm md:text-base">
                  {images[selectedImage].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
