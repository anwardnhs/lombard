import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import G4Section from "@/components/G4Section";
import ImpactSection from "@/components/TimelineSection";
import NewsSection from "@/components/NewsSection";
import CEOLetterWidget from "@/components/CEOLetterWidget";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a1f1a] flex flex-col relative">
      <Header />
      <HeroSection />
      <G4Section />
      <ImpactSection />
      <NewsSection />
      <Footer />
      <CEOLetterWidget />
    </div>
  );
};

export default Index;
