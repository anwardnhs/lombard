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

// Placeholder assets
import lombardt from "@/assets/hq11.jpg";
import careers from "@/assets/careers.jpg";

const CorporateProfileSection = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Enhanced scroll spy with threshold
  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button
      setShowScrollTop(window.scrollY > 800);

      const sections = ["overview", "ownership", "history", "g4", "structure"];
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
                    <NavItem id="g4" label="The G4 Partners" number="04" />
                    <NavItem id="structure" label="Structure" number="05" />
                  </div>
                </nav>
                
                {/* Enhanced CTA card with better contrast */}
                <motion.div 
                  className="bg-[#0F120F] text-white p-8 rounded-none shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaFilePdf className="text-3xl mb-5 text-[#C7D3BC]" />
                  <h3 className="font-serif text-xl mb-3 leading-tight">Investor Fact Sheet</h3>
                  <p className="text-sm text-white/70 mb-8 leading-relaxed">
                    Download our comprehensive Q4 2025 corporate profile and investor presentation.
                  </p>
                  <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#C7D3BC] hover:text-white transition-colors group py-2">
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
                    <div className="bg-[#0F120F] text-white p-10 h-full">
                      <h3 className="font-serif text-2xl mb-10 text-[#C7D3BC] pb-4 border-b border-white/10">
                        Key Metrics (2025)
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
                        {[
                          { icon: FaChartPie, label: "Total Assets", value: "₦36.5", unit: "T", usd: "$25.2 Billion" },
                          { icon: FaBuilding, label: "Market Cap", value: "₦6.5", unit: "T", usd: "$4.48 Billion" },
                          { icon: FaUsers, label: "Employees", value: "24,800", unit: "", usd: "" },
                          { icon: FaGlobe, label: "Markets", value: "14", unit: "", usd: "Pan-African" },
                        ].map((metric, i) => (
                          <div key={i}>
                            <div className="flex items-center gap-2 mb-3">
                              <metric.icon className="text-[#C7D3BC] text-sm" />
                              <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
                                {metric.label}
                              </p>
                            </div>
                            <p className="text-4xl font-semibold mb-1">
                              {metric.value}
                              {metric.unit && <span className="text-lg font-bold text-[#C7D3BC] ml-0.5">{metric.unit}</span>}
                            </p>
                            {metric.usd && (
                              <p className="text-xs font-mono text-white/40">{metric.usd}</p>
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
                    <div className="bg-[#0F120F] text-white p-8 sticky top-32">
                      <h4 className="font-serif text-xl mb-5 text-[#C7D3BC]">Founding Consortium</h4>
                      <div className="space-y-4">
                        <div className="pb-4 border-b border-white/10">
                          <p className="text-xs uppercase tracking-wider text-white/50 mb-2">Collective Stake</p>
                          <p className="text-3xl font-bold">28.5%</p>
                        </div>
                        <p className="text-sm text-white/80 leading-relaxed">
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

              {/* 4. THE G4 PARTNERS - Enhanced cards with better readability */}
              <section id="g4" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-5xl font-mono font-bold text-[#0F120F]/10">04</span>
                  <h2 className="font-serif text-4xl text-[#0F120F]">The "G4" Partners</h2>
                </div>
                
                {/* Enhanced hero image */}
                <figure className="mb-16">
                  <div className="w-full h-[500px] bg-[#E5E5E5] overflow-hidden border-2 border-[#0F120F]/10 shadow-lg">
                    <img
                      src={careers}
                      alt="Founding partners"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm text-[#0F120F]/60 italic text-center">
                    The founding consortium that transformed Lombard
                  </figcaption>
                </figure>

                {/* Enhanced partner cards with better spacing (Fitt's Law) */}
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      name: "Mr. Anwar Alhassan, CFR",
                      role: "Group Chairman",
                      age: "64",
                      bio: "Seasoned banking leader with four decades of experience in global structured finance. Former Vice President at Citibank (New York/London) and Group CEO (1994–2010). Serves on the Mo Ibrahim Foundation Board.",
                      edu: "Economics (ABU), MBA (INSEAD)"
                    },
                    {
                      name: "Mr. Obi Nnamani, CFA",
                      role: "NED, Capital Markets",
                      age: "59",
                      bio: "Former Goldman Sachs M&A executive and founder of Nnamani Capital. Led the build‑out of Lombard's capital markets franchise and advisory platform across Africa.",
                      edu: "Economics (Oxford), CFA Charterholder"
                    },
                    {
                      name: "Otunba Folarin Bakare, CON",
                      role: "Chairman, Lombard Bank",
                      age: "63",
                      bio: "Operations and scaling specialist who built the 500+ branch footprint and national agent banking network. Former Operations Manager at Unilever Nigeria.",
                      edu: "BSc Industrial Engineering (Unilag)"
                    },
                    {
                      name: "Mr. Abdullahi Kurfi, OON",
                      role: "NED, Lombard HoldCo",
                      age: "62",
                      bio: "Risk governance authority and architect of the Lombard Enterprise Risk Framework (LERF). Former Risk Analyst at Swiss Re, Zurich, with deep expertise in Basel-aligned risk controls.",
                      edu: "Actuarial Science (LSE), MSc Financial Engineering (MIT)"
                    }
                  ].map((partner, i) => (
                    <motion.div 
                      key={i} 
                      className="bg-white p-10 border-2 border-[#0F120F]/10 hover:border-[#0F120F]/30 hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -4 }}
                    >
                      <div className="mb-6 pb-6 border-b-2 border-[#0F120F]/10">
                        <h3 className="font-serif text-2xl text-[#0F120F] mb-2 leading-tight">{partner.name}</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#C7D3BC]">{partner.role}</p>
                      </div>
                      
                      <p className="text-base text-[#0F120F]/80 leading-relaxed mb-8 min-h-[120px]">
                        {partner.bio}
                      </p>
                      
                      <div className="pt-6 border-t border-[#0F120F]/10">
                        <p className="text-xs text-[#0F120F]/60 uppercase tracking-wide mb-1">Education</p>
                        <p className="text-sm text-[#0F120F]/90 font-medium">{partner.edu}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* 5. STRUCTURE - Enhanced cards with better visual hierarchy */}
              <section id="structure" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-5xl font-mono font-bold text-[#0F120F]/10">05</span>
                  <h2 className="font-serif text-4xl text-[#0F120F]">Operating Structure</h2>
                </div>
                
                <div className="space-y-10">
                  
                  {/* Enhanced Bank subsidiary card */}
                  <div className="group border-2 border-[#0F120F]/10 bg-white overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="bg-[#0F120F] text-white p-6 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Subsidiary A</span>
                        <h3 className="font-serif text-2xl mt-1">Lombard Bank Plc</h3>
                      </div>
                      <span className="px-4 py-2 bg-[#C7D3BC] text-[#0F120F] text-xs font-bold uppercase tracking-wider">
                        Commercial Banking
                      </span>
                    </div>
                    
                    <div className="p-10">
                      <div className="flex flex-col md:flex-row justify-between mb-8 pb-8 border-b-2 border-[#0F120F]/10">
                        <div>
                          <p className="text-sm text-[#0F120F]/70 mb-2 uppercase tracking-wider font-semibold">Flagship Banking Subsidiary</p>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                          <p className="text-xs uppercase font-bold text-[#0F120F]/60 mb-1">Chief Executive Officer</p>
                          <p className="font-bold text-lg">Mrs. Kemi Adeleke</p>
                        </div>
                      </div>
                      
                      <p className="text-base text-[#0F120F]/80 leading-loose mb-10">
                        Lombard Bank Plc serves Corporate & Investment, Commercial, and Retail clients. The Bank anchors
                        the Group's balance sheet and distribution network, providing the scale required to finance
                        households and enterprises across priority sectors.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-[#F9F9F7] p-6 border-l-4 border-[#C7D3BC]">
                          <h4 className="font-bold text-[#0F120F] mb-4 uppercase text-xs tracking-widest">Network Scale</h4>
                          <ul className="space-y-3 text-base text-[#0F120F]/85">
                            <li className="flex items-start gap-2">
                              <span className="text-[#C7D3BC] mt-1">•</span>
                              <span>535 branches (Nigeria: 430 | Regional: 105)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#C7D3BC] mt-1">•</span>
                              <span>48,000+ agent banking locations</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-[#F9F9F7] p-6 border-l-4 border-[#C7D3BC]">
                          <h4 className="font-bold text-[#0F120F] mb-4 uppercase text-xs tracking-widest">Business Units</h4>
                          <p className="text-base text-[#0F120F]/85 leading-relaxed">
                            Retail Banking, Corporate Banking, SME Banking, and Private Banking
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Capital & Asset Management Grid */}
                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Capital Markets */}
                    <div className="border-2 border-[#0F120F]/10 bg-white hover:shadow-xl transition-all duration-300">
                      <div className="bg-[#0F120F]/5 p-6 border-b-2 border-[#0F120F]/10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F120F]/60">Subsidiary B</span>
                        <h3 className="font-serif text-xl mt-1 text-[#0F120F]">Lombard Capital Markets</h3>
                        <p className="text-xs text-[#0F120F]/60 mt-2 uppercase tracking-wider font-semibold">Investment Banking</p>
                      </div>
                      
                      <div className="p-8">
                        <div className="mb-6 pb-4 border-b border-[#0F120F]/10">
                          <p className="text-xs uppercase tracking-wider text-[#0F120F]/60 mb-1">Chief Executive Officer</p>
                          <p className="font-bold text-base">Mr. Tunde Balogun</p>
                        </div>
                        
                        <p className="text-base text-[#0F120F]/80 leading-relaxed mb-6">
                          The investment banking platform delivers advisory, capital raising, and structured finance
                          solutions for corporates, sovereigns, and institutional investors across Africa.
                        </p>
                        
                        <ul className="space-y-3 text-sm text-[#0F120F]/85">
                          <li className="flex items-start gap-2">
                            <span className="text-[#C7D3BC] mt-1">•</span>
                            <span>Lombard Securities (leading NGX broker by volume)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#C7D3BC] mt-1">•</span>
                            <span>M&A and strategic advisory</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#C7D3BC] mt-1">•</span>
                            <span>Structured finance and project finance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#C7D3BC] mt-1">•</span>
                            <span>Private equity and principal investments</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Asset Management */}
                    <div className="border-2 border-[#0F120F]/10 bg-white hover:shadow-xl transition-all duration-300">
                      <div className="bg-[#0F120F]/5 p-6 border-b-2 border-[#0F120F]/10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F120F]/60">Subsidiary C</span>
                        <h3 className="font-serif text-xl mt-1 text-[#0F120F]">Lombard Asset Management</h3>
                        <p className="text-xs text-[#0F120F]/60 mt-2 uppercase tracking-wider font-semibold">Wealth & Asset Management</p>
                      </div>
                      
                      <div className="p-8">
                        <div className="mb-6 pb-4 border-b border-[#0F120F]/10">
                          <p className="text-xs uppercase tracking-wider text-[#0F120F]/60 mb-1">Chief Executive Officer</p>
                          <p className="font-bold text-base">Mrs. Zainab Tijani, CFA</p>
                        </div>
                        
                        <p className="text-base text-[#0F120F]/80 leading-relaxed mb-6">
                          The wealth platform manages pensions, trusts, and investments for institutions and individuals,
                          leveraging a disciplined investment process and strong governance standards.
                        </p>
                        
                        <ul className="space-y-3 text-sm text-[#0F120F]/85">
                          <li className="flex items-start gap-2">
                            <span className="text-[#C7D3BC] mt-1">•</span>
                            <span>Licensed Pension Fund Administrator (PFA)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#C7D3BC] mt-1">•</span>
                            <span>Corporate trusteeship and estate planning</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#C7D3BC] mt-1">•</span>
                            <span>$50M fintech and growth‑equity fund</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Insurance */}
                  <div className="border-2 border-[#0F120F]/10 bg-white hover:shadow-xl transition-all duration-300">
                    <div className="bg-[#0F120F]/5 p-6 border-b-2 border-[#0F120F]/10 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F120F]/60">Subsidiary D</span>
                        <h3 className="font-serif text-xl mt-1 text-[#0F120F]">Insurance Operations</h3>
                      </div>
                      <span className="text-xs text-[#0F120F]/60 uppercase tracking-wider font-semibold">Insurance</span>
                    </div>
                    
                    <div className="p-10 grid md:grid-cols-2 gap-10">
                      <div className="border-l-4 border-[#C7D3BC] pl-6">
                        <h4 className="font-serif text-xl mb-3 text-[#0F120F]">General Insurance Plc</h4>
                        <div className="mb-4 pb-4 border-b border-[#0F120F]/10">
                          <p className="text-xs uppercase tracking-wider text-[#0F120F]/60 mb-1">CEO</p>
                          <p className="font-bold">Mr. Ikenna Okonkwo</p>
                        </div>
                        <p className="text-base text-[#0F120F]/80 leading-relaxed">
                          Licensed by NAICOM to provide general, marine, and commercial risk coverage supported by
                          disciplined underwriting and claims management.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-[#C7D3BC] pl-6">
                        <h4 className="font-serif text-xl mb-3 text-[#0F120F]">Life Assurance Ltd</h4>
                        <div className="mb-4 pb-4 border-b border-[#0F120F]/10">
                          <p className="text-xs uppercase tracking-wider text-[#0F120F]/60 mb-1">CEO</p>
                          <p className="font-bold">Mrs. Nifemi Ademola</p>
                        </div>
                        <p className="text-base text-[#0F120F]/80 leading-relaxed">
                          Life protection, group cover, and annuity solutions designed for individuals, families, and
                          corporates.
                        </p>
                      </div>
                    </div>
                  </div>

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
