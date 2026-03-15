import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
const guides = [
{
  num: '01',
  title: 'Fundamentos del Cuerpo',
  desc: 'Rutinas de disciplina física y nutrición consciente para construir tu templo.'
},
{
  num: '02',
  title: 'Domina tu Mente',
  desc: 'Técnicas de enfoque profundo y reprogramación de creencias limitantes.'
},
{
  num: '03',
  title: 'Conecta con tu Espíritu',
  desc: 'Prácticas de silencio, meditación y alineación con tu propósito vital.'
},
{
  num: '04',
  title: 'Fortalece tus Relaciones',
  desc: 'Estrategias para construir un círculo íntimo de alto valor y lealtad.'
}];

export function WeeklyGuides() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1
  });
  return (
    <section className="py-16 md:py-32 bg-[#050505] relative">
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
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center mb-10 md:mb-24">
          
          <h2 className="font-montserrat font-bold text-2xl md:text-5xl text-warmWhite mb-6">
            Guías semanales CRECEELITE
          </h2>
          <p className="font-montserrat text-mutedGray text-base md:text-lg max-w-2xl mx-auto font-light">
            Guías prácticas semanales para fortalecer los cinco pilares y
            mantener el momentum de tu transformación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {guides.map((guide, index) =>
          <motion.div
            key={guide.num}
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
              duration: 0.8,
              delay: 0.2 + index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="group bg-richBlack border border-white/5 p-6 md:p-8 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-700" />

              <span className="font-montserrat font-bold text-gold text-2xl mb-6 block">
                Semana {guide.num}
              </span>
              <h3 className="font-montserrat text-xl text-warmWhite mb-4 font-medium">
                {guide.title}
              </h3>
              <p className="font-montserrat text-mutedGray text-sm leading-relaxed font-light">
                {guide.desc}
              </p>

              <div className="mt-8 w-8 h-[1px] bg-white/10 group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}