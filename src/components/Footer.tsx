import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { socialLinks } from "../constants";
import { Link } from "react-router-dom";
import { navLinks, services } from "../constants";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { logEvent } from "../lib/analytics";
import { contactInfo } from "../constants";

interface FooterProps {
  onOpenModal: (service?: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    logEvent("User", "Newsletter Subscribe", "Footer");

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1500);
  };

  return (
    <footer
      id="contact"
      className="bg-white dark:bg-slate-950 pt-20 pb-10 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-20 p-8 md:p-12 bg-slate-900 dark:bg-slate-900 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Inscreva-se na nossa Newsletter
              </h3>
              <p className="text-slate-400 text-lg">
                Receba as últimas novidades de tecnologia e dicas exclusivas
                diretamente no seu e-mail.
              </p>
            </div>

            <div>
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleNewsletterSubmit}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500 transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Inscrever <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400"
                  >
                    <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Inscrição realizada!</p>
                      <p className="text-sm opacity-80">
                        Obrigado por se juntar a nós.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <p className="text-slate-500 text-xs mt-4 pl-1">
                Ao se inscrever, você concorda com nossos termos e política de
                privacidade.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center rotate-3">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
                CrysTech{" "}
                <span className="text-brand-600 dark:text-brand-400">
                  Solutions
                </span>
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-md">
              Sua parceira de confiança para soluções tecnológicas inovadoras e
              suporte técnico especializado.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-brand-600 dark:hover:bg-brand-500 hover:text-white transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Nossos Serviços
            </h4>
            <ul className="space-y-4">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenModal(service.title)}
                    className="text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Phone className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Mail className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <Link
                  to={`mailto:${contactInfo.email}`}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {contactInfo.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            © 2024 CrysTech Solutions. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-400 dark:text-slate-500">
            <Link
              to="#"
              className="hover:text-brand-600 dark:hover:text-brand-400"
            >
              Privacidade
            </Link>
            <Link
              to="#"
              className="hover:text-brand-600 dark:hover:text-brand-400"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
