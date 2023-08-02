import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";

const Home = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Home;
