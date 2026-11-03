import { BoardingPass } from "@/sections/Hero/components/BoardingPass";

const firstName = "Munyaradzi".split("");
const lastName = "Matindike".split("");

export const Hero = () => {
  return (
    <section
      id="hero"
      className="box-border caret-transparent gap-x-[34px] grid grid-cols-1 outline-[0px] gap-y-10 no-underline min-h-[1080px] px-4 pt-[158px] pb-20 md:grid-cols-[minmax(0px,1.5fr)_minmax(0px,1fr)] md:px-10 md:pt-[150px]"
    >
      <div className="box-border caret-transparent flex flex-col outline-[0px] no-underline">
        <h1
          aria-label="Munyaradzi Matindike"
          className="box-border caret-transparent text-[36px] font-bold tracking-[-1.4px] leading-[1.05] outline-[0px] no-underline uppercase mb-6 md:text-[72px] md:tracking-[-2.88px] font-unbounded"
        >
          {firstName.map((letter, index) => (
            <span
              key={`f-${index}`}
              className="box-border caret-transparent inline-block outline-[0px] no-underline"
            >
              {letter}
            </span>
          ))}
          <br className="box-border caret-transparent outline-[0px] no-underline" />
          {lastName.map((letter, index) => (
            <span
              key={`l-${index}`}
              className="box-border caret-transparent inline-block outline-[0px] no-underline"
            >
              {letter}
            </span>
          ))}
        </h1>

        <p className="box-border caret-transparent text-[22px] leading-[30.8px] outline-[0px] no-underline mb-4 max-w-[620px] md:text-[28px] md:leading-[39.2px] font-instrument_serif">
          {"Technopreneur building "}
          <span className="box-border caret-transparent outline-[0px] no-underline decoration-red-800 underline underline-offset-4">
            {"products that ship"}
          </span>
          {" — agriculture, mining, commerce and health."}
        </p>

        <p className="box-border caret-transparent text-stone-500 text-xs tracking-[1.68px] leading-[20.4px] outline-[0px] no-underline uppercase mb-10">
          {"Harare, Zimbabwe · Co-founder, Nesso Systems"}
        </p>

        <div className="box-border caret-transparent gap-x-3 flex flex-wrap outline-[0px] gap-y-3 no-underline">
          <a
            href="#routes"
            className="box-border caret-transparent block text-xs font-medium uppercase outline-[0px] no-underline text-white bg-neutral-900 border-neutral-900 px-[22px] py-3.5 rounded-[99px] border-2 border-solid hover:bg-red-800 hover:border-red-800"
          >
            {"See the routes"}
          </a>
          <a
            href="https://nessosystems.co.zw"
            target="_blank"
            rel="noreferrer"
            className="box-border caret-transparent block text-xs font-medium uppercase outline-[0px] no-underline border-neutral-900 px-[22px] py-3.5 rounded-[99px] border-2 border-solid hover:text-white hover:bg-red-800 hover:border-red-800"
          >
            {"Nesso Systems"}
          </a>
        </div>
      </div>

      <div className="box-border caret-transparent flex justify-center outline-[0px] no-underline md:justify-end md:items-start">
        <BoardingPass />
      </div>
    </section>
  );
};

export default Hero;
