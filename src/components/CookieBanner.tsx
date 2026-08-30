import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lombard_cookie_consent');
    if (!consent) {
      // Delay showing it slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('lombard_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('lombard_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="container mx-auto max-w-6xl bg-[#0F120F] text-[#F9F9F7] p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-sans text-xl mb-2">We value your privacy</h3>
              <p className="text-sm text-[#F9F9F7]/70 leading-relaxed font-light">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <a href="/cookies" className="underline hover:text-white transition-colors">Cookie Policy</a> for more information.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="flex-1 md:flex-none px-6 py-3 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 md:flex-none px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
