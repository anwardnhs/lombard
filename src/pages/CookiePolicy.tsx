import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

const CookiePolicy = () => (
  <div className="min-h-screen bg-[#F9F9F7] font-poppins text-[#0F120F]">
    <Header />
    <main className="pt-40 pb-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1200px]">
        <Breadcrumbs items={[{ label: "Cookie Policy" }]} className="mb-8" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-sans text-5xl sm:text-6xl mb-12">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none text-[#0F120F]/80">
            <p>Last updated: August 30, 2026</p>
            <h3>1. What Are Cookies?</h3>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
            <h3>2. How We Use Cookies</h3>
            <p>We use cookies to understand how you use our site, personalize content, and improve your experience. This includes essential cookies, analytics cookies, and marketing cookies.</p>
            <h3>3. Managing Cookies</h3>
            <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CookiePolicy;
