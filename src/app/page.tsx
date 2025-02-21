import ParticlesCanvas from "@/components/Particles";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <ParticlesCanvas />

      <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text text-center">
        I love you Shivani <span className="text-red-600">❤️</span>
      </h1>
    </div>
  );
}