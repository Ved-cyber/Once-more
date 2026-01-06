import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-[#D4AF37]/30 py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="hover:scale-105 transition-transform duration-300">
          <Logo className={isScrolled ? "h-8 scale-75 origin-left" : "h-12"} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-[#D4AF37] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline" className="px-6 py-2 text-xs">
            Shop Now
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#D4AF37]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-[#D4AF37]/20 p-6 flex flex-col gap-6 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#D4AF37]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
            Reignite Performance
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;