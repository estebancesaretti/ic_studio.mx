'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { DoorOpen, TreePine, Martini, Dog, Hammer } from 'lucide-react'; // Using Lucide replacements for FontAwesome

// Data for services
const services = [
  {
    icon: DoorOpen,
    title: 'Puertas Principales',
    desc: 'Diseños imponentes que definen la entrada de tu hogar con seguridad y estilo.',
    image: '/images/puerta_closeup.JPG',
    imageAlt: 'Puerta principal de madera sólida',
  },
  {
    icon: TreePine,
    title: 'Exterior & Terrazas',
    desc: 'Mesas y pérgolas resistentes al clima para disfrutar al aire libre.',
    image: '/images/tablas.JPG',
    imageAlt: 'Muebles de exterior',
  },
  {
    icon: Martini,
    title: 'Hospitalidad',
    desc: 'Hieleras integradas y barras personalizadas para tus eventos.',
    image: '/images/hielera_abierta.JPG',
    imageAlt: 'Barra y hielera de madera',
  },
  {
    icon: Dog, // Closest to 'Mobiliario Especial' concept or unique items
    title: 'Proyectos Especiales',
    desc: 'Desde casas para mascotas hasta piezas únicas de diseño.',
    image: '/images/casa_de_perro.JPG',
    // Fallback if this image is missing, we handled it in legacy but here we assume it exists
    imageAlt: 'Casa de perro de madera',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white text-green-dark">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-stone text-xs md:text-sm font-bold tracking-[0.2em] uppercase block mb-3">
            Lo que hacemos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Servicios Especializados
          </h2>
          <p className="text-stone text-lg">
            Fusionamos tradición artesanal con ingeniería moderna.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-green-dark/5 hover:shadow-2xl hover:shadow-green-dark/10 ring-1 ring-black/5 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-green-dark/5 flex items-center justify-center text-green-dark mb-4 group-hover:bg-green-dark group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 text-green-dark">
                  {service.title}
                </h3>
                <p className="text-stone/90 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
