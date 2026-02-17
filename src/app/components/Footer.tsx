import { Facebook, Linkedin, Instagram, Youtube, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

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

  // Spice icons for decorative elements
  const SpiceIcon = ({ emoji, className = "" }: { emoji: string; className?: string }) => (
    <div className={`text-[#D4AF37] ${className}`}>{emoji}</div>
  );

  return (
    <footer className="relative mt-20">
      {/* Decorative Wave Separator */}
      <div className="w-full h-4 bg-gradient-to-r from-[#D4AF37] via-[#C09F2F] to-[#D4AF37]"></div>

      {/* Layer 1 - Traditional Art Section with Spice Icons */}
      <div className="bg-[#0A2647] relative overflow-hidden">
        {/* Spice-themed Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1621958623183-15aba9c3e68a?w=200')`,
            backgroundSize: '300px',
            backgroundRepeat: 'repeat'
          }}
        ></div>

        {/* Traditional Pattern Border */}
        <div className="h-40 flex items-center justify-center relative">
          {/* Background Spice Icons Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="flex items-center justify-around h-full px-8 flex-wrap">
              {[...Array(15)].map((_, i) => {
                const spiceEmojis = ['🌶️', '🧄', '🫚', '🌿', '🍃'];
                return (
                  <div key={i} className="text-[#D4AF37] text-3xl">
                    {spiceEmojis[i % spiceEmojis.length]}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Decorative Elements */}
          <div className="relative z-10 flex items-center justify-center gap-8 md:gap-16 flex-wrap px-4">
            {/* Left Decorative - Spice Icons */}
            <div className="hidden md:flex items-center gap-3">
              <SpiceIcon emoji="🌶️" className="text-2xl md:text-3xl" />
              <SpiceIcon emoji="🫚" className="text-xl md:text-2xl" />
              <SpiceIcon emoji="🌿" className="text-3xl md:text-4xl" />
              <SpiceIcon emoji="🍃" className="text-xl md:text-2xl" />
            </div>

            {/* Center Logo Medallion */}
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#D4AF37] to-[#C09F2F] rounded-full flex items-center justify-center shadow-2xl border-4 border-[#2A4A5A]">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-1">🌿</div>
                  <div className="text-white text-[10px] md:text-xs font-bold">CEYLON</div>
                  <div className="text-white text-[10px] md:text-xs font-bold">GOLDEN</div>
                  <div className="text-white text-[10px] md:text-xs font-bold">SPICES</div>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-xl"></div>
            </div>

            {/* Right Decorative - Spice Icons */}
            <div className="hidden md:flex items-center gap-3">
              <SpiceIcon emoji="🍃" className="text-xl md:text-2xl" />
              <SpiceIcon emoji="🌿" className="text-3xl md:text-4xl" />
              <SpiceIcon emoji="🧄" className="text-xl md:text-2xl" />
              <SpiceIcon emoji="🌶️" className="text-2xl md:text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2 - Main Footer Content */}
      <div className="bg-[#0A2647] text-white relative">
        {/* Subtle spice icons in the background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1708441843795-38f34ca4b089?w=400')`,
            backgroundSize: '400px',
            backgroundRepeat: 'repeat'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - Brand & About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#C09F2F] rounded-full flex items-center justify-center">
                  <span className="text-xl">🌿</span>
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
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all group">
                  <Facebook className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] group-hover:text-white" />
                </a>
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all group">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] group-hover:text-white" />
                </a>
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all group">
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] group-hover:text-white" />
                </a>
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all group">
                  <Youtube className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] group-hover:text-white" />
                </a>
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
                    onClick={() => {
                      onNavigate('contact');
                      scrollToTop();
                    }}
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
                  'Value Added Products'
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        onNavigate('products');
                        scrollToTop();
                      }}
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
                    <p className="text-justify">Buddhi Product, Imperial Spices (Pvt) Ltd<br />121 A, Biyagama Road, Kelaniya, Sri Lanka</p>
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
                    <a href="mailto:sales@imperialspices.lk" className="hover:text-[#D4AF37] transition-colors break-all">
                      sales@imperialspices.lk
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <a href="tel:+94112904000" className="hover:text-[#D4AF37] transition-colors">
                      +94 11 290 4000
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <a href="tel:+94714893350" className="hover:text-[#D4AF37] transition-colors">
                      +94 71 489 3350
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3 - Bottom Bar */}
      <div className="bg-[#081A2E] text-gray-400 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 text-xs md:text-sm text-center md:text-left">
              <span className="text-[#D4AF37] text-base md:text-lg">🌿</span>
              <span>{currentYear} © BUDDHI PRODUCT | CEYLON GOLDEN SPICES. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm">
              <button
                onClick={() => {
                  onNavigate('privacy-policy');
                  scrollToTop();
                }}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Privacy Policy
              </button>
              <span className="hidden sm:inline">|</span>
              <button
                onClick={() => {
                  onNavigate('terms-of-service');
                  scrollToTop();
                }}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Terms of Service
              </button>
              <span className="hidden sm:inline">|</span>
              <button
                onClick={() => {
                  onNavigate('cookie-policy');
                  scrollToTop();
                }}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Cookie Policy
              </button>
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
