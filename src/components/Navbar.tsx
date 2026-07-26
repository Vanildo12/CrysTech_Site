import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect, JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, socialLinks } from "../constants";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  scrolled: boolean;
  onOpenModal: () => void;
}

export default function Navbar({ scrolled, onOpenModal }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Menu Principal"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || isMenuOpen
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${scrolled || isMenuOpen ? "py-4" : "py-6"}`}
      >
        <Link
          to="/"
          className="flex items-center gap-3 group relative z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-600/20">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            CrysTech{" "}
            <span className="text-brand-600 dark:text-brand-400">
              Solutions
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-all relative py-1 ${
                  isActive
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-600 dark:bg-brand-400 rounded-full"
                  />
                )}
              </Link>
            );
          })}

          <div className="flex items-center gap-5 pl-5 border-l border-slate-200 dark:border-slate-800">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Alternar tema"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={onOpenModal}
              className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm hover:scale-105 active:scale-100 transition-all shadow-md"
            >
              Falar com Consultor
            </button>
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex items-center gap-3 md:hidden relative z-50">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Alternar tema"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2.5 rounded-xl transition-all duration-300 ${
              isMenuOpen
                ? "bg-brand-600 text-white rotate-90"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }`}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-4 p-3 rounded-2xl transition-all ${
                      location.pathname === link.href
                        ? "bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400"
                        : "text-slate-600 dark:text-slate-300 active:bg-slate-50 dark:active:bg-slate-800"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        location.pathname === link.href
                          ? "bg-white dark:bg-slate-800 shadow-sm"
                          : "bg-slate-50 dark:bg-slate-800/50"
                      }`}
                    >
                      {link.icon}
                    </div>
                    <span className="font-bold">{link.name}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-6">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenModal();
                  }}
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-brand-600/20 active:scale-95 transition-all text-center"
                >
                  Solicitar Orçamento
                </button>

                <div className="flex gap-3 justify-center">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 dark:hover:bg-brand-500 hover:text-white transition-all"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
