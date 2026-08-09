import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaBuildingColumns, FaArrowRight, FaGlobe } from "react-icons/fa6";

// --- Types ---
type Market = {
  id: string;
  city: string;
  country: string;
  coords: { top: number; left: number };
  type: "Group HQ" | "Subsidiary" | "Key Market";
  desc: string;
};

// --- Data: Calibrated for Standard World Map SVG ---
const markets: Market[] = [
  { 
    id: "ng", 
    city: "Lagos", 
    country: "Nigeria", 
    coords: { top: 56, left: 51.5 }, 
    type: "Group HQ", 
    desc: "The Lombard Tower, Marina. Full-service commercial banking, capital markets, and insurance operations." 
  },
  { 
    id: "gh", 
    city: "Accra", 
    country: "Ghana", 
    coords: { top: 56.5, left: 49.5 }, 
    type: "Subsidiary", 
    desc: "Lombard Bank Ghana - Corporate & retail banking hub for Anglophone West Africa." 
  },
  { 
    id: "ke", 
    city: "Nairobi", 
    country: "Kenya", 
    coords: { top: 61, left: 60 }, 
    type: "Subsidiary", 
    desc: "East Africa regional headquarters serving Kenya, Tanzania, and Uganda markets." 
  },
  { 
    id: "rw", 
    city: "Kigali", 
    country: "Rwanda", 
    coords: { top: 62, left: 58 }, 
    type: "Subsidiary", 
    desc: "Digital banking innovation center and wealth management services." 
  },
  { 
    id: "za", 
    city: "Johannesburg", 
    country: "South Africa", 
    coords: { top: 80, left: 56 }, 
    type: "Key Market", 
    desc: "Investment banking, M&A advisory, and institutional capital markets." 
  },
  { 
    id: "ci", 
    city: "Abidjan", 
    country: "Côte d'Ivoire", 
    coords: { top: 57, left: 48 }, 
    type: "Subsidiary", 
    desc: "Francophone West Africa hub serving regional SME and corporate clients." 
  },
  { 
    id: "sn", 
    city: "Dakar", 
    country: "Senegal", 
    coords: { top: 51, left: 43.5 }, 
    type: "Subsidiary", 
    desc: "Trade finance center supporting cross-border commerce and SME banking." 
  },
  { 
    id: "cd", 
    city: "Kinshasa", 
    country: "DR Congo", 
    coords: { top: 65, left: 54 }, 
    type: "Subsidiary", 
    desc: "Mining sector finance and infrastructure project funding." 
  },
  { 
    id: "mz", 
    city: "Maputo", 
    country: "Mozambique", 
    coords: { top: 78, left: 61 }, 
    type: "Subsidiary", 
    desc: "Energy, natural resources, and commodities financing." 
  },
  { 
    id: "eg", 
    city: "Cairo", 
    country: "Egypt", 
    coords: { top: 48, left: 58 }, 
    type: "Key Market", 
    desc: "North Africa gateway and institutional banking services." 
  },
  { 
    id: "et", 
    city: "Addis Ababa", 
    country: "Ethiopia", 
    coords: { top: 58, left: 62 }, 
    type: "Subsidiary", 
    desc: "Agricultural finance and regional trade corridor banking." 
  },
  { 
    id: "zm", 
    city: "Lusaka", 
    country: "Zambia", 
    coords: { top: 71, left: 56 }, 
    type: "Subsidiary", 
    desc: "Corporate banking and copper sector financing." 
  },
  { 
    id: "ug", 
    city: "Kampala", 
    country: "Uganda", 
    coords: { top: 59, left: 59 }, 
    type: "Subsidiary", 
    desc: "Retail banking and microfinance services." 
  },
  { 
    id: "tz", 
    city: "Dar es Salaam", 
    country: "Tanzania", 
    coords: { top: 67, left: 61 }, 
    type: "Subsidiary", 
    desc: "Port infrastructure finance and logistics sector banking." 
  },
];

