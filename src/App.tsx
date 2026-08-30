import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis"; // 1. Import Lenis
import Index from "./pages/Index";
import Businesses from "./pages/Businesses";
import Governance from "./pages/Governance";
import CorporateProfile from "./pages/CorporateProfile";
import Impact from "./pages/Impact";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Newsroom from "./pages/Newsroom";
import NotFound from "./pages/NotFound";
import RouteProgress from "./components/RouteProgress";
import CookieBanner from "./components/CookieBanner";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
          <RouteProgress />
          <CookieBanner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<CorporateProfile />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
