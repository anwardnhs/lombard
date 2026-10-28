import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import skyline from "@/assets/curated/lombardsk.webp";
export default function HeroSection() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <img
        className="hero-photograph"
        src={skyline}
        alt="Lagos skyline and the city's business district"
        loading="eager"
      />
      <div className="hero-shade" />
      <div className="site-container hero-composition">
        <div className="hero-main">
          <h1 id="hero-title">
            Investing in
            <br />
            Africa’s <em>growth.</em>
          </h1>
          <p className="hero-tagline">
            Banking, capital markets, asset management and insurance across 14 African markets.
          </p>
          <div className="hero-bottom">
            <Link className="design-button light" to="/businesses">
              Our businesses <ArrowUpRight size={18} />
            </Link>
            <Link className="design-button hero-button-outline" to="/investors">
              Investor relations <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-caption">
          <span>LAGOS, NIGERIA · EST. 1954</span>
          <a href="#group-overview">
            Explore the group <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
