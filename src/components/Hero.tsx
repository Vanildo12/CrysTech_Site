import { motion } from "motion/react";
import { ChevronRight, CheckCircle2, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/30 dark:bg-brand-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-200/30 dark:bg-cyan-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Inovação em Tecnologia
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] mb-6">
              Transformando ideias em <span className="gradient-text">Soluções Digitais</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
              Da manutenção de computadores ao desenvolvimento de softwares complexos. 
              A CrysTech Solutions é sua parceira estratégica para o sucesso tecnológico.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={onOpenModal} className="btn-primary flex items-center gap-2">
                Começar Agora <ChevronRight className="w-4 h-4" />
              </button>
              <Link to="/servicos" className="btn-secondary dark:bg-slate-900 dark:border-slate-800 dark:text-brand-400 dark:hover:bg-slate-800">
                Ver Serviços
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900 dark:text-white">+500 Clientes Satisfeitos</p>
                <p className="text-slate-500 dark:text-slate-400">Suporte 24/7 especializado</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800 aspect-video">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=85&w=1200"
                alt="Technology Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                fetchPriority="high"
                width={1200}
                height={675}
              />
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 glass-card dark:bg-slate-900/80 dark:border-white/10 p-4 rounded-2xl hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Redes Seguras</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Configuração Concluída</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 glass-card dark:bg-slate-900/80 dark:border-white/10 p-4 rounded-2xl hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Web Dev</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Sistemas de Alta Performance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
