import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaChartLine, FaShieldHalved, FaBuildingColumns, FaVault } from "react-icons/fa6";

// High-resolution local assets for guaranteed fast loading
import bankImg from "@/assets/hq11.jpg";
import capitalImg from "@/assets/markets.jpg";
import wealthImg from "@/assets/wealth.jpg";
import insuranceImg from "@/assets/corporate.jpg";

const transitionEase = [0.76, 0, 0.24, 1];

const businessUnits = [
  {
    id: "banking",
    num: "01",
    name: "Lombard Bank Plc",
    shortName: "Commercial Banking",
    tagline: "Consumer, Corporate & Private Banking",
    icon: FaBuildingColumns,
    description: "Anchoring the Group's balance sheet with full-service corporate lending, trade finance, transaction banking, and digital retail platforms across 14 African markets.",
    image: bankImg,
    badgeText: "Flagship Banking Subsidiary",
    stats: [
      { label: "Total Assets", val: "₦36.5T" },
      { label: "Branch Network", val: "535" },
      { label: "Agency Touchpoints", val: "48,000+" },
      { label: "Active Customers", val: "10.2M" },
    ],
    divisions: ["Corporate & Investment Banking", "Commercial Banking", "SME Solutions", "Digital Retail Banking"],
    href: "/about",
  },
  {
    id: "capital",
    num: "02",
    name: "Lombard Capital Markets",
    shortName: "Investment Banking",
    tagline: "Merchant Banking & Advisory",
    icon: FaChartLine,
    description: "Premier investment banking franchise delivering sovereign debt advisory, corporate M&A, equity capital underwriting, and top-tier securities brokerage on NGX & LSE.",
    image: capitalImg,
    badgeText: "#1 NGX Brokerage by Volume",
    stats: [
      { label: "Advisory Mandates", val: "$4.8B" },
      { label: "NGX Market Rank", val: "#1" },
      { label: "Eurobond Issuance", val: "$500M" },
      { label: "Institutional Clients", val: "450+" },
    ],
    divisions: ["Securities & Trading", "M&A Strategic Advisory", "Debt Capital Markets", "Principal Investments"],
    href: "/about",
  },
  {
    id: "wealth",
    num: "03",
    name: "Lombard Asset Management",
    shortName: "Wealth & Pensions",
    tagline: "Wealth Stewardship & Trust Services",
    icon: FaVault,
    description: "Generational wealth management and pension administration, delivering tailored portfolio growth, private wealth preservation, and institutional trust services.",
    image: wealthImg,
    badgeText: "₦340B+ Assets Under Management",
    stats: [
      { label: "Assets Under Mgmt", val: "₦340B+" },
      { label: "PFA License", val: "Full PFA" },
      { label: "Growth Fund", val: "$50M" },
      { label: "Pensions Covered", val: "1.2M" },
    ],
    divisions: ["Pension Fund Admin (PFA)", "Private Wealth Management", "Corporate Trusteeship", "Venture Growth Equity"],
    href: "/about",
  },
  {
    id: "insurance",
    num: "04",
    name: "Lombard Insurance Group",
    shortName: "General & Life Insurance",
    tagline: "Risk Transfer & Underwriting",
    icon: FaShieldHalved,
    description: "Comprehensive risk transfer solutions providing marine cargo, general corporate liability, group life assurance, and specialized energy risk coverage across West Africa.",
    image: insuranceImg,
    badgeText: "A+ Rated Risk Underwriter",
    stats: [
      { label: "Underwriting Rating", val: "A+ (Stable)" },
      { label: "General & Life Units", val: "Dual License" },
      { label: "Marine Coverage", val: "Global" },
      { label: "Claims Settled Ratio", val: "98.4%" },
    ],
    divisions: ["General & Commercial Insurance", "Marine & Aviation Cargo", "Group Life Assurance", "Health & Disability Cover"],
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
      className="relative bg-[#0F120F] text-white py-24 lg:py-36 px-6 lg:px-12 font-poppins overflow-hidden"
    >
      {/* Background Subtle Gradient & Grid Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F120F] via-[#141814] to-[#0F120F] opacity-90 pointer-events-none" />

      <div className="container max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-10 mb-14 lg:mb-20 gap-6">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#C7D3BC] mb-4">
              02 / Strategic Operating Pillars
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
              Capital Allocation Across <br />
              <span className="italic text-[#C7D3BC]">4 Core Divisions</span>
            </h2>
          </div>
          
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed border-l-2 border-[#C7D3BC]/40 pl-6">
            Lombard HoldCo operates a decentralized multi-pillar structure, deploying capital across commercial banking, investment banking, asset management, and insurance.
          </p>
        </div>

        {/* 3-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch min-h-[640px]">
          
          {/* Column 1: Editorial Navigation Menu (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="flex flex-col divide-y divide-white/10">
              {businessUnits.map((unit, index) => {
                const isActive = activeIndex === index;
                const Icon = unit.icon;
                return (
                  <button
                    key={unit.id}
                    onClick={() => handleSelect(index)}
                    className={`group text-left py-6 px-4 transition-all duration-300 relative outline-none flex items-center justify-between ${
                      isActive 
                        ? "bg-white/10 text-white shadow-xl" 
                        : "hover:bg-white/5 text-white/50 hover:text-white"
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#C7D3BC]"
                        transition={{ duration: 0.4, ease: transitionEase }}
                      />
                    )}

                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono font-bold transition-colors ${
                        isActive ? "text-[#C7D3BC]" : "text-white/30 group-hover:text-white/60"
                      }`}>
                        {unit.num}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-serif font-medium tracking-tight">
                          {unit.name}
                        </h3>
                        <p className={`text-[10px] uppercase tracking-widest font-mono ${
                          isActive ? "text-[#C7D3BC]" : "text-white/40"
                        }`}>
                          {unit.shortName}
                        </p>
                      </div>
                    </div>

                    <Icon className={`text-lg transition-transform duration-300 ${
                      isActive ? "text-[#C7D3BC] scale-110" : "text-white/20 group-hover:text-white/50"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Summary Footnote */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C7D3BC] block mb-2">
                Governance Boundary
              </span>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Each subsidiary maintains an independent board of directors and specialized C-suite leadership operating under Group risk guidelines.
              </p>
            </div>
          </div>

          {/* Column 2: Active Unit Content (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#151915] border border-white/10 p-8 sm:p-10 rounded-sm">
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
                  <span className="inline-block px-3 py-1 bg-[#C7D3BC]/20 text-[#C7D3BC] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    {activeUnit.tagline}
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4 leading-tight">
                    {activeUnit.name}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                    {activeUnit.description}
                  </p>

                  {/* Division Focus Tags */}
                  <div className="mb-8">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">
                      Specialized Divisions
                    </h4>
                    <div className="space-y-2.5">
                      {activeUnit.divisions.map((div, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs text-white/90 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C7D3BC]" />
                          <span>{div}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {activeUnit.stats.map((stat, i) => (
                      <div key={i} className="bg-white/5 p-3.5 border border-white/5">
                        <span className="text-[9px] uppercase tracking-wider text-white/50 block mb-1">
                          {stat.label}
                        </span>
                        <span className="text-lg font-bold text-[#C7D3BC]">
                          {stat.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={activeUnit.href}
                    className="group flex items-center justify-between w-full py-3.5 px-5 bg-[#C7D3BC] text-[#0F120F] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm"
                  >
                    <span>Corporate Overview</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 3: High-End Editorial Photography Showcase (4 Cols) */}
          <div className="lg:col-span-4 relative min-h-[400px] lg:min-h-[640px] overflow-hidden border border-white/10 rounded-sm">
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

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F120F] via-transparent to-black/20" />

                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0F120F]/90 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#C7D3BC] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C7D3BC]">
                      Division Focus
                    </span>
                  </div>
                  <p className="font-serif text-lg text-white font-medium">
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