# CrysTech Solutions

Site institucional da CrysTech Solutions — empresa de TI sediada na Beira, Moçambique, especializada em desenvolvimento web, criação de aplicativos, manutenção de computadores, infraestrutura de redes, assistência técnica, e-mail corporativo, soluções em nuvem e cibersegurança.

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- Tailwind CSS 4
- React Router DOM
- Framer Motion (`motion`)
- Gemini (via REST, chamado em [functions/api/chat.ts](functions/api/chat.ts)) para o chatbot de suporte
- Resend (via REST, chamado em [functions/api/contact.ts](functions/api/contact.ts)) para o formulário de contato
- Google Analytics 4 (`react-ga4`)
- Hospedagem: **Cloudflare Pages** (Pages Functions para as rotas `/api/*`)

## Rodar localmente

**Pré-requisitos:** Node.js

1. Instalar dependências:
   ```
   npm install
   ```
2. Criar um `.env` na raiz (veja [.env.example](.env.example)) com:
   - `GEMINI_API_KEY` — chave da API Gemini, usada **apenas no servidor** (nunca é enviada ao navegador).
   - `RESEND_API_KEY` — chave da API Resend, usada **apenas no servidor** para enviar os e-mails do formulário de contato.
   - `VITE_GA_MEASUREMENT_ID` — ID de medição do Google Analytics 4 (opcional; se vazio, o analytics fica desativado).
3. Rodar o site:
   ```
   npm run dev
   ```
   Em modo de desenvolvimento, o próprio `vite.config.ts` simula as rotas `/api/chat` e `/api/contact` localmente, então tudo funciona sem precisar de nenhuma CLI de hospedagem.

## Build

```
npm run build
npm run preview
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Em **Settings → Environment variables** do projeto na Cloudflare, configure `GEMINI_API_KEY` e `RESEND_API_KEY` (Production, e Preview se quiser testar em branches).
- As funções em [functions/api/](functions/api/) são detectadas automaticamente pelo Cloudflare Pages (roteamento por arquivo: `functions/api/chat.ts` → `/api/chat`).

## Chatbot / Gemini e formulário de contato

Ambas as integrações chamam suas respectivas APIs REST diretamente do servidor (Cloudflare Pages Functions), nunca do navegador — isso evita expor as chaves de API no bundle do cliente. O frontend só faz `fetch("/api/chat")` e `fetch("/api/contact")`.

## Estrutura

```
functions/api/        Pages Functions (chat com IA, envio de e-mail do contato)
src/
├── pages/             Páginas: Home, Sobre Nós, Serviços, Portfólio, Contato
├── components/        Navbar, Footer, Hero, CTA, OrderModal, ChatWidget, etc.
├── layouts/            Layout principal (Navbar + Footer + ChatWidget)
├── context/            Tema claro/escuro
├── constants/          Conteúdo do site (serviços, portfólio, depoimentos, FAQ)
├── lib/                 Analytics e resolução de imagens de projetos
└── types/               Tipos compartilhados
```
