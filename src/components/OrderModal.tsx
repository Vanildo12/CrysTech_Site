import { motion, AnimatePresence } from "motion/react";
import { X, Send, MessageCircle, Mail, AlertCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { services } from "../constants";
import { logEvent } from "../lib/analytics";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function OrderModal({ isOpen, onClose, initialService }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService || "",
    message: "",
    method: "whatsapp" as "whatsapp" | "email",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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

    // Validar telefone
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = "Telefone deve ter no mínimo 8 dígitos";
    }

    // Validar serviço
    if (!formData.service) {
      newErrors.service = "Selecione um serviço";
    }

    // Validar mensagem (opcional, mas se preenchida, deve ter mínimo)
    if (formData.message && formData.message.trim().length < 5) {
      newErrors.message = "Mensagem deve ter no mínimo 5 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    logEvent("Conversion", "Submit Order Form", formData.service);
    
    const companyPhone = "258878668672";
    const companyEmail = "geral@crystechsolutions.com";
    
    const text = `*Novo Pedido - CrysTech Solutions*\n\n*Nome:* ${formData.name}\n*Serviço:* ${formData.service}\n*Telefone:* ${formData.phone}\n*Email:* ${formData.email}\n*Mensagem:* ${formData.message}`;
    
    if (formData.method === "whatsapp") {
      const url = `https://wa.me/${companyPhone}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    } else {
      const subject = `Novo Pedido: ${formData.service}`;
      const body = text.replace(/\*/g, ""); 
      const url = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
    }
    
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-[92%] sm:w-full max-w-lg max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-brand-600 dark:bg-brand-700 text-white flex-shrink-0">
              <h3 className="text-lg sm:text-xl font-bold">Solicitar Orçamento</h3>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Nome Completo</label>
                  <div className="relative">
                    <input
                      type="text"
                      className={`w-full px-4 py-2 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:border-transparent outline-hidden transition-all ${
                        errors.name ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-slate-800 focus:ring-brand-500"
                      }`}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                    />
                    {errors.name && (
                      <AlertCircle className="absolute right-3 top-2.5 w-4 h-4 text-red-500" />
                    )}
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Telefone</label>
                  <div className="relative">
                    <input
                      type="tel"
                      className={`w-full px-4 py-2 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:border-transparent outline-hidden transition-all ${
                        errors.phone ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-slate-800 focus:ring-brand-500"
                      }`}
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                    />
                    {errors.phone && (
                      <AlertCircle className="absolute right-3 top-2.5 w-4 h-4 text-red-500" />
                    )}
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">E-mail</label>
                <div className="relative">
                  <input
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:border-transparent outline-hidden transition-all ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-slate-800 focus:ring-brand-500"
                    }`}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                  />
                  {errors.email && (
                    <AlertCircle className="absolute right-3 top-2.5 w-4 h-4 text-red-500" />
                  )}
                </div>
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Serviço Desejado</label>
                <select
                  className={`w-full px-4 py-2 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:border-transparent outline-hidden transition-all ${
                    errors.service ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-slate-800 focus:ring-brand-500"
                  }`}
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value });
                    if (errors.service) setErrors({ ...errors, service: undefined });
                  }}
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Outros">Outros</option>
                </select>
                {errors.service && (
                  <p className="text-xs text-red-500 mt-1">{errors.service}</p>
                )}
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Mensagem / Detalhes</label>
                <div className="relative">
                  <textarea
                    rows={3}
                    className={`w-full px-4 py-2 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:border-transparent outline-hidden resize-none transition-all ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-slate-800 focus:ring-brand-500"
                    }`}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                  />
                  {errors.message && (
                    <AlertCircle className="absolute right-3 top-2 w-4 h-4 text-red-500" />
                  )}
                </div>
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Como deseja enviar?</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, method: "whatsapp" })}
                    className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                      formData.method === "whatsapp"
                        ? "border-brand-600 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400"
                        : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, method: "email" })}
                    className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                      formData.method === "email"
                        ? "border-brand-600 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400"
                        : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    E-mail
                  </button>
                </div>
              </div>
              
              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 mt-4 cursor-pointer hover:opacity-90 transition-opacity">
                <Send className="w-5 h-5" />
                Enviar Solicitação
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
