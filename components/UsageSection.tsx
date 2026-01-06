import React from 'react';
import Logo from './Logo';

const UsageSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-neutral-800 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Header */}
        <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                How To Use
            </h2>
            <div className="flex justify-center mb-2">
                <Logo className="h-10" />
            </div>
            <p className="text-neutral-400 uppercase tracking-[0.3em] text-xs">power to go again</p>
        </div>

        {/* Steps Flowchart */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 max-w-6xl mx-auto">
            
            {/* Step 1 */}
            <div className="relative group flex flex-col items-center">
                <div className="relative w-64 h-72 bg-white rounded-3xl p-6 flex flex-col items-center justify-between shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center border-4 border-[#0a0a0a] z-20">
                        <span className="text-xl font-black text-black">1</span>
                    </div>
                    <div className="mt-6 flex-1 flex items-center justify-center">
                        <img 
                            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=300&auto=format&fit=crop" 
                            alt="Bottle" 
                            className="h-32 object-contain filter contrast-125" 
                        />
                    </div>
                    <div className="w-full text-center border-t border-neutral-100 pt-4">
                         <h3 className="text-black font-black uppercase text-xl">1 Scoop</h3>
                         <div className="flex items-center justify-center gap-1 mt-1">
                             <span className="text-[10px] font-bold text-black uppercase bg-neutral-200 px-2 py-0.5 rounded">Once More</span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex flex-col items-center justify-center w-32 -mt-12">
                 <svg viewBox="0 0 100 50" className="w-full h-auto fill-none stroke-[#FFC107] stroke-[3px] stroke-linecap-round stroke-linejoin-round drop-shadow-[0_0_8px_rgba(255,193,7,0.5)]">
                    <path d="M 10 40 Q 50 0 90 20" />
                    <path d="M 80 15 L 90 20 L 85 30" />
                 </svg>
            </div>

            {/* Step 2 */}
            <div className="relative group flex flex-col items-center">
                <div className="relative w-64 h-72 bg-white rounded-3xl p-6 flex flex-col items-center justify-between shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-2 transition-transform duration-300">
                     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-4 border-[#0a0a0a] z-20 shadow-lg">
                        <span className="text-xl font-black text-black">2</span>
                    </div>
                    <div className="mt-6 flex-1 flex items-center justify-center">
                        {/* Glass of Water Representation */}
                        <div className="w-16 h-24 border-2 border-blue-200 rounded-b-lg relative overflow-hidden bg-blue-50/30">
                            <div className="absolute bottom-0 w-full h-3/4 bg-blue-200/50"></div>
                            <div className="absolute top-2 w-full h-1 bg-white/50 blur-[1px]"></div>
                        </div>
                    </div>
                    <div className="w-full text-center border-t border-neutral-100 pt-4">
                         <h3 className="text-black font-black uppercase text-lg leading-tight">200ML OF<br/>Water or Milk</h3>
                    </div>
                </div>
            </div>

            {/* Arrow 2 (Curved Down) */}
            <div className="hidden md:flex flex-col items-center justify-center w-32 mt-12">
                 <svg viewBox="0 0 100 50" className="w-full h-auto fill-none stroke-[#FFC107] stroke-[3px] stroke-linecap-round stroke-linejoin-round drop-shadow-[0_0_8px_rgba(255,193,7,0.5)] transform scale-y-[-1]">
                    <path d="M 10 40 Q 50 0 90 20" />
                    <path d="M 80 15 L 90 20 L 85 30" />
                 </svg>
            </div>

            {/* Step 3 */}
             <div className="relative group flex flex-col items-center">
                <div className="relative w-64 h-72 bg-white rounded-3xl p-6 flex flex-col items-center justify-between shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-2 transition-transform duration-300">
                     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-4 border-[#0a0a0a] z-20 shadow-lg">
                        <span className="text-xl font-black text-black">3</span>
                    </div>
                    <div className="mt-6 flex-1 flex items-center justify-center">
                         {/* Ready Drink Representation */}
                         <div className="w-16 h-24 border-2 border-amber-800/20 rounded-b-lg relative overflow-hidden bg-amber-50">
                            <div className="absolute bottom-0 w-full h-5/6 bg-[#8B4513]/80"></div>
                        </div>
                    </div>
                    <div className="w-full text-center border-t border-neutral-100 pt-4">
                         <h3 className="text-[#DC2626] font-black uppercase text-xl">Ready To Drink</h3>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default UsageSection;