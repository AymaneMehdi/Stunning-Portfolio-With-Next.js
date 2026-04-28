import { Header } from "@/app/sections/Header";
import { HeroSection } from "@/app/sections/Hero";
import { ProjectsSection } from "@/app/sections/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
