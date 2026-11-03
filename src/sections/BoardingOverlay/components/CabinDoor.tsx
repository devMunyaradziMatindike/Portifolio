export type CabinDoorProps = {
  open: boolean;
  hidden: boolean;
  onOpen: () => void;
};

export const CabinDoor = (props: CabinDoorProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent flex flex-col justify-center outline-[0px] no-underline relative w-full transition-opacity duration-500 ${props.hidden ? "opacity-0 pointer-events-none absolute" : ""}`}
    >
      <small className="box-border caret-transparent block text-[10px] tracking-[2px] leading-[17px] outline-[0px] no-underline uppercase mb-6 text-center text-[#cfc6b4]">
        {"FLIGHT MM-2026 · NOW BOARDING"}
      </small>

      <button
        type="button"
        id="dd"
        aria-label="Open cabin door"
        onClick={(event) => {
          event.stopPropagation();
          props.onOpen();
        }}
        className={`items-center box-border caret-transparent flex flex-col justify-center outline-[0px] no-underline relative w-[247.5px] md:w-[290px] aspect-[0.72] rounded-t-[140px] rounded-b-3xl overflow-hidden border-0 cursor-pointer transition-all duration-700 ${props.open ? "scale-105 brightness-110" : ""}`}
        style={{
          background:
            "radial-gradient(at 50% 35%, rgb(255,231,184) 0%, rgb(255,155,92) 55%, rgb(189,36,16) 100%)",
          boxShadow: "rgb(216,208,187) 0px 0px 2px 9px",
        }}
      >
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 box-border caret-transparent h-[42px] w-[28px] rounded-full bg-[#0b1c3a] shadow-[inset_0_4px_10px_rgba(0,0,0,0.55)] outline-[0px]" />
        <div
          className={`absolute right-[14%] top-[42%] box-border caret-transparent h-[18px] w-[46px] rounded-full bg-red-900 outline-[0px] transition-transform duration-500 ${props.open ? "translate-x-3" : ""}`}
        />

        <b className="box-border caret-transparent block text-[28px] font-bold tracking-[-1.12px] leading-[28px] outline-[0px] no-underline text-center md:text-[34px] md:leading-[34px] font-bricolage_grotesque text-neutral-900 mt-8">
          {"Welcome aboard"}
        </b>
        <span className="box-border caret-transparent block text-[11px] tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase mt-3 text-center text-neutral-900/80 min-h-[19px]">
          {props.open ? "Press anything to continue" : ""}
        </span>

        <div className="absolute bottom-[14%] inset-x-0 box-border caret-transparent flex flex-col items-center outline-[0px] no-underline z-[5]">
          <em className="box-border caret-transparent block text-[11px] italic tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase text-center font-instrument_serif text-neutral-900/70">
            {"PULL TO OPEN"}
          </em>
        </div>
      </button>

      <small className="box-border caret-transparent block text-[10px] tracking-[2px] leading-[17px] outline-[0px] no-underline uppercase mt-6 text-center text-[#cfc6b4]">
        {props.open ? "Cabin door open" : "Click the door to open it"}
      </small>
    </div>
  );
};
