import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLandmark, FaBriefcase, FaShieldHalved, FaFileContract, FaArrowRight, FaPlus, FaMinus } from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { holdCoMetrics } from "@/data/lombard";

import lombardt from "@/assets/hq11.jpg";
import anwar from "@/assets/anwar.png";
import obi from "@/assets/obi.jpg";
import folarin from "@/assets/folarin.jpg";
import kurfi from "@/assets/Ebuka.png";

const AnimatedMetric = ({ value }: { value: string | number }) => {
  const text = String(value);
  const match = text.match(/^(\D*)([\d,.]+)(.*)$/);
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (!match) return;
    const [, prefix, number, suffix] = match;
    const target = Number(number.replace(/,/g, ""));
    const decimals = number.includes(".") ? number.split(".")[1].length : 0;
    const start = performance.now();
    let frame = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (target * eased).toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      setShown(prefix + current + suffix);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [text, match?.[0]]);

  return <>{shown}</>;
};

const CorporateProfile = () => {
  const [expandedFounder, setExpandedFounder] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F9F9F7] font-poppins text-[#0F120F] selection:bg-[#0a0c0a] selection:text-[#F9F9F7]">
      <Header />
      <div className="fixed top-0 left-0 w-full h-20 sm:h-24 bg-[#0a0c0a] z-40" aria-hidden="true" />

      <main className="pt-32 pb-32">
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px] mb-32 mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <Breadcrumbs items={[{ label: "Corporate Profile" }]} theme="light" className="mb-8" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-semibold leading-[1.1] tracking-tight mb-8">
              A legacy of <br />
              <span className="text-[#0F120F]/60">African capital.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#0F120F]/70 font-sans font-light max-w-3xl leading-relaxed">
               Lombard Holdco is a leading financial services group in Africa, with a rich history of providing innovative solutions to meet the evolving needs of our clients. Our commitment to excellence and integrity has established us as a trusted partner in the financial industry.
            </p>
          </motion.div>
        </section>

        {/* AT A GLANCE (REDESIGNED) */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px] mb-40">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#52796F] block mb-4">01 � At a Glance</span>
              <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl tracking-tight">The Lombard Tower.</h2>
            </div>
          </div>
          
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-12">
            <img src={lombardt} alt="The Lombard Tower" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 border-t border-[#0F120F]/10 pt-10">
            {[
              { icon: FaFileContract, label: "Incorporation", value: "Nigeria (RC 10442)" },
              { icon: FaLandmark, label: "Headquarters", value: "44 Marina, Lagos Island, Lagos" },
              { icon: FaShieldHalved, label: "Credit Ratings", value: "AAA Institutional Rating" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#0a0c0a]/5 flex items-center justify-center text-[#52796F]">
                  <item.icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F120F]/50 mb-1">{item.label}</h4>
                  <p className="text-lg font-medium text-[#0F120F]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* METRICS */}
        <section className="bg-white text-[#0F120F] py-24 sm:py-32 mb-32 sm:mb-40">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F]/50 block mb-6">02 � Scale</span>
                <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl max-w-2xl leading-[1.05] tracking-tight">Delivering impact at scale.</h2>
              </div>
              <a href="/investors" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-[#52796F] transition-colors pb-2 border-b border-[#0F120F]/20 hover:border-[#52796F]">
                Investor Relations
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 sm:gap-y-16 pt-12 sm:pt-16 border-t border-[#0F120F]/10">
              {holdCoMetrics.map((metric, i) => (
                <motion.div
                  key={i}
                  className="group"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <p className="font-sans font-medium text-5xl md:text-6xl tracking-tight text-[#0F120F] mb-4 transition-transform duration-300 group-hover:scale-105 origin-left">
                    <AnimatedMetric value={metric.value} />
                  </p>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#0F120F]/80 mb-2">{metric.label}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDERS GRID */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px]">
          <div className="mb-20">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F]/50 block mb-6">03 � Genesis</span>
            <h2 className="font-sans text-5xl sm:text-6xl md:text-7xl max-w-4xl leading-[1.1] mb-8">
              The founding consortium that built the Institution 
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
            {[
              {
                name: "Mr. Anwar Alhassan, CFR",
                role: "Group Chairman, Lombard HoldCo Plc",
                bio: "Former CEO of Lombard Bank and a pioneer in Nigeria's banking sector. He has over 30 years of experience in financial services and corporate governance.",
                image: anwar
              },
              {
                name: "Mr. Obi Nnamani, CFA",
                role: "Non-Executive Director, Lombard Capital Limited",
                bio: "Investment banking veteran with a track record of structuring complex financial transactions across Africa. Former Managing Director at a leading investment bank.  ",
                image: obi
              },
              {
                name: "Otunba Folarin Bakare, CON",
                role: "Chairman, Lombard Bank Plc",
                bio: "Seasoned banker and entrepreneur with extensive experience in banking, finance, and corporate governance. He has played a pivotal role in shaping the strategic direction of Lombard Bank.  ",
                image: folarin
              },
              {
                name: "Mr. Abdullahi Kurfi, OON",
                role: "Non-Executive Director, Lombard HoldCo Plc",
                bio: "Veteran banker and financial strategist with a deep understanding of the African financial landscape. He has been instrumental in driving Lombard's growth and expansion across the continent.  ",
                image: kurfi
              }
            ].map((partner, i) => (
              <div key={i} className="group flex flex-col sm:flex-row gap-8">
                <div className="sm:w-1/2 aspect-[3/4] overflow-hidden bg-[#E5E5E5]">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover object-top transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="sm:w-1/2 flex flex-col justify-center">
                  <h3 className="font-sans text-3xl mb-3 leading-tight">{partner.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#52796F] mb-6">{partner.role}</p>

                  <div className="border-t border-[#0F120F]/10 pt-4 mt-auto">
                    <button 
                      onClick={() => setExpandedFounder(expandedFounder === i ? null : i)}
                      className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#0F120F]/70 hover:text-[#52796F] transition-colors"
                    >
                      {expandedFounder === i ? <FaMinus /> : <FaPlus />}
                      {expandedFounder === i ? "Hide Biography" : "Read Biography"}
                    </button>
                    
                    <AnimatePresence>
                      {expandedFounder === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-sm text-[#0F120F]/70 leading-relaxed font-light">
                            {partner.bio}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default CorporateProfile;
