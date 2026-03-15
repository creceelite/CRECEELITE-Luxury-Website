import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
export function Footer() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1
  });
  return (
    <footer className="bg-richBlack border-t border-white/5 pt-16 md:pt-24 pb-12 relative overflow-hidden">
      {/* Subtle top gradient line for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isVisible ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-20">
          
          {/* Left Section */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-montserrat font-bold tracking-widest text-warmWhite mb-6 uppercase">
              CRECEELITE
            </h3>
            <p className="text-mutedGray font-montserrat font-light leading-relaxed text-sm md:text-base md:pr-4">
              Un sistema de crecimiento basado en cinco pilares: cuerpo, mente,
              espíritu, relaciones y finanzas.
            </p>
          </div>

          {/* Center Section */}
          <div className="md:col-span-3 md:col-start-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-montserrat font-semibold tracking-widest text-warmWhite uppercase mb-6">
              Explorar
            </h4>
            <ul className="space-y-4">
              {[
              {
                name: 'Inicio',
                href: '#'
              },
              {
                name: 'Los 5 Pilares',
                href: '#pilares'
              },
              {
                name: 'Guía Gratuita',
                href: '#guia'
              },
              {
                name: 'Libro CRECEELITE',
                href: '#libro'
              },
              {
                name: 'Guías Semanales',
                href: '#guias'
              }].
              map((link) =>
              <li key={link.name}>
                  <a
                  href={link.href}
                  className="text-mutedGray hover:text-gold transition-colors duration-300 font-montserrat text-sm tracking-wide">
                  
                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Right Section */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-montserrat font-semibold tracking-widest text-warmWhite uppercase mb-6">
              Recibe contenido de crecimiento
            </h4>
            <form
              className="mb-8 w-full max-w-sm"
              onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-transparent border border-white/10 px-4 py-3 text-sm text-warmWhite font-montserrat focus:outline-none focus:border-gold transition-colors w-full placeholder:text-mutedGray/50"
                  required />
                
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gold text-richBlack px-6 py-3 font-montserrat font-semibold text-sm hover:bg-goldLight transition-colors whitespace-nowrap">
                  
                  Suscribirme
                </button>
              </div>
            </form>

            <p className="font-montserrat text-sm text-mutedGray tracking-wide mb-4">
              Follow CreceElite
            </p>
            <div className="flex items-center justify-center md:justify-start gap-6">
              <a
                href="https://instagram.com/creceelite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mutedGray hover:text-gold transition-colors duration-300"
                aria-label="Instagram">
                
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/creceelite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mutedGray hover:text-gold transition-colors duration-300"
                aria-label="Facebook">
                
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/@creceelite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mutedGray hover:text-gold transition-colors duration-300"
                aria-label="YouTube">
                
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={
          isVisible ?
          {
            opacity: 1
          } :
          {}
          }
          transition={{
            duration: 1,
            delay: 0.4
          }}
          className="border-t border-white/5 pt-8 flex flex-col items-center md:flex-row md:justify-between gap-4">
          
          <p className="text-mutedGray font-montserrat text-xs tracking-wide">
            © 2026 CRECEELITE. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>);

}