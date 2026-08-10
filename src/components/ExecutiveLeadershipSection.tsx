import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  FaArrowRight, 
  FaLinkedinIn, 
  FaXmark,
  FaQuoteLeft,
  FaBuildingColumns
} from "react-icons/fa6";

// Asset Imports (Keeping your existing imports)
import chide from "@/assets/chide.png";
import femi from "@/assets/femi.png";
import adaure from "@/assets/adenike.png";
import babatunde from "@/assets/babatunde.png";
import shafiu from "@/assets/adesanya.png";
import ngozi from "@/assets/ngozi.png";
import ayomide from "@/assets/ayomide.png";
import ebuka from "@/assets/kurfi.png";
import sade from "@/assets/sade.png";
import Breadcrumbs from "@/components/Breadcrumbs";

// --- Types ---
interface Executive {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const ExecutiveLeadershipSection = () => {
  const [selectedExec, setSelectedExec] = useState<Executive | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{[key: string]: boolean}>({});
  const prefersReducedMotion = useReducedMotion();

  // --- Handlers ---
  const handleImageLoad = useCallback((name: string) => {
    setImageLoaded(prev => ({ ...prev, [name]: true }));
  }, []);

  // Handle Escape Key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedExec(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedExec) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedExec]);

  // --- Data ---
  const ceo = {
    name: "Dr. Chide Okonkwo",
    role: "Group Chief Executive Officer",
    image: chide,
    quote: "Our holding company mandate is built on disciplined capital allocation, risk stewardship, and empowering our operating subsidiaries to achieve market leadership across Africa.",
    bio: "Dr. Chide Okonkwo leads Lombard HoldCo's strategic expansion across Africa, bringing over 25 years of global investment banking experience. Previously a Partner at Goldman Sachs (London), he holds a Ph.D. in Financial Engineering from MIT and champions the 'Lombard 4.0' digital transformation strategy."
  };

  const executives: Executive[] = [
    { name: "Mr. Femi Ayodeji, FCA", role: "Group Chief Financial Officer", image: femi, bio: "Mr. Femi Ayodeji oversees the Group's financial integrity, balance sheet optimization, and treasury management. A seasoned Chartered Accountant (FCA) with three decades of experience, he successfully led the Group's recent $500M Eurobond issuance." },
    { name: "Mrs. Adaure Ughara", role: "Group Chief Risk Officer", image: adaure, bio: "Mrs. Adaure Ughara manages enterprise risk frameworks across 14 jurisdictions. With over 20 years in risk management, she oversees credit, market, and operational risk, ensuring the Group's growth strategy operates within Basel III capital requirements." },
    { name: "Mr. Babatunde Williams", role: "Group Chief Investment Officer", image: babatunde, bio: "Mr. Babatunde Williams drives the Group's investment strategy and M&A activities. A veteran of private equity, he manages strategic portfolios in infrastructure, fintech, and renewable energy." },
    { name: "Barr. Shafiu Lawal-Bello, SAN", role: "Group General Counsel", image: shafiu, bio: "Barr. Shafiu Lawal-Bello is a Senior Advocate of Nigeria (SAN) and the Group's chief legal advisor. He oversees Legal and Corporate Governance functions, ensuring adherence to regulatory standards." },
    { name: "Mrs. Ngozi Ibe", role: "Group CHRO", image: ngozi, bio: "Mrs. Ngozi Ibe leads the Group's people strategy, overseeing talent acquisition and leadership development for over 12,000 employees. She champions the 'Lombard Academy' initiative." },
    { name: "Mr. Ayomide Akintola", role: "Group Chief Compliance Officer", image: ayomide, bio: "Mr. Ayomide Akintola oversees Global Compliance, including Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) frameworks. He maintains critical relationships with regulatory bodies across Africa." },
    { name: "Mr. Ebuka Nwafor", role: "Head of Investor Relations", image: ebuka, bio: "Mr. Ebuka Nwafor is the primary liaison between Lombard HoldCo and the global investment community. He manages relationships with institutional investors, rating agencies, and equity analysts." },
    { name: "Ms. Sade Aguta", role: "Group Chief Sustainability Officer", image: sade, bio: "Ms. Sade Aguta drives Lombard's Environmental, Social, and Governance (ESG) agenda. She oversees sustainable banking principles integration and leads the Lombard Foundation's social impact initiatives." }
  ];

  const subsidiaries = [
    { company: "Lombard Bank ", ceo: "Mrs. Kemi Adeleke", role: "Managing Director / CEO" },
    { company: "Lombard Capital Markets", ceo: "Mr. Tunde Balogun", role: "Chief Executive Officer" },
    { company: "Lombard Asset Management", ceo: "Mrs. Zainab Tijani, CFA", role: "Chief Executive Officer" },
    { company: "Lombard General Insurance", ceo: "Mr. Ikenna Okere", role: "Managing Director / CEO" },
    { company: "Lombard Life Assurance", ceo: "Mrs. Nifemi Ademola", role: "Managing Director / CEO" },
  ];

