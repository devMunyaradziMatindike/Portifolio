export type NavigationStopProps = {
  href: string;
  label: string;
  active: boolean;
  position: string;
  compact: boolean;
};

export const NavigationStop = (props: NavigationStopProps) => {
  return (
    <a
      href={props.href}
      className={`box-border caret-transparent block h-3 outline-[0px] absolute no-underline w-3 z-[2] -ml-1.5 -mt-1.5 rounded-[50%] border-2 border-solid ${props.active ? "bg-red-800 border-red-800" : "bg-stone-200 border-neutral-900"}`}
      style={
        props.compact
          ? { left: props.position, top: 0 }
          : { top: props.position, left: -5 }
      }
    >
      <em
        className={`box-border caret-transparent block text-[9px] font-medium tracking-[1.08px] leading-[normal] outline-[0px] absolute no-underline md:text-[10px] md:tracking-[1.2px] ${props.compact ? "translate-x-[-50%] left-1/2 top-3.5" : "top-[-5px] left-5"} ${props.active ? "text-red-800" : "text-stone-500"}`}
      >
        {props.label}
      </em>
    </a>
  );
};
