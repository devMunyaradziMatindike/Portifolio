import { DepartureTile } from "@/sections/BoardingOverlay/components/DepartureTile";

export type DepartureRowProps = {
  chars: string[];
  flipping: boolean[];
  offset: number;
};

export const DepartureRow = (props: DepartureRowProps) => {
  return (
    <div className="box-border caret-transparent gap-x-[3px] flex min-h-[auto] min-w-[auto] outline-[0px] gap-y-[3px] no-underline">
      {props.chars.map((char, index) => (
        <DepartureTile
          key={`${props.offset}-${index}`}
          char={char}
          flipping={props.flipping[props.offset + index]}
        />
      ))}
    </div>
  );
};
