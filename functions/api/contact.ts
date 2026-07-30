interface Env {
  RESEND_API_KEY: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const TO_EMAIL = "geral@crystechsolutions.com";
const FROM_EMAIL = "CrysTech Solutions <onboarding@resend.dev>";

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const apiKey = context.env.RESEND_API_KEY;
  if (!apiKey) {
    return json({ error: "Server misconfigured: missing RESEND_API_KEY" }, 500);
  }

  let body: ContactPayload;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const { name, email, subject, message } = body;
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return json({ error: "Missing required fields" }, 400);
  }

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: email,
        subject: `[Contato do site] ${subject}`,
        text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!resp.ok) {
      console.error("Resend error:", await resp.text());
      return json({ error: "Failed to send email" }, 500);
    }

    return json({ ok: true }, 200);
  } catch (error) {
    console.error("Contact form error:", error);
    return json({ error: "Failed to send email" }, 500);
  }
};
