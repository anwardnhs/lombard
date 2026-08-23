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

  const executives = [
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

  const board = [
    { name: "Mr. Anwar Alhassan, CFR", role: "Non-Executive Chairman", subRole: "Chair of the Board", image: anwar },
    { name: "Dr. Chide Okonkwo", role: "Group Chief Executive Officer", subRole: "Executive Director", image: chide },
    { name: "Mr. Femi Ayodeji, FCA", role: "Group Chief Financial Officer", subRole: "Executive Director", image: femi },
    { name: "Ms. Adenike Okemini", role: "Non-Executive Director", subRole: "Chair, Investment Committee", image: adenike },
    { name: "Mr. Abdullahi Kurfi", role: "Non-Executive Director", subRole: "Chair, Risk Committee", image: kurfi },
    { name: "Chief Adetokunbo Adesanya, CFR", role: "Non-Executive Director", subRole: "Member", image: adesanya },
    { name: "Hajiya Zainab Gwarzo", role: "Non-Executive Director", subRole: "Member", image: zainabPlaceholder },
    { name: "Dr. Elena Volkov", role: "Independent Non-Executive Director", subRole: "Chair, Audit Committee", image: elena },
    { name: "Mr. Chidi Eze", role: "Independent Non-Executive Director", subRole: "Member", image: chidi },
    { name: "Mrs. Naida Diop", role: "Independent Non-Executive Director", subRole: "Member", image: naida },
    { name: "Dr. Adewale Osinbajo", role: "Independent Non-Executive Director", subRole: "Member", image: adewale }
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
          
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-[0.9]">
            Architects of <br/>
            <span className="italic text-[#0F120F]/60">our future.</span>
          </h1>
          
          <div className="w-24 h-[2px] bg-[#0F120F] mb-10" />
          
          <p className="text-xl sm:text-2xl md:text-3xl text-[#0F120F]/80 max-w-4xl leading-relaxed font-serif">
            The stewards of Lombard's legacy, driving operational excellence and disciplined risk management across Africa.
          </p>
        </motion.div>
      </section>

      {/* BOARD OF DIRECTORS (Moved to top) */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16 container mx-auto max-w-[1800px] border-t border-[#0F120F]/10">
        <div className="mb-24">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F]/50 block mb-4">01 — Board of Directors</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F120F]">Board Oversight</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
          {board.map((member, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-black/5 mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#0F120F] mb-2">{member.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5D43] mb-1">{member.role}</p>
              <p className="text-xs text-[#0F120F]/50 uppercase tracking-widest">{member.subRole}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXECUTIVE COMMITTEE (Carousel) */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 xl:px-16 container mx-auto max-w-[1800px] bg-[#0F120F] text-[#F9F9F7]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F9F9F7]/50 block mb-4">02 — Executive Management</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F9F9F7]">Group Executive Committee</h2>
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

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentExco}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center group"
            >
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="mb-10">
                  <p className="text-xs font-mono tracking-widest text-[#F9F9F7]/40 mb-4">{currentExco + 1} / {executives.length}</p>
                  <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl mb-4 leading-tight">{executives[currentExco].name}</h3>
                  <p className="text-sm font-extrabold uppercase tracking-widest text-[#C7D3BC]">{executives[currentExco].role}</p>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <button 
                    onClick={() => setShowBio(!showBio)}
                    className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:text-[#C7D3BC] transition-colors"
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
                        <p className="pt-6 text-lg text-[#F9F9F7]/70 leading-relaxed font-light">
                          {executives[currentExco].bio}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="aspect-[4/5] overflow-hidden bg-white/5">
                  <img 
                    src={executives[currentExco].image} 
                    alt={executives[currentExco].name} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    loading="lazy"
                  />
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

