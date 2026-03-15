import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { DownloadIcon } from 'lucide-react';
export function FreeGuide() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.2
  });
  return (
    <section
      id="guia"
      className="relative py-20 md:py-32 bg-richBlack flex items-center justify-center overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent to-gold/50" />

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
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="flex flex-col items-center">
          
          <div className="w-12 h-[1px] bg-gold mb-8" />

          <h2 className="font-montserrat font-bold text-3xl md:text-6xl text-warmWhite tracking-wide mb-6">
            Guía gratuita CRECEELITE
          </h2>

          <p className="font-montserrat text-base md:text-xl text-mutedGray font-light max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Descubre los 5 pilares para transformar tu vida. Una guía práctica
            para comenzar tu camino hacia la abundancia y el propósito.
          </p>

          <button className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gold text-richBlack font-montserrat font-semibold tracking-wide hover:bg-goldLight transition-all duration-300">
            <DownloadIcon className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            Descargar gratis
          </button>

          <div className="w-12 h-[1px] bg-gold mt-16" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-t from-transparent to-gold/50" />
    </section>);

}