import { Laptop, Smartphone, Settings, Network, Shield, Cpu, Mail, Cloud, Lock, Home, User, Briefcase, FileText, Phone } from "lucide-react";
import { NavLink, Service, Project, Category } from "../types";
import profileImg from "../assets/images/profile.webp";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";


export const socialLinks = [
  {
    icon: <FaLinkedin size={20} />,
    href: "https://linkedin.com/in/crystech-solutions",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/CrysTech-Solutions",
    label: "GitHub",
  },
  {
    icon: <FaWhatsapp size={20} />,
    href: "https://wa.me/258878668672",
    label: "WhatsApp",
  },
  {
    icon: <FaEnvelope size={20} />,
    href: "mailto:contato@crystechsolutions.com",
    label: "Email",
  },
];

export const contactInfo = {
  email: "contato@crystechsolutions.com",
  phone: "(258) 87866-8672",
  address: "Av. Correia de Britos, Cidade da Beira, Moçambique"
};

export const navLinks: NavLink[] = [
  { name: "Início", href: "/", icon: <Home className="w-5 h-5" /> },
  { name: "Sobre Nós", href: "/sobre-nos", icon: <User className="w-5 h-5" /> },
  { name: "Serviços", href: "/servicos", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Portfólio", href: "/portfolio", icon: <FileText className="w-5 h-5" /> },
  { name: "Contato", href: "/contato", icon: <Phone className="w-5 h-5" /> },
];

export const services: Service[] = [
  {
    id: "web",
    title: "Desenvolvimento Web",
    description: "Sites modernos, responsivos e otimizados para SEO que convertem visitantes em clientes.",
    icon: <Laptop className="w-8 h-8" />,
    benefits: ["Design Exclusivo", "Alta Velocidade", "Otimização SEO"]
  },
  {
    id: "app",
    title: "Criação de Aplicativos",
    description: "Desenvolvimento mobile nativo e híbrido para iOS e Android com foco em experiência do usuário.",
    icon: <Smartphone className="w-8 h-8" />,
    benefits: ["UX/UI Premium", "Performance Nativa", "Suporte Multiplataforma"]
  },
  {
    id: "maintenance",
    title: "Manutenção de Computadores",
    description: "Reparo de hardware, limpeza preventiva e otimização de sistema para máxima performance.",
    icon: <Settings className="w-8 h-8" />,
    benefits: ["Aumento de Vida Útil", "Performance Superior", "Garantia de Serviço"]
  },
  {
    id: "networks",
    title: "Serviços de Redes",
    description: "Instalação, configuração e segurança de redes cabeadas e Wi-Fi para empresas e residências.",
    icon: <Network className="w-8 h-8" />,
    benefits: ["Conexão Estável", "Segurança de Dados", "Alcance Ampliado"]
  },
  {
    id: "support",
    title: "Assistência Técnica",
    description: "Suporte remoto e presencial para resolver problemas de software e hardware rapidamente.",
    icon: <Shield className="w-8 h-8" />,
    benefits: ["Resposta Rápida", "Suporte Especializado", "Atendimento Remoto"]
  },
  {
    id: "hardware",
    title: "Upgrade de Hardware",
    description: "Consultoria e instalação de componentes para dar vida nova ao seu equipamento antigo.",
    icon: <Cpu className="w-8 h-8" />,
    benefits: ["Custo-Benefício", "Consultoria Técnica", "Peças Genuínas"]
  },
  {
    id: "email",
    title: "Emails Corporativos",
    description: "Configuração de emails profissionais com seu domínio, garantindo credibilidade e segurança na comunicação empresarial.",
    icon: <Mail className="w-8 h-8" />,
    benefits: ["Credibilidade da Marca", "Espaço Generoso", "Filtro Anti-Spam"]
  },
  {
    id: "cloud",
    title: "Soluções em Nuvem",
    description: "Migração e gestão de dados em nuvem, permitindo acesso seguro e escalável de qualquer lugar do mundo.",
    icon: <Cloud className="w-8 h-8" />,
    benefits: ["Acesso Remoto", "Backup Automático", "Escalabilidade"]
  },
  {
    id: "security",
    title: "Cibersegurança",
    description: "Proteção contra ataques, remoção de malwares e implementação de barreiras defensivas para seus ativos digitais.",
    icon: <Lock className="w-8 h-8" />,
    benefits: ["Privacidade Total", "Monitoramento Ativo", "Prevenção de Invasões"]
  },
];

export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Fashion Pro",
    category: "web",
    problem: "O cliente tinha um site lento que não suportava picos de tráfego durante promoções, resultando em perda de vendas e abandono de carrinho.",
    solution: "Desenvolvemos uma nova plataforma utilizando React e infraestrutura em nuvem escalável, com foco em carregamento progressivo e checkout simplificado.",
    image: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?auto=format&fit=crop&q=80&w=800",
    results: [
      "Aumento de 45% na taxa de conversão",
      "Redução de 70% no tempo de carregamento",
      "Suporte a mais de 10.000 usuários simultâneos"
    ]
  },
  {
    id: 2,
    title: "App Delivery Local",
    category: "app",
    problem: "Dependência excessiva de marketplaces terceiros com taxas altas e falta de controle sobre a experiência do cliente final.",
    solution: "Criação de um aplicativo próprio com sistema de fidelidade integrado, rastreamento em tempo real e painel administrativo intuitivo.",
    image: "https://images.unsplash.com/photo-1601972602237-8c79241e468b?auto=format&fit=crop&q=80&w=800",
    results: [
      "Economia de 25% em taxas de marketplaces",
      "Crescimento de 30% na base de clientes recorrentes",
      "Nota 4.8 nas lojas de aplicativos"
    ]
  },
  {
    id: 3,
    title: "Infraestrutura Corporativa TechHub",
    category: "network",
    problem: "Sinal de Wi-Fi instável e falhas frequentes na rede cabeada, prejudicando a produtividade de mais de 50 empresas residentes.",
    solution: "Redesenho total da topologia de rede, instalação de equipamentos Wi-Fi 6 de nível empresarial e implementação de firewall avançado.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=800",
    results: [
      "Zero quedas de conexão registradas em 6 meses",
      "Velocidade de rede 5x superior à anterior",
      "Segurança de dados reforçada para todos os usuários"
    ]
  },
  {
    id: 4,
    title: "Sistema de Gestão de Clientes",
    category: "web",
    problem: "Processos manuais em planilhas que geravam erros de agendamento e perda de documentos importantes.",
    solution: "Desenvolvimento de um sistema web customizado com automação de contratos, agenda inteligente e armazenamento seguro em nuvem.",
    image: "Horizon-min.png",
    results: [
      "Redução de 50% no tempo administrativo",
      "Eliminação total de erros de agendamento",
      "Acesso rápido a documentos de qualquer lugar"
    ]
  }
];

