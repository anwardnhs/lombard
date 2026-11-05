import { useEffect, useRef, useState } from "react";

interface Props {
  label: string;
  sections: ReadonlyArray<readonly [id: string, title: string]>;
  className?: string;
}

export default function SectionNavigation({ label, sections, className = "" }: Props) {
  const nav = useRef<HTMLElement>(null);
  const [active, setActive] = useState("");

  useEffect(() => {
    const targets = sections.map(([id]) => document.getElementById(id)).reverse();
    const update = () => {
      const edge = (nav.current?.getBoundingClientRect().bottom ?? 0) + 32;
      const current = targets.find((target) => target && target.getBoundingClientRect().top <= edge);
      setActive(current?.id ?? "");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections]);

  return (
    <nav ref={nav} className={`section-navigation ${className}`} aria-label={label}>
      <div className="site-container">
        {sections.map(([id, title]) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
            {title}
          </a>
        ))}
        <label className="section-picker">
          <span>On this page</span>
          <select value={active} onChange={(event) => {
            setActive(event.target.value);
            window.location.hash = event.target.value;
          }}>
            <option value="" disabled>Choose a section</option>
            {sections.map(([id, title]) => <option value={id} key={id}>{title}</option>)}
          </select>
        </label>
      </div>
    </nav>
  );
}
