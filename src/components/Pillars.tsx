import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
const pillarsData = [
{
  id: '01',
  title: 'CUERPO',
  subtitle: 'Disciplina y fuerza física',
  description:
  'Tu cuerpo es tu templo. La disciplina física es el fundamento de una vida extraordinaria.',
  image:
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80'
},
{
  id: '02',
  title: 'MENTE',
  subtitle: 'Mentalidad fuerte y enfoque',
  description:
  'Una mente disciplinada es invencible. Entrena tu enfoque como entrenas tu cuerpo.',
  image:
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80'
},
{
  id: '03',
  title: 'ESPÍRITU',
  subtitle: 'Propósito y fe',
  description:
  'Conecta con tu propósito más profundo. La fe es la brújula que guía tu camino.',
  image:
  'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=1920&q=80'
},
{
  id: '04',
  title: 'RELACIONES',
  subtitle: 'Conexiones significativas',
  description:
  'Rodéate de personas que te eleven. Las relaciones auténticas son tu mayor riqueza.',
  image:
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80'
},
{
  id: '05',
  title: 'FINANZAS',
  subtitle: 'Disciplina financiera y libertad',
  description:
  'La libertad financiera es el resultado de hábitos disciplinados y decisiones inteligentes.',
  image:
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80'
}];

function PillarSection({
  data,
  index



}: {data: (typeof pillarsData)[0];index: number;}) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.3
  });
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${data.image})`
        }} />
      
      <div className="absolute inset-0 bg-richBlack/70 md:bg-richBlack/60" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-0">
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 50
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
          className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          
          <div className="flex items-center justify-center md:justify-start gap-6 mb-6">
            <span className="font-montserrat text-gold text-2xl md:text-3xl tracking-widest">
              {data.id}
            </span>
            <div className="w-16 h-[1px] bg-gold" />
          </div>

          <h2 className="font-montserrat font-bold text-4xl md:text-7xl text-warmWhite tracking-widest mb-4">
            {data.title}
          </h2>

          <h3 className="font-montserrat text-xl md:text-2xl text-goldLight font-light tracking-wide mb-6">
            {data.subtitle}
          </h3>

          <p className="font-montserrat text-base md:text-lg text-warmWhite/80 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
            {data.description}
          </p>
        </motion.div>
      </div>
    </section>);

}
export function Pillars() {
  return (
    <div id="pilares">
      {pillarsData.map((pillar, index) =>
      <PillarSection key={pillar.id} data={pillar} index={index} />
      )}
    </div>);

}