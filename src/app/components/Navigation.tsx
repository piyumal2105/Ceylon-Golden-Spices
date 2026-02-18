import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import Image01 from "../components/assets/Global/logo01.jpeg"
import Image02 from "../components/assets/Global/logo02.jpeg"

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Products', value: 'products' },
    { label: 'Heritage & Quality', value: 'heritage' },
    { label: 'Contact', value: 'contact' }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform border-2 border-[#D4AF37]">
              <img src={Image01} alt="Ceylon Golden Spices Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-[#7B3F00] whitespace-nowrap">Ceylon Golden Spices</h1>
              <p className="text-[10px] md:text-xs text-[#2D5016]">by Buddhi Product</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavigate(item.value)}
                className={`relative text-sm font-medium transition-colors ${currentPage === item.value
                  ? 'text-[#D4AF37]'
                  : 'text-[#7B3F00] hover:text-[#D4AF37]'
                  }`}
              >
                {item.label}
                {currentPage === item.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]"
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-6 py-2 rounded-full transition-all hover:scale-105 shadow-md"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#7B3F00] hover:bg-[#FFF8E7] rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavigate(item.value)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${currentPage === item.value
                    ? 'bg-[#D4AF37] text-white'
                    : 'text-[#7B3F00] hover:bg-[#FFF8E7]'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('contact')}
                className="block w-full bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-4 py-3 rounded-lg transition-colors text-center"
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
