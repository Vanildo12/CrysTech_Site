import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send,  Plus, Minus, ChevronRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { socialLinks } from "../constants";
import React, { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function ContactFAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 dark:border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors cursor-pointer">{question}</span>
        <div className={`p-1.5 rounded-full transition-all ${isOpen ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validar nome
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Nome deve ter no mínimo 3 caracteres";
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    // Validar assunto
    if (!formData.subject.trim()) {
      newErrors.subject = "Assunto é obrigatório";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Assunto deve ter no mínimo 5 caracteres";
    }

    // Validar mensagem
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter no mínimo 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});

    // Optional: Hide success message after 8 seconds
    setTimeout(() => setIsSuccess(false), 8000);
  };

  return (
    <section
      id="contact"
      className="pt-32 pb-24 bg-slate-50 dark:bg-slate-900 min-h-screen"
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">
            Contato
          </h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Estamos prontos para ajudar você
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Tem alguma dúvida ou quer iniciar um projeto? Preencha o formulário
            abaixo ou utilize um de nossos canais de atendimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info + Map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">
                      Localização
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      Av, Correia de Britos - 2100 - Cidade da Beira, Mocambique
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">
                      Telefone
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      (258) 878668672
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">
                      E-mail
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      contato@crystechsolutions.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">
                      Horário
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      Seg - Sex: 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                Siga-nos
              </h4>
              <div className="flex gap-3">
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

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-950 p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 h-full relative overflow-hidden">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 text-green-500 dark:text-green-400 rounded-full flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                    Agradecemos seu contato. Sua mensagem foi recebida com
                    sucesso e nossa equipe responderá em breve.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-brand-600 dark:text-brand-400 font-bold hover:underline text-sm"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-10">
                  <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                    Envie uma mensagem
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Responderemos o mais breve possível.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        disabled={isSubmitting}
                        className={`w-full px-5 py-4 rounded-2xl border transition-all bg-slate-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 disabled:opacity-50 outline-hidden focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-brand-500 focus:border-transparent'}`}
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                      />
                      {errors.name && (
                        <AlertCircle className="absolute right-4 top-4 w-5 h-5 text-red-500" />
                      )}
                    </div>
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      E-mail Corporativo
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        disabled={isSubmitting}
                        className={`w-full px-5 py-4 rounded-2xl border transition-all bg-slate-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 disabled:opacity-50 outline-hidden focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-brand-500 focus:border-transparent'}`}
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                      />
                      {errors.email && (
                        <AlertCircle className="absolute right-4 top-4 w-5 h-5 text-red-500" />
                      )}
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Assunto
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        disabled={isSubmitting}
                        className={`w-full px-5 py-4 rounded-2xl border transition-all bg-slate-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 disabled:opacity-50 outline-hidden focus:ring-2 ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-brand-500 focus:border-transparent'}`}
                        placeholder="Como podemos ajudar?"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: undefined });
                        }}
                      />
                      {errors.subject && (
                        <AlertCircle className="absolute right-4 top-4 w-5 h-5 text-red-500" />
                      )}
                    </div>
                    {errors.subject && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Mensagem
                    </label>
                    <div className="relative">
                      <textarea
                        rows={6}
                        disabled={isSubmitting}
                        className={`w-full px-5 py-4 rounded-2xl border transition-all resize-none bg-slate-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 disabled:opacity-50 outline-hidden focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-brand-500 focus:border-transparent'}`}
                        placeholder="Descreva seu projeto ou dúvida detalhadamente..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                      />
                      {errors.message && (
                        <AlertCircle className="absolute right-4 top-6 w-5 h-5 text-red-500" />
                      )}
                    </div>
                    {errors.message && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-5 rounded-2xl flex items-center justify-center gap-3 text-lg transition-transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-brand-600/20 disabled:scale-100 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Quick FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Perguntas Frequentes
            </h4>
          </div>
          <div className="space-y-2">
            <ContactFAQItem
              question="Quanto tempo demoram a responder?"
              answer="Nosso tempo médio de resposta para solicitações via formulário ou e-mail é de até 4 horas úteis. Para urgências, recomendamos entrar em contato via telefone ou WhatsApp."
            />
            <ContactFAQItem
              question="Atendem presencialmente?"
              answer="Sim! Atendemos presencialmente em toda a região metropolitana de São Paulo. Para outras localidades, oferecemos suporte remoto especializado com a mesma eficácia."
            />
            <ContactFAQItem
              question="Fazem orçamento gratuito?"
              answer="Com certeza. Realizamos uma análise prévia das suas necessidades e apresentamos uma proposta detalhada sem qualquer compromisso ou custo inicial."
            />
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-brand-600 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-600/30"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-3xl font-display font-bold mb-4">
              Pronto para iniciar?
            </h3>
            <p className="text-brand-100 mb-8 text-lg">
              Entre em contato hoje mesmo e dê o próximo passo na evolução
              tecnológica da sua empresa.
            </p>
            <button className="bg-white text-brand-600 px-8 py-4 rounded-2xl font-bold hover:bg-brand-50 transition-all flex items-center justify-center gap-2 mx-auto shadow-lg cursor-pointer">
              Falar com um especialista <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Full Width Map Section at the Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-white dark:bg-slate-950 p-4 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden"
        >
          <div className="aspect-video lg:aspect-[21/9] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15012.71847521134!2d34.83777754999114!3d-19.832351469409037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f2a6b0595cfee2f%3A0x4f14d0cd2ea84eb0!2sCrysTech%20Solutions!5e0!3m2!1spt-BR!2smz!4v1777551189829!5m2!1spt-BR!2smz"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
