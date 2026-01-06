import React from 'react';
import Button from './Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden flex items-center justify-center">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-8">
            Don't Just Live.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8a6e26]">Perform.</span>
        </h2>
        <p className="text-neutral-400 text-lg mb-12">
            Join thousands of men who have reclaimed their confidence. <br/>
            Discreet shipping. Satisfaction guaranteed.
        </p>
        <Button className="text-lg px-12 py-5 shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-pulse-gold">
            Feel It Once More
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;