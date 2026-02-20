import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onNavigate: (page: string) => void;
}

// In-memory consent state (persists during session)
// For production environments with localStorage support, swap this for localStorage
let sessionConsentGiven = false;

export function CookieBanner({ onNavigate }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only show banner if consent hasn't been given this session
    if (!sessionConsentGiven) {
      // Try localStorage first (works in real browser environments)
      let storedConsent: string | null = null;
      try {
        storedConsent = localStorage.getItem('cgs_cookieConsent');
      } catch {
        // localStorage not available (e.g., artifact/iframe environment)
      }

      if (!storedConsent) {
        // Show banner after a short delay for better UX
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      } else {
        sessionConsentGiven = true;
      }
    }
  }, []);

  const saveConsent = (value: 'accepted' | 'rejected') => {
    sessionConsentGiven = true;
    try {
      localStorage.setItem('cgs_cookieConsent', value);
    } catch {
      // localStorage not available — session-only memory is already set above
    }
    setShowBanner(false);
  };

  const handleAccept = () => saveConsent('accepted');
  const handleReject = () => saveConsent('rejected');

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
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-4 border-[#D4AF37] shadow-2xl"
          role="dialog"
          aria-label="Cookie consent banner"
          aria-modal="false"
        >
          {/* Spice-pattern top accent bar */}
          <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-[#C09F2F] to-[#D4AF37]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 relative">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">

              {/* Icon + Text */}
              <div className="flex items-start gap-3 flex-1 pr-6 md:pr-0">
                <div className="w-11 h-11 bg-gradient-to-br from-[#D4AF37] to-[#C09F2F] rounded-full flex items-center justify-center flex-shrink-0 shadow-md mt-0.5">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-bold text-[#7B3F00] mb-1">
                    We Value Your Privacy
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed text-justify">
                    Ceylon Golden Spices uses cookies to enhance your browsing experience, analyse site traffic, and
                    personalise content. By clicking&nbsp;<strong>"Accept All"</strong>, you consent to our use of cookies.
                    Learn more in our{' '}
                    <button
                      onClick={handleManagePreferences}
                      className="text-[#D4AF37] hover:underline font-semibold"
                    >
                      Cookie Policy
                    </button>
                    {' '}and{' '}
                    <button
                      onClick={() => { onNavigate('privacy-policy'); setShowBanner(false); }}
                      className="text-[#D4AF37] hover:underline font-semibold"
                    >
                      Privacy Policy
                    </button>
                    .
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto flex-shrink-0">
                <button
                  onClick={handleAccept}
                  className="bg-[#D4AF37] hover:bg-[#C09F2F] active:scale-95 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md whitespace-nowrap text-sm"
                >
                  Accept All
                </button>
                <button
                  onClick={handleReject}
                  className="border-2 border-[#7B3F00] text-[#7B3F00] hover:bg-[#7B3F00] hover:text-white active:scale-95 px-6 py-2.5 rounded-full font-semibold transition-all whitespace-nowrap text-sm"
                >
                  Reject
                </button>
                <button
                  onClick={handleManagePreferences}
                  className="text-[#7B3F00] hover:text-[#D4AF37] px-3 py-2.5 font-semibold transition-colors whitespace-nowrap text-sm underline decoration-dotted"
                >
                  Manage Preferences
                </button>
              </div>
            </div>
          </div>

          {/* Close / dismiss (does NOT save consent — banner reappears next load) */}
          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-[#7B3F00] transition-colors rounded-full hover:bg-gray-100"
            aria-label="Dismiss cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}