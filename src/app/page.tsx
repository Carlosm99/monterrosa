import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <section id="about">
        <About />
      </section>
      <section className="mt-24 md:mt-44">
        <Experience />
      </section>
    </main>
  );
}
