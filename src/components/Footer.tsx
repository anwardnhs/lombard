import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import BrandLogo from "./BrandLogo";
const columns = [
  {
    title: "The group",
    links: [
      ["Corporate profile", "/about"],
      ["Our businesses", "/businesses"],
      ["Leadership & governance", "/governance"],
      ["Sustainability", "/impact"],
    ],
  },
  {
    title: "Information",
    links: [
      ["Investor relations", "/investors"],
      ["Newsroom", "/newsroom"],
      ["Careers", "/careers"],
      ["Contact us", "/contact"],
    ],
  },
];
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="wordmark">
              <BrandLogo />
            </Link>

            <Link to="/contact" className="text-link">
              Contact the group <ArrowUpRight size={17} />
            </Link>
          </div>
          {columns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h2 className="eyebrow">{column.title}</h2>
              {column.links.map(([label, href]) => (
                <Link to={href} key={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
          <div className="footer-column">
            <h2 className="eyebrow">Our headquarters</h2>
            <address>
              The Lombard Tower
              <br />
              44 Marina, Lagos Island
              <br />
              Lagos, Nigeria
            </address>
            <a href="mailto:info@lombardholdco.com">info@lombardholdco.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Lombard HoldCo Plc</span>
          <nav aria-label="Legal">
            {[
              ["Privacy", "/privacy"],
              ["Terms", "/terms"],
              ["Cookies", "/cookies"],
              ["Sitemap", "/sitemap"],
            ].map(([label, href]) => (
              <Link to={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
