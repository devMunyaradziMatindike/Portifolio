import { DepartureRow } from "@/sections/BoardingOverlay/components/DepartureRow";

export const BOARD_ROWS = ["NESSO SYSTEMS", "TECHNOPRENEUR", "HARARE ZW"] as const;

export const BOARD_OFFSETS = BOARD_ROWS.map((_, index) =>
  BOARD_ROWS.slice(0, index).reduce((sum, row) => sum + row.length, 0),
);

export type DepartureBoardProps = {
  chars: string[];
  flipping: boolean[];
};

export const DepartureBoard = (props: DepartureBoardProps) => {
  return (
    <div className="items-center box-border caret-transparent gap-x-3 flex flex-col min-h-[auto] min-w-[auto] outline-[0px] gap-y-3 no-underline">
      {BOARD_ROWS.map((row, index) => {
        const offset = BOARD_OFFSETS[index]!;
        return (
          <DepartureRow
            key={row}
            offset={offset}
            chars={props.chars.slice(offset, offset + row.length)}
            flipping={props.flipping}
          />
        );
      })}
    </div>
  );
};
