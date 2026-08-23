import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBuilding, 
  FaGlobe, 
  FaUsers, 
  FaChartPie, 
  FaArrowRight, 
  FaLandmark, 
  FaBriefcase,
  FaShieldHalved,
  FaFileContract,
  FaDownload,
  FaFilePdf,
  FaChevronUp
} from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { founders as g4Founders, subsidiaries as groupSubsidiaries, holdCoMetrics } from "@/data/lombard";

// Placeholder assets
import lombardt from "@/assets/hq11.jpg";
import careers from "@/assets/careers.jpg";
import anwar from "@/assets/anwar.png";
import chidi from "@/assets/chidi.png";
import babatunde from "@/assets/babatunde.png";
import kurfi from "@/assets/Ebuka.png";

const CorporateProfileSection = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Enhanced scroll spy with threshold
  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button
      setShowScrollTop(window.scrollY > 800);

      const sections = ["overview", "ownership", "history", "g4"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ 
        top: elementPosition - offset, 
        behavior: "smooth" 
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Enhanced navigation with better visual hierarchy (Hick's Law)
  const NavItem = ({ id, label, number }: { id: string, label: string, number: string }) => (
    <button 
      onClick={() => scrollTo(id)}
      className={`block w-full text-left py-4 px-6 rounded-lg transition-all duration-200 group ${
        activeSection === id 
          ? "bg-[#0F120F] text-white shadow-lg" 
          : "hover:bg-[#0F120F]/5 text-[#0F120F]/70 hover:text-[#0F120F]"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`text-xs font-mono font-bold transition-colors ${
          activeSection === id ? "text-[#C7D3BC]" : "text-[#0F120F]/40 group-hover:text-[#0F120F]/60"
        }`}>
          {number}
        </span>
        <span className="text-sm font-semibold tracking-wide">
          {label}
        </span>
      </div>
    </button>
  );

  return (
    <>
      <Header />
      <div
        className="fixed top-0 left-0 right-0 h-20 sm:h-24 bg-[#0F120F] z-40"
        aria-hidden="true"
      />
      
      <div className="bg-[#F9F9F7] font-poppins text-[#0F120F] min-h-screen pt-32 pb-24">
        <div className="container mx-auto max-w-[1400px] px-6 lg:px-12">
          
          {/* --- ENHANCED PAGE HEADER with better visual hierarchy --- */}
          <div className="mb-16 pb-10 border-b-2 border-[#0F120F]">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Breadcrumbs items={[{ label: "Corporate Profile" }]} className="mb-6" />
                  <span className="inline-block px-4 py-1.5 bg-[#0F120F] text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-6">
                    Who We Are
                  </span>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-[#0F120F] tracking-tight mb-8">
                    Corporate Profile
                  </h1>
                  <p className="text-xl leading-relaxed text-[#0F120F]/85 max-w-2xl">
                    Lombard HoldCo Plc is a diversified financial services group delivering integrated banking, capital
                    markets, insurance, and investment platforms across Africa.
                  </p>
                </motion.div>
              </div>
              
              {/* Enhanced ticker cards with better spacing (Fitt's Law) */}
              <div className="flex flex-col gap-4 min-w-[200px]">
                <div className="bg-[#0F120F] p-6 hover:bg-[#0F120F]/90 transition-colors">
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2">NGX Ticker</p>
                  <p className="font-mono text-2xl text-white font-bold">LOMBARD</p>
                </div>
                <div className="bg-[#0F120F] p-6 hover:bg-[#0F120F]/90 transition-colors">
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2">LSE Ticker</p>
                  <p className="font-mono text-2xl text-white font-bold">LMB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 xl:gap-16">
            
            {/* --- ENHANCED SIDEBAR with better visual grouping --- */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                <nav className="mb-10" aria-label="Page sections">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F120F]/50 mb-6 px-6">
                    Quick Navigation
                  </h2>
                  <div className="flex flex-col gap-2">
                    <NavItem id="overview" label="At A Glance" number="01" />
                    <NavItem id="ownership" label="Shareholding" number="02" />
                    <NavItem id="history" label="Our History" number="03" />
                    <NavItem id="g4" label="Founding Partners" number="04" />
                  </div>
                </nav>
                
                {/* Enhanced CTA card with better contrast */}
                <motion.div 
                  className="bg-white border-2 border-[#0F120F]/10 text-[#0F120F] p-8 hover:border-[#C7D3BC] hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <FaFilePdf className="text-3xl mb-5 text-[#C7D3BC]" />
                  <h3 className="font-serif text-xl mb-3 leading-tight">Investor Fact Sheet</h3>
                  <p className="text-sm text-[#0F120F]/70 mb-8 leading-relaxed">
                    Download our comprehensive Q4 2025 corporate profile and investor presentation.
                  </p>
                  <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#0F120F] hover:text-[#C7D3BC] transition-colors group py-2">
                    <FaDownload className="text-base group-hover:animate-bounce" />
                    Download PDF
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>

            {/* --- ENHANCED MAIN CONTENT with improved readability --- */}
            <div className="lg:col-span-9 space-y-24">
              
              {/* 1. OVERVIEW - Enhanced layout with better information hierarchy */}
              <section id="overview" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-5xl font-mono font-bold text-[#0F120F]/10">01</span>
                  <h2 className="font-serif text-4xl text-[#0F120F]">At A Glance</h2>
                </div>
                
                {/* Enhanced image with caption */}
                <figure className="mb-12">
                  <div className="w-full h-[600px] bg-[#E5E5E5] overflow-hidden border-2 border-[#0F120F]/10 shadow-lg">
                    <img
                      src={lombardt}
                      alt="The Lombard Tower, Lagos"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm text-[#0F120F]/60 italic text-center">
                    The Lombard Tower — 44 Marina, Lagos Island
                  </figcaption>
                </figure>

                {/* Enhanced two-column layout with better spacing */}
                <div className="grid lg:grid-cols-5 gap-10 mb-16">
                  <div className="lg:col-span-2">
                    <h3 className="font-serif text-2xl mb-8 text-[#0F120F]">Corporate Information</h3>
                    <dl className="space-y-6">
                      {[
                        { icon: FaFileContract, label: "Incorporation", value: "Nigeria (RC 10442)" },
                        { icon: FaLandmark, label: "Headquarters", value: "The Lombard Tower, 44 Marina, Lagos Island, Lagos" },
                        { icon: FaBriefcase, label: "Auditors", value: "PwC International" },
                        { icon: FaShieldHalved, label: "Credit Ratings", value: "Moody's: B2 (Stable) | Fitch: B+ (Stable)" },
                      ].map((item, i) => (
                        <div key={i} className="pb-6 border-b border-[#0F120F]/10 last:border-0">
                          <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#0F120F]/60 mb-3">
                            <item.icon className="text-sm text-[#0F120F]/40" />
                            {item.label}
                          </dt>
                          <dd className="text-base leading-relaxed text-[#0F120F]/90">
                            {item.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  
                  {/* Enhanced metrics card with better visual hierarchy */}
                  <div className="lg:col-span-3">
                    <div className="bg-white border-2 border-[#0F120F]/10 text-[#0F120F] p-10 h-full hover:shadow-xl hover:border-[#C7D3BC] transition-all duration-300">
                      <h3 className="font-serif text-2xl mb-10 text-[#0F120F] pb-4 border-b border-[#0F120F]/10">
                        Group Key Metrics (2025)
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
                        {holdCoMetrics.map((metric, i) => (
                          <div key={i}>
                            <div className="flex items-center gap-2 mb-2">
                              <FaChartPie className="text-[#C7D3BC] text-xs" />
                              <p className="text-[10px] uppercase tracking-widest text-[#0F120F]/50 font-bold">
                                {metric.label}
                              </p>
                            </div>
                            <p className="text-3xl font-semibold mb-1 text-[#0F120F]">
                              {metric.prefix}{metric.value}{metric.suffix}
                            </p>
                            {metric.subValue && (
                              <p className="text-xs font-mono text-[#0F120F]/50">{metric.subValue}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced global presence section */}
                <div className="bg-white border-2 border-[#0F120F]/10 p-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0F120F]/60 mb-5 flex items-center gap-2">
                    <FaGlobe className="text-base" />
                    Global Presence
                  </h4>
                  <p className="text-lg leading-loose text-[#0F120F]/85">
                    Nigeria, Ghana, The Gambia, Sierra Leone, Côte d'Ivoire, Senegal, Kenya, Rwanda, Uganda, Tanzania, DR Congo, Cameroon, Zambia, and Mozambique.
                  </p>
                </div>
              </section>

              {/* 2. OWNERSHIP - Enhanced table with better readability */}
              <section id="ownership" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-5xl font-mono font-bold text-[#0F120F]/10">02</span>
                  <h2 className="font-serif text-4xl text-[#0F120F]">Shareholding Structure</h2>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2">
                    <p className="text-base text-[#0F120F]/80 leading-loose mb-10">
                      The Group is anchored by a founding consortium of four partners holding direct stakes through SPVs,
                      complemented by long-standing institutional ownership from the African Development Bank (AFDB) and a
                      broad public float across NGX and LSE.
                    </p>
                    
                    {/* Enhanced table with better spacing */}
                    <div className="bg-white border-2 border-[#0F120F]/10 overflow-hidden">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-[#0F120F] text-white">
                            <th className="py-5 px-6 font-bold uppercase tracking-wider text-xs">Shareholder</th>
                            <th className="py-5 px-6 font-bold uppercase tracking-wider text-xs">Category</th>
                            <th className="py-5 px-6 font-bold uppercase tracking-wider text-xs text-right">Holding</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: "Founding Consortium", category: "Direct Holdings (SPVs)", holding: "28.5%", highlight: false },
                            { name: "African Development Bank (AFDB)", category: "Institutional (Long-term)", holding: "4.2%", highlight: true },
                            { name: "Institutional & Public Float", category: "NGX / LSE Float", holding: "67.3%", highlight: false },
                          ].map((row, i) => (
                            <tr 
                              key={i}
                              className={`border-b border-[#0F120F]/10 last:border-0 transition-colors ${
                                row.highlight ? "bg-[#C7D3BC]/10" : "hover:bg-[#0F120F]/5"
                              }`}
                            >
                              <td className="py-6 px-6 font-semibold text-base">{row.name}</td>
                              <td className="py-6 px-6 text-[#0F120F]/70 text-sm">{row.category}</td>
                              <td className="py-6 px-6 text-right font-mono font-bold text-lg">{row.holding}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="mt-6 text-sm text-[#0F120F]/70 leading-relaxed italic px-2">
                      * The AFDB remains Lombard's longest-standing institutional investor, maintaining its stake through selective participation in capital raises.
                    </p>
                  </div>
                  
                  {/* Enhanced info card */}
                  <div className="lg:col-span-1">
                    <div className="bg-white border-2 border-[#0F120F]/10 text-[#0F120F] p-8 sticky top-32">
                      <h4 className="font-serif text-xl mb-5 text-[#0F120F]">Founding Consortium</h4>
                      <div className="space-y-4">
                        <div className="pb-4 border-b border-[#0F120F]/10">
                          <p className="text-xs uppercase tracking-wider text-[#0F120F]/50 mb-2">Collective Stake</p>
                          <p className="text-3xl font-bold">28.5%</p>
                        </div>
                        <p className="text-sm text-[#0F120F]/80 leading-relaxed">
                          The founding consortium collectively holds 28.5% through SPVs, providing long-term stewardship alongside institutional shareholders and a broad public float.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. HISTORY - Enhanced timeline with better visual flow */}
              <section id="history" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-5xl font-mono font-bold text-[#0F120F]/10">03</span>
                  <h2 className="font-serif text-4xl text-[#0F120F]">Corporate History</h2>
                </div>
                
                <div className="relative border-l-4 border-[#0F120F]/15 ml-6 pl-10 space-y-16">
                  {[
                    { 
                      year: "1954", 
                      label: "The Beginning",
                      title: "Establishment", 
                      text: "The Lombard Bank of West Africa established as subsidiary of British merchant bank Lombard & Sons (London)." 
                    },
                    { 
                      year: "1994", 
                      label: "The Turnaround",
                      title: "The Acquisition", 
                      text: "Three businessmen (Alhassan, Bakare, Kurfi) and institutional investors acquire 87% stake for ₦420 million ($14M) in a leveraged buyout structured by Standard Chartered. Anwar Alhassan appointed CEO." 
                    },
                    { 
                      year: "2002", 
                      label: "Expansion",
                      title: "Capital Markets Entry", 
                      text: "Lombard acquires Nnamani Capital. Obi Nnamani joins as the 4th Partner. First private placement raises ₦3.5 billion." 
                    },
                    { 
                      year: "2007", 
                      label: "Public Listing",
                      title: "NSE IPO", 
                      text: "Lombard Banking Group lists on the Nigerian Stock Exchange. IPO raises ₦18.5 billion. Stock opens at ₦42." 
                    },
                    { 
                      year: "2010", 
                      label: "Strategic Shift",
                      title: "HoldCo Structure", 
                      text: "Following the repeal of Universal Banking, Lombard adopts the HoldCo model. Dr. Chide Okonkwo recruited as Group CEO." 
                    },
                    { 
                      year: "2012", 
                      label: "Regional Dominance",
                      title: "Pan-African M&A", 
                      text: "Lombard executes landmark $320M acquisition of BIA Bank Group, securing licenses in Senegal, Côte d'Ivoire, and Cameroon." 
                    },
                    { 
                      year: "2018", 
                      label: "Global Capital",
                      title: "London Listing", 
                      text: "Secondary GDR listing on LSE (ticker: LMB). Offering raises $660 million to fund digital transformation." 
                    },
                    { 
                      year: "2024", 
                      label: "Future Ready",
                      title: "Hyper-Growth", 
                      text: "Digital banking platform surpasses 10 million users. ₦540B capital raise via rights issue and institutional placement." 
                    },
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="relative group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <span className="absolute -left-[52px] top-2 w-6 h-6 rounded-full bg-white border-4 border-[#0F120F] group-hover:bg-[#C7D3BC] transition-all duration-300 shadow-lg" />
                      
                      <div className="bg-white border-2 border-[#0F120F]/10 p-8 hover:border-[#0F120F]/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-wrap items-baseline gap-4 mb-4">
                          <span className="font-mono text-3xl font-bold text-[#0F120F]">{item.year}</span>
                          <span className="px-3 py-1 bg-[#C7D3BC]/20 text-xs font-bold uppercase tracking-wider text-[#0F120F]/80">
                            {item.label}
                          </span>
                        </div>
                        <h4 className="text-xl font-serif font-bold mb-3 text-[#0F120F]">{item.title}</h4>
                        <p className="text-base text-[#0F120F]/80 leading-relaxed">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* 4. FOUNDING PARTNERS - Clean, image-led grid */}
              <section id="g4" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-5xl font-mono font-bold text-[#0F120F]/10">04</span>
                  <h2 className="font-serif text-4xl text-[#0F120F]">Founding Partners</h2>
                </div>
                
                <p className="text-lg text-[#0F120F]/70 leading-relaxed mb-12 max-w-3xl">
                  The founding consortium that transformed Lombard into a pan-African powerhouse through the 1994 leveraged buyout.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Mr. Anwar Alhassan, CFR",
                      role: "Group Chairman",
                      bio: "Seasoned banking leader and former Citibank Vice President. Led the 1994 buyout and served as Group CEO until 2010.",
                      image: anwar
                    },
                    {
                      name: "Mr. Obi Nnamani, CFA",
                      role: "NED, Capital Markets",
                      bio: "Former Goldman Sachs M&A executive. Led the build-out of Lombard's capital markets franchise across Africa.",
                      image: chidi // Using chidi placeholder as requested
                    },
                    {
                      name: "Otunba Folarin Bakare, CON",
                      role: "Chairman, Lombard Bank",
                      bio: "Operations specialist who architected Lombard's 500+ branch footprint and national agent banking network.",
                      image: babatunde // Using babatunde placeholder as requested
                    },
                    {
                      name: "Mr. Abdullahi Kurfi, OON",
                      role: "NED, Lombard HoldCo",
                      bio: "Risk governance authority and architect of the Lombard Enterprise Risk Framework. Former Risk Analyst at Swiss Re.",
                      image: kurfi
                    }
                  ].map((partner, i) => (
                    <motion.div 
                      key={i} 
                      className="group flex flex-col"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-[#F9F9F7] mb-6">
                        <img 
                          src={partner.image} 
                          alt={partner.name}
                          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="font-serif text-xl text-[#0F120F] mb-1 leading-tight">{partner.name}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#0F120F]/50 mb-4">{partner.role}</p>
                      <p className="text-sm text-[#0F120F]/70 leading-relaxed">
                        {partner.bio}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>



            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button (Fitt's Law - large touch target) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 bg-[#0F120F] text-white p-5 rounded-full shadow-2xl hover:bg-[#C7D3BC] hover:text-[#0F120F] transition-all duration-300 group"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronUp className="text-2xl group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default CorporateProfileSection;
