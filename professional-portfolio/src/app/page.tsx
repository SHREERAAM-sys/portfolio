import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider />
    <About />
    <SectionDivider />
    <Skills />
    </main>
  );
}
