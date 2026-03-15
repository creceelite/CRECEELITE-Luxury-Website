import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BookOpenIcon } from 'lucide-react';
export function BookSection() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.2
  });
  return (
    <section
      id="libro"
      className="py-16 md:py-32 bg-richBlack relative border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={
            isVisible ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1]
            }}>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-montserrat text-gold tracking-widest text-sm uppercase">
                El Sistema
              </span>
            </div>

            <h2 className="font-montserrat font-bold text-3xl md:text-6xl text-warmWhite mb-4 text-center lg:text-left">
              Libro CRECEELITE
            </h2>

            <h3 className="font-montserrat text-lg md:text-2xl text-goldLight font-light mb-8 text-center lg:text-left">
              Los 5 pilares de una vida con propósito
            </h3>

            <p className="font-montserrat text-mutedGray leading-relaxed mb-10 text-base md:text-lg text-center lg:text-left">
              Un sistema completo de crecimiento personal que integra cuerpo,
              mente, espíritu, relaciones y finanzas en un camino transformador.
              Diseñado para aquellos que buscan la excelencia en cada área de su
              vida.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 border border-gold text-gold font-montserrat tracking-wide hover:bg-gold hover:text-richBlack transition-all duration-300">
                <BookOpenIcon className="w-5 h-5" />
                Comprar libro
              </button>
            </div>
          </motion.div>

          {/* Book Mockup Placeholder */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={
            isVisible ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex justify-center lg:justify-end perspective-1000 mt-8 lg:mt-0">
            
            <div className="relative w-56 h-72 md:w-80 md:h-[28rem] bg-zinc-900 border border-white/10 shadow-2xl shadow-gold/5 flex flex-col items-center justify-center p-6 md:p-8 transform-none lg:transform lg:rotate-y-[-15deg] lg:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="w-8 h-[1px] bg-gold mb-6" />
              <h4 className="font-montserrat font-bold text-3xl text-warmWhite tracking-widest text-center mb-4">
                CRECEELITE
              </h4>
              <p className="font-montserrat text-xs text-goldLight tracking-widest uppercase text-center">
                Los 5 Pilares
              </p>
              <div className="mt-auto w-full border-t border-white/10 pt-4 text-center">
                <span className="font-montserrat text-[10px] text-mutedGray tracking-widest uppercase">
                  Edición Premium
                </span>
              </div>

              {/* Book spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-zinc-800 border-r border-white/5 transform -translate-x-full origin-right rotate-y-90" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}