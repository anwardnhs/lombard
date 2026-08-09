import { motion, useReducedMotion } from "framer-motion";
import { useState, useCallback } from "react";

// --- IMPORT YOUR 6 IMAGES HERE ---
import institutionalImg from "../assets/lombardsk.jpg";
import marketsImg from "../assets/markets.jpg";
import infrastructureImg from "../assets/infrastructure.jpg";
import wealthImg from "../assets/wealth.jpg";
import retailImg from "../assets/retail.jpg";
import paymentsImg from "../assets/payments.jpg";

// --- Reusable Placeholder Component ---
const ImagePlaceholder = ({ color = "#c7d3bc" }) => (
  <div className="absolute inset-0 bg-[#1a1f1a] flex items-center justify-center overflow-hidden">
    <svg className="w-[150%] h-[150%] opacity-10" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke={color} strokeWidth="0.5"/>
      </pattern>
      <rect width="100" height="100" fill="url(#grid)" />
    </svg>
  </div>
);

const CapabilitiesSection = () => {
  const [imageLoaded, setImageLoaded] = useState({});
  const prefersReducedMotion = useReducedMotion();

  const handleImageLoad = useCallback((id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  }, []);

  const capabilities = [
    {
      id: "institutional",
      subtitle: "Institutional Banking",
      title: "Corporate & Sovereign",
      description: "Delivering sophisticated financing and risk management solutions to governments, multinationals, and large corporates across Africa.",
      focus: ["Syndicated Loans", "Trade Finance", "Treasury Services"],
      metric: "$21.3B",
      metricLabel: "Institutional Assets",
      image: institutionalImg,
      href: "/institutional-banking"
    },
    {
      id: "markets",
      subtitle: "Investment Banking",
      title: "Capital Markets",
      description: "Leading execution franchise for equity and debt offerings, providing comprehensive advisory and underwriting capabilities.",
      focus: ["ECM & DCM", "Debt Syndication", "M&A Advisory"],
      metric: "$2.7B",
      metricLabel: "2024 Deal Volume",
      image: marketsImg,
      href: "/capital-markets"
    },
    {
      id: "infrastructure",
      subtitle: "Project & Structured Finance",
      title: "Infrastructure",
      description: "Financing transformative projects that build Africa's economic foundation through innovative public-private partnerships.",
      focus: ["Power & Energy", "Telecommunications", "Transportation"],
      metric: "120+",
      metricLabel: "Active Projects",
      image: infrastructureImg,
      href: "/infrastructure-finance"
    },
    {
      id: "wealth",
      subtitle: "Private Banking",
      title: "Wealth Management",
      description: "Customized wealth preservation and growth strategies for ultra-high-net-worth individuals and families across generations.",
      focus: ["Trust Services", "Estate Planning", "Alternative Investments"],
      metric: "$477M",
      metricLabel: "Private AUM",
      image: wealthImg,
      href: "/private-banking"
    },
    {
      id: "retail",
      subtitle: "Consumer Banking",
      title: "Retail & Digital",
      description: "Expanding financial access through innovative digital solutions and AI-powered credit decisioning at scale.",
      focus: ["Consumer Lending", "Digital Banking", "Agency Network"],
      metric: "10.2M",
      metricLabel: "Active Customers",
      image: retailImg,
      href: "/retail-banking"
    },
    {
      id: "payments",
      subtitle: "Transaction Banking",
      title: "Payments & FX",
      description: "Enabling seamless cross-border commerce with real-time settlement infrastructure and comprehensive FX solutions.",
      focus: ["Cross-Border Payments", "FX Services", "Cash Management"],
      metric: "$8.5B",
      metricLabel: "Annual Volume",
      image: paymentsImg,
      href: "/transaction-banking"
    }
  ];
  const featuredCapabilities = capabilities.slice(0, 3);

  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="relative min-h-screen bg-[#0F120F] text-white overflow-hidden font-poppins py-20 sm:py-28 lg:py-32 px-6"
      aria-labelledby="capabilities-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#0F120F]/95 z-10" /> 
        <div className="absolute inset-0 z-0 opacity-20">
          <ImagePlaceholder color="#ffffff" />
        </div>
        
        {/* Grain Texture */}
        <div 
          className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none mix-blend-overlay" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }} 
        />
      </div>

      <div className="container mx-auto relative z-20 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 lg:mb-24 gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
          >
            <span className="block text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#c7d3bc] mb-4 font-semibold">
              Core Capabilities
            </span>
            <h2 
              id="capabilities-heading"
              className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-tight"
            >
              Integrated <span className="text-[#c7d3bc] font-serif italic">Platform</span>
            </h2>
          </motion.div>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            custom={0.1}
            className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed font-light border-l-2 border-white/10 pl-6"
          >
            Comprehensive financial solutions spanning the full economic spectrum—from individual wealth preservation to sovereign financing and national infrastructure development.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          role="list"
          aria-label="Business capabilities"
        >
          {featuredCapabilities.map((item, index) => (
            <motion.article
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={animationVariants}
              custom={index * 0.1}
              role="listitem"
              className="group flex flex-col h-full bg-white/[0.02] border border-white/5 hover:border-[#c7d3bc]/30 transition-all duration-500 overflow-hidden rounded-sm focus-within:ring-2 focus-within:ring-[#c7d3bc] focus-within:ring-offset-2 focus-within:ring-offset-[#0F120F]"
            >
              {/* Image Area */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden border-b border-white/5 bg-[#1a1f1a]">
                <div className="absolute inset-0 bg-[#0F120F]/20 z-10 group-hover:bg-transparent transition-colors duration-500" aria-hidden="true" />
                
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt=""
                    role="presentation"
                    loading="lazy"
                    onLoad={() => handleImageLoad(item.id)}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0 contrast-110 ${
                      imageLoaded[item.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ) : (
                  <ImagePlaceholder />
                )}

                {/* Loading placeholder */}
                {!imageLoaded[item.id] && item.image && (
                  <div className="absolute inset-0 bg-[#1a1f1a] animate-pulse z-5" />
                )}

                {/* Metric Badge */}
                <div className="absolute bottom-0 left-0 bg-[#0F120F]/95 px-4 sm:px-5 py-2.5 sm:py-3 border-t border-r border-white/10 z-20 backdrop-blur-md">
                  <span className="block text-base sm:text-lg font-light text-[#c7d3bc] tracking-tight tabular-nums" aria-label={`${item.metric} ${item.metricLabel}`}>
                    {item.metric}
                  </span>
                  <span className="text-[9px] tracking-[0.1em] uppercase text-white/50">
                    {item.metricLabel}
                  </span>
                </div>
              </div>

              {/* Text Content Area */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between relative bg-gradient-to-b from-[#0F120F] to-[#151815]">
                {/* Hover Glow Effect */}
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#c7d3bc]/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-1 h-1 bg-[#c7d3bc] rounded-full flex-shrink-0" aria-hidden="true" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/80 transition-colors font-medium">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light text-white mb-3 sm:mb-4 group-hover:text-[#c7d3bc] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-white/50 leading-relaxed font-light mb-5 sm:mb-6">
                    {item.description}
                  </p>

                  {/* Focus Tags */}
                  <div 
                    className="flex flex-wrap gap-2 mb-5 sm:mb-6"
                    role="list"
                    aria-label="Service focus areas"
                  >
                    {item.focus.map(tag => (
                      <span 
                        key={tag} 
                        role="listitem"
                        className="text-[9px] sm:text-[10px] text-white/30 border border-white/10 px-2 py-1 rounded-sm uppercase tracking-wider hover:border-white/20 hover:text-white/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Footer Link */}
                <a
                  href={item.href}
                  className="relative z-10 pt-5 sm:pt-6 border-t border-white/5 flex items-center justify-between group/link focus:outline-none focus:ring-2 focus:ring-[#c7d3bc] focus:ring-offset-2 focus:ring-offset-[#151815] rounded-sm -mx-2 px-2"
                  aria-label={`Learn more about ${item.title}`}
                >
                  <span className="text-xs sm:text-sm font-medium text-white group-hover/link:text-[#c7d3bc] transition-colors">
                    Learn More
                  </span>
                  <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover/link:border-[#c7d3bc] group-hover/link:text-[#c7d3bc] transition-all flex-shrink-0">
                    <svg 
                      className="w-3 h-3 -rotate-45 group-hover/link:rotate-0 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>

            </motion.article>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mt-8 sm:mt-10 flex justify-center"
        >
          <a
            href="/businesses"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.12em] uppercase text-white border border-white/20 px-5 py-3 hover:border-[#c7d3bc] hover:text-[#c7d3bc] transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#c7d3bc] focus:ring-offset-2 focus:ring-offset-[#0F120F]"
            aria-label="View more business lines"
          >
            View More
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

        {/* Performance Indicators Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: prefersReducedMotion ? 0 : 1, 
            delay: prefersReducedMotion ? 0 : 0.5 
          }}
          className="mt-16 sm:mt-20 lg:mt-24 pt-8 border-t border-white/5"
          role="complementary"
          aria-label="Group performance indicators"
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-6 sm:gap-8">
            <div className="text-[10px] sm:text-xs text-white/30 font-light tracking-wide uppercase">
              Group Performance Indicators (FY 2025)
            </div>
            
            <div 
              className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full sm:w-auto"
              role="list"
              aria-label="Key financial metrics"
            >
              {[
                { label: "Total Revenue", val: "$1.64B", ariaLabel: "1.64 billion dollars total revenue" },
                { label: "Capital Adequacy", val: "22.4%", ariaLabel: "22.4 percent capital adequacy ratio" },
                { label: "NPL Ratio", val: "3.1%", ariaLabel: "3.1 percent non-performing loan ratio" }
              ].map((stat) => (
                <div 
                  key={stat.label} 
                  className="flex flex-col group cursor-default"
                  role="listitem"
                >
                  <span 
                    className="text-white font-medium text-base sm:text-lg mb-1 tabular-nums group-hover:text-[#c7d3bc] transition-colors"
                    aria-label={stat.ariaLabel}
                  >
                    {stat.val}
                  </span>
                  <span className="text-[9px] text-[#c7d3bc]/70 uppercase tracking-wider group-hover:text-[#c7d3bc] transition-colors">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
