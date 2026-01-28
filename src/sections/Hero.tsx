'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.JPG"
          alt="Taller de carpintería premium"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-green-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-5 pt-20 text-center md:text-left">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-stone font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
          >
            Hermosillo, Sonora
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-bone font-bold leading-tight mb-6"
          >
            Custom Woodworking <br className="hidden md:block" /> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
          >
            Carpintería a la medida con diseño personalizado y materiales
            premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <Button href="/#gallery" size="lg">
              Ver proyectos
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Cotizar
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
