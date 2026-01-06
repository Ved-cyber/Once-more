import React from 'react';
import Button from './Button';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background with abstract dark texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 via-black to-black"></div>
        {/* Cinematic shadow overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        <img 
            src="https://images.unsplash.com/photo-1505521216430-8b73b2067df0?q=80&w=2000&auto=format&fit=crop"
            alt="Abstract masculine power"
            className="w-full h-full object-cover opacity-20 grayscale"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <div className="animate-fade-in-up mb-8 flex flex-col items-center">
           
           {/* Logo in Hero */}
           <div className="mb-8 scale-150 transform">
              <Logo className="h-24" animated={true} />
           </div>
           
           <h2 className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-4">
            Premium Herbal Performance
           </h2>
           
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
             Reignite <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#Fbf5b7]">Desire</span>
           </h1>
           
           <p className="max-w-xl mx-auto text-neutral-400 text-lg md:text-xl font-light mb-10 leading-relaxed">
             A potent fusion of 36 Indian & African super herbs designed for the modern man. 
             Experience strength, stamina, and confidence—renewed.
           </p>

           <div className="flex flex-col md:flex-row gap-6 justify-center">
             <Button className="md:text-lg px-10 py-4">
               Awaken Your Power
             </Button>
             <Button variant="outline" className="md:text-lg px-10 py-4">
               Learn The Science
             </Button>
           </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-[#D4AF37]/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;