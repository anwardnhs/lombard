import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const bankingImg = "https://media.istockphoto.com/id/2280867613/photo/a-young-couple-stands-together-in-a-stylish-kitchen-smiling-as-they-look-at-a-smartphone-two.jpg?s=612x612&w=0&k=20&c=HpOAKkbTxrUkPjdoRP_TvvuMghULMb8ax1jleC1mpMA=";
const capitalImg = "https://media.istockphoto.com/id/1506554794/photo/an-aerial-view-of-the-surulere-area-of-lagos-nigeria-showing-the-residential-areas-and.jpg?s=612x612&w=0&k=20&c=Kr6JuE0uKC-eIc1YIHg8GvJgV3TkMgbKUsr10DJcULY=";
const assetImg = "https://media.istockphoto.com/id/2184415651/photo/national-theatre-lagos.jpg?s=612x612&w=0&k=20&c=YIw0OEcG680lIJ9QkCs45CCUqDUxsQnI3cLNbUSK6HI=";
const insuranceImg = "https://media.istockphoto.com/id/178367126/photo/african-family-on-grey.jpg?s=612x612&w=0&k=20&c=CUYW5Z1LW0V6pstGt147yX11uTrlPuNyPBGHJKv2bhs=";

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
      description: "Premier investment banking, advisory, and capital markets firm facilitating major transactions across the continent.",
      metrics: ["₦2.5T AUA", "M&A Advisory", "Project Finance"],
      image: capitalImg,
    },
    {
      id: "asset",
      name: "Lombard Asset Management",
      description: "Wealth and asset management division preserving and growing capital for institutions and high-net-worth individuals.",
      metrics: ["₦1.8T AUM", "Pension Funds", "Alternative Investments"],
      image: assetImg,
    },
    {
      id: "insurance",
      name: "Lombard Insurance",
      description: "Comprehensive risk management and insurance solutions spanning life, general, and corporate coverage.",
      metrics: ["Life Assurance", "General Insurance", "Risk Consulting"],
      image: insuranceImg,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F7] font-poppins text-[#0F120F] selection:bg-[#0a0c0a] selection:text-[#F9F9F7]">
      <Header />
      <div className="fixed top-0 left-0 w-full h-20 sm:h-24 bg-[#0a0c0a] z-40" aria-hidden="true" />

      <main className="pt-32 pb-24 relative z-30">
        {/* Page Header */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px] mb-20 mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#0F120F]/50 font-mono text-xs uppercase tracking-widest font-bold mb-6 block">
              Operating Subsidiaries
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#0F120F] leading-[0.9] tracking-tight mb-8">
              A diversified engine of growth.
            </h1>
            <p className="text-lg md:text-xl text-[#0F120F]/70 leading-relaxed font-light max-w-2xl">
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
                className="group flex flex-col bg-white border-2 border-[#0F120F]/10 hover:border-[#C7D3BC] hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E5E5E5] border-b-2 border-[#0F120F]/10">
                  <img 
                    src={sub.image} 
                    alt={sub.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0a0c0a]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-10 flex-grow flex flex-col">
                  <h2 className="text-3xl lg:text-4xl font-serif text-[#0F120F] mb-4">
                    {sub.name}.
                  </h2>
                  <p className="text-[#0F120F]/80 text-base leading-relaxed mb-8 max-w-lg">
                    {sub.description}
                  </p>
                  
                  {/* Metrics */}
                  <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-10 border-t border-[#0F120F]/10 pt-6">
                    {sub.metrics.map((metric, mIdx) => (
                      <li key={mIdx} className="text-[10px] font-bold tracking-widest uppercase text-[#0F120F]/60">
                        {metric}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Action */}
                  <a href={`/businesses/${sub.id}`} className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#0F120F] hover:text-[#C7D3BC] transition-colors mt-auto group/link">
                    Explore {sub.name}
                    <div className="w-8 h-8 rounded-full border border-[#0F120F]/20 flex items-center justify-center group-hover/link:border-[#C7D3BC] transition-colors">
                      <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>

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
