import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, 
  FaDownload, 
  FaFilePdf, 
  FaMagnifyingGlass,
  FaImage,
  FaVideo,
  FaNewspaper,
  FaChevronRight,
  FaClock,
  FaTag
} from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

// Asset Imports (Using placeholders for demo)
import featuredImg from "@/assets/hq11.jpg"; 
import marketImg from "@/assets/trade.jpg"; 
import esgImg from "@/assets/windmill.jpg"; 
import techImg from "@/assets/cto.png"; 
import dealImg from "@/assets/deal.png"; 
import chideImg from "@/assets/chide.png";


const Newsroom = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // --- DATA: FILTERS ---
  const filters = ["All", "Press Releases", "Market Insights", "ESG & Impact", "Corporate Updates"];

  // --- DATA: FEATURED STORIES (3 Items) ---
  const featuredStories = [
    {
      id: 1,
      type: "Hero",
      category: "Press Release",
      date: "Nov 01, 2025",
      title: "Lombard HoldCo Reports Record Revenue of ₦1.6 Trillion for FY 2025",
      excerpt: "The Group's strong performance reflects its diversified business model, strategic investments, and commitment to sustainable growth across Africa.",
      image: featuredImg,
      readTime: "5 min read"
    },
    {
      id: 2,
      type: "Sub",
      category: "Market Insights",
      date: "Oct 28, 2025",
      title: "Navigating Volatility: Lombard's Perspective on African Markets Amid Global Uncertainty",
      image: marketImg,
      readTime: "6 min read"
    },
    {
      id: 3,
      type: "Sub",
      category: "ESG & Impact",
      date: "Oct 25, 2025",
      title: "Lombard's ESG Initiatives Drive Sustainable Development Across Africa",
      image: esgImg,
      readTime: "4 min read"
    }
  ];

  // --- DATA: LATEST NEWS GRID ---
  const allNews = [
    {
      id: 102,
      category: "Corporate Updates",
      date: "Oct 12, 2025",
      title: "Lombard Appoints New Chief Technology Officer to Lead Digital Transformation",
      excerpt: "The appointment underscores Lombard's commitment to leveraging technology for enhanced client experiences and operational efficiency. ",
      image: techImg,
      readTime: "4 min read"
    },
    {
      id: 103,
      category: "Press Releases",
      date: "Oct 05, 2025",
      title: "Lombard Capital Markets Leads Successful ₦150 Billion Bond Issuance for Lagos State Government",
      excerpt: "The issuance reflects strong investor confidence in Lombard's capabilities and the Nigerian capital markets.",
      image: dealImg,
      readTime: "3 min read"
    },
    {
      id: 105,
      category: "Press Releases",
      date: "Sep 15, 2025",
      title: "Lombard HoldCo Declares Interim Dividend of ₦2.50 Per Share",
      excerpt: "The interim dividend reflects continued balance-sheet strength and disciplined capital management across the Group.",
      image: chideImg,
      readTime: "2 min read"
    },
  ];

  // --- FUNCTIONAL FILTERING LOGIC ---
  const filteredNews = activeFilter === "All" 
    ? allNews 
    : allNews.filter(item => item.category === activeFilter);

  // --- DATA: PRESS RELEASES LIST ---
  const pressReleases = [
    { date: "Oct 28, 2025", title: "Lombard HoldCo Plc Declares Interim Dividend of ₦2.50 Per Share", category: "Investor Relations" },
    { date: "Oct 15, 2025", title: "Notification of Closed Period for Q3 2025 Financial Statements", category: "Regulatory Filing" },
    { date: "Sep 30, 2025", title: "Lombard Capital Markets Acts as Lead Issuing House for Lagos State Bond", category: "Deal Announcement" },
    { date: "Sep 12, 2025", title: "Lombard HoldCo Plc Notice of Extraordinary General Meeting (EGM)", category: "Governance" },
  ];

  // Format date helper
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-[#F9F9F7] font-poppins text-[#0F120F] min-h-screen">
      <Header />
      
      {/* Header Spacer */}
      <div className="h-20 bg-[#0F120F]" />

      {/* --- 1. HERO SECTION --- */}
      <section className="pt-16 pb-10 px-6 lg:px-12 border-b border-[#0F120F]/10 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10">
            <div className="max-w-2xl">
              <Breadcrumbs items={[{ label: "Newsroom" }]} className="mb-4" />
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#0F120F]/50 mb-3">
                Newsroom
              </span>
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F120F] mb-3 leading-[1.1]">
                Media Center
              </h1>
              <p className="text-lg md:text-xl text-[#0F120F]/70 font-normal leading-relaxed">
                Official press releases, investor updates, and market commentary from Lombard HoldCo.
              </p>
            </div>
            
            {/* Enhanced Search Bar */}
            <div className="w-full md:w-auto relative">
              <input 
                type="text" 
                placeholder="Search articles, press releases..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-96 bg-[#F9F9F7] border-2 border-[#0F120F]/10 rounded py-3 pl-12 pr-4 text-sm font-medium placeholder:text-[#0F120F]/40 focus:outline-none focus:border-[#0F120F] focus:bg-white transition-all"
                aria-label="Search newsroom articles"
              />
              <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F120F]/40" />
            </div>
          </div>

          {/* Enhanced Filters with Better Spacing */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider border-2 transition-all rounded ${
                  activeFilter === filter
                    ? "bg-[#0F120F] text-white border-[#0F120F] shadow-sm"
                    : "bg-white text-[#0F120F]/70 border-[#0F120F]/10 hover:border-[#0F120F]/30 hover:text-[#0F120F]"
                }`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. FEATURED STORIES (1 HERO + 2 SIDE) --- */}
      {activeFilter === "All" && (
        <section className="py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#0F120F]">Featured Stories</h2>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F120F]/40">
                Top Stories
              </span>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-6">
              
              {/* Main Hero Story (Col Span 8) */}
              <article className="lg:col-span-8 group relative bg-white border-2 border-[#0F120F]/10 hover:border-[#0F120F]/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-[#E5E5E5] relative">
                  <img loading="lazy" 
                    src={featuredStories[0].image} 
                    alt={featuredStories[0].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5 bg-[#0F120F] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 shadow-lg">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4 text-[10px] text-[#0F120F]/60 font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <FaTag className="text-[8px]" />
                      <span className="text-[#0F120F] uppercase tracking-wide">{featuredStories[0].category}</span>
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <FaClock className="text-[8px]" />
                      {featuredStories[0].date}
                    </span>
                    <span>•</span>
                    <span>{featuredStories[0].readTime}</span>
                  </div>
                  <h3 className="font-sans text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0F120F] mb-5 leading-[1.2] group-hover:text-[#4a5d4a] transition-colors">
                    {featuredStories[0].title}
                  </h3>
                  <p className="text-base text-[#0F120F]/75 font-normal leading-relaxed mb-6 max-w-2xl">
                    {featuredStories[0].excerpt}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#0F120F] border-b-2 border-[#0F120F]/20 pb-1 hover:border-[#0F120F] hover:gap-3 transition-all"
                    aria-label={`Read more about ${featuredStories[0].title}`}
                  >
                    Read Full Release <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </article>

              {/* Side Stories (Col Span 4 - Stacked) */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {featuredStories.slice(1).map((story) => (
                  <article key={story.id} className="group flex-1 bg-white border-2 border-[#0F120F]/10 hover:border-[#0F120F]/20 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                    <div className="aspect-[3/2] overflow-hidden bg-[#E5E5E5]">
                      <img loading="lazy" 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-[10px] text-[#0F120F]/60 font-semibold">
                          <span className="inline-flex items-center gap-1.5">
                            <FaTag className="text-[8px]" />
                            <span className="text-[#0F120F] uppercase tracking-wide">{story.category}</span>
                          </span>
                          <span>•</span>
                          <span>{story.date}</span>
                        </div>
                        <h3 className="font-sans text-lg lg:text-xl font-bold text-[#0F120F] leading-snug group-hover:text-[#4a5d4a] transition-colors mb-2">
                          {story.title}
                        </h3>
                        <span className="text-[10px] text-[#0F120F]/50 font-medium">{story.readTime}</span>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <FaChevronRight className="text-[#0F120F]/30 group-hover:text-[#0F120F] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* --- 3. LATEST NEWS GRID (Filtered) --- */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#0F120F]">
              {activeFilter === "All" ? "Latest Updates" : activeFilter}
            </h2>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F120F]/50 bg-[#F9F9F7] px-4 py-2 rounded border border-[#0F120F]/10">
              {filteredNews.length} {filteredNews.length === 1 ? 'Result' : 'Results'}
            </span>
          </div>

          <AnimatePresence mode='wait'>
            {filteredNews.length > 0 ? (
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {filteredNews.map((item) => (
                  <motion.article 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white border-2 border-[#0F120F]/10 hover:border-[#0F120F]/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
                  >
                    {/* Card Image */}
                    <div className="aspect-[16/9] overflow-hidden bg-[#E5E5E5] relative">
                      <img loading="lazy" 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                        <span className="inline-block bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#0F120F]">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 lg:p-7 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-4 text-[10px] text-[#0F120F]/60 font-semibold">
                        <span className="inline-flex items-center gap-1.5">
                          <FaClock className="text-[8px]" />
                          {item.date}
                        </span>
                        <span className="text-[#0F120F]/40">{item.readTime}</span>
                      </div>
                      <h3 className="font-sans text-lg lg:text-xl font-bold mb-3 text-[#0F120F] leading-snug group-hover:text-[#4a5d4a] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#0F120F]/70 font-normal leading-relaxed mb-6 flex-1">
                        {item.excerpt}
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F120F] flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read Article <FaArrowRight className="text-[#52796F] text-xs" />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white border-2 border-dashed border-[#0F120F]/10 rounded"
              >
                <p className="text-[#0F120F]/50 font-medium text-lg mb-2">No articles found</p>
                <p className="text-[#0F120F]/40 text-sm">Try selecting a different category</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* --- 4. PRESS RELEASES (LIST VIEW) --- */}
      <section className="py-20 px-6 lg:px-12 bg-white border-y-2 border-[#0F120F]/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left: Heading */}
            <div className="lg:col-span-4">
              <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4 text-[#0F120F]">
                Filings & Releases
              </h2>
              <p className="text-sm font-normal text-[#0F120F]/70 leading-relaxed mb-8">
                Official statements, regulatory filings, and corporate announcements for investors and media partners.
              </p>
              <button className="px-6 py-3 border-2 border-[#0F120F] text-[#0F120F] text-[11px] font-bold uppercase tracking-wider hover:bg-[#0F120F] hover:text-white transition-all rounded">
                View Full Archive
              </button>
            </div>

            {/* Right: The List */}
            <div className="lg:col-span-8">
              <div className="border-t-2 border-[#0F120F]">
                {pressReleases.map((release, i) => (
                  <a 
                    href="#" 
                    key={i} 
                    className="group py-6 border-b border-[#0F120F]/10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between hover:bg-[#F9F9F7] transition-all -mx-4 px-4"
                    aria-label={`Download ${release.title}`}
                  >
                    <div className="flex flex-col gap-2 flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F120F]/40">
                        {release.date} • {release.category}
                      </span>
                      <h4 className="font-semibold text-[#0F120F] text-base lg:text-lg group-hover:text-[#4a5d4a] transition-colors leading-snug">
                        {release.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="p-3 border-2 border-red-100 rounded bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
                        <FaFilePdf className="text-lg" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 5. MEDIA & RESOURCES --- */}
      <section className="py-20 px-6 lg:px-12 bg-[#F9F9F7]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div>
              <h2 className="font-sans text-3xl md:text-4xl font-bold mb-3 text-[#0F120F]">
                Media Resources
              </h2>
              <p className="text-sm font-normal text-[#0F120F]/60">
                Download official assets and reference materials for editorial use.
              </p>
            </div>
            <a
              href="#"
              className="text-[11px] font-bold uppercase tracking-wider text-[#0F120F] border-b-2 border-[#0F120F]/30 pb-1 hover:border-[#0F120F] transition-all inline-flex items-center gap-2"
            >
              View Media Archive <FaArrowRight className="text-xs" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="#" 
              className="group bg-white border-2 border-[#0F120F]/10 p-8 rounded hover:border-[#0F120F]/30 hover:shadow-lg transition-all"
              aria-label="Download media kit"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[#F9F9F7] flex items-center justify-center text-[#0F120F] border-2 border-[#0F120F]/10 rounded group-hover:bg-[#0F120F] group-hover:text-white group-hover:border-[#0F120F] transition-all">
                  <FaNewspaper className="text-xl" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#0F120F]/30 bg-[#F9F9F7] px-3 py-1 rounded">
                  PDF
                </span>
              </div>
              <h3 className="font-sans text-xl text-[#0F120F] mb-2 font-bold">Media Kit</h3>
              <p className="text-sm font-normal text-[#0F120F]/70 leading-relaxed">
                Fact sheets, leadership bios, and key corporate details.
              </p>
            </a>

            <a 
              href="#" 
              className="group bg-white border-2 border-[#0F120F]/10 p-8 rounded hover:border-[#0F120F]/30 hover:shadow-lg transition-all"
              aria-label="Download brand assets"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[#F9F9F7] flex items-center justify-center text-[#0F120F] border-2 border-[#0F120F]/10 rounded group-hover:bg-[#0F120F] group-hover:text-white group-hover:border-[#0F120F] transition-all">
                  <FaImage className="text-xl" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#0F120F]/30 bg-[#F9F9F7] px-3 py-1 rounded">
                  ZIP
                </span>
              </div>
              <h3 className="font-sans text-xl text-[#0F120F] mb-2 font-bold">Brand Assets</h3>
              <p className="text-sm font-normal text-[#0F120F]/70 leading-relaxed">
                Official logos, guidelines, and B-roll assets.
              </p>
            </a>

            <a 
              href="#" 
              className="group bg-white border-2 border-[#0F120F]/10 p-8 rounded hover:border-[#0F120F]/30 hover:shadow-lg transition-all"
              aria-label="Download leadership photos"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[#F9F9F7] flex items-center justify-center text-[#0F120F] border-2 border-[#0F120F]/10 rounded group-hover:bg-[#0F120F] group-hover:text-white group-hover:border-[#0F120F] transition-all">
                  <FaVideo className="text-xl" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#0F120F]/30 bg-[#F9F9F7] px-3 py-1 rounded">
                  JPG
                </span>
              </div>
              <h3 className="font-sans text-xl text-[#0F120F] mb-2 font-bold">Leadership Photos</h3>
              <p className="text-sm font-normal text-[#0F120F]/70 leading-relaxed">
                High-resolution executive headshots for press use.
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsroom;
