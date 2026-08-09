// Investor Relations Data
// Last Updated: February 9, 2026

export const tickers = {
  ngx: {
    symbol: "LOMBARD",
    exchange: "Nigerian Exchange (NGX)",
    price: 425.60,
    change: 9.80,
    changePercent: 2.3,
    lastUpdated: "2026-02-09T15:30:00Z"
  },
  lse: {
    symbol: "LMB",
    exchange: "London Stock Exchange (LSE)",
    price: 3.24,
    currency: "GBP",
    change: 0.06,
    changePercent: 1.8,
    lastUpdated: "2026-02-09T16:30:00Z"
  }
};

export const keyMetrics = [
  { label: "Market Cap", value: "₦6.5T", subValue: "$4.48B" },
  { label: "Total Assets", value: "₦36.5T", subValue: "$25.2B" },
  { label: "ROE", value: "18.4%", subValue: "FY 2024" },
  { label: "NPL Ratio", value: "3.1%", subValue: "Q4 2024" },
  { label: "CAR", value: "22.4%", subValue: "Tier 1: 19.2%" },
  { label: "Cost-to-Income", value: "52.3%", subValue: "Industry: 58%" }
];

export const quarterlyEarnings = [
  { quarter: "Q1 2024", revenue: 410, netIncome: 68, roe: 17.8, npl: 3.4 },
  { quarter: "Q2 2024", revenue: 425, netIncome: 72, roe: 18.1, npl: 3.3 },
  { quarter: "Q3 2024", revenue: 438, netIncome: 75, roe: 18.6, npl: 3.2 },
  { quarter: "Q4 2024", revenue: 461, netIncome: 82, roe: 18.4, npl: 3.1 },
  { quarter: "Q1 2025", revenue: 475, netIncome: 85, roe: 18.9, npl: 3.0 },
  { quarter: "Q2 2025", revenue: 489, netIncome: 88, roe: 19.2, npl: 2.9 },
  { quarter: "Q3 2025", revenue: 502, netIncome: 91, roe: 19.5, npl: 2.8 },
  { quarter: "Q4 2025", revenue: 518, netIncome: 96, roe: 19.8, npl: 2.7 }
];

export const latestEarnings = {
  quarter: "Q4 2025",
  date: "2026-01-28",
  revenue: "₦518B",
  netIncome: "₦96B",
  roe: "19.8%",
  npl: "2.7%",
  deckUrl: "/investors/earnings/q4-2025-deck.pdf",
  webcastUrl: "/investors/earnings/q4-2025-webcast.mp4",
  transcriptUrl: "/investors/earnings/q4-2025-transcript.pdf"
};

export const annualReports = [
  {
    year: 2025,
    title: "Annual Report & Accounts 2025",
    pdfUrl: "/investors/reports/annual-report-2024.pdf",
    highlights: [
      "Revenue grew 12% to ₦1.73T ($1.19B)",
      "ROE improved to 18.4% from 17.2%",
      "Digital banking users surpassed 10M"
    ]
  },
  {
    year: 2024,
    title: "Annual Report & Accounts 2024",
    pdfUrl: "/investors/reports/annual-report-2023.pdf",
    highlights: [
      "Total assets reached ₦34.2T",
      "Expanded to 14 African markets",
      "CAR maintained above 20%"
    ]
  },
  {
    year: 2023,
    title: "Annual Report & Accounts 2023",
    pdfUrl: "/investors/reports/annual-report-2022.pdf",
    highlights: [
      "Net income grew 15% to ₦285B",
      "Launched digital banking platform",
      "NPL ratio improved to 3.8%"
    ]
  },
  {
    year: 2022,
    title: "Annual Report & Accounts 2022",
    pdfUrl: "/investors/reports/annual-report-2021.pdf",
    highlights: [
      "Completed $320M BIA acquisition",
      "ROE reached 16.8%",
      "Agent network expanded to 42K"
    ]
  },
  {
    year: 2021,
    title: "Annual Report & Accounts 2021",
    pdfUrl: "/investors/reports/annual-report-2020.pdf",
    highlights: [
      "Resilient performance amid pandemic",
      "Cost-to-income ratio at 54%",
      "Maintained strong capital ratios"
    ]
  }
];

