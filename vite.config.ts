import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';
import {onRequestPost as chatHandler} from './functions/api/chat';
import {onRequestPost as contactHandler} from './functions/api/contact';

type CfHandler = (context: {request: Request; env: any}) => Promise<Response>;

// Only for `npm run dev`: makes /api/* routes work locally without Cloudflare's
// Pages Functions runtime. Production deploys use functions/api/*.ts directly.
function devApiPlugin(routes: Record<string, CfHandler>, env: Record<string, string>): Plugin {
  return {
    name: 'dev-api-routes',
    configureServer(server) {
      for (const [route, handler] of Object.entries(routes)) {
        server.middlewares.use(route, async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.end();
            return;
          }

          const chunks: Buffer[] = [];
          for await (const chunk of req) chunks.push(chunk as Buffer);
          const body = Buffer.concat(chunks).toString('utf-8');

          const request = new Request(`http://localhost${route}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body,
          });

          const response = await handler({request, env});
          res.statusCode = response.status;
          res.setHeader('Content-Type', response.headers.get('Content-Type') || 'application/json');
          res.end(await response.text());
        });
      }
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      devApiPlugin({'/api/chat': chatHandler, '/api/contact': contactHandler}, env),
    ],
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
