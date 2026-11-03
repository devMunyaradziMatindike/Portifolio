import { useEffect, useState } from "react";

const readProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? window.scrollY / max : 0;
};

const formatAlt = (progress: number) => {
  const climb =
    progress < 0.08
      ? progress / 0.08
      : progress > 0.92
        ? (1 - progress) / 0.08
        : 1;
  return (100 * Math.round(climb * 350)).toLocaleString("en-US");
};

export const FlightStatus = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => setProgress(readProgress());
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const speed = progress < 0.02 || progress > 0.98 ? 0 : 840;
  const remaining = Math.round((1 - progress) * 5000).toLocaleString("en-US");

  return (
    <div className="bg-orange-50 shadow-[rgb(21,20,15)_4px_4px_0px_0px] box-border caret-transparent fixed text-[9px] font-medium tracking-[1.54px] leading-[1.65] outline-[0px] text-right no-underline uppercase z-50 border-neutral-900 px-2.5 py-1.5 rounded-xl border-2 border-solid right-3.5 bottom-3.5 md:text-[11px] md:tracking-[1.54px] md:px-3.5 md:py-2.5 md:right-[26px] md:bottom-6">
      <b className="box-border caret-transparent text-red-800 font-medium outline-[0px] no-underline">
        {"HRE"}
        {" → "}
        {"JNB"}
      </b>
      {" · MM-2026"}
      <br />
      {"ALT "}
      {formatAlt(progress)}
      {" FT · "}
      {speed}
      {" KM/H"}
      <br />
      {remaining}
      {" KM TO GO"}
    </div>
  );
};
