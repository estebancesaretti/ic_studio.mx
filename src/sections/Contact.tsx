'use client';

import { Button } from '@/components/ui/Button';

export function Contact() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-dark to-[#1b251e] text-bone relative overflow-hidden">
      {/* Background Pattern Hint */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/logo_black_new.png')] bg-repeat bg-[length:200px] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              ¿Listo para empezar?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Cuéntanos sobre tu proyecto y creemos piezas extraordinarias
              juntos. Diseñamos para transformar tu espacio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                href="/contact"
                variant="outline"
                className="border-wood-light text-wood-light hover:bg-wood-light hover:text-green-dark"
              >
                Contáctanos
              </Button>
              <Button
                href="tel:+526621234567"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Llamar ahora
              </Button>
            </div>
          </div>

          <div className="hidden md:block w-px h-32 bg-white/20" />

          <div className="text-center md:text-right">
            <p className="text-sm font-semibold tracking-wider uppercase text-wood-light mb-2">
              Horario
            </p>
            <p className="text-white/90">Lunes - Viernes: 9am - 6pm</p>
            <p className="text-white/90">Sábado: 9am - 2pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
