export type AwardStampProps = {
  awardLabel: string;
  placement: string;
  eventName: string;
  year: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const AwardStamp = (props: AwardStampProps) => {
  if (props.imageSrc) {
    return (
      <div className="items-center box-border caret-transparent flex flex-col h-[250px] justify-center outline-[0px] relative text-center no-underline w-[250px]">
        <img
          src={props.imageSrc}
          alt={props.imageAlt ?? props.eventName}
          className="box-border caret-transparent block max-h-[220px] max-w-full outline-[0px] no-underline object-contain drop-shadow-[0_8px_16px_rgba(21,20,15,0.18)]"
        />
        <em className="box-border caret-transparent block text-sm italic outline-[0px] no-underline font-instrument_serif mt-2 text-stone-500">
          {props.year}
        </em>
      </div>
    );
  }

  return (
    <div className="items-center box-border caret-transparent flex flex-col h-[250px] justify-center outline-[0px] relative text-center no-underline w-[250px] border-red-800 p-[34px] rounded-[50%] border-4 border-solid before:accent-auto before:box-border before:caret-transparent before:text-red-800 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[23.8px] before:list-outside before:list-disc before:outline-[0px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-red-800 before:rounded-[50%] before:border-separate before:border-2 before:border-dashed before:inset-[9px] before:font-dm_mono before:content-['']">
      <small className="box-border caret-transparent block text-[10px] tracking-[1.4px] leading-[17px] outline-[0px] no-underline uppercase">
        {props.awardLabel}
      </small>
      <b className="box-border caret-transparent block text-[54px] font-extrabold tracking-[-2.16px] leading-[54px] outline-[0px] no-underline my-1 font-bricolage_grotesque">
        {props.placement}
      </b>
      <h3 className="box-border caret-transparent text-[15px] font-bold tracking-[0.3px] leading-[normal] outline-[0px] no-underline uppercase font-bricolage_grotesque">
        {props.eventName}
      </h3>
      <em className="box-border caret-transparent block text-lg italic outline-[0px] no-underline font-instrument_serif">
        {props.year}
      </em>
    </div>
  );
};
