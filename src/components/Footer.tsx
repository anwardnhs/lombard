import { FaLinkedinIn, FaXTwitter, FaYoutube, FaArrowRight } from "react-icons/fa6";

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
    {
      title: "Media & Contact",
      links: [
        { label: "Newsroom", href: "/newsroom" },
        { label: "Press Releases", href: "/newsroom" },
        { label: "Contact Us", href: "/contact" },
        { label: "Whistleblower", href: "/contact" },
      ],
    },
  ];

  const legalLinks = [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="bg-[#0a0c0a] text-white overflow-hidden font-poppins" role="contentinfo">
      
      {/* Top CTA Band */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1800px] px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-none mb-6">
              Shape your <span className="italic text-[#c7d3bc]">legacy.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
              Building long-term value through commercial banking, investment banking, asset management, and insurance across the African continent.
            </p>
          </div>
          
          <a
            href="/contact"
            className="group inline-flex items-center gap-4 text-lg md:text-xl font-medium tracking-wide border-b border-white pb-2 hover:text-[#c7d3bc] hover:border-[#c7d3bc] transition-all duration-300"
          >
            Contact Our Team
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Navigation Grid Band */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1800px] px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-20">
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8" aria-label="Footer navigation">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs uppercase tracking-[0.15em] font-bold text-white/40 mb-8 block">
                  {column.title}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-block text-sm font-medium text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Legal & Social Band */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1800px] px-6 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-12 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-12 w-full xl:w-auto">
            {/* Logo */}
            <a href="/" className="font-serif font-bold text-2xl tracking-tight text-white mr-4">
              Lombard HoldCo<span className="text-[#c7d3bc]">.</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3" role="list" aria-label="Social media links">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#0a0c0a] hover:bg-white transition-all duration-300"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="listitem"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Legal and compliance links" className="w-full xl:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 xl:gap-10">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-mono tracking-widest uppercase text-white/40">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs font-mono tracking-widest uppercase text-white/30 tabular-nums">
              © {currentYear} Lombard HoldCo Plc
            </p>
          </nav>

        </div>
      </div>
    </footer>
  );
};

export default Footer;