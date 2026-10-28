import { useId } from "react";

/** Uses the supplied Lombard artwork, framed to remove its presentation margins. */
export default function BrandLogo() {
  const filterId = `lombard-logo-${useId().replace(/:/g, "")}`;
  return (
    <svg
      className="brand-logo"
      viewBox="490 400 460 115"
      role="img"
      aria-label="Lombard"
    >
      <defs>
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 -1.5 -1.5 -1.5 0 3.2" />
        </filter>
      </defs>
      <image href="/logolom.png" width="1472" height="704" filter={`url(#${filterId})`} />
    </svg>
  );
}
