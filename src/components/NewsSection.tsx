import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { stories } from "@/data/editorial";
export default function NewsSection() {
  return (
    <section className="section-space news-section">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow section-label">
              Corporate communications
            </span>
            <h2>
              Group news &amp; <em>announcements.</em>
            </h2>
          </div>
          <Link to="/newsroom" className="text-link">
            Visit the newsroom <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="news-grid">
          {stories.map((story) => (
            <Link
              to={`/newsroom?story=${story.id}`}
              className="news-item"
              key={story.id}
            >
              <div className="news-image">
                <img src={story.image} alt="" loading="lazy" />
              </div>
              <div className="story-meta">
                <span>{story.category}</span>
                <span>{story.date}</span>
              </div>
              <h3>{story.title}</h3>
              <span className="text-link">
                Read announcement <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
