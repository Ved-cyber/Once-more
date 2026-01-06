import React from 'react';
import { Leaf, Globe, FlaskConical } from 'lucide-react';

const ingredients = [
  {
    name: "Ashwagandha",
    origin: "India",
    desc: "The horse-power herb. Reduces stress and boosts testosterone levels naturally.",
    accent: "border-l-blue-500"
  },
  {
    name: "Mondia Whitei",
    origin: "Africa",
    desc: "Renowned African root known for enhancing stamina and desire.",
    accent: "border-l-red-500"
  },
  {
    name: "Safed Musli",
    origin: "India",
    desc: "A rare herb used in Ayurveda for vitality and immune strength.",
    accent: "border-l-green-500"
  },
  {
    name: "Shilajit",
    origin: "Himalayas",
    desc: "Mineral-rich resin that fuels cellular energy and recovery.",
    accent: "border-l-[#D4AF37]"
  }
];

const Ingredients: React.FC = () => {
  return (
    <section id="ingredients" className="py-24 bg-black relative">
       {/* Section Header */}
       <div className="container mx-auto px-6 mb-16 text-center">
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                Pure & Potent
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Global Roots. <br/> <span className="font-serif italic text-neutral-400">Modern Performance.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-500">
                We've traversed continents to bring you a blend that history has trusted for centuries.
            </p>
       </div>

       {/* Icons Row */}
       <div className="container mx-auto px-6 mb-20">
           <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                <div className="flex flex-col items-center gap-4 group">
                    <div className="p-4 rounded-full border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">
                        <Leaf size={32} className="text-[#D4AF37]" />
                    </div>
                    <span className="uppercase text-xs tracking-widest text-neutral-400">Natural</span>
                </div>
                <div className="flex flex-col items-center gap-4 group">
                    <div className="p-4 rounded-full border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">
                        <Globe size={32} className="text-[#D4AF37]" />
                    </div>
                    <span className="uppercase text-xs tracking-widest text-neutral-400">Global Sourcing</span>
                </div>
                <div className="flex flex-col items-center gap-4 group">
                    <div className="p-4 rounded-full border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">
                        <FlaskConical size={32} className="text-[#D4AF37]" />
                    </div>
                    <span className="uppercase text-xs tracking-widest text-neutral-400">Lab Tested</span>
                </div>
           </div>
       </div>

       {/* Ingredient Cards */}
       <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ingredients.map((item, idx) => (
                    <div key={idx} className={`bg-neutral-900/50 p-8 border-l-2 ${item.accent} hover:bg-neutral-900 transition-all hover:translate-y-[-5px]`}>
                        <h4 className="text-xl font-bold text-white mb-1">{item.name}</h4>
                        <p className="text-[#D4AF37] text-xs uppercase tracking-wider mb-4">{item.origin}</p>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <p className="text-neutral-500 text-sm italic mb-6">
                    + 32 more revitalizing herbs blended for maximum absorption.
                </p>
            </div>
       </div>
    </section>
  );
};

export default Ingredients;