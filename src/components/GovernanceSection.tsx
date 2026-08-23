import { motion } from "framer-motion";
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

      {/* EXECUTIVE COMMITTEE */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16 container mx-auto max-w-[1800px] border-t border-[#0F120F]/10">
        <div className="mb-24">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F]/50 block mb-4">01 — Executive Management</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F120F]">Group Executive Committee</h2>
        </div>

        <div className="space-y-32">
          {executives.map((exec, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center group"
            >
              <div className="lg:col-span-5 order-2 lg:order-1">
                <h3 className="font-serif text-4xl sm:text-5xl mb-4 leading-tight">{exec.name}</h3>
                <p className="text-sm font-extrabold uppercase tracking-widest text-[#4A5D43] mb-8">{exec.role}</p>
                <p className="text-lg text-[#0F120F]/70 leading-relaxed font-light">{exec.bio}</p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="aspect-[4/3] lg:aspect-[16/9] overflow-hidden bg-[#E5E5E5]">
                  <img 
                    src={exec.image} 
                    alt={exec.name} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" 
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 xl:px-16 container mx-auto max-w-[1800px] bg-[#0F120F] text-[#F9F9F7] mt-20">
        <div className="mb-24">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F9F9F7]/50 block mb-4">02 — Board of Directors</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F9F9F7]">Board Oversight</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
          {board.map((member, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-white/5 mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#F9F9F7] mb-2">{member.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C7D3BC] mb-1">{member.role}</p>
              <p className="text-xs text-[#F9F9F7]/50 uppercase tracking-widest">{member.subRole}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default GovernanceSection;

