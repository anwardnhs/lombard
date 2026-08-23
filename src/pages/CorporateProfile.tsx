import { motion } from "framer-motion";
import { FaLandmark, FaBriefcase, FaShieldHalved, FaFileContract, FaArrowRight } from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { holdCoMetrics } from "@/data/lombard";

import lombardt from "@/assets/hq11.jpg";
import anwar from "@/assets/anwar.png";
import obi from "@/assets/obi.jpg";
import folarin from "@/assets/folarin.jpg";
import kurfi from "@/assets/Ebuka.png";

const CorporateProfile = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F7] font-poppins text-[#0F120F] selection:bg-[#0F120F] selection:text-[#F9F9F7]">
      <Header />
      <div className="fixed top-0 left-0 w-full h-20 sm:h-24 bg-[#0F120F] z-40" aria-hidden="true" />

      <main className="pt-32 pb-32">
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px] mb-32 mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight mb-10">
              A legacy of <br />
              <span className="italic text-[#0F120F]/60">African capital.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#0F120F]/70 font-light max-w-2xl leading-relaxed">
              For over seven decades, Lombard HoldCo has engineered the financial infrastructure driving enterprise and wealth creation across the continent.
            </p>
          </motion.div>
        </section>

        {/* AT A GLANCE (EDITORIAL ASYMMETRY) */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px] mb-40">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F]/50 block mb-6">01 — At a Glance</span>
                <h2 className="font-serif text-4xl sm:text-5xl mb-10">The Lombard <br/>Tower.</h2>
                <dl className="space-y-8 max-w-sm">
                  {[
                    { icon: FaFileContract, label: "Incorporation", value: "Nigeria (RC 10442)" },
                    { icon: FaLandmark, label: "Headquarters", value: "The Lombard Tower, 44 Marina, Lagos Island, Lagos" },
                    { icon: FaBriefcase, label: "Auditors", value: "PwC International" },
                    { icon: FaShieldHalved, label: "Credit Ratings", value: "Moody's: B2 (Stable) | Fitch: B+ (Stable)" },
                  ].map((item, i) => (
                    <div key={i} className="pb-6 border-b border-[#0F120F]/10 last:border-0">
                      <dt className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F120F]/50 mb-2">
                        <item.icon className="text-[#0F120F]/40 text-sm" />
                        {item.label}
                      </dt>
                      <dd className="text-base font-medium">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="lg:col-span-7">
              <figure className="aspect-[4/5] lg:aspect-square overflow-hidden bg-[#E5E5E5] relative">
                <img src={lombardt} alt="The Lombard Tower" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-mono text-xs tracking-widest uppercase opacity-80">Global Headquarters</p>
                  <p className="font-serif text-2xl mt-2">44 Marina, Lagos</p>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="bg-[#0F120F] text-[#F9F9F7] py-32 mb-40">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F9F9F7]/50 block mb-6">02 — Scale</span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl max-w-2xl leading-tight">Delivering pan-African impact at scale.</h2>
              </div>
              <a href="/investors" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-[#C7D3BC] transition-colors pb-2 border-b border-white/20 hover:border-[#C7D3BC]">
                Investor Relations
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 pt-16 border-t border-white/10">
              {holdCoMetrics.map((metric, i) => (
                <div key={i} className="group">
                  <p className="font-serif text-5xl md:text-6xl text-[#C7D3BC] mb-4 group-hover:scale-105 transition-transform origin-left">{metric.value}</p>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#F9F9F7]/80 mb-2">{metric.label}</h4>
                  <p className="text-sm text-[#F9F9F7]/50 leading-relaxed font-light">{metric.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDERS GRID */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px]">
          <div className="mb-20">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F]/50 block mb-6">03 — Genesis</span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl max-w-4xl leading-[1.1] mb-8">
              The founding consortium that built the franchise.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
            {[
              {
                name: "Mr. Anwar Alhassan, CFR",
                role: "Group Chairman",
                bio: "Seasoned banking leader and former Citibank Vice President. Architected the 1994 leveraged buyout and served as Group CEO until 2010.",
                image: anwar
              },
              {
                name: "Mr. Obi Nnamani, CFA",
                role: "NED, Capital Markets",
                bio: "Former Goldman Sachs M&A executive. Founded Nnamani Capital and built Lombard's debt capital markets and advisory franchise.",
                image: obi
              },
              {
                name: "Otunba Folarin Bakare, CON",
                role: "Chairman, Lombard Bank",
                bio: "Operations specialist who built Lombard's 500+ branch footprint and orchestrated the national agent banking network.",
                image: folarin
              },
              {
                name: "Mr. Abdullahi Kurfi, OON",
                role: "NED, Lombard HoldCo",
                bio: "Risk governance authority and architect of the Lombard Enterprise Risk Framework (LERF). Former Risk Analyst at Swiss Re.",
                image: kurfi
              }
            ].map((partner, i) => (
              <div key={i} className="group flex flex-col sm:flex-row gap-8">
                <div className="sm:w-1/2 aspect-[3/4] overflow-hidden bg-[#E5E5E5]">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="sm:w-1/2 flex flex-col justify-center">
                  <h3 className="font-serif text-3xl mb-2 leading-tight">{partner.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7D3BC] mb-6">{partner.role}</p>
                  <p className="text-base text-[#0F120F]/70 leading-relaxed font-light">{partner.bio}</p>
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

