import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import OrderModal from "./components/OrderModal";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";
import { initGA, logPageView, logEvent } from "./lib/analytics";

// Helper component to track page views
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
}

// Lazy load pages for performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    initGA();
    const timer = setTimeout(() => setIsLoading(false), 2000); // Reduced slightly for better feel
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    const handleOpenModal = (e: any) => {
      openModal(e.detail);
    };
    
    window.addEventListener('open-order-modal', handleOpenModal);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('open-order-modal', handleOpenModal);
    };
  }, []);

  const openModal = (serviceTitle = "") => {
    logEvent("Conversion", "Open Order Modal", serviceTitle || "General");
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence>

        <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <MainLayout scrolled={scrolled} onOpenModal={openModal}>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home onOpenModal={openModal} />} />
                <Route path="/sobre-nos" element={<About onOpenModal={openModal} />} />
                <Route path="/servicos" element={<Services onOpenModal={openModal} />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contato" element={<Contact />} />
              </Routes>
            </Suspense>
          </MainLayout>

          <OrderModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            initialService={selectedService}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
