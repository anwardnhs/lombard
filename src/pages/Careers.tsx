import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, 
  FaGraduationCap, 
  FaChartLine, 
  FaCode, 
  FaScaleBalanced, 
  FaLeaf, 
  FaBuildingColumns, 
  FaGlobe,
  FaCheck,
  FaMagnifyingGlass,
  FaLocationDot
} from "react-icons/fa6";

// Assuming these exist in your project structure
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

// Asset Imports (Placeholders kept)
import heroImg from "@/assets/meeting.jpg";
import culture1 from "@/assets/career.avif";
import culture2 from "@/assets/hq11.jpg";

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const tracks = [
    { title: "Investment Banking", icon: <FaChartLine />, desc: "M&A, Equity Capital Markets, and Debt Structuring.", count: "12 Roles" },
    { title: "Corporate Banking", icon: <FaBuildingColumns />, desc: "Relationship management for blue-chip conglomerates.", count: "8 Roles" },
    { title: "Risk & Compliance", icon: <FaScaleBalanced />, desc: "Credit risk, market risk, and regulatory governance.", count: "15 Roles" },
    { title: "Technology & Digital", icon: <FaCode />, desc: "Software engineering, data science, and cybersecurity.", count: "24 Roles" },
    { title: "Operations", icon: <FaGlobe />, desc: "Global settlements, treasury ops, and client services.", count: "10 Roles" },
    { title: "Sustainability", icon: <FaLeaf />, desc: "ESG strategy, green financing, and impact reporting.", count: "4 Roles" },
  ];

  const allRoles = [
    { id: 1, title: "Senior Associate, M&A", dept: "Capital Markets", company: "Lombard Capital", loc: "Lagos, Nigeria", type: "Full-Time" },
    { id: 2, title: "Vice President, Credit Risk", dept: "Risk Mgmt", company: "Lombard HoldCo", loc: "London, UK", type: "Full-Time" },
    { id: 3, title: "Lead Software Engineer", dept: "Technology", company: "Lombard Digital", loc: "Nairobi, Kenya", type: "Full-Time" },
    { id: 4, title: "Head of Private Banking", dept: "Wealth Mgmt", company: "Lombard Asset Mgmt", loc: "Abuja, Nigeria", type: "Full-Time" },
    { id: 5, title: "Legal Counsel", dept: "Legal", company: "Lombard Bank", loc: "Lagos, Nigeria", type: "Full-Time" },
    { id: 6, title: "Graduate Trainee 2026", dept: "Early Careers", company: "Group HR", loc: "Pan-African", type: "Program" },
  ];

  // Logic: Real-time filtering reduces cognitive load (Hick's Law)
  const filteredRoles = allRoles.filter(role => 
    role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    role.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
    role.loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F9F9F7] font-sans text-[#0F120F] min-h-screen">
      <Header />
      
      {/* Decorative Header Overlay - Kept subtle */}
      <div className="fixed top-0 left-0 w-full h-20 bg-[#0F120F]/90 backdrop-blur-md z-40 border-b border-[#0F120F]/5" aria-hidden="true" />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 lg:pt-48 pb-20 px-6 lg:px-12 border-b border-[#0F120F]/5">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Breadcrumbs items={[{ label: "Careers" }]} className="mb-8 opacity-60" />
              
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8 text-[#0F120F]">
                Shape the Future of <br />
                <span className="italic text-[#0F120F]/60">African Finance.</span>
              </h1>
              
              <p className="text-xl text-[#0F120F]/70 leading-relaxed mb-10 max-w-lg">
                Join a high-performance team driving growth, stewardship, and value across the continent's major markets.
              </p>
              
              {/* Fitts' Law: Large, clearly separated touch targets */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('open-roles').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#0F120F] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#2A332A] transition-colors flex justify-center items-center gap-3 rounded-sm"
                >
                  View Open Roles <FaArrowRight />
                </button>
                <button className="px-8 py-4 border border-[#0F120F]/20 text-[#0F120F] text-sm font-bold uppercase tracking-widest hover:border-[#0F120F] transition-colors flex justify-center items-center gap-3 rounded-sm bg-white">
                  Graduate Program <FaGraduationCap className="text-lg" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative aspect-[4/3] hidden lg:block"
            >
              <img 
                src={heroImg} 
                alt="Lombard executive team meeting" 
                className="w-full h-full object-cover rounded-sm shadow-xl"
              />
              {/* Decorative border offset */}
              <div className="absolute top-4 -right-4 w-full h-full border border-[#0F120F]/10 -z-10 rounded-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION (Why Lombard) --- */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-[1280px]">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">The Lombard Standard</h2>
            <p className="text-lg text-[#0F120F]/60 leading-relaxed">
              We offer more than employment; we provide a platform for meaningful impact. Our culture is anchored in three core pillars designed to support long-term professional growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { title: "Cross-Entity Mobility", desc: "Gain experience across commercial banking, investment banking, asset management, and insurance across 14 markets and our London office." },
              { title: "Strict Meritocracy", desc: "Career advancement is determined purely by contribution and fiduciary leadership, fast-tracking exceptional talent regardless of tenure." },
              { title: "Institutional Impact", desc: "Structure landmark sovereign bonds, underwrite renewable infrastructure, and build financial platforms shaping African economies." }
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                <div className="w-12 h-[2px] bg-[#C7D3BC] mb-6 group-hover:w-24 group-hover:bg-[#0F120F] transition-all duration-300" />
                <h3 className="font-serif text-2xl mb-4 text-[#0F120F]">{item.title}</h3>
                <p className="text-base text-[#0F120F]/70 leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CULTURE SECTION --- */}
      <section className="py-24 px-6 lg:px-12 bg-[#F9F9F7]">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Visual Balance */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 z-10">
                 <img src={culture1} alt="Collaborative workspace" className="w-full h-full object-cover shadow-lg rounded-sm" />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 z-20 border-4 border-[#F9F9F7]">
                 <img src={culture2} alt="Office lobby" className="w-full h-full object-cover shadow-lg rounded-sm" />
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F]/40 mb-4 block">Our DNA</span>
              <h2 className="font-serif text-4xl mb-6 text-[#0F120F]">Built on Excellence.</h2>
              <p className="text-lg text-[#0F120F]/70 leading-relaxed mb-8">
                We attract individuals who possess not just technical expertise, but the character to act as fiduciaries.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  "Continuous Learning: Access to executive education and professional development programs.",
                  "Client Standards: Institutional service levels with strict risk governance.",
                  "Wellness: Comprehensive health coverage and mental wellness support."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#C7D3BC]/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#4A5D4A]">
                      <FaCheck className="text-xs" />
                    </div>
                    <span className="text-base text-[#0F120F]/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- ROLES SECTION (Hick's Law Optimization) --- */}
      <section id="open-roles" className="py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-[1280px]">
          <div className="bg-[#F9F9F7] border border-[#0F120F]/10 rounded-sm p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-10 items-end">
              <div className="lg:col-span-7">
                <h2 className="font-poppins text-3xl sm:text-4xl font-semibold text-[#0F120F] mb-3">
                  Current Opportunities
                </h2>
                <p className="text-sm sm:text-base text-[#0F120F]/65">
                  Join our team of 24,800+ professionals.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="w-full relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMagnifyingGlass className="text-[#0F120F]/35 group-focus-within:text-[#0F120F] transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search role, department, or city..."
                    className="w-full pl-10 pr-4 py-3.5 bg-white border border-[#0F120F]/15 focus:border-[#0F120F] outline-none transition-colors rounded-sm text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#0F120F]/45">
                  {filteredRoles.length} active role{filteredRoles.length === 1 ? "" : "s"}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {filteredRoles.length > 0 ? (
                  filteredRoles.map((role) => (
                    <motion.article
                      key={role.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      layout
                      className="group bg-white border border-[#0F120F]/10 rounded-sm p-5 sm:p-6 transition-all hover:border-[#6E7E66]/40 hover:shadow-[0_10px_24px_rgba(15,18,15,0.08)]"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                        <div className="min-w-0">
                          <h4 className="font-poppins text-xl sm:text-2xl font-semibold text-[#0F120F] mb-3 group-hover:text-[#2A332A] transition-colors">
                            {role.title}
                          </h4>

                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 bg-[#EEF1EB] text-[#42503D] rounded-sm">
                              {role.dept}
                            </span>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 bg-[#F4F4F0] text-[#0F120F]/70 rounded-sm">
                              {role.type}
                            </span>
                            <span className="text-sm text-[#0F120F]/60 flex items-center gap-2">
                              <FaLocationDot className="text-xs" />
                              {role.loc}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 lg:pl-4">
                          <span className="text-sm text-[#0F120F]/55">{role.company}</span>
                          <button className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.14em] border border-[#0F120F]/20 px-5 py-2.5 rounded-sm hover:bg-[#0F120F] hover:text-white hover:border-[#0F120F] transition-colors">
                            Apply
                            <FaArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))
                ) : (
                  <div className="py-12 text-center text-[#0F120F]/45 italic bg-white border border-[#0F120F]/10 rounded-sm">
                    No roles found matching "{searchQuery}"
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="text-xs font-bold uppercase tracking-[0.14em] border-b border-[#0F120F]/60 pb-1 hover:text-[#0F120F]/70 hover:border-[#0F120F]/40 transition-colors"
              >
                View Archived Roles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRACKS (Re-positioned for flow) --- */}
      <section className="py-24 px-6 lg:px-12 bg-[#EEF1EB] border-t border-[#0F120F]/10">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-14 items-end">
            <div className="lg:col-span-7">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#5f6b56] mb-4">
                Career Architecture
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0F120F] leading-tight">
                Explore Career Paths
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-[#0F120F]/70 leading-relaxed">
              Choose from six specialist tracks aligned to the Group's operating model, each with defined progression and live opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {tracks.map((track, i) => (
              <article
                key={i}
                className="group bg-white border border-[#0F120F]/10 p-6 sm:p-7 rounded-sm hover:border-[#6E7E66]/40 hover:shadow-[0_12px_28px_rgba(15,18,15,0.08)] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-full bg-[#EEF1EB] text-[#4A5D4A] flex items-center justify-center text-lg group-hover:bg-[#C7D3BC]/35 transition-colors">
                    {track.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0F120F]/55">
                    {track.count}
                  </span>
                </div>

                <h3 className="font-poppins text-xl font-semibold text-[#0F120F] mb-2.5 leading-tight">
                  {track.title}
                </h3>
                <p className="text-sm text-[#0F120F]/68 leading-relaxed mb-5">
                  {track.desc}
                </p>

                <div className="pt-4 border-t border-[#0F120F]/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5f6b56]">
                    View Openings
                  </span>
                  <FaArrowRight className="text-[#5f6b56] w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
