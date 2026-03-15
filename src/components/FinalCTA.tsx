import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
export function FinalCTA() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.3
  });
  return (
    <section className="min-h-screen bg-richBlack flex items-center justify-center relative overflow-hidden border-t border-white/5">
      {/* Cinematic dark gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/10 via-richBlack to-richBlack" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 40
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
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="flex flex-col items-center">
          
          <h2 className="font-montserrat font-bold text-3xl md:text-7xl lg:text-8xl text-warmWhite mb-8 md:mb-12 tracking-wide">
            Comienza tu transformación hoy.
          </h2>

          <button className="w-full sm:w-auto px-10 py-5 bg-gold text-richBlack font-montserrat font-semibold tracking-widest uppercase text-sm hover:bg-goldLight hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(201,168,76,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]">
            Descargar guía gratuita
          </button>
        </motion.div>
      </div>

      {/* Footer minimal */}
      <div className="absolute bottom-8 left-0 right-0 text-center"></div>
    </section>);

}