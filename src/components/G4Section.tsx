import { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const services = [
  {
    id: "commercial-banking",
    title: "Retail & Commercial Banking",
    description: "Comprehensive banking solutions for individuals, SMEs, and large corporations, including deposits, loans, and payment services. ",
    image: "https://media.istockphoto.com/id/2255145992/photo/business-partners-in-meeting.jpg?s=612x612&w=0&k=20&c=oLdJka3RC-jsckC-RaN7PINzSH1RtTANAYnIObZccd4=",
    href: "/about",
  },
  {
    id: "investment-banking",
    title: "Investment Banking & Capital Markets",
    description: "Advisory, capital raising, and securities trading for institutions, corporations, and governments.",
    image: "https://media.istockphoto.com/id/1282745735/photo/asian-woman-research-data-design.jpg?s=612x612&w=0&k=20&c=VZiXZILdIhcAenxT9gGrZ_DIn2_u_j7oD3e8tw5BtHI=",
    href: "/about",
  },
  {
    id: "wealth-management",
    title: "Asset & Wealth Management",
    description: "Preserving and growing wealth for individuals, families, and institutional investors across public and private markets.",
    image: "https://media.istockphoto.com/id/2157490091/photo/young-couple-shopping-online.jpg?s=612x612&w=0&k=20&c=2VZ9RmoobLH7aKCWAmN3vGa1nDGfbhuOnEAsuvoc0Ew=",
    href: "/about",
  },
  {
    id: "insurance",
    title: "Insurance & Risk Management",
    description: "Comprehensive general and life insurance solutions to protect assets and mitigate complex risks.",
    image: "https://media.istockphoto.com/id/2199066209/photo/car-sales-manager-giving-new-auto-key-to-family-couple-buying-new-vehicle-standing-in.jpg?s=612x612&w=0&k=20&c=4QYKp6ncAjHWRwX1okgHHlYOzrylT8ZPdaHXnyp_3o8=",
    href: "/about",
  },
];

const WhatWeDoSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by roughly one card width
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 1.5 : current.offsetWidth / 1.5;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="what-we-do"
      className="relative py-24 lg:py-32 pl-6 lg:pl-12 font-poppins overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1920&auto=format&fit=crop&q=80')` }}
    >
      {/* Semi-transparent white overlay to ensure text readability on the texture */}
      <div className="absolute inset-0 bg-white/90 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10 text-[#0F120F]">
        
        {/* Section Header with Navigation Arrows */}
        <div className="pr-6 lg:pr-12 mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#4A5D43] mb-4">
               What We Do 
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F120F] tracking-tight leading-[1.05]">
              Delivering for Our Clients
            </h2>
          </div>
          
          {/* Custom Scroll Arrows */}
          <div className="flex items-center gap-3 hidden sm:flex">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center border border-[#0F120F]/20 text-[#0F120F]/60 hover:text-[#0F120F] hover:border-[#0F120F]/50 transition-all duration-300 rounded-full bg-transparent hover:bg-white/50 backdrop-blur-sm"
              aria-label="Scroll Left"
            >
              <FaChevronLeft className="text-lg" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 flex items-center justify-center border border-[#0F120F]/20 text-[#0F120F]/60 hover:text-[#0F120F] hover:border-[#0F120F]/50 transition-all duration-300 rounded-full bg-transparent hover:bg-white/50 backdrop-blur-sm"
              aria-label="Scroll Right"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 lg:gap-10 pb-12 pr-6 lg:pr-12 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href={service.href}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col bg-transparent outline-none flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[28vw] snap-start"
            >
              {/* Image Container with overflow hidden for zoom effect */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 border-b-[3px] border-transparent group-hover:border-[#4A5D43] transition-colors duration-300">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  crossOrigin="anonymous"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-[#4A5D43]/0 group-hover:bg-[#4A5D43]/10 transition-colors duration-500" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow pr-4">
                <h3 className="text-2xl font-serif text-[#0F120F] mb-3 leading-snug group-hover:text-[#4A5D43] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-base text-[#0F120F]/70 font-light leading-relaxed mb-6">
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