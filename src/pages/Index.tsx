import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import G4Section from "@/components/G4Section";
import BusinessGrid from "@/components/BusinessGrid";
import ImpactSection from "@/components/TimelineSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a1f1a] flex flex-col">
      <Header />
      <HeroSection />
      <G4Section />
      <BusinessGrid />
      <ImpactSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
