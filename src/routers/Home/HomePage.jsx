import BrandIconsSlider from "./../../components/home/BrandIconsSlider";
import HeroSection from "./../../components/home/HeroSection";
import Services from "./../../components/home/Services";
import ResumeSec from "./../../components/home/ResumeSec";
import BlogList from "./../../components/home/BlogList";
import AboutSection from "./../../components/home/AboutSection";
import EcsinessLines from "./../../components/home/EcsinessLines";

export default function HomePage() {
  return (
    <>
      {/* hero section */}
      <HeroSection />
      {/* Brand icons slider */}
      <BrandIconsSlider />
      {/* about us */}
      <AboutSection />
      {/* Ecsiness line's */}
      <EcsinessLines />
      {/* services */}
      <Services />
      {/* resume */}
      <ResumeSec />
      {/* blog card list */}
      <BlogList />
    </>
  );
}
