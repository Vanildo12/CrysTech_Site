import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { portfolioProjects, categories, testimonials } from "../constants";
import { Project } from "../types";
import { getProjectImage } from "../lib/getImage";

export default function PortfolioSection() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "all" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="pt-32 pb-24 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">Nosso Portfólio</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Projetos que transformaram negócios
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Conheça alguns dos nossos trabalhos mais recentes e veja como ajudamos nossos clientes a alcançarem seus objetivos tecnológicos.
          </p>
        </div>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-square md:aspect-auto md:h-80 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={getProjectImage(project.image)}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-brand-500/20 backdrop-blur-md border border-white/10 text-brand-300 text-[9px] font-bold uppercase tracking-wider mb-2 w-fit">
                    {project.category.toUpperCase()}
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-1">{project.title}</h4>
                  <div className="flex items-center gap-2 text-brand-400 font-bold text-xs">
                    Ver Detalhes <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Testimonials */}
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Quote className="w-32 h-32 text-brand-400 rotate-180" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">Depoimentos</h2>
              <h3 className="text-4xl font-display font-bold text-white">O que dizem os nossos clientes</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="w-4 h-4 bg-yellow-400 rounded-full" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={t.image} 
                      alt={t.name}
                      loading="lazy" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-500"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 lg:p-16 rounded-[3rem] bg-brand-600 text-white text-center relative overflow-hidden shadow-2xl shadow-brand-600/20"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-6">Pronto para transformar seu negócio?</h3>
            <p className="text-brand-100 mb-10 text-lg leading-relaxed">
              Vamos construir juntos a solução tecnológica que sua empresa precisa para o próximo nível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
                className="bg-white text-brand-600 px-8 py-4 rounded-2xl font-bold hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                Solicitar orçamento <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.location.href = '#contact'}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all cursor-pointer"
              >
                Falar com consultor
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white lg:text-slate-900 lg:bg-slate-100 lg:hover:bg-slate-200 lg:dark:text-slate-100 lg:dark:bg-slate-800 lg:dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Side */}
              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <img
                  src={getProjectImage(selectedProject.image)}
                  alt={selectedProject.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent lg:hidden" />
                <div className="absolute bottom-6 left-6 lg:hidden">
                  <h3 className="text-2xl font-display font-bold text-white">{selectedProject.title}</h3>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto">
                <div className="hidden lg:block mb-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
                    {selectedProject.category.toUpperCase()}
                  </div>
                  <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white">{selectedProject.title}</h3>
                </div>

                <div className="space-y-8">
                  <div>
                    <h5 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">O Problema</h5>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{selectedProject.problem}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">Nossa Solução</h5>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">Resultados Alcançados</h5>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      window.dispatchEvent(new CustomEvent('open-order-modal', { detail: selectedProject.title }));
                    }}
                    className="w-full btn-primary cursor-pointer"
                  >
                    Quero um projeto similar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
