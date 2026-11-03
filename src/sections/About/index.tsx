import { AboutStat } from "@/sections/About/components/AboutStat";
import { SkillRow } from "@/sections/About/components/SkillRow";

export const About = () => {
  return (
    <section
      id="about"
      className="box-border caret-transparent gap-x-0 flex flex-col outline-[0px] gap-y-0 no-underline px-4 py-[100px] md:px-10"
    >
      <div className="box-border caret-transparent text-stone-500 text-[11px] tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase mb-4 before:accent-auto before:bg-red-800 before:box-border before:caret-transparent before:text-red-800 before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[2.4px] before:leading-[20.4px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[0px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-7 before:border-separate before:font-dm_mono before:content-['']">
        {"01 · About"}
      </div>

      <p className="box-border caret-transparent text-[32px] font-medium tracking-[-0.64px] leading-[41.6px] max-w-[920px] outline-[0px] no-underline mb-16 md:text-[56.32px] md:tracking-[-1.1264px] md:leading-[65.0784px] font-bricolage_grotesque">
        {"I'm a technopreneur and co-founder of "}
        <a
          href="https://nessosystems.co.zw"
          target="_blank"
          rel="noreferrer"
          className="box-border caret-transparent text-red-800 italic outline-[0px] underline underline-offset-4 font-instrument_serif"
        >
          {"Nesso Systems"}
        </a>
        {
          " — building and shipping products for farmers, miners, clinics and small businesses. Every route below flies under that banner."
        }
      </p>

      <div className="box-border caret-transparent gap-x-10 grid grid-cols-1 outline-[0px] gap-y-10 no-underline md:grid-cols-[1fr_1.2fr]">
        <div className="box-border caret-transparent text-stone-500 grid text-[11px] justify-items-center tracking-[1.54px] leading-[18.7px] outline-[0px] relative text-center no-underline border-neutral-900 overflow-hidden rounded-[10px] border-2 border-solid rotate-[2.508812778830864deg] border-neutral-900/20 pt-3.5 pb-11 px-3.5 after:accent-auto after:box-border after:caret-transparent after:text-neutral-900 after:block after:text-xl after:italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[0px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:bottom-3 after:inset-x-0 after:font-instrument_serif after:content-['Nesso_Systems'] shadow-[rgb(21,20,15)_10px_10px_0px]">
          <img
            src="./munyaprofile1.jpeg"
            alt="Munyaradzi Matindike"
            className="box-border caret-transparent block w-full h-auto outline-[0px] no-underline object-cover rounded-sm"
          />
        </div>

        <div className="box-border caret-transparent flex flex-col outline-[0px] no-underline">
          <div className="box-border caret-transparent gap-x-8 flex outline-[0px] gap-y-8 no-underline mb-10">
            <AboutStat value="5+" label="Nesso products" />
            <AboutStat value="1" label="Company founded" />
            <AboutStat value="2353+" label="Businesses helped" />
          </div>

          <div className="box-border caret-transparent flex flex-col outline-[0px] no-underline">
            <SkillRow
              title="Frontend"
              skills="React, PHP, Kotlin, Android"
            />
            <SkillRow
              title="Backend"
              skills="C#, .NET Core, Node.js, APIs"
            />
            <SkillRow
              title="Industries"
              skills="AgriTech, Mining, Commerce, Health"
            />
            <SkillRow
              title="Also"
              skills="Mechatronics, AI, Product strategy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
