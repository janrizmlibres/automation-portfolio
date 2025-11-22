import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden bg-zinc-950 text-zinc-100 selection:bg-teal-400 selection:text-zinc-950">
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <Header />
        <ProfileSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
