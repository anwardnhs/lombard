import { useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import lombardBg from "../assets/lombardsk.jpg";

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = useCallback((e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section 
      className="relative min-h-screen text-white overflow-hidden font-poppins bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${lombardBg})` }}
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0 bg-black/65" aria-hidden="true" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32 min-h-screen flex flex-col justify-center items-center text-center">
        
        <div className="max-w-6xl">
          
          {/* Establishment Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={animationVariants}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <span 
              className="inline-block text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white font-semibold border-b border-[#c7d3bc]/30 hover:border-[#c7d3bc] transition-all duration-300 cursor-default pb-0.5"
              role="text"
            >
              Established 1954 — Lagos, Nigeria
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={animationVariants}
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[1.05] tracking-tight text-white mb-8 sm:mb-10"
          >
            <span className="block">Empowering Africa’s</span>
            <span className="block font-semibold">Financial Future</span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.35}
            variants={animationVariants}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed font-light"
          >
          Harnessing decades of expertise, we provide innovative financial solutions that drive growth and prosperity across Africa.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.55}
            variants={animationVariants}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-center"
          >
            <a
              href="#businesses"
              onClick={(e) => scrollToSection(e, '#businesses')}
              className="btn-primary-dark group"
              aria-label="View our business divisions"
            >
              Explore Our Businesses
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#investors"
              onClick={(e) => scrollToSection(e, '#investors')}
              className="btn-secondary-dark group"
              aria-label="Access investor relations information"
            >
              Investor Relations
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
