import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import StudioSection from "./components/StudioSection";
import PhilosophySection from "./components/PhilosophySection";
import NowBuildingSection from "./components/NowBuildingSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950">
      <Nav />
      <HeroSection />
      <ProductsSection />
      <StudioSection />
      <PhilosophySection />
      <NowBuildingSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
