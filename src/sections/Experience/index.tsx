import { ExperienceCard } from "@/sections/Experience/components/ExperienceCard";

export const Experience = () => {
  return (
    <section
      id="line"
      className="box-border caret-transparent gap-x-0 flex flex-col outline-[0px] gap-y-0 no-underline px-4 py-[100px] md:px-10"
    >
      <div className="box-border caret-transparent text-red-800 text-[11px] tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase mb-4 before:accent-auto before:bg-red-800 before:box-border before:caret-transparent before:text-red-800 before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[2.4px] before:leading-[20.4px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[0px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-7 before:border-separate before:font-dm_mono before:content-['']">
        {"02 · The line"}
      </div>

      <h2 className="box-border caret-transparent text-[48px] font-bold tracking-[-1.92px] leading-[52.8px] outline-[0px] no-underline mb-4 md:text-[89.6px] md:tracking-[-3.584px] md:leading-[98.56px] font-bricolage_grotesque">
        {"Every "}
        <i className="box-border caret-transparent italic outline-[0px] no-underline font-instrument_serif font-normal">
          {"step"}
        </i>
        {" so far."}
      </h2>

      <p className="box-border caret-transparent text-stone-500 text-[15px] leading-[25.5px] outline-[0px] no-underline mb-12 max-w-[620px]">
        {
          "From engineering roles to founding Nesso Systems — building products that serve Zimbabwe’s real economy."
        }
      </p>

      <div className="box-border caret-transparent flex flex-col outline-[0px] no-underline relative pl-6 border-l-2 border-neutral-900/20 border-solid">
        <ExperienceCard
          stepNumber="01"
          title="Co-founder & Technopreneur"
          company="Nesso Systems Pvt. Ltd"
          description="Founded and lead product across livestock tracking, mining aggregation, POS, events and healthcare — shipping platforms used by farmers, miners, clinics and small businesses."
          technologies={["Product", "Full-stack", "Strategy"]}
        />
        <ExperienceCard
          stepNumber="02"
          title="Software Engineer"
          company="Axis Solutions"
          description="Designed and shipped custom software for clients across fintech, operations and digital products in Harare."
          technologies={["C#", ".NET", "PHP", "APIs"]}
        />
        <ExperienceCard
          stepNumber="03"
          title="Software Developer"
          company="Axis Solutions Africa"
          description="Built and maintained client systems, turning product requirements into reliable web and backend services."
          technologies={[".NET", "Web", "SQL"]}
        />
      </div>
    </section>
  );
};

export default Experience;
