import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
export function Mission() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.3
  });
  return (
    <section className="py-20 md:py-48 bg-richBlack relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={
          isVisible ?
          {
            opacity: 1,
            scale: 1
          } :
          {}
          }
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}>
          
          <div className="w-px h-10 md:h-16 bg-gold mx-auto mb-8 md:mb-12" />

          <h2 className="font-montserrat text-2xl md:text-5xl lg:text-6xl text-warmWhite leading-tight md:leading-snug font-[400]">
            "CRECEELITE no es solo una marca. Es un movimiento para aquellos que
            se niegan a vivir una vida ordinaria. Creemos que cada persona tiene
            un <span className="text-gold italic">propósito</span> único, y
            nuestra misión es ayudarte a descubrirlo y vivirlo con{' '}
            <span className="text-gold italic">excelencia</span>."
          </h2>

          <div className="w-px h-10 md:h-16 bg-gold mx-auto mt-8 md:mt-12" />
        </motion.div>
      </div>
    </section>);

}