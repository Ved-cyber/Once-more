import React from 'react';
import Button from './Button';
import { Star, ShieldCheck, Zap } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  return (
    <section id="product" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[#D4AF37]/10 bg-gradient-to-b from-black/0 via-black/20 to-black/0 transform skew-x-12 origin-top-right pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Product Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            {/* Glow effect behind bottle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#D4AF37] rounded-full filter blur-[120px] opacity-15"></div>
            
            {/* Bottle Image */}
            <div className="relative group perspective-1000 z-10">
                <img 
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop" 
                    alt="ONCE MORE Premium Herbal Supplement Bottle" 
                    className="w-full max-w-sm drop-shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:rotate-2 mask-image-gradient"
                />
                
                {/* Floating Elements (Badges) */}
                <div className="absolute -right-4 top-12 bg-black/80 backdrop-blur-md border border-[#D4AF37] p-3 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] animate-bounce-slow">
                    <ShieldCheck className="text-[#D4AF37]" size={24} />
                </div>
                <div className="absolute -left-4 bottom-24 bg-black/80 backdrop-blur-md border border-[#D4AF37] p-3 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] animate-bounce-delayed">
                    <Zap className="text-[#D4AF37]" size={24} />
                </div>
            </div>
          </div>

          {/* Product Text Side */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="flex items-center gap-2 mb-4">
                <Star className="text-[#D4AF37] fill-[#D4AF37]" size={16} />
                <Star className="text-[#D4AF37] fill-[#D4AF37]" size={16} />
                <Star className="text-[#D4AF37] fill-[#D4AF37]" size={16} />
                <Star className="text-[#D4AF37] fill-[#D4AF37]" size={16} />
                <Star className="text-[#D4AF37] fill-[#D4AF37]" size={16} />
                <span className="text-neutral-500 text-sm ml-2">Elite Rated</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Power of <span className="text-gold-gradient">36 Super Herbs</span>
            </h2>

            <p className="text-neutral-400 text-lg mb-8 leading-relaxed font-light border-l-2 border-[#D4AF37] pl-6">
                Designed for the man who demands more. Our proprietary blend fuses ancient Ayurvedic wisdom with potent African roots. 
                <strong className="text-white font-medium block mt-2">No fillers. No compromise. Just pure performance.</strong>
            </p>

            <ul className="space-y-4 mb-10">
                {["Only for Men", "100% Natural Ingredients", "Discreet Shipping", "Fast Acting Formula"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-neutral-300">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button>
                    Get Yours Today
                </Button>
                <div className="flex items-center gap-2 px-6 py-3 border border-neutral-800 rounded">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-neutral-400">In Stock - Ready to Ship</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;