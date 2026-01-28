'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Hammer,
  Image as ImageIcon,
  Briefcase,
  Mail,
  Instagram,
  Facebook,
} from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Close menu on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const navLinks = [
    { href: '/#hero', label: 'Inicio', icon: Home },
    { href: '/#services', label: 'Servicios', icon: Hammer },
    { href: '/#gallery', label: 'Galería', icon: ImageIcon },
    { href: '/#process', label: 'Proceso', icon: Briefcase },
    { href: '/contact', label: 'Contacto', icon: Mail },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-bone/90 backdrop-blur-md shadow-md py-2 border-b border-green-dark/10'
          : 'bg-transparent py-4',
      )}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Logo variant={scrolled ? 'dark' : 'light'} />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'group flex items-center gap-2 text-sm font-medium tracking-wide transition-colors relative pb-1',
                scrolled
                  ? 'text-green-dark hover:text-stone'
                  : 'text-bone hover:text-white',
              )}
            >
              <link.icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              <span>{link.label}</span>
              <span
                className={cn(
                  'absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100',
                  scrolled ? 'bg-green-dark' : 'bg-white',
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            'lg:hidden p-2 rounded-full transition-colors',
            scrolled
              ? 'text-green-dark hover:bg-green-dark/5'
              : 'text-bone hover:bg-white/10',
          )}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-green-dark/80 backdrop-blur-sm z-[60] lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-bone shadow-2xl z-[70] lg:hidden flex flex-col p-6"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-green-dark hover:bg-green-dark/5 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-xl text-green-dark hover:bg-wood-light/10 active:bg-wood-light/20 transition-colors text-lg font-medium border-b border-green-dark/5"
                    >
                      <link.icon className="w-5 h-5 opacity-70" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-green-dark/10">
                <p className="text-stone text-sm text-center mb-4">Síguenos</p>
                <div className="flex justify-center gap-6 text-green-dark">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
