import Breadcrumbs from "./Breadcrumbs";
interface Props {
  label: string;
  title: string;
  emphasis?: string;
  description: string;
}
export default function PageIntro({
  label,
  title,
  emphasis,
  description,
}: Props) {
  return (
    <section className="page-intro site-container">
      <Breadcrumbs items={[{ label }]} />
      <div className="page-intro-grid">
        <div>
          <span className="eyebrow section-label">{label}</span>
          <h1>
            {title}
            {emphasis && (
              <>
                <br />
                <em>{emphasis}</em>
              </>
            )}
          </h1>
        </div>
        <p>{description}</p>
      </div>
    </section>
  );
}
