import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { businesses } from "@/data/editorial";
export default function G4Section() {
  return (
    <section id="businesses" className="portfolio-section section-space">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow section-label">
              Operating subsidiaries
            </span>
            <h2>
              Our operating
              <br />
              <em>businesses.</em>
            </h2>
          </div>
          <div>
            <Link to="/businesses" className="text-link">
              View operating businesses <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="portfolio-grid">
          {businesses.map((business, i) => (
            <Link
              to={`/businesses#${business.id}`}
              className="portfolio-item"
              key={business.id}
            >
              <div className="portfolio-photo">
                <img
                  src={business.image}
                  alt={business.sector}
                  loading="lazy"
                />
                <span className="photo-index">0{i + 1}</span>
                <span className="photo-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <span className="eyebrow">{business.sector}</span>
              <h3>{business.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
