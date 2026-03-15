import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <motion.nav
        initial={{
          y: -100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${scrolled ? 'bg-richBlack/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a
            href="#"
            className="text-xl tracking-widest text-warmWhite hover:text-gold transition-colors duration-300 font-montserrat font-bold">
            
            CRECEELITE
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#pilares"
              className="font-montserrat text-sm tracking-wide text-warmWhite hover:text-gold transition-colors duration-300">
              
              Los 5 Pilares
            </a>
            <a
              href="#guia"
              className="font-montserrat text-sm tracking-wide text-warmWhite hover:text-gold transition-colors duration-300">
              
              Guía Gratuita
            </a>
            <a
              href="#libro"
              className="font-montserrat text-sm tracking-wide text-warmWhite hover:text-gold transition-colors duration-300">
              
              Libro
            </a>
          </div>

          <button
            className="md:hidden text-warmWhite hover:text-gold transition-colors p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
            
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.3
          }}
          className="fixed inset-0 z-40 bg-richBlack/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden">
          
            <a
            href="#pilares"
            onClick={() => setIsOpen(false)}
            className="font-montserrat text-2xl tracking-wide text-warmWhite hover:text-gold transition-colors py-4 w-full text-center">
            
              Los 5 Pilares
            </a>
            <a
            href="#guia"
            onClick={() => setIsOpen(false)}
            className="font-montserrat text-2xl tracking-wide text-warmWhite hover:text-gold transition-colors py-4 w-full text-center">
            
              Guía Gratuita
            </a>
            <a
            href="#libro"
            onClick={() => setIsOpen(false)}
            className="font-montserrat text-2xl tracking-wide text-warmWhite hover:text-gold transition-colors py-4 w-full text-center">
            
              Libro
            </a>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}