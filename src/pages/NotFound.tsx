import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="fixed top-0 left-0 w-full h-20 sm:h-24 bg-[#0a0c0a]/95 backdrop-blur-xl border-b border-white/10 z-40" aria-hidden="true" />
      <main className="min-h-screen bg-[#0F120F] text-white font-poppins flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[{ label: "404" }]} theme="dark" />
          </div>
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#52796F] font-bold mb-6">
            Error
          </span>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-sans leading-none tracking-tight mb-6">
            404
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 font-semibold mb-4">
            This page doesn’t exist or has moved.
          </p>
          <p className="text-sm sm:text-base text-white/60 font-semibold mb-10">
            The requested URL <span className="text-[#52796F]">{location.pathname}</span> could not be found.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/" className="btn-primary-dark">
              Return Home
              <FaArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="/contact" className="btn-secondary-dark">
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
