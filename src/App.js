import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import ChatWidget from "./components/ChatWidget";
import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const CityPage = lazy(() => import("./pages/CityPage"));
const CalculatorPage = lazy(() => import("./pages/CalculatorPage"));

const PageFallback = () => (
  <div className="flex min-h-[70vh] items-center justify-center" data-testid="page-loading">
    <div className="flex flex-col items-center gap-3">
      <span className="h-9 w-9 animate-spin rounded-full border-[3px] border-[#E5EAF2] border-t-[#159BD7]" />
      <p className="text-[13px] font-semibold text-[#93A3BD]">Loading…</p>
    </div>
  </div>
);

const LenisBoot = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
  return null;
};

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        const el = document.querySelector(hash);
        if (!el) return;
        if (window.__lenis) window.__lenis.scrollTo(el, { offset: -84 });
        else window.scrollTo({ top: el.offsetTop - 84, behavior: "smooth" });
      }, 400);
      return () => clearTimeout(t);
    }
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const NotFound = () => (
  <section className="wrap flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center">
    <p className="text-6xl font-extrabold text-[#064A91]">404</p>
    <p className="text-lg font-semibold text-[#4B5563]">This page took a wrong turn on the information super-highway.</p>
    <Link to="/" data-testid="not-found-home-link" className="btn btn-primary">Back to Home</Link>
  </section>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <LenisBoot />
          <ScrollManager />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <Suspense fallback={<PageFallback />}>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/campaign-calculator" element={<CalculatorPage />} />
                <Route path="/services/:slug" element={<ServicePage />} />
                <Route path="/industries/:slug" element={<IndustryPage />} />
                <Route path="/digital-marketing-agency-chennai" element={<CityPage city="chennai" />} />
                <Route path="/digital-marketing-agency-erode" element={<CityPage city="erode" />} />
                <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <WhatsAppFab />
            <ChatWidget />
          </div>
          <Toaster position="bottom-center" richColors />
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
