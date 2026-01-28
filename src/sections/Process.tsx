'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consulta',
    desc: 'Entendemos tus necesidades, espacio y estilo personal.',
  },
  {
    number: '02',
    title: 'Diseño',
    desc: 'Propuestas visuales y selección de materiales certificados.',
  },
  {
    number: '03',
    title: 'Fabricación',
    desc: 'Mano de obra experta con atención milimétrica al detalle.',
  },
  {
    number: '04',
    title: 'Instalación',
    desc: 'Montaje limpio y puntual en tu domicilio u oficina.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-bone">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-stone text-xs md:text-sm font-bold tracking-[0.2em] uppercase block mb-3">
            Método
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-green-dark">
            Cómo Trabajamos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-green-dark/5 relative group hover:border-wood-light/30 transition-colors"
            >
              <span className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-wood-light text-green-dark font-bold flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform">
                {step.number}
              </span>
              <h3 className="text-xl font-serif font-bold text-green-dark mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
