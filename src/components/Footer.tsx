import { FaLinkedinIn, FaXTwitter, FaYoutube, FaArrowRight, FaLocationDot, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/lombard-holdco", icon: FaLinkedinIn, label: "Follow Lombard HoldCo on LinkedIn" },
    { name: "Twitter", href: "https://twitter.com/lombardholdco", icon: FaXTwitter, label: "Follow Lombard HoldCo on Twitter" },
    { name: "YouTube", href: "https://youtube.com/@lombardholdco", icon: FaYoutube, label: "Subscribe to Lombard HoldCo on YouTube" },
  ];

  const footerColumns = [
    {
      title: "The Firm",
      links: [
        { label: "Corporate Profile", href: "/about" },
        { label: "Leadership & Board", href: "/governance" },
        { label: "Operating Subsidiaries", href: "/businesses" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Sustainability",
      links: [
        { label: "ESG Strategy", href: "/impact" },
        { label: "Lombard Foundation", href: "/impact" },
        { label: "Community Impact", href: "/impact" },
      ],
    },
    {
      title: "Investors",
      links: [
        { label: "Investor Relations", href: "/investors" },
        { label: "Financial Reports", href: "/investors" },
        { label: "Shareholder Center", href: "/investors" },
      ],
    },
  ];

  const legalLinks = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="bg-[#0a0c0a] text-white overflow-hidden font-poppins relative" role="contentinfo">
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c7d3bc]/50 to-transparent"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1800px]">
        
        {/* TOP SECTION: Branding & Newsletter */}
        <div className="py-20 lg:py-24 flex flex-col lg:flex-row justify-between items-start gap-16 border-b border-white/10">
          
          <div className="w-full lg:w-1/3">
            <a href="/" className="inline-block mb-8">
              <h1 className="font-serif font-bold text-3xl sm:text-4xl tracking-tight text-white">
                Lombard HoldCo<span className="text-[#c7d3bc]">.</span>
              </h1>
            </a>
            <p className="text-sm text-white/60 leading-relaxed font-light mb-8 max-w-sm">
              Connecting markets, capital, and people across Africa. We build long-term value through excellence in financial infrastructure.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c7d3bc] text-[#0a0c0a] text-xs font-bold uppercase tracking-[0.15em] rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
            >
              Contact Our Team
              <FaArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-1/4 flex flex-col gap-8 pt-2">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3 flex items-center gap-2">
                <FaLocationDot className="text-[#c7d3bc]" /> Global Headquarters
              </h4>
              <address className="not-italic text-sm text-white/80 font-light leading-relaxed">
                The Lombard Tower<br />
                44 Marina, Lagos Island<br />
                Lagos 101001, Nigeria
              </address>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3 flex items-center gap-2">
                <FaEnvelope className="text-[#c7d3bc]" /> General Inquiries
              </h4>
              <a href="mailto:info@lombardholdco.com" className="text-sm text-white/80 font-light hover:text-[#c7d3bc] transition-colors">
                info@lombardholdco.com
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="w-full lg:w-5/12 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6 block">
                  {column.title}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs font-medium tracking-wide text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM SECTION: Legal & Socials */}
        <div className="py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
              © {currentYear} Lombard HoldCo Plc
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#0a0c0a] hover:bg-[#c7d3bc] hover:border-[#c7d3bc] transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;