import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaPlus, FaMinus } from "react-icons/fa6";
import Breadcrumbs from "@/components/Breadcrumbs";

// Asset imports
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
import babatunde from "@/assets/babatunde.png";
import ngozi from "@/assets/ngozi.png";
import ayomide from "@/assets/ayomide.png";
import sade from "@/assets/sade.png";

const GovernanceSection = () => {
  const [currentExco, setCurrentExco] = useState(0);
  const [showBio, setShowBio] = useState(false);
  const [expandedBoardBio, setExpandedBoardBio] = useState<number | null>(null);

  const executives = [
    { name: "Dr. Chide Okonkwo", role: "Group Chief Executive Officer", image: chide, bio: "Dr. Chide Okonkwo leads Lombard HoldCo's strategic expansion across Africa, bringing over 25 years of global investment banking experience. Previously a Partner at Goldman Sachs (London), he holds a Ph.D. in Financial Engineering from MIT and champions the 'Lombard 4.0' digital transformation strategy." },
    { name: "Mr. Femi Ayodeji, FCA", role: "Group Chief Financial Officer", image: femi, bio: "Mr. Femi Ayodeji oversees the Group's financial integrity, balance sheet optimization, and treasury management. A seasoned Chartered Accountant (FCA) with three decades of experience, he successfully led the Group's recent $500M Eurobond issuance." },
    { name: "Mrs. Adaure Ughara", role: "Group Chief Risk Officer", image: adenike, bio: "Mrs. Adaure Ughara manages enterprise risk frameworks across 14 jurisdictions. With over 20 years in risk management, she oversees credit, market, and operational risk, ensuring the Group's growth strategy operates within Basel III capital requirements." },
    { name: "Mr. Babatunde Williams", role: "Group Chief Investment Officer", image: babatunde, bio: "Mr. Babatunde Williams drives the Group's investment strategy and M&A activities. A veteran of private equity, he manages strategic portfolios in infrastructure, fintech, and renewable energy." },
    { name: "Barr. Shafiu Lawal-Bello, SAN", role: "Group General Counsel", image: adesanya, bio: "Barr. Shafiu Lawal-Bello is a Senior Advocate of Nigeria (SAN) and the Group's chief legal advisor. He oversees Legal and Corporate Governance functions, ensuring adherence to regulatory standards." },
    { name: "Mrs. Ngozi Ibe", role: "Group Chief Human Resources Officer", image: ngozi, bio: "Mrs. Ngozi Ibe leads the Group's people strategy, overseeing talent acquisition and leadership development for over 12,000 employees. She champions the 'Lombard Academy' initiative." },
    { name: "Mr. Ayomide Akintola", role: "Group Chief Compliance Officer", image: ayomide, bio: "Mr. Ayomide Akintola oversees Global Compliance, including Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) frameworks. He maintains critical relationships with regulatory bodies across Africa." },
    { name: "Mr. Ebuka Nwafor", role: "Head of Investor Relations", image: kurfi, bio: "Mr. Ebuka Nwafor is the primary liaison between Lombard HoldCo and the global investment community. He manages relationships with institutional investors, rating agencies, and equity analysts." },
    { name: "Ms. Sade Aguta", role: "Group Chief Sustainability Officer", image: sade, bio: "Ms. Sade Aguta drives Lombard's Environmental, Social, and Governance (ESG) agenda. She oversees sustainable banking principles integration and leads the Lombard Foundation's social impact initiatives." }
  ];

  const board = [
    { name: "Mr. Anwar Alhassan, CFR", role: "Non-Executive Chairman", subRole: "Chair of the Board", image: anwar, bio: "Mr. Alhassan brings over four decades of banking leadership to the Board. As Group Chairman, he provides strategic oversight, ensuring regulatory compliance and long-term value creation for shareholders." },
    { name: "Dr. Chide Okonkwo", role: "Group Chief Executive Officer", subRole: "Executive Director", image: chide, bio: "Dr. Okonkwo leads Lombard HoldCo's strategic expansion across Africa, bringing over 25 years of global investment banking experience." },
    { name: "Mr. Femi Ayodeji, FCA", role: "Group Chief Financial Officer", subRole: "Executive Director", image: femi, bio: "Mr. Ayodeji oversees the Group's financial integrity, balance sheet optimization, and treasury management." },
    { name: "Ms. Adenike Okemini", role: "Non-Executive Director", subRole: "Chair, Investment Committee", image: adenike, bio: "Ms. Okemini chairs the Board Investment Committee, guiding capital allocation strategies across high-growth sectors with her 25 years in asset management." },
    { name: "Mr. Abdullahi Kurfi", role: "Non-Executive Director", subRole: "Chair, Risk Committee", image: kurfi, bio: "Mr. Kurfi chairs the Board Risk Committee, overseeing enterprise risk frameworks and credit policies." },
    { name: "Chief Adetokunbo Adesanya, CFR", role: "Non-Executive Director", subRole: "Member", image: adesanya, bio: "Chief Adesanya is an industrialist with extensive interests in energy and infrastructure across Africa." },
    { name: "Hajiya Zainab Gwarzo", role: "Non-Executive Director", subRole: "Member", image: zainabPlaceholder, bio: "Hajiya Gwarzo brings public sector expertise to the Board, having served as Permanent Secretary in the Federal Ministry of Finance." },
    { name: "Dr. Elena Volkov", role: "Independent Non-Executive Director", subRole: "Chair, Audit Committee", image: elena, bio: "Dr. Volkov chairs the Audit Committee. She brings deep international expertise in financial reporting, corporate governance, and audit." },
    { name: "Mr. Chidi Eze", role: "Independent Non-Executive Director", subRole: "Member", image: chidi, bio: "Mr. Eze is an independent director bringing rich experience in digital transformation and technology integration." },
    { name: "Mrs. Naida Diop", role: "Independent Non-Executive Director", subRole: "Member", image: naida, bio: "Mrs. Diop brings over 20 years of pan-African retail banking experience to her role as an independent director." },
    { name: "Dr. Adewale Olanwale", role: "Independent Non-Executive Director", subRole: "Member", image: adewale, bio: "Dr. Olawanle is a seasoned economist providing critical insights into macroeconomic trends and strategic planning." }
  ];

  const nextExco = () => {
    setShowBio(false);
    setCurrentExco((prev) => (prev + 1) % executives.length);
  };

  const prevExco = () => {
    setShowBio(false);
    setCurrentExco((prev) => (prev - 1 + executives.length) % executives.length);
  };

  return (
    <div className="bg-[#F9F9F7] min-h-screen text-[#0F120F] font-poppins selection:bg-[#0F120F] selection:text-[#F9F9F7]">
      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 sm:px-8 lg:px-12 xl:px-16 container mx-auto max-w-[1800px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16">
            <Breadcrumbs items={[{ label: "Leadership & Governance" }]} />
          </div>
          
          <h1 className="font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-[0.9]">
            Architects of <br/>
            <span className="italic text-[#0F120F]/60">our future.</span>
          </h1>
          
          <div className="w-24 h-[2px] bg-[#0F120F] mb-10" />
          
          <p className="text-xl sm:text-2xl md:text-3xl text-[#0F120F]/80 max-w-4xl leading-relaxed font-sans">
            Our leadership team and board of directors are the architects of Lombard's future, guiding our strategic vision, ensuring robust governance, and driving sustainable growth across Africa. With decades of combined experience in finance, risk management, and corporate governance, they are committed to delivering long-term value for our stakeholders.  
          </p>
        </motion.div>
      </section>

      {/* BOARD OF DIRECTORS (Moved to top) */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16 container mx-auto max-w-[1800px] border-t border-[#0F120F]/10">
        <div className="mb-24">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F]/50 block mb-4">01 Board of Directors</span>
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl text-[#0F120F]">Board Oversight</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
          {board.map((member, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="aspect-[3/4] overflow-hidden bg-black/5 mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top  transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-sans text-2xl text-[#0F120F] mb-2">{member.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#52796F] mb-1">{member.role}</p>
              <p className="text-xs text-[#0F120F]/50 uppercase tracking-widest mb-4">{member.subRole}</p>
              
              <div className="border-t border-[#0F120F]/10 pt-4 mt-auto">
                <button 
                  onClick={() => setExpandedBoardBio(expandedBoardBio === idx ? null : idx)}
                  className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#0F120F]/70 hover:text-[#52796F] transition-colors"
                >
                  {expandedBoardBio === idx ? <FaMinus /> : <FaPlus />}
                  {expandedBoardBio === idx ? "Hide Biography" : "Read Biography"}
                </button>
                
                <AnimatePresence>
                  {expandedBoardBio === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm text-[#0F120F]/70 leading-relaxed font-light">
                        {member.bio}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXECUTIVE COMMITTEE (Carousel) */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 xl:px-16 container mx-auto max-w-[1800px] bg-[#0F120F] text-[#F9F9F7]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F9F9F7]/50 block mb-4">02 Executive Management</span>
            <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl text-[#F9F9F7]">Group Executive Committee</h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevExco}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Previous executive"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={nextExco}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Next executive"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden flex justify-center pb-12">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentExco}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-center w-full max-w-5xl bg-white/5 p-8 md:p-12 rounded-xl border border-white/10"
            >
              <div className="w-full md:w-1/3 shrink-0">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-black/20">
                  <img 
                    src={executives[currentExco].image} 
                    alt={executives[currentExco].name} 
                    className="w-full h-full object-cover object-top transition-all duration-1000" 
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <div className="mb-6">
                  <p className="text-[10px] font-mono tracking-widest text-[#F9F9F7]/40 mb-3">{currentExco + 1} / {executives.length}</p>
                  <h3 className="font-sans text-3xl sm:text-4xl mb-2 leading-tight text-white">{executives[currentExco].name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#52796F]">{executives[currentExco].role}</p>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <button 
                    onClick={() => setShowBio(!showBio)}
                    className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-[#52796F] transition-colors"
                  >
                    {showBio ? <FaMinus /> : <FaPlus />}
                    {showBio ? "Hide Biography" : "Read Biography"}
                  </button>
                  
                  <AnimatePresence>
                    {showBio && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm text-[#F9F9F7]/70 leading-relaxed font-light">
                          {executives[currentExco].bio}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
};

export default GovernanceSection;

