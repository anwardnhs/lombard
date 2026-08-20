import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

// High-resolution local assets for guaranteed fast loading
import bankImg from "../assets/hq11.jpg";
import capitalImg from "../assets/markets.jpg";
import wealthImg from "../assets/wealth.jpg";
import insuranceImg from "../assets/corporate.jpg";

const services = [
  {
    id: "commercial-banking",
    title: "Commercial & Corporate Banking",
    description: "Financing, trade solutions, and transaction banking tailored for corporate clients and enterprises.",
    image: bankImg,
    href: "/about",
  },
  {
    id: "investment-banking",
    title: "Investment Banking & Markets",
    description: "Advisory, capital raising, and securities trading for institutions, corporations, and governments.",
    image: capitalImg,
    href: "/about",
  },
  {
    id: "wealth-management",
    title: "Asset & Wealth Management",
    description: "Preserving and growing wealth for individuals, families, and institutional investors across public and private markets.",
    image: wealthImg,
    href: "/about",
  },
  {
    id: "insurance",
    title: "Insurance & Risk Management",
    description: "Comprehensive general and life insurance solutions to protect assets and mitigate complex risks.",
    image: insuranceImg,
    href: "/about",
  },
];

const WhatWeDoSection = () => {
  return (
    <section 
      id="what-we-do"
      className="relative py-24 lg:py-32 px-6 lg:px-12 font-poppins overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1920&auto=format&fit=crop&q=80')` }}
    >
      {/* Semi-transparent white overlay to ensure text readability on the texture */}
      <div className="absolute inset-0 bg-white/90 pointer-events-none" />

      <div className="container max-w-[1400px] mx-auto relative z-10 text-[#0F120F]">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#4A5D43] mb-4">
             What We Do 
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F120F] tracking-tight leading-[1.05]">
            Delivering for Our Clients
          </h2>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col bg-transparent outline-none"
            >
              {/* Image Container with overflow hidden for zoom effect */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 border-b-[3px] border-transparent group-hover:border-[#4A5D43] transition-colors duration-300">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-[#4A5D43]/0 group-hover:bg-[#4A5D43]/10 transition-colors duration-500" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#0F120F] mb-3 leading-snug group-hover:text-[#4A5D43] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-[#0F120F]/70 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Minimalist Link */}
                <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-[#4A5D43]">
                  <span className="mr-2">Explore</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;