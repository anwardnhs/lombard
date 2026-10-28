import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

interface LayoutProps {
  title: string;
  label: string;
  children: ReactNode;
  aside?: ReactNode;
}

export default function InstitutionalLayout({
  title,
  label,
  children,
  aside,
}: LayoutProps) {
  return (
    <div className="institutional-page">
      <Header />
      <main id="page-content" tabIndex={-1} className="institutional-main">
        <header className="institutional-intro site-container">
          <Breadcrumbs items={[{ label }]} />
          <div className="institutional-title-row">
            <div>
              <span className="eyebrow section-label">Lombard HoldCo Plc</span>
              <h1>{title}</h1>
            </div>
            {aside && <div className="institutional-summary">{aside}</div>}
          </div>
        </header>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="institutional-section-heading">
      <div>
        <span className="eyebrow section-label">{label}</span>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export function RelatedLink({ to, title }: { to: string; title: string }) {
  return (
    <Link to={to} className="related-link">
      <div>
        <h3>{title}</h3>
      </div>
      <ArrowUpRight size={24} />
    </Link>
  );
}
