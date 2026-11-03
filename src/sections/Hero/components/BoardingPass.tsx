export const BoardingPass = () => {
  return (
    <div className="box-border caret-transparent bg-orange-50 outline-[0px] no-underline relative shadow-[rgb(21,20,15)_9px_9px_0px_0px] rotate-[-3.08deg] rounded-[20px] border-neutral-900 border-2 border-solid overflow-hidden w-full max-w-[320px]">
      <div className="box-border caret-transparent bg-red-800 text-orange-100 flex justify-between outline-[0px] no-underline px-5 py-3.5">
        <span className="box-border caret-transparent block text-[11px] font-medium tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase">
          {"BOARDING PASS"}
        </span>
        <span className="box-border caret-transparent block text-[11px] font-medium tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase">
          {"MM-2026"}
        </span>
      </div>

      <div className="box-border caret-transparent text-[11px] tracking-[1.54px] leading-[18.7px] outline-[0px] relative text-center no-underline border-neutral-900 overflow-hidden m-4 rounded-[18px] border-2 border-solid">
        <img
          src="./munyaprofile1.jpeg"
          alt="Munyaradzi Matindike"
          className="box-border caret-transparent block w-full h-auto outline-[0px] no-underline object-cover aspect-square"
        />
      </div>

      <div className="box-border caret-transparent gap-x-4 grid grid-cols-[1fr_1fr] outline-[0px] gap-y-4 no-underline px-5 pb-2">
        <div className="box-border caret-transparent outline-[0px] no-underline">
          <small className="box-border caret-transparent block text-[9px] tracking-[1.26px] leading-[15.3px] outline-[0px] no-underline uppercase text-stone-500 mb-1">
            {"PASSENGER"}
          </small>
          <b className="box-border caret-transparent block text-[15px] font-bold tracking-[-0.3px] leading-[normal] outline-[0px] no-underline font-bricolage_grotesque">
            {"Munyaradzi Matindike"}
          </b>
        </div>
        <div className="box-border caret-transparent outline-[0px] no-underline">
          <small className="box-border caret-transparent block text-[9px] tracking-[1.26px] leading-[15.3px] outline-[0px] no-underline uppercase text-stone-500 mb-1">
            {"CLASS"}
          </small>
          <b className="box-border caret-transparent block text-[17px] font-bold tracking-[-0.34px] leading-[normal] outline-[0px] no-underline font-bricolage_grotesque">
            {"Technopreneur"}
          </b>
        </div>
        <div className="box-border caret-transparent outline-[0px] no-underline">
          <small className="box-border caret-transparent block text-[9px] tracking-[1.26px] leading-[15.3px] outline-[0px] no-underline uppercase text-stone-500 mb-1">
            {"FROM"}
          </small>
          <b className="box-border caret-transparent block text-[17px] font-bold tracking-[-0.34px] leading-[normal] outline-[0px] no-underline font-bricolage_grotesque">
            {"HRE"}
          </b>
        </div>
        <div className="box-border caret-transparent outline-[0px] no-underline">
          <small className="box-border caret-transparent block text-[9px] tracking-[1.26px] leading-[15.3px] outline-[0px] no-underline uppercase text-stone-500 mb-1">
            {"VIA"}
          </small>
          <b className="box-border caret-transparent block text-[17px] font-bold tracking-[-0.34px] leading-[normal] outline-[0px] no-underline font-bricolage_grotesque">
            {"Nesso Systems"}
          </b>
        </div>
      </div>

      <div className="relative box-border caret-transparent h-[54px] outline-[0px] no-underline mx-5 my-[18px] border-t border-b border-neutral-900/20 border-solid before:accent-auto before:bg-stone-200 before:box-border before:caret-transparent before:text-neutral-900 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-6 before:tracking-[normal] before:leading-[23.8px] before:list-outside before:list-disc before:outline-[0px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:top-[-13px] before:visible before:w-6 before:border-neutral-900 before:rounded-[50%] before:border-separate before:border-2 before:border-solid before:left-3.5 before:font-dm_mono before:content-[''] after:accent-auto after:bg-stone-200 after:box-border after:caret-transparent after:text-neutral-900 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-6 after:tracking-normal after:leading-[23.8px] after:list-outside after:list-disc after:outline-[0px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:top-[-13px] after:visible after:w-6 after:border-neutral-900 after:rounded-[50%] after:border-separate after:border-2 after:border-solid after:right-3.5 after:font-dm_mono after:content-['']">
        <div className="box-border caret-transparent h-full outline-[0px] no-underline bg-[repeating-linear-gradient(90deg,rgba(21,20,15,0.35)_0px,rgba(21,20,15,0.35)_2px,rgba(0,0,0,0)_2px,rgba(0,0,0,0)_16px)]"></div>
      </div>
    </div>
  );
};