export const categories: Category[] = [
  { id: "all", label: "Tudo" },
  { id: "web", label: "Web" },
  { id: "app", label: "Apps" },
  { id: "network", label: "Redes" },
  { id: "maintenance", label: "Manutenção" },
];

export const faqs = [
  {
    question: "Quanto tempo leva para um reparo de computador?",
    answer: "A maioria dos reparos básicos é concluída em 24 a 48 horas. Problemas mais complexos que exigem peças específicas podem levar um pouco mais, mas mantemos você informado em cada etapa."
  },
  {
    question: "Vocês atendem empresas e residências?",
    answer: "Sim! Oferecemos planos de suporte mensal para empresas (contratos de TI) e também atendimentos avulsos para residências e profissionais liberais."
  },
  {
    question: "Os softwares desenvolvidos têm garantia?",
    answer: "Absolutamente. Todos os nossos projetos de desenvolvimento incluem um período de suporte pós-garantia e manutenção preventiva para assegurar que tudo funcione perfeitamente."
  },
  {
    question: "Como funciona o orçamento para emails corporativos?",
    answer: "O valor depende do número de contas e do espaço de armazenamento necessário. Oferecemos soluções que vão desde o Workspace do Google até servidores dedicados para maior privacidade."
  },
  {
    question: "Vocês fazem atendimento remoto?",
    answer: "Sim, para problemas de software, configuração e otimização, oferecemos suporte remoto seguro, o que garante rapidez no atendimento sem custos de deslocamento."
  }
];

