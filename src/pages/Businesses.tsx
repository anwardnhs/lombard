import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import bankingImg from "@/assets/mainland.jpg";
import capitalImg from "@/assets/deal.png";
import assetImg from "@/assets/meeting.jpg";
import insuranceImg from "@/assets/health.jpg";

const Businesses = () => {
  const subsidiaries = [
    {
      id: "banking",
      name: "Lombard Bank",
      description: "Our flagship commercial banking division serving millions of retail customers, SMEs, and large corporates across 14 African nations.",
      metrics: ["₦18.2T Total Assets", "14 Countries", "12M+ Customers"],
      image: bankingImg,
    },
    {
      id: "capital",
      name: "Lombard Capital",
      description: "The premier investment banking and advisory firm structuring major infrastructure, sovereign debt, and M&A deals on the continent.",
      metrics: ["₦4.5T Deals Advised", "AAA Rated", "Top Tier IBD"],
      image: capitalImg,
    },
    {
      id: "asset-management",
      name: "Lombard Asset Management",
      description: "Providing world-class wealth management, institutional investing, and alternative asset strategies for global and regional investors.",
      metrics: ["₦8.4T AUM", "Pension & Mutual Funds", "Global Equities"],
      image: assetImg,
    },
    {
      id: "insurance",
      name: "Lombard Insurance",
      description: "Comprehensive risk management solutions covering life assurance, general insurance, and specialized corporate underwriting.",
      metrics: ["₦1.1T Gross Premium", "Life & General", "Pan-African Reach"],
      image: insuranceImg,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F0] font-poppins selection:bg-[#4A5D43] selection:text-[#F4F4F0]">
      <Header />

      <main className="pt-32 pb-24">
        {/* Page Header */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px] mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#4A5D43] font-mono text-xs uppercase tracking-widest font-bold mb-6 block">
              Operating Subsidiaries
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#111] leading-[0.9] tracking-tight mb-8">
              A diversified engine of growth.
            </h1>
            <p className="text-lg md:text-xl text-[#111]/70 leading-relaxed font-light max-w-2xl">
              Lombard HoldCo operates through four specialized, market-leading subsidiaries. 
              Together, they form a comprehensive financial ecosystem designed to drive Africa's economic transformation.
            </p>
          </motion.div>
        </section>

        {/* Subsidiaries Grid */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px]">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {subsidiaries.map((sub, idx) => (
              <motion.article 
                key={sub.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-[#111]">
                  <img 
                    src={sub.image} 
                    alt={sub.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h2 className="text-3xl lg:text-4xl font-serif text-[#111] mb-4">
                    {sub.name}.
                  </h2>
                  <p className="text-[#111]/70 text-base leading-relaxed font-light mb-8 max-w-lg">
                    {sub.description}
                  </p>
                  
                  {/* Metrics */}
                  <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-10 border-t border-[#111]/10 pt-6">
                    {sub.metrics.map((metric, mIdx) => (
                      <li key={mIdx} className="text-xs font-mono tracking-widest uppercase text-[#111]/60">
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <a href={`/businesses/${sub.id}`} className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#111] hover:text-[#4A5D43] transition-colors mt-auto group/link">
                  Explore {sub.name}
                  <div className="w-8 h-8 rounded-full border border-[#111]/20 flex items-center justify-center group-hover/link:border-[#4A5D43] transition-colors">
                    <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Businesses;
