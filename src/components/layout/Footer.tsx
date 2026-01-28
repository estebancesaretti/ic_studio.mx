import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111713] text-white/80 py-12 md:py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <Logo variant="light" className="scale-90 origin-left" />
            <p className="text-sm leading-relaxed max-w-xs text-white/60">
              Transformamos madera en espacios únicos. Arte, precisión y diseño
              personalizado en cada pieza.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-wood-light shrink-0" />
                <span>Hermosillo, Sonora, MX</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-wood-light shrink-0" />
                <a
                  href="tel:+521234567890"
                  className="hover:text-white transition-colors"
                >
                  +52 (662) 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-wood-light shrink-0" />
                <a
                  href="mailto:info@icstudio.com"
                  className="hover:text-white transition-colors"
                >
                  info@icstudio.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Explora</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-wood-light transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="hover:text-wood-light transition-colors"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="hover:text-wood-light transition-colors"
                >
                  Proceso
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-wood-light transition-colors"
                >
                  Cotizar Proyecto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Social</h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-wood-light hover:border-wood-light hover:text-green-dark transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-wood-light hover:border-wood-light hover:text-green-dark transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>&copy; {currentYear} IC Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
