import { ProjectRow } from "@/sections/Projects/components/ProjectRow";

export const Projects = () => {
  return (
    <section
      id="routes"
      className="relative box-border caret-transparent max-w-[1240px] outline-[0px] mx-auto no-underline px-4 py-20 md:px-10 md:py-[120px]"
    >
      <div className="box-border caret-transparent text-red-800 text-[11px] tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase mb-4 before:accent-auto before:bg-red-800 before:box-border before:caret-transparent before:text-red-800 before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[2.4px] before:leading-[20.4px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[0px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-7 before:border-separate before:font-dm_mono before:content-['']">
        {"03 · Routes"}
      </div>

      <h2 className="box-border caret-transparent text-[42px] font-bold tracking-[-1.68px] leading-[1.05] outline-[0px] no-underline mb-4 md:text-[89.6px] md:tracking-[-3.136px] font-bricolage_grotesque">
        {"Things I've"}{" "}
        <i className="box-border caret-transparent text-red-800 italic outline-[0px] no-underline font-instrument_serif font-normal">
          {"shipped."}
        </i>
      </h2>

      <p className="box-border caret-transparent text-stone-500 text-[15px] leading-[25.5px] outline-[0px] no-underline mb-10 max-w-[640px]">
        {"All products below are built and operated under "}
        <a
          href="https://nessosystems.co.zw"
          target="_blank"
          rel="noreferrer"
          className="box-border caret-transparent text-red-800 outline-[0px] underline underline-offset-2"
        >
          {"Nesso Systems Pvt. Ltd"}
        </a>
        {"."}
      </p>

      <div className="box-border caret-transparent outline-[0px] no-underline border-t-2 border-gray-200 border-solid">
        <ProjectRow
          href="https://musikawedu.com/mufudzi"
          number="01"
          title="Mufudzi"
          status="Nesso · Live"
          description="Livestock tracking technology for farmers — monitor herds and operations in one place."
        />
        <ProjectRow
          href="https://chitopfu.com"
          number="02"
          title="Chitopfu"
          status="Nesso · Live"
          description="Aggregator platform connecting miners with markets, tools and opportunity."
        />
        <ProjectRow
          href="https://pos.bhizimusi.co.zw"
          number="03"
          title="Bhizimusi POS"
          status="Nesso · Live"
          description="Point of sale solution for small businesses — sell, track stock and stay organised."
        />
        <ProjectRow
          href="https://event.bhizimusi.co.zw"
          number="04"
          title="Bhizimusi Events"
          status="Nesso · Live"
          description="Events planner platform for creating, managing and running events end to end."
        />
        <ProjectRow
          href="https://utano263.co.zw"
          number="05"
          title="Utano263"
          status="Nesso · Live"
          description="Complete healthcare ecosystem for clinics, patients and care workflows in Zimbabwe."
        />
      </div>
    </section>
  );
};

export default Projects;
