type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: "light" | "dark";
}

const Breadcrumbs = ({ items, className = "", theme = "light" }: BreadcrumbsProps) => {
  const isDark = theme === "dark";
  const linkClass = isDark
    ? "text-white/70 hover:text-white"
    : "text-[#0F120F]/60 hover:text-[#0F120F]";
  const currentClass = isDark ? "text-white" : "text-[#0F120F]";
  const separatorClass = isDark ? "text-white/40" : "text-[#0F120F]/40";

  return (
    <nav aria-label="Breadcrumb" className={`text-[10px] sm:text-xs uppercase tracking-[0.15em] font-semibold ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <a href="/" className={`transition-colors ${linkClass}`}>
            Home
          </a>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <span className={separatorClass} aria-hidden="true">
                &gt;
              </span>
              {isLast || !item.href ? (
                <span className={currentClass} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className={`transition-colors ${linkClass}`}>
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
