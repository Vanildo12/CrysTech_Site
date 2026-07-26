import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Zap, Target, Eye, Shield, ExternalLink } from "lucide-react";
import { successStories, teamMembers, values } from "../constants";

interface AboutProps {
  onOpenModal: () => void;
}

export default function About({ onOpenModal }: AboutProps) {
  return (
    <>
      {/* Banner / Introdução */}
      <section
        id="about"
        className="pt-32 pb-12 overflow-hidden bg-white dark:bg-slate-950"
      >
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3"
            >
              Sobre Nós / Quem Somos
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6"
            >
              Transformando o futuro através da{" "}
              <span className="text-brand-600 dark:text-brand-400">
                excelência tecnológica
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              Na CrysTech Solutions, não entregamos apenas código ou hardware.
              Entregamos a base para que sua empresa possa crescer sem limites
              no mundo digital.
            </motion.p>
          </div>
        </div>
      </section>

      {/* História da Empresa */}
      <section className="pt-12 pb-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3"
            >
              Nossa Jornada
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8"
            >
              Como tudo começou
            </motion.h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  A CrysTech Solutions nasceu da visão de que a tecnologia não
                  deveria ser um obstáculo para as empresas, mas sim o seu maior
                  catalisador. Começamos como uma pequena consultoria focada em
                  resolver gargalos de infraestrutura local.
                </p>
                <div className="pl-6 border-l-4 border-brand-500 dark:border-brand-400 italic py-2">
                  "Nossa missão inicial era simples: garantir que nenhuma
                  empresa perdesse um dia de trabalho por falhas tecnológicas
                  evitáveis."
                </div>
                <p>
                  Ao longo dos anos, evoluímos. Integramos o desenvolvimento de
                  software sob medida, segurança cibernética avançada e soluções
                  em nuvem híbrida. Hoje, somos um parceiro estratégico completo
                  para empresas de todos os portes.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-600 dark:text-brand-400">
                    5+
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 uppercase font-bold mt-1">
                    Anos
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-600 dark:text-brand-400">
                    50+
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 uppercase font-bold mt-1">
                    Projetos
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-600 dark:text-brand-400">
                    98%
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 uppercase font-bold mt-1">
                    Satisfação
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <img
                    src="https://media.licdn.com/dms/image/v2/C4D12AQFiq7EEguP6GQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1595218434921?e=2147483647&v=beta&t=OjVdvF3obN6Vh6FV_4e7SpdPbXJ96akDHFsUsa6wIoc"
                    alt="Marcos Importantes"
                    loading="lazy"
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="bg-brand-600 p-6 rounded-3xl text-white">
                    <CheckCircle2 className="w-8 h-8 mb-4" />
                    <p className="font-bold">Evolução Contínua</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-cyan-500 p-6 rounded-3xl text-white">
                    <TrendingUp className="w-8 h-8 mb-4" />
                    <p className="font-bold">Crescimento Focado</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=75&w=600"
                    alt="Visão de Futuro"
                    loading="lazy"
                    className="rounded-3xl shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-brand-50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-800/50 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-brand-600 dark:bg-brand-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-brand-200 dark:shadow-none">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Missão
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Empoderar negócios através de consultoria e soluções
                tecnológicas inovadoras, simplificando processos e garantindo
                alta disponibilidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-[2.5rem] bg-cyan-50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-800/50 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-cyan-600 dark:bg-cyan-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-cyan-200 dark:shadow-none">
                <Eye className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Visão
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Tornar-se a principal referência em transformation digital e
                segurança de dados, sendo reconhecida pela integridade e
                resultados excepcionais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[2.5rem] bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/50 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-amber-500 dark:bg-amber-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-amber-200 dark:shadow-none">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Valores
              </h4>
              <div className="space-y-4">
                {values.map((v) => (
                  <div key={v.title} className="flex flex-col items-center">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {v.title}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 text-center">
                      {v.description}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipa */}
      <section className="py-24 bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">
              Nossos Especialistas
            </h2>
            <h3 className="text-4xl font-display font-bold">
              A inteligência por trás do código
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-[280px] text-center"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-brand-400 text-sm font-bold uppercase tracking-wider mb-2">
                  {member.role}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                  {member.specialty}
                </p>

                {member.portfolio && (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-brand-500/20 cursor-pointer"
                  >
                    Ver Portfólio
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">
              Diferenciais
            </h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white">
              O que nos distingue
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experiência",
                desc: "Mais de 10 anos no mercado enfrentando os mais diversos desafios tecnológicos.",
                icon: (
                  <TrendingUp className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                ),
              },
              {
                title: "Metodologia Ágil",
                desc: "Processos transparentes e entregas incrementais que garantem agilidade e foco.",
                icon: (
                  <Zap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                ),
              },
              {
                title: "Atendimento",
                desc: "Suporte personalizado e próximo, falando a língua do seu negócio.",
                icon: (
                  <Target className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                ),
              },
              {
                title: "Tecnologia",
                desc: "Utilizamos as ferramentas mais modernas e seguras do mercado global.",
                icon: (
                  <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Números / Conquistas */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Anos de Experiência", value: "5+" },
              { label: "Clientes Atendidos", value: "50+" },
              { label: "Projetos Concluídos", value: "100+" },
              { label: "Especialistas", value: "3+" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-5xl font-display font-bold mb-2">
                  {item.value}
                </p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histórias de Sucesso */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">
              Impacto Real
            </h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white">
              Histórias de Sucesso
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <motion.div
                key={story.customer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-600 dark:bg-brand-500 rounded-xl flex items-center justify-center text-white">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {story.customer}
                  </h4>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider mb-2 block">
                      O Desafio
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {story.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 block">
                      Nossa Solução
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {story.solution}
                    </p>
                  </div>
                  <div className="pt-4 mt-auto border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-start gap-2">
                      <div className="mt-1">
                        <Zap className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1 block">
                          O Impacto
                        </span>
                        <p className="text-brand-600 dark:text-brand-400 font-bold text-sm">
                          {story.results}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-600 text-white">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-display font-bold mb-4">
            Pronto para escrever o próximo capítulo da sua empresa?
          </h3>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Conheça nossos serviços ou entre em contato agora mesmo para uma
            consultoria gratuita.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => (window.location.href = "/servicos")}
              className="btn-secondary bg-white text-brand-600 hover:bg-slate-100 border-none px-8 cursor-pointer"
            >
              Conheça nossos Serviços
            </button>
            <button
              onClick={onOpenModal}
              className="btn-primary bg-slate-900 dark:bg-slate-800 border-slate-900 dark:border-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 px-8 cursor-pointer"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
