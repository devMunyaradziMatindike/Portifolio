import { AwardStamp } from "@/sections/Awards/components/AwardStamp";

export const Awards = () => {
  return (
    <section
      id="pass"
      className="box-border caret-transparent gap-x-0 flex flex-col outline-[0px] gap-y-0 no-underline px-4 py-[100px] md:px-10"
    >
      <div className="box-border caret-transparent text-red-800 text-[11px] tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase mb-4 before:accent-auto before:bg-red-800 before:box-border before:caret-transparent before:text-red-800 before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[2.4px] before:leading-[20.4px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[0px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-7 before:border-separate before:font-dm_mono before:content-['']">
        {"04 · Passport"}
      </div>

      <h2 className="box-border caret-transparent text-[48px] font-bold tracking-[-1.92px] leading-[52.8px] outline-[0px] no-underline mb-12 md:text-[82.432px] md:tracking-[-3.29728px] md:leading-[82.432px] font-bricolage_grotesque">
        {"Stamps "}
        <em className="box-border caret-transparent italic outline-[0px] no-underline font-instrument_serif font-normal">
          {"collected."}
        </em>
      </h2>

      <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] outline-[0px] gap-y-8 no-underline justify-items-center">
        <AwardStamp
          awardLabel="★ CERTIFIED ★"
          placement="OCA"
          eventName="Oracle Java SE 8"
          year="2025"
          imageSrc="./oca-java-se8.png"
          imageAlt="Oracle Certified Associate, Java SE 8 Programmer"
        />
        <AwardStamp
          awardLabel="★ TRAINED ★"
          placement="BE"
          eventName="Node.js Backend"
          year="2023"
        />
        <AwardStamp
          awardLabel="★ MEMBER ★"
          placement="ZIE"
          eventName="ZIE Student"
          year="2024"
        />
      </div>
    </section>
  );
};

export default Awards;
