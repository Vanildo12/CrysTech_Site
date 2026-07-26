import { motion } from "motion/react";
import { Phone } from "lucide-react";

interface CTAProps {
  onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section className="py-20">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">
              Pronto para elevar o nível da sua tecnologia?
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Não deixe problemas técnicos atrasarem seu progresso. Entre em contato hoje mesmo e descubra como podemos ajudar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={onOpenModal} className="btn-primary bg-white text-slate-900 hover:bg-slate-100 shadow-none">
                Solicitar Orçamento Grátis
              </button>
              <a href="tel:+258878668672" className="flex items-center gap-2 px-6 py-3 border border-slate-700 text-white rounded-xl hover:bg-slate-800 transition-all">
                <Phone className="w-5 h-5" /> Ligue Agora
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
