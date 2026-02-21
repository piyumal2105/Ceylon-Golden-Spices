import { Facebook, Linkedin, Instagram, Youtube, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

import Image01 from "../components/assets/Global/logo01.jpeg"
import Image02 from "../components/assets/Global/logo02.jpeg"

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20">
      {/* Decorative Wave Separator */}
      <div className="w-full h-4 bg-gradient-to-r from-[#D4AF37] via-[#C09F2F] to-[#D4AF37]"></div>

      {/* ── Compact Dual Logo Bar ── */}
      <div className="bg-[#0A2647] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex items-center justify-center gap-10 md:gap-20">
            <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border border-[#D4AF37]/30 overflow-hidden flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                <img src={Image01} alt="Ceylon Golden Spices" className="w-full h-full object-contain" />
              </div>
              <div className="text-center">
                <p className="text-white text-xs md:text-sm font-semibold leading-tight">Ceylon Golden Spices</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 select-none">
              <div className="w-10 h-px bg-[#D4AF37]/40" />
              <span className="text-[#D4AF37] text-sm font-light">&amp;</span>
              <div className="w-10 h-px bg-[#D4AF37]/40" />
            </div>

            {/* Buddhi Product */}
            <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#1B4332] border border-[#D4AF37]/30 overflow-hidden flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                <img src={Image02} alt="Buddhi Product" className="w-full h-full object-contain" />
              </div>
              <div className="text-center">
                <p className="text-white text-xs md:text-sm font-semibold leading-tight">Buddhi Product</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Main Footer Content ── */}
      <div className="bg-[#0A2647] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Column 1 - Brand & About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex-shrink-0">
                  <img src={Image01} alt="Ceylon Golden Spices" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#D4AF37]">Ceylon Golden Spices</h3>
                  <p className="text-[10px] md:text-xs text-gray-300">by Buddhi Product</p>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-300 mb-4 leading-relaxed text-justify">
                Nature's Gold from Sri Lanka. Authentic Ceylon spices for discerning global buyers since ancient times.
              </p>
              <div className="flex items-center gap-3">
                {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all group"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-[#D4AF37] mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Products', 'Heritage & Quality', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        onNavigate(item.toLowerCase().replace(' & ', '-').replace(/ /g, '-'));
                        scrollToTop();
                      }}
                      className="text-gray-300 hover:text-[#D4AF37] transition-colors text-xs md:text-sm flex items-center gap-2 group"
                    >
                      <span className="text-[#D4AF37]">►</span>
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => { onNavigate('contact'); scrollToTop(); }}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors text-xs md:text-sm flex items-center gap-2 group"
                  >
                    <span className="text-[#D4AF37]">►</span>
                    <span className="group-hover:translate-x-1 transition-transform">Export Inquiry</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3 - Products */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-[#D4AF37] mb-4">Our Products</h4>
              <ul className="space-y-2">
                {[
                  'Ceylon Golden Spices',
                  'Ceylon Golden Herbal',
                  'Pure Ceylon Tea',
                  'Dehydrated Fruits',
                  'Ceylon Cashew',
                  'Bulk Products',
                  'Value Added Products',
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => { onNavigate('products'); scrollToTop(); }}
                      className="text-gray-300 hover:text-[#D4AF37] transition-colors text-xs md:text-sm hover:translate-x-1 transition-transform"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-[#D4AF37] mb-4">Get In Touch</h4>
              <div className="space-y-4 text-xs md:text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-white mb-1">Head Office:</p>
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <p className="text-justify">
                      Buddhi Product, Imperial Spices (Pvt) Ltd<br />
                      121 A, Biyagama Road, Kelaniya, Sri Lanka
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Factory:</p>
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <p className="text-justify">151, Biyagama Road, Kelaniya, Sri Lanka</p>
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    <a href="mailto:info@ceylongoldenspices.com" className="hover:text-[#D4AF37] transition-colors break-all">
                      info@ceylongoldenspices.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <a href="tel:+94112904000" className="hover:text-[#D4AF37] transition-colors">+94 11 290 4000</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <a href="tel:+94714893350" className="hover:text-[#D4AF37] transition-colors">+94 71 489 3350</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="bg-[#081A2E] text-gray-400 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 text-xs md:text-sm text-center md:text-left">
              <span>{currentYear} © BUDDHI PRODUCT | CEYLON GOLDEN SPICES. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm">
              {[
                { label: 'Privacy Policy', page: 'privacy-policy' },
                { label: 'Terms of Service', page: 'terms-of-service' },
                { label: 'Cookie Policy', page: 'cookie-policy' },
              ].map(({ label, page }, i, arr) => (
                <>
                  <button
                    key={page}
                    onClick={() => { onNavigate(page); scrollToTop(); }}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {label}
                  </button>
                  {i < arr.length - 1 && <span className="hidden sm:inline">|</span>}
                </>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs md:text-sm">
              <span>CREATED WITH</span>
              <span className="text-red-500">❤️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-24 right-4 md:right-6 w-11 h-11 md:w-12 md:h-12 bg-[#D4AF37] hover:bg-[#C09F2F] rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-40"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </motion.button>
      )}
    </footer>
  );
}