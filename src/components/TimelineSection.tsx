import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import impactBg from "../assets/solar.jpg"; 

// Simple Icons for visual clarity (Clarity over Creativity)
const CapitalIcon = () => (
  <svg className="w-6 h-6 text-[#4A5D43]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CommunityIcon = () => (
  <svg className="w-6 h-6 text-[#4A5D43]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ImpactSection = () => {
  const containerRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax: Moderate movement for realism without motion sickness
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    prefersReducedMotion ? ["0%", "0%"] : ["-5%", "5%"]
  );

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-[#F9F9F7] flex items-center py-20 lg:py-32 overflow-hidden font-poppins text-slate-900"
      aria-labelledby="impact-heading"
    >
      {/* Background Noise - Subtle Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={animationVariants}
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Top Label - Darker Green for Contrast */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-[#4A5D43]" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#4A5D43] font-bold">
                ESG Strategy
              </span>
            </div>

            {/* Headline - Clear hierarchy */}
            <h2 
              id="impact-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-slate-900"
            >
              Sustainable Finance,<br />
              <span className="text-[#5f6b56] font-serif italic">Lasting Impact.</span>
            </h2>

            {/* Lead Paragraph - High Readability */}
            <p className="text-lg text-slate-700 leading-relaxed mb-10 max-w-xl">
              At Lombard, we integrate ESG principles into every facet of our operations, ensuring that our financial solutions not only drive growth but also foster environmental stewardship and social responsibility across Africa.  
            </p>

            {/* Feature Grid - Hick's Law: Visual grouping with Icons */}
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E8EAE6] flex items-center justify-center shrink-0">
                  <CapitalIcon />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">
                    Responsible Capital
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Rigorous ESG risk assessment integrated into all corporate lending.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E8EAE6] flex items-center justify-center shrink-0">
                  <CommunityIcon />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">
                    Community Growth
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Financing initiatives that empower local communities and promote sustainable development.                  
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Row - Distinct Visual Container */}
            <div className="bg-white border border-black/5 rounded-lg p-6 flex gap-10 mb-10 shadow-sm">
               <div>
                  <div className="text-3xl font-bold text-slate-900 tabular-nums">AAA</div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mt-1">MSCI Rating</div>
               </div>
               <div className="w-px bg-black/10" />
               <div>
                  <div className="text-3xl font-bold text-slate-900 tabular-nums">2045</div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mt-1">Net Zero Goal</div>
               </div>
            </div>

            {/* Primary CTA - Fitts' Law: Large Target */}
            <a 
              href="/impact-report"
              className="inline-flex items-center justify-center h-14 px-8 bg-[#1a1f1a] text-white font-medium text-sm tracking-wide uppercase hover:bg-[#2C332C] transition-colors rounded-md focus:ring-4 focus:ring-[#c7d3bc]/50 outline-none"
            >
              Read 2025 Report
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right Column: Visual */}
          <div className="relative h-[600px] lg:h-[750px] w-full rounded-2xl overflow-hidden bg-[#E8EAE6]">
            <motion.div 
              style={{ y }}
              className="absolute inset-0 w-full h-[115%]"
            >
              <img 
                src={impactBg} 
                alt="Solar energy infrastructure project in Lekki"
                loading="lazy"
                onLoad={handleImageLoad}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {/* Overlays for text legibility if needed, keeping it light for clarity */}
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactSection;