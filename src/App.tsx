import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { FreeGuide } from './components/FreeGuide';
import { BookSection } from './components/BookSection';
import { WeeklyGuides } from './components/WeeklyGuides';
import { Mission } from './components/Mission';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="bg-richBlack min-h-screen text-warmWhite selection:bg-gold selection:text-richBlack font-montserrat">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <FreeGuide />
        <BookSection />
        <WeeklyGuides />
        <Mission />
        <FinalCTA />
      </main>
      <Footer />
    </div>);

}