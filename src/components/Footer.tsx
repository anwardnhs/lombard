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
    { label: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="bg-[#F9F9F7] text-[#0F120F] overflow-hidden font-poppins relative border-t border-[#0F120F]/5" role="contentinfo">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1400px]">
        
        {/* TOP SECTION: Branding & Navigation */}
        <div className="py-20 flex flex-col lg:flex-row justify-between items-start gap-16 border-b border-[#0F120F]/5">
          
          <div className="w-full lg:w-1/3">
            <a href="/" className="inline-block mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#52796F]">
              <h1 className="font-semibold text-3xl tracking-tight text-[#0F120F]">
                Lombard HoldCo<span className="text-[#52796F]">.</span>
              </h1>
            </a>
            <p className="text-[13px] text-[#0F120F]/70 leading-relaxed mb-8 max-w-sm">
              Lombard HoldCo Plc is a leading African financial services group, committed to driving sustainable growth and creating value for our stakeholders across banking, capital markets, and insurance.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#52796F] text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-full hover:bg-[#3e5b53] hover:shadow-lg hover:shadow-[#52796F]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#52796F] focus:ring-offset-2 focus:ring-offset-[#F9F9F7]"
            >
              Contact Our Team
              <FaArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-1/4 flex flex-col gap-8 pt-2">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F120F]/40 mb-3 flex items-center gap-2">
                <FaLocationDot className="text-[#52796F]" /> Global Headquarters
              </h4>
              <address className="not-italic text-[13px] text-[#0F120F]/80 leading-relaxed">
                The Lombard Tower<br />
                44 Marina, Lagos Island<br />
                Lagos 101001, Nigeria
              </address>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F120F]/40 mb-3 flex items-center gap-2">
                <FaEnvelope className="text-[#52796F]" /> General Inquiries
              </h4>
              <a href="mailto:info@lombardholdco.com" className="text-[13px] text-[#0F120F]/80 hover:text-[#52796F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#52796F] rounded-sm">
                info@lombardholdco.com
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="w-full lg:w-5/12 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F120F]/40 mb-5 block">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] font-medium tracking-wide text-[#0F120F]/70 hover:text-[#52796F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#52796F] rounded-sm"
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
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-[10px] font-medium tracking-wider text-[#0F120F]/50 uppercase">
              &copy; {currentYear} Lombard HoldCo Plc
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[10px] font-medium tracking-wider text-[#0F120F]/50 hover:text-[#52796F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#52796F] rounded-sm uppercase">
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
                  className="w-10 h-10 rounded-full bg-[#0F120F]/5 flex items-center justify-center text-[#0F120F]/60 hover:text-white hover:bg-[#52796F] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#52796F] focus:ring-offset-2 focus:ring-offset-[#F9F9F7]"
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
