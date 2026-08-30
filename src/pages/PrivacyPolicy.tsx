import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-[#F9F9F7] font-poppins text-[#0F120F]">
    <Header />
    <main className="pt-40 pb-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1200px]">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-8" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-sans text-5xl sm:text-6xl mb-12">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-[#0F120F]/80">
            <p>Last updated: August 30, 2026</p>
            <h3>1. Information We Collect</h3>
            <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services.</p>
            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect or receive to communicate with you, optimize our website, and ensure compliance with legal obligations.</p>
            <h3>3. Data Security</h3>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.</p>
            <h3>4. Your Privacy Rights</h3>
            <p>Depending on your location, you may have the right to request access to, correction, or deletion of your personal data.</p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