export const sharePriceHistory = {
  oneYear: [
    { date: "2025-02", price: 382.0 },
    { date: "2025-03", price: 391.5 },
    { date: "2025-04", price: 378.0 },
    { date: "2025-05", price: 399.0 },
    { date: "2025-06", price: 405.0 },
    { date: "2025-07", price: 412.0 },
    { date: "2025-08", price: 408.0 },
    { date: "2025-09", price: 421.0 },
    { date: "2025-10", price: 415.0 },
    { date: "2025-11", price: 428.0 },
    { date: "2025-12", price: 432.0 },
    { date: "2026-01", price: 419.0 },
    { date: "2026-02", price: 425.6 }
  ],
  fiveYear: [
    { date: "2021", price: 285.0 },
    { date: "2022", price: 324.0 },
    { date: "2023", price: 358.0 },
    { date: "2024", price: 392.0 },
    { date: "2025", price: 432.0 },
    { date: "2026", price: 425.6 }
  ]
};

export const priceStats = {
  high52Week: 445.0,
  low52Week: 372.0,
  avgVolume: "12.4M",
  beta: 1.12,
  dividendYield: "4.2%",
  peRatio: 12.8,
  marketCap: "₦6.5T"
};

export const dividendHistory = [
  { year: 2025, interim: 0.85, final: 1.45, total: 2.30, yield: 5.4 },
  { year: 2024, interim: 0.75, final: 1.35, total: 2.10, yield: 5.2 },
  { year: 2023, interim: 0.65, final: 1.25, total: 1.90, yield: 5.0 },
  { year: 2022, interim: 0.60, final: 1.15, total: 1.75, yield: 4.8 },
  { year: 2021, interim: 0.55, final: 1.05, total: 1.60, yield: 4.6 }
];

export const agmInfo = {
  date: "2026-04-15",
  time: "10:00 AM WAT",
  venue: "The Lombard Tower, 44 Marina, Lagos Island",
  virtual: "https://agm.lombardholdco.com",
  agendaUrl: "/investors/agm/2026-agenda.pdf",
  proxyUrl: "/investors/agm/2026-proxy-form.pdf",
  registrationUrl: "https://agm.lombardholdco.com/register"
};

export const analystCoverage = [
  {
    firm: "Goldman Sachs",
    analyst: "Adesola Abiola",
    rating: "Buy",
    targetPrice: 48.00,
    lastUpdate: "2026-01-30"
  },
  {
    firm: "J.P. Morgan",
    analyst: "Michael Chen",
    rating: "Overweight",
    targetPrice: 46.50,
    lastUpdate: "2026-02-05"
  },
  {
    firm: "Morgan Stanley",
    analyst: "Sarah Thompson",
    rating: "Equal Weight",
    targetPrice: 42.00,
    lastUpdate: "2026-01-25"
  },
  {
    firm: "Renaissance Capital",
    analyst: "Oluwatobi Seun",
    rating: "Buy",
    targetPrice: 47.00,
    lastUpdate: "2026-02-01"
  },
  {
    firm: "Citigroup",
    analyst: "David Okonkwo",
    rating: "Neutral",
    targetPrice: 43.00,
    lastUpdate: "2026-01-28"
  }
];

export const shareholderServices = {
  registrar: {
    name: "First Registrars Nigeria Limited",
    address: "2nd Floor, Leadway House, 440 Herbert Macaulay Way, Yaba, Lagos",
    phone: "+234 1 280 0700",
    email: "info@firstregistrarsnigeria.com"
  },
  contacts: [
    {
      title: "Investor Relations",
      name: "Mr. Ebuka Nwafor",
      email: "investor.relations@lombardholdco.com",
      phone: "+234 1 448 0000"
    },
    {
      title: "Company Secretary",
      name: "Barr. Shafiu Lawal-Bello, SAN",
      email: "company.secretary@lombardholdco.com",
      phone: "+234 1 448 0001"
    }
  ],
  forms: [
    { title: "Dividend Mandate Form", url: "/investors/forms/dividend-mandate.pdf" },
    { title: "Change of Address Form", url: "/investors/forms/change-of-address.pdf" },
    { title: "Transfer Form", url: "/investors/forms/transfer-form.pdf" },
    { title: "E-Dividend Registration", url: "/investors/forms/e-dividend.pdf" }
  ]
};

export const faqs = [
  {
    question: "How do I purchase Lombard HoldCo shares?",
    answer: "Shares can be purchased through any licensed stockbroker on the Nigerian Exchange (NGX) or London Stock Exchange (LSE). Contact our Investor Relations team for a list of recommended brokers."
  },
  {
    question: "When are dividends paid?",
    answer: "Dividends are typically paid twice annually: an interim dividend (usually September) and a final dividend following AGM approval (usually May)."
  },
  {
    question: "How do I update my contact details?",
    answer: "Contact our registrar, First Registrars Nigeria Limited, with a completed Change of Address form and valid identification."
  },
  {
    question: "Can I access financial reports electronically?",
    answer: "Yes, all annual reports, quarterly earnings, and financial disclosures are available in the Investor Relations section of our website."
  }
];
