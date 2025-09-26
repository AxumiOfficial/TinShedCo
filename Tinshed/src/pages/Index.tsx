import HeroSection from "@/components/ui/hero-section";
import GallerySection from "@/components/ui/gallery-section";
import LocationSection from "@/components/ui/location-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GallerySection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
