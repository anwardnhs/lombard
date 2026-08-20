import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaChartLine, FaShieldHalved, FaBuildingColumns, FaVault } from "react-icons/fa6";

// High-resolution local assets for guaranteed fast loading
import bankImg from "../assets/hq11.jpg";
import capitalImg from "../assets/markets.jpg";
import wealthImg from "../assets/wealth.jpg";
import insuranceImg from "../assets/corporate.jpg";

const transitionEase = [0.76, 0, 0.24, 1];

const businessUnits = [
  {
    id: "banking",
    num: "01",
    name: "Lombard Bank Plc",
    shortName: "Commercial Banking",
    tagline: "Consumer, Corporate & Private Banking",
    icon: FaBuildingColumns,
    description: "One of Nigeria's leading commercial banks, providing a full spectrum of retail, corporate, and private banking services with a focus on innovation and customer-centric solutions.",
    image: bankImg,
    badgeText: "Nigeria's Largest Bank by Assets",
    href: "/about",
  },
  {
    id: "capital",
    num: "02",
    name: "Lombard Capital Markets",
    shortName: "Investment Banking",
    tagline: "Merchant Banking & Advisory",
    icon: FaChartLine,
    description: "A premier investment banking division offering capital markets solutions, M&A advisory, and strategic financial services to corporations, governments, and institutional investors. ",
    image: capitalImg,
    badgeText: "Leaders in West African Capital Markets",
    href: "/about",
  },
  {
    id: "wealth",
    num: "03",
    name: "Lombard Asset Management",
    shortName: "Wealth & Trust Services",
    tagline: "Wealth Stewardship & Trust Services",
    icon: FaVault,
    description: "Providing comprehensive wealth management, pension fund administration, and corporate trusteeship services, Lombard Asset Management is dedicated to preserving and growing client assets with integrity and expertise. ",
    image: wealthImg,
    badgeText: "Managing Over $2 Billion in Assets",
    href: "/about",
  },
  {
    id: "insurance",
    num: "04",
    name: "Lombard Insurance",
    shortName: "General & Life Insurance",
    tagline: "Risk Transfer & Underwriting",
    icon: FaShieldHalved,
    description: "Lombard Insurance offers a full suite of general and life insurance products, providing risk management solutions for individuals and businesses, backed by global reinsurers with strong financial ratings.  ",
    image: insuranceImg,
    badgeText: "Assured by Global Reinsurers with A+ Ratings",
    href: "/about",
  },
];

const BusinessUnitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeUnit = businessUnits[activeIndex];

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section 
      id="businesses"
      className="relative py-24 lg:py-36 px-6 lg:px-12 font-poppins overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1920&auto=format&fit=crop&q=80')` }}
    >
      {/* Semi-transparent white overlay to ensure text readability on the texture */}
      <div className="absolute inset-0 bg-white/85 pointer-events-none" />

      <div className="container max-w-[1400px] mx-auto relative z-10 text-[#0F120F]">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-[#4A5D43]/30 pb-10 mb-14 lg:mb-20 gap-6">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#4A5D43] mb-4">
               Our Business 
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F120F] tracking-tight leading-[1.05]">
              Capital Allocation Across <br />
              <span className="italic text-[#4A5D43]">Strategic Operating Pillars</span>
            </h2>
          </div>
        </div>

        {/* 3-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch min-h-[640px]">
          
          {/* Column 1: Editorial Navigation Menu (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="flex flex-col divide-y divide-[#4A5D43]/20 border-b border-[#4A5D43]/20 border-t">
              {businessUnits.map((unit, index) => {
                const isActive = activeIndex === index;
                const Icon = unit.icon;
                return (
                  <button
                    key={unit.id}
                    onClick={() => handleSelect(index)}
                    className={`group text-left py-6 px-4 transition-all duration-300 relative outline-none flex items-center justify-between ${
                      isActive 
                        ? "bg-[#4A5D43]/5 text-[#0F120F]" 
                        : "hover:bg-black/5 text-[#0F120F]/60 hover:text-[#0F120F]"
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#4A5D43]"
                        transition={{ duration: 0.4, ease: transitionEase }}
                      />
                    )}

                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono font-bold transition-colors ${
                        isActive ? "text-[#4A5D43]" : "text-[#0F120F]/40 group-hover:text-[#0F120F]/60"
                      }`}>
                        {unit.num}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-serif font-medium tracking-tight">
                          {unit.name}
                        </h3>
                        <p className={`text-[10px] uppercase tracking-widest font-mono ${
                          isActive ? "text-[#4A5D43]" : "text-[#0F120F]/50"
                        }`}>
                          {unit.shortName}
                        </p>
                      </div>
                    </div>

                    <Icon className={`text-lg transition-transform duration-300 ${
                      isActive ? "text-[#4A5D43] scale-110" : "text-[#0F120F]/30 group-hover:text-[#0F120F]/50"
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2: Active Unit Content (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white/70 backdrop-blur-sm border border-[#4A5D43]/20 p-8 sm:p-10 rounded-sm shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUnit.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: transitionEase }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  {/* Category Pill */}
                  <span className="inline-block px-3 py-1 bg-[#4A5D43]/10 text-[#4A5D43] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    {activeUnit.tagline}
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#0F120F] mb-4 leading-tight">
                    {activeUnit.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#0F120F]/80 font-light leading-relaxed mb-8">
                    {activeUnit.description}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="pt-6 border-t border-[#4A5D43]/20">
                  <a
                    href={activeUnit.href}
                    className="group flex items-center justify-between w-full py-3.5 px-5 bg-[#4A5D43] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#2A3626] transition-colors rounded-sm"
                  >
                    <span>Corporate Overview</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 3: High-End Editorial Photography Showcase (4 Cols) */}
          <div className="lg:col-span-4 relative min-h-[400px] lg:min-h-[640px] overflow-hidden border border-[#4A5D43]/20 rounded-sm shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUnit.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: transitionEase }}
                className="absolute inset-0"
              >
                <img 
                  src={activeUnit.image} 
                  alt={activeUnit.name}
                  className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
                />

                {/* Light Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F120F]/60 via-transparent to-transparent" />

                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md border border-[#4A5D43]/20 text-[#0F120F] shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#4A5D43] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A5D43]">
                      Division Focus
                    </span>
                  </div>
                  <p className="font-serif text-lg text-[#0F120F] font-medium">
                    {activeUnit.badgeText}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessUnitsSection;