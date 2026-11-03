import { useEffect, useRef, useState } from "react";
import { PLANE_PATH } from "@/lib/flightFx";
import { NavigationStop } from "@/sections/FlightNavigation/components/NavigationStop";

const STOPS = [
  { id: "hero", code: "HRE", label: "Departure" },
  { id: "about", code: "BUL", label: "About" },
  { id: "line", code: "VFA", label: "The line" },
  { id: "routes", code: "HWN", label: "Routes" },
  { id: "pass", code: "GWE", label: "Passport" },
  { id: "arrive", code: "JNB", label: "Arrival" },
] as const;

export const FlightNavigation = () => {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [compact, setCompact] = useState(false);
  const [bank, setBank] = useState(0);
  const [positions, setPositions] = useState(() => STOPS.map(() => "0%"));
  const lastScroll = useRef(0);
  const bankTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const measure = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      setCompact(window.innerWidth <= 860);
      setPositions(
        STOPS.map((stop) => {
          const el = document.getElementById(stop.id);
          const top = el?.offsetTop ?? 0;
          return `${Math.min(100, (top / max) * 100)}%`;
        }),
      );
    };

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);

      let next = 0;
      STOPS.forEach((stop, index) => {
        const el = document.getElementById(stop.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          next = index;
        }
      });
      setActive(next);

      const delta = window.scrollY - lastScroll.current;
      lastScroll.current = window.scrollY;
      setBank(Math.max(-16, Math.min(16, 0.5 * delta)));
      window.clearTimeout(bankTimer.current);
      bankTimer.current = window.setTimeout(() => setBank(0), 160);
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    const delayed = window.setTimeout(measure, 1200);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);

    return () => {
      window.clearTimeout(delayed);
      window.clearTimeout(bankTimer.current);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
  }, []);

  const fill = `${Math.min(100, Math.max(0, progress * 100))}%`;
  const rotation = (compact ? 90 : 180) + bank;

  return (
    <nav
      className="rail box-border caret-transparent outline-[0px] fixed no-underline z-50 left-[22px] right-[22px] top-[18px] h-0.5 md:left-[30px] md:right-auto md:top-[14vh] md:bottom-[14vh] md:h-auto md:w-0.5"
      style={{ ["--p" as string]: fill }}
    >
      <i className="rail-fill absolute left-0 top-0 bg-red-800 md:w-full" />
      <div
        className="rail-pip absolute z-[3] pointer-events-none"
        style={{ ["--bk" as string]: `${rotation}deg` }}
      >
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d={PLANE_PATH} />
        </svg>
      </div>
      {STOPS.map((stop, index) => (
        <NavigationStop
          key={stop.id}
          href={`#${stop.id}`}
          label={stop.code}
          active={index <= active}
          position={positions[index]!}
          compact={compact}
        />
      ))}
    </nav>
  );
};

export default FlightNavigation;
