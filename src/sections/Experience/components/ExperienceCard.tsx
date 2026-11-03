export type ExperienceCardProps = {
  stepNumber: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
};

export const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <div className="box-border caret-transparent bg-orange-50 outline-[0px] no-underline relative rounded-2xl border-neutral-900 border-2 border-solid px-7 py-8 mb-[22px] md:pl-[34px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-5 before:tracking-normal before:leading-[23.8px] before:list-outside before:list-disc before:outline-[0px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-5 before:border-neutral-900 before:rounded-[50%] before:border-separate before:border-2 before:border-solid before:-left-3 before:top-[38px] before:font-dm_mono before:content-['']">
      <small className="box-border caret-transparent block text-red-800 text-[11px] tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase mb-3">
        {"STOP "}
        {props.stepNumber}
      </small>
      <h3 className="box-border caret-transparent text-2xl font-bold tracking-[-0.72px] leading-[normal] outline-[0px] no-underline mb-1 md:text-4xl md:tracking-[-1.08px] font-bricolage_grotesque">
        {props.title}
      </h3>
      <div className="box-border caret-transparent text-stone-500 text-[13px] leading-[22.1px] outline-[0px] no-underline mb-4">
        {props.company}
      </div>
      <p className="box-border caret-transparent text-[15px] leading-[25.5px] max-w-[620px] outline-[0px] no-underline mb-5">
        {props.description}
      </p>
      <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[0px] gap-y-2 no-underline">
        {props.technologies.map((technology) => (
          <span
            key={technology}
            className="box-border caret-transparent block text-[11px] tracking-[1.1px] leading-[18.7px] outline-[0px] no-underline uppercase border-neutral-900 px-3 py-1.5 rounded-[99px] border border-solid"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};
