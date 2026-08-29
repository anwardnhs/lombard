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
    <section className="bg-[#F9F9F7] py-32 font-poppins relative overflow-hidden" id="news">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-[1600px]">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-[#0F120F]/10 pb-12">
          <div className="max-w-3xl">
            <span className="text-[#52796F] tracking-[0.2em] text-[10px] md:text-xs font-bold uppercase mb-6 block">
              Corporate Communications
            </span>
            <h2 className="text-4xl md:text-6xl font-sans font-semibold text-[#0F120F] leading-[1.1] tracking-tight">
              Media & Market Insights.
            </h2>
          </div>
          
          <a href="/newsroom" className="hidden md:inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#0F120F] hover:text-[#52796F] transition-colors group">
            Newsroom Archive
            <div className="w-8 h-8 rounded-full border border-[#0F120F]/20 flex items-center justify-center group-hover:border-[#52796F] transition-colors">
              <FaArrowRight className="w-3 h-3" />
            </div>
          </a>
        </div>

        {/* --- EDITORIAL GRID (3 Columns) --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          
          {news.map((item, index) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#52796F]/5 transition-all duration-500 border border-[#0F120F]/5"
            >
              {/* IMAGE */}
              <a href={item.link} className="block relative aspect-[4/3] overflow-hidden bg-[#E5E5E5]">
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-all duration-700" 
                      loading="lazy"
                    />
                </div>
              </a>

              {/* CONTENT WRAPPER */}
              <div className="flex flex-col flex-grow p-8 sm:p-10">
                {/* META DATA */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[#52796F] text-[9px] uppercase tracking-widest font-bold">
                    {item.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#0F120F]/20" />
                  <span className="text-[#0F120F]/40 text-[9px] uppercase tracking-widest font-mono">
                    {item.date}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-sans font-semibold text-[#0F120F] mb-4 leading-snug group-hover:text-[#52796F] transition-colors duration-300">
                  <a href={item.link}>{item.title}</a>
                </h3>

                {/* EXCERPT */}
                <p className="text-[#0F120F]/60 text-sm leading-relaxed mb-8 flex-grow">
                  {item.excerpt}
                </p>

                {/* TEXT LINK */}
                <a href={item.link} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F120F] group-hover:text-[#52796F] transition-colors mt-auto w-fit">
                  Read Full Story
                  <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}

        </div>

        {/* MOBILE FOOTER LINK */}
        <div className="mt-16 pt-8 border-t border-[#0F120F]/10 flex md:hidden justify-center">
          <a href="/newsroom" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#0F120F] hover:text-[#52796F] transition-colors group">
            Newsroom Archive
            <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
