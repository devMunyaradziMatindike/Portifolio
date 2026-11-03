export const Footer = () => {
  return (
    <footer className="border-b-gray-200 border-l-gray-200 border-r-gray-200 border-t-neutral-900 box-border caret-transparent text-stone-500 gap-x-2.5 flex flex-wrap text-[11px] justify-between tracking-[1.54px] leading-[18.7px] outline-[0px] relative gap-y-2.5 no-underline uppercase z-[2] ml-0 px-[22px] py-6 border-t-2 border-solid md:ml-[38.4px] md:px-[60px] md:py-[38px]">
      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[0px] no-underline">
        {"© 2026 Munyaradzi Matindike · Nesso Systems"}
      </span>
      <a
        href="https://nessosystems.co.zw"
        target="_blank"
        rel="noreferrer"
        className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[0px] no-underline hover:text-red-800"
      >
        {"Flight MM-2026 · nessosystems.co.zw"}
      </a>
    </footer>
  );
};

export default Footer;
