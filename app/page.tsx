import BlogSection from "@/components/sections/blog-section";
import HeroSection from "../components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import InfoSection from "@/components/sections/info-section";
import MissionSection from "@/components/sections/mission-section";
import CharacteristicsSection from "@/components/sections/characteristics-section";

export const revalidate = 15;

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BlogSection />
      <AboutSection />
      <InfoSection />
      <MissionSection />
      <CharacteristicsSection />
    </main>
  );
}
