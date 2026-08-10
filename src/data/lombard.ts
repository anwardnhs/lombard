// Centralized Data Architecture for Lombard HoldCo Plc

export interface Metric {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  subValue?: string;
  description?: string;
}

export const holdCoMetrics: Metric[] = [
  { label: "Group Assets", value: 36.5, prefix: "₦", suffix: "T", decimals: 1, subValue: "$25.2 Billion USD", description: "Consolidated asset base across 14 operating jurisdictions" },
  { label: "Market Capitalization", value: 6.5, prefix: "₦", suffix: "T", decimals: 1, subValue: "$4.48 Billion USD", description: "Dual-listed equity valuation on NGX and LSE" },
  { label: "Return on Avg Equity", value: "22.4%", subValue: "FY 2025", description: "Disciplined capital deployment driving industry-leading return" },
  { label: "Capital Adequacy Ratio", value: "21.8%", subValue: "Basel III Compliant", description: "Substantial capital buffer above regulatory requirements" },
  { label: "Cost-to-Income Ratio", value: "42.1%", subValue: "Best-in-class efficiency", description: "Operational discipline across banking and non-banking units" },
  { label: "Pan-African Footprint", value: 14, prefix: "", suffix: " Markets", decimals: 0, subValue: "West, East & Central Africa", description: "Full-service banking and asset management licenses" },
];

export const founders = [
  {
    name: "Anwar Alhassan, CFR",
    position: "Group Chairman (1994–2010 CEO, 2010–Present Chairman)",
    age: 64,
    education: "BSc Economics (ABU), MBA (INSEAD)",
    quote: "We didn't buy a bank. We bought a vision for what African financial stewardship could become.",
    contribution: "Pioneered the 1994 leveraged buyout, transforming a regional merchant lender into a dual-listed pan-African holding company.",
    career: [
      "1987–1994: Vice President, Citibank NA (New York/London)",
      "1994–2010: Group CEO, Lombard Banking Group",
      "2010–Present: Chairman of the Board, Lombard HoldCo Plc",
    ],
  },
  {
    name: "Obi Nnamani, CFA",
    position: "Non-Executive Director & Capital Markets Pioneer",
    age: 59,
    education: "MA Economics (Oxford), CFA Charterholder",
    quote: "Capital markets are the heartbeat of sovereign prosperity. We gave African enterprises global market access.",
    contribution: "Engineered the acquisition of Nnamani Capital in 2002, building Lombard's debt capital markets and investment banking franchise.",
    career: [
      "1989–1996: Executive Director, Goldman Sachs London (M&A)",
      "1996–2001: Founder & CEO, Nnamani Capital",
      "2002–2016: CEO, Lombard Capital Markets",
    ],
  },
  {
    name: "Otunba Folarin Bakare, CON",
    position: "Chairman, Lombard Bank Plc",
    age: 63,
    education: "BSc Industrial Engineering (UNILAG)",
    quote: "Operational scale without risk discipline is fragile. We built institutional distribution with rock-solid controls.",
    contribution: "Architect of the Group's branch and technology footprint during the core expansion era from 1997 to 2020.",
    career: [
      "1991–1996: Operations Director, Unilever West Africa",
      "1997–2010: Chief Operating Officer, Lombard Banking Group",
      "2010–2020: CEO, Lombard Bank Plc",
    ],
  },
  {
    name: "Abdullahi Kurfi, OON",
    position: "Non-Executive Director & Risk Committee Chair",
    age: 62,
    education: "First Class Actuarial Science (LSE), MSc Financial Engineering (MIT)",
    quote: "Risk management is not about avoiding risk; it is about pricing and stewarding risk with absolute precision.",
    contribution: "Designed the Lombard Enterprise Risk Framework (LERF), protecting group solvency during global financial crises.",
    career: [
      "1990–1993: Senior Risk Analyst, Swiss Re Zurich",
      "1994–2015: Group Chief Risk Officer, Lombard HoldCo",
      "2015–Present: Chair, Board Risk & Capital Committee",
    ],
  },
];

export const subsidiaries = [
  {
    id: "banking",
    name: "Lombard Bank Plc",
    pillar: "Commercial & Corporate Banking",
    ceo: "Mrs. Kemi Adeleke",
    stats: "535 branches · 48,000+ agency outlets · 10.2M customers",
    description: "Anchors group balance sheet strength with corporate lending, transaction banking, trade finance, and digital retail banking across 14 markets.",
    accent: "from-emerald-700 to-teal-900",
  },
  {
    id: "capital",
    name: "Lombard Capital Markets",
    pillar: "Investment Banking & Securities",
    ceo: "Mr. Tunde Balogun",
    stats: "#1 NGX Brokerage · $4.8B advisory mandates closed",
    description: "Delivers sovereign debt advisory, corporate M&A, debt capital markets, and equity underwriting for sovereign and institutional clients.",
    accent: "from-amber-600 to-yellow-800",
  },
  {
    id: "asset",
    name: "Lombard Asset Management",
    pillar: "Wealth & Pension Management",
    ceo: "Mrs. Zainab Tijani, CFA",
    stats: "₦340B+ AUM · Licensed PFA",
    description: "Manages institutional pension funds, private wealth portfolios, specialized infrastructure funds, and venture growth equity.",
    accent: "from-slate-700 to-slate-900",
  },
  {
    id: "insurance",
    name: "Lombard Insurance Group",
    pillar: "General & Life Assurance",
    ceo: "Mr. Ikenna Okere (General) & Mrs. Nifemi Ademola (Life)",
    stats: "A+ Rated Underwriter · Marine, Corporate & Life",
    description: "Provides comprehensive risk transfer, marine cargo protection, group life insurance, and corporate asset underwriting.",
    accent: "from-blue-700 to-indigo-900",
  },
];

