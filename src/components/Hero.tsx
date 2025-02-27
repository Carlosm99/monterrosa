import ParticlesCanvas from "@/components/Particles";
import Scroll from "@/components/Scroll";
import { CalendarDays, ChevronRight } from "lucide-react";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      <ParticlesCanvas />

      <a
        href="https://cal.com/carlos-monterrosa-pjvcr9"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-opacity-20 backdrop-blur-sm bg-green-800 border border-green-900 rounded-full p-1 mb-28 animate-schedule"
      >
        <div className="pl-3">
          <CalendarDays className="text-green-700" />
        </div>
        <div className="px-2 text-white">Schedule a call</div>

        <div className="rounded-full p-0.5 hover:bg-gray-600 bg-black/30 border border-white/40">
          <ChevronRight className="text-white" />
        </div>
      </a>

      <div className="hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="py-3.5 md:py-0 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-8xl whitespace-nowrap bg-clip-text ">
        Carlos Monterrosa
      </h1>
      <div className="hidden w-screen h-px md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="mt-16 text-center animate-fade-in">
        <h2 className="text-[17px] text-zinc-500 ">
          I&apos;m building the technologies that empower businesses to grow and thrive.
        </h2>
      </div>
      <Scroll />
    </div>
  );
};

export default Hero;
