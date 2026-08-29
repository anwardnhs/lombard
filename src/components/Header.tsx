import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark, FaChevronDown, FaLock, FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = typeof window !== 'undefined' ? window.location.pathname === '/' : true;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        className={"fixed top-0 left-0 w-full z-50 transition-all duration-300 font-poppins " +
          (isScrolled || activeDropdown || !isHome
            ? "bg-[#0a0c0a] shadow-lg border-b border-white/5"
            : "bg-transparent"
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Minimalist Utility Bar */}
        <div className={"hidden sm:block transition-all duration-300 " + (isScrolled || activeDropdown || !isHome ? "border-b border-white/5 bg-[#111311]" : "border-b border-white/10")}>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px] flex justify-end items-center h-9">
            <nav className="flex items-center gap-6 text-[11px] font-medium tracking-wide text-white/50">
              <a href="#" className="hover:text-white transition-colors">Personal</a>
              <a href="#" className="hover:text-white transition-colors">Corporate</a>
              <a href="/investors" className="hover:text-white transition-colors">Investors</a>
            </nav>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={"container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px] flex items-center justify-between transition-all duration-300 " + (isScrolled || activeDropdown || !isHome ? "h-16" : "h-20")}>
          
          {/* Logo */}
          <a href="/" className="relative z-50 group flex items-center focus:outline-none">
            <h1 className="font-sans font-bold text-2xl tracking-tight text-white transition-colors duration-300">
              Lombard HoldCo<span className="text-[#52796F]">.</span>
            </h1>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {navItems.map((item) => (
              <div 
                key={item.id} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.id)}
              >
                {item.links ? (
                  <button className={"text-[13px] font-medium flex items-center gap-1.5 transition-colors duration-200 " + (activeDropdown === item.id ? "text-white" : "text-white/60 hover:text-white")}>
                    {item.label}
                    <FaChevronDown className={"w-2.5 h-2.5 transition-transform duration-300 " + (activeDropdown === item.id ? "rotate-180" : "")} />
                  </button>
                ) : (
                  <a href={item.href} className="text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-200">
                    {item.label}
                  </a>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.links && activeDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 min-w-[220px] bg-[#0a0c0a] border border-white/5 rounded-xl shadow-2xl py-3 mt-2"
                    >
                      {item.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="block px-5 py-2.5 text-[13px] text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="/careers" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">
              Careers
            </a>
            <button className="text-white/60 hover:text-white transition-colors" aria-label="Search">
              <FaMagnifyingGlass className="w-4 h-4" />
            </button>
            <a 
              href="/portal" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#52796F] text-white text-[12px] font-semibold tracking-wide rounded-full hover:bg-[#3e5b53] transition-colors"
            >
              <FaLock className="w-3 h-3" />
              Client Portal
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden text-white w-10 h-10 flex items-center justify-end relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0c0a] pt-28 px-6 overflow-y-auto"
          >
            {/* Mobile Utility */}
            <div className="flex gap-4 mb-8 pb-6 border-b border-white/10">
              <a href="#" className="text-white/50 hover:text-white text-[11px] font-medium tracking-wide">Personal</a>
              <a href="#" className="text-white/50 hover:text-white text-[11px] font-medium tracking-wide">Corporate</a>
              <a href="/investors" className="text-white hover:text-[#52796F] text-[11px] font-medium tracking-wide">Investors</a>
            </div>

            <nav className="flex flex-col gap-6 pb-12">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.links ? (
                    <>
                      <h4 className="text-white/30 text-[11px] font-semibold uppercase tracking-widest mb-3">
                        {item.label}
                      </h4>
                      <div className="flex flex-col gap-2 pl-4 border-l border-white/10">
                        {item.links.map((link, idx) => (
                          <a key={idx} href={link.href} className="text-white/80 hover:text-white text-base py-1" onClick={closeMobileMenu}>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a href={item.href} className="text-white text-lg font-medium block" onClick={closeMobileMenu}>
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="pt-6 mt-2 border-t border-white/10 flex flex-col gap-5">
                <a href="/careers" className="text-white text-lg font-medium" onClick={closeMobileMenu}>Careers</a>
                <a href="/portal" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#52796F] text-white text-sm font-semibold rounded-full w-full" onClick={closeMobileMenu}>
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
