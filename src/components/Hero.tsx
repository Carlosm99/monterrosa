import ParticlesCanvas from "@/components/Particles";
import Scroll from "@/components/Scroll";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      <ParticlesCanvas />

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
