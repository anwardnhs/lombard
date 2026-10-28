import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import G4Section from "@/components/G4Section";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import tower from "@/assets/curated/hq11.webp";
import impact from "@/assets/curated/rural.webp";
import { holdCoMetrics } from "@/data/lombard";
export default function Index() {
  return (
    <div className="home-page">
      <Header />
      <main id="page-content" tabIndex={-1}>
        <HeroSection />
        <section
          id="group-overview"
          className="group-overview section-space site-container"
        >
          <span className="eyebrow section-label">Corporate profile</span>
          <div className="overview-grid">
            <h2>
              Group structure
              <br />
              <em>&amp; strategy.</em>
            </h2>
            <div>
              <Link to="/about" className="text-link">
                About the group <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="group-metrics">
            {[holdCoMetrics[0], holdCoMetrics[2], holdCoMetrics[5]].map(
              (metric) => (
                <div key={metric.label}>
                  <span className="metric-number">
                    {metric.value}
                    {metric.suffix && <small>{metric.suffix}</small>}
                  </span>
                  <span className="eyebrow">{metric.label}</span>
                </div>
              ),
            )}
            <div className="metric-note">
              Group financials<span>Corporate profile figures</span>
            </div>
          </div>
        </section>
        <G4Section />
        <section className="conviction-section">
          <div className="conviction-image">
            <img src={tower} alt="The Lombard Tower in Lagos" loading="lazy" />
          </div>
          <div className="conviction-copy">
            <span className="eyebrow">Group oversight</span>
            <h2>
              Leadership &amp;
              <br />
              <em>governance.</em>
            </h2>

            <Link to="/governance" className="text-link">
              Our leadership & governance <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
        <section className="impact-feature section-space site-container">
          <div>
            <span className="eyebrow section-label">Sustainability</span>
            <h2>
              Sustainability &amp;
              <br />
              <em>social investment.</em>
            </h2>

            <Link to="/impact" className="text-link">
              Sustainability &amp; impact <ArrowUpRight size={17} />
            </Link>
          </div>
          <figure>
            <img
              src={impact}
              alt="Community and enterprise in Africa"
              loading="lazy"
            />
            <figcaption>Lombard Foundation · Enterprise development</figcaption>
          </figure>
        </section>
        <section className="investor-band" id="investors">
          <div className="site-container">
            <span className="eyebrow">For our shareholders</span>
            <h2>
              Financial results
              <br />
              <em>&amp; reporting.</em>
            </h2>
            <Link to="/investors" className="design-button">
              Investor relations <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
