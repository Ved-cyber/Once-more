import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Ingredients from './components/Ingredients';
import UsageSection from './components/UsageSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Ingredients />
        <UsageSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;