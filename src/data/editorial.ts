import bank from "@/assets/curated/institutional.webp";
import capital from "@/assets/curated/mainland.webp";
import asset from "@/assets/curated/assets.webp";
import insurance from "@/assets/curated/insurance.webp";
import kenya from "@/assets/curated/kenya.webp";
import infrastructure from "@/assets/curated/infra.webp";
import solar from "@/assets/curated/solarr.webp";
export const businesses = [
  {
    id: "banking",
    name: "Lombard Bank",
    sector: "Commercial & corporate banking",
    image: bank,
    description:
      "Commercial and corporate banking services for individuals, SMEs and institutions across 14 African markets.",
    capabilities: [
      "Corporate banking",
      "Trade finance",
      "Retail & digital banking",
    ],
  },
  {
    id: "capital",
    name: "Lombard Capital",
    sector: "Investment banking & capital markets",
    image: capital,
    description:
      "Investment banking, financial advisory and securities services for corporate, institutional and public-sector clients.",
    capabilities: ["Capital markets", "M&A advisory", "Project finance"],
  },
  {
    id: "asset",
    name: "Lombard Asset Management",
    sector: "Asset & wealth management",
    image: asset,
    description:
      "Investment management and wealth advisory for institutions and high-net-worth clients across public and private markets.",
    capabilities: [
      "Asset management",
      "Wealth advisory",
      "Alternative investments",
    ],
  },
  {
    id: "insurance",
    name: "Lombard Insurance",
    sector: "Insurance & risk management",
    image: insurance,
    description:
      "Life assurance, general insurance and risk consulting for individuals and corporate clients.",
    capabilities: ["Life assurance", "General insurance", "Risk consulting"],
  },
];
export const stories = [
  {
    id: "nairobi",
    category: "Group news",
    date: "8 February 2026",
    title: "Lombard Bank opens regional headquarters in Nairobi",
    summary:
      "Lombard Bank's regional headquarters in Nairobi will support retail operations across Kenya, Uganda and Rwanda.",
    image: kenya,
  },
  {
    id: "infrastructure",
    category: "Capital markets",
    date: "5 February 2026",
    title: "Lombard Capital arranges $585 million infrastructure bond",
    summary:
      "Lombard Capital acted as lead arranger on a $585 million sovereign infrastructure bond to support transport and power projects.",
    image: infrastructure,
  },
  {
    id: "energy",
    category: "Sustainability",
    date: "28 January 2026",
    title: "Group announces $200 million renewable energy facility",
    summary:
      "The Group's $200 million renewable energy financing initiative targets utility-scale solar and wind projects.",
    image: solar,
  },
];

import featuredImg from "@/assets/curated/hq11.webp";
import marketImg from "@/assets/curated/trade.webp";
import esgImg from "@/assets/curated/windmill.webp";
import techImg from "@/assets/curated/cto.webp";
import dealImg from "@/assets/curated/deal.webp";
import chideImg from "@/assets/curated/chide.webp";
const featuredStories = [
  {
    id: 1,
    type: "Hero",
    category: "Press Release",
    date: "Nov 01, 2025",
    title: "Lombard HoldCo Reports Record Revenue of ₦1.6 Trillion for FY 2025",
    excerpt:
      "The Group's strong performance reflects its diversified business model, strategic investments, and commitment to sustainable growth across Africa.",
    image: featuredImg,
    readTime: "5 min read",
  },
  {
    id: 2,
    type: "Sub",
    category: "Market Insights",
    date: "Oct 28, 2025",
    title:
      "Navigating Volatility: Lombard's Perspective on African Markets Amid Global Uncertainty",
    image: marketImg,
    readTime: "6 min read",
  },
  {
    id: 3,
    type: "Sub",
    category: "ESG & Impact",
    date: "Oct 25, 2025",
    title:
      "Lombard's ESG Initiatives Drive Sustainable Development Across Africa",
    image: esgImg,
    readTime: "4 min read",
  },
];
const allNews = [
  {
    id: 102,
    category: "Corporate Updates",
    date: "Oct 12, 2025",
    title:
      "Lombard Appoints New Chief Technology Officer to Lead Digital Transformation",
    excerpt:
      "The appointment underscores Lombard's commitment to leveraging technology for enhanced client experiences and operational efficiency. ",
    image: techImg,
    readTime: "4 min read",
  },
  {
    id: 103,
    category: "Press Releases",
    date: "Oct 05, 2025",
    title:
      "Lombard Capital Markets Leads Successful ₦150 Billion Bond Issuance for Lagos State Government",
    excerpt:
      "The issuance reflects strong investor confidence in Lombard's capabilities and the Nigerian capital markets.",
    image: dealImg,
    readTime: "3 min read",
  },
  {
    id: 105,
    category: "Press Releases",
    date: "Sep 15, 2025",
    title: "Lombard HoldCo Declares Interim Dividend of ₦2.50 Per Share",
    excerpt:
      "The interim dividend reflects continued balance-sheet strength and disciplined capital management across the Group.",
    image: chideImg,
    readTime: "2 min read",
  },
];
export const newsroomStories = [...stories, ...featuredStories, ...allNews].map(
  (item) => ({
    id: String(item.id),
    category: item.category.toLowerCase().startsWith("press release")
      ? "Press releases"
      : item.category,
    date: item.date,
    title: item.title,
    summary:
      "summary" in item
        ? item.summary
        : "excerpt" in item
          ? item.excerpt
          : "A perspective from across the Lombard group and the markets we serve.",
    image: item.image,
  }),
);
