const fs = require("fs");

let content = fs.readFileSync("src/components/GovernanceSection.tsx", "utf8");

// 1. Add expandedBoardBio state
content = content.replace(
    "const [showBio, setShowBio] = useState(false);",
    "const [showBio, setShowBio] = useState(false);\n  const [expandedBoardBio, setExpandedBoardBio] = useState<number | null>(null);"
);

// 2. Add bios to the board array
const old_board = `const board = [
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
  ];`;

const new_board = `const board = [
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
    { name: "Dr. Adewale Osinbajo", role: "Independent Non-Executive Director", subRole: "Member", image: adewale, bio: "Dr. Osinbajo is a seasoned economist providing critical insights into macroeconomic trends and strategic planning." }
  ];`;

content = content.replace(old_board, new_board);

// 3. Modify the Board UI map to include the read bio button
const old_map = `        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
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
        </div>`;

const new_map = `        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
          {board.map((member, idx) => (
            <div key={idx} className="group flex flex-col">
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
              <p className="text-xs text-[#0F120F]/50 uppercase tracking-widest mb-4">{member.subRole}</p>
              
              <div className="border-t border-[#0F120F]/10 pt-4 mt-auto">
                <button 
                  onClick={() => setExpandedBoardBio(expandedBoardBio === idx ? null : idx)}
                  className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#0F120F]/70 hover:text-[#4A5D43] transition-colors"
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
        </div>`;

content = content.replace(old_map, new_map);

fs.writeFileSync("src/components/GovernanceSection.tsx", content, "utf8");

