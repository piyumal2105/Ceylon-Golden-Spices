import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
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
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=100090809895923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all group"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Pinterest */}
                <a
                  href="https://www.pinterest.com/Wddb1234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all group"
                  aria-label="Pinterest"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/buddhiproduct/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all group"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@buddhiproduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all group"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
                  </svg>
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

                {/* Address */}
                <div>
                  <p className="font-semibold text-white mb-1">Address:</p>
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <p className="text-justify">
                      Buddhi Product — Pure Ceylon Excellence<br />
                      392/A, Jayamawatha, Andiambalama,<br />
                      Sri Lanka. P.O.C. 11558
                    </p>
                  </div>
                </div>

                {/* Contact details */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <a
                      href="mailto:info@ceylongoldenspices.com"
                      className="hover:text-[#D4AF37] transition-colors break-all"
                    >
                      info@ceylongoldenspices.com
                    </a>
                  </div>

                  {/* Hotline — not WhatsApp */}
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <a
                      href="tel:+94715655855"
                      className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                    >
                      +94 71 565 5855
                      <span className="text-[10px] bg-blue-700 text-white px-1.5 py-0.5 rounded-full font-semibold">
                        Hotline
                      </span>
                    </a>
                  </div>

                  {/* WhatsApp number */}
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <a
                      href="https://wa.me/94704342820"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                    >
                      +94 70 434 2820
                      <span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded-full font-semibold">
                        WhatsApp
                      </span>
                    </a>
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