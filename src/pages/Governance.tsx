import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import InstitutionalLayout, {
  SectionHeading,
} from "@/components/InstitutionalLayout";
import { board, executives } from "@/data/leadership";
const responsibilities = [
  [
    "Board oversight",
    "The Board sets the Group’s strategic direction and oversees management, capital allocation and risk.",
  ],
  [
    "Risk & compliance",
    "Group risk and compliance functions support oversight across operating subsidiaries and jurisdictions.",
  ],
  [
    "Audit & reporting",
    "Board-level oversight of financial reporting, internal controls and the external audit process.",
  ],
];
export default function Governance() {
  const [view, setView] = useState<"board" | "executive">("board");
  const people = view === "board" ? board : executives;
  return (
    <InstitutionalLayout
      title="Leadership & governance"
      label="Leadership & governance"
    >
      <section className="site-container leadership-section">
        <div className="leadership-toolbar">
          <div
            className="institutional-tabs"
            role="group"
            aria-label="Leadership team"
          >
            <button
              aria-pressed={view === "board"}
              onClick={() => setView("board")}
            >
              Board of Directors <span>{board.length}</span>
            </button>
            <button
              aria-pressed={view === "executive"}
              onClick={() => setView("executive")}
            >
              Executive Committee <span>{executives.length}</span>
            </button>
          </div>
          <span className="subtle-copy">
            Select a profile for further information
          </span>
        </div>
        <div className="leadership-grid" key={view}>
          {people.map((person) => (
            <article className="leadership-profile" key={person.name}>
              <div className="leadership-photo">
                <img src={person.image} alt={person.name} loading="lazy" />
              </div>
              <div className="leadership-profile-body">
                <p className="profile-role">{person.role}</p>
                <h2>{person.name}</h2>
                {"subRole" in person &&
                  typeof person.subRole === "string" &&
                  person.subRole !== "Member" && (
                    <p className="profile-committee">{person.subRole}</p>
                  )}
                <details className="profile-disclosure">
                  <summary>
                    Biography <Plus size={16} className="disclosure-plus" />
                    <Minus size={16} className="disclosure-minus" />
                  </summary>
                  <p>{person.bio}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="institutional-section tinted-section">
        <div className="site-container">
          <SectionHeading
            label="Governance framework"
            title="Oversight & accountability"
          />
          <div className="governance-responsibilities">
            {responsibilities.map(([title, description], i) => (
              <div key={title}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{title}</h3>
              </div>
            ))}
          </div>
          <a
            className="text-link"
            href="mailto:company.secretary@lombardholdco.com?subject=Corporate%20governance%20enquiry"
          >
            Contact the Company Secretary <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </InstitutionalLayout>
  );
}
