import { FlightSky } from "@/components/FlightSky";
import { FlightStatus } from "@/components/FlightStatus";
import { NowPlaying } from "@/components/NowPlaying";
import { About } from "@/sections/About";
import { Awards } from "@/sections/Awards";
import { BoardingOverlay } from "@/sections/BoardingOverlay";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { FlightNavigation } from "@/sections/FlightNavigation";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";

export const App = () => {
  return (
    <div className="film-grain relative text-sm not-italic font-normal bg-[#efe9dc] box-border caret-transparent text-neutral-800 block tracking-[normal] leading-[23.8px] list-outside list-disc min-h-full outline-[0px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-dm_mono">
      <BoardingOverlay />
      <FlightSky />
      <NowPlaying />
      <FlightNavigation />
      <FlightStatus />
      <main className="relative box-border caret-transparent block outline-[0px] no-underline z-[2]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
