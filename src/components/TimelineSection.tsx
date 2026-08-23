import { motion } from "framer-motion";

const profileCards = [
  {
    title: "14 Active Markets",
    description: "Driving economic transformation across the African continent with a deep local footprint in major financial hubs.",
    image: "https://media.istockphoto.com/id/2238578453/photo/aerial-view-gaborone-capital-of-botswana-in-africa-new-development-in-the-city-center.jpg?s=612x612&w=0&k=20&c=KzOIM3-Ag59FQ8z5PCKljeBR1qp60Le42CV9ZCfkhNg=",
    linkText: "View Our Footprint"
  },
  {
    title: "₦36.5T Total Assets",
    description: "Unmatched financial strength and liquidity, positioning us as the premier partner for sovereign and corporate financing.",
    image: "https://media.istockphoto.com/id/519328889/photo/kigali-parliament-building-and-convention-centre.jpg?s=612x612&w=0&k=20&c=icFcd2CnroiM3KV8unrOK7uucr4ossN71sbw1IMwmHI=",
    linkText: "Read Financial Reports"
  },
  {
    title: "AAA Institutional Rating",
    description: "Recognized by global rating agencies for our robust risk management, rigorous governance, and capital adequacy.",
    image: "https://media.istockphoto.com/id/1056231124/photo/this-is-the-news-weve-been-waiting-for.jpg?s=612x612&w=0&k=20&c=W99RFxb6u_3lyDovZdaCk_Hpg1X7QdZ0Bz9NBwIbGRU=",
    linkText: "Investor Relations"
  },
  {
    title: "70 Years of Excellence",
    description: "A legacy of trust and performance, built by generations of exceptional talent dedicated to client success.",
    image: "https://media.istockphoto.com/id/2290422374/photo/business-team-applauding-success-after-meeting-presentation-in-office.jpg?s=612x612&w=0&k=20&c=ueM1i1XvkUxeEcTahR2OpEbIuJlCVuIbwgTZ7jPpkhw=",
    linkText: "Our History"
  },
  {
    title: "The Business of Impact",
    description: "Deploying capital to critical infrastructure, energy transition, and community development projects that shape the future.",
    image: "https://media.istockphoto.com/id/1297780280/photo/teamwork-is-the-key-ingredient-in-quality-construction.jpg?s=612x612&w=0&k=20&c=gyPLOWBiYUrjA--goj1K8TQ1BVbI3Fwkb834MbXf3sI=",
    linkText: "Sustainability Initiatives"
  },
  {
    title: "Strategic Partnerships",
    description: "Collaborating with global institutions to bridge African markets with international capital and growth opportunities.",
    image: "https://media.istockphoto.com/id/1218172568/photo/back-to-our-agreement.jpg?s=612x612&w=0&k=20&c=-oiF148vz6ewCwxjHtWWedc61HLBP6tENRdzXED1sDQ=",
    linkText: "Global Network"
  }
];

const TimelineSection = () => {
  return (
    <section className="bg-[#F9F9F7] py-24 lg:py-32 px-6 lg:px-12 font-poppins">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Split Header - JP Morgan / Goldman Sachs style */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 lg:mb-28">
          <div className="lg:w-3/5">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-serif text-[#0F120F] leading-[1.05] tracking-tight"
            >
              A Pan-African Powerhouse with Global Reach.
            </motion.h2>
          </div>
          
          <div className="lg:w-2/5 flex flex-col justify-end pb-2">
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-[#0F120F]/80 font-light leading-relaxed border-l-2 border-[#4A5D43]/30 pl-6"
            >
              Empowering clients and communities through unmatched scale. We are uniquely positioned to drive sustainable growth and long-term value.
            </motion.p>
          </div>
        </div>

        {/* 3-Column Card Grid - Goldman Sachs style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {profileCards.map((card, index) => (
            <motion.a 
              key={index}
              href="/about"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col group cursor-pointer outline-none"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 bg-black/5">
                <img 
                  src={card.image} 
                  alt={card.title}
                  loading="lazy"
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-serif text-[#0F120F] font-medium mb-3 transition-colors group-hover:text-[#4A5D43]">
                {card.title}
              </h3>
              <p className="text-[#0F120F]/70 font-light leading-relaxed mb-6">
                {card.description}
              </p>
              
              {/* Underline Link */}
              <div className="mt-auto text-sm font-semibold text-[#0F120F] group-hover:text-[#4A5D43] transition-colors border-b border-[#0F120F]/20 group-hover:border-[#4A5D43]/50 pb-1 w-fit">
                {card.linkText}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;