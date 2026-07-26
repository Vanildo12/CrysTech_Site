import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, CheckCircle2, PhoneCall, FileSearch, Send, PenTool, Headphones, Plus, Minus } from "lucide-react";
import { services } from "../constants";
import React, { useState } from "react";

interface ServicesProps {
  onOpenModal: (service?: string) => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
  return (
    <>
      {/* Hero / Cabeçalho */}
      <section id="services-hero" className="pt-32 pb-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3"
            >
              Expertise Digital
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8"
            >
              Nossos Serviços
            </motion.h1>
            
            {/* Introdução Breve */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto"
            >
              Oferecemos serviços especializados para empresas e particulares, com foco em eficiência, confiança e resultados consistentes. Nossa missão é prover a base tecnológica necessária para sua evolução contínua.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 bg-white dark:bg-slate-950 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-brand-50 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-8 group-hover:bg-brand-600 dark:group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                {service.benefits && (
                  <div className="mb-8 space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => onOpenModal(service.title)}
                    className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20 cursor-pointer"
                  >
                    Solicitar Orçamento
                  </button>
                  <button
                    onClick={() => onOpenModal(service.title)}
                    className="w-full py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Saber Mais <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Atendimento */}
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">Metodologia</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Como Trabalhamos</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Contacto Inicial", icon: <PhoneCall className="w-6 h-6" />, desc: "Primeiro contacto para entender sua necessidade básica." },
              { title: "Diagnóstico", icon: <FileSearch className="w-6 h-6" />, desc: "Briefing detalhado e análise técnica profunda." },
              { title: "Proposta", icon: <Send className="w-6 h-6" />, desc: "Apresentação de solução customizada e custos." },
              { title: "Execução", icon: <PenTool className="w-6 h-6" />, desc: "Desenvolvimento ou implementação da solução." },
              { title: "Suporte", icon: <Headphones className="w-6 h-6" />, desc: "Acompanhamento pós-serviço e manutenção." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 shadow-sm group-hover:bg-brand-600 dark:group-hover:bg-brand-500 group-hover:text-white transition-colors duration-500">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{step.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                <span className="mt-4 text-xs font-black text-slate-300 dark:text-slate-600 uppercase tracking-[0.2em]">ETAPA {i + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Porque Escolher-nos */}
      <section className="py-32 bg-brand-600 text-white overflow-hidden text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-200 font-bold text-sm uppercase tracking-widest mb-3">Diferenciais</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Por que confiar na CrysTech?</h3>
              <p className="text-white/80 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
                Combinamos anos de experiência prática com uma paixão incessante por inovação. O resultado são soluções que não apenas resolvem problemas, mas criam valor real.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 max-w-4xl mx-auto text-left">
                {[
                  "Experiência Solidificada",
                  "Equipa Altamente Especializada",
                  "Qualidade Inquestionável",
                  "Cumprimento Rigoroso de Prazos",
                  "Suporte Próximo e Atento",
                  "Transparência Total"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                    <div className="w-6 h-6 bg-brand-400 rounded-full flex items-center justify-center text-brand-900 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-white text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">FAQ</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Perguntas Frequentes</h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Qual é o prazo médio para o desenvolvimento de um site?",
                a: "O prazo varia conforme a complexidade do projeto, mas geralmente sites institucionais levam de 15 a 30 dias, enquanto sistemas mais robustos podem levar de 2 a 4 meses."
              },
              {
                q: "Vocês oferecem suporte após a entrega do serviço?",
                a: "Sim! Todos os nossos serviços incluem um período de garantia e oferecemos planos de manutenção mensal para garantir que tudo continue funcionando perfeitamente."
              },
              {
                q: "Como funciona a forma de pagamento?",
                a: "Trabalhamos com entrada + parcelamento durante o projeto, ou condições especiais para pagamento à vista. Aceitamos transferência bancária, boleto e cartões."
              },
              {
                q: "Atendem clientes fora de São Paulo?",
                a: "Com certeza! Atendemos clientes em todo o Brasil e até no exterior através de reuniões remotas e ferramentas de gestão online."
              },
              {
                q: "Prestão assistência técnica presencial?",
                a: "Para serviços de hardware e redes, oferecemos atendimento presencial na região metropolitana. Para software, o suporte é prioritariamente remoto por ser mais rápido."
              }
            ].map((faq, i) => <ServiceFAQItem key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-brand-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-8"
          >
            Pronto para Upgrade Tecnológico?
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button 
              onClick={() => onOpenModal()}
              className="px-10 py-4 bg-white text-brand-600 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105 shadow-xl cursor-pointer"
            >
              Solicitar Orçamento Grátis
            </button>
            <button 
              onClick={() => window.location.href = '/contato'}
              className="px-10 py-4 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-all hover:scale-105 border border-slate-700 shadow-xl cursor-pointer"
            >
              Falar com Consultor
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

interface ServiceFAQItemProps {
  question: string;
  answer: string;
}

const ServiceFAQItem: React.FC<ServiceFAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer"
      >
        <span className="font-bold text-slate-900 dark:text-white">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-brand-600 dark:text-brand-400" /> : <Plus className="w-5 h-5 text-slate-400 dark:text-slate-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900 border-t border-slate-50 dark:border-slate-800">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
