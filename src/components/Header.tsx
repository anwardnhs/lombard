import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaBars, FaXmark, FaChevronDown, FaArrowRight, FaLock } from "react-icons/fa6";
import anwar from "@/assets/anwar.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChairmanOpen, setIsChairmanOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Handle Scroll Effect with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen || isChairmanOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isChairmanOpen]);

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
        setIsChairmanOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const openChairmanLetter = useCallback(() => {
    setIsChairmanOpen(true);
  }, []);

  const closeChairmanLetter = useCallback(() => {
    setIsChairmanOpen(false);
  }, []);

  // Menu Data Structure
  const menuItems = [
    {
      label: "Who We Are",
      id: "about",
      columns: [
        {
          title: "Our Firm",
          links: [
            { label: "Corporate Profile", href: "/about" },
            { label: "Executive Leadership", href: "/about/leadership" },
            { label: "Board of Directors", href: "/governance" }
          ]
        },
        {
          title: "Purpose & Impact",
          links: [
            { label: "Sustainability (ESG)", href: "/impact#esg" },
            { label: "Lombard Foundation", href: "/impact#foundation" },
            { label: "Community Impact", href: "/impact#community" }
          ]
        }
      ],
      featured: {
        title: "The Chairman's Letter",
        desc: "Read the 2025 annual address from our Chairman, outlining our strategic vision and commitment to Africa's growth.",
        link: "/chairman-letter"
      }
    },
    {
      label: "Our Businesses",
      id: "business",
      columns: [
        {
          title: "Banking",
          links: [
            { label: "Commercial Banking", href: "/businesses/commercial" },
            { label: "Retail Banking", href: "/businesses/retail" },
            { label: "Private Banking", href: "/businesses/private" }
          ]
        },
        {
          title: "Institutional",
          links: [
            { label: "Capital Markets", href: "/businesses/capital" },
            { label: "Asset Management", href: "/businesses/asset-management" },
            { label: "Securities Trading", href: "/businesses/securities" }
          ]
        },
        {
          title: "Insurance",
          links: [
            { label: "Life Assurance", href: "/businesses/life" },
            { label: "General Insurance", href: "/businesses/general" }
          ]
        }
      ]
    },
    {
      label: "Investors",
      id: "investors",
      columns: [
        {
          title: "Financial Data",
          links: [
            { label: "Quarterly Earnings", href: "/investors#quarterly-earnings" },
            { label: "Annual Reports", href: "/investors#annual-reports" },
            { label: "Share Price", href: "/investors#share-price" }
          ]
        },
        {
          title: "Shareholder Services",
          links: [
            { label: "Shareholder Services", href: "/investors#shareholder-services" },
            { label: "Dividend History", href: "/investors#dividend-history" },
            { label: "AGM Information", href: "/investors#agm-information" },
            { label: "Analyst Coverage", href: "/investors#analyst-coverage" }
          ]
        }
      ],
      featured: {
        title: "Q4 2025 Earnings",
        desc: "View webcast replay and download investor presentation.",
        link: "/investors/q4-2025"
      }
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-poppins ${
          isScrolled || activeMenu
            ? "bg-[#0a0c0a]/95 backdrop-blur-xl border-b border-white/10 py-3 sm:py-4"
            : "bg-transparent py-5 sm:py-6"
        }`}
        role="banner"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between max-w-[1800px]">
          
          {/* Logo */}
          <a 
            href="/" 
            className="relative z-50 group focus:outline-none focus:ring-2 focus:ring-[#c7d3bc] focus:ring-offset-2 focus:ring-offset-[#0a0c0a] rounded-sm px-2 py-1 -ml-2"
            aria-label="Lombard HoldCo - Return to homepage"
          >
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl tracking-tight transition-colors duration-300 text-white group-hover:opacity-80">
              Lombard HoldCo<span className="text-[#c7d3bc]">.</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" role="navigation" aria-label="Main navigation">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onMouseEnter={() => setActiveMenu(item.id)}
                  onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
                  className={`text-[10px] xl:text-xs font-bold uppercase tracking-[0.15em] py-4 flex items-center gap-1.5 transition-colors duration-300 focus:outline-none focus:text-[#c7d3bc] ${
                    activeMenu === item.id ? "text-[#c7d3bc]" : "text-white/70 hover:text-white"
                  }`}
                  aria-expanded={activeMenu === item.id}
                  aria-haspopup="true"
                >
                  {item.label}
                  <FaChevronDown 
                    className={`w-2 h-2 transition-transform duration-300 ${activeMenu === item.id ? "rotate-180" : ""}`} 
                    aria-hidden="true"
                  />
                </button>
              </div>
            ))}
            <a 
              href="/newsroom" 
              className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors focus:outline-none focus:text-[#c7d3bc] px-2 py-1 rounded-sm"
            >
              Newsroom
            </a>
            <a 
              href="/careers" 
              className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors focus:outline-none focus:text-[#c7d3bc] px-2 py-1 rounded-sm"
            >
              Careers
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a 
              href="/contact" 
              className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-[#c7d3bc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c7d3bc] focus:ring-offset-2 focus:ring-offset-[#0a0c0a] rounded-sm px-3 py-2"
            >
              Contact
            </a>
            <a 
              href="/portal" 
              className="btn-primary-dark gap-2"
              aria-label="Access client portal"
            >
              <FaLock className="w-3 h-3" aria-hidden="true" />
              Client Portal
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden text-white text-2xl relative z-50 w-10 h-10 flex items-center justify-center rounded-sm focus:outline-none focus:ring-2 focus:ring-[#c7d3bc]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>

        </div>

        {/* Mega Menu Dropdown (Desktop) */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-[#0a0c0a] border-t border-white/5 shadow-2xl"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
              role="menu"
              aria-label={`${menuItems.find(i => i.id === activeMenu)?.label} submenu`}
            >
              <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12 max-w-[1800px]">
                <div className="grid grid-cols-12 gap-12">
                  
                  {/* Columns Section - Clean & Minimal */}
                  <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
                    {menuItems.find(i => i.id === activeMenu)?.columns.map((col, idx) => (
                      <div key={idx} className="group/column">
                        <h4 className="text-[#c7d3bc] text-[10px] uppercase tracking-[0.2em] font-bold mb-6 opacity-80">
                          {col.title}
                        </h4>
                        <ul className="space-y-4" role="list">
                          {col.links.map((link, lIdx) => (
                            <li key={lIdx} role="listitem">
                              <a 
                                href={link.href} 
                                className="block text-white/70 hover:text-white text-sm font-bold transition-colors duration-300"
                                role="menuitem"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Featured Section (Right Side) - Editorial Style */}
                  {menuItems.find(i => i.id === activeMenu)?.featured && (
                    <div className="col-span-12 lg:col-span-4 pl-0 lg:pl-12 border-l border-white/5 hidden lg:block">
                      <div className="h-full flex flex-col justify-between group/featured">
                         <div>
                            <span className="block text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold mb-6">
                              Featured Insight
                            </span>
                            <h3 className="text-white font-serif text-2xl mb-4 leading-tight group-hover/featured:text-[#c7d3bc] transition-colors duration-300">
                              {menuItems.find(i => i.id === activeMenu)?.featured?.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                              {menuItems.find(i => i.id === activeMenu)?.featured?.desc}
                            </p>
                         </div>

                         {activeMenu === "about" ? (
                           <button 
                             type="button"
                             onClick={openChairmanLetter}
                             className="btn-primary-dark"
                           >
                             Read Letter
                             <FaArrowRight className="w-4 h-4" aria-hidden="true" />
                           </button>
                         ) : (
                           <a 
                             href={menuItems.find(i => i.id === activeMenu)?.featured?.link} 
                             className="btn-primary-dark"
                           >
                             Read Story 
                             <FaArrowRight className="w-4 h-4" aria-hidden="true" />
                           </a>
                         )}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] z-50 bg-[#0a0c0a] lg:hidden pt-24 px-6 overflow-y-auto border-l border-white/10"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav className="relative flex flex-col gap-8" aria-label="Mobile main navigation">
                {menuItems.map((item) => (
                  <div key={item.id}>
                    <h4 className="text-[#c7d3bc] text-xs uppercase tracking-[0.2em] font-bold mb-4">
                      {item.label}
                    </h4>
                    <ul className="space-y-3 pl-4 border-l-2 border-[#c7d3bc]/20">
                      {item.columns.map(col => col.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <a 
                            href={link.href} 
                            className="text-white/70 hover:text-white text-base font-light block py-1 transition-colors focus:outline-none focus:text-[#c7d3bc]" 
                            onClick={closeMobileMenu}
                          >
                            {link.label}
                          </a>
                        </li>
                      )))}
                    </ul>
                  </div>
                ))}
                
                <hr className="border-white/10 my-2" />

                <div>
                  <h4 className="text-[#c7d3bc] text-xs uppercase tracking-[0.2em] font-bold mb-4">
                    Featured Insight
                  </h4>
                  <div className="bg-white/5 border border-white/10 p-5 rounded-sm">
                    <div className="text-white font-serif text-lg mb-3 leading-tight">
                      The Chairman's Letter
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 font-light">
                      Read the 2025 annual address from our Chairman outlining our strategic vision and commitment to Africa's growth.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        closeMobileMenu();
                        openChairmanLetter();
                      }}
                      className="btn-primary-dark w-full justify-center"
                    >
                      Read Letter
                      <FaArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <hr className="border-white/10 my-2" />

                <a 
                  href="/newsroom" 
                  className="text-white/70 hover:text-white text-base font-light transition-colors focus:outline-none focus:text-[#c7d3bc]"
                  onClick={closeMobileMenu}
                >
                  Newsroom
                </a>
                <a 
                  href="/careers" 
                  className="text-white/70 hover:text-white text-base font-light transition-colors focus:outline-none focus:text-[#c7d3bc]"
                  onClick={closeMobileMenu}
                >
                  Careers
                </a>

                <hr className="border-white/10 my-2" />

                <a 
                  href="/portal" 
                  className="btn-primary-dark w-full"
                  onClick={closeMobileMenu}
                >
                  Client Portal
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Chairman's Letter Modal */}
      <AnimatePresence>
        {isChairmanOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeChairmanLetter}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chairman-letter-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#F9F9F7] w-full max-w-5xl max-h-[92vh] overflow-hidden relative shadow-2xl flex flex-col rounded-md border border-black/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeChairmanLetter}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/5 hover:bg-black flex items-center justify-center text-black hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#c7d3bc]"
                aria-label="Close letter"
              >
                <FaXmark className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-[240px_1fr] gap-0 overflow-y-auto max-h-[92vh] overscroll-contain">
                <div className="bg-white border-r border-black/10 p-6 flex flex-col items-center text-center md:border-b-0 border-b border-black/10">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-5 border border-black/10 mt-3">
                    <img src={anwar} alt="Mr. Anwar Alhassan" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 id="chairman-letter-title" className="font-poppins text-2xl sm:text-3xl text-black mb-5">
                    Chairman’s Letter — 2025
                  </h3>
                  <p className="text-sm text-black/90 leading-relaxed mb-4 font-semibold">
                    Fellow Shareholders and Stakeholders,
                  </p>
                  <p className="text-sm text-black/90 leading-relaxed mb-4 font-semibold">
                    2025 was a defining year for Lombard HoldCo. We deepened our capital base, expanded our regional
                    footprint, and accelerated digital delivery across retail, corporate, and institutional platforms.
                    Our focus remained clear: disciplined growth, resilient risk management, and measurable impact.
                  </p>
                  <p className="text-sm text-black/90 leading-relaxed mb-4 font-semibold">
                    We completed a ₦540B recapitalization to meet evolving regulatory requirements and to position the
                    Group for the next decade of investment. Our balance sheet strength, combined with rigorous governance,
                    allowed us to scale with confidence while preserving shareholder value.
                  </p>
                  <p className="text-sm text-black/90 leading-relaxed mb-4 font-semibold">
                    We also advanced our sustainability agenda with targeted green financing and foundation initiatives
                    that expanded access to education, healthcare, and enterprise support. These programs are not adjuncts
                    to our business; they are core to how we deliver long‑term value.
                  </p>
                  <p className="text-sm text-black/90 leading-relaxed mb-6 font-semibold">
                    On behalf of the Board, I thank our clients, regulators, and colleagues for their trust and commitment.
                    We remain focused on building Africa’s most resilient and trusted financial institution.
                  </p>
                  <div className="text-sm font-bold text-black">
                    Anwar Alhassan, CFR
                  </div>
                  <div className="text-xs text-black/70 font-semibold">
                    Group Chairman, Lombard HoldCo Plc
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
