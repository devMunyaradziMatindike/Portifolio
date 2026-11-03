export type DepartureTileProps = {
  char?: string;
  flipping?: boolean;
};

export const DepartureTile = (props: DepartureTileProps) => {
  const char = props.char && props.char !== "\u00a0" ? props.char : "\u00a0";

  return (
    <i
      className={`items-center bg-stone-800 shadow-[rgb(14,13,9)_0px_-3px_0px_0px_inset] box-border caret-transparent grid text-sm font-extrabold h-[26px] justify-items-center leading-[normal] min-h-[auto] min-w-[auto] outline-[0px] relative no-underline w-[17px] overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr text-orange-100 md:text-[40px] md:h-20 md:w-[52px] after:accent-auto after:bg-stone-950 after:box-border after:caret-transparent after:text-orange-100 after:block after:text-sm after:not-italic after:normal-nums after:font-extrabold after:h-0.5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[0px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:top-2/4 after:inset-x-0 after:font-dm_mono after:md:text-[40px] after:content-[''] ${props.flipping ? "animate-pulse" : ""}`}
    >
      <b className="box-border caret-transparent block text-sm font-black min-h-[auto] min-w-[auto] outline-[0px] no-underline md:text-[40px]">
        {char}
      </b>
    </i>
  );
};
