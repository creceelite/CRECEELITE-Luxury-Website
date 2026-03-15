import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-richBlack">
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-richBlack to-richBlack z-0" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 md:mt-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mb-6 flex justify-center">
          
          <div className="w-16 h-[1px] bg-gold" />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-4xl md:text-7xl lg:text-8xl text-warmWhite tracking-widest uppercase mb-8 font-montserrat font-bold">
          
          CRECEELITE
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: 'easeOut'
          }}
          className="font-montserrat text-base md:text-2xl text-mutedGray font-light tracking-wide mb-12">
          
          Descubre tu propósito. Vive en abundancia.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full px-2 sm:px-0">
          
          <a
            href="#guia"
            className="w-full sm:w-auto text-center px-8 py-4 bg-gold text-richBlack font-montserrat font-semibold tracking-wide hover:bg-goldLight transition-all duration-300 text-sm md:text-base">
            
            Descargar guía gratuita
          </a>
          <a
            href="#pilares"
            className="w-full sm:w-auto text-center px-8 py-4 border border-warmWhite/30 text-warmWhite font-montserrat tracking-wide hover:border-gold hover:text-gold transition-all duration-300 text-sm md:text-base">
            
            Explorar los 5 pilares
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1,
          delay: 2
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-mutedGray animate-bounce">
        
        <ArrowDownIcon className="w-6 h-6" />
      </motion.div>
    </section>);

}