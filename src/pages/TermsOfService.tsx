import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

const TermsOfService = () => (
  <div className="min-h-screen bg-[#F9F9F7] font-poppins text-[#0F120F]">
    <Header />
    <main className="pt-40 pb-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1200px]">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} className="mb-8" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-sans text-5xl sm:text-6xl mb-12">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-[#0F120F]/80">
            <p>Last updated: August 30, 2026</p>
            <h3>1. Introduction</h3>
            <p>Welcome to Lombard HoldCo Plc. These Terms of Service govern your use of our website and services.</p>
            <h3>2. Use of Services</h3>
            <p>By accessing our website, you agree to be bound by these terms. Our services are intended for general informational purposes and professional engagement.</p>
            <h3>3. Intellectual Property</h3>
            <p>All content, trademarks, and data on this website are the property of Lombard HoldCo Plc or its licensors.</p>
            <h3>4. Limitation of Liability</h3>
            <p>Lombard HoldCo Plc shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services.</p>
            <h3>5. Contact Us</h3>
            <p>If you have any questions about these Terms, please contact us at legal@lombardholdco.com.</p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;
