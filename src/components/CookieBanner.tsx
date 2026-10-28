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
          className="cookie-notice fixed bottom-4 left-4 right-4 md:left-auto md:w-[460px] z-[100]"
        >
          <div className="container mx-auto max-w-6xl bg-[#0F120F] text-[#F9F9F7] p-6 rounded-sm shadow-xl flex flex-col items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-sans text-xl mb-2">We value your privacy</h3>
              <p className="text-sm text-[#F9F9F7]/70 leading-relaxed font-light">
                We store your preference on this device. Read our <a href="/cookies" className="underline hover:text-white transition-colors">Cookie Policy</a> for information about cookies.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="flex-1 md:flex-none px-6 py-3 rounded-sm border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 md:flex-none px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
