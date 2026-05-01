import { NextResponse, type NextRequest } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "Missing OPENAI_API_KEY" },
      { status: 500 },
    );
  }

  try {
    const body = await req.json();
    const { messages } = body as { messages?: unknown };

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Expected messages array" },
        { status: 400 },
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are the AI Forge Strategist. Your goal is to sell DFW contractors the $497 Profit Leak Audit. Be direct, professional, and do not offer discounts. You must collect their Name, Email, and Phone Number before concluding.",
        },
        ...messages,
      ],
      temperature: 0.7,
    });

    const message = response.choices[0]?.message;
    if (!message) {
      return NextResponse.json(
        { error: "No assistant message returned" },
        { status: 502 },
      );
    }

    return NextResponse.json(message);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
