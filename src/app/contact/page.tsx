import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Map } from 'lucide-react';

export const metadata = {
  title: 'Contacto | IC Studio',
  description:
    'Contáctanos para iniciar tu proyecto de carpintería a la medida.',
};

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-bone">
      {/* Hero Contact */}
      <section className="bg-green-dark text-bone py-16 md:py-24">
        <div className="container mx-auto px-5 text-center">
          <span className="text-wood-light text-xs md:text-sm font-bold tracking-[0.2em] uppercase block mb-3">
            Estamos listos
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Cuéntanos sobre tu proyecto
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Responde unas breves preguntas y agenda una llamada o visita al
            taller.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-green-dark/5">
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-green-dark mb-2">
                  Formulario
                </h2>
                <p className="text-stone text-sm">
                  Todos los campos son obligatorios para brindarte una propuesta
                  precisa.
                </p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-green-dark"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Nombre y apellidos"
                    className="w-full px-4 py-3 rounded-lg border border-stone/30 focus:border-green-dark focus:ring-1 focus:ring-green-dark outline-none bg-bone/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-green-dark"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 rounded-lg border border-stone/30 focus:border-green-dark focus:ring-1 focus:ring-green-dark outline-none bg-bone/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-green-dark"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(662) 000 0000"
                    className="w-full px-4 py-3 rounded-lg border border-stone/30 focus:border-green-dark focus:ring-1 focus:ring-green-dark outline-none bg-bone/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="project"
                    className="text-sm font-semibold text-green-dark"
                  >
                    Tipo de proyecto
                  </label>
                  <div className="relative">
                    <select
                      id="project"
                      name="project"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg border border-stone/30 focus:border-green-dark focus:ring-1 focus:ring-green-dark outline-none bg-bone/30 appearance-none transition-all"
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="exterior">Exterior</option>
                      <option value="custom">Otro personalizado</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-green-dark"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Cuéntanos sobre estilo, medidas, materiales y objetivo."
                    className="w-full px-4 py-3 rounded-lg border border-stone/30 focus:border-green-dark focus:ring-1 focus:ring-green-dark outline-none bg-bone/30 resize-none transition-all"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Details */}
            <div className="space-y-8 lg:pt-10">
              <div className="bg-white p-8 rounded-2xl border border-stone/10">
                <h3 className="text-xl font-serif font-bold text-green-dark mb-6">
                  Contacto directo
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-bone flex items-center justify-center text-green-dark group-hover:bg-green-dark group-hover:text-bone transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <a
                      href="mailto:hola@icstudio.mx"
                      className="text-stone hover:text-green-dark transition-colors font-medium"
                    >
                      hola@icstudio.mx
                    </a>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-bone flex items-center justify-center text-green-dark group-hover:bg-green-dark group-hover:text-bone transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <a
                      href="tel:+526620000000"
                      className="text-stone hover:text-green-dark transition-colors font-medium"
                    >
                      +52 662 000 0000
                    </a>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-bone flex items-center justify-center text-green-dark group-hover:bg-green-dark group-hover:text-bone transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-stone font-medium">
                      Hermosillo, Sonora
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-stone/10">
                <h3 className="text-xl font-serif font-bold text-green-dark mb-4">
                  Ubicación
                </h3>
                <p className="text-stone mb-6 text-sm">
                  Visitas con cita previa en nuestro taller.
                </p>
                <div className="aspect-video bg-bone rounded-lg flex flex-col items-center justify-center text-stone/50 border-2 border-dashed border-stone/20">
                  <Map className="w-8 h-8 mb-2" />
                  <span className="text-sm font-medium">Mapa próximamente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
