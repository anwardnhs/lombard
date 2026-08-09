import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import kenya from "@/assets/kenya.jpg";
import infra from "@/assets/mainland.jpg";
import solarr from "@/assets/solarr.jpg";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      category: "Market Expansion",
      date: "Feb 08, 2026",
      title: "Lombard Bank Opens Regional East Africa Headquarters in Nairobi.",
      excerpt: "The new sustainable facility will serve as the strategic hub for our retail operations across Kenya, Uganda, and Rwanda, supporting over 2 million digital customers.",
      image: kenya,
      link: "/news/nairobi"
    },
    {
      id: 2,
      category: "Capital Markets",
      date: "Feb 05, 2026",
      title: "Lombard Capital Leads $585M Sovereign Infrastructure Bond.",
      excerpt: "Acting as Lead Arranger, Lombard has successfully closed the Series-IV issuance to finance critical transport corridors and power generation infrastructure in the Niger Delta.",
      image: infra,
      link: "/news/bond"
    },
    {
      id: 3,
      category: "Sustainability",
      date: "Jan 28, 2026",
      title: "Group Launches $200M Renewable Energy Financing Initiative.",
      excerpt: "A dedicated green financing facility exclusively targeting utility-scale solar and wind projects, reinforcing our commitment to the continent's net-zero transition.",
      image: solarr,
      link: "/news/green-energy"
    }
  ];

  return (
    <section className="bg-[#111311] py-32 font-poppins border-t border-white/5 relative overflow-hidden" id="news">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F120F] via-[#151815] to-[#0F120F] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl">
            <span className="text-[#c7d3bc] tracking-[0.2em] text-xs font-bold uppercase mb-4 block">
              Corporate Communications
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-[1] mb-2">
              Media & <span className="text-[#c7d3bc] italic">Market Insights.</span>
            </h2>
          </div>
          
          <a href="/newsroom" className="btn-primary-dark">
            Newsroom Archive
            <FaArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* --- EDITORIAL LIST (Zig-Zag Layout) --- */}
        <div className="flex flex-col gap-20">
          
          {news.map((item, index) => {
            // Logic to determine if this is an "Even" or "Odd" item
            const isEven = index % 2 === 0; // Items 1 and 3 (index 0, 2)
            
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group grid md:grid-cols-2 gap-12 items-center border-t border-white/5 pt-12 md:pt-0 md:border-t-0"
              >
                
                {/* TEXT COLUMN 
                  - If Even (1st/3rd): Order 1 (Left)
                  - If Odd (2nd): Order 2 (Right)
                */}
                <div className={`order-2 ${isEven ? "md:order-1 md:pr-12" : "md:order-2 md:pl-12"}`}>
                  
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#c7d3bc] text-[10px] uppercase tracking-widest font-bold border border-[#c7d3bc]/20 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 leading-tight group-hover:text-[#c7d3bc] transition-colors duration-300 cursor-pointer">
                    <a href={item.link}>{item.title}</a>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/75 text-sm leading-relaxed mb-8 font-medium max-w-md">
                    {item.excerpt}
                  </p>

                  {/* CTA */}
                  <a href={item.link} className="btn-primary-dark">
                    Read Full Story
                    <FaArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* IMAGE COLUMN 
                  - If Even (1st/3rd): Order 2 (Right)
                  - If Odd (2nd): Order 1 (Left)
                */}
                <a 
                  href={item.link} 
                  className={`order-1 relative aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-sm bg-[#1a1d1a] ${isEven ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out">
                     <img 
                       src={item.image} 
                       alt={item.title} 
                       className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700" 
                     />
                  </div>
                </a>

              </motion.div>
            );
          })}

        </div>

        {/* --- FOOTER LINK --- */}
        <div className="flex justify-center mt-20  pt-12">
          <a href="/investors/filings" className="btn-primary-dark">
            View Investor Filings & Reports
            <FaArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
