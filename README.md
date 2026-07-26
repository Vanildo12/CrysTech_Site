# CrysTech Solutions

Site institucional da CrysTech Solutions — empresa de TI sediada na Beira, Moçambique, especializada em desenvolvimento web, criação de aplicativos, manutenção de computadores, infraestrutura de redes, assistência técnica, e-mail corporativo, soluções em nuvem e cibersegurança.

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- Tailwind CSS 4
- React Router DOM
- Framer Motion (`motion`)
- Gemini (`@google/genai`) para o chatbot de suporte, via função serverless em [api/chat.ts](api/chat.ts)
- Google Analytics 4 (`react-ga4`)

## Rodar localmente

**Pré-requisitos:** Node.js

1. Instalar dependências:
   ```
   npm install
   ```
2. Criar um `.env` na raiz (veja [.env.example](.env.example)) com:
   - `GEMINI_API_KEY` — chave da API Gemini, usada **apenas no servidor** (nunca é enviada ao navegador).
   - `VITE_GA_MEASUREMENT_ID` — ID de medição do Google Analytics 4 (opcional; se vazio, o analytics fica desativado).
3. Rodar o site:
   ```
   npm run dev
   ```
   Em modo de desenvolvimento, o próprio `vite.config.ts` simula o endpoint `/api/chat` localmente, então o chatbot funciona sem precisar de nenhuma CLI de hospedagem.

## Build

```
npm run build
npm run preview
```

## Chatbot / Gemini

A chamada ao Gemini acontece inteiramente no servidor, em [api/chat.ts](api/chat.ts) — o componente [ChatWidget.tsx](src/components/ChatWidget.tsx) apenas faz `fetch("/api/chat")`. Isso evita expor a chave da API no bundle do cliente.

Em produção, `api/chat.ts` segue o formato de Serverless Function da Vercel. Ao hospedar em outro provedor (Netlify, Cloud Run, etc.), essa função precisa ser adaptada para o formato equivalente da plataforma.

## Estrutura

```
api/                  Funções serverless (chat com IA)
src/
├── pages/             Páginas: Home, Sobre Nós, Serviços, Portfólio, Contato
├── components/        Navbar, Footer, Hero, CTA, OrderModal, ChatWidget, etc.
├── layouts/            Layout principal (Navbar + Footer + ChatWidget)
├── context/            Tema claro/escuro
├── constants/          Conteúdo do site (serviços, portfólio, depoimentos, FAQ)
├── lib/                 Analytics e resolução de imagens de projetos
└── types/               Tipos compartilhados
```
