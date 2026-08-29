import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const RouteProgress = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];

    setVisible(true);
    setProgress(15);

    timers.current.push(
      window.setTimeout(() => setProgress(55), 120),
      window.setTimeout(() => setProgress(85), 240),
      window.setTimeout(() => setProgress(100), 360),
      window.setTimeout(() => setVisible(false), 520),
      window.setTimeout(() => setProgress(0), 560)
    );

    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [location.pathname, location.search, location.hash]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-[2px] z-[9999] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[#52796F] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default RouteProgress;
