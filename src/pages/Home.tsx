import React, { useState } from "react";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Star, Users, Zap, Award, Heart, Clock, Shield, Plus, Minus, ChevronDown } from "lucide-react";
import { services, faqs, differentials, testimonials } from "../constants";

interface HomeProps {
  onOpenModal: (service?: string) => void;
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group cursor-pointer"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-600' : 'text-slate-900 dark:text-white group-hover:text-brand-600'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all ${isOpen ? 'bg-brand-600 border-brand-600 text-white rotate-180' : 'text-slate-400 dark:text-slate-500 group-hover:border-brand-600 group-hover:text-brand-600'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home({ onOpenModal }: HomeProps) {
  return (
    <>
      <Hero onOpenModal={() => onOpenModal()} />
      
      {/* Featured Statistics Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projetos Entregues", value: "10+", icon: <Zap className="w-6 h-6 text-brand-600 dark:text-brand-400" /> },
              { label: "Clientes Satisfeitos", value: "15+", icon: <Users className="w-6 h-6 text-brand-600 dark:text-brand-400" /> },
              { label: "Anos de Experiência", value: "5+", icon: <Star className="w-6 h-6 text-brand-600 dark:text-brand-400" /> },
              { label: "Suporte 24/7", value: "100%", icon: <CheckCircle2 className="w-6 h-6 text-brand-600 dark:text-brand-400" /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">Diferenciais</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Por que escolher a <span className="text-brand-600 dark:text-brand-400">CrysTech Solutions</span>?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Não somos apenas suporte técnico. Somos parceiros estratégicos que entendem que a tecnologia deve impulsionar o seu sucesso, e não ser um obstáculo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:bg-brand-600 dark:group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  {item.icon === "Award" && <Award className="w-6 h-6" />}
                  {item.icon === "Heart" && <Heart className="w-6 h-6" />}
                  {item.icon === "Zap" && <Zap className="w-6 h-6" />}
                  {item.icon === "Shield" && <Shield className="w-6 h-6" />}
                  {item.icon === "Star" && <Star className="w-6 h-6" />}
                  {item.icon === "Clock" && <Clock className="w-6 h-6" />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">FAQ</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Dúvidas <span className="text-brand-600 dark:text-brand-400">Comuns</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Preparamos as respostas para as perguntas mais frequentes. Se não encontrar o que procura, não hesite em nos contactar.
            </p>
            <button 
              onClick={() => onOpenModal("Dúvida Geral")}
              className="btn-secondary dark:bg-slate-900 dark:border-slate-800 dark:text-brand-400 dark:hover:bg-slate-800 cursor-pointer"
            >
              Fazer Outra Pergunta
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                {faqs.map((faq) => (
                  <FAQItem 
                    key={faq.question} 
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900" aria-labelledby="testimonials-title">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">Testemunhos</h2>
            <h3 id="testimonials-title" className="text-4xl font-display font-bold text-slate-900 dark:text-white">O que nossos clientes dizem</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-8 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-100 dark:border-slate-800"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA onOpenModal={() => onOpenModal()} />
    </>
  );
}
