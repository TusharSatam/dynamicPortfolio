import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import SectionLayout from "@/components/SectionLayout/SectionLayout";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col h-full relative ">
      <div className="sticky top-0 z-[100] bg-white">
      <Navbar />
      </div>
      <div className="h-full px-[1rem] lg:px-0 w-full md:w-[90vw] xl:w-[1300px] mx-auto flex flex-col">
        <Hero />
        <SectionLayout />
      </div>
    </main>
  );
}
