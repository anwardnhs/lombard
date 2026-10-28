import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InstitutionalLayout from "@/components/InstitutionalLayout";
const groups = [
  {
    title: "Group information",
    links: [
      ["Corporate profile", "/about"],
      ["Our businesses", "/businesses"],
      ["Leadership & governance", "/governance"],
      ["Sustainability & impact", "/impact"],
    ],
  },
  {
    title: "Corporate information",
    links: [
      ["Investor relations", "/investors"],
      ["Newsroom", "/newsroom"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Website policies",
    links: [
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
      ["Cookie Policy", "/cookies"],
    ],
  },
];
export default function Sitemap() {
  return (
    <InstitutionalLayout title="Sitemap" label="Sitemap">
      <section className="site-container institutional-section sitemap-register">
        {groups.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map(([label, to]) => (
              <Link key={to} to={to}>
                {label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        ))}
      </section>
    </InstitutionalLayout>
  );
}
