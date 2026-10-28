import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import InstitutionalLayout, {
  SectionHeading,
} from "@/components/InstitutionalLayout";
import { roles } from "@/data/careers";
import meeting from "@/assets/meeting.jpg";
import career from "@/assets/career.avif";
export default function Careers() {
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState("All teams");
  const teams = ["All teams", ...new Set(roles.map((role) => role.dept))];
  const filtered = useMemo(
    () =>
      roles.filter(
        (role) =>
          (team === "All teams" || role.dept === team) &&
          [role.title, role.dept, role.company, role.loc]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, team],
  );
  return (
    <InstitutionalLayout
      title="Careers at Lombard"
      label="Careers"

      aside={
        <a href="#open-roles" className="text-link">
          View current opportunities <ArrowUpRight size={18} />
        </a>
      }
    >
      <section className="careers-image-strip site-container">
        <img
          src={meeting}
          alt="Colleagues in a working meeting"
          loading="eager"
        />
      </section>
      <section className="institutional-section site-container" id="open-roles">
        <SectionHeading
          label="Recruitment"
          title="Current opportunities"
        ></SectionHeading>
        <div className="roles-toolbar">
          <label className="role-search">
            <Search size={19} />
            <input
              type="search"
              aria-label="Search opportunities"
              placeholder="Search roles or locations"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label className="team-select">
            Business area
            <select
              aria-label="Filter by business area"
              value={team}
              onChange={(event) => setTeam(event.target.value)}
            >
              {teams.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <p className="subtle-copy roles-count" aria-live="polite">
          {filtered.length} opportunities
        </p>
        <div className="role-register">
          {filtered.map((role) => (
            <article key={role.id}>
              <div>
                <p className="profile-role">{role.dept}</p>
                <h3>{role.title}</h3>
                <p>{role.company}</p>
              </div>
              <div className="role-location">
                <span>{role.loc}</span>
                <span>{role.type === "Program" ? "Programme" : role.type}</span>
              </div>
              <a
                className="text-link"
                href={`mailto:info@lombardholdco.com?subject=${encodeURIComponent("Career enquiry: " + role.title)}`}
              >
                Enquire <ArrowUpRight size={18} />
              </a>
            </article>
          ))}
        </div>
        {!filtered.length && (
          <div className="empty-state">
            <p>No opportunities match your search.</p>
            <button
              className="text-link"
              onClick={() => {
                setQuery("");
                setTeam("All teams");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
      <section className="graduate-section tinted-section">
        <div className="site-container graduate-layout">
          <img src={career} alt="Working at Lombard" loading="lazy" />
          <div>
            <span className="eyebrow section-label">Early careers</span>
            <h2>
              Graduate programmes
              <br />
              &amp; internships
            </h2>

            <button
              className="text-link"
              onClick={() => {
                setQuery("Graduate");
                setTeam("All teams");
                document.getElementById("open-roles")?.scrollIntoView();
              }}
            >
              View graduate opportunities <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>
      <section className="institutional-section site-container">
        <SectionHeading
          label="Working at Lombard"
          title="Professional development"
        />
        <div className="governance-responsibilities">
          {[
            [
              "Experience across businesses",
              "Opportunities to work across banking, capital markets, asset management and insurance.",
            ],
            [
              "Specialist development",
              "Training and practical experience in financial services, risk management and technology.",
            ],
            [
              "Group-wide careers",
              "Roles across our African operations and international offices.",
            ],
          ].map(([title, description]) => (
            <div key={title}>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </section>
    </InstitutionalLayout>
  );
}
