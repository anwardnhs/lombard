import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
const links = [
  ["The group", "/about"],
  ["Our businesses", "/businesses"],
  ["Leadership", "/governance"],
  ["Sustainability", "/impact"],
  ["Newsroom", "/newsroom"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          toggle.current,
          ...Array.from(
            panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", keydown);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#page-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-container header-inner">
          <Link className="wordmark" to="/" aria-label="Lombard HoldCo home">
            <BrandLogo />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, href]) => (
              <NavLink key={href} to={href}>
                {label}
              </NavLink>
            ))}
          </nav>
          <Link className="header-investors" to="/investors">
            Investor relations <ArrowUpRight size={15} />
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {open && (
        <nav
          ref={panel}
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {[
            ...links,
            ["Investor relations", "/investors"],
            ["Careers", "/careers"],
            ["Contact", "/contact"],
          ].map(([label, href], i) => (
            <NavLink key={href} to={href}>
              <span className="eyebrow">0{i + 1}</span>
              {label}
              <ArrowUpRight size={20} />
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
}
