import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InstitutionalLayout, {
  SectionHeading,
  RelatedLink,
} from "@/components/InstitutionalLayout";
import solar from "@/assets/curated/solarr.webp";
import education from "@/assets/education.jpg";
import health from "@/assets/health.jpg";
import enterprise from "@/assets/curated/rural.webp";
import agent from "@/assets/agent.jpg";
const initiatives = [
  {
    title: "Education",
    image: education,
    description:
      "Scholarships, school infrastructure and digital learning programmes to improve access to education.",
  },
  {
    title: "Healthcare",
    image: health,
    description:
      "Community health programmes, mobile clinics and partnerships with healthcare providers.",
  },
  {
    title: "Enterprise",
    image: enterprise,
    description:
      "SME financing, business training and support for women-led enterprises.",
  },
];
export default function Impact() {
  return (
    <InstitutionalLayout
      title="Sustainability & impact"
      label="Sustainability & impact"

      aside={
        <a
          className="text-link"
          href="mailto:investor.relations@lombardholdco.com?subject=Sustainability%20report%20request"
        >
          Request the sustainability report <ArrowUpRight size={18} />
        </a>
      }
    >
      <section className="sustainability-feature site-container">
        <div className="sustainability-image">
          <img src={solar} alt="Solar energy infrastructure" loading="eager" />
          <span className="image-caption">
            Climate finance &amp; renewable energy
          </span>
        </div>
        <div className="sustainability-brief">
          <span className="eyebrow section-label">
            Environmental & social responsibility
          </span>
          <h2>Our sustainability priorities</h2>

          <div className="priority-list">
            {[
              [
                "Climate finance",
                "Financing renewable energy and managing environmental risk.",
              ],
              [
                "Financial inclusion",
                "Expanding access to financial services through our operating businesses.",
              ],
              [
                "Governance",
                "Oversight of sustainability policy, risk and reporting.",
              ],
            ].map(([title, description]) => (
              <div key={title}>
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="institutional-section tinted-section">
        <div className="site-container">
          <SectionHeading
            label="Lombard Foundation"
            title="Community programmes"
          ></SectionHeading>
          <div className="programme-grid">
            {initiatives.map((item) => (
              <article key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="institutional-section site-container inclusion-layout">
        <div>
          <span className="eyebrow section-label">Access to finance</span>
          <h2>Financial inclusion</h2>

          <Link to="/careers" className="text-link">
            Careers &amp; graduate programmes <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={agent}
          alt="Financial services in local communities"
          loading="lazy"
        />
      </section>
      <section className="institutional-section sustainability-report">
        <div className="site-container report-layout">
          <div>
            <span className="eyebrow">Reporting</span>
            <h2>Sustainability report</h2>

            <a
              className="design-button"
              href="mailto:investor.relations@lombardholdco.com?subject=Sustainability%20report%20request"
            >
              Request report <ArrowUpRight size={18} />
            </a>
          </div>
          <ol>
            {[
              "ESG governance and risk management",
              "Climate finance and green lending",
              "Foundation programmes",
              "Community outcomes",
              "Reporting standards",
            ].map((item, i) => (
              <li key={item}>
                <span>0{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="site-container related-section">
        <RelatedLink to="/governance" title="Governance" />
        <RelatedLink to="/contact" title="Contact the group" />
      </section>
    </InstitutionalLayout>
  );
}
