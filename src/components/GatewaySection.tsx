import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useCallback, useState } from "react";
import lombardt from "@/assets/lombardt.jpg";
import corporate from "@/assets/corporate.jpg";
import career from "@/assets/career.avif";

const GatewaySection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState<{[key: string]: boolean}>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleImageLoad = useCallback((id: string) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  }, []);

  const gateways = [
    {
      id: "investors",
      number: "01",
      title: "Investor Relations",
      desc: "Comprehensive shareholder data, financial reports, and market performance metrics.",
      link: "/investors",
      ariaLabel: "Access investor relations center - financial data and shareholder information",
      image: lombardt
    },
    {
      id: "corporate",
      number: "02",
      title: "Corporate Banking",
      desc: "Strategic financing solutions and advisory services for institutional clients.",
      link: "/businesses/commercial",
      ariaLabel: "Explore corporate banking solutions - institutional financing and advisory",
      image: corporate
    },
    {
      id: "careers",
      number: "03",
      title: "Join The Firm",
      desc: "Build your career at Africa's premier financial institution across 14 markets.",
      link: "/careers",
      ariaLabel: "View career opportunities at Lombard HoldCo across Africa",
      image: career
    }
  ];

  const handleCardClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (!prefersReducedMotion) {
      e.preventDefault();
      window.location.href = link;
    }
  }, [prefersReducedMotion]);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.7,
        delay: prefersReducedMotion ? 0 : 0.2 + (index * 0.15),
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section 
      className="relative bg-[#0F120F] py-24 sm:py-28 lg:py-32 border-t border-white/5 font-poppins overflow-hidden"
      aria-labelledby="gateway-heading"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Gradient orbs with subtle animation */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#c7d3bc] opacity-[0.025] blur-[120px] rounded-full"
          animate={!prefersReducedMotion ? {
            x: [0, 30, 0],
            y: [0, -20, 0],
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c7d3bc] opacity-[0.02] blur-[100px] rounded-full"
          animate={!prefersReducedMotion ? {
            x: [0, -40, 0],
            y: [0, 30, 0],
          } : {}}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px] relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16 sm:mb-20 lg:mb-24 max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 
            id="gateway-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.95] tracking-tight mb-6 sm:mb-8"
          >
            Partner with <br className="hidden sm:block" />
            <span className="inline-block">
              Lombard HoldCo<span className="text-[#c7d3bc]">.</span>
            </span>
          </h2>
          <p className="text-white/40 text-base sm:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed font-light">
            Direct access channels for our shareholders, institutional clients, and future leaders.
          </p>
        </motion.div>

        {/* Dynamic Cards with Enhanced Interactions */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-4"
          role="list"
          aria-label="Gateway options"
        >
          {gateways.map((item, idx) => {
            const isHovered = hoveredCard === item.id;
            const isOtherHovered = hoveredCard && hoveredCard !== item.id;
            
            return (
              <motion.div
                key={item.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                role="listitem"
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <a 
                  href={item.link}
                  onClick={(e) => handleCardClick(e, item.link)}
                  className={`group relative block h-[420px] sm:h-[470px] lg:h-[520px] w-full bg-[#151815] overflow-hidden border transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-[#c7d3bc] focus:ring-offset-4 focus:ring-offset-[#0F120F] ${
                    isOtherHovered 
                      ? 'border-white/5 opacity-60 scale-[0.98]' 
                      : 'border-white/10 hover:border-[#c7d3bc]/20 opacity-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:-translate-y-2 scale-100'
                  }`}
                  aria-label={item.ariaLabel}
                  style={{ 
                    transformOrigin: 'center',
                    transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                >
                  {/* Image with loading state */}
                  <div className="absolute inset-0">
                    {!imageLoaded[item.id] && (
                      <div className="absolute inset-0 bg-[#151815] animate-pulse" aria-hidden="true">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                      </div>
                    )}
                    <img
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      onLoad={() => handleImageLoad(item.id)}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                        imageLoaded[item.id] 
                          ? 'opacity-50 group-hover:opacity-70 group-hover:scale-105' 
                          : 'opacity-0'
                      }`}
                      loading="lazy"
                    />
                  </div>

                  {/* Dynamic gradient overlays */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 group-hover:from-black/40 group-hover:to-black/75 transition-all duration-700"
                    aria-hidden="true"
                  />
                  
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-[#c7d3bc]/0 via-[#c7d3bc]/0 to-[#c7d3bc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between z-10">
                    
                    {/* Top: Number Badge & Arrow */}
                    <div className="flex justify-between items-start">
                      {/* Animated number badge */}
                      <motion.div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#c7d3bc]/20 flex items-center justify-center backdrop-blur-sm bg-black/10 group-hover:border-[#c7d3bc]/60 group-hover:bg-[#c7d3bc]/10 transition-all duration-500"
                        whileHover={!prefersReducedMotion ? { scale: 1.1, rotate: 360 } : {}}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        aria-hidden="true"
                      >
                        <span className="text-[#c7d3bc] font-bold text-base sm:text-lg tabular-nums">
                          {item.number}
                        </span>
                      </motion.div>

                      {/* Arrow with rotation */}
                      <motion.div 
                        className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/5 group-hover:bg-[#c7d3bc] rounded-full transition-all duration-500 backdrop-blur-sm"
                        whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
                        aria-hidden="true"
                      >
                        <FaArrowRight 
                          className={`w-4 h-4 text-white group-hover:text-[#0F120F] transition-all duration-500 ${
                            prefersReducedMotion ? "" : "-rotate-45 group-hover:rotate-0"
                          }`}
                        />
                      </motion.div>
                    </div>

                    {/* Bottom: Text Content with stagger animation */}
                    <motion.div
                      initial={false}
                      animate={isHovered && !prefersReducedMotion ? {
                        y: [0, -5, 0]
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-serif text-white mb-3 sm:mb-4 group-hover:text-[#c7d3bc] transition-colors duration-500 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/60 group-hover:text-white/80 font-light leading-relaxed max-w-[90%] transition-colors duration-500">
                        {item.desc}
                      </p>
                    </motion.div>

                  </div>

                  {/* Bottom accent line with animation */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c7d3bc] via-[#c7d3bc]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                    aria-hidden="true"
                  />

                  {/* Subtle shine effect on hover */}
                  {!prefersReducedMotion && (
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                      initial={false}
                      aria-hidden="true"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                        animate={isHovered ? {
                          x: ['-100%', '100%']
                        } : {}}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.7, duration: 0.8 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <a
            href="/contact"
            className="btn-primary-dark"
          >
            Contact Us
            <FaArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default GatewaySection;
