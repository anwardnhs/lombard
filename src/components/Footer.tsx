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
      title: "Company",
      links: [
        { label: "Corporate Overview", href: "/about" },
        { label: "Governance", href: "/governance" },
        { label: "Leadership", href: "/leadership" },
        { label: "Newsroom", href: "/newsroom" },
      ],
    },
    {
      title: "Businesses",
      links: [
        { label: "Lombard Bank", href: "/businesses/banking" },
        { label: "Lombard Capital", href: "/businesses/capital" },
        { label: "Asset Management", href: "/businesses/asset-management" },
        { label: "Lombard Insurance", href: "/businesses/insurance" },
      ],
    },
    {
      title: "Investors",
      links: [
        { label: "Reports", href: "/investors/reports" },
        { label: "Share Price", href: "/investors/stock" },
        { label: "Presentations", href: "/investors/presentations" },
        { label: "Dividends", href: "/investors/dividends" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Investor Relations", href: "/contact" },
        { label: "Media Inquiries", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Whistleblower", href: "/whistleblower" },
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
    <footer className="bg-[#F4F4F0] text-[#111] overflow-hidden" role="contentinfo">
      
      {/* Top CTA Band */}
      <div className="border-t border-[#111]/10">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-12 py-16 lg:py-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter leading-none mb-4">
              Shape your <span className="font-serif italic text-[#4A5D43]">legacy.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#111]/60 max-w-md font-medium">
              Building long-term value through banking, capital markets, insurance, and asset management across Africa.
            </p>
          </div>
          
          <a
            href="/contact"
            className="group flex items-center gap-4 text-xl md:text-2xl font-medium tracking-tight border-b-2 border-[#111] pb-2 hover:text-[#4A5D43] hover:border-[#4A5D43] transition-colors duration-500 outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D43] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F4F4F0]"
          >
            Contact Our Team
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Navigation Grid Band */}
      <div className="border-t border-[#111]/10">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-12 py-16 lg:py-20">
          <nav className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8" aria-label="Footer navigation">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#111]/40 mb-6 block">
                  {column.title}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-block text-sm lg:text-base font-medium text-[#111]/70 hover:text-[#111] hover:translate-x-1 transition-all duration-300 outline-none focus-visible:text-[#4A5D43]"
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
      <div className="border-t border-[#111]/10">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-12 py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-12 w-full lg:w-auto">
            {/* Social Icons */}
            <div className="flex items-center gap-4" role="list" aria-label="Social media links">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-[#111]/10 flex items-center justify-center text-[#111]/60 hover:text-[#F4F4F0] hover:bg-[#111] hover:border-[#111] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D43]"
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

            <p className="text-xs font-mono tracking-widest uppercase text-[#111]/50 tabular-nums">
              © {currentYear} Lombard HoldCo
            </p>
          </div>

          <nav aria-label="Legal and compliance links" className="w-full lg:w-auto">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-mono tracking-widest uppercase text-[#111]/50">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#111] transition-colors outline-none focus-visible:text-[#4A5D43]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>

      {/* Massive Brand Typography Anchor */}
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12 pt-8 pb-4 flex justify-center items-end select-none pointer-events-none">
        <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter text-[#111] opacity-90">
          LOMBARD<span className="font-serif italic text-[#4A5D43]">.</span>
        </h1>
      </div>

    </footer>
  );
};

export default Footer;