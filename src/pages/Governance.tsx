import GovernanceSection from "@/components/GovernanceSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const Governance = () => {
  return (
    <div className="bg-[#F9F9F7] min-h-screen text-[#0F120F]">
      <Header />
      <div className="fixed top-0 left-0 w-full h-20 sm:h-24 bg-[#0a0c0a] z-40" aria-hidden="true" />
      <GovernanceSection />
      <Footer />
    </div>
  );
};

export default Governance;
