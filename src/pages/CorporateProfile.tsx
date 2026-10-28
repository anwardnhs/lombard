import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InstitutionalLayout, {
  SectionHeading,
  RelatedLink,
} from "@/components/InstitutionalLayout";
import { holdCoMetrics, timeline } from "@/data/lombard";
import { businesses } from "@/data/editorial";
import headquarters from "@/assets/curated/hq11.webp";

export default function CorporateProfile() {
  return (
    <InstitutionalLayout title="The group" label="Corporate profile">
      <section className="profile-overview site-container">
        <div className="profile-portrait">
          <img src={headquarters} alt="Lombard headquarters" loading="eager" />
          <span className="image-caption">
            The Lombard Tower · Lagos, Nigeria
          </span>
        </div>
        <div className="profile-facts">
          <span className="eyebrow section-label">Corporate overview</span>
          <h2>
            Group structure
            <br />
            &amp; operations
          </h2>

          <dl className="corporate-facts">
            <div>
              <dt>Established</dt>
              <dd>1954</dd>
            </div>
            <div>
              <dt>Headquarters</dt>
              <dd>Lagos, Nigeria</dd>
            </div>
            <div>
              <dt>Operating structure</dt>
              <dd>Financial holding company</dd>
            </div>
            <div>
              <dt>Listings</dt>
              <dd>NGX · London Stock Exchange</dd>
            </div>
          </dl>
          <Link to="/governance" className="text-link">
            Board &amp; management <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="institutional-section tinted-section">
        <div className="site-container">
          <SectionHeading
            label="Group financials"
            title="At a glance"
          ></SectionHeading>
          <div className="financial-metrics">
            {holdCoMetrics.map((metric) => (
              <div key={metric.label}>
                <span className="eyebrow">{metric.label}</span>
                <strong>
                  {metric.value}
                  {metric.suffix && <small>{metric.suffix}</small>}
                </strong>
                <span>{metric.subValue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="institutional-section site-container">
        <SectionHeading
          label="Operating subsidiaries"
          title="Our businesses"
        ></SectionHeading>
        <div className="subsidiary-register">
          {businesses.map((business, i) => (
            <Link to={`/businesses#${business.id}`} key={business.id}>
              <span className="register-index">0{i + 1}</span>
              <div>
                <h3>{business.name}</h3>
                <p>{business.sector}</p>
              </div>
              <ArrowUpRight size={23} />
            </Link>
          ))}
        </div>
      </section>
      <section className="institutional-section history-section">
        <div className="site-container history-layout">
          <div>
            <span className="eyebrow section-label">Group history</span>
            <h2>Key milestones</h2>
          </div>
          <div className="milestone-list">
            {timeline.map((item) => (
              <div key={item.year}>
                <span>{item.year}</span>
                <div>
                  <h3>
                    {item.year === "2025"
                      ? "Group operations in 2025"
                      : item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="site-container related-section">
        <RelatedLink to="/investors" title="Investor relations" />
        <RelatedLink to="/governance" title="Leadership & governance" />
      </section>
    </InstitutionalLayout>
  );
}
