import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "The Firm",
      links: [
        { label: "Home", href: "/" },
        { label: "Corporate Profile", href: "/about" },
        { label: "Leadership & Board", href: "/governance" },
        { label: "Operating Subsidiaries", href: "/businesses" },
        { label: "Careers", href: "/careers" },
      ]
    },
    {
      title: "Impact & Investors",
      links: [
        { label: "Sustainability & Impact", href: "/impact" },
        { label: "Investor Relations", href: "/investors" },
        { label: "Media & Newsroom", href: "/newsroom" },
        { label: "Contact Us", href: "/contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Cookie Policy", href: "/cookies" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F7] font-poppins text-[#0F120F]">
      <Header />
      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1200px]">
          <Breadcrumbs items={[{ label: "Sitemap" }]} className="mb-8" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-sans text-5xl sm:text-6xl mb-16">Sitemap</h1>
            
            <div className="grid md:grid-cols-3 gap-12">
              {sitemapSections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-sans text-2xl mb-6 border-b border-[#0F120F]/10 pb-4">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link to={link.href} className="text-[#0F120F]/70 hover:text-[#52796F] transition-colors hover:underline">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
