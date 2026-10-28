import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InstitutionalLayout from "@/components/InstitutionalLayout";
import { businesses } from "@/data/editorial";
export default function Businesses() {
  return (
    <InstitutionalLayout title="Our businesses" label="Our businesses">
      <nav
        className="section-navigation business-directory-nav"
        aria-label="Operating businesses"
      >
        <div className="site-container">
          {businesses.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <div className="site-container business-list">
        {businesses.map((business, i) => (
          <article id={business.id} className="business-row" key={business.id}>
            <div className="business-image">
              <img
                src={business.image}
                alt={business.sector}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <span className="photo-index">0{i + 1}</span>
            </div>
            <div className="business-copy">
              <span className="eyebrow section-label">{business.sector}</span>
              <h2>{business.name}</h2>

              <ul>
                {business.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                className="text-link"
                to={`/contact?business=${business.id}`}
              >
                Business enquiries <ArrowUpRight size={18} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </InstitutionalLayout>
  );
}
