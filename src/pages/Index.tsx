import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import Welcome from "../components/Welcome";
import Services from "../components/Services";
import ClientLogos from "../components/ClientLogos";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import TestimonialsWhyChoose from "../components/TestimonialsWhyChoose";
import News from "../components/News";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <Welcome /> 
      <Services />
      <Stats />
      <TestimonialsWhyChoose />
      <ClientLogos />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
