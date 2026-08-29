import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot,
  FaChartLine,
  FaNewspaper,
  FaArrowRight,
  FaCheck,
  FaClock,
  FaBuilding,
  FaGlobe
} from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic here
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Simplified contact channels (Hick's Law - reduced from 3 to 2 primary options)
  const primaryContacts = [
    {
      icon: FaChartLine,
      title: "Investor Relations",
      description: "Financial reports, earnings calls, and shareholder services",
      email: "investor.relations@lombardholdco.com",
      phone: "+234 1 448 0100",
      color: "#52796F",
      isPrimary: true
    },
    {
      icon: FaEnvelope,
      title: "General Inquiries",
      description: "Customer support, partnerships, and general questions",
      email: "info@lombardholdco.com",
      phone: "+234 1 448 0000",
      color: "#52796F",
      isPrimary: true
    }
  ];

  const secondaryContacts = [
    {
      icon: FaNewspaper,
      title: "Media & Press",
      email: "media@lombardholdco.com",
      phone: "+234 1 448 0200"
    }
  ];

  const offices = [
    {
      city: "Lagos",
      country: "Nigeria",
      address: "The Lombard Tower, 44 Marina, Lagos Island",
      fullAddress: "Lagos 101001, Nigeria",
      phone: "+234 1 448 0000",
      email: "lagos@lombardholdco.com",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM WAT",
      label: "Headquarters",
      isPrimary: true
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "Lombard House, 120 Old Broad Street",
      fullAddress: "London EC2N 1AR, United Kingdom",
      phone: "+44 20 7946 0000",
      email: "london@lombardholdco.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM GMT",
      label: "Europe",
      isPrimary: false
    },
    {
      city: "Nairobi",
      country: "Kenya",
      address: "Lombard Centre, Upper Hill Road",
      fullAddress: "Nairobi 00100, Kenya",
      phone: "+254 20 429 0000",
      email: "nairobi@lombardholdco.com",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM EAT",
      label: "East Africa",
      isPrimary: false
    }
  ];

  return (
    <>
      <Header />
      <div className="fixed top-0 left-0 w-full h-20 sm:h-24 bg-[#0a0c0a]/95 backdrop-blur-xl border-b border-white/10 z-40" aria-hidden="true" />
      
      <div className="bg-[#F9F9F7] font-poppins text-[#0F120F]">
        
        {/* --- ENHANCED HERO SECTION --- */}
        <section className="relative pt-36 sm:pt-44 pb-20 px-6 lg:px-12 bg-gradient-to-b from-white to-[#F9F9F7]">
          <div className="container mx-auto max-w-[1400px] relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
              >
                <div className="flex justify-center mb-8">
                  <Breadcrumbs items={[{ label: "Contact" }]} />
                </div>
                
                <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl text-[#0F120F] tracking-tight mb-8 leading-[1]">
                  Let's Connect
                </h1>
                
                <p className="text-xl text-[#0F120F]/80 leading-relaxed max-w-2xl mx-auto mb-12">
                  Our team responds within 24 business hours. All inquiries are handled with strict 
                  confidentiality in accordance with our privacy policy.
                </p>

                {/* Primary CTAs - Enhanced (Fitt's Law) */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <a 
                    href="#contact-form"
                    className="group flex sm:inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#0F120F] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#52796F] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#52796F] shadow-lg w-full sm:w-auto"
                  >
                    <FaEnvelope className="text-base flex-shrink-0" />
                    <span className="whitespace-nowrap">Send a Message</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </a>
                  <a 
                    href="tel:+2341448000"
                    className="group flex sm:inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 border-2 border-[#0F120F] text-[#0F120F] text-sm font-bold uppercase tracking-wider hover:bg-[#0F120F] hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#52796F] w-full sm:w-auto"
                  >
                    <FaPhone className="text-base flex-shrink-0" />
                    <span className="whitespace-nowrap">Call Us Now</span>
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12 border-t-2 border-[#0F120F]/10">
                  {[
                    { value: "24hrs", label: "Response Time" },
                    { value: "14", label: "Global Offices" },
                    { value: "24/7", label: "Support Available" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-3xl font-bold text-[#0F120F] mb-2">{stat.value}</p>
                      <p className="text-xs uppercase tracking-wider text-[#0F120F]/60 font-semibold">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- VISUAL DIVIDER --- */}
        <div className="relative py-0">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-2 border-[#0F120F]/10"></div>
          </div>
          <div className="relative flex justify-center bg-[#F9F9F7]">
            <span className="bg-[#F9F9F7] px-6 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#0F120F]/40">
              Primary Contacts
            </span>
          </div>
        </div>

        {/* --- ENHANCED PRIMARY CONTACT CHANNELS --- */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-[1400px]">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {primaryContacts.map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInVariants}
                    custom={idx * 0.1}
                    className="group bg-[#F9F9F7] border-2 border-[#0F120F]/10 p-6 sm:p-10 hover:border-[#52796F] hover:shadow-2xl transition-all duration-300"
                    whileHover={{ y: -8 }}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0F120F] flex items-center justify-center flex-shrink-0 group-hover:bg-[#52796F] transition-colors">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-sans font-bold text-[#0F120F] mb-3 break-words">
                          {contact.title}
                        </h3>
                        <p className="text-base text-[#0F120F]/80 mb-6 leading-relaxed">
                          {contact.description}
                        </p>
                        
                        {/* Contact Details - Enhanced spacing (Fitt's Law) */}
                        <div className="space-y-4">
                          <a 
                            href={`mailto:${contact.email}`}
                            className="flex items-center gap-3 text-base font-bold text-[#0F120F] hover:text-[#52796F] transition-colors group/link py-2 w-full"
                          >
                            <FaEnvelope className="text-sm text-[#52796F] flex-shrink-0" />
                            <span className="group-hover/link:underline truncate">{contact.email}</span>
                            <FaArrowRight className="text-xs opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
                          </a>
                          <a 
                            href={`tel:${contact.phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-3 text-base font-semibold text-[#0F120F]/80 hover:text-[#0F120F] transition-colors py-2"
                          >
                            <FaPhone className="text-sm text-[#52796F]" />
                            <span className="font-mono">{contact.phone}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Secondary Contact */}
            <div className="bg-[#0F120F] text-white p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <FaNewspaper className="text-2xl text-[#52796F]" />
                <div>
                  <h4 className="text-lg font-bold mb-1">Media & Press</h4>
                  <p className="text-sm text-white/70">Press releases and interview requests</p>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-2">
                <a 
                  href="mailto:media@lombardholdco.com"
                  className="text-sm font-bold hover:text-[#52796F] transition-colors"
                >
                  media@lombardholdco.com
                </a>
                <a 
                  href="tel:+2341448200"
                  className="text-sm font-mono text-white/80 hover:text-white transition-colors"
                >
                  +234 1 448 0200
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- VISUAL DIVIDER --- */}
        <div className="relative py-0">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-2 border-[#0F120F]/10"></div>
          </div>
          <div className="relative flex justify-center bg-white">
            <span className="bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#0F120F]/40">
              Send a Message
            </span>
          </div>
        </div>

        {/* --- ENHANCED CONTACT FORM SECTION --- */}
        <section id="contact-form" className="py-20 px-6 lg:px-12 bg-white scroll-mt-32">
          <div className="container mx-auto max-w-[1400px]">
            <div className="grid lg:grid-cols-12 gap-16">
              
              {/* Left: Form Benefits (Reduced content - Hick's Law) */}
              <div className="lg:col-span-4">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#0F120F]/60 mb-4">
                  Get in Touch
                </span>
                <h2 className="font-sans text-4xl text-[#0F120F] mb-6 leading-tight">
                  We're Here to Help
                </h2>
                <p className="text-lg text-[#0F120F]/80 leading-relaxed mb-10">
                  Fill out the form and our team will get back to you within 24 business hours.
                </p>

                {/* What to Expect */}
                <div className="space-y-6 mb-10">
                  {[
                    { icon: FaClock, text: "Response within 24 business hours" },
                    { icon: FaCheck, text: "Dedicated account manager assigned" },
                    { icon: FaGlobe, text: "Support in multiple languages" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#52796F]/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-[#0F120F] text-sm" />
                      </div>
                      <p className="text-base text-[#0F120F]/80 leading-relaxed pt-2">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Alternative Contact */}
                <div className="bg-[#F9F9F7] border-l-4 border-[#52796F] p-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F120F]/70 mb-3">
                    Prefer to Call?
                  </h4>
                  <a 
                    href="tel:+2341448000"
                    className="text-2xl font-bold text-[#0F120F] hover:text-[#52796F] transition-colors block mb-2"
                  >
                    +234 1 448 0000
                  </a>
                  <p className="text-sm text-[#0F120F]/70">
                    Available Monday - Friday, 8AM - 5PM WAT
                  </p>
                </div>
              </div>

              {/* Right: Enhanced Form (Fitt's Law - larger inputs) */}
              <div className="lg:col-span-8">
                <div className="bg-[#F9F9F7] border-2 border-[#0F120F]/10 p-10 shadow-xl">
                  
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-20"
                      >
                        <div className="w-20 h-20 bg-[#52796F] rounded-full flex items-center justify-center mx-auto mb-6">
                          <FaCheck className="text-3xl text-white" />
                        </div>
                        <h3 className="text-3xl font-sans font-bold text-[#0F120F] mb-4">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-lg text-[#0F120F]/80 max-w-md mx-auto">
                          Thank you for contacting us. Our team will respond within 24 business hours.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="mb-8">
                          <h3 className="text-2xl font-sans font-bold text-[#0F120F] mb-2">
                            Contact Form
                          </h3>
                          <p className="text-sm text-[#0F120F]/70">
                            Fields marked with <span className="text-[#52796F]">*</span> are required
                          </p>
                        </div>

                        {/* Name & Company Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#0F120F]/80 mb-3">
                              Full Name <span className="text-[#52796F]">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-5 py-4 border-2 border-[#0F120F]/20 text-base text-[#0F120F] placeholder:text-[#0F120F]/40 focus:outline-none focus:ring-4 focus:ring-[#52796F]/30 focus:border-[#52796F] transition-all"
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#0F120F]/80 mb-3">
                              Company / Organization
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-5 py-4 border-2 border-[#0F120F]/20 text-base text-[#0F120F] placeholder:text-[#0F120F]/40 focus:outline-none focus:ring-4 focus:ring-[#52796F]/30 focus:border-[#52796F] transition-all"
                              placeholder="Acme Corporation"
                            />
                          </div>
                        </div>

                        {/* Email & Phone Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0F120F]/80 mb-3">
                              Email Address <span className="text-[#52796F]">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-5 py-4 border-2 border-[#0F120F]/20 text-base text-[#0F120F] placeholder:text-[#0F120F]/40 focus:outline-none focus:ring-4 focus:ring-[#52796F]/30 focus:border-[#52796F] transition-all"
                              placeholder="john.doe@example.com"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#0F120F]/80 mb-3">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-5 py-4 border-2 border-[#0F120F]/20 text-base text-[#0F120F] placeholder:text-[#0F120F]/40 focus:outline-none focus:ring-4 focus:ring-[#52796F]/30 focus:border-[#52796F] transition-all"
                              placeholder="+234 800 000 0000"
                            />
                          </div>
                        </div>

                        {/* Subject - Simplified options (Hick's Law) */}
                        <div>
                          <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#0F120F]/80 mb-3">
                            Inquiry Type <span className="text-[#52796F]">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 border-2 border-[#0F120F]/20 text-base text-[#0F120F] focus:outline-none focus:ring-4 focus:ring-[#52796F]/30 focus:border-[#52796F] transition-all appearance-none bg-white"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%230F120F' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 1.25rem center',
                              paddingRight: '3rem'
                            }}
                          >
                            <option value="">Select inquiry type...</option>
                            <option value="general">General Inquiry</option>
                            <option value="investor">Investor Relations</option>
                            <option value="media">Media & Press</option>
                            <option value="partnerships">Business Partnerships</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#0F120F]/80 mb-3">
                            Your Message <span className="text-[#52796F]">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-5 py-4 border-2 border-[#0F120F]/20 text-base text-[#0F120F] placeholder:text-[#0F120F]/40 focus:outline-none focus:ring-4 focus:ring-[#52796F]/30 focus:border-[#52796F] transition-all resize-none"
                            placeholder="Please provide details about your inquiry..."
                          />
                          <p className="mt-2 text-xs text-[#0F120F]/60">
                            Character count: {formData.message.length} / 1000
                          </p>
                        </div>

                        {/* Privacy Notice */}
                        <div className="bg-white border-l-4 border-[#52796F] p-5">
                          <p className="text-sm text-[#0F120F]/80 leading-relaxed">
                            By submitting this form, you acknowledge that your information will be processed in accordance with our{' '}
                            <a href="/privacy-policy" className="font-bold text-[#0F120F] underline hover:text-[#52796F] transition-colors">
                              Privacy Policy
                            </a>.
                          </p>
                        </div>

                        {/* Submit Button - Enhanced (Fitt's Law) */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-4 px-8 py-6 bg-[#0F120F] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#52796F] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#52796F] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <FaArrowRight className="text-base" />
                            </>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- VISUAL DIVIDER --- */}
        <div className="relative py-0 bg-white">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-2 border-[#0F120F]/10"></div>
          </div>
          <div className="relative flex justify-center bg-white">
            <span className="bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#0F120F]/40">
              Global Offices
            </span>
          </div>
        </div>

        {/* --- ENHANCED OFFICES SECTION --- */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-[1400px]">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#0F120F]/60 mb-4">
                Visit Us
              </span>
              <h2 className="font-sans text-4xl md:text-5xl text-[#0F120F] mb-6">
                Our Locations
              </h2>
              <p className="text-lg text-[#0F120F]/70 max-w-2xl mx-auto">
                With offices across 14 countries, we're always close to our clients
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {offices.map((office, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInVariants}
                  custom={idx * 0.1}
                  className={`bg-[#F9F9F7] border-2 p-10 transition-all duration-300 ${
                    office.isPrimary 
                      ? 'border-[#0F120F] shadow-xl' 
                      : 'border-[#0F120F]/10 hover:border-[#0F120F]/30 hover:shadow-lg'
                  }`}
                  whileHover={{ y: -4 }}
                >
                  {/* Badge */}
                  {office.isPrimary && (
                    <div className="inline-block px-4 py-2 bg-[#0F120F] text-white text-xs font-bold uppercase tracking-wider mb-6">
                      {office.label}
                    </div>
                  )}
                  {!office.isPrimary && (
                    <div className="inline-block px-4 py-2 bg-[#52796F]/20 text-[#0F120F] text-xs font-bold uppercase tracking-wider mb-6">
                      {office.label}
                    </div>
                  )}

                  {/* City Header */}
                  <div className="mb-6 pb-6 border-b-2 border-[#0F120F]/10">
                    <div className="flex items-center gap-3 mb-2">
                      <FaLocationDot className="text-xl text-[#52796F]" />
                      <h3 className="font-sans text-2xl font-bold text-[#0F120F]">
                        {office.city}
                      </h3>
                    </div>
                    <p className="text-sm text-[#0F120F]/60 uppercase tracking-wide font-semibold">
                      {office.country}
                    </p>
                  </div>

                  {/* Address */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F120F]/60 mb-3">
                      Address
                    </h4>
                    <address className="not-italic text-base text-[#0F120F]/80 leading-relaxed">
                      {office.address}<br />
                      {office.fullAddress}
                    </address>
                  </div>

                  {/* Contact Details - Enhanced spacing (Fitt's Law) */}
                  <div className="space-y-4 mb-6">
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-base font-semibold text-[#0F120F] hover:text-[#52796F] transition-colors py-2"
                    >
                      <FaPhone className="text-sm text-[#52796F]" />
                      <span className="font-mono">{office.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-3 text-base font-semibold text-[#0F120F] hover:text-[#52796F] transition-colors py-2"
                    >
                      <FaEnvelope className="text-sm text-[#52796F]" />
                      <span>{office.email}</span>
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="pt-6 border-t border-[#0F120F]/10">
                    <div className="flex items-start gap-3">
                      <FaClock className="text-sm text-[#52796F] mt-1" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F120F]/60 mb-1">
                          Office Hours
                        </h4>
                        <p className="text-sm text-[#0F120F]/80">
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* All Locations Link */}
            <div className="mt-16 text-center">
              <a 
                href="/locations"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[#0F120F] border-b-2 border-[#0F120F] pb-2 hover:text-[#52796F] hover:border-[#52796F] transition-all group"
              >
                View All 14 Locations
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default ContactSection;