  return (
    <div className="bg-[#F9F9F7] font-poppins text-[#0F120F] min-h-screen selection:bg-[#C7D3BC] selection:text-[#0F120F]">
      {/* Spacer for fixed header */}
      <div className="fixed top-0 left-0 right-0 h-20 sm:h-24 bg-[#0F120F] z-40" aria-hidden="true" />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 sm:pt-40 pb-16 px-6 sm:px-12 xl:px-16 container mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <Breadcrumbs items={[{ label: "Executive Leadership" }]} className="mb-6" />
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#0F120F]/30" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0F120F]/60">
              Corporate Governance
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#0F120F] tracking-tight mb-8 leading-[1.1]">
            Executive Leadership
          </h1>
          <p className="text-lg md:text-2xl font-light text-[#0F120F]/80 leading-relaxed max-w-2xl">
            Stewards of our strategy, driving operational excellence and sustainable growth across 14 African markets.
          </p>
        </motion.div>
      </section>

      {/* --- CEO FEATURE (Distinct Hierarchy) --- */}
      <section className="px-6 sm:px-12 xl:px-16 pb-24 container mx-auto max-w-[1400px]">
        <div className="bg-white border border-[#0F120F]/10 p-8 lg:p-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center shadow-sm">
          
          {/* CEO Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-[#E5E5E5] overflow-hidden relative transition-all duration-700">
               <img 
                 src={ceo.image} 
                 alt={ceo.name}
                 className="w-full h-full object-cover"
                 loading="eager"
               />
               {/* Decorative frame */}
               <div className="absolute inset-0 border border-[#0F120F]/10 m-4 pointer-events-none" />
            </div>
            {/* Pattern offset */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#0F120F]/5 -z-10 hidden lg:block" />
          </div>

          {/* CEO Content */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F] mb-4 block">
              Group Chief Executive Officer
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#0F120F] mb-8">
              {ceo.name}
            </h2>
            
            <div className="mb-8">
              <FaQuoteLeft className="text-3xl text-[#0F120F] mb-4" />
              <p className="text-xl lg:text-2xl font-serif italic text-[#0F120F] leading-relaxed">
                {ceo.quote}
              </p>
            </div>

            <p className="text-[#0F120F] leading-relaxed mb-10 text-base lg:text-lg">
              {ceo.bio}
            </p>

            <button 
               onClick={() => setSelectedExec({ ...ceo, role: "Group CEO" })} 
               className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] border-b border-[#0F120F] pb-2 hover:text-[#5f6b56] hover:border-[#5f6b56] transition-colors"
            >
              Read Full Biography <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* --- EXECUTIVE COMMITTEE GRID (Hick's Law: Scan & Select) --- */}
      <section className="px-6 sm:px-12 xl:px-16 pb-24 container mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#0F120F]/10 pb-6">
          <h3 className="text-3xl font-serif text-[#0F120F]">Executive Committee</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-[#0F120F]/50 mt-4 md:mt-0">
            Click profile to view details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {executives.map((exec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedExec(exec)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedExec(exec)}
            >
              <div className="aspect-[3/3.5] bg-[#E5E5E5] mb-6 overflow-hidden relative">
                <img 
                  src={exec.image} 
                  alt={exec.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0F120F]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#0F120F] text-[10px] font-bold uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Profile
                  </span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-[#0F120F] mb-1 group-hover:text-[#5f6b56] transition-colors">
                {exec.name}
              </h4>
              <p className="text-xs uppercase tracking-widest text-[#0F120F]/60">
                {exec.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SUBSIDIARIES (Clean List) --- */}
      <section className="bg-white border-t border-[#0F120F]/10 py-24 px-6 sm:px-12 xl:px-16">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-serif text-[#0F120F] mb-6">Subsidiary Leadership</h3>
              <p className="text-[#0F120F]/70 leading-relaxed mb-8">
                Operating under a decentralized governance model, our subsidiary CEOs maintain autonomous boards while aligning with the Group's risk and strategic framework.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-4">
                {subsidiaries.map((sub, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border border-[#0F120F]/10 hover:border-[#0F120F] transition-colors group bg-[#F9F9F7] sm:bg-white">
                    <div className="flex items-center gap-4 mb-3 sm:mb-0">
                       <div className="w-10 h-10 bg-[#0F120F]/5 rounded-full flex items-center justify-center text-[#0F120F] group-hover:bg-[#0F120F] group-hover:text-white transition-colors">
                          <FaBuildingColumns size={14} />
                       </div>
                       <div>
                          <h4 className="font-bold text-[#0F120F]">{sub.company}</h4>
                          <span className="text-[10px] uppercase tracking-wider text-[#0F120F]/50">{sub.role}</span>
                       </div>
                    </div>
                    <div className="pl-14 sm:pl-0 font-serif text-lg text-[#0F120F]">{sub.ceo}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BIO MODAL (Focus & Clarity) --- */}
      <AnimatePresence>
        {selectedExec && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#0F120F]/90 backdrop-blur-sm"
              onClick={() => setSelectedExec(null)} 
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedExec(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F120F] hover:bg-[#0F120F] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <FaXmark size={20} />
              </button>

              {/* Modal Image */}
              <div className="md:w-2/5 h-64 md:h-auto bg-[#E5E5E5] relative">
                 <img 
                   src={selectedExec.image} 
                   alt={selectedExec.name} 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F120F]/80 via-transparent to-transparent md:hidden" />
                 <div className="absolute bottom-4 left-4 text-white md:hidden">
                    <h3 className="text-xl font-serif">{selectedExec.name}</h3>
                    <p className="text-xs uppercase tracking-widest opacity-80">{selectedExec.role}</p>
                 </div>
              </div>

              {/* Modal Text */}
              <div className="md:w-3/5 p-8 md:p-12">
                <div className="hidden md:block mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F] mb-2 block">
                    {selectedExec.role}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-serif text-[#0F120F]">
                    {selectedExec.name}
                  </h3>
                </div>

                <div className="prose prose-sm prose-neutral max-w-none text-[#0F120F]/80 leading-relaxed mb-8">
                  <p>{selectedExec.bio}</p>
                  
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-[#0F120F]/10">
                   <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#5f6b56] transition-colors">
                      <FaLinkedinIn size={14} /> LinkedIn Profile
                   </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ExecutiveLeadershipSection;
