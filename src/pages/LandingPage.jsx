import Navbar from "../component/Navbar";
import FeatureCard from "../sections/FeaturesCard";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureCard />
      <Footer />
    </main>
  );
};

export default LandingPage;
