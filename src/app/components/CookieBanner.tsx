import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onNavigate: (page: string) => void;
}

export function CookieBanner({ onNavigate }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  const handleManagePreferences = () => {
    onNavigate('cookie-policy');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-4 border-[#D4AF37] shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Icon and Content */}
              <div className="flex items-start gap-3 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C09F2F] rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-[#7B3F00] mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed text-justify">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or 
                    learn more in our{' '}
                    <button
                      onClick={handleManagePreferences}
                      className="text-[#D4AF37] hover:underline font-semibold"
                    >
                      Cookie Policy
                    </button>
                    {' '}and{' '}
                    <button
                      onClick={() => onNavigate('privacy-policy')}
                      className="text-[#D4AF37] hover:underline font-semibold"
                    >
                      Privacy Policy
                    </button>
                    .
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
                <button
                  onClick={handleAccept}
                  className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg whitespace-nowrap text-sm"
                >
                  Accept All
                </button>
                <button
                  onClick={handleReject}
                  className="border-2 border-[#7B3F00] text-[#7B3F00] hover:bg-[#7B3F00] hover:text-white px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap text-sm"
                >
                  Reject
                </button>
                <button
                  onClick={handleManagePreferences}
                  className="text-[#7B3F00] hover:text-[#D4AF37] px-4 py-3 font-semibold transition-colors whitespace-nowrap text-sm underline"
                >
                  Manage Preferences
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowBanner(false)}
                className="absolute top-2 right-2 md:relative md:top-0 md:right-0 p-2 text-gray-400 hover:text-[#7B3F00] transition-colors"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Decorative Spice Icons */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#C09F2F] to-[#D4AF37] opacity-50"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
