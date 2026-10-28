import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Search } from "lucide-react";
import InstitutionalLayout from "@/components/InstitutionalLayout";
import { newsroomStories as stories } from "@/data/editorial";
export default function Newsroom() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const selected = stories.find((story) => story.id === params.get("story"));
  const categories = [
    "All",
    ...new Set(stories.map((story) => story.category)),
  ];
  const filtered = stories.filter(
    (story) =>
      (category === "All" || story.category === category) &&
      [story.title, story.summary, story.category]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <InstitutionalLayout
      title="Newsroom"
      label="Newsroom"

      aside={
        <a className="text-link" href="mailto:media@lombardholdco.com">
          Media enquiries <ArrowUpRight size={18} />
        </a>
      }
    >
      {selected ? (
        <article className="site-container news-detail">
          <button className="text-link" onClick={() => setParams({})}>
            <ArrowLeft size={17} /> Back to newsroom
          </button>
          <h2 className="article-title">{selected.title}</h2>
          <div className="story-meta">
            <span>{selected.category}</span>
            <span>{selected.date}</span>
          </div>
          <img src={selected.image} alt="" />
          <p>{selected.summary}</p>

          <a
            className="text-link mt-6"
            href={`mailto:media@lombardholdco.com?subject=${encodeURIComponent(selected.title)}`}
          >
            Media enquiries <ArrowUpRight size={18} />
          </a>
        </article>
      ) : (
        <div className="site-container news-results">
          <div className="news-toolbar">
            <label className="news-category-label">
              Category
              <select
                aria-label="Filter news by category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-3">
              <Search size={19} />
              <input
                className="news-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search announcements"
                aria-label="Search news"
              />
            </label>
          </div>
          <p className="subtle-copy mb-6" aria-live="polite">
            {filtered.length}{" "}
            {filtered.length === 1 ? "announcement" : "announcements"}
          </p>
          <div className="news-register">
            {filtered.map((story) => (
              <button
                className="news-item"
                key={story.id}
                onClick={() => setParams({ story: story.id })}
              >
                <div className="news-image">
                  <img src={story.image} alt="" loading="lazy" />
                </div>
                <div className="news-register-copy">
                  <div className="story-meta">
                    <span>{story.category}</span>
                    <span>{story.date}</span>
                  </div>
                  <h3>{story.title}</h3>

                  <span className="text-link">
                    Read announcement <ArrowUpRight size={18} />
                  </span>
                </div>
              </button>
            ))}
          </div>
          {!filtered.length && (
            <div className="empty-state">
              <p>No announcements match your search.</p>
              <button
                className="text-link mt-5"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      )}
    </InstitutionalLayout>
  );
}
