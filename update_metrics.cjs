const fs = require("fs");

// 1. Update lombard.ts
let lombard = fs.readFileSync("src/data/lombard.ts", "utf8");
lombard = lombard.replace(
  `{ label: "Group Assets", value: 36.5, prefix: "?", suffix: "T", decimals: 1, subValue: "$25.2 Billion USD", description: "Consolidated asset base across 14 operating jurisdictions" }`,
  `{ label: "Group Assets", value: "$25.2B", prefix: "", suffix: "", decimals: 1, subValue: "", description: "Consolidated asset base across 14 operating jurisdictions" }`
).replace(
  `{ label: "Market Capitalization", value: 6.5, prefix: "?", suffix: "T", decimals: 1, subValue: "$4.48 Billion USD", description: "Dual-listed equity valuation on NGX and LSE" }`,
  `{ label: "Market Capitalization", value: "$4.5B", prefix: "", suffix: "", decimals: 1, subValue: "", description: "Dual-listed equity valuation on NGX and LSE" }`
);
fs.writeFileSync("src/data/lombard.ts", lombard, "utf8");

// 2. Update CorporateProfile.tsx
let profile = fs.readFileSync("src/pages/CorporateProfile.tsx", "utf8");

profile = profile.replace(
  `className="bg-[#0a0c0a] text-[#F9F9F7] py-24 sm:py-32 mb-32 sm:mb-40"`,
  `className="bg-white text-[#0F120F] py-24 sm:py-32 mb-32 sm:mb-40"`
);

profile = profile.replace(
  `text-[#F9F9F7]/50 block mb-6">02 — Scale</span>`,
  `text-[#0F120F]/50 block mb-6">02 — Scale</span>`
);

profile = profile.replace(
  `hover:text-[#C7D3BC] transition-colors pb-2 border-b border-white/20 hover:border-[#C7D3BC]">`,
  `hover:text-[#4A5D43] transition-colors pb-2 border-b border-[#0F120F]/20 hover:border-[#4A5D43]">`
);

profile = profile.replace(
  `gap-y-12 sm:gap-y-16 pt-12 sm:pt-16 border-t border-white/10"`,
  `gap-y-12 sm:gap-y-16 pt-12 sm:pt-16 border-t border-[#0F120F]/10"`
);

profile = profile.replace(
  `className="font-serif text-5xl md:text-6xl tracking-tight text-[#C7D3BC] mb-4 transition-transform duration-300 group-hover:scale-105 origin-left"`,
  `className="font-sans font-medium text-5xl md:text-6xl tracking-tight text-[#0F120F] mb-4 transition-transform duration-300 group-hover:scale-105 origin-left"`
);

profile = profile.replace(
  `text-[#F9F9F7]/80 mb-2">{metric.label}</h4>`,
  `text-[#0F120F]/80 mb-2">{metric.label}</h4>`
);

fs.writeFileSync("src/pages/CorporateProfile.tsx", profile, "utf8");

