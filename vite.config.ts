import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';
import chatHandler from './api/chat';

// Only for `npm run dev`: makes /api/chat work locally without a hosting
// provider's function runtime. Production deploys use api/chat.ts directly
// (e.g. Vercel's serverless functions).
function devApiPlugin(apiKey: string): Plugin {
  return {
    name: 'dev-api-chat',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end();
          return;
        }
        process.env.GEMINI_API_KEY = apiKey;

        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(chunk as Buffer);
        try {
          (req as any).body = JSON.parse(Buffer.concat(chunks).toString('utf-8') || '{}');
        } catch {
          (req as any).body = {};
        }

        const shimRes = {
          statusCode: 200,
          status(code: number) {
            this.statusCode = code;
            return this;
          },
          json(payload: unknown) {
            res.statusCode = this.statusCode;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(payload));
          },
        };

        await chatHandler(req as any, shimRes as any);
      });
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), devApiPlugin(env.GEMINI_API_KEY || '')],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
