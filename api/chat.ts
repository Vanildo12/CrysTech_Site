import { GoogleGenAI } from "@google/genai";

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

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Server misconfigured: missing GEMINI_API_KEY" });
    return;
  }

  const { messages, message } = (req.body || {}) as {
    messages?: ChatMessage[];
    message?: string;
  };

  if (!message || typeof message !== "string" || !message.trim()) {
    res.status(400).json({ error: "Missing 'message'" });
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...(messages || []).map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: "user", parts: [{ text: message }] },
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    res.status(200).json({ text: response.text || "" });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
}
