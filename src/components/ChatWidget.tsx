import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, Loader2, Link as LinkIcon, Phone, Mail, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function ChatWidget() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Olá! Sou o assistente virtual da CrysTech Solutions. Como posso ajudar você hoje?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages.map((m) => ({ role: m.role, text: m.text })),
          message: userMessage,
        }),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      const data = await res.json();
      const aiText = data.text || "Desculpe, tive um problema ao processar sua mensagem. Pode tentar novamente?";
      setMessages((prev) => [...prev, { role: "model", text: aiText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Desculpe, estou com dificuldades técnicas no momento. Por favor, tente novamente mais tarde ou use nosso formulário de contato." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-brand-600 dark:bg-brand-700 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Suporte CrysTech</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] opacity-80">Online agora</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-brand-600 dark:bg-brand-500 text-white rounded-tr-none"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800 rounded-tl-none shadow-sm"
                    }`}
                  >
                    <div className="markdown-body">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800 shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-600 dark:text-brand-400" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex gap-2 overflow-x-auto no-scrollbar">
              <button 
                onClick={() => setShowOrderModal(true)}
                className="whitespace-nowrap px-4 py-1.5 bg-white dark:bg-slate-900 border border-brand-200 dark:border-brand-900/50 text-brand-600 dark:text-brand-400 rounded-full text-xs font-bold hover:bg-brand-50 dark:hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-1.5"
              >
                <LinkIcon className="w-3 h-3" />
                Solicitar Orçamento
              </button>
              <button 
                onClick={() => {
                  setInput("Quais são os serviços oferecidos?");
                }}
                className="whitespace-nowrap px-4 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
              >
                Ver Serviços
              </button>
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <input
                type="text"
                placeholder="Digite sua dúvida..."
                className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 bg-brand-600 dark:bg-brand-500 text-white rounded-xl hover:bg-brand-700 dark:hover:bg-brand-600 disabled:opacity-50 disabled:hover:bg-brand-600 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
        
        {/* Contact info modal triggered within chat */}
        {isOpen && showOrderModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute bottom-20 right-0 w-[320px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-6 z-[60]"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Solicitar Orçamento</h4>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowOrderModal(false);
                }} 
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
              >
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Escolha como prefere ser atendido. Nossa equipa está pronta para ajudar!
            </p>
            
            <div className="space-y-3 mb-6">
              <a href="tel:+258878668672" className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors group">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-brand-600 dark:group-hover:text-brand-400 shadow-sm transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Ligar agora</p>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">(+258) 8786-68672</p>
                </div>
              </a>
              
              <a href="mailto:contato@crystechsolutions.com" className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors group">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-brand-600 dark:group-hover:text-brand-400 shadow-sm transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Enviar E-mail</p>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300 break-all font-mono">contato@crystechsolutions.com</p>
                </div>
              </a>
            </div>
            
            <button
              onClick={() => {
                setIsOpen(false);
                setShowOrderModal(false);
                navigate("/contato");
              }}
              className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20"
            >
              Ir para Página de Contato
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? "bg-slate-800 text-white rotate-90" : "bg-brand-600 text-white"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
