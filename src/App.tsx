import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index";
const Businesses = lazy(() => import("./pages/Businesses"));
const Governance = lazy(() => import("./pages/Governance"));
const CorporateProfile = lazy(() => import("./pages/CorporateProfile"));
const Impact = lazy(() => import("./pages/Impact"));
const Investors = lazy(() => import("./pages/Investors"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const Newsroom = lazy(() => import("./pages/Newsroom"));
import NotFound from "./pages/NotFound";
import RouteProgress from "./components/RouteProgress";
import CookieBanner from "./components/CookieBanner";
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Sitemap = lazy(() => import("./pages/Sitemap"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MotionConfig reducedMotion="user">
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <RouteProgress />
          <CookieBanner />
          <Suspense
            fallback={
              <div className="route-loading" role="status">
                Loading Lombard…
              </div>
            }
          >
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
          </Suspense>
        </BrowserRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
