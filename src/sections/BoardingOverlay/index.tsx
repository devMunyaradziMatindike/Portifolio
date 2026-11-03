import { useEffect, useRef, useState } from "react";
import { audioPlayer } from "@/lib/audioPlayer";
import { flightFx, PLANE_PATH } from "@/lib/flightFx";
import { CabinDoor } from "@/sections/BoardingOverlay/components/CabinDoor";
import {
  BOARD_ROWS,
  DepartureBoard,
} from "@/sections/BoardingOverlay/components/DepartureBoard";

type Phase = "door" | "opening" | "open" | "board" | "fly" | "done";

const TARGET = BOARD_ROWS.join("").split("");
const SCRAMBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789→";

export const BoardingOverlay = () => {
  const [phase, setPhase] = useState<Phase>("door");
  const [chars, setChars] = useState(() => TARGET.map(() => "\u00a0"));
  const [flipping, setFlipping] = useState(() => TARGET.map(() => false));
  const [status, setStatus] = useState("CHECK-IN");
  const [boardingFlash, setBoardingFlash] = useState(false);
  const phaseRef = useRef<Phase>("door");
  const overlayRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<SVGPolylineElement>(null);
  const edgeRef = useRef<SVGLineElement>(null);
  const planeRef = useRef<SVGGElement>(null);

  const go = (next: Phase) => {
    if (phaseRef.current === next) return;
    phaseRef.current = next;
    setPhase(next);
  };

  useEffect(() => {
    const onEvent = (event: Event) => {
      if (phaseRef.current === "door") {
        const isKey = event.type === "keydown";
        const isDoorClick =
          event.type === "click" &&
          event.target instanceof Element &&
          !!event.target.closest("#dd");
        if (!isKey && !isDoorClick) return;
        flightFx.init();
        flightFx.resume();
        flightFx.chime();
        audioPlayer.preload();
        go("opening");
        window.setTimeout(() => go("open"), 1500);
        return;
      }

      if (phaseRef.current === "open") {
        flightFx.say("Welcome aboard.");
        audioPlayer.preload();
        go("board");
      }
    };

    const types = ["click", "keydown", "touchend"] as const;
    types.forEach((type) => window.addEventListener(type, onEvent));
    return () => types.forEach((type) => window.removeEventListener(type, onEvent));
  }, []);

  useEffect(() => {
    if (phase !== "board") return;

    const remaining = TARGET.map((char, index) =>
      char === " " ? 0 : 8 + Math.floor(16 * Math.random()) + Math.floor(index / 3),
    );
    const display = TARGET.map(() => "\u00a0");
    const flip = TARGET.map(() => false);
    const settled = TARGET.map(() => false);
    const started = Date.now();
    let advanced = false;

    const tick = window.setInterval(() => {
      const elapsed = Date.now() - started;
      let stillFlipping = 0;

      TARGET.forEach((char, index) => {
        if (char === " " || elapsed < 38 * index) return;
        if (remaining[index]! > 0) {
          stillFlipping += 1;
          remaining[index]! -= 1;
          flip[index] = true;
          display[index] = SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)]!;
        } else if (!settled[index]) {
          settled[index] = true;
          flip[index] = false;
          display[index] = char;
        }
      });

      setChars([...display]);
      setFlipping([...flip]);
      setStatus(elapsed < 700 ? "CHECK-IN" : "BOARDING");

      if (!stillFlipping && elapsed > 600 && !advanced) {
        advanced = true;
        setStatus("NOW BOARDING");
        setBoardingFlash(true);
        window.setTimeout(() => go("fly"), 900);
      }
    }, 70);

    const fallback = window.setTimeout(() => go("fly"), 7000);
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(fallback);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "fly") return;

    document.body.classList.add("ready");
    if (flightFx.running) flightFx.engine(2700);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const started = Date.now();
    const points: string[] = [];

    const frame = window.setInterval(() => {
      const t = Math.min((Date.now() - started) / 2700, 1);
      const ease = Math.pow(t, 1.75);
      const x = -0.1 * width + 1.3 * ease * width;
      const y = 1.06 * height - 1.25 * Math.pow(ease, 1.4) * height;
      const dy = -1.75 * Math.pow(Math.max(ease, 0.0005), 0.4) * height;
      const wipe = x - y - 90;

      if (overlayRef.current) {
        overlayRef.current.style.clipPath = `polygon(-6000px ${-6000 - wipe}px,6000px ${6000 - wipe}px,6000px -6000px,-6000px -6000px)`;
      }
      edgeRef.current?.setAttribute("x1", "-6000");
      edgeRef.current?.setAttribute("y1", String(-6000 - wipe));
      edgeRef.current?.setAttribute("x2", "6000");
      edgeRef.current?.setAttribute("y2", String(6000 - wipe));

      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      if (points.length > 70) points.shift();
      trailRef.current?.setAttribute("points", points.join(" "));
      planeRef.current?.setAttribute(
        "transform",
        `translate(${x},${y}) rotate(${(57.2958 * Math.atan2(1.3 * width, -dy)).toFixed(2)}) scale(6) translate(-12,-12)`,
      );

      if (t >= 1) {
        window.clearInterval(frame);
        go("done");
        window.setTimeout(() => {
          void audioPlayer.playWhenReady();
        }, 400);
      }
    }, 16);

    return () => window.clearInterval(frame);
  }, [phase]);

  if (phase === "done") return null;

  const doorOpen = phase !== "door";
  const hideDoor = phase === "board" || phase === "fly";

  return (
    <>
      <div
        ref={overlayRef}
        role="dialog"
        aria-label="Boarding overlay"
        className="items-center bg-neutral-900 shadow-[rgb(139,0,0)_0px_10px_0px_0px] box-border caret-transparent text-orange-100 gap-x-[18px] flex flex-col justify-center outline-[0px] fixed gap-y-[18px] no-underline z-[10000] inset-0"
      >
        <CabinDoor
          open={doorOpen}
          hidden={hideDoor}
          onOpen={() => {
            if (phaseRef.current !== "door") return;
            flightFx.init();
            flightFx.resume();
            flightFx.chime();
            go("opening");
            window.setTimeout(() => go("open"), 1500);
          }}
        />

        <div className="box-border caret-transparent text-stone-400 flex text-xs font-medium justify-between tracking-[3.6px] leading-[normal] min-h-[auto] min-w-[auto] outline-[0px] no-underline w-[352.5px] md:w-[860px]">
          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[0px] no-underline">
            {"DEPARTURES"}
          </span>
          <span
            className={`box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[0px] no-underline ${boardingFlash ? "text-orange-100" : "text-red-800"}`}
          >
            {status}
          </span>
        </div>

        <DepartureBoard chars={chars} flipping={flipping} />

        <div className="box-border caret-transparent text-stone-500 text-[11px] tracking-[3.3px] leading-[normal] min-h-[auto] min-w-[auto] outline-[0px] text-center no-underline mt-2">
          {"GATE 01 · HARARE → EVERYWHERE"}
        </div>
      </div>

      <svg
        id="fx"
        className="pointer-events-none fixed inset-0 z-[10001] h-full w-full"
        style={{ display: phase === "fly" ? "block" : "none" }}
        aria-hidden
      >
        <polyline
          ref={trailRef}
          fill="none"
          stroke="#8B0000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line ref={edgeRef} stroke="#8B0000" strokeWidth="6" />
        <g ref={planeRef}>
          <path d={PLANE_PATH} fill="#f8f4ea" stroke="#15140f" strokeWidth="0.6" />
        </g>
      </svg>
    </>
  );
};

export default BoardingOverlay;
