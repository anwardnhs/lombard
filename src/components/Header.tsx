import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark, FaChevronDown, FaLock } from "react-icons/fa6";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navItems = [
    {
      label: "The Firm",
      id: "firm",
      links: [
        { label: "Corporate Profile", href: "/about" },
        { label: "Leadership & Board", href: "/governance" },
        { label: "Operating Subsidiaries", href: "/businesses" }
      ]
    },
    {
      label: "Investors",
      id: "investors",
      href: "/investors"
    },
    {
      label: "Sustainability",
      id: "sustainability",
      href: "/impact"
    },
    {
      label: "Media",
      id: "media",
      href: "/newsroom"
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-poppins ${
          isScrolled || activeDropdown
            ? "bg-[#0a0c0a]/95 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-8 xl:gap-12 max-w-[1800px]">
          
          {/* Logo */}
          <a 
            href="/" 
            className="relative z-50 group focus:outline-none rounded-sm"
          >
            <h1 className="font-serif font-bold text-2xl sm:text-3xl tracking-tight transition-colors duration-300 text-white group-hover:text-[#c7d3bc]">
              Lombard HoldCo<span className="text-[#c7d3bc]">.</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 h-full">
            {navItems.map((item) => (
              <div 
                key={item.id} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.id)}
              >
                {item.links ? (
                  <button
                    className={`text-sm font-medium tracking-wide flex items-center gap-2 transition-colors duration-300 py-2 ${
                      activeDropdown === item.id ? "text-[#c7d3bc]" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <FaChevronDown className={`w-2.5 h-2.5 transition-transform duration-300 ${activeDropdown === item.id ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </a>
                )}

                {/* Simple Dropdown Menu */}
                {item.links && activeDropdown === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[120%] left-0 min-w-[240px] bg-[#0a0c0a] border border-white/10 rounded-sm shadow-2xl py-2"
                  >
                    {item.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        className="block px-6 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="/careers" 
              className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors"
            >
              Careers
            </a>
            <a 
              href="/portal" 
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/20 hover:border-[#c7d3bc] text-white hover:text-[#c7d3bc] text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300"
            >
              <FaLock className="w-3 h-3" />
              Portal
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden text-white text-2xl relative z-50 w-10 h-10 flex items-center justify-center rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0c0a] pt-24 px-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-8 pb-12">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-white/10 pb-6">
                  {item.links ? (
                    <>
                      <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
                        {item.label}
                      </h4>
                      <div className="flex flex-col gap-4">
                        {item.links.map((link, idx) => (
                          <a 
                            key={idx} 
                            href={link.href} 
                            className="text-white text-xl font-serif"
                            onClick={closeMobileMenu}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a 
                      href={item.href} 
                      className="text-white text-xl font-serif block"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="pt-4 flex flex-col gap-6">
                <a href="/careers" className="text-white text-lg font-serif" onClick={closeMobileMenu}>Careers</a>
                <a href="/portal" className="text-[#c7d3bc] text-lg font-serif flex items-center gap-3" onClick={closeMobileMenu}>
                  <FaLock className="w-4 h-4" /> Client Portal
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
