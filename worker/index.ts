import {onRequestPost as chatHandler} from '../functions/api/chat';
import {onRequestPost as contactHandler} from '../functions/api/contact';

interface Env {
  ASSETS: {fetch(request: Request): Promise<Response>};
  GEMINI_API_KEY: string;
  RESEND_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/chat' && request.method === 'POST') {
      return chatHandler({request, env});
    }
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return contactHandler({request, env});
    }

    return env.ASSETS.fetch(request);
  },
};
