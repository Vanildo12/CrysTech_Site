interface Env {
  GEMINI_API_KEY: string;
}

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

const SYSTEM_INSTRUCTION = `Você é o assistente virtual da CrysTech Solutions, uma empresa de TI líder em Moçambique.
Nossos serviços principais:
- **Desenvolvimento Web**: Sites institucionais, e-commerce e portais.
- **Criação de Aplicativos**: Desenvolvimento nativo e híbrido para iOS e Android.
- **Manutenção & TI**: Computadores, servidores e hardware.
- **Infraestrutura de Redes**: Cabeamento estruturado e Wi-Fi corporativo.
- **Assistência Técnica**: Suporte especializado remoto e presencial.

**Diretrizes de Resposta:**
1. **Organização:** Nunca envie blocos de texto maciços. Divida em parágrafos curtos.
2. **Markdown:** Use Markdown corretamente:
   - Use "-" (traço) seguido de espaço para criar listas com marcadores.
   - Use "**" (dois asteriscos) antes e depois para **negrito**.
   - Não use símbolos estranhos ou caracteres especiais desnecessários.
3. **Profissionalismo:** Mantenha um tom profissional, prestativo e focado em soluções.
4. **Chamada para Ação:** Se o cliente parecer interessado em contratar, sugira o botão **"Solicitar Orçamento"**.
5. **Personalidade:** Você é expert em tecnologia, mas explica de forma que todos entendam.`;

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const apiKey = context.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json({ error: "Server misconfigured: missing GEMINI_API_KEY" }, 500);
  }

  let body: { messages?: ChatMessage[]; message?: string };
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const { messages, message } = body;
  if (!message || typeof message !== "string" || !message.trim()) {
    return json({ error: "Missing 'message'" }, 400);
  }

  try {
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            ...(messages || []).map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
            { role: "user", parts: [{ text: message }] },
          ],
          systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        }),
      }
    );

    if (!resp.ok) {
      console.error("Gemini API error:", await resp.text());
      return json({ error: "Failed to generate response" }, 500);
    }

    const data: any = await resp.json();
    const text = (data?.candidates?.[0]?.content?.parts || [])
      .map((p: any) => p.text || "")
      .join("");

    return json({ text }, 200);
  } catch (error) {
    console.error("Gemini API error:", error);
    return json({ error: "Failed to generate response" }, 500);
  }
};