export const timeline = [
  { year: "1954", title: "Institutional Origins", desc: "Established in Lagos as Lombard Bank of West Africa, operating as an overseas merchant subsidiary." },
  { year: "1994", title: "The Management Buyout", desc: "Anwar Alhassan, Folarin Bakare & Abdullahi Kurfi lead a ₦420M leveraged buyout, securing 87% equity control." },
  { year: "2002", title: "Investment Banking Merger", desc: "Merger with Nnamani Capital brings Obi Nnamani on board, creating Lombard Capital Markets." },
  { year: "2007", title: "NGX Initial Public Offering", desc: "Lists on the Nigerian Stock Exchange raising ₦18.5B, oversubscribed by 210%." },
  { year: "2011", title: "HoldCo Restructuring", desc: "Adopts non-operating financial holding structure (Lombard HoldCo Plc) to segregate banking from non-banking risk." },
  { year: "2018", title: "Dual Listing on LSE", desc: "Secondary GDR listing on London Stock Exchange (LMB) raising $660M for Pan-African expansion." },
  { year: "2025", title: "70th Anniversary Milestone", desc: "Group assets reach ₦36.5T ($25.2B) with record net profit of ₦460B across 14 operating markets." },
];

export const boardOfDirectors = [
  {
    name: "Mr. Anwar Alhassan, CFR",
    role: "Non-Executive Chairman",
    category: "Non-Executive",
    bio: "Over four decades of financial leadership. Provides overall strategic stewardship, ensuring rigorous board oversight and alignment with international governance standards.",
  },
  {
    name: "Dr. Chide Okonkwo",
    role: "Group Chief Executive Officer",
    category: "Executive",
    bio: "Leads group-level strategic execution and capital allocation across all 4 business pillars. Former Goldman Sachs Partner with 25+ years in global capital markets.",
  },
  {
    name: "Mr. Femi Ayodeji, FCA",
    role: "Group Chief Financial Officer",
    category: "Executive",
    bio: "Oversees group financial reporting, balance sheet optimization, and capital management. Alumnus of London Business School and Fellow of ICAN.",
  },
  {
    name: "Ms. Adenike Okemini",
    role: "Non-Executive Director",
    category: "Non-Executive",
    subRole: "Chair, Board Investment Committee",
    bio: "Chairs capital allocation and strategic M&A oversight. Former Managing Director of a leading African asset management firm.",
  },
  {
    name: "Mr. Abdullahi Kurfi",
    role: "Non-Executive Director",
    category: "Non-Executive",
    subRole: "Chair, Board Risk Committee",
    bio: "Chairs the Enterprise Risk Framework oversight. Actuarial and financial engineering expert with 30+ years in risk governance.",
  },
  {
    name: "Dr. Elena Moretti",
    role: "Independent Non-Executive Director",
    category: "Independent",
    bio: "Former Deputy Director (Africa) at the International Monetary Fund (IMF). Provides macro-prudential oversight and global economic analysis.",
  },
  {
    name: "Justice Adewale Ogunlaye (Rtd.)",
    role: "Independent Non-Executive Director",
    category: "Independent",
    bio: "Retired Supreme Court Justice providing oversight on legal compliance, corporate ethics, and statutory regulatory adherence.",
  },
  {
    name: "Professor Chidi Okoro",
    role: "Independent Non-Executive Director",
    category: "Independent",
    bio: "Professor of Strategy at Lagos Business School. Advises on digital disruption, corporate strategy, and corporate governance.",
  },
  {
    name: "Ms. Naida Umar Muhammad",
    role: "Independent Non-Executive Director",
    category: "Independent",
    bio: "Former Senior Managing Consultant at IBM. Guides board oversight on cybersecurity, enterprise architecture, and fintech integration.",
  },
];

export const executiveCommittee = [
  { name: "Dr. Chide Okonkwo", role: "Group Chief Executive Officer", focus: "Group Strategy & Capital Allocation" },
  { name: "Mr. Femi Ayodeji, FCA", role: "Group Chief Financial Officer", focus: "Financial Reporting & Treasury" },
  { name: "Mrs. Adaure Ughara", role: "Group Chief Risk Officer", focus: "Enterprise Risk & Credit Policy" },
  { name: "Mr. Babatunde Williams", role: "Group Chief Investment Officer", focus: "Principal Investments & M&A" },
  { name: "Barr. Shafiu Lawal-Bello, SAN", role: "Group General Counsel & Sec.", focus: "Legal & Regulatory Compliance" },
  { name: "Mrs. Ngozi Ibe", role: "Group Chief Human Resources Officer", focus: "Human Capital & Leadership Mobility" },
  { name: "Mr. Ayomide Akintola", role: "Group Chief Compliance Officer", focus: "AML/CFT & Regulatory Relations" },
  { name: "Ms. Sade Aguta", role: "Group Chief Sustainability Officer", focus: "ESG Integration & Impact Underwriting" },
];
