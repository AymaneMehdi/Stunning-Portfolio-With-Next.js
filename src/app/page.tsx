import { Header } from "@/app/sections/Header";
import { HeroSection } from "@/app/sections/Hero";
import { ProjectsSection } from "@/app/sections/Projects";
import { TapeSection } from "@/app/sections/Tape";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
    </div>
  );
}
