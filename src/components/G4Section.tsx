import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// High-end Unsplash imagery for a premium financial aesthetic
const bankingImg = "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80"; // Clean architecture
const capitalImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"; // Corporate skyscraper
const wealthImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"; // Premium abstract/lifestyle
const insuranceImg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"; // Minimalist structure

// Custom Awwwards-style easing (buttery smooth)
const transitionEase = [0.76, 0, 0.24, 1];

const BusinessUnitsSection = () => {
  const [activeUnit, setActiveUnit] = useState(0);
  const sectionRef = useRef(null);

  const businessUnits = [
    {
      id: "banking",
      category: "Consumer & Commercial",
      name: "Lombard Bank",
      entity: "Lombard Bank Plc",
      description: "Full-service retail and commercial banking delivering tailored solutions across consumer, SME, corporate, and private banking segments.",
      image: bankingImg,
      divisions: ["Retail Banking", "Commercial Banking", "SME Banking", "Private Banking"]
    },
    {
      id: "capital",
      category: "Investment & Markets",
      name: "Lombard Capital",
      entity: "Lombard Capital Markets Ltd",
      description: "Premier investment banking franchise providing M&A advisory, capital raising, securities trading, and structured finance solutions.",
      image: capitalImg,
      divisions: ["Securities & Trading", "M&A Advisory", "Structured Finance", "Principal Investments"]
    },
    {
      id: "wealth",
      category: "Wealth Management",
      name: "Asset Mgmt",
      entity: "Lombard Asset Management Ltd",
      description: "Comprehensive wealth management delivering pension administration, institutional asset management, and trust services.",
      image: wealthImg,
      divisions: ["Pension Fund Admin", "Institutional Asset Mgmt", "Trust & Estate Services", "Alternative Investments"]
    },
    {
      id: "insurance",
      category: "Insurance & Risk",
      name: "Insurance",
      entity: "Lombard General Insurance Plc",
      description: "Integrated insurance provider offering comprehensive risk mitigation across general, life, marine, and specialty lines.",
      image: insuranceImg,
      divisions: ["General Insurance", "Marine & Aviation", "Life Assurance", "Group & Health"]
    }
  ];

  const handleUnitChange = useCallback((index) => {
    setActiveUnit(index);
    const liveRegion = document.getElementById('business-unit-announcement');
    if (liveRegion) liveRegion.textContent = `Now viewing ${businessUnits[index].name}`;
  }, [businessUnits]);

  const handleKeyDown = useCallback((e, index) => {
    const totalUnits = businessUnits.length;
    let newIndex = index;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') newIndex = index === 0 ? totalUnits - 1 : index - 1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') newIndex = index === totalUnits - 1 ? 0 : index + 1;
    if (e.key === 'Home') newIndex = 0;
    if (e.key === 'End') newIndex = totalUnits - 1;
    
    if (newIndex !== index) {
      e.preventDefault();
      handleUnitChange(newIndex);
      const tabButtons = sectionRef.current?.querySelectorAll('[role="tab"]');
      if (tabButtons && tabButtons[newIndex]) tabButtons[newIndex].focus();
    }
  }, [businessUnits.length, handleUnitChange]);

  return (
    <section 
      ref={sectionRef}
      id="businesses"
      className="relative bg-[#F4F4F0] py-24 lg:py-32 px-6 lg:px-12 overflow-hidden text-[#111] font-sans selection:bg-[#4A5D43] selection:text-white"
      aria-labelledby="business-units-heading"
    >
      <div className="container max-w-[90rem] mx-auto relative z-10">
        <div id="business-unit-announcement" className="sr-only" role="status" aria-live="polite" />

        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-[#111]/10 pb-12 mb-12 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: transitionEase }}
            id="business-units-heading"
            className="text-5xl sm:text-7xl lg:text-[6rem] font-light tracking-tighter leading-none"
          >
            Integrated <br className="hidden sm:block" />
            <span className="font-serif italic text-[#4A5D43] pr-4">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#111]/60 max-w-sm mt-8 lg:mt-0 font-medium"
          >
            A unified ecosystem tailored to your financial journey, driven by precision and excellence.
          </motion.p>
        </div>

        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 min-h-[650px]">
          
          {/* Column 1: Minimalist Navigation */}
          <div 
            className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-8 lg:gap-0 pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            role="tablist"
          >
            {businessUnits.map((unit, index) => {
              const isActive = activeUnit === index;
              return (
                <button
                  key={unit.id}
                  onClick={() => handleUnitChange(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${unit.id}`}
                  id={`tab-${unit.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`
                    group relative flex-shrink-0 lg:flex-shrink w-auto lg:w-full text-left py-2 lg:py-8 
                    lg:border-b border-[#111]/10 outline-none transition-colors duration-500
                    ${isActive ? 'text-[#111]' : 'text-[#111]/30 hover:text-[#111]/60'}
                  `}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-4">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight whitespace-nowrap">
                      {unit.name}
                    </span>
                    <span className="text-xs font-mono tracking-widest hidden lg:block">
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Active Line Indicator (Awwwards staple) */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabLine"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#111] hidden lg:block"
                      transition={{ duration: 0.6, ease: transitionEase }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Column 2: Content Details */}
          <div className="lg:col-span-4 flex flex-col justify-center lg:px-10 order-3 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUnit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: transitionEase }}
                role="tabpanel"
                id={`panel-${businessUnits[activeUnit].id}`}
                aria-labelledby={`tab-${businessUnits[activeUnit].id}`}
                className="flex flex-col h-full justify-center"
              >
                <div className="mb-8">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4A5D43] mb-4 block">
                    {businessUnits[activeUnit].entity}
                  </span>
                  <p className="text-xl sm:text-2xl leading-relaxed text-[#111]/80 font-light">
                    {businessUnits[activeUnit].description}
                  </p>
                </div>
                
                {/* Minimalist List */}
                <div className="space-y-4 mb-12">
                  {businessUnits[activeUnit].divisions.map((division) => (
                    <div key={division} className="flex items-center gap-4 border-b border-[#111]/5 pb-4">
                      <span className="w-1.5 h-1.5 bg-[#4A5D43] rounded-full" />
                      <span className="text-sm tracking-wide font-medium text-[#111]/80">
                        {division}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Micro-interaction CTA */}
                <div>
                  <a
                    href={`/${businessUnits[activeUnit].id}`}
                    className="group inline-flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-[#111] outline-none"
                  >
                    Explore Division
                    <span className="w-10 h-10 rounded-full border border-[#111]/20 flex items-center justify-center group-hover:bg-[#111] group-hover:border-[#111] group-focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F4F4F0] transition-all duration-500">
                      <svg className="w-4 h-4 text-[#111] group-hover:text-[#F4F4F0] group-hover:translate-x-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 3: Large Editorial Image */}
          <div className="lg:col-span-4 order-2 lg:order-3 h-[50vh] sm:h-[60vh] lg:h-[700px] w-full rounded-none overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUnit}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: transitionEase }}
                className="absolute inset-0 bg-[#E8E8E4]"
              >
                <img 
                  src={businessUnits[activeUnit].image} 
                  alt="" 
                  role="presentation"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {/* Extremely subtle overlay to ensure text contrast isn't needed, but adds mood */}
                <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessUnitsSection;