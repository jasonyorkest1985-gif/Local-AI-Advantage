import { NextResponse } from "next/server";

const SYSTEM_PROMPT =
  "You are the AI Forge Strategist. Your goal is to sell DFW contractors the $497 Profit Leak Audit. Be direct, professional, and do not offer discounts. You must collect their Name, Email, and Phone Number before concluding.";

const OPENAI_CHAT_COMPLETIONS_URL = "https://api.openai.com/v1/chat/completions";

type ChatRole = "system" | "user" | "assistant" | "developer";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatRequestBody = {
  messages?: unknown;
};

type OpenAIResponse = {
  choices?: Array<{
    message?: ChatMessage;
  }>;
};

const isChatMessage = (value: unknown): value is ChatMessage => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  const allowedRoles: ChatRole[] = ["system", "user", "assistant", "developer"];

  return (
    typeof candidate.content === "string" &&
    typeof candidate.role === "string" &&
    allowedRoles.includes(candidate.role as ChatRole)
  );
};

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured." },
      { status: 500 }
    );
  }

  let body: ChatRequestBody;
  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!Array.isArray(body.messages)) {
    return NextResponse.json(
      { error: "messages must be an array." },
      { status: 400 }
    );
  }

  const sanitizedMessages = body.messages.filter(isChatMessage);

  if (sanitizedMessages.length === 0) {
    return NextResponse.json(
      { error: "Provide at least one valid chat message." },
      { status: 400 }
    );
  }

  try {
    const openAiResponse = await fetch(OPENAI_CHAT_COMPLETIONS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          ...sanitizedMessages,
        ],
        temperature: 0.7,
      }),
    });

    if (!openAiResponse.ok) {
      const errorText = await openAiResponse.text();
      return NextResponse.json(
        {
          error: "OpenAI request failed.",
          details: errorText,
        },
        { status: 502 }
      );
    }

    const responseBody = (await openAiResponse.json()) as OpenAIResponse;
    const assistantMessage = responseBody.choices?.[0]?.message;

    if (!assistantMessage) {
      return NextResponse.json(
        { error: "OpenAI returned no message choices." },
        { status: 502 }
      );
    }

    return NextResponse.json(assistantMessage, { status: 200 });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
