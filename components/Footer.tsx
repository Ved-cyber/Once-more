import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            
            {/* Brand */}
            <div className="max-w-sm">
                <Logo className="h-10 mb-6 justify-start" />
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    ONCE MORE is dedicated to men's wellness through the power of nature. 
                    Reclaim your vitality with our premium, time-tested formulations.
                </p>
                <div className="flex gap-4">
                    {/* Social Placeholders */}
                    <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors cursor-pointer text-neutral-400">FB</div>
                    <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors cursor-pointer text-neutral-400">IG</div>
                    <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors cursor-pointer text-neutral-400">X</div>
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-16">
                <div>
                    <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explore</h5>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-neutral-500 hover:text-[#D4AF37] text-sm transition-colors">Shop</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-[#D4AF37] text-sm transition-colors">About Us</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-[#D4AF37] text-sm transition-colors">Science</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-[#D4AF37] text-sm transition-colors">Reviews</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Support</h5>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-neutral-500 hover:text-[#D4AF37] text-sm transition-colors">FAQ</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-[#D4AF37] text-sm transition-colors">Contact</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-[#D4AF37] text-sm transition-colors">Shipping</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-[#D4AF37] text-sm transition-colors">Returns</a></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-neutral-900 pt-10 text-center md:text-left">
            <p className="text-[10px] text-neutral-600 leading-relaxed mb-4">
                *These statements have not been evaluated by the Food and Drug Administration. 
                This product is not intended to diagnose, treat, cure, or prevent any disease. 
                Results may vary. Consult your physician before starting any new supplement regimen.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-500 uppercase tracking-wider">
                <p>&copy; {new Date().getFullYear()} ONCE MORE Natural Herbs. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;