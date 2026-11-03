export const Contact = () => {
  return (
    <section
      id="arrive"
      className="box-border caret-transparent gap-x-0 flex flex-col outline-[0px] gap-y-0 no-underline px-4 py-[100px] md:px-10"
    >
      <div className="box-border caret-transparent mx-auto max-w-[1248px] outline-[0px] no-underline w-full text-center">
        <div className="box-border caret-transparent text-red-800 text-[11px] tracking-[1.54px] leading-[18.7px] outline-[0px] no-underline uppercase mb-4 before:accent-auto before:bg-red-800 before:box-border before:caret-transparent before:text-red-800 before:block before:text-xs before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[2.4px] before:leading-[20.4px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[0px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:uppercase before:visible before:w-7 before:border-separate before:font-dm_mono before:content-[''] before:mx-auto">
          {"05 · Arrival"}
        </div>

        <h2 className="box-border caret-transparent text-[56px] font-normal tracking-[-1.68px] leading-[50.4px] outline-[0px] no-underline mb-10 md:text-[153.6px] md:tracking-[-4.608px] md:leading-[138.24px] font-instrument_serif">
          {"You've arrived."}
        </h2>

        <a
          href="mailto:mmatindike@outlook.com"
          className="box-border caret-transparent inline-block text-[22px] font-bold tracking-[-0.66px] leading-[normal] outline-[0px] no-underline border-b-red-800 border-l-transparent border-r-transparent border-t-transparent border-b-2 border-solid mb-4 font-bricolage_grotesque md:text-[44px] md:tracking-[-1.32px] hover:text-red-800 hover:border-l-red-800 hover:border-r-red-800 hover:border-t-red-800"
        >
          {"mmatindike@outlook.com"}
        </a>

        <div className="box-border caret-transparent gap-x-3 flex flex-wrap justify-center outline-[0px] gap-y-3 no-underline mt-12">
          <a
            href="https://nessosystems.co.zw"
            target="_blank"
            rel="noreferrer"
            className="box-border caret-transparent block text-xs font-medium uppercase outline-[0px] no-underline text-white bg-neutral-900 border-neutral-900 px-[20px] py-3.5 rounded-[99px] border-2 border-solid hover:text-white hover:bg-red-800 hover:border-red-800"
          >
            {"Nesso Systems"}
          </a>
          <a
            href="https://github.com/devMunyaradziMatindike"
            target="_blank"
            rel="noreferrer"
            className="box-border caret-transparent block text-xs font-medium uppercase outline-[0px] no-underline border-neutral-900 px-[20px] py-3.5 rounded-[99px] border-2 border-solid hover:text-white hover:bg-red-800 hover:border-red-800"
          >
            {"GitHub"}
          </a>
          <a
            href="https://www.linkedin.com/in/munyaradzi-matindike-864884222"
            target="_blank"
            rel="noreferrer"
            className="box-border caret-transparent block text-xs font-medium uppercase outline-[0px] no-underline border-neutral-900 px-[20px] py-3.5 rounded-[99px] border-2 border-solid hover:text-white hover:bg-red-800 hover:border-red-800"
          >
            {"LinkedIn"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
