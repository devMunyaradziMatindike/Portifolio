export type ProjectRowProps = {
  href?: string;
  number: string;
  title: string;
  status: string;
  description: string;
};

export const ProjectRow = (props: ProjectRowProps) => {
  const content = (
    <>
      <span className="box-border caret-transparent block text-red-800 text-xs tracking-[1.68px] leading-[20.4px] outline-[0px] no-underline uppercase">
        {props.number}
      </span>
      <h3 className="box-border caret-transparent text-[26px] font-bold tracking-[-1.04px] leading-[normal] outline-[0px] no-underline md:text-[58.88px] md:tracking-[-2.3552px] font-bricolage_grotesque">
        {props.title}
      </h3>
      <span className="box-border caret-transparent text-xs tracking-[1.68px] leading-[20.4px] outline-[0px] no-underline uppercase hidden md:block">
        {props.status}
      </span>
      <p className="box-border caret-transparent text-stone-500 text-[13px] leading-[22.1px] outline-[0px] no-underline hidden md:block">
        {props.description}
      </p>
      <span className="box-border caret-transparent relative block h-[15px] outline-[0px] no-underline w-[15px] justify-self-end before:accent-auto before:border-neutral-400 before:box-border before:caret-transparent before:text-neutral-400 before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:h-[15px] before:tracking-[normal] before:leading-[23.8px] before:list-outside before:list-disc before:outline-[0px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[15px] before:border-r-2 before:border-t-2 before:border-separate before:border-solid before:right-[5px] before:top-[5px] before:font-dm_mono before:content-[''] after:accent-auto after:bg-neutral-900 after:box-border after:caret-transparent after:text-neutral-400 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[23.8px] after:list-outside after:list-disc after:outline-[0px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:-rotate-45 after:origin-[100%_50%] after:visible after:w-5 after:border-separate after:right-1.5 after:top-[7px] after:font-dm_mono after:content-['']"></span>
    </>
  );

  const rowClassName =
    "box-border caret-transparent gap-x-4 grid grid-cols-[40px_1fr_30px] items-center outline-[0px] gap-y-2 no-underline py-6 border-b border-neutral-900/20 border-solid md:grid-cols-[60px_minmax(0px,2.4fr)_minmax(0px,1.5fr)_minmax(0px,1.6fr)_40px]";

  if (props.href) {
    return (
      <a href={props.href} className={rowClassName}>
        {content}
      </a>
    );
  }

  return <div className={rowClassName}>{content}</div>;
};