const FootprintSection = () => {
  const [activeMarket, setActiveMarket] = useState<string | null>(null);
  const [hoveredMarket, setHoveredMarket] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMarkerEnter = useCallback((marketId: string) => {
    setActiveMarket(marketId);
    setHoveredMarket(marketId);
  }, []);

  const handleMarkerLeave = useCallback(() => {
    setActiveMarket(null);
    setHoveredMarket(null);
  }, []);

  const handleMarkerClick = useCallback((marketId: string) => {
    setActiveMarket(activeMarket === marketId ? null : marketId);
  }, [activeMarket]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, marketId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleMarkerClick(marketId);
    } else if (e.key === 'Escape') {
      setActiveMarket(null);
    }
  }, [handleMarkerClick]);

  // Memoized stats calculation
  const stats = useMemo(() => ({
    markets: markets.length,
    totalAssets: "$25B",
    employees: "24,800"
  }), []);

  const animationVariants = {
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

  return (
    <section 
      className="relative bg-[#0F120F] py-24 sm:py-32 lg:py-40 xl:py-48 overflow-hidden font-poppins" 
      id="footprint"
      aria-labelledby="footprint-heading"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c7d3bc]/20 to-transparent" aria-hidden="true" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 max-w-[1800px]">
        
        {/* Header & Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 sm:mb-20 gap-8 lg:gap-12">
          <motion.div 
            className="max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animationVariants}
          >
            <span className="text-[#c7d3bc] tracking-[0.2em] text-[10px] sm:text-xs font-bold uppercase mb-4 block">
              Geographic Presence
            </span>
            <h2 
              id="footprint-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] mb-5 sm:mb-6"
            >
              {stats.markets} Markets. <br />
              <span className="italic text-[#c7d3bc]">One Ecosystem.</span>
            </h2>
            <p className="text-white/60 font-light text-base sm:text-lg leading-relaxed">
              From Lagos to Johannesburg, we connect Africa's largest economies through integrated financial infrastructure and local market expertise.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-12 border-t border-white/10 pt-6 lg:border-t-0 lg:pt-0 w-full lg:w-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animationVariants}
            role="list"
            aria-label="Key metrics"
          >
            <div className="group cursor-default" role="listitem">
              <div 
                className="text-2xl sm:text-3xl font-serif text-white mb-1 group-hover:text-[#c7d3bc] transition-colors tabular-nums"
                aria-label={`${stats.markets} African markets`}
              >
                {stats.markets}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/40 group-hover:text-[#c7d3bc]/70 transition-colors">
                Markets
              </div>
            </div>
            <div className="group cursor-default" role="listitem">
              <div 
                className="text-2xl sm:text-3xl font-serif text-white mb-1 group-hover:text-[#c7d3bc] transition-colors tabular-nums"
                aria-label={`${stats.totalAssets} total assets`}
              >
                {stats.totalAssets}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/40 group-hover:text-[#c7d3bc]/70 transition-colors">
                Total Assets
              </div>
            </div>
            <div className="group cursor-default" role="listitem">
              <div 
                className="text-2xl sm:text-3xl font-serif text-white mb-1 group-hover:text-[#c7d3bc] transition-colors tabular-nums"
                aria-label={`${stats.employees} employees`}
              >
                {stats.employees}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/40 group-hover:text-[#c7d3bc]/70 transition-colors">
                Employees
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Map Container */}
        <motion.div 
          className="relative w-full aspect-[16/9] lg:aspect-[2/1] bg-[#151815] border border-white/5 rounded-sm overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animationVariants}
          role="application"
          aria-label="Interactive map of Lombard HoldCo operations across Africa"
        >
          {/* Luminous Glow Background */}
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-[60%] h-[60%] bg-white/5 blur-[80px] rounded-full mix-blend-screen" />
          </div>

          {/* Map SVG */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 1000 500" className="w-full h-full scale-110 lg:scale-100">
              <image 
                href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                width="100%" 
                height="100%" 
                className="opacity-40 filter drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                style={{ filter: 'invert(1) grayscale(1) brightness(1.2)' }} 
                alt=""
              />
            </svg>
          </div>

          {/* Market Markers */}
          <div className="absolute inset-0" role="list" aria-label="Market locations">
            {markets.map((market) => (
              <div
                key={market.id}
                className="absolute z-20 group/marker"
                style={{ top: `${market.coords.top}%`, left: `${market.coords.left}%` }}
                onMouseEnter={() => handleMarkerEnter(market.id)}
                onMouseLeave={handleMarkerLeave}
                onClick={() => handleMarkerClick(market.id)}
                onKeyDown={(e) => handleKeyDown(e, market.id)}
                role="button"
                tabIndex={0}
                aria-label={`${market.city}, ${market.country} - ${market.type}`}
                aria-expanded={activeMarket === market.id}
              >
                {/* Marker Dot */}
                <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full z-10 transition-transform duration-300 ${
                      market.type === 'Group HQ' 
                        ? 'bg-[#c7d3bc] shadow-[0_0_15px_#c7d3bc]' 
                        : 'bg-white shadow-[0_0_10px_white]'
                    } ${hoveredMarket === market.id ? 'scale-125' : 'scale-100'}`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  
                  {/* Pulse Ring Animation */}
                  {!prefersReducedMotion && (
                    <motion.div 
                      className={`absolute inset-0 rounded-full border ${
                        market.type === 'Group HQ' ? 'border-[#c7d3bc]' : 'border-white/40'
                      }`}
                      animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeOut", 
                        delay: Math.random() * 2 
                      }}
                    />
                  )}
                  
                  {/* Focus ring for accessibility */}
                  <div 
                    className={`absolute inset-0 rounded-full transition-all ${
                      activeMarket === market.id 
                        ? 'ring-2 ring-[#c7d3bc] ring-offset-2 ring-offset-[#151815]' 
                        : ''
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Info Card */}
          <AnimatePresence mode="wait">
            {activeMarket && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-30 max-w-sm w-[calc(100%-3rem)] sm:w-full"
                role="region"
                aria-live="polite"
                aria-atomic="true"
              >
                {(() => {
                  const market = markets.find(m => m.id === activeMarket);
                  if (!market) return null;
                  return (
                    <div className="bg-[#0F120F]/95 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
                      {/* Gold Accent Line */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c7d3bc] to-transparent" aria-hidden="true" />
                      
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-serif text-white">
                            {market.city}
                          </h3>
                          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#c7d3bc] font-bold">
                            {market.country}
                          </span>
                        </div>
                        {market.type === 'Group HQ' ? (
                          <FaBuildingColumns className="text-[#c7d3bc] w-5 h-5 flex-shrink-0" aria-label="Group headquarters" />
                        ) : (
                          <FaGlobe className="text-white/20 w-5 h-5 flex-shrink-0" aria-label="Market location" />
                        )}
                      </div>
                      
                      <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mt-3 border-t border-white/10 pt-3">
                        {market.desc}
                      </p>

                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-[8px] sm:text-[9px] bg-white/10 px-2 py-1 rounded text-white/60 uppercase tracking-widest font-medium">
                          {market.type}
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F120F_100%)] pointer-events-none" aria-hidden="true" />
        </motion.div>

        {/* Footer Link */}
        <motion.div 
          className="mt-10 sm:mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
        >
          <a 
            href="/locations" 
            className="btn-primary-dark"
          >
            View All Locations
            <FaArrowRight 
              className="w-4 h-4" 
              aria-hidden="true"
            />
          </a>
        </motion.div>

        {/* Screen reader market list */}
        <div className="sr-only">
          <h3>Our Markets:</h3>
          <ul>
            {markets.map((market) => (
              <li key={market.id}>
                {market.city}, {market.country} - {market.type}: {market.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Screen reader only styles */}
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </section>
  );
};

export default FootprintSection;
