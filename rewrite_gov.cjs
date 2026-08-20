const fs = require('fs');

const code = `import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  FaFileContract, 
  FaArrowRight, 
  FaXmark,
  FaArrowDown,
  FaQuoteLeft
} from "react-icons/fa6";

// Asset Imports
import anwar from "@/assets/anwar.png";
import chide from "@/assets/chide.png";
import elena from "@/assets/elena.png";
import femi from "@/assets/femi.png";
import naida from "@/assets/naida.png";
import kurfi from "@/assets/Ebuka.png";
import chidi from "@/assets/chidi.png";
import adewale from "@/assets/adewale.png";
import adesanya from "@/assets/shafiu.png";
import adenike from "@/assets/adaure.png";
import zainabPlaceholder from "@/assets/zainab.png";
import boardImage from "@/assets/board.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";

// EXCO Extra Assets
import babatunde from "@/assets/babatunde.png";
import ngozi from "@/assets/ngozi.png";
import ayomide from "@/assets/ayomide.png";
import sade from "@/assets/sade.png";

interface Leader {
  name: string;
  role: string;
  subRole?: string;
  image: string;
  bio: string;
}

const GovernanceSection = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{[key: string]: boolean}>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("exco");
  const prefersReducedMotion = useReducedMotion();
  
  const excoSectionRef = useRef<HTMLDivElement>(null);
  const boardSectionRef = useRef<HTMLDivElement>(null);
  const committeesSectionRef = useRef<HTMLDivElement>(null);
  const documentsSectionRef = useRef<HTMLDivElement>(null);

  const handleImageLoad = useCallback((name: string) => {
    setImageLoaded(prev => ({ ...prev, [name]: true }));
  }, []);

  const handleOpenModal = useCallback((leader: Leader) => {
    setSelectedLeader(leader);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedLeader(null);
    document.body.style.overflow = '';
  }, []);

  const scrollToSection = useCallback((section: string) => {
    const refs = {
      exco: excoSectionRef,
      board: boardSectionRef,
      committees: committeesSectionRef,
      documents: documentsSectionRef
    };
    refs[section as keyof typeof refs]?.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }, []);

  // Intersection observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sections = [
      { id: 'exco', ref: excoSectionRef },
      { id: 'board', ref: boardSectionRef },
      { id: 'committees', ref: committeesSectionRef },
      { id: 'documents', ref: documentsSectionRef }
    ];

    sections.forEach(({ id, ref }) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.2, rootMargin: '-100px' }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedLeader) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedLeader, handleCloseModal]);

  const executives: Leader[] = [
    { name: "Dr. Chide Okonkwo", role: "Group Chief Executive Officer", image: chide, bio: "Dr. Chide Okonkwo leads Lombard HoldCo's strategic expansion across Africa, bringing over 25 years of global investment banking experience. Previously a Partner at Goldman Sachs (London), he holds a Ph.D. in Financial Engineering from MIT and champions the 'Lombard 4.0' digital transformation strategy." },
    { name: "Mr. Femi Ayodeji, FCA", role: "Group Chief Financial Officer", image: femi, bio: "Mr. Femi Ayodeji oversees the Group's financial integrity, balance sheet optimization, and treasury management. A seasoned Chartered Accountant (FCA) with three decades of experience, he successfully led the Group's recent $500M Eurobond issuance." },
    { name: "Mrs. Adaure Ughara", role: "Group Chief Risk Officer", image: adenike, bio: "Mrs. Adaure Ughara manages enterprise risk frameworks across 14 jurisdictions. With over 20 years in risk management, she oversees credit, market, and operational risk, ensuring the Group's growth strategy operates within Basel III capital requirements." },
    { name: "Mr. Babatunde Williams", role: "Group Chief Investment Officer", image: babatunde, bio: "Mr. Babatunde Williams drives the Group's investment strategy and M&A activities. A veteran of private equity, he manages strategic portfolios in infrastructure, fintech, and renewable energy." },
    { name: "Barr. Shafiu Lawal-Bello, SAN", role: "Group General Counsel", image: adesanya, bio: "Barr. Shafiu Lawal-Bello is a Senior Advocate of Nigeria (SAN) and the Group's chief legal advisor. He oversees Legal and Corporate Governance functions, ensuring adherence to regulatory standards." },
    { name: "Mrs. Ngozi Ibe", role: "Group CHRO", image: ngozi, bio: "Mrs. Ngozi Ibe leads the Group's people strategy, overseeing talent acquisition and leadership development for over 12,000 employees. She champions the 'Lombard Academy' initiative." },
    { name: "Mr. Ayomide Akintola", role: "Group Chief Compliance Officer", image: ayomide, bio: "Mr. Ayomide Akintola oversees Global Compliance, including Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) frameworks. He maintains critical relationships with regulatory bodies across Africa." },
    { name: "Mr. Ebuka Nwafor", role: "Head of Investor Relations", image: kurfi, bio: "Mr. Ebuka Nwafor is the primary liaison between Lombard HoldCo and the global investment community. He manages relationships with institutional investors, rating agencies, and equity analysts." },
    { name: "Ms. Sade Aguta", role: "Group Chief Sustainability Officer", image: sade, bio: "Ms. Sade Aguta drives Lombard's Environmental, Social, and Governance (ESG) agenda. She oversees sustainable banking principles integration and leads the Lombard Foundation's social impact initiatives." }
  ];

  const boardGroups = [
    {
      title: "Executive Directors",
      label: "Executive",
      members: [
        {
          name: "Dr. Chide Okonkwo",
          role: "Group Chief Executive Officer",
          image: chide,
          bio: "Dr. Okonkwo leads Lombard HoldCo's strategic expansion across Africa, bringing over 25 years of global investment banking experience. Prior to joining Lombard, he served as Partner at Goldman Sachs (London), leading the Emerging Markets Structured Finance division. He holds a Ph.D. in Financial Engineering from MIT and is a Chartered Financial Analyst (CFA)."
        },
        {
          name: "Mr. Femi Ayodeji, FCA",
          role: "Group Chief Financial Officer",
          image: femi,
          bio: "Mr. Ayodeji oversees the Group's financial strategy, capital management, and investor relations. A chartered accountant with over 30 years of experience, he previously served as CFO of a leading pan-African financial institution. He is an alumnus of London Business School and a Fellow of the Institute of Chartered Accountants of Nigeria (FCA)."
        }
      ]
    },
    {
      title: "Non-Executive Directors",
      label: "Non-Executive",
      members: [
        {
          name: "Mr. Anwar Alhassan, CFR",
          role: "Non-Executive Chairman",
          image: anwar,
          bio: "Mr. Alhassan brings over four decades of banking leadership to the Board. As Group Chairman, he provides strategic oversight, ensuring regulatory compliance and long-term value creation for shareholders. He holds an MBA from INSEAD and is a recipient of the Commander of the Federal Republic (CFR)."
        },
        {
          name: "Ms. Adenike Okemini",
          role: "Non-Executive Director",
          subRole: "Chair, Investment Committee",
          image: adenike,
          bio: "Ms. Okemini chairs the Board Investment Committee, guiding capital allocation strategies across high-growth sectors. With over 25 years in investment banking and asset management, she previously served as Managing Director of a leading African asset management firm. She is a Chartered Financial Analyst (CFA)."
        },
        {
          name: "Mr. Abdullahi Kurfi",
          role: "Non-Executive Director",
          subRole: "Chair, Risk Committee",
          image: kurfi,
          bio: "Mr. Kurfi chairs the Board Risk Committee, overseeing enterprise risk frameworks and credit policies. His expertise in risk management spans three decades, including service as Chief Risk Officer for a multinational development finance institution. He holds an MSc in Financial Engineering from MIT and is a Fellow of the Institute of Actuaries (FIA)."
        },
        {
          name: "Chief Adetokunbo Adesanya, CFR",
          role: "Non-Executive Director",
          image: adesanya,
          bio: "Chief Adesanya is an industrialist with extensive interests in energy and infrastructure across Africa. His presence on the Board strengthens Lombard's connection to the real sector and provides valuable macroeconomic insights. He is a recipient of the Commander of the Federal Republic (CFR)."
        },
        {
          name: "Hajiya Zainab Gwarzo",
          role: "Non-Executive Director",
          image: zainabPlaceholder,
          bio: "Hajiya Gwarzo brings public sector expertise to the Board, having served as Permanent Secretary in the Federal Ministry of Finance. She provides guidance on government relations, regulatory compliance, and fiscal policy matters. She holds an MSc from the London School of Economics."
        }
      ]
    },
    {
      title: "Independent Non-Executive Directors",
      label: "Independent",
      members: [
        {
          name: "Dr. Elena Moretti",
          role: "Independent Director",
          image: elena,
          bio: "Dr. Moretti is a global economist with a distinguished career at the International Monetary Fund (IMF), where she served as Deputy Director for Africa. She provides macro-prudential oversight and ensures the Group's strategy remains resilient to global economic shifts. She holds a Ph.D. from Oxford."
        },
        {
          name: "Justice Adewale Ogunlaye (Rtd.)",
          role: "Independent Director",
          image: adewale,
          bio: "Justice Ogunlaye is a retired Justice of the Supreme Court of Nigeria. He champions corporate governance, ethics, and legal compliance, ensuring Lombard maintains the highest standards of institutional integrity in the financial services sector."
        },
        {
          name: "Professor Chidi Okoro",
          role: "Independent Director",
          image: chidi,
          bio: "Professor Okoro is a strategy consultant and academic who serves on multiple Fortune 500 boards. As Professor of Strategy at Lagos Business School, he brings analytical rigor to Board deliberations, challenging management on innovation and digital transformation initiatives. He holds a Ph.D. from Harvard."
        },
        {
          name: "Ms. Naida Umar Muhammad",
          role: "Independent Director",
          image: naida,
          bio: "Ms. Muhammad is a technology leader specializing in digital transformation and systems integration. Formerly a Senior Managing Consultant at IBM, she guides the Board on technology risks, cybersecurity, and the evolution of digital banking platforms."
        }
      ]
    }
  ];

  const documents = [
    { title: "Board Charter", href: "/governance/board-charter" },
    { title: "Code of Business Conduct", href: "/governance/code-of-conduct" },
    { title: "Whistleblower Policy", href: "/governance/whistleblower" },
    { title: "Articles of Association", href: "/governance/articles" },
    { title: "Corporate Governance Report", href: "/investors/governance-report" }
  ];

  const NavItem = ({ section, label }: { section: string; label: string }) => (
    <button
      onClick={() => scrollToSection(section)}
      className={\`block w-full text-left py-3 px-6 text-xs font-bold uppercase tracking-[0.15em] transition-all relative \${
        activeSection === section
          ? 'text-[#0F120F]'
          : 'text-[#0F120F]/40 hover:text-[#0F120F]'
      }\`}
    >
      <div className={\`absolute left-0 top-0 bottom-0 w-[3px] transition-all \${
        activeSection === section ? 'bg-[#C7D3BC]' : 'bg-transparent'
      }\`} />
      {label}
    </button>
  );

  return (
    <div className="bg-[#F4F4F0] font-poppins text-[#0F120F] min-h-screen">
      <div className="fixed top-0 left-0 w-full h-20 sm:h-24 bg-[#0a0c0a]/95 backdrop-blur-xl border-b border-white/10 z-40" aria-hidden="true" />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 sm:px-8 border-b border-[#0F120F]/10 bg-[#F9F9F7]">
        <div className="container mx-auto max-w-[1100px] text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-center mb-6">
              <Breadcrumbs items={[{ label: "Leadership & Governance" }]} />
            </div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F120F]/50 mb-8">
              Leadership & Governance
            </span>
            
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0F120F] mb-8 tracking-tight leading-[1.05]">
              Leadership & Board
            </h1>
            
            <div className="w-16 h-[3px] bg-[#C7D3BC] mx-auto mb-10" />
            
            <p className="text-lg sm:text-xl text-[#0F120F]/85 max-w-3xl mx-auto leading-relaxed font-semibold">
              Stewards of our strategy, driving operational excellence, disciplined risk management, and sustainable growth across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Sticky Navigation */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0F120F]/40 mb-6 px-6">
                Page Contents
              </p>
              <nav className="border-l border-[#0F120F]/10" aria-label="Page sections">
                <NavItem section="exco" label="Executive Committee" />
                <NavItem section="board" label="The Board" />
                <NavItem section="committees" label="Committees" />
                <NavItem section="documents" label="Documents" />
              </nav>
            </div>
          </aside>

          {/* Right: Content Sections */}
          <main className="lg:col-span-9 space-y-32">
            
            {/* EXCO Section */}
            <section ref={excoSectionRef} id="exco">
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-3xl sm:text-4xl font-serif text-[#0F120F]">
                  Executive Committee (EXCO)
                </h2>
                <div className="flex-1 h-px bg-[#0F120F]/10" />
              </div>
              <p className="text-[#0F120F]/80 leading-relaxed mb-12 max-w-3xl font-medium text-lg">
                The Executive Committee comprises our most senior management team, responsible for executing the Group’s strategic objectives and overseeing daily operations across all subsidiaries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {executives.map((member, i) => {
                  const isHovered = hoveredCard === member.name;
                  const isOtherHovered = hoveredCard && hoveredCard !== member.name;

                  return (
                    <motion.article
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: prefersReducedMotion ? 0 : 0.5, 
                        delay: prefersReducedMotion ? 0 : i * 0.05 
                      }}
                      onMouseEnter={() => setHoveredCard(member.name)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={\`group bg-white border border-[#0F120F]/10 hover:border-[#C7D3BC]/40 rounded-sm overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_8px_32px_rgba(199,211,188,0.2)] \${isOtherHovered ? 'opacity-50 scale-[0.98]' : 'opacity-100'}\`}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#e5e5e5]">
                        {!imageLoaded[member.name] && (
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse" />
                        )}
                        <img 
                          src={member.image} 
                          alt={\`\${member.name}, \${member.role}\`}
                          onLoad={() => handleImageLoad(member.name)}
                          className={\`w-full h-full object-cover object-top transition-all duration-700 \${
                            imageLoaded[member.name] ? 'opacity-100' : 'opacity-0'
                          } group-hover:scale-105\`}
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 sm:p-7 flex flex-col flex-1">
                        <div className="mb-5">
                          <h3 className="text-lg sm:text-xl font-serif text-[#0F120F] mb-2 leading-tight">
                            {member.name}
                          </h3>
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F120F] mb-1">
                            {member.role}
                          </p>
                        </div>
                        <div className="mb-6 flex-1">
                          <p className="text-sm leading-relaxed text-[#0F120F] font-semibold line-clamp-4">
                            {member.bio}
                          </p>
                        </div>
                        <button 
                          onClick={() => handleOpenModal(member)}
                          className="flex items-center justify-between w-full py-4 border-t border-[#0F120F] text-xs font-bold uppercase tracking-[0.15em] text-[#0F120F] hover:text-[#C7D3BC] transition-colors mt-auto group/btn"
                        >
                          View Full Bio
                          <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[#0F120F] group-hover/btn:bg-[#C7D3BC] group-hover/btn:border-[#C7D3BC] transition-all">
                            <FaArrowRight className="w-3 h-3 text-[#0F120F] transition-colors" />
                          </div>
                        </button>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </section>

            {/* Board Section */}
            <section ref={boardSectionRef} id="board">
              <div className="flex items-center gap-6 mb-16">
                <h2 className="text-3xl sm:text-4xl font-serif text-[#0F120F]">
                  Board of Directors
                </h2>
                <div className="flex-1 h-px bg-[#0F120F]/10" />
              </div>

              {boardGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="mb-20 last:mb-0">
                  <div className="flex items-center gap-6 mb-10">
                    <h3 className="text-2xl font-serif text-[#0F120F]">
                      {group.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {group.members.map((member, i) => {
                      const isHovered = hoveredCard === member.name;
                      const isOtherHovered = hoveredCard && hoveredCard !== member.name;

                      return (
                        <motion.article
                          key={member.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ 
                            duration: prefersReducedMotion ? 0 : 0.5, 
                            delay: prefersReducedMotion ? 0 : i * 0.05 
                          }}
                          onMouseEnter={() => setHoveredCard(member.name)}
                          onMouseLeave={() => setHoveredCard(null)}
                          className={\`group bg-white border border-[#0F120F]/10 hover:border-[#C7D3BC]/40 rounded-sm overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_8px_32px_rgba(199,211,188,0.2)] \${isOtherHovered ? 'opacity-50 scale-[0.98]' : 'opacity-100'}\`}
                        >
                          <div className="relative aspect-[4/5] overflow-hidden bg-[#e5e5e5]">
                            {!imageLoaded[member.name] && (
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse" />
                            )}
                            <img 
                              src={member.image} 
                              alt={\`\${member.name}, \${member.role}\`}
                              onLoad={() => handleImageLoad(member.name)}
                              className={\`w-full h-full object-cover object-top transition-all duration-700 \${
                                imageLoaded[member.name] ? 'opacity-100' : 'opacity-0'
                              } group-hover:scale-105\`}
                              loading="lazy"
                            />
                          </div>

                          <div className="p-6 sm:p-7 flex flex-col flex-1">
                            <div className="mb-5">
                              <h3 className="text-lg sm:text-xl font-serif text-[#0F120F] mb-2 leading-tight">
                                {member.name}
                              </h3>
                              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F120F] mb-1">
                                {member.role}
                              </p>
                            </div>

                            <div className="mb-6 flex-1">
                              <p className="text-sm leading-relaxed text-[#0F120F] font-semibold line-clamp-4">
                                {member.bio}
                              </p>
                            </div>

                            <button 
                              onClick={() => handleOpenModal(member)}
                              className="flex items-center justify-between w-full py-4 border-t border-[#0F120F] text-xs font-bold uppercase tracking-[0.15em] text-[#0F120F] hover:text-[#C7D3BC] transition-colors mt-auto group/btn"
                            >
                              View Full Bio
                              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[#0F120F] group-hover/btn:bg-[#C7D3BC] group-hover/btn:border-[#C7D3BC] transition-all">
                                <FaArrowRight className="w-3 h-3 text-[#0F120F] transition-colors" />
                              </div>
                            </button>
                          </div>
                        </motion.article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>

            {/* Board Committees */}
            <section ref={committeesSectionRef} id="committees" className="pt-12 border-t border-[#0F120F]/10">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0F120F] mb-10">
                Board Committees
              </h2>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center bg-white p-8 sm:p-10 lg:p-12 border border-[#0F120F]/10 rounded-sm shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <div>
                  <p className="text-base text-[#0F120F]/80 leading-relaxed font-semibold mb-8">
                    The Board delegates focused oversight to specialist committees, ensuring rigorous governance, disciplined capital allocation, and robust risk stewardship across the Group.
                  </p>
                  <div className="space-y-3">
                    {["Audit Committee", "Risk Management Committee", "Board Investment Committee", "Governance & Nominations Committee"].map((committee, idx) => (
                      <div key={idx} className="flex items-center gap-4 py-3 border-b border-[#0F120F]/5 last:border-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C7D3BC]" />
                        <span className="text-sm font-semibold text-[#0F120F]">{committee}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#e5e5e5] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <img src={boardImage} alt="Board committee meeting" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </section>

            {/* Governance Documents */}
            <section ref={documentsSectionRef} id="documents" className="pt-12 border-t border-[#0F120F]/10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#0F120F]">Governance Framework</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {documents.map((doc, i) => (
                  <a key={i} href={doc.href} className="group flex items-center justify-between p-6 bg-white border border-[#0F120F]/10 hover:border-[#C7D3BC]/40 rounded-sm transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                    <div className="flex items-center gap-5">
                      <div className="w-11 h-11 bg-[#F4F4F0] flex items-center justify-center text-[#0F120F]/50 group-hover:bg-[#C7D3BC] group-hover:text-[#0F120F] transition-all rounded-sm">
                        <FaFileContract className="w-5 h-5" />
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-[#0F120F]">{doc.title}</span>
                    </div>
                    <FaArrowDown className="w-4 h-4 text-[#0F120F] group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0F120F]/90 backdrop-blur-md"
            onClick={handleCloseModal}
            role="dialog"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col sm:flex-row rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={handleCloseModal}
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-[#0F120F] flex items-center justify-center text-[#0F120F] hover:text-white transition-all border border-[#0F120F]/10 focus:outline-none"
              >
                <FaXmark className="w-5 h-5" />
              </button>

              <div className="w-full sm:w-2/5 h-72 sm:h-auto bg-[#e5e5e5] flex-shrink-0">
                <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 p-8 sm:p-10 lg:p-14 overflow-y-auto">
                <div className="mb-8 pb-6 border-b border-[#0F120F]">
                  <h3 className="text-3xl sm:text-4xl font-serif text-[#0F120F] mb-4 leading-tight">{selectedLeader.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F] mb-1">{selectedLeader.role}</p>
                  {selectedLeader.subRole && (
                    <p className="text-sm text-[#0F120F]/80 mt-2 italic font-semibold">{selectedLeader.subRole}</p>
                  )}
                </div>
                <div className="prose prose-base max-w-none text-[#0F120F] leading-relaxed">
                  <p className="font-semibold">{selectedLeader.bio}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GovernanceSection;
`;

fs.writeFileSync('src/components/GovernanceSection.tsx', code);
