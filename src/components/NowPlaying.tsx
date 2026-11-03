import { useEffect, useState } from "react";
import { audioPlayer } from "@/lib/audioPlayer";
import { TRACKS } from "@/lib/tracks";

const Icon = (props: { d: string }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
    <path d={props.d} />
  </svg>
);

export const NowPlaying = () => {
  const [, tick] = useState(0);

  useEffect(() => {
    return audioPlayer.sub(() => tick((n) => n + 1));
  }, []);

  return (
    <div
      className={`now-playing box-border caret-transparent fixed top-[22px] right-[14px] z-[60] flex items-center gap-3 outline-[0px] no-underline bg-orange-50 border-neutral-900 rounded-[99px] border-2 border-solid py-1.5 pr-2 pl-1.5 shadow-[rgb(21,20,15)_4px_4px_0px_0px] md:right-[26px] ${audioPlayer.playing ? "is-playing" : ""}`}
    >
      <button
        type="button"
        aria-label="Play or pause"
        onClick={() => audioPlayer.toggle()}
        className="box-border caret-transparent flex h-[38px] w-[38px] items-center justify-center outline-[0px] no-underline rounded-full border-0 bg-neutral-900 text-stone-200 hover:bg-red-800"
      >
        <Icon
          d={
            audioPlayer.playing
              ? "M6 5h4v14H6zM14 5h4v14h-4z"
              : "M8 5v14l11-7z"
          }
        />
      </button>

      <div className="box-border caret-transparent outline-[0px] no-underline min-w-0 md:min-w-[128px]">
        <small className="box-border caret-transparent hidden text-[9px] tracking-[1.44px] leading-[1.3] outline-[0px] no-underline uppercase text-stone-500 md:block">
          {"Now playing · "}
          {audioPlayer.index + 1}
          {"/"}
          {TRACKS.length}
        </small>
        <b className="box-border caret-transparent block text-[13px] font-bold tracking-[-0.13px] leading-[1.2] outline-[0px] no-underline whitespace-nowrap font-bricolage_grotesque truncate max-w-[104px] md:max-w-none">
          {audioPlayer.track.name}
        </b>
      </div>

      <div className="eq box-border caret-transparent flex items-end gap-0.5 h-[18px] outline-[0px] no-underline" aria-hidden>
        <i />
        <i />
        <i />
        <i />
      </div>

      <button
        type="button"
        aria-label="Next song"
        onClick={() => audioPlayer.next(true)}
        className="box-border caret-transparent flex h-[38px] w-[38px] items-center justify-center outline-[0px] no-underline rounded-full border-0 bg-neutral-900 text-stone-200 hover:bg-red-800"
      >
        <Icon d="M6 6l9 6-9 6zM17 6h2v12h-2z" />
      </button>
    </div>
  );
};