export const differentials = [
  {
    title: "Equipa Qualificada",
    description: "Profissionais certificados e em constante atualização tecnológica.",
    icon: "Award"
  },
  {
    title: "Atendimento Personalizado",
    description: "Soluções desenhadas sob medida para a sua necessidade específica.",
    icon: "Heart"
  },
  {
    title: "Rapidez",
    description: "Processos otimizados para entregar resultados no menor tempo possível.",
    icon: "Zap"
  },
  {
    title: "Garantia & Qualidade",
    description: "Rigorosos padrões de teste e garantia total em todos os serviços.",
    icon: "Shield"
  },
  {
    title: "Experiência no Mercado",
    description: "Mais de uma década resolvendo desafios tecnológicos com sucesso.",
    icon: "Star"
  },
  {
    title: "Suporte Técnico 24/7",
    description: "Disponibilidade contínua para garantir que seu negócio nunca pare.",
    icon: "Clock"
  }
];

export const successStories = [
  {
    customer: "Clínica Médica Saúde+",
    problem: "A clínica sofria com perda constante de dados e lentidão nos sistemas de prontuário eletrônico devido a infraestrutura antiga.",
    solution: "Implementamos um servidor de alta performance com redundância automática e migração para nuvem híbrida, além de novo sistema de segurança.",
    results: "Recuperação 100% segura de dados e aumento de 60% na velocidade de atendimento aos pacientes."
  },
  {
    customer: "Logística Express",
    problem: "Dificuldade em rastrear frotas e gerenciar entregas em tempo real, gerando atrasos e reclamações.",
    solution: "Desenvolvemos um aplicativo móvel customizado integrado ao sistema de gestão, permitindo rastreamento via GPS e confirmação digital.",
    results: "Redução de 40% nos atrasos e aumento significativo na pontuação de satisfação do cliente."
  },
  {
    customer: "Escritório de Contabilidade Silva",
    problem: "Rede instável que causava quedas frequentes durante o envio de obrigações acessórias em prazos críticos.",
    solution: "Reestruturação completa da rede cabeada e Wi-Fi, com instalação de firewall para proteção contra ataques externos.",
    results: "Estabilidade total da rede e segurança garantida para os dados sensíveis dos clientes."
  }
];

export const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "CEO da TechInov",
    content: "A CrysTech Solutions transformou nossa operação digital. O suporte é rápido e as soluções de software que desenvolveram superaram todas as expectativas.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=75&w=150"
  },
  {
    name: "Ana Patrícia",
    role: "Diretora da Escola Aprender",
    content: "Excelente atendimento! Resolveram nossos problemas de rede em tempo recorde e com um custo-benefício imbatível.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=75&w=150"
  },
  {
    name: "Roberto Santos",
    role: "Proprietário da Pizzaria Delivery",
    content: "O aplicativo que criaram para minha empresa mudou meu faturamento. Hoje vendo 3x mais do que antes de ter o app próprio.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=75&w=150"
  }
];

export const teamMembers = [
  {
    name: "Vanildo António",
    role: "Director Geral",
    specialty: "Engenheiro de Processos Industriais e IT",
    portfolio: "https://vanildoantonio.vercel.app",
    image: profileImg
  }
];

export const values = [
  {
    title: "Qualidade",
    description: "Comprometimento com a excelência em cada linha de código e infraestrutura montada.",
    icon: "Award"
  },
  {
    title: "Ética",
    description: "Transparência total e integridade em todas as nossas relações comerciais.",
    icon: "Shield"
  },
  {
    title: "Inovação",
    description: "Busca constante pelas tecnologias mais avançadas para antecipar soluções.",
    icon: "Zap"
  }
];
