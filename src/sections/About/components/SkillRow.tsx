export type SkillRowProps = {
  title: string;
  skills: string;
};

export const SkillRow = (props: SkillRowProps) => {
  return (
    <div className="items-baseline box-border caret-transparent gap-x-3 flex outline-[0px] gap-y-3 no-underline py-3">
      <b className="box-border caret-transparent block text-xl font-bold tracking-[-0.2px] leading-[normal] min-h-[auto] min-w-[auto] outline-[0px] no-underline font-bricolage_grotesque">
        {props.title}
      </b>
      <i className="border-b-neutral-900 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent block basis-[0%] grow italic min-h-[auto] min-w-[auto] opacity-30 outline-[0px] no-underline -translate-y-1 border-b-2"></i>
      <span className="box-border caret-transparent text-stone-500 block text-[13px] leading-[22.1px] max-w-[55%] min-h-[auto] min-w-[auto] outline-[0px] text-right no-underline">
        {props.skills}
      </span>
    </div>
  );
};
