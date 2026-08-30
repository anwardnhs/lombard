import { motion, useReducedMotion } from "framer-motion";
import { FaLeaf, FaShieldHalved, FaScaleBalanced, FaGraduationCap, FaHeartPulse, FaChartLine, FaDownload } from "react-icons/fa6";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

import heroImage from "@/assets/impacthero.jpg";
import esgImage from "@/assets/solarr.jpg";
import foundationImage from "@/assets/foundation.jpg";
import educationImage from "@/assets/education.jpg";
import healthImage from "@/assets/health.jpg";
import enterpriseImage from "@/assets/rural.jpg";
import communityImage1 from "@/assets/agent.jpg";
import communityImage2 from "@/assets/youth.jpg";


const Impact = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const esgFocusAreas = [
    { icon: FaLeaf, label: "Climate Action" },
    { icon: FaShieldHalved, label: "Risk Management" },
    { icon: FaScaleBalanced, label: "Governance" }
  ];

  const foundationInitiatives = [
    {
      icon: FaGraduationCap,
      title: "Education",
      description: "Scholarship programs, school infrastructure development, and digital learning initiatives to enhance educational access and quality.",
      image: educationImage,
    },
    {
      icon: FaHeartPulse,
      title: "Health",
      description: "Community health programs, mobile clinics, and partnerships with healthcare providers to improve access to essential medical services.  ",
      image: healthImage,
    },
    {
      icon: FaChartLine,
      title: "Enterprise",
      description: "SME financing, business development training, and support for women-led enterprises across Africa.",
      image: enterpriseImage,
    }
  ];

  const impactHighlights = [
    { value: "22%", label: "Carbon Reduction" },
    { value: "₦18B", label: "Green Financing" },
    { value: "A+", label: "ESG Rating" },
    { value: "48K+", label: "Agent Locations" }
  ];

  return (
    <>
      <Header />
      <div className="bg-[#F9F9F7] font-poppins text-[#0F120F]">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-end bg-[#0F120F] overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F120F] via-[#0F120F]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16 pt-40 pb-16 sm:pb-20 lg:pb-24 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="max-w-4xl"
          >
            <Breadcrumbs items={[{ label: "Impact" }]} theme="dark" className="mb-6" />
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-white tracking-tight mb-6 sm:mb-8">
              Building a <br />
              <span className="italic text-[#52796F]">Sustainable Future.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white leading-relaxed max-w-2xl">
              Our commitment to environmental stewardship, social impact, and transparent governance drives sustainable value creation across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ESG & Sustainability */}
      <section id="esg" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 border-b border-[#0F120F]/10">
        <div className="container mx-auto max-w-[1600px]">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#52796F]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F120F]/60">
                  Environmental, Social & Governance
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans text-[#0F120F] mb-6 leading-tight">
                Sustainability at Scale
              </h2>

              <p className="text-base sm:text-lg font-semibold text-[#0F120F]/90 leading-relaxed mb-8">
                Lombard is committed to integrating ESG principles into our business strategy, operations, and investment decisions. Our focus on climate action, social responsibility, and strong governance ensures long-term value creation for our stakeholders. 
              </p>

              {/* Metrics */}
              

            </motion.div>

            {/* Right: Large Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
              className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <img 
                src={esgImage}
                alt="Sustainability initiatives"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2: Lombard Foundation */}
      <section id="foundation" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="container mx-auto max-w-[1600px]">
          
          {/* Full-width Image Strip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="relative aspect-[21/9] rounded-sm overflow-hidden mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            <img 
              src={foundationImage}
              alt="Lombard Foundation initiatives"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F120F]/60 to-transparent" />
          </motion.div>

          {/* Text Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="max-w-3xl mb-12 lg:mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#52796F]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F120F]/60">
                Lombard Foundation
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans text-[#0F120F] mb-6 leading-tight">
              Empowering Communities
            </h2>

            <p className="text-base sm:text-lg font-semibold text-[#0F120F]/90 leading-relaxed">
              The Lombard Foundation drives social impact across education, healthcare, and economic empowerment. Through strategic partnerships and direct intervention, we create pathways for inclusive growth in the communities we serve.
            </p>
          </motion.div>

          {/* Initiative Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {foundationInitiatives.map((initiative, idx) => {
              const Icon = initiative.icon;
              return (
                <motion.article
                  key={initiative.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInVariants}
                  custom={idx * 0.1}
                  className="group bg-white border border-[#0F120F]/10 rounded-sm overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f0f0f0]">
                    <img 
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#52796F]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0F120F]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0F120F]">
                        {initiative.title}
                      </h3>
                    </div>

                    <p className="text-sm font-medium text-[#0F120F]/80 leading-relaxed mb-6">
                      {initiative.description}
                    </p>

                    {/* Metric */}
                   
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Community Impact */}
      <section id="community" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="container mx-auto max-w-[1600px]">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="max-w-3xl mb-12 lg:mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#52796F]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F120F]/60">
                Community Impact
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans text-[#0F120F] mb-6 leading-tight">
              Driving Inclusive Growth
            </h2>
          </motion.div>

          {/* Alternating Blocks */}
          <div className="space-y-16 lg:space-y-24 mb-16 lg:mb-20">
            
            {/* Block 1 */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariants}
                className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              >
                <img 
                  src={communityImage1}
                  alt="Financial inclusion programs"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariants}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0F120F] mb-4">
                  Financial Inclusion
                </h3>
                <p className="text-base font-semibold text-[#0F120F]/80 leading-relaxed mb-6">
                  Our agent banking network brings financial services to rural and underserved communities. With 48,000+ touchpoints, we're expanding access to credit, savings, and digital payments for millions.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-3xl font-bold text-[#0F120F] mb-1 tabular-nums">10.2M</div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[#0F120F]/60 font-semibold">Active Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#0F120F] mb-1 tabular-nums">48K+</div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[#0F120F]/60 font-semibold">Agent Locations</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Block 2 - Reversed */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariants}
                className="lg:order-2"
              >
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                  <img 
                    src={communityImage2}
                    alt="Youth employment programs"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariants}
                className="lg:order-1"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0F120F] mb-4">
                  Youth Employment
                </h3>
                <p className="text-base font-semibold text-[#0F120F]/80 leading-relaxed mb-6">
                  The Lombard Academy trains young professionals in banking, technology, and entrepreneurship. Our internship and graduate programs create pathways to meaningful careers across Africa.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-3xl font-bold text-[#0F120F] mb-1 tabular-nums">2,400</div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[#0F120F]/60 font-semibold">Annual Graduates</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#0F120F] mb-1 tabular-nums">82%</div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[#0F120F]/60 font-semibold">Employment Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Impact Highlights Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="pt-12 border-t border-[#0F120F]/10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0F120F]/50 mb-8 text-center">
              2025 Impact Highlights
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {impactHighlights.map((highlight, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#0F120F] mb-2 tabular-nums">
                    {highlight.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.15em] text-[#0F120F]/60 font-semibold">
                    {highlight.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Impact Report Hub */}
      <section id="impact-report" className="py-16 sm:py-20 bg-[#F9F9F7] text-[#0F120F]">
        <div className="container mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            {/* Left: Summary */}
            <div>
              <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-[#0F120F]/60 mb-4">
                Impact Report 2025
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-[#0F120F] mb-6">
                ESG, Foundation & Community Outcomes
              </h3>
                <p className="text-base text-[#0F120F]/80 leading-relaxed mb-8 max-w-2xl font-semibold">
                  A consolidated view of our ESG governance, foundation investments, and community outcomes across Africa.
                  The report details key metrics, priority initiatives, and long‑term commitments.
                </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/investors/impact-report-2024.pdf"
                  className="btn-primary"
                >
                  <FaDownload className="w-4 h-4" />
                  Download Report (PDF)
                </a>
                <a
                  href="#community"
                  className="btn-secondary-light"
                >
                  View Highlights
                </a>
              </div>
            </div>

            {/* Right: Contents */}
              <div className="bg-white border border-[#0F120F]/10 p-6 sm:p-8 rounded-sm">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F]/60 mb-5">
                  Report Contents
                </h4>
                <ul className="space-y-3 text-sm text-[#0F120F]/80 font-semibold">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52796F]" aria-hidden="true" />
                  ESG Governance & Risk
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52796F]" aria-hidden="true" />
                  Climate Finance & Green Lending
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52796F]" aria-hidden="true" />
                  Lombard Foundation Programs
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52796F]" aria-hidden="true" />
                  Community Impact Metrics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52796F]" aria-hidden="true" />
                  Assurance & Reporting Standards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      </div>
      <Footer />
    </>
  );
};

export default Impact;
