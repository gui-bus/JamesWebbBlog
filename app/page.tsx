import BlogSection from "@/components/sections/blog-section";
import HeroSection from "../components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";

export const revalidate = 15;

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BlogSection />
      <AboutSection />
    </main>
  );
}
