import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ChatWidget from "../components/ChatWidget";


interface MainLayoutProps {
  children: React.ReactNode;
  scrolled: boolean;
  onOpenModal: (service?: string) => void;
}


export default function MainLayout({ children, scrolled, onOpenModal }: MainLayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} onOpenModal={() => onOpenModal()} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer onOpenModal={onOpenModal} />
      <ChatWidget />
      <ScrollToTop />
    </div>
  );
}
