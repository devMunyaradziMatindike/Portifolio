export type AboutStatProps = {
  value: string;
  label: string;
};

export const AboutStat = (props: AboutStatProps) => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[0px] no-underline">
      <b className="box-border caret-transparent block text-[56px] font-bold tracking-[-2.24px] leading-[56px] outline-[0px] no-underline font-bricolage_grotesque">
        {props.value}
      </b>
      <span className="box-border caret-transparent text-stone-500 text-[11px] tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase">
        {props.label}
      </span>
    </div>
  );
};
